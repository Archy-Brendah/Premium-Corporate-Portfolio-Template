import Link from "next/link";
import { companyData } from "@/data/company_data";
import { notFound } from "next/navigation";

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = companyData.caseStudies.find((s) => s.slug === params.slug);
  if (!study) notFound();

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8">
          <Link
            href="/#portfolio"
            className="text-sm font-medium text-[#0056B3] hover:underline"
          >
            ← Back to Case Studies
          </Link>
          <p className="mt-4 text-xs font-medium uppercase tracking-wider text-[#0056B3]">
            {study.category}
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">{study.title}</h1>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
        <p className="text-slate-600 leading-relaxed">{study.excerpt}</p>
        <p className="mt-6 text-slate-600">
          Replace this page with your full case study content. Data is driven from{" "}
          <code className="text-slate-800 bg-slate-100 px-1 rounded">company_data.js</code>.
        </p>
      </main>
    </div>
  );
}
