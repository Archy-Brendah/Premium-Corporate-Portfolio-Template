"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { companyData } from "@/data/company_data";

const CONSENT_KEY = "corporate-portfolio-cookie-consent";

export default function CookieConsent() {
  const config = companyData.cookieConsent;
  const [mounted, setMounted] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = typeof window !== "undefined" ? localStorage.getItem(CONSENT_KEY) : null;
    if (stored === "accepted") setAccepted(true);
  }, []);

  function accept() {
    if (typeof window !== "undefined") localStorage.setItem(CONSENT_KEY, "accepted");
    setAccepted(true);
  }

  if (!config?.enabled || !mounted || accepted) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/98 backdrop-blur-sm shadow-elite p-4 sm:p-5"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600">
          {config.message}{" "}
          <Link
            href={config.policyHref || "/privacy"}
            className="font-medium text-[#0056B3] hover:underline"
          >
            {config.policyLabel}
          </Link>
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={accept}
            className="rounded-lg bg-[#0056B3] px-4 py-2 text-sm font-medium text-white hover:bg-[#004494] transition-colors"
          >
            {config.acceptLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
