import { companyData } from "@/data/company_data";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyData.companyName,
    url: companyData.siteUrl,
    description: companyData.tagline,
    email: companyData.email,
    foundingDate: companyData.foundedYear,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
