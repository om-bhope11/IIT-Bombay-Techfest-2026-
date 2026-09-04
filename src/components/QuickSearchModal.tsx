import React, { useState, useEffect } from 'react';
import { FESTIVAL_EVENTS, COMPETITION_TRACKS, WORKSHOP_LIST, LUMINARY_SPEAKERS } from '../data/festivalData';
import { Search, X, ArrowUpRight, Calendar, MapPin, Sparkles } from 'lucide-react';
import { FestivalEvent } from '../types';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectEvent: (event: FestivalEvent) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectEvent,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const matchingEvents = FESTIVAL_EVENTS.filter(
    (e) =>
      e.title.toLowerCase().includes(query.toLowerCase()) ||
      e.category.toLowerCase().includes(query.toLowerCase()) ||
      e.venue.toLowerCase().includes(query.toLowerCase())
  );

  const matchingCompetitions = COMPETITION_TRACKS.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.category.toLowerCase().includes(query.toLowerCase())
  );

  const matchingWorkshops = WORKSHOP_LIST.filter(
    (w) =>
      w.title.toLowerCase().includes(query.toLowerCase()) ||
      w.domain.toLowerCase().includes(query.toLowerCase())
  );

  const matchingSpeakers = LUMINARY_SPEAKERS.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.topic.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-[#1A1A1A]/70 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-[#F5F2ED] border border-[#1A1A1A] shadow-2xl overflow-hidden">
        {/* Search Header */}
        <div className="p-4 border-b border-[#1A1A1A]/15 flex items-center gap-3 bg-[#E5E2DD]">
          <Search className="w-5 h-5 text-[#1A1A1A]/60" />
          <input
            type="text"
            autoFocus
            placeholder="Quick search events, Robowars, workshops, lectures..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm sm:text-base font-mono text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#1A1A1A]/60 hover:text-[#1A1A1A]"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {matchingEvents.length > 0 && (
            <div>
              <div className="text-[10px] font-mono uppercase text-[#1A1A1A]/60 tracking-wider mb-2 font-bold">
                FEATURED FESTIVAL EVENTS ({matchingEvents.length})
              </div>
              <div className="space-y-1.5">
                {matchingEvents.map((evt) => (
                  <div
                    key={evt.id}
                    onClick={() => {
                      onSelectEvent(evt);
                      onClose();
                    }}
                    className="p-2.5 bg-[#E5E2DD]/70 hover:bg-[#1A1A1A] hover:text-[#F5F2ED] border border-[#1A1A1A]/10 hover:border-[#1A1A1A] transition-colors cursor-pointer flex items-center justify-between group font-mono"
                  >
                    <div>
                      <div className="font-display font-bold text-sm uppercase tracking-tight">
                        {evt.title}
                      </div>
                      <div className="text-[10px] text-[#1A1A1A]/60 group-hover:text-[#F5F2ED]/70">
                        {evt.category} • {evt.venue}
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {matchingCompetitions.length > 0 && (
            <div>
              <div className="text-[10px] font-mono uppercase text-[#1A1A1A]/60 tracking-wider mb-2 font-bold">
                COMPETITION ARENAS ({matchingCompetitions.length})
              </div>
              <div className="space-y-1.5">
                {matchingCompetitions.map((comp) => (
                  <a
                    key={comp.id}
                    href="#competitions"
                    onClick={onClose}
                    className="p-2.5 bg-[#E5E2DD]/70 hover:bg-[#1A1A1A] hover:text-[#F5F2ED] border border-[#1A1A1A]/10 hover:border-[#1A1A1A] transition-colors block group font-mono"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-display font-bold text-sm uppercase tracking-tight">
                        {comp.name}
                      </div>
                      <span className="text-xs text-[#FF4E00] group-hover:text-[#FF4E00] font-bold">
                        {comp.prizePool}
                      </span>
                    </div>
                    <div className="text-[10px] text-[#1A1A1A]/60 group-hover:text-[#F5F2ED]/70">
                      {comp.category} • Team: {comp.teamSize}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {matchingWorkshops.length > 0 && (
            <div>
              <div className="text-[10px] font-mono uppercase text-[#1A1A1A]/60 tracking-wider mb-2 font-bold">
                HANDS-ON WORKSHOPS ({matchingWorkshops.length})
              </div>
              <div className="space-y-1.5">
                {matchingWorkshops.map((ws) => (
                  <a
                    key={ws.id}
                    href="#workshops"
                    onClick={onClose}
                    className="p-2.5 bg-[#E5E2DD]/70 hover:bg-[#1A1A1A] hover:text-[#F5F2ED] border border-[#1A1A1A]/10 hover:border-[#1A1A1A] transition-colors block group font-mono"
                  >
                    <div className="font-display font-bold text-sm uppercase tracking-tight">
                      {ws.title}
                    </div>
                    <div className="text-[10px] text-[#1A1A1A]/60 group-hover:text-[#F5F2ED]/70">
                      {ws.domain} • {ws.duration} • {ws.spotsLeft} seats remaining
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {matchingSpeakers.length > 0 && (
            <div>
              <div className="text-[10px] font-mono uppercase text-[#1A1A1A]/60 tracking-wider mb-2 font-bold">
                LUMINARY SPEAKERS ({matchingSpeakers.length})
              </div>
              <div className="space-y-1.5">
                {matchingSpeakers.map((spk) => (
                  <a
                    key={spk.id}
                    href="#lectures"
                    onClick={onClose}
                    className="p-2.5 bg-[#E5E2DD]/70 hover:bg-[#1A1A1A] hover:text-[#F5F2ED] border border-[#1A1A1A]/10 hover:border-[#1A1A1A] transition-colors block group font-mono"
                  >
                    <div className="font-display font-bold text-sm uppercase tracking-tight">
                      {spk.name}
                    </div>
                    <div className="text-[10px] text-[#1A1A1A]/60 group-hover:text-[#F5F2ED]/70">
                      {spk.role} ({spk.institution})
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {matchingEvents.length === 0 &&
            matchingCompetitions.length === 0 &&
            matchingWorkshops.length === 0 &&
            matchingSpeakers.length === 0 && (
              <div className="py-8 text-center text-xs font-mono text-[#1A1A1A]/60">
                No festival programs found for &ldquo;{query}&rdquo;.
              </div>
            )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-[#E5E2DD] border-t border-[#1A1A1A]/15 text-[10px] font-mono text-[#1A1A1A]/60 flex items-center justify-between">
          <span>NAVIGATION: [ESC] TO CLOSE • [ENTER] TO SELECT</span>
          <span className="font-bold text-[#1A1A1A]">TECHFEST 2026</span>
        </div>
      </div>
    </div>
  );
};
