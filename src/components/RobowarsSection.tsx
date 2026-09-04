import React, { useState } from 'react';
import { ROBOWARS_WEIGHT_CLASSES } from '../data/festivalData';
import { Shield, Zap, Flame, Crosshair, AlertTriangle, Disc, Gauge } from 'lucide-react';

export const RobowarsSection: React.FC = () => {
  const [selectedWeight, setSelectedWeight] = useState(2); // Default Heavyweight
  const currentClass = ROBOWARS_WEIGHT_CLASSES[selectedWeight];

  return (
    <section id="robowars" className="py-20 lg:py-24 bg-[#E5E2DD]/70 border-b border-[#1A1A1A]/10 relative overflow-hidden">
      {/* Geometric Grid Texture */}
      <div className="absolute inset-0 geometric-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header Meta */}
        <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]/10 text-xs font-mono text-[#1A1A1A]/60">
          <span className="uppercase tracking-[0.25em] font-bold text-[#FF4E00]">
            05 // THE KINETIC COLISEUM
          </span>
          <span className="hidden sm:inline">GYMKHANA GROUNDS • BALLISTIC CAGE 01</span>
          <span>120KG COMBAT</span>
        </div>

        {/* Oversized Headline */}
        <div className="mt-12 max-w-4xl">
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#1A1A1A] leading-[0.88]">
            WHEN MACHINES
            <br />
            ENTER THE <span className="font-editorial italic font-normal text-[#FF4E00]">Arena.</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm font-body text-[#1A1A1A]/70 max-w-2xl leading-relaxed">
            Asia’s most brutal battle arena. Solid Hardox 500 steel chassis, high-pressure pneumatic rams, and kinetic energy spinners rotating at 8,000 RPM inside a certified 12mm polycarbonate enclosure.
          </p>
        </div>

        {/* Visual Arena Layout & Telemetry Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Real Photography + 2D Technical Schematic Overlay */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#F5F2ED] border border-[#1A1A1A]/15 p-6 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-[#1A1A1A]/60 pb-3 border-b border-[#1A1A1A]/10">
              <span className="flex items-center gap-1.5 font-bold text-[#1A1A1A]">
                <Crosshair className="w-4 h-4 text-[#FF4E00]" />
                ARENA CONTAINMENT BLUEPRINT // SPEC 30.4
              </span>
              <span className="font-bold text-[#FF4E00]">LIVE SENSORS ACTIVE</span>
            </div>

            {/* Visual Photography Composition */}
            <div className="relative my-4 aspect-[16/10] overflow-hidden bg-[#1A1A1A] border border-[#1A1A1A]">
              <img
                src="https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1000&q=80"
                alt="Combat robot sparks inside Techfest arena"
                className="w-full h-full object-cover contrast-125 brightness-90"
              />
              
              {/* Technical 2D Line Overlay Drawing */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50" viewBox="0 0 400 250">
                <rect x="20" y="20" width="360" height="210" fill="none" stroke="#F5F2ED" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="200" cy="125" r="50" fill="none" stroke="#FF4E00" strokeWidth="1.5" />
                <line x1="200" y1="20" x2="200" y2="230" stroke="#F5F2ED" strokeWidth="0.75" strokeDasharray="2 2" />
                <line x1="20" y1="125" x2="380" y2="125" stroke="#F5F2ED" strokeWidth="0.75" strokeDasharray="2 2" />
                <text x="35" y="45" fill="#F5F2ED" fontSize="9" fontFamily="monospace">PIT HAZARD ALPHA</text>
                <text x="270" y="215" fill="#F5F2ED" fontSize="9" fontFamily="monospace">SPINNER BRAKE ZONE</text>
              </svg>

              {/* Real-time Telemetry Overlay Pill */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#1A1A1A]/90 backdrop-blur-md p-3 border border-[#F5F2ED]/20 flex items-center justify-between text-[#F5F2ED] text-xs font-mono">
                <div>
                  <div className="text-[9px] text-[#F5F2ED]/60 uppercase">SPINNER VELOCITY</div>
                  <div className="text-sm font-bold text-[#FF4E00]">{currentClass.rpm}</div>
                </div>
                <div>
                  <div className="text-[9px] text-[#F5F2ED]/60 uppercase">IMPACT DISCHARGE</div>
                  <div className="text-sm font-bold">{currentClass.impactEnergy}</div>
                </div>
                <div>
                  <div className="text-[9px] text-[#F5F2ED]/60 uppercase">CONTAINMENT</div>
                  <div className="text-sm font-bold text-emerald-400">12mm Hardox / Polycarb</div>
                </div>
              </div>
            </div>

            {/* Bottom Technical Notes */}
            <div className="grid grid-cols-3 gap-3 pt-2 text-center text-xs font-mono">
              <div className="p-2.5 bg-[#E5E2DD]/70 border border-[#1A1A1A]/10">
                <div className="text-[#1A1A1A]/60 text-[10px] uppercase">CAGE DIMENSION</div>
                <div className="font-bold text-[#1A1A1A]">32ft x 32ft x 16ft</div>
              </div>
              <div className="p-2.5 bg-[#E5E2DD]/70 border border-[#1A1A1A]/10">
                <div className="text-[#1A1A1A]/60 text-[10px] uppercase">PNEUMATIC PRESSURE</div>
                <div className="font-bold text-[#1A1A1A]">150 PSI Flips</div>
              </div>
              <div className="p-2.5 bg-[#E5E2DD]/70 border border-[#1A1A1A]/10">
                <div className="text-[#1A1A1A]/60 text-[10px] uppercase">TOTAL PRIZE</div>
                <div className="font-bold text-[#FF4E00]">₹15,00,000</div>
              </div>
            </div>
          </div>

          {/* Right Column: Weight Class Interactive Breakdown */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#F5F2ED] border border-[#1A1A1A]/15 p-6 sm:p-8">
            <div>
              <div className="text-xs font-mono text-[#1A1A1A]/60 uppercase tracking-wider mb-2 font-bold">
                OFFICIAL WEIGHT DIVISIONS
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#1A1A1A] uppercase tracking-tight">
                Combat Categories
              </h3>
              <p className="mt-1 text-xs font-body text-[#1A1A1A]/70">
                Each class operates under specialized kinetic thresholds and structural safety regulations.
              </p>

              {/* Weight Tabs */}
              <div className="mt-6 flex flex-col gap-2.5">
                {ROBOWARS_WEIGHT_CLASSES.map((wc, idx) => (
                  <button
                    key={wc.name}
                    type="button"
                    onClick={() => setSelectedWeight(idx)}
                    className={`text-left p-4 border transition-colors duration-150 ${
                      selectedWeight === idx
                        ? 'bg-[#1A1A1A] text-[#F5F2ED] border-[#1A1A1A]'
                        : 'bg-[#E5E2DD]/70 text-[#1A1A1A] border-[#1A1A1A]/15 hover:border-[#1A1A1A]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-display font-black text-lg uppercase tracking-tight">
                        {wc.name}
                      </div>
                      <div
                        className={`text-xs font-mono font-bold px-2 py-0.5 ${
                          selectedWeight === idx ? 'bg-[#FF4E00] text-white' : 'bg-[#1A1A1A]/10 text-[#1A1A1A]'
                        }`}
                      >
                        {wc.weight}
                      </div>
                    </div>

                    <p
                      className={`text-xs mt-2 leading-relaxed font-body ${
                        selectedWeight === idx ? 'text-[#F5F2ED]/70' : 'text-[#1A1A1A]/70'
                      }`}
                    >
                      {wc.desc}
                    </p>

                    <div className="mt-3 flex items-center justify-between text-[11px] font-mono pt-2 border-t border-current/10">
                      <span>{wc.rpm}</span>
                      <span className="font-bold text-[#FF4E00]">{wc.highlight}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Arena Safety Advisory */}
            <div className="mt-6 p-4 bg-[#E5E2DD]/70 border border-[#FF4E00]/40 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#FF4E00] shrink-0 mt-0.5" />
              <div className="text-xs font-body text-[#1A1A1A]/80">
                <strong className="text-[#1A1A1A] block font-mono uppercase font-bold text-[11px]">Audience Containment Protocol:</strong>
                All spectators seated behind dual-layer ballistic shields. Strict wireless frequency failsafes mandatory on all vehicle speed controllers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
