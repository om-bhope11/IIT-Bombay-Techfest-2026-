import React, { useState } from 'react';
import { FESTIVAL_EVENTS } from '../data/festivalData';
import { FestivalEvent } from '../types';
import { ArrowUpRight, Filter, MapPin, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';

interface EventsExplorerProps {
  onSelectEvent: (event: FestivalEvent) => void;
}

const CATEGORIES = [
  'All',
  'Robotics',
  'Competitions',
  'Exhibitions',
  'Lectures',
  'Summits',
  'Technoholix',
] as const;

export const EventsExplorer: React.FC<EventsExplorerProps> = ({ onSelectEvent }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = FESTIVAL_EVENTS.filter((event) => {
    const matchesCategory =
      selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="events" className="py-20 lg:py-24 bg-[#F5F2ED] border-b border-[#1A1A1A]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Meta */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1A1A1A]/10">
          <div>
            <div className="text-xs font-mono text-[#1A1A1A]/60 uppercase tracking-[0.25em] mb-2 font-bold">
              03 // CURATED PROGRAM & IMMERSION
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] tracking-tight uppercase">
              EVENT <span className="font-editorial italic font-normal text-[#FF4E00] lowercase">Directory</span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm font-body text-[#1A1A1A]/70 leading-relaxed">
            From the visceral roar of heavy combat robotics to quiet lectures by Nobel laureates, navigate three days of world-class technical programming.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          {/* Category Chips - Geometric Sharp Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-[11px] font-mono font-bold tracking-widest uppercase transition-colors border ${
                  selectedCategory === cat
                    ? 'bg-[#1A1A1A] text-[#F5F2ED] border-[#1A1A1A]'
                    : 'bg-transparent text-[#1A1A1A]/70 border-[#1A1A1A]/20 hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search directory..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-3 pr-8 py-1.5 bg-[#E5E2DD]/70 border border-[#1A1A1A]/20 text-xs font-mono text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#FF4E00]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#1A1A1A]/60 hover:text-[#1A1A1A]"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Large Geometric Grid with Sharp Modules */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <article
              key={event.id}
              onClick={() => onSelectEvent(event)}
              className="group cursor-pointer bg-[#E5E2DD]/60 border border-[#1A1A1A]/15 hover:border-[#1A1A1A] transition-colors duration-200 flex flex-col justify-between relative"
            >
              {/* Card Image Module */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#1A1A1A] border-b border-[#1A1A1A]/10">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                
                {/* Category Stamp & Index Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="bg-[#1A1A1A] text-[#F5F2ED] font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 font-bold">
                    {event.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3 font-mono text-[10px] bg-[#F5F2ED] text-[#1A1A1A] px-2 py-0.5 border border-[#1A1A1A]/20 font-bold">
                  REF 0{index + 1}
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                
                <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-between font-bold">
                  <span>VIEW DOSSIER</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FF4E00]" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-black text-xl text-[#1A1A1A] group-hover:text-[#FF4E00] transition-colors duration-150 leading-snug uppercase">
                    {event.title}
                  </h3>

                  <p className="mt-2 text-xs font-body text-[#1A1A1A]/70 leading-relaxed line-clamp-2">
                    {event.tagline}
                  </p>
                </div>

                {/* Metadata Footer */}
                <div className="mt-5 pt-4 border-t border-[#1A1A1A]/10 flex flex-col gap-2 font-mono text-[11px]">
                  <div className="flex items-center gap-1.5 text-[#1A1A1A]/70">
                    <MapPin className="w-3 h-3 text-[#FF4E00]" />
                    <span className="truncate">{event.venue}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#1A1A1A]/60">{event.dates}</span>
                    <span className="text-[#FF4E00] font-bold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                      DETAILS <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="py-16 text-center bg-[#E5E2DD]/50 border border-dashed border-[#1A1A1A]/20">
            <p className="font-display text-base text-[#1A1A1A] uppercase font-bold">No events match your selected filters.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-mono text-[#FF4E00] underline underline-offset-4"
            >
              Reset filter criteria
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
