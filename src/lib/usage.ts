import { createSign } from "node:crypto";
import { unstable_cache } from "next/cache";

/* Daily active users per app, read from each app's GA4 property with the
   Google Analytics Data API.

   Configuration lives only in environment variables:
     GA_SERVICE_ACCOUNT_KEY  service-account JSON key (raw JSON or base64).
                             The account needs Viewer on each GA4 property.
     GA4_PROPERTY_IDS        JSON map of app id -> GA4 property id, e.g.
                             {"cough-checker":"123456789"}
                             Where two apps share one property, give each
                             its data streams instead:
                             {"acl-rehab-tracker":{"property":"123456789",
                               "streams":["111","222"]}}

   Nothing here invents numbers. An app whose report fails is left out, and
   if nothing loads the caller gets null and the section is not rendered. */

export type DayPoint = { date: string; users: number };
export type WeekPoint = { start: string; end: string; users: number };
export type AppUsage = { id: string; total30: number; daily: DayPoint[]; weekly: WeekPoint[] };
export type Usage = { apps: AppUsage[]; total30: number; fetchedAt: string };

export const USAGE_REVALIDATE_SECONDS = 3600;

const SCOPE = "https://www.googleapis.com/auth/analytics.readonly";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const DATA_API = "https://analyticsdata.googleapis.com/v1beta";

type ServiceKey = { client_email: string; private_key: string };

function readKey(): ServiceKey | null {
  const raw = process.env.GA_SERVICE_ACCOUNT_KEY?.trim();
  if (!raw) return null;
  try {
    const json = raw.startsWith("{") ? raw : Buffer.from(raw, "base64").toString("utf8");
    const key = JSON.parse(json) as ServiceKey;
    if (!key.client_email || !key.private_key) return null;
    return { client_email: key.client_email, private_key: key.private_key.replace(/\\n/g, "\n") };
  } catch {
    return null;
  }
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

const b64url = (input: string | Buffer) => Buffer.from(input).toString("base64url");

async function accessToken(key: ServiceKey): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const unsigned = `${b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }))}.${b64url(
    JSON.stringify({ iss: key.client_email, scope: SCOPE, aud: TOKEN_URL, iat: now, exp: now + 600 }),
  )}`;
  const signature = createSign("RSA-SHA256").update(unsigned).sign(key.private_key);
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${unsigned}.${b64url(signature)}`,
    }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`token exchange failed: ${res.status}`);
  const body = (await res.json()) as { access_token?: string };
  if (!body.access_token) throw new Error("token exchange returned no token");
  return body.access_token;
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
      ],
    }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`GA4 report for ${id} failed: ${res.status}`);
  const { reports } = (await res.json()) as { reports?: Report[] };
  if (!reports || reports.length !== 3) throw new Error(`GA4 report for ${id} was incomplete`);
  const [byDay, total, byWeek] = reports;

  const timeZone = byDay.metadata?.timeZone || "UTC";
  const today = todayIn(timeZone);

  const seen = new Map<string, number>();
  for (const row of byDay.rows ?? []) {
    const v = row.dimensionValues?.[0]?.value ?? "";
    if (/^\d{8}$/.test(v)) seen.set(`${v.slice(0, 4)}-${v.slice(4, 6)}-${v.slice(6, 8)}`, count(row));
  }
  // GA4 omits days with no activity; those are genuine zeros, so fill them in.
  const daily: DayPoint[] = Array.from({ length: 30 }, (_, i) => {
    const date = shift(today, i - 30);
    return { date, users: seen.get(date) ?? 0 };
  });

  const weekRows = new Map<string, number>();
  for (const row of byWeek.rows ?? []) weekRows.set(row.dimensionValues?.[0]?.value ?? "", count(row));
  const weekly: WeekPoint[] = WEEKS.map((w) => ({
    start: shift(today, w.from),
    end: shift(today, w.to),
    users: weekRows.get(w.name) ?? 0,
  }));

  return { id, total30: count(total.rows?.[0]), daily, weekly };
}

async function load(): Promise<Usage> {
  const key = readKey();
  const sources = readSources();
  if (!key || sources.length === 0) throw new Error("usage is not configured");
  const token = await accessToken(key);
  const settled = await Promise.allSettled(sources.map((source) => fetchApp(source, token)));
  const apps: AppUsage[] = [];
  settled.forEach((r, i) => {
    if (r.status === "fulfilled") apps.push(r.value);
    else console.error(`[usage] ${sources[i].id}:`, r.reason instanceof Error ? r.reason.message : r.reason);
  });
  if (apps.length === 0) throw new Error("no GA4 property could be read");
  return { apps, total30: apps.reduce((sum, a) => sum + a.total30, 0), fetchedAt: new Date().toISOString() };
}

// Failures throw, so they are never stored: only real data is cached for the hour.
const cached = unstable_cache(load, ["ga4-usage-v1"], { revalidate: USAGE_REVALIDATE_SECONDS });

export async function getUsage(): Promise<Usage | null> {
  try {
    return await cached();
  } catch (err) {
    console.error("[usage] hidden:", err instanceof Error ? err.message : err);
    return null;
  }
}
