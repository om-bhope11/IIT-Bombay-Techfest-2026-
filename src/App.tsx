/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ManifestoSection } from './components/ManifestoSection';
import { StatsSection } from './components/StatsSection';
import { EventsExplorer } from './components/EventsExplorer';
import { CompetitionsSection } from './components/CompetitionsSection';
import { RobowarsSection } from './components/RobowarsSection';
import { WorkshopsSection } from './components/WorkshopsSection';
import { LecturesSection } from './components/LecturesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ArchiveSection } from './components/ArchiveSection';
import { RegistrationCTA } from './components/RegistrationCTA';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { EventDetailModal } from './components/EventDetailModal';
import { QuickSearchModal } from './components/QuickSearchModal';
import { FestivalEvent, WorkshopItem } from './types';
import { ArrowUp, Ticket, Radio } from 'lucide-react';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<FestivalEvent | null>(null);
  const [preselectedTrack, setPreselectedTrack] = useState<string | undefined>(undefined);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      setShowFloatingButton(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenRegister = (track?: string) => {
    setPreselectedTrack(track);
    setIsRegisterOpen(true);
  };

  const handleWorkshopRegister = (workshop: WorkshopItem) => {
    setPreselectedTrack(`Workshop: ${workshop.title}`);
    setIsRegisterOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F5F2ED] text-[#1A1A1A] selection:bg-[#FF4E00] selection:text-white border-x-0 md:border-x-[8px] lg:border-x-[12px] border-[#1A1A1A]">
      {/* Subtle Grain Overlay for Editorial Texture */}
      <div className="fixed inset-0 grain-overlay pointer-events-none z-30" />

      {/* Top Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-[#FF4E00] z-50 transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <Navbar
        onOpenRegister={() => handleOpenRegister()}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Hero Section */}
      <main>
        <HeroSection
          onEnterFest={() => scrollToSection('manifesto')}
          onExploreEvents={() => scrollToSection('events')}
        />

        {/* Section 01: Manifesto & Identity */}
        <ManifestoSection />

        {/* Section 02: Interactive Statistics Strip */}
        <StatsSection />

        {/* Section 03: Events Explorer Grid */}
        <EventsExplorer onSelectEvent={(evt) => setSelectedEvent(evt)} />

        {/* Section 04: Competitions ("BUILD. BREAK. RETHINK.") */}
        <CompetitionsSection onRegisterTrack={(track) => handleOpenRegister(track)} />

        {/* Section 05: Robotics / Robowars ("WHEN MACHINES ENTER THE ARENA.") */}
        <RobowarsSection />

        {/* Section 06: Workshops / Masterclasses */}
        <WorkshopsSection onRegisterWorkshop={handleWorkshopRegister} />

        {/* Section 07: Lectures / People Who Shape Tomorrow */}
        <LecturesSection />

        {/* Section 08: Festival Atmosphere & Experiences */}
        <ExperienceSection />

        {/* Section 09: 30-Year Archive & Legacy */}
        <ArchiveSection />

        {/* Section 10: Monumental Registration CTA */}
        <RegistrationCTA
          onRegisterNow={() => handleOpenRegister()}
          onExploreFest={() => scrollToSection('events')}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button on scroll */}
      {showFloatingButton && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <button
            type="button"
            onClick={() => handleOpenRegister()}
            className="flex items-center gap-2 px-5 py-3 bg-[#1A1A1A] hover:bg-[#FF4E00] text-white shadow-xl transition-all duration-200 text-xs font-bold tracking-widest uppercase group border border-[#1A1A1A]"
          >
            <Ticket className="w-4 h-4" />
            <span>CLAIM PASS</span>
          </button>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 bg-[#F5F2ED] hover:bg-[#E5E2DD] text-[#1A1A1A] border border-[#1A1A1A] flex items-center justify-center shadow-lg transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Modals & Dialogs */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => {
          setIsRegisterOpen(false);
          setPreselectedTrack(undefined);
        }}
        preselectedTrack={preselectedTrack}
      />

      <EventDetailModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onRegisterEvent={(eventName) => {
          setSelectedEvent(null);
          handleOpenRegister(eventName);
        }}
      />

      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectEvent={(evt) => setSelectedEvent(evt)}
      />
    </div>
  );
}
