import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  CheckCircle2, 
  HeartHandshake 
} from 'lucide-react';
import { clientReviews } from '../data/mockData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? clientReviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === clientReviews.length - 1 ? 0 : prev + 1));
  };

  const current = clientReviews[currentIndex];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-cream-50 subtle-grain relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cherry-100 text-cherry-800 text-xs font-semibold tracking-wide uppercase mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-cherry-600" />
            Client Stories & Words
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy-950 tracking-tight mb-4">
            Cherished by Families, <span className="text-cherry-700 italic">Trusted by Enterprises</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-burgundy-900/80 leading-relaxed">
            Read unfiltered feedback from families who entrusted their most sacred days to us, and enterprise directors who demanded zero-defect execution.
          </p>
        </div>

        {/* Featured Review Spotlight */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-burgundy-900/10 shadow-warm-lg relative">
          
          <div className="flex items-center justify-between pb-6 border-b border-burgundy-900/10 mb-6">
            <div className="flex items-center gap-1.5">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-bold text-burgundy-900 ml-2">5.0 Verified Review</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevReview}
                className="w-9 h-9 rounded-full bg-cream-100 hover:bg-cream-200 text-burgundy-900 flex items-center justify-center transition-colors border border-burgundy-900/10"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextReview}
                className="w-9 h-9 rounded-full bg-cream-100 hover:bg-cream-200 text-burgundy-900 flex items-center justify-center transition-colors border border-burgundy-900/10"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="relative mb-8">
            <Quote className="w-12 h-12 text-cherry-200/50 absolute -top-4 -left-2 pointer-events-none" />
            <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-burgundy-950 font-bold leading-relaxed italic relative z-10 pl-4">
              "{current.quote}"
            </p>
          </div>

          <div className="pt-6 border-t border-burgundy-900/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-base text-burgundy-950 flex items-center gap-2">
                <span>{current.client}</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </h4>
              <p className="text-xs text-burgundy-700 font-bold">
                {current.role} • <span className="text-cherry-700">{current.event}</span>
              </p>
            </div>

            <div className="text-xs text-burgundy-800/80 sm:text-right">
              <span className="font-bold block">{current.venue}</span>
              <span className="text-[11px] text-burgundy-700">{current.date}</span>
            </div>
          </div>

        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
          {clientReviews.map((rev, idx) => (
            <div
              key={rev.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                currentIndex === idx
                  ? 'bg-cherry-50/60 border-cherry-500 shadow-warm-sm'
                  : 'bg-white border-burgundy-900/10 hover:border-cherry-200'
              }`}
            >
              <div className="flex items-center gap-1 mb-2">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-burgundy-900/80 line-clamp-3 italic mb-3">
                "{rev.quote}"
              </p>
              <div className="pt-2 border-t border-burgundy-900/5">
                <span className="font-bold text-xs text-burgundy-950 block">{rev.client}</span>
                <span className="text-[10px] text-cherry-700">{rev.event}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
