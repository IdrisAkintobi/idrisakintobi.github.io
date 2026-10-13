"use client";

import React from "react";
import { BookOpen, ExternalLink, ArrowUpRight } from "lucide-react";

export function Writing() {
  const mediumUrl = "https://medium.com/@akintobiidris";

  const articles = [
    {
      title: "Understanding Go's context Package: A Guide to Proper Usage",
      description:
        "A deep dive into managing goroutine lifecycles, cancellation propagation, timeouts, and request-scoped values in production Go services.",
      tag: "Go / Concurrency",
      readTime: "Published on Medium",
      link: "https://medium.com/@akintobiidris",
    },
    {
      title: "Using Redis Client in NestJS",
      description:
        "Architecting a clean Redis client factory, repository, and caching service in NestJS applications for high-throughput short-lived data.",
      tag: "NestJS / Redis",
      readTime: "Published on Medium",
      link: "https://medium.com/@akintobiidris",
    },
    {
      title: "Sendgrid Mail Service in NestJS",
      description:
        "Step-by-step tutorial on integrating the SendGrid mail service API cleanly with decoupled email templates and error handling.",
      tag: "NestJS / APIs",
      readTime: "Published on Medium",
      link: "https://medium.com/@akintobiidris",
    },
    {
      title: "Setting up a SOCKS Proxy Server with Dante",
      description:
        "Infrastructure guide for configuring and deploying a Dante SOCKS proxy server with production rules for AWS and Google Cloud environments.",
      tag: "Cloud / DevOps",
      readTime: "Published on Medium",
      link: "https://medium.com/@akintobiidris",
    },
  ];

  return (
    <section id="writing" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>// ENGINEERING INSIGHTS & ARTICLES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Writing on Medium
            </h2>
          </div>
          <a
            href={mediumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors"
          >
            <span>medium.com/@akintobiidris</span>
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
          </a>
        </div>

        {/* 2x2 Grid of Real Medium Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((art, idx) => (
            <a
              key={idx}
              href={art.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl glass-panel p-6 border border-white/10 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span className="text-cyan-400 font-semibold">{art.tag}</span>
                  <span className="text-slate-500">{art.readTime}</span>
                </div>
                <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed">
                  {art.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-cyan-300 transition-colors">
                <span>Read on Medium</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
