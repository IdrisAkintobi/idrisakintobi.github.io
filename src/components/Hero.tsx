"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowUpRight, Mail, Copy, Check } from "lucide-react";
import { WhatsAppIcon } from "@/components/Icons";
import { siteConfig } from "@/config/site";
import { LightningCard } from "./LightningCard";

const stackItems = [
  "Go",
  "Python",
  "Node.js",
  "NestJS",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "Kubernetes",
  "Agentic AI",
];

export function Hero() {
  const [copied, setCopied] = useState(false);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
    let didCopy = false;
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(siteConfig.email);
        didCopy = true;
      } catch {
        didCopy = false;
      }
    }

    if (!didCopy) {
      const textArea = document.createElement("textarea");
      textArea.value = siteConfig.email;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }

    setCopied(true);
    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current);
    }
    copyTimeoutRef.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28">
      {/* Subtle ambient light backdrop */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true" />
              <span>{siteConfig.role}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Architecting{" "}
              <span className="text-gradient-cyan">distributed systems</span>
              , scalable billing engines, and AI agents.
            </h1>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Senior engineer with{" "}
              <span className="text-white font-medium">6+ years of experience</span>{" "}
              building high-throughput services, zero-downtime database
              migrations (<span className="text-cyan-300 font-mono">30M+ docs</span>),
              and multi-region billing &amp; payment infrastructure driving{" "}
              <span className="text-emerald-300 font-mono">+25% revenue</span>.
            </p>

            {/* Curated Tech Stack */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs text-slate-400">
              <span className="text-slate-500 mr-1">{"// Stack:"}</span>
              {stackItems.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95 font-mono group"
              >
                <WhatsAppIcon className="w-4 h-4 text-slate-950 group-hover:scale-110 transition-transform" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-950/80 ml-0.5" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 text-slate-200 font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 font-mono cursor-pointer active:scale-95 group shadow-sm"
                title={`Click to copy ${siteConfig.email}`}
                aria-label={`Copy email address ${siteConfig.email}`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400 animate-in fade-in" aria-hidden="true" />
                    <span className="text-emerald-300">Copied {siteConfig.email}</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" aria-hidden="true" />
                    <span>{siteConfig.email}</span>
                    <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-300 transition-colors ml-1" aria-hidden="true" />
                  </>
                )}
              </button>
              <span className="sr-only" aria-live="polite">
                {copied ? `Email address ${siteConfig.email} copied to clipboard` : ""}
              </span>
            </div>
          </div>

          {/* Right Column: Close-up Portrait with Lightning Tracer */}
          <div className="lg:col-span-5 flex justify-center">
            <LightningCard />
          </div>
        </div>

        {/* Calm Metrics Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-300">
              30M+
            </div>
            <div className="text-xs text-slate-400 mt-1 font-mono">
              Docs Migrated (0 Downtime)
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">
              +25%
            </div>
            <div className="text-xs text-slate-400 mt-1 font-mono">
              Payment &amp; Billing Revenue
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-sky-400">
              6+ Years
            </div>
            <div className="text-xs text-slate-400 mt-1 font-mono">
              Production Engineering
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
