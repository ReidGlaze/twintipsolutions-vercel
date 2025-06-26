import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
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
  title: "Twin Tip Solutions | HIPAA-Aligned AI for Dermatology Clinics",
  description: "Transform your dermatology practice with AI-powered skin analysis. Improve efficiency, enhance patient outcomes. Professional security designed for healthcare.",
  keywords: "dermatology AI, HIPAA aligned software, clinic management, skin analysis AI, medical AI, dermatology clinic software, white label healthcare, dermatology app solutions",
  openGraph: {
    title: "Twin Tip Solutions - AI Solutions for Dermatology Clinics",
    description: "HIPAA-aligned AI platform that helps dermatology clinics improve efficiency and care quality",
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
        <Navigation />
        <main className="min-h-[80vh] w-full">{children}</main>
        <footer className="w-full py-8 px-4 border-t border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">Security & Privacy</h4>
                <ul className="space-y-1 text-gray-500 dark:text-gray-400 text-xs">
                  <li>• HIPAA-Aligned Design</li>
                  <li>• Multi-Layer Encryption</li>
                  <li>• On-Device Storage</li>
                  <li>• Privacy by Design</li>
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
                  <li>Email: reid@twintipsolutions.com</li>
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
