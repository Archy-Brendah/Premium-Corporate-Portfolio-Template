"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { companyData } from "@/data/company_data";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const { nav } = companyData;

export default function Navbar() {
  const reducedMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: reducedMotion ? 0 : -40, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        scaleY: reducedMotion ? 1 : scrolled ? 0.96 : 1,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full"
    >
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-black/60 backdrop-blur-xl shadow-elite-soft"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 h-16 sm:h-[4.25rem]">
          <Link
            href="/"
            className="font-display text-platinum font-semibold text-lg tracking-tight hover:text-electric-indigo transition-colors"
          >
            {nav.logoText}
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {nav.links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-400 hover:text-platinum transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={nav.ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-electric-indigo px-5 py-2.5 text-sm font-medium text-white shadow-elite hover:bg-indigo-500 transition-colors"
            >
              {nav.ctaLabel}
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
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
          <div className="md:hidden border-t border-white/10 bg-[#050609]/95 px-4 py-4 space-y-1 backdrop-blur-xl">
            {nav.links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 px-2 text-zinc-300 font-medium hover:text-white rounded-lg hover:bg-white/5"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={nav.ctaHref}
              className="block w-full text-center rounded-full bg-electric-indigo px-4 py-3.5 text-sm font-medium text-white hover:bg-indigo-500 mt-2"
              onClick={() => setMobileOpen(false)}
            >
              {nav.ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </motion.header>
  );
}
