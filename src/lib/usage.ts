import { getVercelOidcToken } from "@vercel/functions/oidc";
import { unstable_cache } from "next/cache";

/* Daily active users per app, read from each app's GA4 property with the
   Google Analytics Data API.

   There is no stored Google credential. Vercel issues each deployment a
   short-lived OIDC identity token; Google's Security Token Service accepts
   it through a workload identity provider that trusts only this Vercel
   project, and that federated token is used to borrow a read-only service
   account for a few minutes. The account needs Viewer on each GA4 property.

   Configuration lives in environment variables, none of them secret:
     GCP_WORKLOAD_IDENTITY_PROVIDER  projects/<number>/locations/global/
                                     workloadIdentityPools/<pool>/providers/<id>
     GCP_SERVICE_ACCOUNT_EMAIL       the read-only service account
     GA4_PROPERTY_IDS                JSON map of app id -> GA4 property id, e.g.
                                     {"cough-checker":"123456789"}
                                     Where two apps share one property, give each
                                     its data streams instead:
                                     {"acl-rehab-tracker":{"property":"123456789",
                                       "streams":["111","222"]}}

   Nothing here invents numbers. An app whose report fails is left out, and
   if nothing loads the caller gets null and the section is not rendered. */

/* users is the de-duplicated count for the bar. ios / android / web are the
   same people broken out by GA4's platform dimension; someone active on two
   platforms is counted in each, so the parts can add up to slightly more. */
export type Platforms = { ios: number; android: number; web: number };
export type DayPoint = { date: string; users: number } & Platforms;
export type WeekPoint = { start: string; end: string; users: number } & Platforms;
export type AppUsage = { id: string; total30: number; daily: DayPoint[]; weekly: WeekPoint[] };
export type Usage = { apps: AppUsage[]; total30: number; fetchedAt: string };

export const USAGE_REVALIDATE_SECONDS = 3600;

const SCOPE = "https://www.googleapis.com/auth/analytics.readonly";
const STS_URL = "https://sts.googleapis.com/v1/token";
const IAM_API = "https://iamcredentials.googleapis.com/v1";
const DATA_API = "https://analyticsdata.googleapis.com/v1beta";

type Identity = { provider: string; serviceAccount: string };

function readIdentity(): Identity | null {
  const provider = process.env.GCP_WORKLOAD_IDENTITY_PROVIDER?.trim().replace(/^\/\/iam\.googleapis\.com\//, "");
  const serviceAccount = process.env.GCP_SERVICE_ACCOUNT_EMAIL?.trim();
  if (!provider || !serviceAccount) return null;
  if (!/^projects\/\d+\/locations\/global\/workloadIdentityPools\/[\w-]+\/providers\/[\w-]+$/.test(provider)) return null;
  if (!/^[\w.-]+@[\w.-]+\.iam\.gserviceaccount\.com$/.test(serviceAccount)) return null;
  return { provider, serviceAccount };
}

type Source = { id: string; property: string; streams: string[] };

function readSources(): Source[] {
  try {
    const map = JSON.parse(process.env.GA4_PROPERTY_IDS ?? "{}") as Record<string, unknown>;
    return Object.entries(map).flatMap(([id, value]) => {
      const entry = (typeof value === "object" && value !== null ? value : { property: value }) as {
        property?: unknown;
        streams?: unknown;
      };
      const property = String(entry.property ?? "").replace(/^properties\//, "");
      const streams = Array.isArray(entry.streams) ? entry.streams.map(String).filter((x) => /^\d+$/.test(x)) : [];
      return /^\d+$/.test(property) ? [{ id, property, streams }] : [];
    });
  } catch {
    return [];
  }
}

async function accessToken({ provider, serviceAccount }: Identity): Promise<string> {
  // 1. Vercel's identity token for this deployment (build env or request context).
  const oidc = await getVercelOidcToken();

  // 2. Trade it for a Google federated token through the workload identity provider.
  const sts = await fetch(STS_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      grantType: "urn:ietf:params:oauth:grant-type:token-exchange",
      audience: `//iam.googleapis.com/${provider}`,
      scope: "https://www.googleapis.com/auth/cloud-platform",
      requestedTokenType: "urn:ietf:params:oauth:token-type:access_token",
      subjectTokenType: "urn:ietf:params:oauth:token-type:jwt",
      subjectToken: oidc,
    }),
    cache: "no-store",
  });
  if (!sts.ok) throw new Error(`token exchange failed: ${sts.status}`);
  const federated = ((await sts.json()) as { access_token?: string }).access_token;
  if (!federated) throw new Error("token exchange returned no token");

  // 3. Borrow the read-only service account, scoped to Analytics read access only.
  const res = await fetch(`${IAM_API}/projects/-/serviceAccounts/${encodeURIComponent(serviceAccount)}:generateAccessToken`, {
    method: "POST",
    headers: { authorization: `Bearer ${federated}`, "content-type": "application/json" },
    body: JSON.stringify({ scope: [SCOPE], lifetime: "600s" }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`service account impersonation failed: ${res.status}`);
  const token = ((await res.json()) as { accessToken?: string }).accessToken;
  if (!token) throw new Error("service account impersonation returned no token");
  return token;
}

/* Calendar maths on plain YYYY-MM-DD strings, anchored to the property's
   own time zone so "yesterday" means what Google Analytics means by it. */
function todayIn(timeZone: string): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
}
function shift(date: string, days: number): string {
  const d = new Date(`${date}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

type Row = { dimensionValues?: { value?: string }[]; metricValues?: { value?: string }[] };
type Report = { rows?: Row[]; metadata?: { timeZone?: string } };

const count = (row: Row | undefined) => {
  const n = Number(row?.metricValues?.[0]?.value ?? 0);
  if (!Number.isFinite(n)) throw new Error("non-numeric metric value");
  return n;
};

const noPlatforms = (): Platforms => ({ ios: 0, android: 0, web: 0 });
function addPlatform(into: Platforms, platform: string, n: number) {
  const p = platform.toLowerCase();
  if (p === "ios") into.ios += n;
  else if (p === "android") into.android += n;
  else if (p === "web") into.web += n;
}

const WEEKS = [
  { name: "w0", startDate: "28daysAgo", endDate: "22daysAgo", from: -28, to: -22 },
  { name: "w1", startDate: "21daysAgo", endDate: "15daysAgo", from: -21, to: -15 },
  { name: "w2", startDate: "14daysAgo", endDate: "8daysAgo", from: -14, to: -8 },
  { name: "w3", startDate: "7daysAgo", endDate: "yesterday", from: -7, to: -1 },
];

async function fetchApp({ id, property, streams }: Source, token: string): Promise<AppUsage> {
  const metrics = [{ name: "activeUsers" }];
  // Apps that share a property are told apart by their data streams.
  const scope = streams.length
    ? { dimensionFilter: { filter: { fieldName: "streamId", inListFilter: { values: streams } } } }
    : {};
  const last30 = [{ startDate: "30daysAgo", endDate: "yesterday" }];
  const res = await fetch(`${DATA_API}/properties/${property}:batchRunReports`, {
    method: "POST",
    headers: { authorization: `Bearer ${token}`, "content-type": "application/json" },
    body: JSON.stringify({
      requests: [
        { dateRanges: last30, dimensions: [{ name: "date" }], metrics, limit: 100, ...scope },
        { dateRanges: last30, metrics, ...scope },
        { dateRanges: WEEKS.map(({ name, startDate, endDate }) => ({ name, startDate, endDate })), metrics, ...scope },
        { dateRanges: last30, dimensions: [{ name: "date" }, { name: "platform" }], metrics, limit: 500, ...scope },
        {
          dateRanges: WEEKS.map(({ name, startDate, endDate }) => ({ name, startDate, endDate })),
          dimensions: [{ name: "platform" }],
          metrics,
          ...scope,
        },
      ],
    }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`GA4 report for ${id} failed: ${res.status}`);
  const { reports } = (await res.json()) as { reports?: Report[] };
  if (!reports || reports.length !== 5) throw new Error(`GA4 report for ${id} was incomplete`);
  const [byDay, total, byWeek, byDayPlatform, byWeekPlatform] = reports;

  const timeZone = byDay.metadata?.timeZone || "UTC";
  const today = todayIn(timeZone);

  const seen = new Map<string, number>();
  for (const row of byDay.rows ?? []) {
    const v = row.dimensionValues?.[0]?.value ?? "";
    if (/^\d{8}$/.test(v)) seen.set(`${v.slice(0, 4)}-${v.slice(4, 6)}-${v.slice(6, 8)}`, count(row));
  }
  // GA4 omits days with no activity; those are genuine zeros, so fill them in.
  const dayPlatforms = new Map<string, Platforms>();
  for (const row of byDayPlatform.rows ?? []) {
    const v = row.dimensionValues?.[0]?.value ?? "";
    if (!/^\d{8}$/.test(v)) continue;
    const date = `${v.slice(0, 4)}-${v.slice(4, 6)}-${v.slice(6, 8)}`;
    const entry = dayPlatforms.get(date) ?? noPlatforms();
    addPlatform(entry, row.dimensionValues?.[1]?.value ?? "", count(row));
    dayPlatforms.set(date, entry);
  }
  const daily: DayPoint[] = Array.from({ length: 30 }, (_, i) => {
    const date = shift(today, i - 30);
    return { date, users: seen.get(date) ?? 0, ...(dayPlatforms.get(date) ?? noPlatforms()) };
  });

  const weekRows = new Map<string, number>();
  for (const row of byWeek.rows ?? []) weekRows.set(row.dimensionValues?.[0]?.value ?? "", count(row));
  // With several date ranges GA4 appends the range name as the last dimension.
  const weekPlatforms = new Map<string, Platforms>();
  for (const row of byWeekPlatform.rows ?? []) {
    const dims = (row.dimensionValues ?? []).map((d) => d.value ?? "");
    const range = dims[dims.length - 1];
    const entry = weekPlatforms.get(range) ?? noPlatforms();
    addPlatform(entry, dims[0], count(row));
    weekPlatforms.set(range, entry);
  }
  const weekly: WeekPoint[] = WEEKS.map((w) => ({
    start: shift(today, w.from),
    end: shift(today, w.to),
    users: weekRows.get(w.name) ?? 0,
    ...(weekPlatforms.get(w.name) ?? noPlatforms()),
  }));

  return { id, total30: count(total.rows?.[0]), daily, weekly };
}

class Incomplete extends Error {}

async function load(requireAll: boolean): Promise<Usage> {
  const identity = readIdentity();
  const sources = readSources();
  if (!identity || sources.length === 0) throw new Error("usage is not configured");
  const token = await accessToken(identity);
  const settled = await Promise.allSettled(sources.map((source) => fetchApp(source, token)));
  const apps: AppUsage[] = [];
  settled.forEach((r, i) => {
    if (r.status === "fulfilled") apps.push(r.value);
    else if (!requireAll) console.error(`[usage] ${sources[i].id}:`, r.reason instanceof Error ? r.reason.message : r.reason);
  });
  if (apps.length === 0) throw new Error("no GA4 property could be read");
  if (requireAll && apps.length < sources.length) throw new Incomplete();
  return { apps, total30: apps.reduce((sum, a) => sum + a.total30, 0), fetchedAt: new Date().toISOString() };
}

/* Failures throw, so they are never stored. A read where every app loaded is
   kept for the hour. A read where some apps failed is kept for only a few
   minutes, so an app that was briefly unreadable comes back quickly. */
const cachedComplete = unstable_cache(() => load(true), ["ga4-usage-complete-v3"], { revalidate: USAGE_REVALIDATE_SECONDS });
const cachedPartial = unstable_cache(() => load(false), ["ga4-usage-partial-v3"], { revalidate: 300 });

export async function getUsage(): Promise<Usage | null> {
  try {
    return await cachedComplete();
  } catch (err) {
    if (!(err instanceof Incomplete)) {
      console.error("[usage] hidden:", err instanceof Error ? err.message : err);
      return null;
    }
  }
  try {
    return await cachedPartial();
  } catch (err) {
    console.error("[usage] hidden:", err instanceof Error ? err.message : err);
    return null;
  }
}
