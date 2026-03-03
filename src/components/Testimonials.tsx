"use client";

import { useState, useEffect } from "react";
import { companyData } from "@/data/company_data";

export default function Testimonials() {
  const { testimonials } = companyData;
  const [active, setActive] = useState(0);
  const length = testimonials?.length ?? 0;

  useEffect(() => {
    if (length <= 1) return;
    const t = setInterval(() => {
      setActive((i) => (i + 1) % length);
    }, 6000);
    return () => clearInterval(t);
  }, [length]);

  if (!length) return null;
  const current = testimonials[active];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24" aria-label="Client testimonials">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <blockquote className="text-center">
          <p className="font-display text-xl sm:text-2xl lg:text-3xl font-medium text-slate-900 leading-snug tracking-tight">
            &ldquo;{current.quote}&rdquo;
          </p>
          <footer className="mt-8">
            <p className="font-semibold text-slate-900">{current.author}</p>
            <p className="text-sm text-slate-500">
              {current.role}, {current.company}
            </p>
          </footer>
        </blockquote>
        {testimonials.length > 1 && (
          <div className="mt-10 flex justify-center gap-2" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`View testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-[#0056B3]" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
