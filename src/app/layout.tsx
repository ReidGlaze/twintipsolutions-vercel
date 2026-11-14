import type { Metadata } from "next";
import Link from "next/link";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://twintipsolutions.com"),
  title: "Twin Tip Solutions | Health apps that measure, by Reid Glaze",
  description:
    "Twin Tip Solutions builds health and recovery apps that turn a phone photo into a number you can track: AI Cough Checker, ACL Rehab Tracker, HeartHealthAI, DermaWhiz, AI Gut Health and IBS Tracker and Shoulder Rehab ROM Tracker. Built by AI/ML engineer Reid Glaze.",
  keywords: [
    "Twin Tip Solutions",
    "Reid Glaze",
    "AI/ML engineer",
    "computer vision",
    "mobile apps",
    "Shoulder Rehab ROM Tracker",
    "ACL Rehab Tracker",
    "Gut Health IBS Tracker",
    "HeartHealthAI",
    "DermaWhiz",
    "AI Cough Checker",
    "range of motion tracking",
  ],
  openGraph: {
    title: "Twin Tip Solutions - Health apps that measure",
    description:
      "AI Cough Checker, ACL Rehab Tracker, HeartHealthAI, DermaWhiz, AI Gut Health and Shoulder Rehab. Tracking and education tools for iPhone and Android, built by Reid Glaze.",
    type: "website",
    url: "https://twintipsolutions.com",
    siteName: "Twin Tip Solutions",
  },
  twitter: {
    card: "summary",
    title: "Twin Tip Solutions - Health apps that measure",
    description:
      "Six tracking and education apps for iPhone and Android, built by AI/ML engineer Reid Glaze.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-paper text-ink`}
      >
        <Navigation />
        <main className="min-h-[80vh] w-full">{children}</main>

        {/* Footer: a drafting title block */}
        <footer className="w-full border-t border-line">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-2 border-x border-line md:grid-cols-[1.4fr_1.3fr_0.7fr_1.5fr_0.6fr]">
              <div className="col-span-2 border-b border-line p-5 md:col-span-1 md:border-b-0 md:border-r">
                <p className="label">Title</p>
                <p className="mt-1 font-display text-xl font-semibold tracking-tight">
                  Twin Tip Solutions LLC
                </p>
                <p className="mt-1 text-sm text-ink-2">
                  Health and recovery apps for iPhone and Android.
                </p>
              </div>
              <div className="border-b border-r border-line p-5 md:border-b-0">
                <p className="label">Drawn by</p>
                <p className="mt-1 text-sm font-medium">Reid Glaze</p>
                <a
                  href="mailto:reid@twintipsolutions.com"
                  className="link-draw mt-1 inline-block break-words text-[0.8rem] text-ink-2 hover:text-ink"
                >
                  reid@twintipsolutions.com
                </a>
              </div>
              <div className="border-b border-line p-5 md:border-b-0 md:border-r">
                <p className="label">Index</p>
                <ul className="mt-1 space-y-1 text-sm">
                  <li>
                    <Link href="/about" className="link-draw text-ink-2 hover:text-ink">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="link-draw text-ink-2 hover:text-ink">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="link-draw text-ink-2 hover:text-ink">
                      Privacy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="border-r border-line p-5">
                <p className="label">Elsewhere</p>
                <ul className="mt-1 space-y-1 text-sm">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/reidhglaze/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-draw text-ink-2 hover:text-ink"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <div className="p-5">
                <p className="label">Rev</p>
                <p className="mt-1 font-mono text-sm">{year}</p>
                <p className="mt-1 text-xs text-ink-3">All rights reserved.</p>
              </div>
            </div>
          </div>
          <div className="border-t border-line">
            <p className="mx-auto max-w-7xl px-4 py-3 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-3 sm:px-6">
              Tracking and education tools. Not medical devices. Not a substitute for a clinician.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
