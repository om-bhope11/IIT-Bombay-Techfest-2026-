import React, { useState } from 'react';
import { ARCHIVE_TIMELINE } from '../data/festivalData';
import { ArchiveMilestone } from '../types';
import { History, Calendar, Award, Users, ChevronRight } from 'lucide-react';

export const ArchiveSection: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const currentArchive = ARCHIVE_TIMELINE.find((a) => a.year === selectedYear) || ARCHIVE_TIMELINE[ARCHIVE_TIMELINE.length - 1];

  return (
    <section id="archive" className="py-20 lg:py-24 bg-[#F5F2ED] border-b border-[#1A1A1A]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Meta */}
        <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]/10 text-xs font-mono text-[#1A1A1A]/60">
          <span className="uppercase tracking-[0.25em] font-bold text-[#1A1A1A]">09 // 30-YEAR CHRONICLE</span>
          <span className="hidden sm:inline">1998 — 2026</span>
          <span>ARCHIVAL REPOSITORY</span>
        </div>

        {/* Section Headline */}
        <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-[#1A1A1A] uppercase">
              THE ARCHIVE <span className="font-editorial italic font-normal text-[#FF4E00] lowercase">Legacy.</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm font-body text-[#1A1A1A]/70 max-w-xl leading-relaxed">
              Tracing thirty unbroken years of student vision, technological leaps, and landmark milestones that turned a campus gathering into Asia’s largest festival.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#1A1A1A] bg-[#E5E2DD]/70 px-4 py-2 border border-[#1A1A1A]/15 font-bold">
            <History className="w-4 h-4 text-[#FF4E00]" />
            <span>30 EDITIONS AUDITED</span>
          </div>
        </div>

        {/* Interactive Year Selector Timeline Strip */}
        <div className="mt-12 overflow-x-auto no-scrollbar pb-2">
          <div className="flex items-center gap-2 min-w-max border-b border-[#1A1A1A]/15 pb-4">
            {ARCHIVE_TIMELINE.map((item) => (
              <button
                key={item.year}
                type="button"
                onClick={() => setSelectedYear(item.year)}
                className={`px-5 py-3 font-mono text-sm font-bold transition-colors duration-150 flex flex-col items-start border ${
                  selectedYear === item.year
                    ? 'bg-[#1A1A1A] text-[#F5F2ED] border-[#1A1A1A]'
                    : 'bg-[#E5E2DD]/70 text-[#1A1A1A] border-[#1A1A1A]/15 hover:border-[#1A1A1A]'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-base sm:text-lg font-black">{item.year}</span>
                  {item.year === 2026 && (
                    <span className="w-2 h-2 rounded-full bg-[#FF4E00] animate-ping" />
                  )}
                </div>
                <span className="text-[10px] font-normal tracking-wide opacity-80 uppercase">
                  {item.edition}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Milestone Showcase Card */}
        <div className="mt-10 bg-[#E5E2DD]/60 border border-[#1A1A1A]/15 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Archival Photography */}
          <div className="lg:col-span-5 relative aspect-[4/3] overflow-hidden bg-[#1A1A1A] border border-[#1A1A1A]">
            <img
              src={currentArchive.image}
              alt={`Techfest ${currentArchive.year} ${currentArchive.theme}`}
              className="w-full h-full object-cover grayscale contrast-115"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-transparent to-transparent" />
            
            <div className="absolute top-3 left-3 bg-[#1A1A1A] text-white text-[11px] font-mono px-2.5 py-1 font-bold">
              ARCHIVE REF // {currentArchive.year}
            </div>

            <div className="absolute bottom-3 left-3 right-3 text-white font-mono">
              <div className="text-[9px] text-[#F5F2ED]/60 uppercase">RECORDED ATTENDANCE</div>
              <div className="font-display font-black text-lg">{currentArchive.footfall}</div>
            </div>
          </div>

          {/* Archival Text & Narrative */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3 font-mono">
              <span className="text-xs uppercase tracking-widest text-[#FF4E00] font-bold">
                {currentArchive.edition}
              </span>
              <span className="text-[#1A1A1A]/40">•</span>
              <span className="text-xs text-[#1A1A1A]/60 uppercase font-bold">
                THEME: {currentArchive.theme}
              </span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-4xl text-[#1A1A1A] leading-tight uppercase">
              {currentArchive.milestone}
            </h3>

            <p className="text-sm sm:text-base font-body text-[#1A1A1A]/80 leading-relaxed">
              {currentArchive.description}
            </p>

            <div className="pt-4 flex items-center gap-6 border-t border-[#1A1A1A]/10 text-xs font-mono text-[#1A1A1A]/70">
              <div>
                <span className="block text-[10px] text-[#1A1A1A]/50 uppercase">CAMPUS HUB</span>
                <span className="font-bold text-[#1A1A1A]">IIT Bombay, Powai</span>
              </div>
              <div>
                <span className="block text-[10px] text-[#1A1A1A]/50 uppercase">RECORD AUDIT</span>
                <span className="font-bold text-[#FF4E00]">Verified Official Registry</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
