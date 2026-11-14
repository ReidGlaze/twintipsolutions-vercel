import { NextResponse } from "next/server";
import { getUsage, USAGE_REVALIDATE_SECONDS } from "@/lib/usage";

/* Public, read-only: daily active users per app for the last 30 days.
   Fetched server-side from GA4 and cached for about an hour, so visitors
   never trigger an Analytics API call themselves. */
export const revalidate = 3600;

export async function GET() {
  const usage = await getUsage();
  if (!usage) {
    return NextResponse.json({ error: "usage unavailable" }, { status: 503, headers: { "cache-control": "no-store" } });
  }
  return NextResponse.json(usage, {
    headers: { "cache-control": `public, s-maxage=${USAGE_REVALIDATE_SECONDS}, stale-while-revalidate=600` },
  });
}
