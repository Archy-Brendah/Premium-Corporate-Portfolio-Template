"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { companyData } from "@/data/company_data";
import MagneticButton from "./MagneticButton";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const { industry, tagline, nav } = companyData;

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 80, damping: 20 });
  const springY = useSpring(y, { stiffness: 80, damping: 20 });

  function handlePointerMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX * 0.35);
    y.set(offsetY * 0.25);
  }

  return (
    <section className="relative overflow-hidden bg-soft-dark">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(99,102,241,0.3),transparent_55%)] opacity-70" aria-hidden />

      <motion.div
        className="pointer-events-none absolute -inset-x-40 -top-40 h-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.55),transparent_60%)] blur-3xl opacity-70"
        style={{ x: reducedMotion ? 0 : springX, y: reducedMotion ? 0 : springY }}
        animate={{ scale: reducedMotion ? 1 : hovered ? 1.08 : 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        aria-hidden
      />

      <div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24"
        onMouseMove={handlePointerMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-400">
            High-End Industrial
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-platinum leading-[1.05]">
            Engineering the Future of{" "}
            <span className="text-electric-indigo">{industry}</span>.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-zinc-300 max-w-2xl leading-relaxed">
            {tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticButton
              as="a"
              href={nav.ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-electric-indigo px-7 py-3.5 text-base font-medium text-white shadow-elite hover:bg-indigo-500 transition-colors"
            >
              {nav.ctaLabel}
            </MagneticButton>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-base font-medium text-zinc-200 hover:bg-white/10 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

