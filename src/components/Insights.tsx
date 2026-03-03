import Link from "next/link";
import { companyData } from "@/data/company_data";

export default function Insights() {
  const { insights } = companyData;
  if (!insights?.length) return null;

  function formatDate(s: string) {
    try {
      return new Date(s).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    } catch {
      return s;
    }
  }

  return (
    <section id="insights" className="bg-slate-50/80 py-16 sm:py-20 lg:py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Insights
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Thought leadership and perspectives for enterprise leaders.
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {insights.map((item) => (
            <article
              key={item.id}
              className="group rounded-xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all duration-300"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-[#0056B3]">
                {item.category}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-slate-900 group-hover:text-[#0056B3] transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed line-clamp-2">
                {item.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <time className="text-xs text-slate-500" dateTime={item.date}>
                  {formatDate(item.date)}
                </time>
                <Link
                  href={`/insights/${item.slug}`}
                  className="text-sm font-medium text-[#0056B3] hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
