"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { companyData } from "@/data/company_data";

const { nav } = companyData;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-200 ${
        scrolled ? "bg-white/98 backdrop-blur-md shadow-card" : "bg-white/95 backdrop-blur-sm border-b border-slate-200/80"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 h-16 sm:h-[4.25rem]">
        <Link
          href="/"
          className="font-display text-slate-900 font-semibold text-lg tracking-tight hover:text-[#0056B3] transition-colors"
        >
          {nav.logoText}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {nav.links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-600 text-sm font-medium hover:text-[#0056B3] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={nav.ctaHref}
            className="inline-flex items-center justify-center rounded-lg bg-[#0056B3] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#004494] transition-colors"
          >
            {nav.ctaLabel}
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1">
          {nav.links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 px-2 text-slate-600 font-medium hover:text-[#0056B3] rounded-lg hover:bg-slate-50"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={nav.ctaHref}
            className="block w-full text-center rounded-lg bg-[#0056B3] px-4 py-3.5 text-sm font-medium text-white hover:bg-[#004494] mt-2"
            onClick={() => setMobileOpen(false)}
          >
            {nav.ctaLabel}
          </Link>
        </div>
      )}
    </header>
  );
}
