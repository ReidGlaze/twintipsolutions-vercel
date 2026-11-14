"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties } from "react";

/* Usage section: a headline total and one bar chart per app, drawn in the
   same drafting style as the rest of the sheet. Every number is real, read
   from Google Analytics on the server; this component only draws them. */

export type ChartApp = {
  id: string;
  name: string;
  icon: string;
  accent: string;
  total30: number;
  daily: { date: string; users: number }[];
  weekly: { start: string; end: string; users: number }[];
};

type Mode = "weekly" | "daily";
type Bar = { key: string; label: string; short: string; value: number };

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const day = (iso: string) => `${MONTHS[Number(iso.slice(5, 7)) - 1]} ${Number(iso.slice(8, 10))}`;
const fmt = (n: number) => n.toLocaleString("en-US");

function barsFor(app: ChartApp, mode: Mode): Bar[] {
  if (mode === "daily") {
    return app.daily.map((d) => ({ key: d.date, label: day(d.date), short: day(d.date), value: d.users }));
  }
  return app.weekly.map((w) => ({
    key: w.start,
    label: `${day(w.start)} to ${day(w.end)}`,
    short: day(w.start),
    value: w.users,
  }));
}

function Chart({ app, mode, index }: { app: ChartApp; mode: Mode; index: number }) {
  const bars = barsFor(app, mode);
  const max = Math.max(1, ...bars.map((b) => b.value));
  const [picked, setPicked] = useState<string | null>(null);
  const shown = bars.find((b) => b.key === picked) ?? bars[bars.length - 1];
  const unit = mode === "daily" ? "active that day" : "active that week";

  return (
    <article
      className="reg-marks reveal flex flex-col border border-line bg-sheet"
      style={{ "--a": app.accent } as CSSProperties}
    >
      <header className="flex items-center justify-between border-b border-line px-4 py-2">
        <span className="label">
          <span className="plate-accent">Chart {String(index + 1).padStart(2, "0")}</span>
        </span>
        <span className="label">{mode === "daily" ? "Last 30 days" : "Last 4 weeks"}</span>
      </header>

      <div className="flex items-center gap-3 px-4 pt-4">
        <Image src={app.icon} alt="" width={40} height={40} className="h-10 w-10 shrink-0 rounded-[10px] border border-line object-cover" />
        <div className="min-w-0">
          <h3 className="truncate font-display text-lg font-semibold leading-tight tracking-tight">
            <a href={`#${app.id}`} className="link-draw">
              {app.name}
            </a>
          </h3>
          <p className="text-xs text-ink-3">
            <span className="font-mono tabular-nums text-ink">{fmt(app.total30)}</span> active in 30 days
          </p>
        </div>
      </div>

      <div className="px-4 pb-4 pt-3">
        <p className="flex items-baseline justify-between gap-3 font-mono text-xs" aria-live="polite">
          <span className="text-ink-3">{shown.label}</span>
          <span className="tabular-nums">
            <b className="text-base font-semibold" style={{ color: "var(--a)" }}>
              {fmt(shown.value)}
            </b>{" "}
            <span className="text-ink-3">{unit}</span>
          </span>
        </p>

        <div className="relative mt-6">
          <span className="absolute -top-px left-0 right-0 border-t border-dashed border-line" aria-hidden="true" />
          <span className="absolute -top-4 right-0 font-mono text-[0.6rem] uppercase tracking-[0.1em] tabular-nums text-ink-3" aria-hidden="true">
            Scale top {fmt(max)}
          </span>
          <ul
            className={`flex h-32 items-end border-b border-ink-3 ${mode === "daily" ? "gap-[2px]" : "gap-3 px-2"}`}
            onPointerLeave={() => setPicked(null)}
          >
            {bars.map((b, i) => (
              <li
                key={b.key}
                tabIndex={0}
                aria-label={`${b.label}: ${fmt(b.value)} ${unit}`}
                onPointerEnter={() => setPicked(b.key)}
                onFocus={() => setPicked(b.key)}
                onBlur={() => setPicked(null)}
                className="flex h-full min-w-0 flex-1 cursor-crosshair items-end outline-offset-2"
              >
                <span
                  className="usage-bar block w-full"
                  style={{
                    height: b.value === 0 ? "1px" : `max(3px, ${((b.value / max) * 100).toFixed(2)}%)`,
                    background: b.value === 0 ? "var(--ink-3)" : "var(--a)",
                    opacity: shown.key === b.key || picked === null ? 1 : 0.45,
                    ...({ "--i": i } as CSSProperties),
                  }}
                />
              </li>
            ))}
          </ul>
          <div className="mt-1.5 flex justify-between font-mono text-[0.6rem] uppercase tracking-[0.1em] text-ink-3" aria-hidden="true">
            {mode === "daily" ? (
              <>
                <span>{bars[0].short}</span>
                <span>{bars[Math.floor(bars.length / 2)].short}</span>
                <span>{bars[bars.length - 1].short}</span>
              </>
            ) : (
              bars.map((b) => (
                <span key={b.key} className="flex-1 text-center">
                  {b.short}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function UsageCharts({
  apps,
  total30,
  readAt,
  sheet,
}: {
  apps: ChartApp[];
  total30: number;
  readAt: string;
  sheet: string;
}) {
  const [mode, setMode] = useState<Mode>("weekly");

  return (
    <section id="usage" className="scroll-mt-16 border-t border-line px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <p className="label">Sheet {sheet} / Usage</p>
            <p className="mt-4 flex flex-wrap items-baseline gap-x-5 gap-y-1">
              <span className="font-display text-[clamp(4rem,14vw,9rem)] font-semibold leading-[0.85] tracking-[-0.04em] tabular-nums text-accent">
                {fmt(total30)}
              </span>
              <span className="max-w-[18ch] font-display text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
                people used these apps in the last 30 days
              </span>
            </p>
            <p className="mt-5 max-w-[64ch] text-sm text-ink-2">
              Active users from Google Analytics, added up across {apps.length === 1 ? "one app" : `${apps.length} apps`}.
              Someone who uses two apps is counted in both. Refreshed about once an hour; last read {readAt}.
            </p>
          </div>

          <div role="group" aria-label="Chart interval" className="flex w-fit self-end border border-line">
            {(["weekly", "daily"] as Mode[]).map((m) => (
              <button
                key={m}
                type="button"
                aria-pressed={mode === m}
                onClick={() => setMode(m)}
                className={`min-h-11 px-5 font-mono text-xs uppercase tracking-[0.14em] transition-colors ${
                  mode === m ? "bg-ink text-paper" : "bg-sheet text-ink-2 hover:text-ink"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {apps.map((app, i) => (
            <Chart key={app.id} app={app} mode={mode} index={i} />
          ))}
        </div>

        <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink-3">
          Each chart has its own scale; the dashed line marks its tallest bar.{" "}
          {mode === "weekly" ? "Weekly bars count each person once per week." : "Daily bars count each person once per day."}
        </p>
      </div>
    </section>
  );
}
