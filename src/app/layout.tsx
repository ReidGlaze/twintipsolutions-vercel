import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Twin Tip Solutions | AI-Powered Healthcare Technology",
  description: "Twin Tip Solutions develops cutting-edge AI-powered healthcare applications. Featuring DermaWhiz for skin health education and HeartHealthAI for nutrition tracking. HIPAA-compliant white-label solutions available.",
  keywords: "AI healthcare, mobile health apps, HIPAA compliant, dermatology AI, nutrition tracking, white label healthcare",
  openGraph: {
    title: "Twin Tip Solutions - AI-Powered Healthcare Technology",
    description: "Innovative healthcare applications leveraging AI/ML for better health outcomes",
    type: "website",
    url: "https://twintipsolutions.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <header className="w-full py-6 px-4 flex justify-between items-center border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-50">
          <span className="text-2xl font-bold tracking-tight">Twin Tip Solutions</span>
          <span className="text-sm text-gray-600 dark:text-gray-300 font-mono">Mobile Apps • AI • LLMs</span>
        </header>
        <main className="min-h-[80vh] flex flex-col items-center justify-center w-full">{children}</main>
        <footer className="w-full py-8 px-4 border-t border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">Legal & Compliance</h4>
                <ul className="space-y-1 text-gray-500 dark:text-gray-400 text-xs">
                  <li>• HIPAA Compliant Infrastructure</li>
                  <li>• GDPR Ready</li>
                  <li>• SOC 2 Type II (In Progress)</li>
                  <li>• End-to-End Encryption</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">Important Disclaimers</h4>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                  Our applications are for educational and informational purposes only. They do not provide medical diagnoses 
                  or replace professional medical advice. Always consult qualified healthcare providers for medical concerns.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">Contact</h4>
                <ul className="space-y-1 text-gray-500 dark:text-gray-400 text-xs">
                  <li>Email: contact@twintipsolutions.com</li>
                  <li>LinkedIn: <a href="https://www.linkedin.com/in/reidhglaze/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Reid Glaze</a></li>
                  <li>Location: United States</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Twin Tip Solutions. All rights reserved. 
                <span className="mx-2">•</span>
                <a href="/privacy" className="hover:text-gray-700 dark:hover:text-gray-300">Privacy Policy</a>
                <span className="mx-2">•</span>
                <a href="/terms" className="hover:text-gray-700 dark:hover:text-gray-300">Terms of Service</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
