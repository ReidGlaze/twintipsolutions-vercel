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
        <footer className="w-full py-6 px-4 border-t border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Twin Tip Solutions. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
