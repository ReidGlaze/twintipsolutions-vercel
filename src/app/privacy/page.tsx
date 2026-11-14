import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Twin Tip Solutions",
  description:
    "How Twin Tip Solutions apps collect, use and protect your information.",
};

const principles: [string, string][] = [
  ["Secure by design", "Encrypted in transit, with data kept on your device where possible."],
  ["Minimal collection", "We collect only what is necessary to run the service."],
  ["Your control", "Your data is yours. Delete it or ask us to at any time."],
];

export default function Privacy() {
  return (
    <div className="w-full">
      <section className="relative border-b border-line">
        <div className="grid-bg grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 lg:pb-16 lg:pt-20">
          <p className="label hero-in flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-accent" />
            Sheet 04 / Privacy
          </p>
          <h1 className="hero-in mt-5 font-display text-[clamp(2.6rem,8vw,5.2rem)] font-semibold leading-[0.92] tracking-[-0.035em]">
            Privacy Policy
          </h1>
          <p className="hero-in mt-6 max-w-[52ch] text-lg text-ink-2">
            Twin Tip Solutions is committed to protecting the privacy and security of your data.
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-ink-3">
            Effective July 30, 2025 / Last updated November 14, 2026
          </p>
        </div>
        <div className="relative border-t border-line bg-paper">
          <ul className="mx-auto grid max-w-7xl px-4 sm:px-6 md:grid-cols-3">
            {principles.map(([t, d]) => (
              <li key={t} className="border-line-soft py-5 max-md:border-b md:border-r md:px-5 md:first:border-l">
                <p className="font-display text-lg font-semibold tracking-tight">{t}</p>
                <p className="mt-1 text-sm text-ink-2">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:py-16">
        <div className="policy mx-auto max-w-3xl">
          <h2 className="!mt-0"><span>01</span>Introduction</h2>
          <p>
            Twin Tip Solutions LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) develops
            AI-powered mobile applications for health and wellness (the &quot;Service&quot;). Our
            apps include AI Cough Checker, ACL Rehab Tracker, HeartHealthAI, DermaWhiz, AI Gut
            Health and IBS Tracker, and Shoulder Rehab: ROM Tracker. An app&apos;s own privacy
            policy, where it has one, applies to that app. This Privacy Policy explains how we
            collect, use, and protect your information when you use our applications.
          </p>

          <h2><span>02</span>Information We Collect</h2>
          <ul>
            <li><strong>On-Device Only:</strong> Photos and analysis results stored encrypted on your device</li>
            <li><strong>Account Information:</strong> Email address and basic profile information (if you create an account)</li>
            <li><strong>Technical Data:</strong> Anonymous device information for app functionality</li>
            <li><strong>Usage Analytics:</strong> Anonymous usage metrics to improve app performance</li>
            <li><strong>No Background Collection:</strong> We do not collect location, contacts, or other personal data</li>
          </ul>

          <h2><span>03</span>How Your Data Is Handled</h2>
          <ul>
            <li>All personal data stays on your device by default</li>
            <li>AI processing happens with minimal cloud storage</li>
            <li>Photos and health data are not stored on our servers</li>
            <li>You control what data you choose to share</li>
          </ul>

          <h2><span>04</span>Data Sharing and Disclosure</h2>
          <p>We share information only as follows:</p>
          <ul>
            <li><strong>Service Providers:</strong> Google Cloud Platform and other trusted providers under strict privacy terms</li>
            <li><strong>Legal Requirements:</strong> Only when required by law with appropriate protections</li>
            <li><strong>With Your Consent:</strong> Only when you explicitly choose to share information</li>
            <li><strong>Never For:</strong> Marketing, advertising, data sales, or AI training on your personal data</li>
          </ul>

          <h2><span>05</span>Data Security</h2>
          <ul>
            <li><strong>Encryption:</strong> AES-256 encryption at rest and in transit</li>
            <li><strong>Access Control:</strong> Role-based access with TOTP 2FA</li>
          </ul>

          <h2><span>06</span>Data Retention and Deletion</h2>
          <ul>
            <li><strong>On-Device Data:</strong> Controlled entirely by you. Delete it anytime from your device</li>
            <li><strong>Account Data:</strong> Retained while your account is active</li>
            <li><strong>Analytics Data:</strong> Anonymous data retained to improve app performance</li>
            <li><strong>Deletion Rights:</strong> You can request account and data deletion at any time</li>
          </ul>

          <h2><span>07</span>Your Rights</h2>
          <p>As a user, you have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of data</li>
            <li>Export data in standard formats</li>
            <li>Opt out of non-essential communications</li>
          </ul>

          <h2><span>08</span>International Data Transfers</h2>
          <p>Data may be processed in the United States. We ensure appropriate safeguards through:</p>
          <ul>
            <li>Google Cloud Platform&apos;s global infrastructure</li>
            <li>Standard contractual clauses where required</li>
            <li>Adherence to applicable data protection laws</li>
          </ul>

          <h2><span>09</span>Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy to reflect changes in our practices or legal
            requirements. When we make material changes we will update the &quot;Last
            updated&quot; date on this page.
          </p>

          <h2><span>10</span>Contact Information</h2>
          <ul>
            <li><strong>Company:</strong> Twin Tip Solutions LLC</li>
            <li>
              <strong>Email and privacy inquiries:</strong>{" "}
              <a href="mailto:reid@twintipsolutions.com" className="link-draw text-ink">reid@twintipsolutions.com</a>
            </li>
          </ul>

          <div className="reg-marks mt-10 border border-line bg-sheet p-5">
            <p className="label !text-coral">Medical disclaimer</p>
            <p className="!mb-0 mt-2 text-sm">
              Twin Tip Solutions&apos; applications are for educational purposes only and do not
              provide medical diagnoses, treatment recommendations, or medical advice. Users should
              always consult qualified healthcare providers for medical concerns.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
