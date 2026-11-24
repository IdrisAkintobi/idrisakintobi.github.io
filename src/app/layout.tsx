import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/config/site";
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
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} — ${siteConfig.role}`,
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
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  alternates: {
    canonical: siteConfig.url,
  },
  manifest: "/manifest.webmanifest",
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
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description:
      "6+ years architecting zero-downtime distributed systems, scalable billing infrastructure, and agentic AI workflows.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.role}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description:
      "Senior Backend / Full-Stack Engineer with 6+ years experience architecting high-throughput distributed systems, billing engines & AI automation.",
    site: siteConfig.social.xHandle,
    creator: siteConfig.social.xHandle,
    images: [siteConfig.ogImage],
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
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
      image: `${siteConfig.url}${siteConfig.ogImage}`,
      jobTitle: siteConfig.role,
      sameAs: [
        siteConfig.social.github,
        siteConfig.social.linkedin,
        siteConfig.social.x,
        siteConfig.social.medium,
        siteConfig.social.toptal,
        siteConfig.social.credly,
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
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: `${siteConfig.name} — ${siteConfig.role}`,
      description:
        "Portfolio of Idris Akintobi, Senior Backend / Full-Stack Engineer specializing in distributed systems, scalable billing engines, and AI agents.",
      author: { "@id": `${siteConfig.url}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#webpage`,
      url: siteConfig.url,
      name: `${siteConfig.name} — ${siteConfig.role}`,
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: { "@id": `${siteConfig.url}/#person` },
      mainEntity: { "@id": `${siteConfig.url}/#person` },
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
        <meta name="color-scheme" content="dark" />
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
