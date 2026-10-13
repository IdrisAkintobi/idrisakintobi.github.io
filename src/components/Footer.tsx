"use client";

import React from "react";
import {
  Mail,
  ExternalLink,
  Terminal,
  Globe,
  ArrowUp,
  ShieldCheck,
  Award,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  MediumIcon,
  WhatsAppIcon,
} from "@/components/Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="pt-20 pb-12 border-t border-white/10 relative overflow-hidden bg-[#06070A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Terminal Contact Box */}
        <div className="rounded-2xl glass-panel p-8 sm:p-10 border border-white/10 relative overflow-hidden mb-16 bg-gradient-to-b from-[#0B0F19] to-[#07090F]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                <Terminal className="w-4 h-4" />
                <span>idris@infrastructure:~$ get-in-touch</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Ready to discuss architecture or high-impact engineering?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Open to principal/senior backend engineering roles, technical advisory, and distributed system consulting.
              </p>
            </div>

            {/* Direct Connect Action */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <a
                href="https://wa.me/2348080863345?text=Hi%20Idris,%20reaching%20out%20regarding%20an%20engineering%20opportunity"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 font-mono shadow-lg shadow-emerald-500/20 active:scale-95 group"
              >
                <WhatsAppIcon className="w-4 h-4 text-slate-950 group-hover:scale-110 transition-transform" />
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-950/80" />
              </a>

              <a
                href="mailto:idris@akintobi.ng"
                className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-sm font-mono text-center transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span className="sm:hidden">Send email</span>
                <span className="hidden sm:inline">Send email (idris@akintobi.ng)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Meta & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/5">
          {/* Identity & Timezone (Col 5) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-mono text-xs font-bold">
                IA
              </div>
              <span className="text-sm font-semibold text-white tracking-tight">
                Idris Akintobi
              </span>
            </div>
            <p className="text-xs font-mono text-slate-400 max-w-sm">
              Senior Backend / Full-Stack Engineer. Building high-resilience systems, financial infrastructure, and autonomous agent pipelines.
            </p>

            {/* Work arrangement */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs font-mono text-slate-400 pt-1">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Availability:</span>
              </div>
              <span className="text-slate-200 font-medium pl-5.5 sm:pl-0">Worldwide Remote • US / EU Overlap</span>
            </div>
          </div>

          {/* Social Profiles & Credential Links (Col 5) */}
          <div className="md:col-span-5 grid grid-cols-2 gap-4 text-xs font-mono">
            <div className="space-y-2.5">
              <span className="text-slate-500 uppercase tracking-wider block text-[10px]">
                // Network
              </span>
              <a
                href="https://linkedin.com/in/idrisakintobi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/IdrisAkintobi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://x.com/idris_akintobi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <XIcon className="w-3 h-3" />
                <span>X (Twitter)</span>
              </a>
              <a
                href="https://medium.com/@akintobiidris"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <MediumIcon className="w-3.5 h-3.5" />
                <span>Medium</span>
              </a>
              <a
                href="https://wa.me/2348080863345?text=Hi%20Idris,%20reaching%20out%20regarding%20an%20engineering%20opportunity"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="space-y-2.5">
              <span className="text-slate-500 uppercase tracking-wider block text-[10px]">
                // Verified Trust
              </span>
              <a
                href="https://www.toptal.com/developers/resume/idris-akintobi#qPmZ4p"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Toptal Talent</span>
              </a>
              <a
                href="https://www.credly.com/users/idris-akintobi.0bcc4360/badges/credly"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Credly Badges</span>
              </a>
            </div>
          </div>

          {/* Back to top (Col 2) */}
          <div className="md:col-span-2 flex justify-end items-start">
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-xs font-mono"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Idris Akintobi.
          </div>
        </div>
      </div>
    </footer>
  );
}
