import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "SAIFbio — Preventing catastrophic biological threats",
    template: "%s | SAIFbio",
  },
  description: site.description,
  openGraph: {
    title: "SAIFbio",
    description: site.description,
    url: site.url,
    siteName: "SAIFbio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAIFbio",
    description: site.description,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["NGO", "NonprofitType"],
  name: site.legalName,
  alternateName: "SAIFbio",
  url: site.url,
  description: site.description,
  knowsAbout: [
    "Biosecurity",
    "Pandemic Preparedness",
    "Biological Threats",
    "Public Health",
    "AI Safety",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
