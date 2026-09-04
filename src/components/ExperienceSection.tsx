import React, { useState } from 'react';
import { EXPERIENCE_ITEMS } from '../data/festivalData';
import { ExperienceItem } from '../types';
import { Sparkles, MapPin, Clock, ArrowRight, Eye } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [activeExp, setActiveExp] = useState<ExperienceItem>(EXPERIENCE_ITEMS[0]);

  return (
    <section id="experience" className="py-20 lg:py-24 bg-[#E5E2DD]/70 border-b border-[#1A1A1A]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Meta */}
        <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]/10 text-xs font-mono text-[#1A1A1A]/60">
          <span className="uppercase tracking-[0.25em] font-bold text-[#FF4E00]">
            08 // FESTIVAL ATMOSPHERE & IMMERSION
          </span>
          <span className="hidden sm:inline">550-ACRE CAMPUS LIFE</span>
          <span>BEYOND COMPETITIONS</span>
        </div>

        {/* Big Editorial Headline */}
        <div className="mt-12 max-w-3xl">
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-[#1A1A1A] uppercase">
            MORE THAN <span className="font-editorial italic font-normal text-[#FF4E00] lowercase">Machinery.</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm font-body text-[#1A1A1A]/70 leading-relaxed">
            Techfest is an unrepeatable cultural phenomenon. By night, pyrotechnics illuminate the Mumbai skyline. By day, cutting-edge art installations intersect with student curiosity across Powai Lake.
          </p>
        </div>

        {/* Interactive Experience Navigator */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Tab selectors */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-3">
            <div className="flex flex-col gap-2.5">
              {EXPERIENCE_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveExp(item)}
                  className={`text-left p-5 border transition-colors duration-150 ${
                    activeExp.id === item.id
                      ? 'bg-[#1A1A1A] text-[#F5F2ED] border-[#1A1A1A]'
                      : 'bg-[#F5F2ED] text-[#1A1A1A] border-[#1A1A1A]/15 hover:border-[#1A1A1A]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider opacity-70 font-bold">
                      0{idx + 1} // {item.tag}
                    </span>
                    <span
                      className={`text-[9px] font-mono font-bold px-2 py-0.5 ${
                        activeExp.id === item.id ? 'bg-[#FF4E00] text-white' : 'bg-[#1A1A1A]/10 text-[#1A1A1A]'
                      }`}
                    >
                      LIVE ZONE
                    </span>
                  </div>
                  <div className="font-display font-black text-lg sm:text-xl mt-1 uppercase tracking-tight">
                    {item.title}
                  </div>
                  <div className={`text-xs mt-1 font-body ${activeExp.id === item.id ? 'text-[#F5F2ED]/70' : 'text-[#1A1A1A]/60'}`}>
                    {item.subtitle}
                  </div>
                </button>
              ))}
            </div>

            <div className="p-4 bg-[#F5F2ED] border border-[#1A1A1A]/15 text-xs font-mono text-[#1A1A1A]/70">
              <div className="font-bold text-[#1A1A1A] uppercase tracking-wider mb-1 flex items-center gap-1.5 text-[11px]">
                <Sparkles className="w-3.5 h-3.5 text-[#FF4E00]" />
                CAMPUS ACCESS RULES:
              </div>
              All registered attendees receive free open access to Technoholix night shows and daylight exhibition lawns with verified digital festival passes.
            </div>
          </div>

          {/* Right: Immersive Wide Display */}
          <div className="lg:col-span-8 bg-[#F5F2ED] border border-[#1A1A1A]/15 p-6 sm:p-8 flex flex-col justify-between">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A1A] border border-[#1A1A1A]">
              <img
                src={activeExp.image}
                alt={activeExp.title}
                className="w-full h-full object-cover grayscale-[20%] transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-black/20 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="bg-[#FF4E00] text-white text-[11px] font-mono px-2.5 py-1 font-bold">
                  {activeExp.tag}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-[#F5F2ED]">
                <div className="text-[10px] font-mono text-[#F5F2ED]/60 uppercase tracking-widest font-bold">
                  IMMERSIVE STORY // {activeExp.subtitle}
                </div>
                <h3 className="font-display font-black text-2xl sm:text-4xl mt-1 uppercase tracking-tight">
                  {activeExp.title}
                </h3>
              </div>
            </div>

            <div className="mt-6 flex flex-col justify-between">
              <p className="text-sm sm:text-base font-body text-[#1A1A1A]/80 leading-relaxed">
                {activeExp.description}
              </p>

              <div className="mt-6 pt-4 border-t border-[#1A1A1A]/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#1A1A1A]/60">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#FF4E00]" />
                  <span>{activeExp.timeSlot}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#FF4E00]" />
                  <span>{activeExp.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
