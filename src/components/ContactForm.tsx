"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { companyData } from "@/data/company_data";

const { contact } = companyData as any;
const {
  formTitle,
  formSubtitle,
  fields,
  submitLabel,
  successMessage,
  submitEndpoint,
  inquiryTypes,
} = contact;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(submitEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        toast.success(successMessage);
      } else {
        setStatus("error");
        toast.error("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setStatus("error");
      toast.error("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <section
      id="contact"
      className="bg-soft-dark py-16 sm:py-20 lg:py-24 scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="max-w-xl">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-platinum">
                {formTitle}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-zinc-400">
                {formSubtitle}
              </p>
            </div>

            <div className="mt-8 max-w-xl">
              {status === "success" ? (
                <div className="rounded-2xl border border-white/10 bg-[#0B0D10]/90 p-8 sm:p-10 text-center shadow-[0_0_0_0.5px_rgba(255,255,255,0.12)_inset]">
                  <p className="text-sm sm:text-base text-zinc-200 font-medium">
                    {successMessage}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-white/10 bg-[#0B0D10]/90 p-6 sm:p-8 lg:p-9 shadow-[0_0_0_0.5px_rgba(255,255,255,0.12)_inset] space-y-6"
                >
                  {inquiryTypes?.length > 1 && (
                    <div>
                      <label
                        htmlFor="inquiryType"
                        className="block text-sm font-medium text-zinc-200"
                      >
                        Inquiry type
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        className="mt-2 block w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-platinum placeholder-zinc-500 focus:border-electric-indigo focus:ring-1 focus:ring-electric-indigo outline-none transition-colors"
                      >
                        {inquiryTypes.map((opt: any) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-zinc-200">
                        {fields.name.label}
                        {fields.name.required && <span className="text-red-500 ml-0.5">*</span>}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required={fields.name.required}
                        placeholder={fields.name.placeholder}
                        className="mt-2 block w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-platinum placeholder-zinc-500 focus:border-electric-indigo focus:ring-1 focus:ring-electric-indigo outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-zinc-200">
                        {fields.company.label}
                        {fields.company.required && <span className="text-red-500 ml-0.5">*</span>}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required={fields.company.required}
                        placeholder={fields.company.placeholder}
                        className="mt-2 block w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-platinum placeholder-zinc-500 focus:border-electric-indigo focus:ring-1 focus:ring-electric-indigo outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-200">
                      {fields.email.label}
                      {fields.email.required && <span className="text-red-500 ml-0.5">*</span>}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required={fields.email.required}
                      placeholder={fields.email.placeholder}
                      className="mt-2 block w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-platinum placeholder-zinc-500 focus:border-electric-indigo focus:ring-1 focus:ring-electric-indigo outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectDetails" className="block text-sm font-medium text-zinc-200">
                      {fields.projectDetails.label}
                      {fields.projectDetails.required && <span className="text-red-500 ml-0.5">*</span>}
                    </label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      required={fields.projectDetails.required}
                      placeholder={fields.projectDetails.placeholder}
                      rows={5}
                      className="mt-2 block w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-platinum placeholder-zinc-500 focus:border-electric-indigo focus:ring-1 focus:ring-electric-indigo outline-none transition-colors resize-y min-h-[140px]"
                    />
                  </div>
                  {status === "error" && (
                    <p className="text-xs text-red-400">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full sm:w-auto inline-flex justify-center items-center rounded-full bg-electric-indigo px-7 py-3.5 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-indigo focus-visible:ring-offset-2 focus-visible:ring-offset-soft-dark disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                  >
                    {status === "sending" ? "Sending…" : submitLabel}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          <div className="lg:pt-4">
            {/* Simple stacked integration with the ScheduleCall widget */}
            {/* You can reorder or restyle this as needed */}
            {/* Import ScheduleCall in page.tsx if you want it elsewhere instead */}
          </div>
        </div>
      </div>
    </section>
  );
}

