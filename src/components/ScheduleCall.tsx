"use client";

import { motion } from "framer-motion";
import { companyData } from "@/data/company_data";

export default function ScheduleCall() {
  const { schedule } = companyData as any;
  if (!schedule) return null;

  return (
    <motion.section
      id="schedule-call"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-soft-dark py-16 sm:py-20 lg:py-24 scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-stretch">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
              Schedule
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-platinum">
              {schedule.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl">
              {schedule.description}
            </p>
            <p className="mt-4 text-xs text-zinc-500">
              This is a placeholder Calendly integration. Replace the URL and, if desired, swap
              the button for an embedded Calendly widget.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={schedule.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-electric-indigo px-7 py-3 text-sm font-medium text-white shadow-elite hover:bg-indigo-500 transition-colors"
              >
                {schedule.ctaLabel}
              </a>
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-[#0B0D10]/90 p-5 sm:p-6 shadow-[0_0_0_0.5px_rgba(255,255,255,0.12)_inset]">
            <div className="pointer-events-none absolute inset-px rounded-[1.1rem] bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-70" />
            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
                  Calendly Preview
                </p>
                <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-zinc-300">
                  Placeholder
                </span>
              </div>
              <div className="aspect-[4/3] rounded-xl border border-white/8 bg-[#050609] flex items-center justify-center text-center px-6">
                <p className="text-xs sm:text-sm text-zinc-500">
                  Embed your Calendly widget here (inline embed or popup). For now, use the{" "}
                  <span className="text-electric-indigo font-medium">“Open scheduling”</span> button
                  to open your Calendly page in a new tab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

