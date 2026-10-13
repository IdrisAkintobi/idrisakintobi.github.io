"use client";

import React, { useState } from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronRight,
} from "lucide-react";

interface Job {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  badge?: string;
  highlights: string[];
  technologies: string[];
}

const experiences: Job[] = [
  {
    id: "wi-flix",
    role: "Senior Software Engineer",
    company: "Wi-flix",
    period: "Jan 2023 — Present",
    location: "South-Holland, Netherlands (Remote)",
    badge: "Current Role",
    highlights: [
      "Architected zero-downtime migration of 30M+ documents from Google Realtime Database to Firestore, boosting query performance by 30%.",
      "Integrated carrier-grade Telco billing APIs (MTN Nigeria, Ghana, Zambia; Safaricom Kenya) into core payment infrastructure, contributing to 25% top-line revenue growth.",
      "Engineered full-stack subscription management & admin portal serving 2M+ active streaming users with real-time analytics.",
      "Migrated serverless Cloud Functions v1 to Cloud Run v2, decreasing latency and eliminating cold starts.",
      "Authored internal npm package generating compliant Amazon Prime Video MEC/MMC XML delivery files for automated ingestion.",
      "Shipped automated Affiliate Management System driving 8% user acquisition growth and 3% subscription uplift.",
    ],
    technologies: [
      "NestJS",
      "Node.js",
      "React",
      "Next.js",
      "TypeScript",
      "Firestore",
      "GCP Cloud Run",
      "Telco APIs",
      "Docker",
    ],
  },
  {
    id: "sterling-bank",
    role: "Software Engineer",
    company: "Sterling Bank Plc",
    period: "Mar 2024 — Jul 2025",
    location: "Lagos, Nigeria",
    highlights: [
      "Contributed to the Seebaas core banking platform, delivering scalable services compliant with banking regulatory standards.",
      "Engineered secure loan management APIs with automated eligibility verification, dynamic PDF generation, and AES-CBC encryption.",
      "Built multi-step automation workflows for document processing and audit trails, reducing manual operations overhead by 30%.",
      "Implemented MinIO object storage with backend S3 streaming and structured logging for financial compliance.",
      "Optimized relational database queries and implemented Redis caching, reducing API response times by 20%.",
      "Designed role-based access control (RBAC) and JWT authentication across distributed platform modules.",
    ],
    technologies: [
      "Node.js",
      "NestJS",
      "React",
      "PostgreSQL",
      "Redis",
      "MinIO",
      "AES-CBC Encryption",
      "Docker",
    ],
  },
  {
    id: "decagon",
    role: "Backend & Full-Stack Developer",
    company: "Decagon",
    period: "Nov 2020 — Dec 2022",
    location: "Lagos, Nigeria",
    highlights: [
      "Built robust examination management system serving 3,000+ students concurrently per academic term.",
      "Co-developed a multi-tenant SaaS platform with Nginx load balancing, RESTful APIs, JWT authentication, and RBAC.",
      "Integrated Stripe and Paystack payment gateways, reducing payment failure rates by 20% and improving conversion by 15%.",
      "Authored comprehensive OpenAPI/Swagger documentation, improving developer onboarding velocity across cross-functional squads.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Nginx",
      "Stripe",
      "Paystack",
      "Jest",
    ],
  },
];

export function Experience() {
  const [selectedJob, setSelectedJob] = useState<string>("wi-flix");

  const active = experiences.find((e) => e.id === selectedJob) || experiences[0];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 border-b border-white/10 pb-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>// TRACK RECORD & IMPACT</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Production Engineering Experience
            </h2>
            <span className="text-xs font-mono text-slate-400">
              6+ Years across Streaming, FinTech & Enterprise SaaS
            </span>
          </div>
        </div>

        {/* Experience Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Company Selector Tab Buttons (Col 4) */}
          <div
            role="tablist"
            aria-label="Experience Companies"
            className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {experiences.map((job) => {
               const isCurrent = job.id === selectedJob;
               return (
                <button
                  key={job.id}
                  id={`tab-${job.id}`}
                  role="tab"
                  aria-selected={isCurrent}
                  aria-controls={`panel-${job.id}`}
                  onClick={() => setSelectedJob(job.id)}
                  className={`text-left p-4 rounded-xl transition-all duration-200 border min-w-[210px] sm:min-w-[240px] lg:min-w-0 lg:w-full shrink-0 flex flex-col justify-between group ${
                    isCurrent
                      ? "bg-slate-900 border-cyan-500/40 shadow-lg shadow-cyan-950/30"
                      : "glass-panel-subtle hover:bg-white/[0.04] border-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm font-semibold tracking-tight transition-colors ${
                        isCurrent ? "text-cyan-300" : "text-slate-300 group-hover:text-white"
                      }`}
                    >
                      {job.company}
                    </span>
                    {job.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
                        {job.badge}
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>{job.role}</span>
                  </div>
                  <div className="mt-2 text-[11px] font-mono text-slate-400">
                    {job.period}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Experience Card (Col 8) */}
          <div
            id={`panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            className="lg:col-span-8 rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-5">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {active.role}
                </h3>
                <div className="text-cyan-400 font-mono text-sm font-semibold mt-0.5">
                  @ {active.company}
                </div>
              </div>

              <div className="text-left sm:text-right font-mono text-xs text-slate-400 space-y-1">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{active.period}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{active.location}</span>
                </div>
              </div>
            </div>

            {/* Bullet Highlights */}
            <div className="mt-6 space-y-3.5">
              {active.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="w-5 h-5 rounded-md bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5 text-cyan-400">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Technologies Used Strip */}
            <div className="mt-8 pt-5 border-t border-white/10">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2.5">
                // System Technologies & Tools
              </span>
              <div className="flex flex-wrap gap-1.5">
                {active.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
