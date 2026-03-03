"use client";

import { motion } from "framer-motion";
import { companyData } from "@/data/company_data";

const { companyName, tagline } = companyData;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="bg-soft-dark py-18 sm:py-22 lg:py-28 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={container}
        >
          <motion.h2
            variants={item}
            className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-platinum"
          >
            About {companyName}
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-6 text-lg text-zinc-400 leading-relaxed"
          >
            {tagline} We combine deep industry expertise with a disciplined approach to delivery,
            helping organizations navigate complexity and achieve lasting results.
          </motion.p>
          <motion.p
            variants={item}
            className="mt-4 text-zinc-400 leading-relaxed"
          >
            Our team brings decades of experience across strategy, design, and implementation—
            ready to partner with growth-oriented companies who demand excellence.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
