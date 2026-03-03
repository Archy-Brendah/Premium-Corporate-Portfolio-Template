import { companyData } from "@/data/company_data";

export default function About() {
  const { companyName, tagline } = companyData;

  return (
    <section id="about" className="bg-white py-18 sm:py-22 lg:py-28 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            About {companyName}
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            {tagline} We combine deep industry expertise with a disciplined approach to delivery,
            helping organizations navigate complexity and achieve lasting results.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Our team brings decades of experience across strategy, design, and implementation—
            ready to partner with growth-oriented companies who demand excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
