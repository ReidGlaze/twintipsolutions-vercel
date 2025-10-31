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
  title: "Twin Tip Solutions | AI/ML Engineer & Healthcare App Developer",
  description: "AI/ML engineer building intelligent healthcare applications. Creator of DermaWhiz, HeartHealthAI, and OVScribe - leveraging machine learning and computer vision for better health outcomes.",
  keywords: "AI engineer, machine learning, healthcare AI, mobile app development, DermaWhiz, HeartHealthAI, OVScribe, skin analysis AI, medical AI, health tech",
  openGraph: {
    title: "Twin Tip Solutions - AI/ML Engineer & Healthcare App Developer",
    description: "Creator of DermaWhiz, HeartHealthAI, and OVScribe. Building intelligent healthcare applications with machine learning and computer vision.",
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
