import React from 'react';
import { ArrowUpRight, Sparkles, Calendar, MapPin, Ticket, ShieldCheck } from 'lucide-react';

interface RegistrationCTAProps {
  onRegisterNow: () => void;
  onExploreFest: () => void;
}

export const RegistrationCTA: React.FC<RegistrationCTAProps> = ({ onRegisterNow, onExploreFest }) => {
  return (
    <section id="register-cta" className="py-20 lg:py-28 bg-[#F5F2ED] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Massive Geometric Card */}
        <div className="relative bg-[#1A1A1A] text-[#F5F2ED] overflow-hidden p-8 sm:p-14 lg:p-16 border border-[#1A1A1A]">
          {/* Background Photographic Montage Texture */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80"
              alt="Techfest IIT Bombay crowd and festival immersion"
              className="w-full h-full object-cover opacity-20 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-[#1A1A1A]/70" />
            <div className="absolute inset-0 geometric-grid opacity-20" />
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 max-w-3xl">
            {/* Tagline */}
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-[#F5F2ED]/60 pb-4 font-bold">
              <span className="w-2 h-2 bg-[#FF4E00] animate-pulse" />
              <span>OFFICIAL REGISTRATION // 30TH EDITION</span>
              <span>•</span>
              <span>16–18 DEC 2026</span>
            </div>

            {/* Giant Headline */}
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[0.88] text-[#F5F2ED] uppercase">
              YOUR NEXT IDEA
              <br />
              <span className="font-editorial italic font-normal text-[#FF4E00] lowercase">Starts</span> HERE.
            </h2>

            {/* Supporting Text */}
            <p className="mt-6 text-xs sm:text-base font-body text-[#F5F2ED]/70 leading-relaxed max-w-xl">
              Be part of Techfest 2026 at IIT Bombay. Step onto Asia’s most intense stage for science, combat robotics, and global innovation. Free open access for student enthusiasts.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                id="cta-register-now-btn"
                onClick={onRegisterNow}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#FF4E00] hover:bg-[#F5F2ED] hover:text-[#1A1A1A] text-white font-mono font-bold text-xs uppercase tracking-widest transition-colors duration-150 border border-[#FF4E00] group"
              >
                <Ticket className="w-4 h-4" />
                <span>CLAIM FESTIVAL PASS</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <button
                type="button"
                id="cta-explore-fest-btn"
                onClick={onExploreFest}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent hover:bg-white/10 text-[#F5F2ED] font-mono font-bold text-xs uppercase tracking-widest border border-white/20 transition-colors"
              >
                <span>EXPLORE DIRECTORY</span>
              </button>
            </div>

            {/* Meta Trust Tickers */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-[#F5F2ED]/60">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#FF4E00]" />
                <span>DECEMBER 16, 17, 18 • 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF4E00]" />
                <span>IIT BOMBAY MAIN CAMPUS, POWAI</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>INSTANT DIGITAL QR PASS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
