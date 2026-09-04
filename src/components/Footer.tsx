import React from 'react';
import { ArrowUpRight, Github, Twitter, Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#1A1A1A] text-[#F5F2ED] pt-16 sm:pt-20 pb-12 border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="font-display font-black text-2xl tracking-tighter text-[#F5F2ED]">
                TECHFEST
              </span>
              <span className="font-mono text-[10px] bg-[#FF4E00] text-white font-bold px-1.5 py-0.5">
                30TH ED.
              </span>
            </div>

            <p className="text-xs sm:text-sm font-body text-[#F5F2ED]/70 leading-relaxed max-w-sm">
              Asia’s Largest Science and Technology Festival. Organized entirely by the undergraduate student body of the Indian Institute of Technology Bombay.
            </p>

            <div className="pt-2 text-xs font-mono text-[#F5F2ED]/50 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF4E00]" />
                <span>IIT Bombay, Powai, Mumbai 400076, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF4E00]" />
                <span>official@techfest.org</span>
              </div>
            </div>
          </div>

          {/* Nav Column 1: Festival */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono text-[#F5F2ED]/60 uppercase tracking-widest font-bold">
              PROGRAM
            </div>
            <ul className="space-y-2 text-xs font-mono text-[#F5F2ED]/70">
              <li><a href="#events" className="hover:text-[#FF4E00] transition-colors">Event Explorer</a></li>
              <li><a href="#competitions" className="hover:text-[#FF4E00] transition-colors">Competitions</a></li>
              <li><a href="#robowars" className="hover:text-[#FF4E00] transition-colors">Robowars Asia Cup</a></li>
              <li><a href="#workshops" className="hover:text-[#FF4E00] transition-colors">Masterclasses</a></li>
              <li><a href="#lectures" className="hover:text-[#FF4E00] transition-colors">Luminary Lectures</a></li>
            </ul>
          </div>

          {/* Nav Column 2: Experience & Archive */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono text-[#F5F2ED]/60 uppercase tracking-widest font-bold">
              DISCOVER
            </div>
            <ul className="space-y-2 text-xs font-mono text-[#F5F2ED]/70">
              <li><a href="#experience" className="hover:text-[#FF4E00] transition-colors">Technoholix</a></li>
              <li><a href="#experience" className="hover:text-[#FF4E00] transition-colors">Exhibits</a></li>
              <li><a href="#archive" className="hover:text-[#FF4E00] transition-colors">30-Year Archive</a></li>
              <li><a href="#manifesto" className="hover:text-[#FF4E00] transition-colors">Manifesto</a></li>
              <li><a href="#stats" className="hover:text-[#FF4E00] transition-colors">Impact Metrics</a></li>
            </ul>
          </div>

          {/* Nav Column 3: Connect & Socials */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono text-[#F5F2ED]/60 uppercase tracking-widest font-bold">
              NETWORKS
            </div>
            <p className="text-xs font-body text-[#F5F2ED]/70 leading-relaxed">
              Follow real-time tournament brackets, arena schedules, and keynote announcements.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-[#FF4E00] border border-white/10 flex items-center justify-center transition-colors text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-[#FF4E00] border border-white/10 flex items-center justify-center transition-colors text-white"
                aria-label="Twitter / X"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-[#FF4E00] border border-white/10 flex items-center justify-center transition-colors text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-[#FF4E00] border border-white/10 flex items-center justify-center transition-colors text-white"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Institutional Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F5F2ED]/50">
          <div className="flex items-center gap-2">
            <span>© 1998–2026 TECHFEST, IIT BOMBAY</span>
            <span>•</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>

          <div className="flex items-center gap-4">
            <span>STUDENT GYMKHANA, IIT BOMBAY</span>
            <span>•</span>
            <a href="#hero" className="hover:text-[#FF4E00] transition-colors flex items-center gap-1 font-bold">
              BACK TO TOP ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
