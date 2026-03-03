import Link from "next/link";
import { companyData } from "@/data/company_data";

const { industry, tagline, nav } = companyData;

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle grid background — premium, non-generic */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(226 232 240 / 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(226 232 240 / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />
      <div className="absolute top-0 right-0 w-[40%] max-w-xl h-full bg-gradient-to-l from-[#0056B3]/[0.03] to-transparent pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 pb-24 sm:pb-32 lg:pb-40">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.08]">
            Engineering the Future of{" "}
            <span className="text-[#0056B3]">{industry}</span>.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
            {tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={nav.ctaHref}
              className="inline-flex items-center justify-center rounded-lg bg-[#0056B3] px-6 py-3.5 text-base font-medium text-white shadow-elite hover:bg-[#004494] hover:shadow-elite-hover transition-all duration-200"
            >
              {nav.ctaLabel}
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-base font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
