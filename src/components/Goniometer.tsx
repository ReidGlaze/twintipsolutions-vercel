"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* A protractor whose arm follows the pointer. Used as the "Angle" panel of
   the hero reading deck. Server-renders at 135 degrees and sways gently
   while it is the active panel, until someone touches it. */

const W = 560;
const H = 320;
const CX = 280;
const CY = 280;
const R = 220;

const rnd = (n: number) => Math.round(n * 100) / 100;
const pt = (deg: number, r: number) => {
  const t = (deg * Math.PI) / 180;
  return [rnd(CX + r * Math.cos(t)), rnd(CY - r * Math.sin(t))] as const;
};

const ticks = Array.from({ length: 37 }, (_, i) => i * 5);

export default function Goniometer({ active = true }: { active?: boolean }) {
  const [angle, setAngle] = useState(135);
  const touched = useRef(false);

  useEffect(() => {
    if (!active || touched.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const start = performance.now();
    const loop = (now: number) => {
      if (touched.current) return;
      const t = (now - start) / 1000;
      setAngle(Math.round(105 + 30 * Math.cos(t * 0.55)));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  const fromPointer = useCallback((e: React.PointerEvent<SVGSVGElement>) => {
    const box = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - box.left) / box.width) * W - CX;
    const y = CY - ((e.clientY - box.top) / box.height) * H;
    const a = (Math.atan2(Math.max(y, 0), x) * 180) / Math.PI;
    touched.current = true;
    setAngle(Math.max(0, Math.min(180, Math.round(a))));
  }, []);

  const [ax, ay] = pt(angle, R - 8);
  const [sx, sy] = pt(angle, 78);
  const [lx, ly] = pt(angle, R + 2);
  const pct = Math.round((angle / 180) * 100);

  return (
    <div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="block w-full cursor-crosshair select-none"
        style={{ touchAction: "pan-y" }}
        onPointerMove={fromPointer}
        onPointerDown={fromPointer}
        role="img"
        aria-label={`Protractor reading ${angle} degrees`}
      >
        <path
          d={`M ${CX} ${CY} L ${CX + R - 8} ${CY} A ${R - 8} ${R - 8} 0 0 0 ${ax} ${ay} Z`}
          fill="var(--a)"
          fillOpacity="0.14"
        />
        <path
          d={`M ${CX - R} ${CY} A ${R} ${R} 0 0 1 ${CX + R} ${CY}`}
          fill="none"
          className="stroke-ink-3"
          strokeWidth="1"
        />
        {ticks.map((d) => {
          const major = d % 30 === 0;
          const mid = d % 15 === 0;
          const [x1, y1] = pt(d, R);
          const [x2, y2] = pt(d, R - (major ? 18 : mid ? 12 : 7));
          const [tx, ty] = pt(d, R + 20);
          return (
            <g key={d}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                className={major ? "stroke-ink" : "stroke-ink-3"}
                strokeWidth={major ? 1.4 : 1}
              />
              {major && (
                <text x={tx} y={ty + 4} textAnchor="middle" className="fill-ink-2 font-mono" fontSize="12">
                  {d}
                </text>
              )}
            </g>
          );
        })}
        <path d={`M ${CX + 78} ${CY} A 78 78 0 0 0 ${sx} ${sy}`} fill="none" stroke="var(--a)" strokeWidth="2" />
        <line x1={CX - R} y1={CY} x2={CX + R} y2={CY} className="stroke-line" strokeWidth="1" />
        <line
          x1={CX}
          y1={CY}
          x2={CX + R - 8}
          y2={CY}
          className="stroke-ink"
          strokeWidth="2"
          strokeDasharray="1 7"
          strokeLinecap="round"
        />
        <line x1={CX} y1={CY} x2={ax} y2={ay} className="stroke-ink" strokeWidth="3" strokeLinecap="round" />
        <line x1={ax} y1={ay} x2={lx} y2={ly} className="stroke-coral" strokeWidth="3" strokeLinecap="round" />
        <circle cx={ax} cy={ay} r="9" className="fill-sheet" stroke="var(--a)" strokeWidth="3" />
        <circle cx={CX} cy={CY} r="11" className="fill-coral" />
        <circle cx={CX} cy={CY} r="3.5" className="fill-sheet" />
      </svg>

      <div className="grid grid-cols-[auto_1fr] items-end gap-x-6 border-t border-line-soft pt-3">
        <p
          className="font-display text-6xl font-semibold leading-none tracking-tight tabular-nums"
          aria-hidden="true"
        >
          {angle}
          <span style={{ color: "var(--a)" }}>&deg;</span>
        </p>
        <div className="min-w-0 pb-1">
          <div className="flex items-baseline justify-between gap-3">
            <span className="label">Knee flexion / drag the arm</span>
            <span className="font-mono text-xs tabular-nums text-ink-2">{pct}%</span>
          </div>
          <input
            type="range"
            min={0}
            max={180}
            value={angle}
            aria-label="Arm angle in degrees"
            tabIndex={active ? 0 : -1}
            onChange={(e) => {
              touched.current = true;
              setAngle(Number(e.target.value));
            }}
            className="gonio-range mt-2 w-full"
          />
        </div>
      </div>
    </div>
  );
}
