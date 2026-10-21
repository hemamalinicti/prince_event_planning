import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowLeft, ArrowRight, Construction, CheckCircle2 } from 'lucide-react';

export default function PagePlaceholder({ title, subtitle, moduleNumber, description, onOpenEnquiry }) {
  return (
    <div className="py-24 md:py-32 bg-cream-50 subtle-grain min-h-[60vh] flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cherry-50 border border-cherry-200 text-cherry-800 text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5 text-cherry-600 animate-pulse" />
          <span>Module {moduleNumber} • Coming Up Next</span>
        </div>

        <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-burgundy-950 mb-4 tracking-tight">
          {title}
        </h1>

        <p className="font-display text-xl sm:text-2xl text-cherry-700 italic mb-6">
          "{subtitle}"
        </p>

        <p className="font-sans text-sm sm:text-base text-burgundy-900/80 max-w-xl mx-auto leading-relaxed mb-10">
          {description}
        </p>

        <div className="p-6 rounded-2xl bg-white border border-burgundy-900/10 shadow-warm-md max-w-lg mx-auto mb-10 text-left">
          <div className="flex items-center gap-2 text-xs font-bold text-burgundy-950 uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Ready for Next Step Implementation</span>
          </div>
          <p className="text-xs text-burgundy-800/80 leading-normal">
            As requested, we are delivering the <strong className="text-cherry-700">Home Page</strong> first with the full multi-page routing infrastructure in place. We will create this page next upon your review!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-burgundy-900 hover:bg-burgundy-950 text-white font-semibold text-xs sm:text-sm shadow-warm-sm transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home Page</span>
          </Link>

          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cherry-600 hover:bg-cherry-700 text-white font-semibold text-xs sm:text-sm shadow-warm-sm transition-all flex items-center justify-center gap-2"
          >
            <span>Book Consultation Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
