import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers,
  Volume2,
  SunMedium,
  Tv,
  ShieldCheck, 
  ChevronRight, 
  ArrowRight,
  PhoneCall,
  Gauge,
  Sparkles,
  CheckCircle2,
  X
} from 'lucide-react';

export default function Engineering({ onOpenEnquiry }) {
  const [expandedService, setExpandedService] = useState(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setExpandedService(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const engineeringServices = [
    {
      id: 'trussing',
      title: 'German Aluminum Box Trussing & Roofs',
      subtitle: 'TÜV-Certified F34 & F44 Structural Rigging',
      icon: Layers,
      badge: '65 km/h Wind Shear Rated',
      pills: ['DIN EN 13814', '3,500 kg Load', 'TÜV F34/F44'],
      shortDesc: 'Mathematical dynamic load calculation for complex amphitheater roofs and heavy weather resistance.',
      desc: 'Our high-tensile European box truss systems are mathematically calculated for dynamic weight loads, heavy weather resistance, and complex cantilevered amphitheater roofs.',
      specs: [
        { label: 'Truss Profile', val: 'German TÜV-Certified F34 (290mm) & F44 (400mm) Square Truss' },
        { label: 'Load Capacity', val: 'Up to 3,500 kg distributed load across 24m unsupported spans' },
        { label: 'Ground Support', val: 'Heavy-duty steel baseplates with 4-point outrigger ballasts' },
        { label: 'Hoisting Units', val: 'CM Lodestar 1-ton electric chain hoists with remote load monitoring' },
        { label: 'Compliance', val: 'DIN EN 13814 (Temporary Structures and Staging Standards)' }
      ]
    },
    {
      id: 'acoustics',
      title: 'Concert Line-Array Acoustics & Audio Matrix',
      subtitle: 'Acoustic Precision for 100 to 10,000+ Audiences',
      icon: Volume2,
      badge: 'Zero-Latency DSP Tuning',
      pills: ['96kHz 64-bit DSP', 'Dante Audio-over-IP', 'CPCB Noise Norms'],
      shortDesc: 'Predictive room-simulation modeling delivering crystal-clear vocal intelligibility without harsh echo.',
      desc: 'We engineer balanced acoustic soundscapes using predictive room-simulation modeling. Every speech, live orchestra, and DJ set delivers crystal-clear vocal intelligibility without harsh echo.',
      specs: [
        { label: 'Loudspeaker Hangs', val: 'Active dual-8" and dual-10" line arrays with cardioid subwoofers' },
        { label: 'Signal Processing', val: '96kHz 64-bit digital DSP with Dante audio-over-IP networking' },
        { label: 'Wireless Matrix', val: 'Shure Axient Digital wireless mics with RF frequency coordination' },
        { label: 'Echo Reduction', val: 'Directional acoustic baffling & venue boundary time-delay alignment' },
        { label: 'Noise Norms', val: 'Strict adherence to CPCB environmental acoustic decibel parameters' }
      ]
    },
    {
      id: 'lighting',
      title: 'Intelligent DMX Lighting & Laser Architecture',
      subtitle: 'Atmospheric Visual Scenography & Synchronized FX',
      icon: SunMedium,
      badge: 'DMX-512 Automation Matrix',
      pills: ['380W Moving Heads', 'CRI 95+ Video White', 'Safe Cold Sparks'],
      shortDesc: 'Warm palatial ambient washes flattering bridal silks to high-octane computerized beam choreography.',
      desc: 'From warm 3000K palatial ambient washes that flatter bridal silks to high-octane computerized beam choreography and safe cold-spark indoor pyrotechnics.',
      specs: [
        { label: 'Moving Fixtures', val: '380W Beam/Spot/Wash hybrid moving heads with motorized zoom' },
        { label: 'Color Rendering', val: 'CRI 95+ warm white profile fixtures for flawless 4K video recording' },
        { label: 'Control Network', val: 'GrandMA2/MA3 command consoles with Art-Net Ethernet distribution' },
        { label: 'Visual FX', val: 'Cold sparkular machines, cryogenic CO2 jets, and low-lying hazers' },
        { label: 'Safety Standards', val: 'Zero fire hazard with non-pyrotechnic indoor-certified consumables' }
      ]
    },
    {
      id: 'led-power',
      title: '4K Weatherproof LED Walls & Power Redundancy',
      subtitle: 'High-Refresh Visual Backdrops & 0-Second Failover ATS',
      icon: Tv,
      badge: '3,840Hz Refresh • 0-Sec ATS',
      pills: ['P2.6 / P3.9 IP65', 'Curvature ±15°', 'Twin Cummins Gensets'],
      shortDesc: 'Seamless ultra-fine pixel pitch LED panels with synchronized silent diesel generators for 100% uptime.',
      desc: 'Seamless ultra-fine pixel pitch LED panels paired with synchronized twin silent diesel generators and automatic transfer switches for 100% video and electrical uptime.',
      specs: [
        { label: 'Pixel Pitch', val: 'P2.6 indoor high-definition & P3.9 outdoor high-brightness panels' },
        { label: 'Curvature Rigging', val: 'Concave and convex curving hardware up to +/- 15 degrees' },
        { label: 'Video Processors', val: 'Novastar 4K video controllers with multi-layer pip and failover redundancy' },
        { label: 'Power Redundancy', val: 'Dual synchronized 125 kVA – 250 kVA Cummins silent diesel gensets' },
        { label: 'Switching System', val: 'Instantaneous microsecond automatic transfer switch (ATS)' }
      ]
    }
  ];

  return (
    <div className="bg-cream-50 text-burgundy-950 font-sans w-full">
      
      {/* 1. Engineering Hero Banner */}
      <section className="relative isolate w-full py-16 sm:py-20 lg:py-24 flex flex-col justify-center items-center overflow-hidden bg-burgundy-950 text-white">
        
        {/* Photographic Background with Gentle Zoom & Balanced Contrast */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src="/hero-engineering.png"
            alt="Concert stage lighting, trussing, and audio engineering arena"
            className="w-full h-full object-cover object-center animate-hero-zoom filter brightness-[0.85] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/70 via-transparent to-black/50" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center relative z-10 w-full">
          <div className="max-w-4xl mx-auto">
            
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs text-cream-100 mb-5 shadow-lg">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-white font-semibold">Engineering & Rigging</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-white mb-5 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] leading-[1.12]">
              Certified Rigging & <br className="hidden sm:inline" />
              <span className="italic font-display text-amber-300 underline decoration-cherry-400 decoration-wavy underline-offset-8">
                Technical Staging
              </span>
            </h1>

            <p className="font-sans text-sm sm:text-base md:text-lg text-cream-100 max-w-2xl mx-auto leading-relaxed font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] mb-8">
              Where the physics of heavy structural engineering meets celebratory artistry. Certified German trussing, concert line-array sound, and zero-failover power redundancy.
            </p>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/15">
                <div className="font-editorial text-2xl sm:text-3xl font-bold text-amber-300">65 km/h</div>
                <div className="text-[11px] sm:text-xs text-cream-200 uppercase tracking-wider font-semibold">Wind Resistance</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/15">
                <div className="font-editorial text-2xl sm:text-3xl font-bold text-amber-300">0-Second</div>
                <div className="text-[11px] sm:text-xs text-cream-200 uppercase tracking-wider font-semibold">ATS Power Failover</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/15">
                <div className="font-editorial text-2xl sm:text-3xl font-bold text-amber-300">DIN EN 13814</div>
                <div className="text-[11px] sm:text-xs text-cream-200 uppercase tracking-wider font-semibold">Staging Standard</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/15">
                <div className="font-editorial text-2xl sm:text-3xl font-bold text-amber-300">12+ Years</div>
                <div className="text-[11px] sm:text-xs text-cream-200 uppercase tracking-wider font-semibold">Zero Failure Record</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. The 4 Core Engineering Services (Compact Teaser Cards) */}
      <section className="py-20 lg:py-28 bg-white border-b border-cream-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cherry-50 border border-cherry-200 text-cherry-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <Gauge className="w-3.5 h-3.5 text-cherry-600" />
              Technical Capabilities
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy-950 tracking-tight leading-tight mb-4">
              Our 4 Engineering Services
            </h2>
            <p className="text-sm sm:text-base text-burgundy-800/80 leading-relaxed">
              Every system in our inventory is owned, maintained, and operated in-house. Click any card to inspect the full certified blueprint.
            </p>
          </div>

          {/* 4 Compact Teaser Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {engineeringServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id}
                  onClick={() => setExpandedService(service)}
                  className="bg-gradient-to-b from-[#8B1032] via-[#6D0922] to-[#4A0516] text-white rounded-3xl p-6 border-2 border-amber-400/40 hover:border-amber-300 shadow-warm-lg hover:shadow-[0_20px_45px_rgba(139,16,50,0.5)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer group relative overflow-hidden h-full"
                >
                  {/* Top structural golden accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500" />

                  {/* Precision architectural golden corner brackets */}
                  <span className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-amber-400/80 rounded-tl-3xl transition-all duration-300 group-hover:w-5 group-hover:h-5 group-hover:border-amber-300" />
                  <span className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-amber-400/80 rounded-tr-3xl transition-all duration-300 group-hover:w-5 group-hover:h-5 group-hover:border-amber-300" />
                  <span className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-amber-400/80 rounded-bl-3xl transition-all duration-300 group-hover:w-5 group-hover:h-5 group-hover:border-amber-300" />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-amber-400/80 rounded-br-3xl transition-all duration-300 group-hover:w-5 group-hover:h-5 group-hover:border-amber-300" />

                  <div className="flex flex-col">
                    {/* Header badge & index */}
                    <div className="h-7 flex items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 text-amber-300 text-[11px] font-bold border border-amber-400/50 shadow-xs backdrop-blur-xs">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span className="text-amber-200">{service.badge}</span>
                      </span>
                      <span className="font-mono text-[11px] font-bold text-amber-300 bg-black/60 px-2.5 py-0.5 rounded-full border border-amber-400/40 shadow-xs">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-black/40 text-amber-300 border border-amber-400/40 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-burgundy-950 transition-all shadow-md">
                      <Icon className="w-6 h-6 transition-colors" />
                    </div>

                    {/* Title with locked height for optical alignment - Crisp Pure White */}
                    <div className="h-14 sm:h-16 flex items-start mb-1.5">
                      <h3 className="font-editorial text-xl font-bold text-white leading-snug group-hover:text-amber-200 transition-colors line-clamp-2 drop-shadow-sm">
                        {service.title}
                      </h3>
                    </div>

                    {/* Subtitle with locked height - Lustrous High-Contrast Amber */}
                    <div className="h-10 sm:h-11 flex items-start mb-3">
                      <div className="text-xs font-mono text-amber-300 font-bold line-clamp-2 leading-relaxed drop-shadow-sm">
                        {service.subtitle}
                      </div>
                    </div>

                    {/* Description with locked height - High-Legibility Light Cream */}
                    <div className="h-12 flex items-start mb-4">
                      <p className="text-xs text-cream-100 font-medium leading-relaxed line-clamp-2">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Teaser Pills with locked min-height - Bright Amber & Dark Pill */}
                    <div className="min-h-[58px] flex flex-wrap content-start gap-1.5 mb-5">
                      {service.pills.map((pill, pIdx) => (
                        <span key={pIdx} className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-black/50 text-amber-200 border border-amber-400/40 shadow-xs">
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expand Prompt Trigger pinned to bottom */}
                  <div className="mt-auto pt-3.5 border-t border-amber-400/30 flex items-center justify-between text-xs font-bold text-amber-300 group-hover:text-white transition-colors">
                    <span className="flex items-center gap-1.5 text-amber-300 group-hover:text-white">
                      <span>Expand Details</span>
                      <span className="text-sm">🦋</span>
                    </span>
                    <span className="w-7 h-7 rounded-full bg-amber-400 text-burgundy-950 group-hover:bg-white group-hover:text-cherry-900 transition-all flex items-center justify-center shadow-md font-bold">
                      <ArrowRight className="w-3.5 h-3.5 text-burgundy-950 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2-Piece Butterfly Split & Fly Expansion Modal */}
      {expandedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-burgundy-950/80 backdrop-blur-md overflow-y-auto"
          onClick={() => setExpandedService(null)}
        >
          <div 
            className="relative w-full max-w-5xl flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl border border-cherry-500/40 animate-butterfly-glow my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setExpandedService(null)}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 hover:bg-cherry-600 text-white border border-white/20 transition-all shadow-lg flex items-center gap-1.5 text-xs font-semibold"
              title="Close Blueprint (Esc)"
            >
              <X className="w-4 h-4" />
              <span className="hidden sm:inline">Close</span>
            </button>

            {/* PIECE 1: Left Wing - Overview & Rigging Narrative */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-burgundy-950 via-burgundy-900 to-black text-white flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-cherry-500/30 animate-butterfly-left">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-300/30 backdrop-blur-sm">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    {expandedService.badge}
                  </span>
                  <span className="text-xs font-mono text-cream-200">
                    Piece 01 • Rigging Architecture
                  </span>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cherry-600/30 border border-cherry-400/30 flex items-center justify-center text-amber-300 shrink-0">
                    {React.createElement(expandedService.icon, { className: 'w-6 h-6' })}
                  </div>
                  <div>
                    <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-white leading-tight">
                      {expandedService.title}
                    </h2>
                    <div className="text-xs sm:text-sm font-mono text-amber-300 font-semibold mt-1">
                      {expandedService.subtitle}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-cream-100/90 leading-relaxed mb-6 font-bold">
                  {expandedService.desc}
                </p>

                {/* Core Disciplines Key Highlights */}
                <div className="space-y-2.5 mb-8">
                  {expandedService.pills.map((pill, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-cream-200 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{pill} Verified & Deployed In-House</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => {
                    const title = expandedService.title;
                    setExpandedService(null);
                    onOpenEnquiry && onOpenEnquiry({ service: title });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-cherry-600 hover:bg-cherry-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg hover:shadow-cherry-600/50 border border-cherry-400/30"
                >
                  <span>Request Full Technical Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-1.5 text-xs text-amber-300/90 font-mono">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Licensed Sign-off</span>
                </div>
              </div>
            </div>

            {/* PIECE 2: Right Wing - Certified Specifications & Engineering Calculations */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 bg-white text-burgundy-950 flex flex-col justify-between animate-butterfly-right">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-cream-200">
                  <span className="font-editorial text-lg sm:text-xl font-bold text-burgundy-950">
                    Certified Technical Specifications
                  </span>
                  <span className="font-mono text-xs text-cherry-600 font-bold bg-cherry-50 px-2.5 py-1 rounded-full border border-cherry-100">
                    Piece 02 • Data Sheet
                  </span>
                </div>

                {/* Specs List */}
                <div className="space-y-3.5 mb-6">
                  {expandedService.specs.map((item, iIdx) => (
                    <div 
                      key={iIdx} 
                      className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 py-2 border-b border-cream-100 text-xs sm:text-sm"
                    >
                      <span className="font-semibold text-burgundy-950 sm:w-2/5">
                        {item.label}
                      </span>
                      <span className="text-burgundy-800/90 sm:w-3/5 leading-relaxed font-bold">
                        {item.val}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Safety Guarantee Box */}
                <div className="p-4 rounded-2xl bg-cream-50 border border-cream-200 text-xs space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-burgundy-950">
                    <CheckCircle2 className="w-4 h-4 text-cherry-600" />
                    <span>Structural Engineering Guarantee</span>
                  </div>
                  <p className="text-burgundy-800/80 leading-relaxed text-[11px]">
                    Every rig, acoustic array, and generator distribution board is mathematically simulated and signed off by licensed structural and electrical engineers in Coimbatore prior to load suspension.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-cream-200 flex items-center justify-between text-xs text-burgundy-900/80">
                <span className="font-mono text-[11px]">Coimbatore HQ • 12+ Yrs Record</span>
                <button
                  onClick={() => setExpandedService(null)}
                  className="text-cherry-700 hover:text-cherry-900 font-bold underline decoration-cherry-300 underline-offset-4 text-xs"
                >
                  Return to All Services
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 3. Consultation CTA */}
      <section className="py-16 sm:py-20 bg-cream-100 border-t border-cream-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-cream-300 shadow-xl max-w-3xl mx-auto">
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-burgundy-950 mb-3">
              Need a Technical Site Inspection?
            </h2>
            <p className="text-sm sm:text-base text-burgundy-800/80 leading-relaxed mb-6 max-w-xl mx-auto">
              Our Senior Rigging Engineers are available for on-ground feasibility assessments, 3D CAD staging drawings, and power requirement evaluations across South India.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry({ service: 'Technical Site Inspection' })}
                className="px-6 py-3 rounded-full bg-cherry-600 hover:bg-cherry-700 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                <span>Book Engineering Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-full bg-cream-100 hover:bg-cream-200 text-burgundy-950 font-semibold text-sm transition-all border border-cream-300 inline-flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-cherry-600" />
                <span>Contact Coimbatore HQ</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
