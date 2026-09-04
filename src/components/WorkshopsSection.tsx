import React from 'react';
import { WORKSHOP_LIST } from '../data/festivalData';
import { WorkshopItem } from '../types';
import { BookOpen, Award, Clock, ArrowUpRight, CheckCircle, Sparkles } from 'lucide-react';

interface WorkshopsSectionProps {
  onRegisterWorkshop: (workshop: WorkshopItem) => void;
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = ({ onRegisterWorkshop }) => {
  return (
    <section id="workshops" className="py-20 lg:py-24 bg-[#F5F2ED] border-b border-[#1A1A1A]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Meta */}
        <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]/10 text-xs font-mono text-[#1A1A1A]/60">
          <span className="uppercase tracking-[0.25em] font-bold text-[#1A1A1A]">06 // MASTERCLASSES & WORKSHOPS</span>
          <span className="hidden sm:inline">CERTIFICATION GRANTED BY TECHFEST IIT BOMBAY</span>
          <span>LIMITED LAB SEATS</span>
        </div>

        {/* Editorial Headline */}
        <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-[#1A1A1A] uppercase">
              HANDS-ON <span className="font-editorial italic font-normal text-[#FF4E00] lowercase">Mastery.</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm font-body text-[#1A1A1A]/70 max-w-xl leading-relaxed">
              Intensive, small-cohort laboratories led by research faculty and industry pioneers. Walk away with deployed hardware code and recognized certification.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-[#E5E2DD]/70 border border-[#1A1A1A]/15 px-4 py-2 text-xs font-mono text-[#1A1A1A]">
            <Award className="w-4 h-4 text-[#FF4E00]" />
            <span className="font-bold">IIT BOMBAY CERTIFICATE ISSUED</span>
          </div>
        </div>

        {/* Workshop Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKSHOP_LIST.map((ws) => (
            <div
              key={ws.id}
              className="group bg-[#E5E2DD]/60 border border-[#1A1A1A]/15 hover:border-[#1A1A1A] transition-colors duration-150 flex flex-col justify-between p-5"
            >
              <div>
                {/* Image Module */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A1A] border border-[#1A1A1A]/15">
                  <img
                    src={ws.image}
                    alt={ws.title}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#1A1A1A] text-[#F5F2ED] font-mono text-[9px] uppercase px-2 py-0.5 font-bold">
                    {ws.domain}
                  </div>
                  <div className="absolute top-2.5 right-2.5 bg-[#F5F2ED] text-[#1A1A1A] font-mono text-[9px] px-1.5 py-0.5 border border-[#1A1A1A]/20 font-bold">
                    {ws.level}
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="font-display font-black text-base sm:text-lg text-[#1A1A1A] leading-snug group-hover:text-[#FF4E00] transition-colors uppercase">
                    {ws.title}
                  </h3>
                  <div className="text-[11px] font-mono text-[#1A1A1A]/60 mt-1">
                    {ws.instructor}
                  </div>
                </div>

                {/* Key Syllabus Bullet Points */}
                <div className="mt-4 space-y-1.5 border-t border-[#1A1A1A]/10 pt-3">
                  <div className="text-[10px] font-mono uppercase text-[#1A1A1A]/50 font-bold">CORE SYLLABUS:</div>
                  {ws.keyTopics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs font-body text-[#1A1A1A]/80">
                      <CheckCircle className="w-3.5 h-3.5 text-[#FF4E00] shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-tight">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metadata & Button */}
              <div className="mt-6 pt-4 border-t border-[#1A1A1A]/10">
                <div className="flex items-center justify-between text-xs font-mono mb-3 text-[#1A1A1A]/60">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#FF4E00]" />
                    <span>{ws.duration}</span>
                  </div>
                  <span className="text-[#FF4E00] font-bold">
                    {ws.spotsLeft} seats left
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onRegisterWorkshop(ws)}
                  className="w-full py-2.5 px-3 bg-[#1A1A1A] hover:bg-[#FF4E00] text-[#F5F2ED] font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 border border-[#1A1A1A]"
                >
                  <span>RESERVE LAB BENCH</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
