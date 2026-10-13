"use client";

import React, { useRef, useState } from "react";
import {
  ExternalLink,
  ShieldCheck,
  Award,
  Cloud,
  CheckCircle2,
  Cpu,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from "lucide-react";

interface Badge {
  id: string;
  title: string;
  issuer: string;
  description: string;
  category: string;
  icon: "gcp" | "aws" | "k8s" | "edu" | "all";
  link: string;
}

const badges: Badge[] = [
  {
    id: "gcp",
    title: "Google Associate Cloud Engineer",
    issuer: "Google Cloud",
    description: "Cloud Run, Compute Engine, IAM, VPC, and Cloud Storage architecture.",
    category: "Cloud Architecture",
    icon: "gcp",
    link: "https://www.credly.com/users/idris-akintobi.0bcc4360/badges/credly",
  },
  {
    id: "aws",
    title: "AWS Certified Developer — Associate",
    issuer: "Amazon Web Services",
    description: "Serverless, Lambda, DynamoDB, ECS, API Gateway, S3, and CloudFormation.",
    category: "Cloud Development",
    icon: "aws",
    link: "https://www.credly.com/users/idris-akintobi.0bcc4360/badges/credly",
  },
  {
    id: "k8s",
    title: "Kubernetes and Cloud Native Associate",
    issuer: "CNCF & Linux Foundation",
    description: "Container orchestration, K8s architecture, GitOps, and cloud-native observability.",
    category: "Container Orchestration",
    icon: "k8s",
    link: "https://www.credly.com/users/idris-akintobi.0bcc4360/badges/credly",
  },
  {
    id: "edu",
    title: "B.Sc. Computer Science",
    issuer: "University of Benin",
    description: "Core algorithms, data structures, distributed systems, and computer architecture.",
    category: "Academic Foundation",
    icon: "edu",
    link: "https://www.credly.com/users/idris-akintobi.0bcc4360/badges/credly",
  },
  {
    id: "all",
    title: "Verified Credly Profile",
    issuer: "Credly Platform",
    description: "Explore all verified credentials, skills assessments, and digital badges.",
    category: "Official Directory",
    icon: "all",
    link: "https://www.credly.com/users/idris-akintobi.0bcc4360/badges/credly",
  },
];

export function Credentials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const credlyUrl =
    "https://www.credly.com/users/idris-akintobi.0bcc4360/badges/credly";
  const toptalUrl =
    "https://www.toptal.com/developers/resume/idris-akintobi#qPmZ4p";

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="credentials" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>// VERIFIED CREDENTIALS & TRUST</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Vetted Expertise & Accreditations
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={credlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors"
            >
              <span>View Credly</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>
            <a
              href={toptalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-xs font-mono text-blue-300 transition-colors"
            >
              <span>Toptal Profile</span>
              <ExternalLink className="w-3 h-3 text-blue-400" />
            </a>
          </div>
        </div>

        {/* Top: Toptal Emblem Showcase */}
        <div className="mb-12 rounded-2xl glass-panel p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-blue-500/20 bg-gradient-to-r from-[#0B101E] via-[#090C16] to-[#08090C]">
          <div className="space-y-3 max-w-lg">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-[11px] font-mono text-blue-300 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                VETTED TOP 3%
              </span>
              <span className="text-xs font-mono text-slate-400">Exclusive Talent Network</span>
            </div>

            <h3 className="text-xl font-bold text-white tracking-tight">
              Top 3% Global Engineering Talent
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Formally evaluated and admitted into Toptal. Tested on distributed system architecture, rapid problem-solving, and production engineering delivery.
            </p>
          </div>

          {/* Official Toptal Badge */}
          <div className="shrink-0">
            <a
              href={toptalUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Idris Akintobi on Toptal (Top 3% Vetted Talent)"
              title="Click to view Idris Akintobi's verified profile on Toptal"
              className="group inline-block p-[4px] bg-[#25a9ef] hover:bg-[#38bdf8] [clip-path:polygon(50%_0,100%_24%,100%_76%,50%_100%,0_76%,0_24%)] shadow-2xl hover:scale-105 hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer"
            >
              <div className="w-[185px] pt-5 pb-8 flex flex-col items-center gap-1.5 text-white text-center bg-gradient-to-br from-[#0667ff] via-[#204ecf] to-[#0f256e] [clip-path:polygon(50%_0,100%_24%,100%_76%,50%_100%,0_76%,0_24%)]">
                <svg
                  width="54"
                  viewBox="0 0 60 17"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-95"
                >
                  <path
                    d="m20.85 6.38 6.06-.89 2.72-5.49 2.71 5.49 6.06.89-4.39 4.28 1.04 6.03-5.42-2.85-5.43 2.85 1.04-6.03zm33.06 7.17 1.85-.27.82-1.67.83 1.67 1.84.27-1.33 1.31.31 1.83-1.65-.87-1.66.87.32-1.83zm-3.38-3.01-3.61-.52-1.61-3.26-1.62 3.26-3.6.52 2.6 2.55-.61 3.59 3.23-1.69 3.21 1.69-.61-3.59zm-45.19 3.01-1.85-.27-.82-1.67-.83 1.67-1.84.27 1.33 1.31-.31 1.83 1.65-.87 1.65.87-.31-1.83zm3.38-3.01 3.61-.52 1.61-3.26 1.61 3.26 3.61.52-2.6 2.55.61 3.59-3.23-1.69-3.22 1.69.62-3.59z"
                    fill="#fff"
                  />
                </svg>
                <h4 className="m-0 text-sm font-bold tracking-tight leading-none text-white font-sans">
                  TOP 3% TALENT
                </h4>
                <div className="w-[90px] h-[1px] bg-[#25a9ef]/70 my-0.5" />
                <span className="text-[11px] opacity-80 -mb-1 font-sans">Vetted by</span>
                <svg
                  viewBox="0 0 108 30"
                  width="78"
                  xmlns="http://www.w3.org/2000/svg"
                  className="py-0.5"
                >
                  <g clipRule="evenodd" fill="#fff" fillRule="evenodd">
                    <path d="m8.11 0 6.71 6.7c.05.05.09.1.15.15l5.85 5.85-9.51 9.46 4.35 4.36-2.91 2.89-6.66-6.66c-.08-.07-.16-.15-.24-.23l-5.85-5.84 9.48-9.43-4.32-4.31zm4.25 10.5c-.09-.02-.18-.02-.26 0-.09.03-.16.07-.32.22l-5.41 5.39c-.16.16-.2.23-.22.31-.03.09-.03.18 0 .26.02.09.07.17.22.32l1.72 1.72c.15.15.22.19.31.22.09.02.17.02.26 0 .09-.03.16-.07.31-.22l5.41-5.39c.16-.15.2-.23.23-.31.02-.09.02-.17 0-.26s-.07-.16-.22-.31l-1.72-1.72c-.15-.16-.23-.2-.31-.23z" />
                    <path d="m62.65 7.76c2.11 0 3.91.82 5.34 2.4 1.46 1.53 2.19 3.64 2.18 6.26 0 2.56-.75 4.8-2.24 6.38-1.47 1.57-3.34 2.37-5.58 2.37-1.93-.01-3.68-.7-4.84-1.89l-.16-.17-.01 6.75-3.82-.01v-.28l.04-21.61h3.8l-.01 2.64c1.25-1.41 3.26-2.84 5.3-2.84zm24.45.06c2.18 0 3.68.49 4.84 1.44 1.11.92 1.7 2.56 1.75 4.29v.26l-.02 11.14h-3.87v-.46c0-.48 0-.97 0-1.47-1.12 1.55-2.68 2.3-4.76 2.3-1.65 0-3.05-.5-4.07-1.43-1.03-.94-1.58-2.23-1.58-3.73.02-2.83 2.02-4.79 5.52-5.4l.27-.05 4.64-.73v-.37c0-.78-.23-1.72-.69-2.11-.47-.4-1.04-.73-2.03-.73-2.73 0-3.29 2.01-3.32 3.02v.09l-3.42.04c0-1.49.69-3.42 2.08-4.63 1.12-.97 2.75-1.42 4.33-1.47h.3zm-14.98-4.36h3.81l-.01 4.56h3.53v3.18l-3.54-.01-.01 8.54c0 .94.19 1.56.6 1.85.43.3 1.3.02 1.3.02l.34 3.32s-1.2.31-1.96.31c-.99 0-1.84-.25-2.49-.75-1.06-.8-1.6-2.2-1.6-4.17l.02-9.12-3.19-3.19 3.2.01zm-22.46 6.8c1.1 1.13 2.41 3.14 2.4 6.26-.01 3.11-1.32 5.11-2.41 6.24-1.5 1.54-3.54 2.42-5.59 2.42-.08 0-.16 0-.25-.01-2.19-.01-4.13-.79-5.75-2.33-1.63-1.55-2.46-3.68-2.46-6.36s.84-4.82 2.47-6.36c1.62-1.53 3.55-2.3 5.75-2.3 2.17-.07 4.29.83 5.84 2.44zm-8.81-7.04v3.77l-7.36.01.02 17.97-3.97-.01v-.34l.03-17.63h-7.51l.01-3.77zm54.68.25 3.42.01v.09l-.03 21.38-3.42-.01v-.1zm-5.71 13.58-3.81.64c-1.86.32-2.72 1.04-2.73 2.3-.01 1.15.81 1.92 2.09 1.99h.16.02c2.44 0 4.17-1.9 4.26-4.67l.01-.22zm-46.02-5.84c-1.28 0-2.39.49-3.29 1.47-.88.96-1.33 2.24-1.33 3.81 0 1.58.45 2.86 1.33 3.82.89.98 2 1.47 3.28 1.48 1.3 0 2.42-.49 3.31-1.47.9-.98 1.35-2.26 1.36-3.81.01-1.56-.45-2.84-1.35-3.82s-2.01-1.48-3.31-1.48zm17.94.12h-.02c-1.28 0-2.34.46-3.24 1.43-.9.94-1.35 2.16-1.36 3.63 0 1.49.45 2.83 1.35 3.8.92.95 1.98 1.42 3.25 1.42 1.29 0 2.38-.48 3.25-1.41.91-.97 1.35-2.3 1.36-3.79 0-1.48-.46-2.7-1.34-3.63-.87-.96-1.96-1.45-3.25-1.45z" />
                    </g>
                </svg>
                <span className="inline-flex items-center justify-center px-4 py-1 mt-1 rounded-md bg-[#296bff] group-hover:bg-[#1a5eff] text-white text-xs font-semibold tracking-wide transition-colors">
                  Hire me
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Scrollable Section Header for Credly Badges */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Verified Credly Badges & Degrees
            </h3>
            <span className="text-xs font-mono text-slate-500">
              (Scroll to view all)
            </span>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-2 rounded-lg border border-white/10 transition-colors ${
                canScrollLeft
                  ? "bg-white/5 hover:bg-white/10 text-white"
                  : "bg-white/[0.02] text-slate-600 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-2 rounded-lg border border-white/10 transition-colors ${
                canScrollRight
                  ? "bg-white/5 hover:bg-white/10 text-white"
                  : "bg-white/[0.02] text-slate-600 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Carousel Container */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          role="region"
          aria-label="Verified Badges and Credentials Carousel"
          tabIndex={0}
          className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus:outline-none"
        >
          {badges.map((badge) => (
            <a
              key={badge.id}
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[290px] sm:w-[320px] shrink-0 snap-start rounded-2xl glass-panel p-5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                    {badge.icon === "gcp" && <Cloud className="w-5 h-5 text-cyan-400" />}
                    {badge.icon === "aws" && <Cpu className="w-5 h-5 text-amber-400" />}
                    {badge.icon === "k8s" && <ShieldCheck className="w-5 h-5 text-blue-400" />}
                    {badge.icon === "edu" && <GraduationCap className="w-5 h-5 text-emerald-400" />}
                    {badge.icon === "all" && <Award className="w-5 h-5 text-indigo-400" />}
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/5">
                    {badge.category}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-cyan-400/90 font-medium">
                  {badge.issuer}
                </div>
                <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors mt-0.5 leading-snug">
                  {badge.title}
                </h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {badge.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-cyan-300 transition-colors">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Verified Credential
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
