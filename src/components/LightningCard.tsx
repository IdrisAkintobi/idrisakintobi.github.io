import React from "react";
import { Terminal } from "lucide-react";
import { siteConfig } from "@/config/site";

interface LightningCardProps {
  webpSrc?: string;
  jpgSrc?: string;
  className?: string;
}

export function LightningCard({
  webpSrc = siteConfig.portraitWebp,
  jpgSrc = siteConfig.portraitJpg,
  className = "",
}: LightningCardProps) {
  return (
    <div
      className={`relative group mx-auto w-full max-w-[300px] sm:max-w-[320px] select-none ${className}`}
    >
      {/* Outer ambient electric glow backdrop */}
      <div
        aria-hidden="true"
        className="absolute -inset-2 rounded-[28px] bg-gradient-to-r from-cyan-500/20 via-sky-500/10 to-indigo-500/20 blur-xl transition-all duration-700 pointer-events-none opacity-30 group-hover:opacity-80 group-hover:scale-105"
      />

      {/* Lightning Beam Orbit Border Container */}
      <div className="relative rounded-[24px] p-[2px] overflow-hidden bg-slate-900/90 shadow-2xl">
        {/* Continuous Rotating Electric Conic Beam */}
        <div
          aria-hidden="true"
          className="absolute inset-[-150%] origin-center pointer-events-none transition-transform duration-300 animate-lightning-spin group-hover:[animation-duration:3s]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(56, 189, 248, 0.4) 300deg, rgba(0, 245, 255, 0.8) 330deg, #ffffff 355deg, transparent 360deg)",
          }}
        />

        {/* High-intensity electric glow diffusion layer */}
        <div
          aria-hidden="true"
          className="absolute inset-[-150%] origin-center pointer-events-none blur-sm animate-lightning-spin group-hover:[animation-duration:3s]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 280deg, rgba(0, 245, 255, 0.9) 340deg, #ffffff 356deg, transparent 360deg)",
          }}
        />

        {/* Inner Card Content */}
        <div className="relative rounded-[22px] bg-[#0A0D14] overflow-hidden border border-white/10 z-10">
          {/* Subtle top glare line */}
          <div
            aria-hidden="true"
            className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent z-20"
          />

          {/* Close-Up Portrait Frame (Head & Shoulders Focus) */}
          <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-[#08090C]">
            <picture>
              <source srcSet={webpSrc} type="image/webp" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={jpgSrc}
                alt={`${siteConfig.name} - ${siteConfig.role}`}
                width={640}
                height={720}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </picture>

            {/* Subtle edge blend into dark theme */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-transparent pointer-events-none"
            />
          </div>

          {/* Calm, Minimal Portrait Footer */}
          <div className="p-4 bg-[#0A0D14] border-t border-white/5 space-y-1.5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-slate-100 text-sm tracking-tight">
                  {siteConfig.name}
                </h3>
                <p className="text-[11px] font-mono text-slate-400 flex items-center gap-1 mt-0.5">
                  <Terminal className="w-3 h-3 text-cyan-400" aria-hidden="true" />
                  Backend / Full-Stack
                </p>
              </div>

              <div className="text-right">
                <div className="flex items-center gap-1 text-[11px] font-mono text-slate-300 justify-end">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  <span>Remote • Global</span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400/90 block mt-0.5">
                  US / EU Overlap
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
