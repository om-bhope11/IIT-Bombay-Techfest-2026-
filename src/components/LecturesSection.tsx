import React, { useRef } from 'react';
import { LUMINARY_SPEAKERS } from '../data/festivalData';
import { ChevronLeft, ChevronRight, Quote, Sparkles, Mic2 } from 'lucide-react';

export const LecturesSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="lectures" className="py-20 lg:py-24 bg-[#F5F2ED] border-b border-[#1A1A1A]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Meta */}
        <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]/10 text-xs font-mono text-[#1A1A1A]/60">
          <span className="uppercase tracking-[0.25em] font-bold text-[#1A1A1A]">07 // LUMINARY KEYNOTE SERIES</span>
          <span className="hidden sm:inline">CONVOCATION HALL AUDITORIUM</span>
          <span>NOBEL LAUREATES & PIONEERS</span>
        </div>

        {/* Section Title & Carousel Controls */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-[#1A1A1A] uppercase">
              PEOPLE WHO SHAPE
              <br />
              <span className="font-editorial italic font-normal text-[#FF4E00] lowercase">Tomorrow.</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm font-body text-[#1A1A1A]/70 max-w-xl leading-relaxed">
              Every edition brings world-renowned scientists, astronauts, and architectural visionaries to IIT Bombay for unrestrained discourse with the next generation.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-[#1A1A1A] bg-[#E5E2DD]/70 hover:bg-[#1A1A1A] hover:text-[#F5F2ED] flex items-center justify-center transition-colors"
              aria-label="Scroll left speakers"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-[#1A1A1A] bg-[#E5E2DD]/70 hover:bg-[#1A1A1A] hover:text-[#F5F2ED] flex items-center justify-center transition-colors"
              aria-label="Scroll right speakers"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Gallery */}
      <div className="mt-12 pl-4 sm:pl-6 lg:pl-8 overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-6 pr-8 scroll-smooth"
        >
          {LUMINARY_SPEAKERS.map((speaker, index) => (
            <div
              key={speaker.id}
              className="w-[300px] sm:w-[360px] shrink-0 bg-[#E5E2DD]/60 border border-[#1A1A1A]/15 hover:border-[#1A1A1A] flex flex-col justify-between p-6 group transition-colors duration-150"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between text-xs font-mono text-[#1A1A1A]/60 pb-3 border-b border-[#1A1A1A]/10">
                  <span className="text-[#FF4E00] font-bold">{speaker.edition}</span>
                  <span>SERIES 0{index + 1}</span>
                </div>

                {/* Editorial Portrait */}
                <div className="relative my-4 aspect-[4/5] overflow-hidden bg-[#1A1A1A] border border-[#1A1A1A]">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-[#F5F2ED]">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#F5F2ED]/60 font-bold">
                      KEYNOTE TOPIC
                    </span>
                    <div className="font-display font-bold text-sm leading-snug">
                      &ldquo;{speaker.topic}&rdquo;
                    </div>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="mt-2">
                  <h3 className="font-display font-black text-2xl text-[#1A1A1A] group-hover:text-[#FF4E00] transition-colors uppercase">
                    {speaker.name}
                  </h3>
                  <div className="text-xs font-mono font-bold text-[#1A1A1A] mt-1">
                    {speaker.role}
                  </div>
                  <div className="text-xs font-body text-[#1A1A1A]/60">
                    {speaker.institution}
                  </div>
                </div>
              </div>

              {/* Editorial Quote */}
              <div className="mt-6 pt-4 border-t border-[#1A1A1A]/10 bg-[#F5F2ED] p-3 border border-[#1A1A1A]/10">
                <Quote className="w-3.5 h-3.5 text-[#FF4E00] mb-1" />
                <p className="font-editorial italic text-sm sm:text-base text-[#1A1A1A] leading-snug">
                  &ldquo;{speaker.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
