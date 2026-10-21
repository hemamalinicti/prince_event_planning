import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  Calendar, 
  MapPin, 
  Layers, 
  Phone, 
  Mail, 
  User, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck,
  Send,
  Zap,
  Volume2,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Enquiry() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    eventType: 'Royal Wedding & Muhurtham',
    date: '',
    guestCount: '500 – 1,000 Guests',
    location: 'Coimbatore',
    venueType: 'Palace / Five-Star Ballroom',
    venueName: '',
    requirements: [
      'Bespoke Mandap & Floral Decor',
      'Concert-Grade Line Array Sound',
      'True 0-Second Power Redundancy'
    ],
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  const handleRequirementToggle = (req) => {
    setFormData(prev => {
      const exists = prev.requirements.includes(req);
      if (exists) {
        return { ...prev, requirements: prev.requirements.filter(r => r !== req) };
      } else {
        return { ...prev, requirements: [...prev.requirements, req] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Launch celebratory confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // safe fallback if canvas-confetti is not loaded
    }

    // Direct navigation to WhatsApp with official brief
    handleWhatsAppSend();
  };

  const handleWhatsAppSend = () => {
    const text = `*New Event Brief Submission - Prince Engineering & Events*\n\n` +
      `*Client Name:* ${formData.name || 'Client'}\n` +
      `*Phone:* ${formData.phone || 'N/A'}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Event Type:* ${formData.eventType}\n` +
      `*Date:* ${formData.date || 'TBD'}\n` +
      `*Guest Count:* ${formData.guestCount}\n` +
      `*Location:* ${formData.location} (${formData.venueType})\n` +
      (formData.venueName ? `*Venue Name:* ${formData.venueName}\n` : '') +
      `*Scope & Requirements:* ${formData.requirements.join(', ')}\n` +
      `*Aesthetic & Technical Notes:* ${formData.notes || 'None'}`;
    
    window.open(`https://wa.me/919842212345?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-cream-50 text-burgundy-950 font-sans w-full min-h-screen">
      
      {/* 1. Hero Banner */}
      <section className="relative isolate w-full py-14 sm:py-18 lg:py-20 flex flex-col justify-center items-center overflow-hidden bg-burgundy-950 text-white">
        {/* Photographic Background with Gentle Zoom & Balanced Contrast */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src="/hero-enquiry.jpg"
            alt="Consultation meeting and brief commissioning suite"
            className="w-full h-full object-cover object-center animate-hero-zoom filter brightness-[0.85] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/70 via-transparent to-black/50" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center relative z-10 w-full">
          <div className="max-w-3xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs text-cream-100 mb-4 shadow-lg">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-white font-semibold">Service Enquiry Brief</span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold tracking-tight text-white mb-4 leading-[1.14]">
              Commission Your <br className="hidden sm:inline" />
              <span className="italic font-display text-amber-300 underline decoration-cherry-400 decoration-wavy underline-offset-8">
                Celebration or Staging Brief
              </span>
            </h1>

            <p className="font-sans text-xs sm:text-sm md:text-base text-cream-100 max-w-xl mx-auto leading-relaxed">
              Complete our structured questionnaire below. Our Senior Rigging Engineers and Event Architects will respond within 4 business hours with 3D moodboards and feasibility metrics.
            </p>

          </div>
        </div>
      </section>

      {/* 2. Interactive Multi-Step Brief Form Container */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {isSubmitted ? (
            /* Success State */
            <div className="bg-white rounded-3xl p-8 sm:p-14 border border-cream-300 shadow-2xl text-center max-w-2xl mx-auto animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-cherry-100 text-cherry-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider mb-3">
                Brief Logged Successfully
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-burgundy-950 mb-3">
                Thank You, {formData.name || 'Valued Client'}!
              </h2>

              <p className="text-sm text-burgundy-800/80 leading-relaxed mb-8 max-w-lg mx-auto">
                Your event requirements for <strong className="text-burgundy-950">{formData.eventType}</strong> have been assigned to our Senior Production Director in Coimbatore.
              </p>

              <div className="bg-cream-50 rounded-2xl p-6 border border-cream-200 text-left text-xs sm:text-sm space-y-2 mb-8">
                <div className="flex justify-between border-b border-cream-200 pb-2">
                  <span className="text-burgundy-600 font-bold">Estimated Date:</span>
                  <span className="font-semibold text-burgundy-950">{formData.date || 'To Be Finalized'}</span>
                </div>
                <div className="flex justify-between border-b border-cream-200 pb-2">
                  <span className="text-burgundy-600 font-bold">Guest Scale:</span>
                  <span className="font-semibold text-burgundy-950">{formData.guestCount}</span>
                </div>
                <div className="flex justify-between border-b border-cream-200 pb-2">
                  <span className="text-burgundy-600 font-bold">Location:</span>
                  <span className="font-semibold text-burgundy-950">{formData.location}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-burgundy-600 font-bold">Guaranteed Response:</span>
                  <span className="font-bold text-cherry-600">Within 4 Business Hours</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-md inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Forward Brief to WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setCurrentStep(1);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full border border-cream-300 hover:bg-cream-100 text-burgundy-900 font-semibold text-sm transition-all"
                >
                  Submit Another Brief
                </button>
              </div>
            </div>
          ) : (
            /* Multi-Step Wizard */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Form Steps */}
              <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-xl">
                
                {/* Step Progress Bar */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-cream-200">
                  {[
                    { num: 1, label: 'Event Identity' },
                    { num: 2, label: 'Venue & Date' },
                    { num: 3, label: 'Technical Scope' },
                    { num: 4, label: 'Contact Info' }
                  ].map((s) => (
                    <div 
                      key={s.num} 
                      onClick={() => setCurrentStep(s.num)}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                        currentStep === s.num
                          ? 'bg-cherry-600 text-white shadow-md'
                          : currentStep > s.num
                            ? 'bg-amber-400 text-burgundy-950 font-bold'
                            : 'bg-cream-100 text-burgundy-600'
                      }`}>
                        {s.num}
                      </div>
                      <span className="hidden sm:inline text-xs font-semibold text-burgundy-900">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  
                  {/* Step 1: Event Identity */}
                  {currentStep === 1 && (
                    <div className="space-y-6 animate-fadeIn">
                      <h3 className="font-editorial text-2xl font-bold text-burgundy-950">
                        Step 1: What is the nature of your celebration?
                      </h3>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-burgundy-900 mb-2">
                          Celebration Category
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            'Royal Wedding & Muhurtham',
                            'Destination Beach/Hill Gala',
                            'Corporate Summit & Arena',
                            'Concert Stage & Live Audio',
                            'Milestone Anniversary/Sangeet',
                            'Private Luxury Soiree'
                          ].map((type) => (
                            <button
                              type="button"
                              key={type}
                              onClick={() => setFormData({ ...formData, eventType: type })}
                              className={`p-3.5 rounded-2xl text-left text-xs sm:text-sm font-semibold transition-all border ${
                                formData.eventType === type
                                  ? 'bg-cherry-50 border-cherry-600 text-cherry-900 ring-2 ring-cherry-400/30'
                                  : 'bg-cream-50/60 border-cream-200 text-burgundy-900 hover:bg-cream-100'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-burgundy-900 mb-2">
                          Expected Guest Scale
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                          {[
                            'Under 300 Guests',
                            '300 – 600 Guests',
                            '600 – 1,500 Guests',
                            '1,500+ Mega Arena'
                          ].map((scale) => (
                            <button
                              type="button"
                              key={scale}
                              onClick={() => setFormData({ ...formData, guestCount: scale })}
                              className={`p-3 rounded-2xl text-center text-xs font-semibold transition-all border ${
                                formData.guestCount === scale
                                  ? 'bg-cherry-600 text-white border-cherry-600 shadow-md'
                                  : 'bg-cream-50/60 border-cream-200 text-burgundy-900 hover:bg-cream-100'
                              }`}
                            >
                              {scale}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          className="px-6 py-2.5 rounded-full bg-cherry-600 hover:bg-cherry-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2"
                        >
                          <span>Proceed to Venue & Date</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Venue & Date */}
                  {currentStep === 2 && (
                    <div className="space-y-6 animate-fadeIn">
                      <h3 className="font-editorial text-2xl font-bold text-burgundy-950">
                        Step 2: Date, Location & Venue Footprint
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-burgundy-900 mb-2">
                            Proposed Date (or Tentative Month)
                          </label>
                          <input
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full px-4 py-3 rounded-2xl border border-cream-300 bg-cream-50/60 text-burgundy-950 text-sm focus:outline-none focus:ring-2 focus:ring-cherry-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-burgundy-900 mb-2">
                            Primary City / Geography
                          </label>
                          <select
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="w-full px-4 py-3 rounded-2xl border border-cream-300 bg-cream-50/60 text-burgundy-950 text-sm focus:outline-none focus:ring-2 focus:ring-cherry-500"
                          >
                            <option value="Coimbatore">Coimbatore (Headquarters)</option>
                            <option value="Chennai">Chennai & Coastal Belt</option>
                            <option value="Bangalore">Bangalore & Mysore</option>
                            <option value="Ooty / Nilgiris">Ooty & Nilgiris Hills</option>
                            <option value="Madurai">Madurai & South Tamil Nadu</option>
                            <option value="Other Destination">Other South India Destination</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-burgundy-900 mb-2">
                          Venue Type
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          {[
                            'Palace / Five-Star Ballroom',
                            'Outdoor Lawn / Beachfront',
                            'Exhibition Arena / Convention Hall'
                          ].map((vType) => (
                            <button
                              type="button"
                              key={vType}
                              onClick={() => setFormData({ ...formData, venueType: vType })}
                              className={`p-3 rounded-2xl text-center text-xs font-semibold transition-all border ${
                                formData.venueType === vType
                                  ? 'bg-cherry-600 text-white border-cherry-600 shadow-md'
                                  : 'bg-cream-50/60 border-cream-200 text-burgundy-900 hover:bg-cream-100'
                              }`}
                            >
                              {vType}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-burgundy-900 mb-2">
                          Specific Venue Name (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. The Leela Palace, Codissia, Private Estate..."
                          value={formData.venueName}
                          onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl border border-cream-300 bg-cream-50/60 text-burgundy-950 text-sm focus:outline-none focus:ring-2 focus:ring-cherry-500"
                        />
                      </div>

                      <div className="pt-4 flex justify-between">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="px-5 py-2.5 rounded-full border border-cream-300 text-burgundy-800 text-xs font-semibold hover:bg-cream-100"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(3)}
                          className="px-6 py-2.5 rounded-full bg-cherry-600 hover:bg-cherry-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2"
                        >
                          <span>Proceed to Technical Scope</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Technical & Decor Requirements */}
                  {currentStep === 3 && (
                    <div className="space-y-6 animate-fadeIn">
                      <h3 className="font-editorial text-2xl font-bold text-burgundy-950">
                        Step 3: Select Required Services & Rigging
                      </h3>

                      <p className="text-xs text-burgundy-800/80">
                        Select all structural, aesthetic, and technical staging components your event requires:
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          'Bespoke Mandap & Floral Decor',
                          'German Box Trussing & Roof Rigging',
                          'Concert-Grade Line Array Sound',
                          '4K Curved Weatherproof LED Walls',
                          'Intelligent DMX Lighting & Cold Pyro',
                          'True 0-Second Power Redundancy',
                          'Artist & Entertainment Curation',
                          'VIP Guest Logistics & Hospitality'
                        ].map((req) => {
                          const isChecked = formData.requirements.includes(req);
                          return (
                            <button
                              type="button"
                              key={req}
                              onClick={() => handleRequirementToggle(req)}
                              className={`p-3.5 rounded-2xl text-left text-xs sm:text-sm font-semibold transition-all border flex items-center justify-between ${
                                isChecked
                                  ? 'bg-cherry-50 border-cherry-600 text-cherry-900 shadow-sm'
                                  : 'bg-cream-50/60 border-cream-200 text-burgundy-900 hover:bg-cream-100'
                              }`}
                            >
                              <span>{req}</span>
                              <CheckCircle2 className={`w-4 h-4 ${isChecked ? 'text-cherry-600' : 'text-cream-300'}`} />
                            </button>
                          );
                        })}
                      </div>

                      <div className="pt-4 flex justify-between">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          className="px-5 py-2.5 rounded-full border border-cream-300 text-burgundy-800 text-xs font-semibold hover:bg-cream-100"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(4)}
                          className="px-6 py-2.5 rounded-full bg-cherry-600 hover:bg-cherry-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2"
                        >
                          <span>Proceed to Contact Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Contact & Final Notes */}
                  {currentStep === 4 && (
                    <div className="space-y-6 animate-fadeIn">
                      <h3 className="font-editorial text-2xl font-bold text-burgundy-950">
                        Step 4: Your Contact Information
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-burgundy-900 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            autoComplete="off"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-2xl border border-cream-300 bg-cream-50/60 text-burgundy-950 text-sm focus:outline-none focus:ring-2 focus:ring-cherry-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-burgundy-900 mb-2">
                            Direct Phone / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            autoComplete="off"
                            placeholder="Enter mobile number"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-2xl border border-cream-300 bg-cream-50/60 text-burgundy-950 text-sm focus:outline-none focus:ring-2 focus:ring-cherry-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-burgundy-900 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          autoComplete="off"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl border border-cream-300 bg-cream-50/60 text-burgundy-950 text-sm focus:outline-none focus:ring-2 focus:ring-cherry-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-burgundy-900 mb-2">
                          Specific Aesthetic or Technical Notes (Optional)
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Tell us about your theme preferences, traditional customs, acoustic challenges, or key milestone moments..."
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl border border-cream-300 bg-cream-50/60 text-burgundy-950 text-sm focus:outline-none focus:ring-2 focus:ring-cherry-500"
                        />
                      </div>

                      <div className="pt-4 flex justify-between items-center">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(3)}
                          className="px-5 py-2.5 rounded-full border border-cream-300 text-burgundy-800 text-xs font-semibold hover:bg-cream-100"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="px-8 py-3.5 rounded-full bg-cherry-600 hover:bg-cherry-700 text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
                        >
                          <Send className="w-4 h-4" />
                          <span>Submit Official Brief</span>
                        </button>
                      </div>
                    </div>
                  )}

                </form>

              </div>

              {/* Right Column: Live Brief Summary Card */}
              <div className="lg:col-span-4 bg-gradient-to-br from-burgundy-950 to-black text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 sticky top-28">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-burgundy-950 text-xs font-bold mb-5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  Live Brief Summary
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="border-b border-white/15 pb-3">
                    <div className="text-cream-300 text-[11px] uppercase tracking-wider">Event Type</div>
                    <div className="font-bold text-white text-base mt-0.5">{formData.eventType}</div>
                  </div>

                  <div className="border-b border-white/15 pb-3">
                    <div className="text-cream-300 text-[11px] uppercase tracking-wider">Scale & Location</div>
                    <div className="font-semibold text-white mt-0.5">{formData.guestCount} • {formData.location}</div>
                    <div className="text-cream-300 text-xs mt-0.5">{formData.venueType}</div>
                  </div>

                  <div className="border-b border-white/15 pb-3">
                    <div className="text-cream-300 text-[11px] uppercase tracking-wider mb-1.5">Selected Scope ({formData.requirements.length})</div>
                    <div className="space-y-1">
                      {formData.requirements.map((r, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-cream-100">
                          <CheckCircle2 className="w-3 h-3 text-cherry-400 shrink-0" />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold mb-3">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Zero-Failure Staging Standard Guarantee</span>
                    </div>

                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="w-full py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Instant WhatsApp Chat</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          )}

        </div>
      </section>

    </div>
  );
}
