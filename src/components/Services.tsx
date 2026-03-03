"use client";

import { motion } from "framer-motion";
import { companyData } from "@/data/company_data";

export default function Services() {
  const { services } = companyData;

  const layoutClasses = [
    "lg:col-span-3 lg:row-span-2", // hero tile
    "lg:col-span-3 lg:row-span-1",
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-4 lg:row-span-1",
  ];

  return (
    <section
      id="services"
      className="relative scroll-mt-16 bg-soft-dark py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
            Services
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-platinum">
            High-impact capabilities for complex work.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl">
            Structured to support large-scale, multi-stakeholder initiatives with high reliability and clarity.
          </p>
        </div>

        <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-6 auto-rows-[minmax(160px,auto)] gap-4 lg:gap-5">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0D10]/90 p-6 sm:p-7 lg:p-8 shadow-[0_0_0_0.5px_rgba(255,255,255,0.08)_inset] backdrop-blur-sm ${layoutClasses[index] ?? "lg:col-span-3"}`}
            >
              <div className="pointer-events-none absolute inset-px rounded-[1.1rem] bg-gradient-to-br from-white/4 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold text-platinum">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between text-xs text-zinc-500">
                  <span className="inline-flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-electric-indigo" />
                    Enterprise-ready
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Detail on request →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

