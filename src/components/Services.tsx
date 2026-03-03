import { companyData } from "@/data/company_data";
import ServiceIcon from "./ServiceIcon";

type IconName = "consulting" | "strategy" | "design" | "development";

export default function Services() {
  const { services } = companyData;

  return (
    <section id="services" className="bg-white py-18 sm:py-22 lg:py-28 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            End-to-end expertise to help you grow and scale.
          </p>
        </div>
        <div className="mt-14 sm:mt-18 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col p-6 sm:p-8 rounded-2xl border border-slate-200/80 bg-white shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all duration-300"
            >
              <ServiceIcon name={service.icon as IconName} />
              <h3 className="mt-6 font-display text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
