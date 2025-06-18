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
  title: "Twin Tip Solutions | Mobile App Development & AI",
  description: "Twin Tip Solutions specializes in mobile app development, AI, and LLMs. Discover our apps: HeartHealthAI for nutrition tracking and DermaWhiz for skin health education.",
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
        <footer className="w-full py-6 px-4 text-center text-xs text-gray-500 border-t border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-md">
          © {new Date().getFullYear()} Twin Tip Solutions. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
