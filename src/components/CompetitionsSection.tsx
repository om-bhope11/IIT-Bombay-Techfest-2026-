import React, { useState } from 'react';
import { COMPETITION_TRACKS } from '../data/festivalData';
import { CompetitionTrack } from '../types';
import { Trophy, Users, ShieldAlert, ArrowUpRight, CheckCircle, Flame } from 'lucide-react';

interface CompetitionsSectionProps {
  onRegisterTrack: (trackName: string) => void;
}

export const CompetitionsSection: React.FC<CompetitionsSectionProps> = ({ onRegisterTrack }) => {
  const [selectedTrack, setSelectedTrack] = useState<CompetitionTrack>(COMPETITION_TRACKS[0]);

  return (
    <section id="competitions" className="py-20 lg:py-24 bg-[#F5F2ED] border-b border-[#1A1A1A]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Meta */}
        <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]/10 text-xs font-mono text-[#1A1A1A]/60">
          <span className="uppercase tracking-[0.25em] font-bold text-[#1A1A1A]">04 // ARENAS & COMPETITIONS</span>
          <span className="hidden sm:inline">₹50 LAKHS+ CUMULATIVE PRIZE POOL</span>
          <span>CAMPUS STAGES</span>
        </div>

        {/* Monumental Headline */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#1A1A1A] leading-[0.88]">
              BUILD.
              <br />
              BREAK.
              <br />
              <span className="font-editorial italic font-normal text-[#FF4E00]">Rethink.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs sm:text-sm font-body text-[#1A1A1A]/70 leading-relaxed">
              Engineered under grueling constraints. Hundreds of student hardware collectives push prototypes through punishing test arenas, autonomous obstacle courses, and live algorithmic trials.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF4E00] font-bold">
              <Flame className="w-4 h-4 fill-current" />
              <span>EARLY BIRD REGISTRATION CLOSING SOON</span>
            </div>
          </div>
        </div>

        {/* Interactive Track Explorer */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Interactive Track Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            <div className="text-[10px] font-mono text-[#1A1A1A]/60 uppercase tracking-[0.2em] pb-1 font-bold">
              SELECT ACTIVE CHALLENGE ARENA:
            </div>
            {COMPETITION_TRACKS.map((track) => (
              <button
                key={track.id}
                type="button"
                onClick={() => setSelectedTrack(track)}
                className={`text-left p-4 border transition-colors duration-150 flex items-center justify-between group ${
                  selectedTrack.id === track.id
                    ? 'bg-[#1A1A1A] text-[#F5F2ED] border-[#1A1A1A]'
                    : 'bg-[#E5E2DD]/70 text-[#1A1A1A] border-[#1A1A1A]/15 hover:border-[#1A1A1A]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display font-black text-base sm:text-lg tracking-tight uppercase">
                      {track.name}
                    </span>
                    <span
                      className={`text-[9px] font-mono uppercase px-1.5 py-0.5 font-bold ${
                        selectedTrack.id === track.id
                          ? 'bg-[#FF4E00] text-white'
                          : 'bg-[#1A1A1A]/10 text-[#1A1A1A]'
                      }`}
                    >
                      {track.category}
                    </span>
                  </div>
                  <div className="text-xs font-mono mt-1 opacity-80">
                    Prize: <span className="font-bold text-[#FF4E00]">{track.prizePool}</span> • Team: {track.teamSize}
                  </div>
                </div>

                <div
                  className={`w-7 h-7 flex items-center justify-center transition-transform group-hover:translate-x-1 border ${
                    selectedTrack.id === track.id ? 'bg-[#F5F2ED] text-[#1A1A1A] border-[#F5F2ED]' : 'bg-transparent text-[#1A1A1A] border-[#1A1A1A]/20'
                  }`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Featured Track Dossier & Photography */}
          <div className="lg:col-span-7 bg-[#E5E2DD]/60 border border-[#1A1A1A]/15 p-6 sm:p-8 flex flex-col justify-between">
            {/* Top Image Preview with Technical Overlays */}
            <div className="relative aspect-[16/9] overflow-hidden bg-[#1A1A1A] border border-[#1A1A1A]">
              <img
                src={selectedTrack.image}
                alt={selectedTrack.name}
                className="w-full h-full object-cover grayscale contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-transparent to-transparent" />
              
              {/* Overlay Tags */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="bg-[#FF4E00] text-white text-[11px] font-mono font-bold px-2.5 py-1">
                  PRIZE POOL {selectedTrack.prizePool}
                </span>
                <span className="bg-[#1A1A1A]/90 backdrop-blur text-[#F5F2ED] text-[11px] font-mono px-2.5 py-1 border border-[#F5F2ED]/20">
                  {selectedTrack.arenaType}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-[#F5F2ED]">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#F5F2ED]/60 font-bold">
                  CHALLENGE CODE // {selectedTrack.id.toUpperCase()}
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight">
                  {selectedTrack.name}
                </h3>
              </div>
            </div>

            {/* Dossier Details */}
            <div className="mt-6 space-y-4">
              <p className="font-display font-bold text-lg text-[#1A1A1A] uppercase tracking-wide">
                {selectedTrack.tagline}
              </p>
              
              <p className="text-xs sm:text-sm font-body text-[#1A1A1A]/70 leading-relaxed">
                {selectedTrack.summary}
              </p>

              <div className="p-4 bg-[#F5F2ED] border border-[#1A1A1A]/15 space-y-2">
                <div className="text-xs font-mono font-bold text-[#1A1A1A] uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-[#FF4E00]" />
                  TECHNICAL SPECIFICATIONS & ELIGIBILITY:
                </div>
                <p className="text-xs font-body text-[#1A1A1A]/70 leading-relaxed">
                  {selectedTrack.rulesOverview}
                </p>
              </div>

              {/* Action Bar */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#1A1A1A]/10">
                <div className="flex items-center gap-4 text-xs font-mono text-[#1A1A1A]/70">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#FF4E00]" />
                    <span>{selectedTrack.teamSize}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Trophy className="w-4 h-4 text-[#FF4E00]" />
                    <span>Certified Trophy & Grant</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onRegisterTrack(selectedTrack.name)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1A1A1A] hover:bg-[#FF4E00] text-[#F5F2ED] font-mono font-bold text-xs uppercase tracking-widest transition-colors duration-150 border border-[#1A1A1A]"
                >
                  <span>REGISTER SQUAD FOR {selectedTrack.name.split(' ')[0]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
