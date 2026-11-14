import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Twin Tip Solutions",
  description: "Get in touch with Reid Glaze at Twin Tip Solutions about any of the apps.",
};

const channels = [
  {
    label: "Email",
    value: "reid@twintipsolutions.com",
    note: "App support, feedback, press, anything else. Mention which app and whether you are on iPhone or Android.",
    href: "mailto:reid@twintipsolutions.com",
    external: false,
  },
  {
    label: "Call",
    value: "Book 30 minutes",
    note: "Pick a time on the calendar.",
    href: "https://calendly.com/reid-twintipsolutions/30min",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Reid Glaze",
    note: "Connect or send a message.",
    href: "https://www.linkedin.com/in/reidhglaze/",
    external: true,
  },
];

export default function Contact() {
  return (
    <div className="w-full">
      <section className="relative border-b border-line">
        <div className="grid-bg grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 lg:pb-20 lg:pt-20">
          <p className="label hero-in flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-accent" />
            Sheet 03 / Contact
          </p>
          <h1 className="hero-in mt-5 font-display text-[clamp(2.8rem,9vw,6rem)] font-semibold leading-[0.92] tracking-[-0.035em]">
            Say <span className="text-accent">hello</span>.
          </h1>
          <p className="hero-in mt-6 max-w-[48ch] text-lg text-ink-2">
            Messages go straight to the person who writes the code, so bug reports tend to get
            fixed.
          </p>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:py-20">
        <ul className="mx-auto max-w-7xl border-t border-line">
          {channels.map((c, i) => (
            <li key={c.label} className="border-b border-line">
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group grid items-baseline gap-x-8 gap-y-1 py-7 transition-colors hover:bg-sheet sm:grid-cols-[7rem_minmax(0,1fr)_minmax(0,18rem)_2rem] sm:px-4"
              >
                <span className="label">
                  0{i + 1} / {c.label}
                </span>
                <span className="break-words font-display text-3xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-5xl">
                  {c.value}
                </span>
                <span className="text-sm text-ink-2">{c.note}</span>
                <span
                  className="hidden font-mono text-xl text-ink-3 transition-transform group-hover:translate-x-1 group-hover:text-accent sm:block"
                  aria-hidden="true"
                >
                  {c.external ? "↗" : "→"}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
