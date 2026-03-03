import { companyData } from "@/data/company_data";

export default function TrustBar() {
  const { partners } = companyData;

  return (
    <section className="bg-white py-14 sm:py-18 border-y border-slate-200/80" aria-label="Trusted by">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-10 sm:mb-12">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 lg:gap-x-20">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center h-12 w-36 sm:h-14 sm:w-40 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              title={partner.name}
            >
              <div
                className="h-10 w-28 sm:h-12 sm:w-32 border border-slate-200 rounded-lg flex items-center justify-center text-slate-400 text-xs font-medium bg-slate-50/80"
                aria-hidden
              >
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
