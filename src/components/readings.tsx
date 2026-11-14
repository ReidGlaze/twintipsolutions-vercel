import type { CSSProperties, ReactNode } from "react";

/* Sample readings, one per app, each in that app's own kind of output.
   Every value here is invented example data, and is labelled as such
   wherever it is shown. Colours come from --a on the nearest ancestor. */

export type ReadingKind = "cough" | "acl" | "heart" | "derma" | "gut" | "shoulder";

const idx = (i: number) => ({ "--i": i }) as CSSProperties;
const rnd = (n: number) => Math.round(n * 100) / 100;

function Rows({ rows, big }: { rows: [string, ReactNode][]; big?: boolean }) {
  return (
    <dl className={big ? "text-base" : "text-sm"}>
      {rows.map(([k, v]) => (
        <div
          key={k}
          className="grid grid-cols-[6.75rem_1fr] gap-3 border-b border-line-soft py-1.5 last:border-b-0"
        >
          <dt className="label pt-[3px]">{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ---------------------------------------------------------------- angle */

function Gauge({
  label,
  value,
  mark,
  markLabel,
  big,
}: {
  label: string;
  value: number;
  mark: number;
  markLabel: string;
  big?: boolean;
}) {
  const r = 46;
  const cx = 60;
  const cy = 54;
  const p = (d: number, rr = r) => {
    const t = (d * Math.PI) / 180;
    return [rnd(cx + rr * Math.cos(t)), rnd(cy - rr * Math.sin(t))] as const;
  };
  const [vx, vy] = p(value);
  const [m1x, m1y] = p(mark, r - 8);
  const [m2x, m2y] = p(mark, r + 6);
  return (
    <div className="min-w-0">
      <svg viewBox="0 0 120 62" className={`block w-full ${big ? "max-w-[220px]" : "max-w-[150px]"}`} aria-hidden="true">
        <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`} fill="none" className="stroke-ink-3" strokeWidth="1" />
        <path d={`M ${cx + r} ${cy} A ${r} ${r} 0 0 0 ${vx} ${vy}`} fill="none" stroke="var(--a)" strokeWidth="5" />
        <line x1={cx - r - 4} y1={cy} x2={cx + r + 4} y2={cy} className="stroke-line" strokeWidth="1" />
        <line x1={cx} y1={cy} x2={vx} y2={vy} className="stroke-ink" strokeWidth="1.6" strokeLinecap="round" />
        <line x1={m1x} y1={m1y} x2={m2x} y2={m2y} className="stroke-coral" strokeWidth="2" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r="3.2" className="fill-coral" />
      </svg>
      <p className={`mt-1 font-display font-semibold leading-none tracking-tight tabular-nums ${big ? "text-5xl" : "text-3xl"}`}>
        {value}
        <span style={{ color: "var(--a)" }}>&deg;</span>
      </p>
      <p className="label mt-1.5">{label}</p>
      <p className="mt-0.5 text-xs text-ink-3">
        {markLabel} {mark}&deg;
      </p>
    </div>
  );
}

function AclReading({ big }: { big?: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-5">
      <Gauge label="Flexion" value={118} mark={135} markLabel="Goal" big={big} />
      <Gauge label="Extension" value={4} mark={0} markLabel="Goal" big={big} />
    </div>
  );
}

function ShoulderReading({ big }: { big?: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-5">
      <Gauge label="Flexion" value={142} mark={168} markLabel="Good side" big={big} />
      <Gauge label="Abduction" value={96} mark={160} markLabel="Good side" big={big} />
    </div>
  );
}

/* ---------------------------------------------------------------- cough */

function CoughReading({ big }: { big?: boolean }) {
  const n = 96;
  const bars = Array.from({ length: n }, (_, i) => {
    const x = i / n;
    const burst = (c: number, w: number, a: number) => a * Math.exp(-Math.pow((x - c) / w, 2));
    const env =
      burst(0.16, 0.035, 1) + burst(0.26, 0.05, 0.55) + burst(0.52, 0.03, 0.85) + burst(0.6, 0.06, 0.4) + burst(0.84, 0.04, 0.7);
    const jitter = 0.55 + 0.45 * Math.abs(Math.sin(i * 12.9898) * Math.cos(i * 4.1414));
    return rnd(Math.min(1, 0.03 + env * jitter));
  });
  return (
    <div>
      <svg viewBox={`0 0 ${n * 6} 120`} className="block w-full" preserveAspectRatio="none" style={{ height: big ? 130 : 96 }} aria-hidden="true">
        <line x1="0" y1="60" x2={n * 6} y2="60" className="stroke-line" strokeWidth="1" />
        {bars.map((b, i) => (
          <rect
            key={i}
            x={i * 6 + 1}
            y={rnd(60 - b * 56)}
            width="3"
            height={rnd(Math.max(2, b * 112))}
            fill="var(--a)"
            opacity={b > 0.12 ? 1 : 0.4}
            className="wave-bar"
            style={idx(i)}
          />
        ))}
      </svg>
      <div className="mb-3 mt-2 flex items-center justify-between">
        <span className="label flex items-center gap-2">
          <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-coral" />
          Rec
        </span>
        <span className="label">00:06</span>
      </div>
      <Rows
        big={big}
        rows={[
          ["Heard", "3 coughs in 6 seconds"],
          ["Result", <b key="r" className="font-semibold">Dry cough pattern</b>],
          ["Since last", "Fewer coughs than Tuesday"],
        ]}
      />
    </div>
  );
}

/* ---------------------------------------------------------------- heart */

function HeartReading({ big }: { big?: boolean }) {
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-5">
      <svg viewBox="0 0 100 100" className={big ? "w-36" : "w-24"} aria-hidden="true">
        <circle cx="50" cy="50" r="47" className="fill-sheet stroke-ink" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="36" fill="none" className="stroke-ink-3" strokeWidth="1" strokeDasharray="2 4" />
        <g className="pie">
          <path d="M50 50 L50 14 A36 36 0 0 1 84.2 61.1 Z" fill="var(--a)" opacity="0.9" />
          <path d="M50 50 L84.2 61.1 A36 36 0 0 1 25.3 76.2 Z" fill="var(--a)" opacity="0.45" />
          <path d="M50 50 L25.3 76.2 A36 36 0 0 1 50 14 Z" fill="var(--a)" opacity="0.18" />
        </g>
        <circle cx="50" cy="50" r="3" className="fill-sheet stroke-ink" strokeWidth="1.5" />
      </svg>
      <div className="min-w-0">
        <p className="label">Meal</p>
        <p className={`font-medium ${big ? "text-lg" : ""}`}>Salmon, brown rice, broccoli</p>
        <p className="mt-2 flex items-baseline gap-2">
          <span className={`font-display font-semibold leading-none tracking-tight tabular-nums ${big ? "text-6xl" : "text-4xl"}`}>86</span>
          <span className="label">/ 100 heart score</span>
        </p>
        <div className="mt-2 h-1.5 bg-line-soft">
          <div className="gauge h-full" style={{ width: "86%", background: "var(--a)" }} />
        </div>
        <p className="mt-2 font-mono text-xs text-ink-2">Sodium low / Sat. fat low / Fiber high</p>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- derma */

function DermaReading({ big }: { big?: boolean }) {
  return (
    <div className="grid items-center gap-4 min-[520px]:grid-cols-[auto_minmax(0,1fr)] min-[520px]:gap-5">
      <svg viewBox="0 0 100 100" className={big ? "w-24 min-[520px]:w-36" : "w-24"} aria-hidden="true">
        <rect x="6" y="6" width="88" height="88" fill="none" className="stroke-ink-3" strokeWidth="1" strokeDasharray="3 4" />
        <path d="M6 20V6h14M80 6h14v14M94 80v14H80M20 94H6V80" fill="none" className="stroke-ink" strokeWidth="1.6" />
        <path
          d="M38 40 C44 30, 60 31, 66 41 C73 50, 68 64, 57 68 C46 72, 34 66, 33 54 C32 48, 34 44, 38 40 Z"
          fill="var(--a)"
          fillOpacity="0.3"
          stroke="var(--a)"
          strokeWidth="1.6"
        />
        <circle cx="46" cy="47" r="2" fill="var(--a)" />
        <circle cx="57" cy="57" r="1.5" fill="var(--a)" />
        <path d="M50 22v10M50 76v-6M22 50h8M78 50h-8" className="stroke-ink-3" strokeWidth="1" />
        <path d="M60 86h24M60 83v6M84 83v6" className="stroke-ink" strokeWidth="1" />
        <text x="72" y="81" textAnchor="middle" className="fill-ink-2 font-mono" fontSize="7">
          1 cm
        </text>
      </svg>
      <Rows
        big={big}
        rows={[
          ["Looks like", <b key="l" className="font-semibold">A dry, slightly red patch</b>],
          ["Often", "Seen with eczema-type dry skin"],
          ["See a doctor", "If it spreads, bleeds or hurts"],
        ]}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ gut */

function GutReading({ big }: { big?: boolean }) {
  const foods: [string, string, number, string][] = [
    ["Garlic", "High", 0.8, "before 4 of 5 bad days"],
    ["Onion", "High", 0.6, "before 3 of 5 bad days"],
    ["Apple", "Moderate", 0.4, "before 2 of 5 bad days"],
  ];
  return (
    <div>
      <p className="label mb-1">Likely triggers / last 30 days</p>
      <ol>
        {foods.map(([name, level, share, note], i) => (
          <li key={name} className="border-b border-line-soft py-2 last:border-b-0">
            <div className="flex items-baseline justify-between gap-3">
              <span className={`font-medium ${big ? "text-lg" : ""}`}>
                <span className="mr-2 font-mono text-xs text-ink-3">{i + 1}</span>
                {name}
              </span>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em]" style={{ color: level === "High" ? "var(--coral)" : "var(--ink-2)" }}>
                {level} FODMAP
              </span>
            </div>
            <div className="mt-1.5 flex items-center gap-3">
              <div className="h-1.5 flex-1 bg-line-soft">
                <div className="gauge h-full" style={{ width: `${share * 100}%`, background: "var(--a)", ...idx(i) }} />
              </div>
              <span className="shrink-0 text-xs text-ink-3">{note}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* --------------------------------------------------------------- export */

export function Reading({ kind, big }: { kind: ReadingKind; big?: boolean }) {
  switch (kind) {
    case "cough":
      return <CoughReading big={big} />;
    case "acl":
      return <AclReading big={big} />;
    case "heart":
      return <HeartReading big={big} />;
    case "derma":
      return <DermaReading big={big} />;
    case "gut":
      return <GutReading big={big} />;
    case "shoulder":
      return <ShoulderReading big={big} />;
  }
}

export function ReadingFrame({ children, fill }: { children: ReactNode; fill?: boolean }) {
  return (
    <div className={`flex flex-col bg-sheet ${fill ? "h-full" : ""}`}>
      <div className="flex items-center justify-between gap-3 px-5 pt-4 sm:px-7">
        <span className="label plate-accent">Sample reading</span>
        <span className="label border border-dashed border-ink-3 px-1.5 py-0.5">Example data</span>
      </div>
      <div className={`px-5 pb-5 pt-3 sm:px-7 ${fill ? "flex flex-1 flex-col justify-center" : ""}`}>{children}</div>
    </div>
  );
}
