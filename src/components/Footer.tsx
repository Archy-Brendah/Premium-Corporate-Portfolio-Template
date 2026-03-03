"use client";

import Link from "next/link";
import { companyData } from "@/data/company_data";

const { footer, certifications } = companyData;

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2">
            <p className="font-display text-white font-semibold text-lg">
              {companyData.companyName}
            </p>
            <p className="mt-3 text-sm text-slate-400 max-w-md">
              {footer.tagline}
            </p>
            {certifications?.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-4">
                {certifications.map((c) => (
                  <div
                    key={c.name}
                    className="rounded-lg border border-slate-600/80 bg-slate-800/50 px-3 py-2 text-xs"
                  >
                    <span className="font-medium text-slate-200">{c.name}</span>
                    <span className="ml-1.5 text-slate-500">{c.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          {footer.showNewsletter && (
            <div>
              <p className="font-medium text-white text-sm">{footer.newsletterTitle}</p>
              <form
                className="mt-3 flex gap-2"
                onSubmit={(e) => e.preventDefault()}
                aria-label="Newsletter signup"
              >
                <input
                  type="email"
                  placeholder={footer.newsletterPlaceholder}
                  className="flex-1 rounded-lg border border-slate-600 bg-slate-800/50 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-[#0056B3] focus:ring-1 focus:ring-[#0056B3] outline-none"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-[#0056B3] px-4 py-2 text-sm font-medium text-white hover:bg-[#004494] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          )}
          <div>
            <p className="font-medium text-white text-sm">Legal</p>
            <nav className="mt-3 space-y-2">
              {footer.legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
