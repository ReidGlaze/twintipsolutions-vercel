import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import ReadingDeck from "@/components/ReadingDeck";
import { Reading, ReadingFrame } from "@/components/readings";
import type { ReadingKind } from "@/components/readings";
import UsageCharts from "@/components/UsageCharts";
import type { ChartApp } from "@/components/UsageCharts";
import { getUsage } from "@/lib/usage";
import Interactions from "@/components/Interactions";

/* ------------------------------------------------------------------ data */

type Shot = { src: string; w: number; h: number; alt: string; framed?: boolean };

type App = {
  fig: string;
  id: string;
  name: string;
  kind: string;
  icon: string;
  accent: string;
  pitch: string;
  spec: [string, string][];
  appStore?: string;
  googlePlay: string;
  website?: string;
};

const shoulder: App = {
  fig: "06",
  id: "shoulder-rehab",
  name: "Shoulder Rehab: ROM Tracker",
  kind: "Range of motion",
  icon: "/art/icon-ShoulderRehabIcon.png",
  accent: "#12a08c",
  pitch:
    "Stand side-on, raise your arm, take a photo. The app marks your joints and reads the angle, so every week of rehab has a number next to it.",
  spec: [
    ["Input", "One photo, side-on"],
    ["Output", "Flexion and abduction, in degrees"],
    ["For", "Rotator cuff, frozen shoulder, post-surgery rehab"],
  ],
  googlePlay: "https://play.google.com/store/apps/details?id=com.twintipsolutions.shoulderrehab",
  website: "https://shoulderrehab.twintipsolutions.com",
};

const acl: App = {
  fig: "02",
  id: "acl-rehab-tracker",
  name: "ACL Rehab Tracker",
  kind: "Range of motion",
  icon: "/art/icon-AppIcon.png",
  accent: "#e5484d",
  pitch:
    "Knee extension and flexion from a photo of your leg, charted against the goals you are working toward.",
  spec: [
    ["Input", "One photo of the knee, from the side"],
    ["Output", "Extension and flexion, in degrees"],
    ["For", "ACL reconstruction recovery"],
  ],
  appStore: "https://apps.apple.com/us/app/acl-rehab-tracker/id6758809797",
  googlePlay: "https://play.google.com/store/apps/details?id=com.twintipsolutions.aclrehabtracker",
  website: "https://aclrehabtracker.vercel.app",
};

const gut: App = {
  fig: "05",
  id: "gut-health",
  name: "AI Gut Health and IBS Tracker",
  kind: "Food and symptoms",
  icon: "/art/icon-GutHealthIcon.png",
  accent: "#5d9c3f",
  pitch:
    "Photograph a meal and it is broken into foods with a FODMAP rating for each. Log symptoms alongside and watch for the patterns.",
  spec: [
    ["Input", "Meal photos, symptom check-ins"],
    ["Output", "Per-food FODMAP ratings, trends over time"],
    ["For", "IBS and sensitive stomachs"],
  ],
  appStore: "https://apps.apple.com/us/app/ai-gut-health-and-ibs-tracker/id6759844665",
  googlePlay: "https://play.google.com/store/apps/details?id=com.twintipsolutions.guthealth",
};

const derma: App = {
  fig: "04",
  id: "dermawhiz",
  name: "DermaWhiz: AI Skin Analyzer",
  kind: "Skin education",
  icon: "/art/icon-derma-icon.png",
  accent: "#c98a1b",
  pitch:
    "A photo of your skin comes back as a plain-language description, questions worth asking a provider, and sources you can read. Education, not diagnosis.",
  spec: [
    ["Input", "One photo of the skin"],
    ["Output", "Description, questions to ask, cited sources"],
    ["For", "Getting more out of a dermatology visit"],
  ],
  appStore: "https://apps.apple.com/us/app/dermawhiz-ai-skin-analyzer/id6746768900",
  googlePlay: "https://play.google.com/store/apps/details?id=com.twintipsolutions.DermaBuddy",
};

const heart: App = {
  fig: "03",
  id: "hearthealthai",
  name: "HeartHealthAI",
  kind: "Nutrition",
  icon: "/art/icon-heart-logo.png",
  accent: "#e23d3d",
  pitch:
    "Point the camera at your plate. Calories and macros are filled in for you, with a heart-health score for the meal.",
  spec: [
    ["Input", "A photo of the meal"],
    ["Output", "Calories, macros, heart-health score"],
    ["For", "Eating with your heart in mind"],
  ],
  appStore: "https://apps.apple.com/us/app/hearthealthai-meal-analyzer/id6743356123",
  googlePlay: "https://play.google.com/store/apps/details?id=com.reidglaze.hearthealthai",
};

const cough: App = {
  fig: "01",
  id: "cough-checker",
  name: "AI Cough Checker",
  kind: "Respiratory",
  icon: "/art/icon-CoughAppIcon.png",
  accent: "#2f86d6",
  pitch:
    "Record a cough and a machine-learning model listens to the sound, giving you a way to keep an eye on your breathing over time.",
  spec: [
    ["Input", "A few seconds of audio"],
    ["Output", "Machine-learning read of the cough"],
    ["For", "Keeping track of a lingering cough"],
  ],
  appStore: "https://apps.apple.com/us/app/ai-cough-checker/id6748887358",
  googlePlay: "https://play.google.com/store/apps/details?id=com.twintipsolutions.cough",
};

const allApps = [cough, acl, heart, derma, gut, shoulder];

const shots: Record<string, Shot[]> = {
  shoulder: [
    { src: "/art/shoulder-home.webp", w: 1000, h: 1758, alt: "Shoulder Rehab home screen showing right shoulder flexion of 161 degrees and abduction of 105 degrees", framed: true },
    { src: "/art/shoulder-detail.webp", w: 1000, h: 1632, alt: "Shoulder Rehab measurement of a raised arm with joints marked, reading 161 degrees of flexion", framed: true },
    { src: "/art/shoulder-progress.webp", w: 700, h: 1231, alt: "Shoulder Rehab progress chart of flexion climbing from 64 to 161 degrees", framed: true },
  ],
  acl: [
    { src: "/art/acl-measure.webp", w: 640, h: 1387, alt: "ACL Rehab Tracker measuring knee extension from a photo" },
    { src: "/art/acl-progress.webp", w: 640, h: 1387, alt: "ACL Rehab Tracker progress screen with extension at 35 degrees and flexion at 90 degrees" },
  ],
  gut: [
    { src: "/art/gut-scanner.webp", w: 640, h: 1387, alt: "AI Gut Health meal log listing foods with high, moderate and low FODMAP tags" },
    { src: "/art/gut-dashboard.webp", w: 640, h: 1387, alt: "AI Gut Health dashboard with logging streak and daily checklist" },
  ],
  derma: [
    { src: "/art/derma-analysis.webp", w: 914, h: 1900, alt: "DermaWhiz analysis results with a description and severity estimate", framed: true },
    { src: "/art/derma-history.webp", w: 883, h: 1835, alt: "DermaWhiz history list of past analyses", framed: true },
  ],
};

/* ------------------------------------------------------------- components */

function StoreButtons({ app }: { app: App }) {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      {app.appStore ? (
        <a
          href={app.appStore}
          target="_blank"
          rel="noopener noreferrer"
          className="store-btn"
          aria-label={`${app.name} on the App Store`}
        >
          <FaApple className="text-2xl" aria-hidden="true" />
          <span>
            <small>Download on the</small>
            <b>App Store</b>
          </span>
        </a>
      ) : (
        <span className="store-btn store-pending" aria-label={`${app.name} for iPhone is in Apple review`}>
          <FaApple className="text-2xl" aria-hidden="true" />
          <span>
            <small>iPhone</small>
            <b>In Apple review</b>
          </span>
        </span>
      )}
      <a
        href={app.googlePlay}
        target="_blank"
        rel="noopener noreferrer"
        className="store-btn"
        aria-label={`${app.name} on Google Play`}
      >
        <FaGooglePlay className="text-xl" aria-hidden="true" />
        <span>
          <small>Get it on</small>
          <b>Google Play</b>
        </span>
      </a>
      {app.website && (
        <a
          href={app.website}
          target="_blank"
          rel="noopener noreferrer"
          className="link-draw font-mono text-xs uppercase tracking-[0.14em] text-ink-2 hover:text-ink"
        >
          Website &#8599;
        </a>
      )}
    </div>
  );
}

function Info({ app }: { app: App }) {
  return (
    <div className="flex h-full flex-col p-5 sm:p-7">
      <div className="flex items-start gap-4">
        <Image
          src={app.icon}
          alt=""
          width={64}
          height={64}
          className="h-16 w-16 shrink-0 rounded-[14px] border border-line object-cover"
        />
        <div className="min-w-0">
          <p className="label plate-accent">{app.kind}</p>
          <h3 className="mt-1 font-display text-2xl font-semibold leading-[1.05] tracking-tight sm:text-3xl">
            {app.name}
          </h3>
        </div>
      </div>
      <p className="mt-5 max-w-[46ch] text-[1.02rem] leading-relaxed text-ink-2">{app.pitch}</p>
      <dl className="mt-6 border-t border-line-soft text-sm">
        {app.spec.map(([k, v]) => (
          <div key={k} className="grid grid-cols-[4.5rem_1fr] gap-3 border-b border-line-soft py-2">
            <dt className="label pt-[3px]">{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-auto pt-6">
        <StoreButtons app={app} />
      </div>
    </div>
  );
}

function Plate({
  app,
  reading,
  className = "",
  children,
  wide = false,
}: {
  app: App;
  reading: ReadingKind;
  className?: string;
  children?: ReactNode;
  wide?: boolean;
}) {
  return (
    <article
      id={app.id}
      className={`plate reg-marks reveal flex scroll-mt-24 flex-col border border-line bg-sheet ${className}`}
      style={{ "--a": app.accent } as CSSProperties}
    >
      <div className="plate-glow" aria-hidden="true" />
      <header className="flex items-center justify-between border-b border-line px-5 py-2 sm:px-7">
        <span className="label whitespace-nowrap">
          <span className="plate-accent">Fig. {app.fig}</span> / 06
        </span>
        <span className="label flex items-center gap-2 whitespace-nowrap">
          <span className="plate-rule inline-block h-1.5 w-1.5 rounded-full" />
          {app.appStore ? "iPhone + Android" : "Android / iOS in review"}
        </span>
      </header>
      <div className={`grid flex-1 ${wide ? "lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]" : "grid-rows-[auto_1fr]"}`}>
        <Info app={app} />
        <div className={`flex min-w-0 flex-col border-t border-line ${wide ? "lg:border-l lg:border-t-0" : ""}`}>
          <div className={children ? "border-b border-line" : "flex-1"}>
            <ReadingFrame fill={!children}>
              <Reading kind={reading} />
            </ReadingFrame>
          </div>
          {children && <div className="relative flex-1 overflow-hidden">{children}</div>}
        </div>
      </div>
    </article>
  );
}

function Shots({ items, tall = false }: { items: Shot[]; tall?: boolean }) {
  const h = tall ? "h-[340px] sm:h-[380px]" : "h-[320px] sm:h-[360px]";
  return (
    <div className="grid-bg h-full">
      <div className="strip flex h-full items-end justify-start gap-4 overflow-x-auto px-5 pb-0 pt-8 sm:justify-center sm:gap-6">
        {items.map((s, i) =>
          s.framed ? (
            <Image
              key={s.src}
              src={s.src}
              alt={s.alt}
              width={s.w}
              height={s.h}
              sizes="(max-width: 640px) 60vw, 300px"
              className={`shot ${h} w-auto max-w-none shrink-0 translate-y-6 ${i % 2 ? "sm:translate-y-12" : ""}`}
            />
          ) : (
            <div key={s.src} className={`shot bezel shrink-0 translate-y-6 ${i % 2 ? "sm:translate-y-12" : ""}`}>
              <Image
                src={s.src}
                alt={s.alt}
                width={s.w}
                height={s.h}
                sizes="(max-width: 640px) 50vw, 240px"
                className={`${h} w-auto max-w-none`}
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ page */

// Rebuild this page about once an hour so the usage numbers stay current
// without calling Google Analytics per visitor.
export const revalidate = 3600;

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default async function Home() {
  const usage = await getUsage();
  // Only apps that actually returned data get a chart, in the same order as the cards.
  const charts: ChartApp[] = usage
    ? allApps.flatMap((app) => {
        const u = usage.apps.find((x) => x.id === app.id);
        return u ? [{ ...u, name: app.name.split(":")[0], icon: app.icon, accent: app.accent }] : [];
      })
    : [];
  const read = usage ? new Date(usage.fetchedAt) : null;
  const readAt = read
    ? `${MONTHS[read.getUTCMonth()]} ${read.getUTCDate()}, ${String(read.getUTCHours()).padStart(2, "0")}:${String(read.getUTCMinutes()).padStart(2, "0")} UTC`
    : "";
  const showUsage = usage !== null && charts.length > 0;

  return (
    <div className="w-full">
      <Interactions />
      {/* Hero */}
      <section className="relative border-b border-line">
        <div className="grid-bg grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-12 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-14 lg:pb-20 lg:pt-20">
          <div className="hero-in">
            <p className="label flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-accent" />
              Sheet 01 / AI health readings
            </p>
            <h1 className="mt-5 font-display text-[clamp(3.1rem,10.5vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.035em]">
              Point a phone.
              <br />
              Get a <span className="relative whitespace-nowrap text-accent">reading
                <svg viewBox="0 0 300 14" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-3 w-full" aria-hidden="true">
                  <path d="M2 9 C 60 2, 120 12, 180 6 S 270 4, 298 8" fill="none" stroke="var(--coral)" strokeWidth="3" strokeLinecap="round" pathLength={1} className="squiggle" />
                </svg>
              </span>
              .
            </h1>
            <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-ink-2 sm:text-xl">
              Twin Tip Solutions is a small studio for AI health apps. Each one takes something
              your phone can capture, like a bent knee, a plate of food, a patch of skin or a few
              seconds of coughing, and hands back a reading you can follow over time.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a href="#apps" className="store-btn">
                <b>See the six apps</b>
                <span aria-hidden="true">&darr;</span>
              </a>
              <Link href="/about" className="link-draw font-mono text-xs uppercase tracking-[0.14em] text-ink-2 hover:text-ink">
                Who draws these &rarr;
              </Link>
            </div>
          </div>
          <div className="hero-in [animation-delay:150ms]">
            <ReadingDeck />
            <p className="mt-3 text-sm text-ink-3">
              Five kinds of reading across six apps. Pick a tab, or drag the arm on Angle.
            </p>
          </div>
        </div>

        {/* Index strip */}
        <div className="relative border-t border-line bg-paper">
          <ul className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-6">
            {allApps.map((a, i) => (
              <li key={a.id} style={{ "--i": i } as CSSProperties} className="index-item border-line-soft max-lg:border-b lg:border-r lg:first:border-l">
                <a
                  href={`#${a.id}`}
                  className="group flex items-center gap-3 px-1 py-3 sm:px-3"
                  style={{ "--a": a.accent } as CSSProperties}
                >
                  <Image src={a.icon} alt="" width={36} height={36} className="h-9 w-9 shrink-0 rounded-[9px] border border-line object-cover transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-[-4deg]" />
                  <span className="min-w-0">
                    <span className="label block">Fig. {a.fig}</span>
                    <span className="block truncate text-sm font-medium">{a.name.split(":")[0].replace("AI Gut Health and IBS Tracker", "AI Gut Health")}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Apps */}
      <section id="apps" className="scroll-mt-16 px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid items-end gap-4 md:grid-cols-[1fr_auto]">
            <div>
              <p className="label">Sheet 02 / The apps</p>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-none tracking-tight sm:text-6xl">
                Six figures.
              </h2>
            </div>
            <p className="max-w-[40ch] text-ink-2 md:text-right">
              Each one takes something your phone can capture and gives back something you can
              follow from week to week.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            <Plate app={cough} reading="cough" wide className="lg:col-span-12" />
            <Plate app={acl} reading="acl" className="lg:col-span-7">
              <Shots items={shots.acl} />
            </Plate>
            <Plate app={heart} reading="heart" className="lg:col-span-5" />
            <Plate app={derma} reading="derma" className="lg:col-span-7">
              <Shots items={shots.derma} />
            </Plate>
            <Plate app={gut} reading="gut" className="lg:col-span-5">
              <Shots items={shots.gut} />
            </Plate>
            <Plate app={shoulder} reading="shoulder" wide className="lg:col-span-12">
              <Shots items={shots.shoulder} tall />
            </Plate>
          </div>

          <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink-3">
            Sample readings use made-up example data, not real results. All apps are tracking and
            education tools, not medical devices.
          </p>
        </div>
      </section>

      {showUsage && (
        <UsageCharts
          apps={charts}
          total30={charts.reduce((sum, c) => sum + c.total30, 0)}
          readAt={readAt}
          sheet="03"
        />
      )}

      {/* Drawn by + revisions */}
      <section className="border-t border-line bg-paper-2 px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <div className="reveal">
            <p className="label">Sheet {showUsage ? "04" : "03"} / Drawn by</p>
            <p className="mt-4 font-display text-3xl font-medium leading-[1.12] tracking-tight sm:text-[2.6rem]">
              Reid Glaze is an AI/ML engineer with a mechanical engineer&rsquo;s habit of{" "}
              <span className="text-accent">measuring things</span>. Twin Tip Solutions is where
              that habit turns into apps.
            </p>
            <p className="mt-6 max-w-[58ch] text-ink-2">
              MS in Mechanical Engineering from CU Boulder with an AI/ML focus. Every app here is
              built natively for iPhone and Android, with computer vision and language models doing
              the reading.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.14em]">
              <a href="mailto:reid@twintipsolutions.com" className="link-draw text-ink hover:text-accent">
                reid@twintipsolutions.com
              </a>
              <a href="https://www.linkedin.com/in/reidhglaze/" target="_blank" rel="noopener noreferrer" className="link-draw text-ink hover:text-accent">
                LinkedIn &#8599;
              </a>
              <Link href="/contact" className="link-draw text-ink hover:text-accent">
                Contact &rarr;
              </Link>
            </div>
          </div>

          <div className="reveal self-end">
            <table className="w-full border border-line bg-sheet text-left text-sm">
              <caption className="label border border-b-0 border-line bg-sheet px-4 py-2 text-left">
                Revisions
              </caption>
              <thead>
                <tr className="border-b border-line">
                  <th className="label w-14 px-4 py-2 font-normal">Rev</th>
                  <th className="label px-4 py-2 font-normal">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-line-soft">
                  <td className="px-4 py-3 font-mono text-xs text-accent">B</td>
                  <td className="px-4 py-3">Six consumer apps on the App Store and Google Play.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 align-top font-mono text-xs text-ink-3">A</td>
                  <td className="px-4 py-3 text-ink-2">
                    Earlier project:{" "}
                    <a href="https://ovscribe.com" target="_blank" rel="noopener noreferrer" className="link-draw font-medium text-ink hover:text-accent">
                      OVScribe
                    </a>
                    , an AI medical scribe for clinicians.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
