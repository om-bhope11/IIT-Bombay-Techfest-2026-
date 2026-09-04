import React from 'react';
import { ArrowDown, ArrowUpRight, Compass, Calendar, MapPin, Radio, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onEnterFest: () => void;
  onExploreEvents: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onEnterFest, onExploreEvents }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-80px)] pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between overflow-hidden"
    >
      {/* Top Technical Metadata Bar */}
      <div className="w-full flex flex-wrap items-center justify-between gap-4 py-3 border-y border-[#1A1A1A]/10 text-xs font-mono text-[#1A1A1A]/70">
        <div className="flex items-center gap-2.5">
          <span className="inline-block w-2 h-2 rounded-full bg-[#FF4E00] animate-ping" />
          <span className="font-bold text-[#1A1A1A]">OFFICIAL PORTAL</span>
          <span className="text-[#1A1A1A]/30">/</span>
          <span>EST. 1998</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#FF4E00]" />
            <span>16—18 DECEMBER 2026</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#FF4E00]" />
            <span>IIT BOMBAY CAMPUS [19.1334° N, 72.9133° E]</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-[#1A1A1A] text-[#F5F2ED] text-[10px] font-bold uppercase tracking-wider">
            ASIA&apos;S LARGEST
          </span>
          <span className="text-[10px] uppercase tracking-wider text-[#1A1A1A]/60">SCIENCE & TECH FESTIVAL</span>
        </div>
      </div>

      {/* Main Geometric Balanced Architectural Grid */}
      <div className="my-8 lg:my-10 grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#1A1A1A]/10 bg-[#F5F2ED]">
        {/* Left Column: Monumental Stacked Typography */}
        <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-[#1A1A1A]/10 p-8 sm:p-12 flex flex-col justify-between bg-[#F5F2ED]">
          <div>
            <div className="mb-4">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#1A1A1A]/50">
                30TH EDITION
              </span>
              <div className="h-[1px] w-12 bg-[#1A1A1A] mt-2" />
            </div>

            <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[108px] leading-[0.85] font-black tracking-tighter mb-6 text-[#1A1A1A]">
              TECH<br />FEST<br /><span className="text-[#FF4E00]">30</span>
            </h1>

            <p className="text-base sm:text-lg font-bold leading-snug uppercase max-w-sm mb-4 text-[#1A1A1A] tracking-wider">
              WHERE THE FUTURE BECOMES REAL.
            </p>

            <p className="text-xs sm:text-sm font-body text-[#1A1A1A]/70 leading-relaxed max-w-md mb-8">
              Three days of unbridled engineering ambition, international combat robotics, breakthrough summits, and student innovation on the historic campus of IIT Bombay.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                id="hero-enter-fest-btn"
                onClick={onEnterFest}
                className="bg-[#1A1A1A] text-white hover:bg-[#FF4E00] px-7 sm:px-8 py-3.5 sm:py-4 text-[12px] font-bold tracking-widest uppercase transition-colors border border-[#1A1A1A] flex items-center gap-2"
              >
                <span>ENTER TECHFEST</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                id="hero-explore-events-btn"
                onClick={onExploreEvents}
                className="border border-[#1A1A1A] bg-transparent text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white px-7 sm:px-8 py-3.5 sm:py-4 text-[12px] font-bold tracking-widest uppercase transition-colors flex items-center gap-2"
              >
                <Compass className="w-4 h-4" />
                <span>EXPLORE EVENTS</span>
              </button>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#1A1A1A]/10 flex flex-col gap-1">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#1A1A1A]">
              IIT Bombay Campus, Powai
            </span>
            <span className="text-[11px] text-[#1A1A1A]/60 tracking-widest uppercase font-mono">
              16—18 DECEMBER 2026
            </span>
          </div>
        </div>

        {/* Right Column: Geometric Wireframe Showcase & Telemetry */}
        <div className="lg:col-span-6 flex flex-col">
          {/* Upper Section: Architectural Wireframe Box Canvas */}
          <div className="flex-1 min-h-[380px] sm:min-h-[440px] relative overflow-hidden bg-[#E5E2DD] flex items-center justify-center p-6 border-b border-[#1A1A1A]/10">
            {/* Geometric Rotated Wireframes */}
            <div className="w-60 sm:w-72 h-80 sm:h-96 border border-[#1A1A1A]/20 transform rotate-6 absolute pointer-events-none" />
            <div className="w-60 sm:w-72 h-80 sm:h-96 border border-[#1A1A1A]/20 transform -rotate-3 absolute pointer-events-none" />
            <div className="w-64 sm:w-80 h-72 sm:h-84 border border-[#FF4E00]/30 transform rotate-12 absolute pointer-events-none" />

            {/* Central Solid High-Contrast Photographic Block */}
            <div className="w-68 sm:w-80 h-72 sm:h-80 bg-[#1A1A1A] relative z-10 flex flex-col justify-end p-6 overflow-hidden shadow-2xl border border-[#1A1A1A] group">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                alt="IIT Bombay combat robotics pit"
                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:scale-105 group-hover:opacity-60 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent" />
              
              <div className="relative z-10">
                <div className="text-[10px] font-mono text-[#FF4E00] uppercase tracking-widest mb-1 font-bold">
                  FLAGSHIP ARENA // LIVE
                </div>
                <span className="text-[#F5F2ED] text-3xl sm:text-4xl font-black leading-none uppercase tracking-tighter block font-display">
                  ROBO<br />WARS
                </span>
                <span className="text-xs text-[#F5F2ED]/70 font-mono mt-1 block">
                  120KG BALLISTIC STEEL DIVISION
                </span>
              </div>
            </div>

            {/* Corner Coordinates & System Status */}
            <div className="absolute top-6 left-6 z-20 text-[10px] font-mono leading-tight uppercase tracking-wider text-[#1A1A1A]">
              [19.1334° N, 72.9133° E] <br />
              <span className="text-[#FF4E00] font-bold">SYSTEM_ACTIVE: 100%</span>
            </div>

            <div className="absolute top-6 right-6 z-20 text-[10px] font-mono leading-tight uppercase tracking-wider text-[#1A1A1A]/70 text-right">
              POWAI QUAD // 16-A <br />
              <span>REF: TF30-2026</span>
            </div>
          </div>

          {/* Lower Section: Quote & Geometric Metrics */}
          <div className="p-6 sm:p-8 bg-[#F5F2ED] flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-editorial italic text-right leading-relaxed mb-6 text-[#1A1A1A]/80">
              &ldquo;Three days. Thousands of minds. <br />
              One place where ideas collide.&rdquo;
            </p>

            <div className="grid grid-cols-2 gap-4 border-t border-[#1A1A1A]/10 pt-4">
              <div>
                <div className="text-2xl sm:text-3xl font-black leading-none tracking-tighter text-[#1A1A1A] font-display">
                  1,80,000+
                </div>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A]/50 mt-1">
                  FOOTFALL
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black leading-none tracking-tighter text-[#1A1A1A] font-display">
                  500+
                </div>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A]/50 mt-1">
                  UNIVERSITIES
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ticker & Scroll Indicator */}
      <div className="w-full pt-6 border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#1A1A1A]/60">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4E00]" />
            <span className="text-[#1A1A1A] font-bold">180,000+ EXPECTED ATTENDEES</span>
          </div>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">300+ EVENTS & LABS</span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">FREE STUDENT REGISTRATION</span>
        </div>

        <a
          href="#manifesto"
          className="flex items-center gap-2 text-[#1A1A1A] hover:text-[#FF4E00] transition-colors py-1 px-3 border border-transparent hover:border-[#1A1A1A]/20"
          aria-label="Scroll to festival manifesto"
        >
          <span className="text-xs font-bold tracking-wider uppercase">DISCOVER MANIFESTO</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#FF4E00] animate-bounce" />
        </a>
      </div>
    </section>
  );
};
