import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
        <Link href="/" className="text-sm font-medium text-[#0056B3] hover:underline">
          ← Back to home
        </Link>
        <h1 className="mt-8 text-3xl font-semibold text-slate-900">Privacy Policy</h1>
        <p className="mt-4 text-slate-600">
          Add your privacy policy content here. This page is linked from the footer.
        </p>
      </div>
    </div>
  );
}
