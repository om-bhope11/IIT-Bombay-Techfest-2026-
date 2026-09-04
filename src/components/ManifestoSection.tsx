import React from 'react';
import { ArrowUpRight, Cpu, Globe2, Sparkles, Terminal } from 'lucide-react';

export const ManifestoSection: React.FC = () => {
  return (
    <section id="manifesto" className="py-20 lg:py-24 border-t border-[#1A1A1A]/10 bg-[#F5F2ED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Meta */}
        <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]/10 text-xs font-mono text-[#1A1A1A]/60">
          <span className="uppercase tracking-[0.25em] font-bold text-[#1A1A1A]">01 // MANIFESTO & IDENTITY</span>
          <span className="hidden sm:inline">INDIAN INSTITUTE OF TECHNOLOGY BOMBAY</span>
          <span>EST. 1998</span>
        </div>

        {/* Big Editorial Statement */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-8">
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter text-[#1A1A1A] leading-[0.92]">
              THREE DAYS.
              <br />
              <span className="font-editorial italic font-normal text-[#FF4E00]">Thousands</span> OF MINDS.
              <br />
              ONE PLACE WHERE
              <br />
              <span className="border-b-4 border-[#FF4E00] inline-block pb-1">IDEAS COLLIDE.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pt-3 space-y-5">
            <p className="text-base sm:text-lg font-body text-[#1A1A1A] leading-relaxed">
              Techfest is completely student-conceived, student-engineered, and student-executed. From its origin as a quiet campus initiative in 1998, it has grown into Asia&apos;s preeminent nexus of science, experimental technology, and cultural collision.
            </p>
            <p className="text-xs sm:text-sm font-body text-[#1A1A1A]/70 leading-relaxed">
              Every December, the 550-acre wooded campus of IIT Bombay transforms into an open laboratory where Nobel laureates engage first-year coders, heavyweight combat robots shatter steel armor, and breakthroughs in quantum systems and climate tech are tested in public view.
            </p>

            <div className="pt-3 flex flex-wrap gap-2 text-[10px] font-mono text-[#1A1A1A]">
              <span className="px-3 py-1 bg-[#E5E2DD] border border-[#1A1A1A]/20 font-bold tracking-wider">#STUDENT_LED</span>
              <span className="px-3 py-1 bg-[#E5E2DD] border border-[#1A1A1A]/20 font-bold tracking-wider">#FREE_CAMPUS_ENTRY</span>
              <span className="px-3 py-1 bg-[#E5E2DD] border border-[#1A1A1A]/20 font-bold tracking-wider">#GLOBAL_COMMUNITY</span>
            </div>
          </div>
        </div>

        {/* Editorial Photo Collage & Highlights (Sharp Geometric Cards) */}
        <div className="mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tile 1: Student Builders */}
          <div className="group relative bg-[#E5E2DD]/70 border border-[#1A1A1A]/15 hover:border-[#1A1A1A] flex flex-col justify-between p-6 transition-colors duration-200">
            <div className="flex items-center justify-between text-xs font-mono text-[#1A1A1A]/60 pb-3 border-b border-[#1A1A1A]/10">
              <span className="flex items-center gap-1.5 font-bold text-[#1A1A1A]">
                <Cpu className="w-3.5 h-3.5 text-[#FF4E00]" />
                GRIT & HARDWARE
              </span>
              <span>01 / 03</span>
            </div>
            
            <div className="my-5 aspect-[16/10] overflow-hidden bg-[#1A1A1A] border border-[#1A1A1A]/10">
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
                alt="Student engineering team assembling robotic chassis"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
              />
            </div>

            <div>
              <h3 className="font-display font-black text-lg text-[#1A1A1A] tracking-tight uppercase">
                Radical Prototyping Culture
              </h3>
              <p className="mt-1.5 text-xs text-[#1A1A1A]/70 leading-relaxed font-body">
                Over 2,500 engineering colleges build robots, autonomous rovers, and solar gliders to compete for national distinction.
              </p>
            </div>
          </div>

          {/* Tile 2: World Stage */}
          <div className="group relative bg-[#E5E2DD]/70 border border-[#1A1A1A]/15 hover:border-[#1A1A1A] flex flex-col justify-between p-6 transition-colors duration-200">
            <div className="flex items-center justify-between text-xs font-mono text-[#1A1A1A]/60 pb-3 border-b border-[#1A1A1A]/10">
              <span className="flex items-center gap-1.5 font-bold text-[#1A1A1A]">
                <Globe2 className="w-3.5 h-3.5 text-[#FF4E00]" />
                GLOBAL DIALOGUE
              </span>
              <span>02 / 03</span>
            </div>

            <div className="my-5 aspect-[16/10] overflow-hidden bg-[#1A1A1A] border border-[#1A1A1A]/10">
              <img
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80"
                alt="Techfest Convocation Hall Keynote Auditorium"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
              />
            </div>

            <div>
              <h3 className="font-display font-black text-lg text-[#1A1A1A] tracking-tight uppercase">
                International Minds & Laureates
              </h3>
              <p className="mt-1.5 text-xs text-[#1A1A1A]/70 leading-relaxed font-body">
                Direct, unmoderated conversations with thinkers who mapped the cosmos, founded modern computing, and pushed human boundaries.
              </p>
            </div>
          </div>

          {/* Tile 3: Night Spectacle */}
          <div className="group relative bg-[#E5E2DD]/70 border border-[#1A1A1A]/15 hover:border-[#1A1A1A] flex flex-col justify-between p-6 transition-colors duration-200">
            <div className="flex items-center justify-between text-xs font-mono text-[#1A1A1A]/60 pb-3 border-b border-[#1A1A1A]/10">
              <span className="flex items-center gap-1.5 font-bold text-[#1A1A1A]">
                <Sparkles className="w-3.5 h-3.5 text-[#FF4E00]" />
                CULTURAL SYNTHESIS
              </span>
              <span>03 / 03</span>
            </div>

            <div className="my-5 aspect-[16/10] overflow-hidden bg-[#1A1A1A] border border-[#1A1A1A]/10">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
                alt="Open air performance Technoholix stage at IIT Bombay"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
              />
            </div>

            <div>
              <h3 className="font-display font-black text-lg text-[#1A1A1A] tracking-tight uppercase">
                Technoholix & Electric Nights
              </h3>
              <p className="mt-1.5 text-xs text-[#1A1A1A]/70 leading-relaxed font-body">
                When the sun drops behind Powai hill, technology fuses with sensory theater, world illusionists, and electronic compositions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
