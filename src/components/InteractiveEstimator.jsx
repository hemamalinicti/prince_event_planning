import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Check, 
  MessageCircle, 
  Send, 
  Clock, 
  Users, 
  Wrench, 
  ShieldCheck, 
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import { companyInfo } from '../data/mockData';

export default function InteractiveEstimator({ onOpenEnquiryWithData }) {
  const [eventType, setEventType] = useState('wedding');
  const [guestCount, setGuestCount] = useState('500');
  const [selectedAddons, setSelectedAddons] = useState([
    'sound', 
    'lighting', 
    'led_wall'
  ]);

  const eventTypes = [
    { id: 'wedding', name: 'Royal Wedding & Reception', baseCost: 350000, desc: 'Fairy-tale floral mandaps, bridal suites, and guest logistics' },
    { id: 'corporate', name: 'Corporate Summit & Gala', baseCost: 280000, desc: 'Keynote stage, VIP lounges, multi-cam broadcast' },
    { id: 'concert', name: 'Live Concert & Festival', baseCost: 450000, desc: 'High-power line array, festival staging, security barriers' },
    { id: 'private', name: 'Bespoke Private Soiree', baseCost: 180000, desc: 'Intimate fine dining, candlelight ambiance, chamber audio' },
  ];

  const guestTiers = [
    { id: '200', label: '100 - 300 Guests', multiplier: 1.0, setupHours: '12 Hours', crew: '18 Specialists' },
    { id: '500', label: '300 - 800 Guests', multiplier: 1.45, setupHours: '24 Hours', crew: '28 Specialists' },
    { id: '1200', label: '800 - 2,000 Guests', multiplier: 2.1, setupHours: '36 Hours', crew: '45 Specialists' },
    { id: '3000', label: '2,000+ Guests (Mega)', multiplier: 3.2, setupHours: '48 Hours', crew: '70+ Specialists' },
  ];

  const techOptions = [
    { id: 'truss', label: 'German Heavy Box Truss & Stage Structure', cost: 120000, icon: '🏗️', desc: 'Tested for coastal winds & heavy suspended fixtures' },
    { id: 'sound', label: 'Concert Line Array Audio & Wireless Mics', cost: 95000, icon: '🔊', desc: 'Acoustically calibrated for zero echo and crystal clarity' },
    { id: 'lighting', label: 'Intelligent Moving Heads & Laser Show', cost: 85000, icon: '💡', desc: 'DMX programmed moods, ambient washes & warm tungsten' },
    { id: 'led_wall', label: '4K Curved Seamless LED Wall (P2.6)', cost: 110000, icon: '🖥️', desc: 'High-contrast backdrop with multi-camera live video' },
    { id: 'generators', label: 'Dual Generator Sync & 0-Sec Power Redundancy', cost: 65000, icon: '⚡', desc: 'Two silent diesel gensets with automated transfer' },
    { id: 'pyro', label: 'Cold Pyro Sparklers & Low-Fog Cloud Effect', cost: 45000, icon: '✨', desc: 'Safe indoor non-flammable pyrotechnics for grand entry' },
  ];

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const calculatedEstimate = useMemo(() => {
    const selectedTypeObj = eventTypes.find((e) => e.id === eventType) || eventTypes[0];
    const selectedTierObj = guestTiers.find((g) => g.id === guestCount) || guestTiers[1];

    let base = selectedTypeObj.baseCost * selectedTierObj.multiplier;
    let addonsTotal = selectedAddons.reduce((acc, addonId) => {
      const match = techOptions.find((t) => t.id === addonId);
      return acc + (match ? match.cost : 0);
    }, 0);

    const totalEstimate = base + addonsTotal;
    const lowRange = Math.round((totalEstimate * 0.9) / 10000) * 10000;
    const highRange = Math.round((totalEstimate * 1.15) / 10000) * 10000;

    return {
      lowFormatted: (lowRange / 100000).toFixed(2),
      highFormatted: (highRange / 100000).toFixed(2),
      rawLow: lowRange,
      rawHigh: highRange,
      setupHours: selectedTierObj.setupHours,
      crew: selectedTierObj.crew,
      typeName: selectedTypeObj.name,
      tierLabel: selectedTierObj.label
    };
  }, [eventType, guestCount, selectedAddons]);

  const sendToWhatsApp = () => {
    const addonNames = selectedAddons
      .map(id => techOptions.find(t => t.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    const msg = `Hello Prince Events! I used your Interactive Estimator:%0A%0A` +
      `• Event Type: ${calculatedEstimate.typeName}%0A` +
      `• Estimated Scale: ${calculatedEstimate.tierLabel}%0A` +
      `• Technical Add-ons: ${addonNames || 'None selected'}%0A` +
      `• Indicative Budget Range: ₹${calculatedEstimate.lowFormatted}L - ₹${calculatedEstimate.highFormatted}L%0A%0A` +
      `I would like to schedule a consultation with your lead planner.`;

    window.open(`https://wa.me/${companyInfo.whatsappPhone}?text=${msg}`, '_blank');
  };

  return (
    <section id="estimator" className="py-20 md:py-28 bg-cream-50 subtle-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cherry-100 text-cherry-800 text-xs font-semibold tracking-wide uppercase mb-3">
            <Calculator className="w-3.5 h-3.5 text-cherry-600" />
            Transparent Human Planning
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy-950 tracking-tight mb-4">
            Interactive Event & Engineering <span className="text-cherry-700 italic">Cost Estimator</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-burgundy-900/80 leading-relaxed">
            No vague quotes or hidden surprises. Select your event scale and engineering staging options below for an immediate, transparent estimate backed by certified equipment rates.
          </p>
        </div>

        {/* Estimator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-burgundy-900/10 shadow-warm-md space-y-8">
            
            {/* Step 1: Select Event Type */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-burgundy-950 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cherry-600 text-white flex items-center justify-center text-[10px]">1</span>
                  Select Event Archetype
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {eventTypes.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setEventType(t.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-200 ${
                      eventType === t.id
                        ? 'border-cherry-600 bg-cherry-50/70 text-burgundy-950 shadow-warm-sm'
                        : 'border-burgundy-900/10 bg-cream-50/40 text-burgundy-900 hover:border-cherry-300 hover:bg-cream-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs sm:text-sm">{t.name}</span>
                      {eventType === t.id && <Check className="w-4 h-4 text-cherry-600 shrink-0" />}
                    </div>
                    <p className="text-[11px] text-burgundy-800/70 mt-1 line-clamp-1">{t.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Guest Count / Scale */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-burgundy-950 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cherry-600 text-white flex items-center justify-center text-[10px]">2</span>
                  Guest Scale & Venue Footprint
                </label>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {guestTiers.map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setGuestCount(tier.id)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      guestCount === tier.id
                        ? 'border-cherry-600 bg-cherry-600 text-white font-bold shadow-warm-sm'
                        : 'border-burgundy-900/10 bg-cream-50/40 text-burgundy-900 hover:bg-cream-100 font-bold'
                    }`}
                  >
                    <span className="text-xs block">{tier.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Technical Add-ons */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-burgundy-950 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cherry-600 text-white flex items-center justify-center text-[10px]">3</span>
                  Technical Engineering & AV Inclusions
                </label>
                <span className="text-[11px] text-cherry-700 font-bold">Select all applicable</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {techOptions.map((opt) => {
                  const isChecked = selectedAddons.includes(opt.id);
                  return (
                    <div
                      key={opt.id}
                      onClick={() => toggleAddon(opt.id)}
                      className={`p-3 rounded-xl border cursor-pointer select-none transition-all duration-200 flex items-start gap-3 ${
                        isChecked
                          ? 'border-cherry-500 bg-cherry-50/60 shadow-warm-sm'
                          : 'border-burgundy-900/10 bg-cream-50/30 hover:border-cherry-200 hover:bg-cream-50'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                        isChecked 
                          ? 'bg-cherry-600 border-cherry-600 text-white' 
                          : 'border-burgundy-300 bg-white'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-burgundy-950">{opt.label}</span>
                        </div>
                        <p className="text-[10px] text-burgundy-800/70 mt-0.5">{opt.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Real-time Summary Card (Right) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-burgundy-950 via-burgundy-900 to-burgundy-950 text-cream-50 p-6 sm:p-8 rounded-3xl shadow-warm-xl border border-cherry-900/40 relative overflow-hidden">
            
            {/* Background luxury seal motif */}
            <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full border border-champagne-400/10 pointer-events-none" />
            <div className="absolute -right-4 -bottom-4 w-32 h-32 rounded-full border border-champagne-400/10 pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-burgundy-800/60 mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-cherry-300">
                Live Cost Projection
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-950/70 text-emerald-300 border border-emerald-700/50">
                GST & Labour Compliant
              </span>
            </div>

            <div className="mb-6">
              <span className="text-xs text-cream-300 block mb-1">Estimated Budget Range:</span>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl sm:text-5xl font-bold text-cream-50 tracking-tight">
                  ₹{calculatedEstimate.lowFormatted}L
                </span>
                <span className="text-cherry-300 text-xl font-bold">–</span>
                <span className="font-display text-4xl sm:text-5xl font-bold text-cherry-400 tracking-tight">
                  ₹{calculatedEstimate.highFormatted}L
                </span>
              </div>
              <p className="text-xs text-cream-300/80 mt-2">
                *Includes design architecture, structural rigging, certified crew, live management, and strike-down.
              </p>
            </div>

            {/* Quick Operational Metrics */}
            <div className="grid grid-cols-2 gap-3 py-4 border-y border-burgundy-800/60 mb-6 bg-burgundy-900/40 rounded-xl px-4">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-400" />
                <div>
                  <span className="text-[10px] text-cream-300 block uppercase">Rigging Duration</span>
                  <span className="text-xs font-bold text-cream-100">{calculatedEstimate.setupHours}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-cherry-400" />
                <div>
                  <span className="text-[10px] text-cream-300 block uppercase">Specialist Crew</span>
                  <span className="text-xs font-bold text-cream-100">{calculatedEstimate.crew}</span>
                </div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={sendToWhatsApp}
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Estimate to WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (onOpenEnquiryWithData) {
                    onOpenEnquiryWithData({
                      eventType: calculatedEstimate.typeName,
                      guestCount: calculatedEstimate.tierLabel,
                      estimate: `₹${calculatedEstimate.lowFormatted}L - ₹${calculatedEstimate.highFormatted}L`
                    });
                  }
                }}
                className="w-full py-3 rounded-xl bg-cherry-700 hover:bg-cherry-600 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 border border-cherry-500/40"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold-300" />
                <span>Lock In Consultation & Venue Visit</span>
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-cream-300/80">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              <span>Strict NDA & Data Privacy Protected</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
