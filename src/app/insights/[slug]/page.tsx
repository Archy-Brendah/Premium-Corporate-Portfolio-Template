import Link from "next/link";
import { companyData } from "@/data/company_data";
import { notFound } from "next/navigation";

export default function InsightPage({ params }: { params: { slug: string } }) {
  const insight = companyData.insights?.find((i) => i.slug === params.slug);
  if (!insight) notFound();

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
        <Link href="/#insights" className="text-sm font-medium text-[#0056B3] hover:underline">
          ← Back to Insights
        </Link>
        <p className="mt-6 text-xs font-medium uppercase tracking-wider text-[#0056B3]">
          {insight.category}
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-slate-900">{insight.title}</h1>
        <p className="mt-4 text-slate-600">{insight.excerpt}</p>
        <p className="mt-8 text-slate-500">
          Add your full article content here. Data is driven from <code className="bg-slate-100 px-1 rounded">company_data.js</code>.
        </p>
      </div>
    </div>
  );
}
