"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/Icons";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 py-4 transition-all duration-300">
      <nav
        className={`w-full max-w-5xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? "glass-panel bg-[#08090C]/90 shadow-2xl shadow-cyan-950/10 py-2.5 px-5"
            : "bg-[#08090C]/60 border border-white/5 py-3 px-6 backdrop-blur-md"
        } flex items-center justify-between`}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-sm font-semibold tracking-tight text-slate-100 group-hover:text-cyan-300 transition-colors">
            Idris Akintobi
          </span>
          <span className="text-xs font-mono text-slate-500">
            / Engineer
          </span>
        </Link>

        {/* Clean, unclustered nav links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-mono text-slate-400">
          <a
            href="#specialties"
            className="hover:text-slate-100 transition-colors"
          >
            Specialties
          </a>
          <a
            href="#experience"
            className="hover:text-slate-100 transition-colors"
          >
            Experience
          </a>
          <a
            href="#credentials"
            className="hover:text-slate-100 transition-colors"
          >
            Credentials
          </a>
          <a
            href="#writing"
            className="hover:text-slate-100 transition-colors"
          >
            Writing
          </a>
        </div>

        {/* Right Socials & Contact Shortcut */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/IdrisAkintobi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="https://linkedin.com/in/idrisakintobi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu-dropdown"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-dropdown"
          className="absolute top-20 inset-x-4 glass-panel bg-[#08090C]/95 p-6 rounded-2xl md:hidden flex flex-col gap-4 border border-white/10 shadow-2xl"
        >
          <div className="flex flex-col gap-3 font-mono text-sm text-slate-300">
            <a
              href="#specialties"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-300"
            >
              // Specialties
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-300"
            >
              // Experience
            </a>
            <a
              href="#credentials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-300"
            >
              // Credentials
            </a>
            <a
              href="#writing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-300"
            >
              // Writing
            </a>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-center gap-6 pt-1 text-slate-400">
              <a
                href="https://github.com/IdrisAkintobi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white p-2"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/idrisakintobi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white p-2"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/2348080863345?text=Hi%20Idris,%20reaching%20out%20regarding%20an%20engineering%20opportunity"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 p-2"
                aria-label="WhatsApp Chat"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
