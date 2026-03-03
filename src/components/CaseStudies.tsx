import Link from "next/link";
import { companyData } from "@/data/company_data";

export default function CaseStudies() {
  const { caseStudies } = companyData;

  return (
    <section id="portfolio" className="bg-slate-50/80 py-18 sm:py-22 lg:py-28 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Case Studies
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Selected projects and results we&apos;ve delivered for enterprise clients.
          </p>
        </div>
        <div className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="group rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-slate-200/80 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200/80"
                  aria-hidden
                />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#0056B3]">
                  {study.category}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-slate-900 group-hover:text-[#0056B3] transition-colors">
                  {study.title}
                </h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed line-clamp-2">
                  {study.excerpt}
                </p>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="mt-5 inline-flex items-center text-sm font-medium text-[#0056B3] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0056B3] focus-visible:ring-offset-2 rounded"
                >
                  {study.readMoreLabel}
                  <span className="ml-1.5" aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
