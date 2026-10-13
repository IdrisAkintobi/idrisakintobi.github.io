import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://idris.akintobi.ng"),
  title: "Idris Akintobi — Senior Backend / Full-Stack Engineer",
  description:
    "Senior Backend / Full-Stack Engineer with 6+ years experience architecting distributed systems, scalable billing engines, and agentic AI pipelines. Certified AWS, GCP, and Kubernetes.",
  keywords: [
    "Idris Akintobi",
    "Senior Backend Engineer",
    "Full-Stack Engineer",
    "Distributed Systems",
    "Microservices",
    "Billing Engines",
    "Payment Infrastructure",
    "Go",
    "Golang",
    "NestJS",
    "Python",
    "Node.js",
    "TypeScript",
    "Toptal",
    "Agentic AI",
    "Cloud Native",
    "Kubernetes",
  ],
  authors: [{ name: "Idris Akintobi", url: "https://idris.akintobi.ng" }],
  alternates: {
    canonical: "https://idris.akintobi.ng",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Idris Akintobi — Senior Backend / Full-Stack Engineer",
    description:
      "6+ years architecting zero-downtime distributed systems, scalable billing infrastructure, and agentic AI workflows.",
    url: "https://idris.akintobi.ng",
    siteName: "Idris Akintobi",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Idris Akintobi — Senior Backend / Full-Stack Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Idris Akintobi — Senior Backend / Full-Stack Engineer",
    description:
      "Senior Backend / Full-Stack Engineer with 6+ years experience architecting high-throughput distributed systems, billing engines & AI automation.",
    site: "@idris_akintobi",
    creator: "@idris_akintobi",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://idris.akintobi.ng/#person",
      name: "Idris Akintobi",
      url: "https://idris.akintobi.ng",
      image: "https://idris.akintobi.ng/images/og-image.jpg",
      jobTitle: "Senior Backend / Full-Stack Engineer",
      sameAs: [
        "https://github.com/IdrisAkintobi",
        "https://linkedin.com/in/idrisakintobi",
        "https://x.com/idris_akintobi",
        "https://medium.com/@akintobiidris",
        "https://www.toptal.com/developers/resume/idris-akintobi#qPmZ4p",
        "https://www.credly.com/users/idris-akintobi.0bcc4360/badges/credly",
      ],
      knowsAbout: [
        "Distributed Systems",
        "Microservices Architecture",
        "High-Throughput Billing Engines",
        "Payment Gateways",
        "Go (Golang)",
        "Python",
        "Node.js",
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "Kubernetes",
        "Agentic AI",
        "Model Context Protocol (MCP)",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Benin",
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Google Associate Cloud Engineer",
          credentialCategory: "certification",
          recognizedBy: { "@type": "Organization", name: "Google Cloud" },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "AWS Certified Developer – Associate",
          credentialCategory: "certification",
          recognizedBy: { "@type": "Organization", name: "Amazon Web Services" },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Kubernetes and Cloud Native Associate",
          credentialCategory: "certification",
          recognizedBy: { "@type": "Organization", name: "Linux Foundation & CNCF" },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://idris.akintobi.ng/#website",
      url: "https://idris.akintobi.ng",
      name: "Idris Akintobi — Senior Backend / Full-Stack Engineer",
      description:
        "Portfolio of Idris Akintobi, Senior Backend / Full-Stack Engineer specializing in distributed systems, scalable billing engines, and AI agents.",
      author: { "@id": "https://idris.akintobi.ng/#person" },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://idris.akintobi.ng/#webpage",
      url: "https://idris.akintobi.ng",
      name: "Idris Akintobi — Senior Backend / Full-Stack Engineer",
      isPartOf: { "@id": "https://idris.akintobi.ng/#website" },
      about: { "@id": "https://idris.akintobi.ng/#person" },
      mainEntity: { "@id": "https://idris.akintobi.ng/#person" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="darkreader-lock" content="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#08090C] text-slate-100 min-h-screen antialiased selection:bg-cyan-500/20 selection:text-cyan-200`}
      >
        {children}
      </body>
    </html>
  );
}
