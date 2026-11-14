"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import Goniometer from "@/components/Goniometer";
import { Reading } from "@/components/readings";
import type { ReadingKind } from "@/components/readings";

/* Hero instrument: one frame that pages through the different kinds of
   reading the apps produce. Advances on its own until someone picks a tab;
   pauses under the pointer; holds still under prefers-reduced-motion. */

type Tab = {
  id: string;
  label: string;
  app: string;
  href: string;
  accent: string;
  kind: ReadingKind | "angle";
};

const tabs: Tab[] = [
  { id: "cough", label: "Cough", app: "AI Cough Checker", href: "#cough-checker", accent: "#2f86d6", kind: "cough" },
  { id: "angle", label: "Angle", app: "ACL Rehab Tracker", href: "#acl-rehab-tracker", accent: "#e5484d", kind: "angle" },
  { id: "meal", label: "Meal", app: "HeartHealthAI", href: "#hearthealthai", accent: "#e23d3d", kind: "heart" },
  { id: "skin", label: "Skin", app: "DermaWhiz", href: "#dermawhiz", accent: "#c98a1b", kind: "derma" },
  { id: "gut", label: "Gut", app: "AI Gut Health", href: "#gut-health", accent: "#5d9c3f", kind: "gut" },
];

const DWELL = 5000;

export default function ReadingDeck() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(false);
  const paused = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setAuto(true);
  }, []);

  useEffect(() => {
    if (!auto) return;
    const id = window.setInterval(() => {
      if (!paused.current && !document.hidden) setActive((i) => (i + 1) % tabs.length);
    }, DWELL);
    return () => window.clearInterval(id);
  }, [auto]);

  const pick = (i: number) => {
    setAuto(false);
    setActive(i);
  };

  const onKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const next = (active + d + tabs.length) % tabs.length;
    pick(next);
    document.getElementById(`deck-tab-${tabs[next].id}`)?.focus();
  };

  const tab = tabs[active];

  return (
    <div
      className="deck reg-marks border border-line bg-sheet"
      style={{ "--a": tab.accent } as CSSProperties}
      onPointerEnter={() => (paused.current = true)}
      onPointerLeave={() => (paused.current = false)}
      onPointerDown={() => setAuto(false)}
      onFocusCapture={() => (paused.current = true)}
      onBlurCapture={() => (paused.current = false)}
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-2">
        <span className="label">Fig. 00 / Sample readings</span>
        <span className="label border border-dashed border-ink-3 px-1.5 py-0.5">Example data</span>
      </div>

      <div role="tablist" aria-label="Kinds of reading" className="grid grid-cols-5 border-b border-line" onKeyDown={onKey}>
        {tabs.map((t, i) => {
          const on = i === active;
          return (
            <button
              key={t.id}
              id={`deck-tab-${t.id}`}
              role="tab"
              type="button"
              aria-selected={on}
              aria-controls={`deck-panel-${t.id}`}
              tabIndex={on ? 0 : -1}
              onClick={() => pick(i)}
              className={`relative min-h-11 border-r border-line px-1 py-2.5 font-mono text-[0.68rem] uppercase tracking-[0.12em] transition-colors last:border-r-0 ${
                on ? "text-ink" : "text-ink-3 hover:text-ink"
              }`}
            >
              {t.label}
              {on && (
                <span
                  key={auto ? `run-${active}` : "still"}
                  className={`absolute bottom-0 left-0 h-[2px] w-full origin-left ${auto ? "deck-progress" : ""}`}
                  style={{ background: t.accent, animationDuration: `${DWELL}ms` }}
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="grid">
        {tabs.map((t, i) => {
          const on = i === active;
          return (
            <div
              key={t.id}
              id={`deck-panel-${t.id}`}
              role="tabpanel"
              aria-labelledby={`deck-tab-${t.id}`}
              aria-hidden={!on}
              inert={!on}
              className={`deck-panel col-start-1 row-start-1 flex flex-col justify-center px-4 py-5 sm:px-6 ${on ? "is-on" : ""}`}
              style={{ "--a": t.accent } as CSSProperties}
            >
              {t.kind === "angle" ? <Goniometer active={on} /> : <Reading kind={t.kind} big />}
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-line px-4 py-2.5">
        <span className="label">From</span>
        <a href={tab.href} className="link-draw truncate text-sm font-medium" style={{ color: "var(--a)" }}>
          {tab.app} &darr;
        </a>
      </div>
    </div>
  );
}
