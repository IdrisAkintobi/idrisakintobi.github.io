import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Credentials } from "@/components/Credentials";
import { BentoGrid } from "@/components/BentoGrid";
import { Experience } from "@/components/Experience";
import { Writing } from "@/components/Writing";
import { Footer } from "@/components/Footer";
import { AmbientWebGL } from "@/components/AmbientWebGL";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08090C] text-slate-100 relative bg-grid-pattern overflow-x-hidden">
      {/* Ambient background glow & WebGL interactive particle canvas */}
      <AmbientWebGL />
      <div className="fixed inset-0 pointer-events-none ambient-glow z-0" />
      <div className="fixed inset-0 pointer-events-none ambient-glow-purple z-0" />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Credentials />
          <BentoGrid />
          <Experience />
          <Writing />
        </main>
        <Footer />
      </div>
    </div>
  );
}
