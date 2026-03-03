"use client";

import { useState } from "react";
import { companyData } from "@/data/company_data";

const { contact } = companyData;
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
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-slate-50/80 py-16 sm:py-20 lg:py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            {formTitle}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {formSubtitle}
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          {status === "success" ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 text-center shadow-card">
              <p className="text-slate-700 font-medium">{successMessage}</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 lg:p-10 shadow-card space-y-6"
            >
              {inquiryTypes?.length > 1 && (
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-slate-700">
                    Inquiry type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-[#0056B3] focus:ring-1 focus:ring-[#0056B3] outline-none transition-colors"
                  >
                    {inquiryTypes.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                  {fields.name.label}
                  {fields.name.required && <span className="text-red-500 ml-0.5">*</span>}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required={fields.name.required}
                  placeholder={fields.name.placeholder}
                  className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-[#0056B3] focus:ring-1 focus:ring-[#0056B3] outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700">
                  {fields.company.label}
                  {fields.company.required && <span className="text-red-500 ml-0.5">*</span>}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required={fields.company.required}
                  placeholder={fields.company.placeholder}
                  className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-[#0056B3] focus:ring-1 focus:ring-[#0056B3] outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  {fields.email.label}
                  {fields.email.required && <span className="text-red-500 ml-0.5">*</span>}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required={fields.email.required}
                  placeholder={fields.email.placeholder}
                  className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-[#0056B3] focus:ring-1 focus:ring-[#0056B3] outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="projectDetails" className="block text-sm font-medium text-slate-700">
                  {fields.projectDetails.label}
                  {fields.projectDetails.required && <span className="text-red-500 ml-0.5">*</span>}
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  required={fields.projectDetails.required}
                  placeholder={fields.projectDetails.placeholder}
                  rows={5}
                  className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-[#0056B3] focus:ring-1 focus:ring-[#0056B3] outline-none transition-colors resize-y min-h-[120px]"
                />
              </div>
              {status === "error" && (
                <p className="text-sm text-red-600">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full sm:w-auto inline-flex justify-center items-center rounded-lg bg-[#0056B3] px-6 py-3.5 text-base font-medium text-white hover:bg-[#004494] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0056B3] focus-visible:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
              >
                {status === "sending" ? "Sending…" : submitLabel}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
