import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { companyData } from "@/data/company_data";
import JsonLd from "@/components/JsonLd";
import SkipLink from "@/components/SkipLink";
import CookieConsent from "@/components/CookieConsent";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${companyData.companyName} — ${companyData.industry} & Corporate Solutions`,
  description: companyData.tagline,
  metadataBase: new URL(companyData.siteUrl || "https://example.com"),
  openGraph: {
    title: `${companyData.companyName} — ${companyData.industry}`,
    description: companyData.tagline,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyData.companyName} — ${companyData.industry}`,
    description: companyData.tagline,
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-white text-slate-600 font-sans antialiased">
        <JsonLd />
        <SkipLink />
        {children}
        {companyData.cookieConsent?.enabled && <CookieConsent />}
      </body>
    </html>
  );
}
