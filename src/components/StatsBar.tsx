import { companyData } from "@/data/company_data";

export default function StatsBar() {
  const { stats } = companyData;
  if (!stats?.length) return null;

  return (
    <section className="border-y border-slate-200/80 bg-slate-50/50" aria-label="Key metrics">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center sm:text-left"
            >
              <p className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-500 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
