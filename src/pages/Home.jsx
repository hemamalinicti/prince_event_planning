import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  MapPin, 
  Users, 
  MessageCircle, 
  Layers, 
  HeartHandshake,
  ChevronRight,
  ChevronLeft,
  Quote,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { companyInfo, portfolioItems, trustStats, clientReviews } from '../data/mockData';
import StarfieldBackground from '../components/StarfieldBackground';

export default function Home({ onOpenEnquiry }) {
  // Take top 3 signature projects for a clean showcase
  const featuredProjects = portfolioItems.slice(0, 3);
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  // Automatically cycle through reviews on mobile slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReviewIdx((prev) => (prev + 1) % clientReviews.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-cream-50 text-burgundy-950 font-sans w-full min-h-screen">
      
      {/* Light-Themed Luxury Starfield Animated Background across Homepage */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <StarfieldBackground includeBackground={true} opacity="opacity-90" />
      </div>

      <div className="relative z-10">
        {/* 1. Immersive Hero: 100% Full Screen Viewport in Desktop with Crisp Contrast */}
        <section className="relative isolate w-full min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] flex flex-col justify-center items-center py-12 lg:py-0 overflow-hidden">
          
          {/* Background Image with Gentle Ken Burns Zoom & High-Contrast Vignettes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <img
              src="/hero-stage.jpg"
              alt="The Imperial White Arch Reception Stage built by Prince"
              className="w-full h-full object-cover object-center animate-hero-zoom"
            />
            {/* Balanced protective gradient so full stage architecture is vivid while every word has high contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85" />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/60 via-transparent to-black/50" />
            {/* Ambient golden stardust floating over stagecraft */}
            <StarfieldBackground includeBackground={false} opacity="opacity-75" />
          </div>

        {/* Foreground Content - Perfectly Centered in 100% Desktop Viewport */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center relative z-10 w-full my-auto">
          
          <div className="max-w-4xl mx-auto">
            
            {/* Subtle Royal Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/30 text-white text-xs font-semibold tracking-wide uppercase mb-5 sm:mb-6 shadow-xl">
              <Sparkles className="w-3.5 h-3.5 text-gold-300 animate-pulse" />
              <span className="tracking-wider">Luxury Event Design & Precision Staging</span>
            </div>

            {/* Editorial Headline with Crisp Contrast */}
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[82px] font-bold text-white tracking-tight leading-[1.08] mb-5 sm:mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              Where Grand Visions Meet <br className="hidden sm:inline" />
              <span className="italic font-display text-cherry-300 underline decoration-cherry-400 decoration-wavy underline-offset-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                Flawless Engineering
              </span>.
            </h1>

            {/* Subtitle with High-Legibility Shadow */}
            <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              Prince blends fairy-tale wedding aesthetics and royal hospitality with heavy-duty structural staging, concert acoustics, and intelligent lighting across South India.
            </p>

            {/* Symmetrical Dual Actions (WhatsApp button removed from hero) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <button
                onClick={onOpenEnquiry}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cherry-600 to-burgundy-800 hover:from-cherry-700 hover:to-burgundy-900 text-white font-bold text-sm shadow-warm-lg hover:shadow-cherry-glow transition-all duration-300 flex items-center justify-center gap-2 group border border-cherry-300/40"
              >
                <span>Book Event Consultation</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/portfolio"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-black/60 hover:bg-black/80 text-white font-bold text-sm border-2 border-white/70 shadow-warm-md hover:border-white transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <span>Explore Portfolio</span>
                <ArrowRight className="w-4 h-4 text-cream-100" />
              </Link>
            </div>

            {/* Stage Showcase Tag */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-black/70 backdrop-blur-md border border-white/30 text-xs text-white shadow-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0 shadow-[0_0_8px_#34d399]" />
              <span className="font-bold text-gold-300">Live Stagecraft:</span>
              <span className="text-white font-semibold">The Imperial White Arch Reception Stage • Built by Prince</span>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Key Trust Metrics Strip (Intersecting Cross Lines on Mobile) */}
      <section className="border-y border-burgundy-900/10 bg-cream-100/60 py-4 sm:py-8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 text-center">
            {trustStats.map((stat, idx) => {
              const isLeftColMobile = idx % 2 === 0;
              const isTopRowMobile = idx < 2;
              const isLastDesktop = idx === 3;

              return (
                <div 
                  key={idx} 
                  className={`py-4 sm:py-6 px-3 sm:px-6 flex flex-col justify-center items-center ${
                    isLeftColMobile ? 'border-r border-burgundy-900/15' : ''
                  } ${
                    isTopRowMobile ? 'border-b border-burgundy-900/15 md:border-b-0' : ''
                  } ${
                    !isLastDesktop ? 'md:border-r md:border-burgundy-900/15' : 'md:border-r-0'
                  }`}
                >
                  <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-cherry-700">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-burgundy-950 mt-1 leading-snug">
                    {stat.label}
                  </div>
                  <div className="text-[11px] sm:text-xs text-burgundy-900/80 font-bold mt-0.5 leading-tight">
                    {stat.sub}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. The Two Core Pillars - High-Clarity, Crystal Clear Photographic Cards */}
      <section className="py-20 md:py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-cherry-700">
            What We Do
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy-950 mt-1 mb-3">
            Two Pillars, One Seamless Experience.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-burgundy-900 font-bold leading-relaxed">
            By uniting decor architects and certified structural engineers under one roof, we eliminate vendor friction and ensure flawless execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Pillar 1: Event Planning Card - Royal Floral Arch Stage */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-cherry-900/30 shadow-warm-lg hover:shadow-warm-xl transition-all duration-300 flex flex-col justify-between group min-h-[440px] sm:min-h-[460px]">
            
            {/* Background Image: User Provided Red Floral & Golden Arch Stage */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img 
                src="/pillar-event-planning.jpg" 
                alt="Royal Red Floral Arch & Golden Staging Architecture" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.88] contrast-[1.08]"
              />
              {/* Protective overlay: top remains clear for stage decor, bottom gently darkens for pure text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/25" />
            </div>

            {/* Card Content - Crisp White & Cherry Contrast */}
            <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 p-2.5 rounded-2xl bg-black/50 backdrop-blur-md text-cherry-300 border border-white/30 shadow-md flex items-center justify-center">
                    <HeartHandshake className="w-5 h-5 text-cherry-300" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-cherry-600 text-white shadow-md border border-cherry-300/50">
                    Pillar One
                  </span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
                  Bespoke Event Planning & Management
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-cream-100 leading-relaxed mb-4 font-medium drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                  Palatial weddings, corporate galas, and bespoke VIP celebrations curated with effortless grace.
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-white font-medium mb-5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cherry-400 shrink-0 shadow-[0_0_8px_#ff4d6d]" />
                    <span>Royal & Destination Weddings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cherry-400 shrink-0 shadow-[0_0_8px_#ff4d6d]" />
                    <span>Corporate Summits & Global Galas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cherry-400 shrink-0 shadow-[0_0_8px_#ff4d6d]" />
                    <span>VIP Guest Protocol & Artist Curation</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/event-planning"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-cherry-300 hover:text-white pt-4 border-t border-white/25 group/link transition-colors drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]"
              >
                <span>Explore Event Planning</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: Technical Engineering Card - White Arch & Chandelier Stage */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-burgundy-900/30 shadow-warm-lg hover:shadow-warm-xl transition-all duration-300 flex flex-col justify-between group min-h-[440px] sm:min-h-[460px]">
            
            {/* Background Image: User Provided Grand White Arch Stage & Chandeliers */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img 
                src="/pillar-engineering.png" 
                alt="Imperial White Arch Stagecraft & Chandelier Production" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.88] contrast-[1.08]"
              />
              {/* Protective overlay: top remains soft (black/25) so chandeliers & arches shine vividly, bottom darkens for crystal-clear text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/25" />
            </div>

            {/* Card Content - Crisp White & Radiant Amber Contrast */}
            <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 p-2.5 rounded-2xl bg-black/50 backdrop-blur-md text-amber-300 border border-white/30 shadow-md flex items-center justify-center">
                    <Layers className="w-5 h-5 text-amber-300" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-amber-400 text-burgundy-950 shadow-md border border-amber-200">
                    Pillar Two
                  </span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
                  Technical Staging & Engineering
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-cream-100 leading-relaxed mb-4 font-medium drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                  German truss staging, concert line-array sound, and curved 4K LED visuals.
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-white font-medium mb-5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 shadow-[0_0_8px_#fbbf24]" />
                    <span>Certified Heavy Box Truss & Staging</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 shadow-[0_0_8px_#fbbf24]" />
                    <span>Line Array Audio & Zero-Echo Tuning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 shadow-[0_0_8px_#fbbf24]" />
                    <span>4K Curved LED Wall Video & Lighting Shows</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/engineering"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-300 hover:text-white pt-4 border-t border-white/25 group/link transition-colors drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]"
              >
                <span>Explore Engineering</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Curated Portfolio Highlights (Wide 3-Card Grid) */}
      <section className="py-16 md:py-24 bg-sky-100 border-y border-burgundy-900/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cherry-700">
                Selected Work
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy-950 mt-1">
                Signature Portfolio Highlights
              </h2>
            </div>
            
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-cherry-700 hover:text-cherry-800 group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-burgundy-900/10 shadow-warm-sm hover:shadow-warm-md transition-all group flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-cream-200">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-burgundy-950/90 text-white backdrop-blur-sm shadow-md">
                    {item.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-cherry-700 font-bold flex items-center gap-1.5 mb-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                    <h3 className="font-editorial text-xl font-bold text-burgundy-950 group-hover:text-cherry-700 transition-colors line-clamp-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-burgundy-900 font-bold line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-burgundy-900/10 flex items-center justify-between text-xs text-burgundy-950 font-bold">
                    <span className="bg-cream-200/90 px-3 py-1.5 rounded-md border border-burgundy-900/10">
                      {item.attendees}
                    </span>
                    <span className="text-cherry-700 flex items-center gap-1 font-bold group-hover:translate-x-1 transition-transform">
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Client Experiences & Authentic Reviews */}
      <section className="py-20 md:py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cherry-700">
            Client Experiences
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy-950 mt-1 mb-3">
            Voices of Trust & Royal Celebrations.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-burgundy-900 font-bold leading-relaxed">
            From palace courtyards to high-stakes corporate broadcasts, hear what our distinguished patrons say about our craft.
          </p>
        </div>

        {/* Mobile View: 1 Row 1 Column with Automatic Sliding */}
        <div className="block md:hidden mb-10">
          <div className="relative">
            <div
              key={activeReviewIdx}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-cherry-600/40 shadow-warm-lg flex flex-col justify-between min-h-[350px] animate-fadeIn transition-all duration-500"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(clientReviews[activeReviewIdx].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-cherry-700 bg-cherry-50 px-2.5 py-0.5 rounded-full border border-cherry-200">
                    Verified Review {activeReviewIdx + 1} of {clientReviews.length}
                  </span>
                </div>

                <p className="font-editorial text-base sm:text-lg text-burgundy-950 italic leading-relaxed mb-6">
                  "{clientReviews[activeReviewIdx].quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-burgundy-900/10 flex items-center justify-between gap-3">
                <div>
                  <span className="font-bold text-sm text-burgundy-950 block">
                    {clientReviews[activeReviewIdx].client}
                  </span>
                  <span className="text-xs text-cherry-700 font-semibold block mt-0.5">
                    {clientReviews[activeReviewIdx].event}
                  </span>
                  <span className="text-[11px] text-burgundy-800/80 block mt-0.5">
                    {clientReviews[activeReviewIdx].venue}
                  </span>
                </div>

                {/* Mobile Navigation Arrows */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => setActiveReviewIdx((prev) => (prev === 0 ? clientReviews.length - 1 : prev - 1))}
                    className="w-8 h-8 rounded-full bg-cream-100 hover:bg-cream-200 text-burgundy-900 flex items-center justify-center transition-colors border border-burgundy-900/10 shadow-xs"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveReviewIdx((prev) => (prev + 1) % clientReviews.length)}
                    className="w-8 h-8 rounded-full bg-cream-100 hover:bg-cream-200 text-burgundy-900 flex items-center justify-center transition-colors border border-burgundy-900/10 shadow-xs"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Carousel Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {clientReviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveReviewIdx(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeReviewIdx === idx
                    ? 'w-7 bg-cherry-600'
                    : 'w-2 bg-burgundy-900/20 hover:bg-burgundy-900/40'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop View: Full 3-Card Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {clientReviews.map((review, idx) => (
            <div
              key={review.id}
              onClick={() => setActiveReviewIdx(idx)}
              className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                activeReviewIdx === idx
                  ? 'bg-white border-cherry-600/50 shadow-warm-lg ring-2 ring-cherry-600/20 scale-[1.02]'
                  : 'bg-white/80 border-burgundy-900/10 shadow-warm-sm hover:bg-white hover:border-burgundy-900/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-cherry-700 bg-cherry-50 px-2.5 py-0.5 rounded-full border border-cherry-200">
                    Verified
                  </span>
                </div>

                <p className="font-editorial text-base sm:text-lg text-burgundy-950 italic leading-relaxed mb-6">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-burgundy-900/10">
                <span className="font-bold text-sm text-burgundy-950 block">
                  {review.client}
                </span>
                <span className="text-xs text-cherry-700 font-semibold block mt-0.5">
                  {review.event}
                </span>
                <span className="text-[11px] text-burgundy-800/80 block mt-0.5">
                  {review.venue}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Credibility banner strip */}
        <div className="bg-cream-100/80 rounded-2xl p-6 border border-burgundy-900/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-cherry-600 text-white flex items-center justify-center shrink-0 shadow-sm font-display font-bold text-lg">
              4.98
            </div>
            <div>
              <span className="font-bold text-sm text-burgundy-950 block">Exceptional Patron Satisfaction</span>
              <span className="text-xs text-burgundy-800 font-bold">Over 550+ luxury weddings and turnkey engineering productions executed with zero failures</span>
            </div>
          </div>

          <button
            onClick={onOpenEnquiry}
            className="px-6 py-2.5 rounded-xl bg-cherry-600 hover:bg-cherry-700 text-white font-bold text-xs sm:text-sm shadow-warm-sm transition-all shrink-0 flex items-center gap-1.5"
          >
            <span>Book Consultation</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </section>
      </div>

    </div>
  );
}
