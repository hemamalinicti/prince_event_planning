import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Award, 
  ChevronRight, 
  Calculator, 
  PhoneCall, 
  CheckCircle2,
  Wrench,
  Flame,
  ArrowDown
} from 'lucide-react';
import { companyInfo, trustStats } from '../data/mockData';

export default function Hero({ onOpenEnquiry }) {
  const scrollToEstimator = () => {
    const el = document.querySelector('#estimator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    const el = document.querySelector('#portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-6 pb-20 md:pt-12 md:pb-28 overflow-hidden bg-cream-50 subtle-grain">
      {/* Decorative ambient gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cherry-200/40 via-burgundy-200/30 to-champagne-200/30 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-cherry-300/20 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badge: Human & Certified Craft */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cherry-50 border border-cherry-200 text-cherry-800 text-xs sm:text-sm font-bold shadow-warm-sm">
            <span className="w-2 h-2 rounded-full bg-cherry-600 animate-ping" />
            <Sparkles className="w-4 h-4 text-cherry-600" />
            <span>Chennai & Destination Event Planners</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream-100 border border-burgundy-900/10 text-burgundy-900 text-xs sm:text-sm font-bold">
            <ShieldCheck className="w-4 h-4 text-burgundy-700" />
            <span>ISO Certified Rigging & Electrical Safety</span>
          </div>
        </div>

        {/* Main Hero Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-burgundy-950 tracking-tight leading-[1.1] mb-6">
            Where <span className="italic font-display text-cherry-600 underline decoration-cherry-300/60 decoration-wavy underline-offset-8">Royal Celebrations</span> Meet Flawless Engineering.
          </h1>

          <p className="font-sans text-base sm:text-lg md:text-xl text-burgundy-900/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Prince Engineering & Events delivers majestic wedding decors, royal banquets, and high-stakes corporate summits powered by heavy trussing, concert-grade acoustics, and intelligent lighting.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-14">
            <button
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cherry-600 to-burgundy-800 hover:from-cherry-700 hover:to-burgundy-900 text-white font-semibold text-sm sm:text-base shadow-warm-md hover:shadow-cherry-glow transition-all duration-300 flex items-center justify-center gap-2.5 group"
            >
              <span>Book Event Consultation</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={scrollToEstimator}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-cream-100 text-burgundy-900 font-semibold text-sm sm:text-base border border-burgundy-900/15 shadow-warm-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-cherry-600" />
              <span>Instant Budget Estimator</span>
            </button>

            <button
              onClick={scrollToPortfolio}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-burgundy-800 hover:text-cherry-700 font-bold text-sm sm:text-base transition-colors flex items-center justify-center gap-1.5"
            >
              <span>View Gallery</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Visual Hero Collage Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 max-w-6xl mx-auto items-center">
          
          {/* Main Large Visual: Luxury Wedding Decor */}
          <div className="md:col-span-7 relative group rounded-2xl overflow-hidden shadow-warm-lg border border-burgundy-900/10 bg-cream-100">
            <img 
              src="/hero-stage.jpg" 
              alt="Bespoke White Arch Reception Stage with Floral Walkway" 
              className="w-full h-72 sm:h-96 md:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/85 via-burgundy-950/30 to-transparent flex flex-col justify-end p-6 text-cream-50">
              <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded bg-cherry-600/90 text-white w-fit mb-2">
                Bespoke Planning
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-white mb-1">
                The Imperial White Arch Reception
              </h2>
              <p className="text-xs sm:text-sm text-cream-200/90 line-clamp-2">
                Illuminated architectural arches, cascading English garden roses, and gloss mirrored walkway reflex.
              </p>
            </div>

            {/* Floating verification badge */}
            <div className="absolute top-4 left-4 bg-cream-50/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-burgundy-900/10 shadow-warm-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-semibold text-burgundy-900">100% On-Time Execution</span>
            </div>
          </div>

          {/* Right Stacked Visuals: Engineering Rig & Corporate Gala */}
          <div className="md:col-span-5 flex flex-col gap-4">
            
            {/* Engineering Rigging card */}
            <div className="relative group rounded-2xl overflow-hidden shadow-warm-md border border-burgundy-900/10 bg-cream-100 h-44 sm:h-48">
              <img 
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80" 
                alt="Concert stage heavy trussing and intelligent lighting rig"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/85 via-burgundy-950/20 to-transparent flex flex-col justify-end p-4 text-cream-50">
                <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-burgundy-800 text-cream-200 w-fit mb-1">
                  <Wrench className="w-3 h-3 text-gold-400" />
                  Engineering Services
                </span>
                <h3 className="font-editorial text-lg font-bold text-white">
                  Heavy Box Truss & Concert Acoustics
                </h3>
                <p className="text-[11px] text-cream-300">
                  Certified German aluminum structures & 120dB line arrays.
                </p>
              </div>
            </div>

            {/* Corporate Summit card */}
            <div className="relative group rounded-2xl overflow-hidden shadow-warm-md border border-burgundy-900/10 bg-cream-100 h-44 sm:h-48">
              <img 
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80" 
                alt="Corporate leadership summit with curved 4K LED backdrop"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/85 via-burgundy-950/20 to-transparent flex flex-col justify-end p-4 text-cream-50">
                <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-cherry-700 text-white w-fit mb-1">
                  4K LED Production
                </span>
                <h3 className="font-editorial text-lg font-bold text-white">
                  Global Summits & Corporate Galas
                </h3>
                <p className="text-[11px] text-cream-300">
                  Curved LED display backdrops & live multi-cam broadcasting.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Credibility & Trust Metric Strip */}
        <div className="mt-14 max-w-5xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-burgundy-900/10 shadow-warm-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-burgundy-900/10">
            {trustStats.map((stat, idx) => (
              <div key={idx} className={`pt-4 md:pt-0 ${idx > 0 ? 'md:pl-6' : ''}`}>
                <div className="font-display text-3xl sm:text-4xl font-bold text-cherry-700 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-burgundy-950 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-burgundy-800/70 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
