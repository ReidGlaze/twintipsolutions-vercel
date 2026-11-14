import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Twin Tip Solutions",
  description:
    "Reid Glaze is the AI/ML engineer behind Twin Tip Solutions and its six health and recovery apps for iPhone and Android.",
};

const facts: [string, string][] = [
  ["Role", "Engineer, designer, support desk"],
  ["Education", "MS Mechanical Engineering, University of Colorado Boulder. Focus: AI/ML applications"],
  ["Builds with", "Native iOS and Android, computer vision, language models"],
  ["Shipping", "Six apps on the App Store and Google Play"],
];

export default function About() {
  return (
    <div className="w-full">
      <section className="relative border-b border-line">
        <div className="grid-bg grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 lg:pb-20 lg:pt-20">
          <p className="label hero-in flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-accent" />
            Sheet 02 / About
          </p>
          <h1 className="hero-in mt-5 max-w-[14ch] font-display text-[clamp(2.8rem,9vw,6rem)] font-semibold leading-[0.92] tracking-[-0.035em]">
            One engineer, <span className="text-accent">six apps</span>.
          </h1>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <figure className="reg-marks self-start border border-line bg-sheet">
            <div className="grid-bg flex justify-center p-8">
              <Image
                src="https://avatars.githubusercontent.com/u/104596386?s=400&u=aedeb59c60ebbb50eda60fae2981b401621e2848&v=4"
                alt="Reid Glaze"
                width={220}
                height={220}
                className="h-[220px] w-[220px] rounded-full border border-line object-cover"
              />
            </div>
            <figcaption className="flex items-center justify-between border-t border-line px-4 py-2">
              <span className="label">Fig. 00 / Reid Glaze</span>
              <a
                href="https://www.linkedin.com/in/reidhglaze/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw font-mono text-xs uppercase tracking-[0.14em] text-ink-2 hover:text-ink"
              >
                LinkedIn &#8599;
              </a>
            </figcaption>
          </figure>

          <div>
            <p className="font-display text-2xl font-medium leading-snug tracking-tight sm:text-[2rem]">
              Reid Glaze trained as a mechanical engineer and moved into machine learning. Twin Tip
              Solutions is the result: apps that use a phone&rsquo;s camera and microphone to{" "}
              <span className="text-accent">measure something useful</span> about your health.
            </p>
            <p className="mt-6 max-w-[62ch] leading-relaxed text-ink-2">
              The apps started with questions that are hard to answer by feel. Is my knee
              straightening further than it did last week? Which of the things I ate set my stomach
              off? Each one hands back a number or a record you can follow over time.
            </p>

            <dl className="mt-10 border-t border-line">
              {facts.map(([k, v]) => (
                <div key={k} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <dt className="label pt-1">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href="/#apps" className="store-btn">
                <b>See the apps</b>
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="/contact" className="link-draw font-mono text-xs uppercase tracking-[0.14em] text-ink-2 hover:text-ink">
                Get in touch &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
