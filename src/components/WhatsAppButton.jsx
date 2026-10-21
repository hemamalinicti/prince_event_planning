import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { companyInfo } from '../data/mockData';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip message */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-burgundy-950 px-3.5 py-2 rounded-xl shadow-warm-lg border border-cherry-200 text-xs font-semibold animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Talk to our Lead Planner & Engineer</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-burgundy-400 hover:text-burgundy-700 ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/${companyInfo.whatsappPhone}?text=Hello%20Prince%20Engineering%20%26%20Events!%20I%20am%20exploring%20your%20services%20and%20would%20love%20to%20discuss%20an%20event.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 relative group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-cherry-600 rounded-full border-2 border-white flex items-center justify-center">
          <span className="w-1.5 h-1.5 bg-white rounded-full" />
        </span>
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
