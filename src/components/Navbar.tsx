import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Search, Calendar, MapPin, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 60);

      // Detect active section for indicator
      const sections = ['manifesto', 'stats', 'events', 'competitions', 'robowars', 'workshops', 'lectures', 'experience', 'archive'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Manifesto', href: '#manifesto' },
    { label: 'Events', href: '#events' },
    { label: 'Competitions', href: '#competitions' },
    { label: 'Robowars', href: '#robowars' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'Lectures', href: '#lectures' },
    { label: 'Experience', href: '#experience' },
    { label: 'Archive', href: '#archive' },
  ];

  return (
    <>
      <header
        id="main-navigation-bar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-[#1A1A1A]/10 ${
          isScrolled
            ? 'py-3.5 bg-[#F5F2ED]/95 backdrop-blur-md shadow-sm'
            : 'py-5 bg-[#F5F2ED]/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Header */}
          <a
            href="#"
            id="nav-brand-logo"
            className="group flex items-center gap-3 text-[#1A1A1A] no-underline focus:outline-none"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-black tracking-[0.2em] uppercase text-[#1A1A1A] group-hover:text-[#FF4E00] transition-colors">
                  TECHFEST / IIT BOMBAY
                </span>
                <span className="text-[10px] font-tech font-bold bg-[#1A1A1A] text-[#F5F2ED] px-1.5 py-0.5">
                  30
                </span>
              </div>
              <span className="text-[10px] tracking-[0.18em] font-mono text-[#1A1A1A]/60 uppercase">
                ASIA&apos;S LARGEST TECH FESTIVAL
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav id="desktop-nav-links" className="hidden lg:flex items-center gap-6 text-[11px] font-bold tracking-widest uppercase">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors duration-150 py-1 ${
                  activeSection === link.href.substring(1)
                    ? 'text-[#FF4E00] border-b-2 border-[#FF4E00]'
                    : 'text-[#1A1A1A]/75 hover:text-[#1A1A1A]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Group */}
          <div className="flex items-center gap-2 sm:gap-4">
            {onOpenSearch && (
              <button
                type="button"
                id="nav-search-button"
                onClick={onOpenSearch}
                aria-label="Quick Jump & Search"
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs text-[#1A1A1A]/70 hover:text-[#1A1A1A] bg-[#E5E2DD]/70 hover:bg-[#E5E2DD] border border-[#1A1A1A]/15 transition-colors"
              >
                <Search className="w-3.5 h-3.5" />
                <span className="font-tech text-[10px] tracking-wider font-bold">SEARCH</span>
                <kbd className="text-[9px] bg-[#F5F2ED] px-1 py-0.5 border border-[#1A1A1A]/20 font-mono">⌘K</kbd>
              </button>
            )}

            <button
              type="button"
              id="nav-register-btn"
              onClick={onOpenRegister}
              className="border border-[#1A1A1A] px-5 sm:px-6 py-2 text-[11px] font-bold tracking-widest uppercase bg-[#1A1A1A] text-[#F5F2ED] hover:bg-[#FF4E00] hover:text-white hover:border-[#FF4E00] transition-colors inline-flex items-center gap-1.5"
            >
              <span>REGISTER</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              id="mobile-nav-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1A1A1A] hover:bg-[#E5E2DD] border border-[#1A1A1A]/20 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="lg:hidden fixed inset-x-0 top-[65px] bg-[#F5F2ED] border-b-2 border-[#1A1A1A] px-6 py-8 shadow-xl z-40 max-h-[calc(100vh-65px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-5">
              <div className="text-[10px] font-mono text-[#1A1A1A]/60 uppercase tracking-[0.25em] pb-2 border-b border-[#1A1A1A]/10 flex items-center justify-between">
                <span>FESTIVAL NAVIGATION</span>
                <span>30TH EDITION</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 bg-[#E5E2DD]/70 hover:bg-[#1A1A1A] hover:text-[#F5F2ED] text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-between border border-[#1A1A1A]/10"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-[#1A1A1A]/10 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#1A1A1A]">
                  <Calendar className="w-4 h-4 text-[#FF4E00]" />
                  <span>16–18 DECEMBER 2026</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#1A1A1A]">
                  <MapPin className="w-4 h-4 text-[#FF4E00]" />
                  <span>IIT BOMBAY, POWAI, MUMBAI</span>
                </div>

                <button
                  type="button"
                  id="mobile-drawer-register-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRegister();
                  }}
                  className="w-full mt-2 py-3 bg-[#FF4E00] hover:bg-[#1A1A1A] text-white text-center text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 border border-[#1A1A1A]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>CLAIM FESTIVAL PASS</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
