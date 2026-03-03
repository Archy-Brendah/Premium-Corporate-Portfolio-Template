import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Toaster } from "sonner";
import "./globals.css";
import { companyData } from "@/data/company_data";
import JsonLd from "@/components/JsonLd";
import SkipLink from "@/components/SkipLink";
import CookieConsent from "@/components/CookieConsent";
import CursorHighlight from "@/components/CursorHighlight";

const display = GeistSans;
const sans = GeistMono;

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
      <body className="min-h-screen bg-soft-dark text-platinum font-sans antialiased">
        <JsonLd />
        <SkipLink />
        <CursorHighlight />
        {children}
        {companyData.cookieConsent?.enabled && <CookieConsent />}
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: { background: "#0B0D10", border: "1px solid rgba(255,255,255,0.1)", color: "#E1E1E1" },
          }}
        />
      </body>
    </html>
  );
}
