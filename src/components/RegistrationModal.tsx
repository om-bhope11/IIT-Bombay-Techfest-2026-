import React, { useState } from 'react';
import { X, Check, Ticket, QrCode, Sparkles, Download, User, Mail, School, ShieldCheck } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTrack?: string;
}

interface PassTier {
  id: string;
  name: string;
  price: string;
  badge: string;
  description: string;
  perks: string[];
}

const PASS_TIERS: PassTier[] = [
  {
    id: 'student-general',
    name: 'General Student Pass',
    price: 'Free',
    badge: 'ALL CAMPUS ACCESS',
    description: 'Complimentary pass for bona fide university students and faculty across India & abroad.',
    perks: ['Open access to Keynote Lectures', 'Exhibition Pavilions entry', 'Spectator seat at Robowars Arena', 'Technoholix Night Shows entry'],
  },
  {
    id: 'competitor-pass',
    name: 'Competition Delegate',
    price: 'Free with Squad',
    badge: 'TEAM ARENA PASS',
    description: 'Official registration for verified tournament teams (Robowars, Coding, Drone GP, Meshmerize).',
    perks: ['Pit access & repair tables', 'Official tournament bracket seed', 'Certificate of Participation', 'Incubator & Prize eligibility'],
  },
  {
    id: 'workshop-lab',
    name: 'Masterclass All-Access',
    price: '₹1,200',
    badge: 'LAB BENCH & KIT',
    description: 'Guaranteed seat in advanced hardware/software workshops with take-home development boards.',
    perks: ['2-Day Intensive Hands-on Lab', 'Hardware components / API access', 'Official IIT Bombay Certificate', 'Priority Keynote seating'],
  },
];

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  preselectedTrack,
}) => {
  const [selectedTier, setSelectedTier] = useState<string>('student-general');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [institute, setInstitute] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    const rand = Math.floor(1000 + Math.random() * 9000);
    setTicketId(`TF30-BOM-${rand}`);
    setIsGenerated(true);
  };

  const handleReset = () => {
    setIsGenerated(false);
    setName('');
    setEmail('');
    setInstitute('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#F5F2ED] border border-[#1A1A1A] shadow-2xl overflow-hidden my-8">
        {/* Top Header */}
        <div className="flex items-center justify-between p-5 bg-[#E5E2DD] border-b border-[#1A1A1A]/15">
          <div className="flex items-center gap-2">
            <Ticket className="w-5 h-5 text-[#FF4E00]" />
            <span className="font-mono font-bold text-sm tracking-wide text-[#1A1A1A] uppercase">
              TECHFEST 2026 // PASS CREDENTIALS
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 hover:bg-[#1A1A1A] hover:text-[#F5F2ED] text-[#1A1A1A]/60 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {!isGenerated ? (
            <form onSubmit={handleGenerate} className="space-y-6">
              <div>
                <label className="block text-xs font-mono uppercase font-bold text-[#1A1A1A]/70 mb-2">
                  1. SELECT FESTIVAL DELEGATION TIER:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PASS_TIERS.map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSelectedTier(tier.id)}
                      className={`p-3.5 text-left border transition-colors ${
                        selectedTier === tier.id
                          ? 'bg-[#1A1A1A] text-[#F5F2ED] border-[#1A1A1A]'
                          : 'bg-[#E5E2DD]/70 text-[#1A1A1A] border-[#1A1A1A]/15 hover:border-[#1A1A1A]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display font-black text-sm uppercase tracking-tight">{tier.name}</span>
                      </div>
                      <div className="font-mono text-xs text-[#FF4E00] font-bold mt-1">
                        {tier.price}
                      </div>
                      <div className={`text-[10px] font-mono mt-1.5 leading-tight ${selectedTier === tier.id ? 'text-[#F5F2ED]/70' : 'text-[#1A1A1A]/60'}`}>
                        {tier.badge}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Inputs */}
              <div className="space-y-4">
                <label className="block text-xs font-mono uppercase font-bold text-[#1A1A1A]/70">
                  2. DELEGATE PARTICULARS:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#1A1A1A]/70 mb-1">
                      Full Legal Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#1A1A1A]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aryan Sharma"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-[#E5E2DD]/50 border border-[#1A1A1A]/20 text-sm font-mono text-[#1A1A1A] focus:outline-none focus:border-[#FF4E00]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#1A1A1A]/70 mb-1">
                      Official Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#1A1A1A]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="aryan@university.edu"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-[#E5E2DD]/50 border border-[#1A1A1A]/20 text-sm font-mono text-[#1A1A1A] focus:outline-none focus:border-[#FF4E00]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#1A1A1A]/70 mb-1">
                    College / Organization / Institute
                  </label>
                  <div className="relative">
                    <School className="w-4 h-4 text-[#1A1A1A]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. IIT Bombay / BITS Pilani / MIT"
                      value={institute}
                      onChange={(e) => setInstitute(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-[#E5E2DD]/50 border border-[#1A1A1A]/20 text-sm font-mono text-[#1A1A1A] focus:outline-none focus:border-[#FF4E00]"
                    />
                  </div>
                </div>

                {preselectedTrack && (
                  <div className="p-3 bg-[#E5E2DD] border border-[#FF4E00]/30 text-xs font-mono text-[#1A1A1A]">
                    <span className="text-[#FF4E00] font-bold">PREFERRED TRACK:</span> {preselectedTrack}
                  </div>
                )}
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1A1A1A] hover:bg-[#FF4E00] text-[#F5F2ED] font-mono text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 border border-[#1A1A1A]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>GENERATE OFFICIAL 2026 DIGITAL PASS</span>
                </button>
              </div>
            </form>
          ) : (
            /* Commemorative Boarding Pass Presentation */
            <div className="space-y-6">
              <div className="bg-[#1A1A1A] text-[#F5F2ED] p-6 sm:p-8 relative overflow-hidden border border-[#1A1A1A]">
                {/* Visual Watermark */}
                <div className="absolute top-2 right-4 text-7xl font-display font-black text-white/5 pointer-events-none">
                  TF30
                </div>

                {/* Pass Top Meta */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-mono text-[#FF4E00] font-bold">
                      OFFICIAL DELEGATE PASS
                    </span>
                    <h3 className="font-display font-black text-xl text-[#F5F2ED] uppercase">
                      TECHFEST IIT BOMBAY 2026
                    </h3>
                  </div>
                  <div className="text-right font-mono text-xs text-[#F5F2ED]/70">
                    <div>№ {ticketId}</div>
                    <div className="text-[10px] text-emerald-400 font-bold">ACTIVE // VERIFIED</div>
                  </div>
                </div>

                {/* Pass Holder Details */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-6 font-mono">
                  <div>
                    <span className="block text-[10px] text-[#F5F2ED]/50 uppercase">HOLDER</span>
                    <span className="font-display font-black text-base text-[#F5F2ED]">{name}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-[#F5F2ED]/50 uppercase">AFFILIATION</span>
                    <span className="text-xs text-[#F5F2ED]/80">{institute || 'Independent Innovator'}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-[#F5F2ED]/50 uppercase">DATES</span>
                    <span className="text-xs text-[#F5F2ED]">16–18 DEC 2026</span>
                  </div>
                </div>

                {/* Bottom Barcode / QR Simulation */}
                <div className="pt-4 border-t border-dashed border-white/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white p-1">
                      <QrCode className="w-full h-full text-black" />
                    </div>
                    <div className="text-[9px] font-mono text-[#F5F2ED]/60 leading-tight">
                      <div>SCAN AT MAIN GATE / SAC CHECKPOINT</div>
                      <div>LOCATION: POWAI, MUMBAI [19.1334° N, 72.9133° E]</div>
                    </div>
                  </div>

                  <div className="hidden sm:block text-right text-[10px] font-mono text-[#F5F2ED]/60">
                    STUDENT GYMKHANA ISSUED
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 border border-[#1A1A1A]/20 bg-[#E5E2DD]/70 text-xs font-mono text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F5F2ED] transition-colors"
                >
                  Register Another Delegate
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      alert(`Festival Pass ${ticketId} saved to local credential storage.`);
                      onClose();
                    }}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#FF4E00] hover:bg-[#1A1A1A] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors border border-[#FF4E00]"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>SAVE CREDENTIAL</span>
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 bg-[#1A1A1A] text-white text-xs font-mono font-bold uppercase tracking-wider border border-[#1A1A1A]"
                  >
                    DONE
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
