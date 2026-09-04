import React from 'react';
import { FestivalEvent } from '../types';
import { X, MapPin, Calendar, Users, CheckCircle, ArrowUpRight, ShieldCheck, Share2 } from 'lucide-react';

interface EventDetailModalProps {
  event: FestivalEvent | null;
  onClose: () => void;
  onRegisterEvent: (eventName: string) => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
  event,
  onClose,
  onRegisterEvent,
}) => {
  if (!event) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert(`Event link copied to clipboard: ${event.title}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#F5F2ED] border border-[#1A1A1A] shadow-2xl overflow-hidden my-8">
        {/* Top Photographic Header */}
        <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full overflow-hidden bg-[#1A1A1A] border-b border-[#1A1A1A]">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover grayscale contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent" />

          {/* Close & Share Buttons */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="p-2 bg-[#1A1A1A]/80 hover:bg-[#FF4E00] text-white transition-colors border border-white/10"
              aria-label="Share event"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 bg-[#1A1A1A]/80 hover:bg-[#FF4E00] text-white transition-colors border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Header Title inside Image */}
          <div className="absolute bottom-4 left-6 right-6 text-white font-mono">
            <div className="flex items-center gap-2 text-xs text-[#FF4E00] font-bold uppercase tracking-wider">
              <span>{event.category}</span>
              <span className="text-white/40">•</span>
              <span className="text-[#F5F2ED]/70">REF: {event.id}</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#F5F2ED] mt-1 uppercase tracking-tight">
              {event.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Meta Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-[#E5E2DD]/70 border border-[#1A1A1A]/15 text-xs font-mono text-[#1A1A1A]">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#FF4E00] shrink-0" />
              <div>
                <div className="text-[10px] text-[#1A1A1A]/50 uppercase">SCHEDULE</div>
                <div className="font-bold text-[#1A1A1A]">{event.dates}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FF4E00] shrink-0" />
              <div>
                <div className="text-[10px] text-[#1A1A1A]/50 uppercase">CAMPUS VENUE</div>
                <div className="font-bold text-[#1A1A1A] truncate">{event.venue}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#FF4E00] shrink-0" />
              <div>
                <div className="text-[10px] text-[#1A1A1A]/50 uppercase">CAPACITY</div>
                <div className="font-bold text-[#1A1A1A]">{event.capacity || 'Open Floor Access'}</div>
              </div>
            </div>
          </div>

          {/* Full Narrative Description */}
          <div>
            <h3 className="text-xs font-mono uppercase text-[#1A1A1A]/60 tracking-wider mb-2 font-bold">
              DOSSIER & PROGRAM OVERVIEW:
            </h3>
            <p className="text-xs sm:text-sm font-body text-[#1A1A1A]/80 leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Highlights & Curatorial Notes */}
          <div className="border-t border-[#1A1A1A]/10 pt-4">
            <h3 className="text-xs font-mono uppercase text-[#1A1A1A]/60 tracking-wider mb-3 font-bold">
              KEY HIGHLIGHTS:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {event.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs font-mono text-[#1A1A1A] bg-[#E5E2DD]/50 border border-[#1A1A1A]/10 p-3">
                  <CheckCircle className="w-4 h-4 text-[#FF4E00] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#1A1A1A]/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-700 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Free with Official Student Delegation Pass</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-[#1A1A1A]/20 text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#E5E2DD]"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  onRegisterEvent(event.title);
                  onClose();
                }}
                className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-[#1A1A1A] hover:bg-[#FF4E00] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors border border-[#1A1A1A]"
              >
                <span>RSVP FOR THIS EVENT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
