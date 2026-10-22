import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ShieldCheck, 
  ChevronRight, 
  ChevronLeft,
  Layers, 
  Volume2, 
  Award, 
  Clock, 
  Quote, 
  Zap,
  SunMedium,
  Check
} from 'lucide-react';

export default function About({ onOpenEnquiry }) {
  const milestones = [
    {
      year: '2014',
      title: 'Founding by Structural Engineers',
      desc: 'Founded in Tamil Nadu by a passionate team of civil and mechanical staging engineers determined to introduce rigorous safety calculations to high-end celebratory decor.'
    },
    {
      year: '2018',
      title: 'Pioneering Heavy Box Trussing',
      desc: 'Invested in certified German aluminum box trusses and concert line-array audio systems, setting a regional benchmark for zero-echo acoustics and heavy weather staging.'
    },
    {
      year: '2022',
      title: 'Destination Weddings & Large Arenas',
      desc: 'Expanded across South India—producing coastal destination weddings at Covelong & Taj Fisherman\'s Cove, palace galas, and mega arenas with 10,000+ guests.'
    },
    {
      year: '2026',
      title: '550+ Milestone Productions & Coimbatore HQ',
      desc: 'Celebrating 12+ years of zero structural failures across 550+ bespoke luxury events, operating from our flagship campus at Sowripalayam, Coimbatore.'
    }
  ];


  const [activeCard, setActiveCard] = useState(2); // 3rd card centered and popped by default
  const [touchStartX, setTouchStartX] = useState(null);

  const pillarsOfRigor = [
    {
      shortName: 'Staging',
      icon: Layers,
      title: 'Structural Load & Staging Engineering',
      desc: 'German aluminum box trusses and cantilevered roof systems engineered with wind tolerance up to 65 km/h for complete outdoor and arena safety.',
      stat: '65 km/h wind rated',
      specs: [
        'German TÜV-certified aluminum box trusses',
        'Multi-tiered load-bearing stage decking',
        'Cantilevered all-weather arena roof rigging'
      ]
    },
    {
      shortName: 'Decor',
      icon: Sparkles,
      title: 'Royal Scenography & Floral Artistry',
      desc: 'Handcrafted palatial mandaps, imported floral arches, custom thematic backdrops, and luxury guest lounges styled with bespoke elegance.',
      stat: '100% bespoke sets',
      specs: [
        'Master-crafted wooden and fiber palatial mandaps',
        'Direct-import exotic floral arches and canopies',
        'Architectural thematic ambient guest lounges'
      ]
    },
    {
      shortName: 'Acoustics',
      icon: Volume2,
      title: 'Concert Acoustics & Line-Array Audio',
      desc: 'Frequency-tuned line arrays and wireless vocal microphone networks calibrated to eliminate harsh echoes across 100 to 10,000+ attendees.',
      stat: 'Zero latency audio',
      specs: [
        'Acoustically tuned line-array speaker hangs',
        'Digital DSP zero-latency signal processing',
        'CPCB-compliant directional sound mapping'
      ]
    },
    {
      shortName: 'Lighting',
      icon: SunMedium,
      title: 'Intelligent Lighting & Laser Architecture',
      desc: 'DMX-automated moving-head fixtures, warm architectural ambient wash, follow-spots, and synchronized cold-pyro visual spectacles.',
      stat: 'DMX automated FX',
      specs: [
        'DMX computerized moving-head beam arrays',
        'Warm 3000K palatial architectural wash',
        'Synchronized indoor-safe cold spark pyrotechnics'
      ]
    },
    {
      shortName: 'Power',
      icon: Zap,
      title: 'True 0-Second Power Redundancy',
      desc: 'Dual synchronized silent diesel generators with instantaneous automatic transfer switches guaranteeing uninterrupted festivities.',
      stat: '0-second failover',
      specs: [
        'Dual synchronized silent diesel gen-sets',
        'Instant automatic transfer switch (ATS)',
        'Isolated pure-sine audio and video power lines'
      ]
    }
  ];

  const handlePrevPillar = () => {
    setActiveCard((prev) => (prev === 0 ? pillarsOfRigor.length - 1 : prev - 1));
  };

  const handleNextPillar = () => {
    setActiveCard((prev) => (prev + 1) % pillarsOfRigor.length);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      handleNextPillar();
    } else if (diff < -45) {
      handlePrevPillar();
    }
    setTouchStartX(null);
  };

  return (
    <div className="relative text-burgundy-950 font-sans w-full min-h-screen">
      
      {/* Uiverse.io by kencode7 Architectural Grid & Gradient Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden about-uiverse-bg" />

      <div className="relative z-10">
      
      {/* 1. Sleek Compact Hero Banner with Photographic Background */}
      <section className="relative isolate w-full py-16 sm:py-20 lg:py-24 flex flex-col justify-center items-center overflow-hidden bg-burgundy-950">
        
        {/* Photographic Background with Gentle Zoom & Balanced Contrast */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src="/hero-about.jpg"
            alt="Grand auditorium arena hall with chandeliers and palatial stage architecture"
            className="w-full h-full object-cover object-center animate-hero-zoom"
          />
          {/* Subtle balanced gradient overlays so full image is vivid while letters remain razor sharp */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/70 via-transparent to-black/40" />
        </div>

        {/* Foreground Content - Compact & Centered */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center relative z-10 w-full">
          
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 text-xs text-cream-100 mb-5 shadow-lg">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-cherry-400" />
              <span className="text-white font-semibold">About Us</span>
            </div>

            {/* Editorial Headline - Concise & Punchy */}
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold tracking-tight text-white mb-5 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] max-w-4xl mx-auto leading-[1.12]">
              Crafting Grand Celebrations <br className="hidden sm:inline" />
              <span className="italic font-display text-white underline decoration-cherry-400 decoration-wavy underline-offset-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                With Structural Mastery
              </span>.
            </h1>

            {/* Subtitle - Reduced & Focused */}
            <p className="font-sans text-sm sm:text-base md:text-lg text-cream-100 max-w-2xl mx-auto leading-relaxed font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              12+ years of palatial celebration design and certified engineering rigor, proudly rooted in Coimbatore.
            </p>

          </div>

        </div>
      </section>

      {/* 2. The Five Pillars of Prince Rigor - Cascading Coverflow Stack with 3rd Center Card */}
      <section className="relative isolate py-20 lg:py-28 bg-white/70 backdrop-blur-xs border-b border-black/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cherry-50 border border-cherry-200 text-cherry-700 text-xs font-semibold mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-cherry-600" />
              <span>Uncompromising Standards</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy-950 tracking-tight leading-tight mb-4">
              The Five Pillars of Prince Rigor
            </h2>
            <p className="text-sm sm:text-base text-burgundy-800/80 leading-relaxed max-w-2xl mx-auto">
              Every project undertaken by our team adheres to strict engineering calculations. Click any card to pop its full technical specifications.
            </p>
          </div>

          {/* MOBILE VIEW: Animated Cascading Coverflow Deck (< lg) */}
          <div 
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="block lg:hidden py-4 overflow-hidden"
          >
            {/* 3D Overlapping Cascading Deck Container */}
            <div className="relative w-full h-[490px] sm:h-[510px] flex items-center justify-center my-2">
              {pillarsOfRigor.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                const isActive = activeCard === idx;
                const diff = idx - activeCard;

                // 3D positioning matching the website deck view
                let transformStyle = '';
                let zIndex = 10;
                let opacity = 1;
                let pointerEvents = 'auto';

                if (diff === 0) {
                  // Active Center Card (Website view popped state)
                  transformStyle = 'translateX(0) translateY(-8px) scale(1) rotate(0deg)';
                  zIndex = 35;
                  opacity = 1;
                } else if (diff === 1) {
                  // Card immediately to the right (cascading behind)
                  transformStyle = 'translateX(62%) translateY(6px) scale(0.88) rotate(2deg)';
                  zIndex = 20;
                  opacity = 0.65;
                } else if (diff === -1) {
                  // Card immediately to the left (cascading behind)
                  transformStyle = 'translateX(-62%) translateY(6px) scale(0.88) rotate(-2deg)';
                  zIndex = 20;
                  opacity = 0.65;
                } else if (diff === 2) {
                  // Card 2 steps to the right
                  transformStyle = 'translateX(105%) translateY(14px) scale(0.78) rotate(4deg)';
                  zIndex = 10;
                  opacity = 0.35;
                } else if (diff === -2) {
                  // Card 2 steps to the left
                  transformStyle = 'translateX(-105%) translateY(14px) scale(0.78) rotate(-4deg)';
                  zIndex = 10;
                  opacity = 0.35;
                } else {
                  // Hidden cards beyond view
                  transformStyle = diff > 0 ? 'translateX(140%) scale(0.7)' : 'translateX(-140%) scale(0.7)';
                  zIndex = 0;
                  opacity = 0;
                  pointerEvents = 'none';
                }

                return (
                  <div
                    key={idx}
                    onClick={() => setActiveCard(idx)}
                    style={{
                      transform: transformStyle,
                      zIndex,
                      opacity,
                      pointerEvents
                    }}
                    className={`absolute w-[285px] sm:w-[310px] rounded-3xl p-5 sm:p-6 transition-all duration-500 ease-out cursor-pointer select-none flex flex-col justify-between ${
                      isActive
                        ? 'bg-white border-2 border-cherry-500 ring-4 ring-cherry-400/25 shadow-2xl'
                        : 'bg-gradient-to-br from-cream-50 via-white to-cream-100/80 border border-cream-300 shadow-lg'
                    }`}
                  >
                    <div>
                      {/* Top Icon & Tag */}
                      <div className="flex items-center justify-between mb-3.5">
                        <div
                          className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-colors duration-300 shadow-sm ${
                            isActive
                              ? 'bg-cherry-600 text-white shadow-cherry-600/30'
                              : 'bg-cherry-50 border border-cherry-100 text-cherry-600'
                          }`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span
                          className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded-full transition-colors ${
                            isActive
                              ? 'bg-cherry-100 text-cherry-900 border border-cherry-300'
                              : 'bg-cream-200 text-burgundy-900'
                          }`}
                        >
                          0{idx + 1}
                        </span>
                      </div>

                      {/* Metric Stat Pill */}
                      <div
                        className={`inline-block px-2.5 py-0.5 rounded-full font-semibold text-[11px] mb-2.5 border transition-colors ${
                          isActive
                            ? 'bg-cherry-700 text-white border-cherry-800 font-bold shadow-sm'
                            : 'bg-cherry-50 text-cherry-900 border-cherry-200/70'
                        }`}
                      >
                        {pillar.stat}
                      </div>

                      {/* Title */}
                      <h3
                        className={`font-editorial text-lg sm:text-xl font-bold mb-2 leading-snug transition-colors ${
                          isActive ? 'text-cherry-700' : 'text-burgundy-950'
                        }`}
                      >
                        {pillar.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-burgundy-800/85 leading-relaxed font-bold mb-3">
                        {pillar.desc}
                      </p>

                      {/* Technical Specifications (Shown when active) */}
                      {isActive && (
                        <div className="mt-2.5 pt-2.5 border-t border-cream-200 space-y-1.5 animate-fadeIn">
                          <div className="text-[11px] font-bold text-burgundy-900 flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-cherry-600" />
                            <span>Technical Specifications</span>
                          </div>
                          {pillar.specs.map((spec, sIdx) => (
                            <div key={sIdx} className="flex items-start gap-1.5 text-[11px] text-burgundy-800/90 leading-tight">
                              <Check className="w-3.5 h-3.5 text-cherry-600 shrink-0 mt-0.5" />
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom Indicator */}
                    <div className="mt-4 pt-3 border-t border-cream-200/80 flex items-center justify-between text-[11px] font-semibold text-cherry-600">
                      {isActive ? (
                        <>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-cherry-500 animate-ping" />
                            <span className="font-bold">Active Selection</span>
                          </div>
                          <span className="text-[10px] text-burgundy-500 font-mono">Full specs</span>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center gap-1.5 text-burgundy-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-cherry-400" />
                            <span>Tap to pop</span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-cherry-500" />
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Controls: Prev/Next Chevrons & Pill Dots */}
            <div className="mt-4 flex items-center justify-between px-3">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrevPillar}
                  aria-label="Previous card"
                  className="w-8 h-8 rounded-full bg-cream-100 hover:bg-cherry-50 active:scale-95 text-burgundy-900 flex items-center justify-center border border-cream-300 transition-colors shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4 text-burgundy-800" />
                </button>
                <button
                  onClick={handleNextPillar}
                  aria-label="Next card"
                  className="w-8 h-8 rounded-full bg-cream-100 hover:bg-cherry-50 active:scale-95 text-burgundy-900 flex items-center justify-center border border-cream-300 transition-colors shadow-sm"
                >
                  <ChevronRight className="w-4 h-4 text-burgundy-800" />
                </button>
              </div>

              {/* Indicator Dots */}
              <div className="flex items-center gap-1.5">
                {pillarsOfRigor.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCard(idx)}
                    aria-label={`Go to pillar ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeCard === idx
                        ? 'w-7 bg-cherry-600'
                        : 'w-2 bg-cream-300 hover:bg-cream-400'
                    }`}
                  />
                ))}
              </div>

              <span className="text-[10px] font-mono font-bold text-cherry-700 bg-cherry-50 px-2 py-0.5 rounded-full border border-cherry-200">
                0{activeCard + 1} / 05
              </span>
            </div>
          </div>

          {/* DESKTOP VIEW: Cascading Overlapping Cards Deck (hidden on mobile, visible lg+) */}
          <div className="hidden lg:flex relative py-8 items-center justify-center overflow-visible">
            <div className="flex items-stretch justify-center">
              {pillarsOfRigor.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                const isActive = activeCard === idx;

                // Base z-indices according to user specification:
                // 3rd card (idx 2) is center: z-30
                // 2nd (idx 1) & 4th (idx 3) partially inside 3rd: z-20
                // 1st (idx 0) & 5th (idx 4) partially inside 2nd & 4th: z-10
                let baseZ = 10;
                if (idx === 2) baseZ = 30;
                else if (idx === 1 || idx === 3) baseZ = 20;

                const zIndex = isActive ? 35 : baseZ;

                // Overlap negative margins on desktop
                let marginClass = '';
                if (idx === 0 || idx === 1) marginClass = 'lg:-mr-12 xl:-mr-16';
                else if (idx === 3 || idx === 4) marginClass = 'lg:-ml-12 xl:-ml-16';

                return (
                  <div
                    key={idx}
                    onClick={() => setActiveCard(idx)}
                    style={{ zIndex }}
                    className={`relative w-[280px] sm:w-[300px] xl:w-[320px] shrink-0 rounded-3xl p-6 transition-all duration-500 cursor-pointer select-none flex flex-col justify-between ${marginClass} ${
                      isActive
                        ? 'bg-white border-2 border-cherry-500 ring-4 ring-cherry-400/25 shadow-2xl -translate-y-4 scale-105 opacity-100'
                        : 'bg-gradient-to-br from-cream-50 via-white to-cream-100/70 border border-cream-300 hover:border-cherry-300 shadow-lg hover:shadow-xl hover:-translate-y-1.5 opacity-90 hover:opacity-100'
                    }`}
                  >
                    <div>
                      {/* Top Icon & Tag */}
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300 shadow-sm ${
                            isActive
                              ? 'bg-cherry-600 text-white shadow-cherry-600/30'
                              : 'bg-cherry-50 border border-cherry-100 text-cherry-600'
                          }`}
                        >
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span
                          className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded-full transition-colors ${
                            isActive
                              ? 'bg-cherry-100 text-cherry-900 border border-cherry-300'
                              : 'bg-cream-200 text-burgundy-900'
                          }`}
                        >
                          0{idx + 1}
                        </span>
                      </div>

                      {/* Metric Stat Pill */}
                      <div
                        className={`inline-block px-3 py-1 rounded-full font-semibold text-xs mb-3 border transition-colors ${
                          isActive
                            ? 'bg-cherry-700 text-white border-cherry-800 font-bold shadow-sm'
                            : 'bg-cherry-50 text-cherry-900 border-cherry-200/70'
                        }`}
                      >
                        {pillar.stat}
                      </div>

                      {/* Title */}
                      <h3
                        className={`font-editorial text-xl font-bold mb-2.5 leading-snug transition-colors ${
                          isActive ? 'text-cherry-700' : 'text-burgundy-950'
                        }`}
                      >
                        {pillar.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-burgundy-800/85 leading-relaxed font-bold mb-3">
                        {pillar.desc}
                      </p>

                      {/* Popped Full Content Specifications (shown when active) */}
                      {isActive && (
                        <div className="mt-3 pt-3 border-t border-cream-200 space-y-2">
                          <div className="text-[11px] font-bold text-burgundy-900 flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-cherry-600" />
                            <span>Technical Specifications</span>
                          </div>
                          {pillar.specs.map((spec, sIdx) => (
                            <div key={sIdx} className="flex items-start gap-1.5 text-xs text-burgundy-800/90 leading-tight">
                              <Check className="w-3.5 h-3.5 text-cherry-600 shrink-0 mt-0.5" />
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom Indicator */}
                    <div className="mt-5 pt-3.5 border-t border-cream-200/80 flex items-center justify-between text-[11px] font-semibold text-cherry-600">
                      {isActive ? (
                        <>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-cherry-500 animate-ping" />
                            <span className="font-bold">Active Selection</span>
                          </div>
                          <span className="text-[10px] text-burgundy-500 font-mono">Full specs</span>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center gap-1.5 text-burgundy-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-cherry-400" />
                            <span>Click to pop content</span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-cherry-500" />
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Founder Leadership & Company Story */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-burgundy-950 via-burgundy-900 to-burgundy-950 text-white relative overflow-hidden border-y border-cherry-900/40">
        {/* Subtle decorative background glows */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cherry-600/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Founder Photo & Badge (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-cherry-500/30 shadow-2xl bg-burgundy-900 group">
                <img
                  src="/founder.jpg"
                  alt="Founder & Managing Director - Prince Engineering & Events"
                  className="w-full aspect-[4/5] object-cover object-top group-hover:scale-103 transition-transform duration-700"
                />
                
                {/* Subtle protective gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Founder Info Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-cherry-400 animate-pulse" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                      Founder & Managing Director
                    </span>
                  </div>
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold text-white">
                    Priya Prince
                  </h3>
                  <p className="text-xs text-cream-200/90 mt-0.5">
                    Chief Event Architect & Managing Director
                  </p>
                </div>
              </div>

              {/* Decorative Experience Badge Floating */}
              <div className="hidden sm:flex absolute -top-3 -right-3 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-cherry-600 to-burgundy-800 text-white border border-cherry-300/40 shadow-xl items-center gap-2.5">
                <Award className="w-5 h-5 text-amber-300" />
                <div className="text-left">
                  <div className="text-xs font-bold leading-none">12+ Years</div>
                  <div className="text-[10px] text-cream-200">Industry Leadership</div>
                </div>
              </div>
            </div>

            {/* Right Column: Company Details & Vision (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-cherry-300 font-bold mb-3 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-cherry-400" />
                  <span>Leadership & Company Story</span>
                </div>
                <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  Uniting Royal Splendor with Certified Structural Rigor
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm md:text-base text-cream-100/90 leading-relaxed font-normal">
                <p>
                  Established in Tamil Nadu with flagship headquarters in Coimbatore, <strong className="text-white font-semibold">Prince Engineering & Events</strong> was founded with a singular conviction: extraordinary celebratory experiences must be engineered with unwavering structural integrity and flawless aesthetic mastery.
                </p>
                <p>
                  Unlike traditional event agencies that outsource hardware, Prince operates an end-to-end proprietary infrastructure—encompassing German TÜV-certified heavy box trussing, precision line-array concert acoustics, high-resolution curved 4K LED arrays, and bespoke artisanal set construction ateliers.
                </p>
              </div>

              {/* Key Company Credentials Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-1">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-xl sm:text-2xl font-bold text-white font-editorial">550+</div>
                  <div className="text-[11px] sm:text-xs text-cream-200/80 font-medium mt-0.5">Landmark Productions</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-xl sm:text-2xl font-bold text-amber-300 font-editorial">100%</div>
                  <div className="text-[11px] sm:text-xs text-cream-200/80 font-medium mt-0.5">Safety & Zero Failover</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm col-span-2 sm:col-span-1">
                  <div className="text-xl sm:text-2xl font-bold text-cherry-400 font-editorial">Pan-South</div>
                  <div className="text-[11px] sm:text-xs text-cream-200/80 font-medium mt-0.5">TN, Kerala & Karnataka</div>
                </div>
              </div>

              {/* Founder's Philosophy Quote */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border-l-4 border-cherry-500 backdrop-blur-sm relative">
                <Quote className="w-5 h-5 text-cherry-400 mb-2 opacity-80" />
                <p className="font-editorial italic text-sm sm:text-base text-cream-100 leading-relaxed">
                  "Every royal wedding and corporate summit is a milestone in someone's legacy. We treat every floral canopy and heavy stage truss with equal reverence, architectural precision, and devotion to perfection."
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-cream-200/80">
                  <span className="font-semibold text-white">— Priya Prince, Founder & Director</span>
                  <span className="text-[11px] text-cherry-300">Coimbatore Flagship HQ</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. Milestone Timeline (2014 – 2026) - Compact Horizontal Heritage Journey */}
      <section className="py-12 sm:py-16 bg-white/40 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-cream-300 text-burgundy-900 text-xs font-semibold mb-3 shadow-xs">
              <Clock className="w-3.5 h-3.5 text-cherry-600" />
              <span>Our 12-Year Heritage</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-burgundy-950 tracking-tight leading-tight mb-3">
              A Legacy Built One Landmark Event at a Time
            </h2>
            <p className="text-xs sm:text-sm text-burgundy-800/80 leading-relaxed font-bold max-w-2xl mx-auto">
              From our first outdoor concert truss in 2014 to over 550+ luxury wedding productions and high-level corporate arenas across Tamil Nadu and South India.
            </p>
          </div>

          {/* Compact Horizontal Progression - Low Height */}
          <div className="relative max-w-6xl mx-auto">
            {/* Horizontal progress connector line (visible lg+) */}
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-cherry-500 via-cherry-600 to-burgundy-900 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative z-10">
              {milestones.map((m, idx) => (
                <div 
                  key={idx}
                  className="bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-cream-300 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Node & Year Badge Row */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="w-9 h-9 rounded-full bg-burgundy-950 border-2 border-cherry-500 text-white flex items-center justify-center shadow-xs shrink-0">
                        <Award className="w-4 h-4 text-cherry-400" />
                      </div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-cherry-50 border border-cherry-200 text-cherry-700 font-display font-bold text-xs">
                        Year {m.year}
                      </span>
                    </div>

                    <h3 className="font-editorial text-base sm:text-lg font-bold text-burgundy-950 mb-1.5 leading-snug line-clamp-2">
                      {m.title}
                    </h3>

                    <p className="text-xs text-burgundy-800/80 leading-relaxed font-bold line-clamp-4">
                      {m.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-cream-200/80 flex items-center justify-between text-[11px] font-mono text-cherry-700 font-semibold">
                    <span>Milestone 0{idx + 1}</span>
                    <span className="text-burgundy-950/60 font-bold">Prince Rigor</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      </div>
    </div>
  );
}
