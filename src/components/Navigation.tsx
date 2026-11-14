"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home", index: "01" },
  { href: "/about", label: "About", index: "02" },
  { href: "/contact", label: "Contact", index: "03" },
];

/* Two tips, one mark. */
function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 24 C4 12, 10 6, 16 6" />
      <path d="M28 24 C28 12, 22 6, 16 6" />
      <circle cx="16" cy="6" r="2.4" fill="var(--coral)" stroke="none" />
      <path d="M4 24h24" strokeDasharray="2 3" opacity="0.6" />
    </svg>
  );
}

const Navigation = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6" aria-label="Primary">
        <Link
          href="/"
          className="flex items-center gap-2.5 py-3.5 font-display text-lg font-semibold tracking-tight"
          onClick={() => setIsMenuOpen(false)}
        >
          <Mark className="h-7 w-7 text-accent" />
          <span>
            Twin Tip <span className="font-normal text-ink-2">Solutions</span>
          </span>
        </Link>

        <ul className="hidden items-stretch md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href} className="border-l border-line last:border-r">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex h-full items-center gap-2 px-5 font-mono text-xs uppercase tracking-[0.14em] transition-colors ${
                    active ? "text-ink" : "text-ink-2 hover:text-ink"
                  }`}
                >
                  <span className="text-[0.6rem] text-ink-3">{item.index}</span>
                  {item.label}
                  <span
                    className={`absolute inset-x-0 bottom-0 h-[2px] bg-accent transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                    style={{ transformOrigin: "left" }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
            {isMenuOpen ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M3 7h18M3 12h18M3 17h12" />
            )}
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div id="mobile-menu" className="border-t border-line bg-paper md:hidden">
          <ul>
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href} className="border-b border-line-soft last:border-b-0">
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-baseline gap-4 px-5 py-4 font-display text-2xl tracking-tight ${
                      active ? "text-accent" : "text-ink"
                    }`}
                  >
                    <span className="font-mono text-xs text-ink-3">{item.index}</span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
