import React, { useEffect, useState, useRef } from 'react';
import { FESTIVAL_STATS } from '../data/festivalData';
import { Award, Users, CalendarDays, GraduationCap, Globe, IndianRupee } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const [activeStatIndex, setActiveStatIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counters smoothly
          const duration = 1800; // ms
          const startTime = performance.now();

          const step = (currentTime: number) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);

            setCounts(
              FESTIVAL_STATS.map((stat) => Math.round(stat.numericValue * eased))
            );

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCounts(FESTIVAL_STATS.map((stat) => stat.numericValue));
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const statIcons = [
    <Award key="0" className="w-4 h-4 text-[#E63E26]" />,
    <Users key="1" className="w-4 h-4 text-[#E63E26]" />,
    <CalendarDays key="2" className="w-4 h-4 text-[#E63E26]" />,
    <GraduationCap key="3" className="w-4 h-4 text-[#E63E26]" />,
    <Globe key="4" className="w-4 h-4 text-[#E63E26]" />,
    <IndianRupee key="5" className="w-4 h-4 text-[#E63E26]" />,
  ];

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="py-16 sm:py-20 border-y border-[#1A1A1A]/15 bg-[#E5E2DD]/70 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strip Header */}
        <div className="flex flex-wrap items-center justify-between pb-6 border-b border-[#1A1A1A]/10 text-xs font-mono text-[#1A1A1A]/60">
          <span className="uppercase tracking-[0.25em] font-bold text-[#1A1A1A]">02 // QUANTIFIABLE IMPACT & SCALE</span>
          <span className="font-bold text-[#1A1A1A]">AUDITED METRICS • 30TH EDITION</span>
        </div>

        {/* 6-Column High-Contrast Geometric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-[#1A1A1A]/15 border border-[#1A1A1A]/15 bg-[#F5F2ED]">
          {FESTIVAL_STATS.map((stat, idx) => (
            <div
              key={stat.label}
              onMouseEnter={() => setActiveStatIndex(idx)}
              onMouseLeave={() => setActiveStatIndex(null)}
              className={`p-5 sm:p-6 flex flex-col justify-between transition-colors duration-150 cursor-default ${
                activeStatIndex === idx ? 'bg-[#1A1A1A] text-[#F5F2ED]' : 'hover:bg-[#E5E2DD]/50'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-mono uppercase tracking-wider ${activeStatIndex === idx ? 'text-[#F5F2ED]/60' : 'text-[#1A1A1A]/50'}`}>
                  STAT // 0{idx + 1}
                </span>
                <span className={activeStatIndex === idx ? 'text-[#FF4E00]' : 'text-[#FF4E00]'}>
                  {statIcons[idx]}
                </span>
              </div>

              <div className="my-2">
                <div className="font-display font-black text-3xl sm:text-4xl lg:text-3xl xl:text-4xl tracking-tighter">
                  {hasAnimated ? (
                    <>
                      {idx === 1
                        ? counts[idx].toLocaleString('en-IN')
                        : counts[idx]}
                      <span className="text-[#FF4E00] text-2xl font-bold ml-0.5">{stat.suffix}</span>
                    </>
                  ) : (
                    stat.value
                  )}
                </div>
                <div className={`text-[11px] font-mono uppercase tracking-wider font-bold mt-1 ${activeStatIndex === idx ? 'text-[#F5F2ED]/90' : 'text-[#1A1A1A]'}`}>
                  {stat.label}
                </div>
              </div>

              <p className={`text-[11px] font-body mt-3 leading-snug border-t pt-2 ${
                activeStatIndex === idx 
                  ? 'border-[#F5F2ED]/20 text-[#F5F2ED]/70' 
                  : 'border-[#1A1A1A]/10 text-[#1A1A1A]/70'
              }`}>
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Subtle Footnote */}
        <div className="mt-6 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#1A1A1A]/60">
          <span>ALL METRICS AUDITED AT IIT BOMBAY CAMPUS FACILITIES</span>
          <span className="text-[#1A1A1A] font-bold">1998 — 2026</span>
        </div>
      </div>
    </section>
  );
};
