import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  MessageCircle, 
  Calendar, 
  Users, 
  Phone, 
  Mail, 
  MapPin,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyInfo } from '../data/mockData';

export default function ConsultationModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    eventType: 'Royal Wedding & Reception',
    guestCount: '300 - 800 Guests',
    eventDate: '',
    venueLocation: '',
    notes: '',
    estimate: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      eventType: initialData?.eventType || 'Royal Wedding & Reception',
      guestCount: initialData?.guestCount || '300 - 800 Guests',
      eventDate: '',
      venueLocation: '',
      notes: '',
      estimate: initialData?.estimate || ''
    });
    setIsSubmitted(false);
  };

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Confetti effect
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#C9184A', '#590D22', '#D4AF37', '#FAF6F0']
      });
    } catch (err) {
      // fallback safe
    }

    // Direct WhatsApp navigation
    handleWhatsAppForward();
  };

  const handleWhatsAppForward = () => {
    const text = `Hello Prince Events! Consultation request:%0A%0A` +
      `• Name: ${formData.fullName}%0A` +
      `• Phone: ${formData.phone}%0A` +
      `• Email: ${formData.email || 'N/A'}%0A` +
      `• Event: ${formData.eventType}%0A` +
      `• Date: ${formData.eventDate || 'TBD'}%0A` +
      `• Scale: ${formData.guestCount}%0A` +
      `• Venue: ${formData.venueLocation || 'Chennai/Destination'}%0A` +
      (formData.estimate ? `• Indicative Budget: ${formData.estimate}%0A` : '') +
      `• Specific Notes: ${formData.notes || 'Looking for planning & engineering assistance'}`;

    window.open(`https://wa.me/${companyInfo.whatsappPhone}?text=${text}`, '_blank');
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-burgundy-950/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-cream-50 rounded-2xl sm:rounded-3xl shadow-2xl border border-cherry-300 overflow-hidden max-h-[90vh] flex flex-col my-auto">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cream-100/90 hover:bg-cream-200 text-burgundy-950 flex items-center justify-center transition-colors border border-burgundy-900/10 shadow-sm"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header (Compact) */}
        <div className="bg-gradient-to-r from-burgundy-950 via-burgundy-900 to-burgundy-950 text-cream-50 p-4 sm:p-5 shrink-0 pr-10">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cherry-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-cherry-300">
              Direct Access to Lead Planners & Engineers
            </span>
          </div>
          <h3 className="font-editorial text-lg sm:text-2xl font-bold text-white leading-tight">
            Schedule Your Event Consultation
          </h3>
          <p className="text-[11px] sm:text-xs text-cream-200/80 mt-1 leading-snug">
            Fill in your preferred celebration details. We review venue feasibility and respond within 2 hours.
          </p>

          {formData.estimate && (
            <div className="mt-2.5 p-2 rounded-lg bg-cherry-900/60 border border-cherry-500/40 text-[11px] sm:text-xs text-cream-100 flex items-center justify-between">
              <span>Selected Estimate:</span>
              <span className="font-bold text-cherry-300">{formData.estimate}</span>
            </div>
          )}
        </div>

        {/* Modal Body (Scrollable if viewport is tiny) */}
        <div className="p-3.5 sm:p-5 flex-1 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-cherry-100 text-cherry-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10 text-cherry-600" />
              </div>
              <h4 className="font-editorial text-2xl font-bold text-burgundy-950">
                Inquiry Received with Honor, {formData.fullName}!
              </h4>
              <p className="text-xs sm:text-sm text-burgundy-900/80 max-w-md mx-auto leading-relaxed">
                Our Senior Event Director and Chief Technical Engineer have been notified of your requirements. We are preparing a preliminary feasibility breakdown for your date.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppForward}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Directly on WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-cream-200 text-burgundy-950 font-semibold text-xs hover:bg-cream-300 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} autoComplete="off" className="space-y-2.5 sm:space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-burgundy-950 uppercase tracking-wider mb-0.5 sm:mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    data-lpignore="true"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-burgundy-900/20 bg-white text-xs sm:text-sm text-burgundy-950 focus:outline-none focus:border-cherry-600 focus:ring-1 focus:ring-cherry-600"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-burgundy-950 uppercase tracking-wider mb-0.5 sm:mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    autoComplete="off"
                    data-lpignore="true"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter mobile number"
                    className="w-full px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-burgundy-900/20 bg-white text-xs sm:text-sm text-burgundy-950 focus:outline-none focus:border-cherry-600 focus:ring-1 focus:ring-cherry-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-burgundy-950 uppercase tracking-wider mb-0.5 sm:mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    autoComplete="off"
                    data-lpignore="true"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter email address"
                    className="w-full px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-burgundy-900/20 bg-white text-xs sm:text-sm text-burgundy-950 focus:outline-none focus:border-cherry-600"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-burgundy-950 uppercase tracking-wider mb-0.5 sm:mb-1">
                    Approximate Event Date
                  </label>
                  <input
                    type="date"
                    autoComplete="off"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-burgundy-900/20 bg-white text-xs sm:text-sm text-burgundy-950 focus:outline-none focus:border-cherry-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-burgundy-950 uppercase tracking-wider mb-0.5 sm:mb-1">
                    Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-burgundy-900/20 bg-white text-xs sm:text-sm text-burgundy-950 focus:outline-none focus:border-cherry-600"
                  >
                    <option>Royal Wedding & Reception</option>
                    <option>Corporate Summit & Gala</option>
                    <option>Concert & Live Stage Production</option>
                    <option>Bespoke Private Milestone Soiree</option>
                    <option>Engineering Staging & Trussing Only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-burgundy-950 uppercase tracking-wider mb-0.5 sm:mb-1">
                    Expected Scale
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-burgundy-900/20 bg-white text-xs sm:text-sm text-burgundy-950 focus:outline-none focus:border-cherry-600"
                  >
                    <option>100 - 300 Guests</option>
                    <option>300 - 800 Guests</option>
                    <option>800 - 2,000 Guests</option>
                    <option>2,000+ Mega Gathering</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs font-bold text-burgundy-950 uppercase tracking-wider mb-0.5 sm:mb-1">
                  Venue / Location & Special Notes
                </label>
                <textarea
                  rows="2"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention preferred venue and any specific engineering or decor wishes..."
                  className="w-full px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-burgundy-900/20 bg-white text-xs sm:text-sm text-burgundy-950 focus:outline-none focus:border-cherry-600"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 shrink-0">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-cherry-600 to-burgundy-800 hover:from-cherry-700 hover:to-burgundy-900 text-white font-semibold text-xs sm:text-sm shadow-warm-md hover:shadow-cherry-glow transition-all flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Submit Inquiry</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppForward}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
