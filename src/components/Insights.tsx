"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
    <section id="insights" className="bg-soft-dark py-16 sm:py-20 lg:py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-platinum">
              Insights
            </h2>
            <p className="mt-3 text-lg text-zinc-400">
              Thought leadership and perspectives for enterprise leaders.
            </p>
          </div>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {insights.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-[#0B0D10]/90 p-6 sm:p-8 shadow-[0_0_0_0.5px_rgba(255,255,255,0.08)_inset] hover:border-white/20 transition-colors"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-electric-indigo">
                {item.category}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-platinum group-hover:text-electric-indigo transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 text-zinc-400 text-sm leading-relaxed line-clamp-2">
                {item.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <time className="text-xs text-zinc-500" dateTime={item.date}>
                  {formatDate(item.date)}
                </time>
                <Link
                  href={`/insights/${item.slug}`}
                  className="text-sm font-medium text-electric-indigo hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
