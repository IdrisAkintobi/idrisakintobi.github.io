"use client";

import React from "react";
import {
  Server,
  Database,
  Bot,
  CreditCard,
  Layers,
} from "lucide-react";

export function BentoGrid() {
  return (
    <section id="specialties" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="mb-12 border-b border-white/10 pb-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>// ARCHITECTURE & CORE DOMAINS</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Specialized Systems Engineering
            </h2>
            <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-md">
              High-throughput backends, fault-tolerant data storage, financial APIs, and agentic intelligence.
            </p>
          </div>
        </div>

        {/* Calm Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Distributed Systems (Span 7) */}
          <div className="md:col-span-7 rounded-2xl glass-panel p-6 sm:p-8 relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-9 h-9 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Server className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-300">
                01 • Distributed Core
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">
              High-Throughput Microservices & Distributed Architecture
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Engineering event-driven microservices with low latency, robust connection pooling, and fault isolation:
            </p>

            {/* Core Runtimes (Responsive on all mobile screens) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-cyan-400 font-semibold">Go (Golang)</div>
                <div className="text-[11px] text-slate-400 mt-1">High-concurrency services & gRPC</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-cyan-400 font-semibold">NestJS & Node.js</div>
                <div className="text-[11px] text-slate-400 mt-1">Domain-driven microservices & REST</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-cyan-400 font-semibold">Python</div>
                <div className="text-[11px] text-slate-400 mt-1">Data processing & AI workflows</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-cyan-400 font-semibold">TypeScript & React</div>
                <div className="text-[11px] text-slate-400 mt-1">Full-stack interfaces & dashboards</div>
              </div>
            </div>
          </div>

          {/* Card 2: Agentic AI & MCP Systems (Span 5) */}
          <div className="md:col-span-5 rounded-2xl glass-panel p-6 sm:p-8 relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-9 h-9 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Bot className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-indigo-300">
                02 • Agentic AI
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">
              Autonomous AI & MCP Tooling
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Building autonomous multi-agent pipelines leveraging modern LLMs and protocol standards:
            </p>

            <ul className="space-y-2.5 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>Model Context Protocol (MCP) tooling</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>OpenAI & Claude LLM orchestrations</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>LangChain & n8n automated agent pipelines</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Telco & Financial Payment Gateways (Span 5) */}
          <div className="md:col-span-5 rounded-2xl glass-panel p-6 sm:p-8 relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CreditCard className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-emerald-300">
                03 • Payment Engines
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">
              High-Throughput Billing & FinTech Infrastructure
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Resilient transaction engines, multi-provider payment integrations, and automated subscription pipelines:
            </p>

            <div className="space-y-2.5 text-xs font-mono text-slate-300">
              <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                <div className="font-semibold text-emerald-300">Recurring Billing & Payment Gateways</div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Multi-provider payment engines delivering +25% revenue growth across international markets.
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="font-semibold text-slate-200">Amazon Prime Video XML Engine</div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  MEC/MMC compliant delivery pipeline npm package.
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Databases & Storage Reliability (Span 7) */}
          <div className="md:col-span-7 rounded-2xl glass-panel p-6 sm:p-8 relative overflow-hidden group hover:border-sky-500/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-9 h-9 rounded-xl bg-sky-950/40 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Database className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-sky-300">
                04 • Data & Cloud
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">
              Large-Scale Data Migration & Storage Reliability
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Zero-downtime database migrations and compliant object storage:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-cyan-400 font-semibold block">30M+ Records Migrated</span>
                <span className="text-slate-400 text-[11px] mt-1 block">
                  Zero-downtime RTDB to Firestore migration; 30% query improvement.
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-sky-400 font-semibold block">Banking Audit Compliance</span>
                <span className="text-slate-400 text-[11px] mt-1 block">
                  MinIO object storage with backend S3 streaming and AES-CBC encryption.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
