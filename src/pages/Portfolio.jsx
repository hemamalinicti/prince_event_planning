import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ChevronLeft, 
  X, 
  Maximize2,
  MapPin,
  Users,
  Calendar,
  CheckCircle2,
  Quote,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function Portfolio({ onOpenEnquiry }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const galleryProjects = [
    {
      id: 'imperial-white-arch',
      title: 'The Imperial White Arch Reception',
      category: 'weddings',
      categoryLabel: 'Royal Wedding',
      venue: 'The Leela Palace, Chennai',
      guests: '1,200 Guests',
      date: 'January 2026',
      image: '/hero-stage.jpg',
      highlight: '80ft Handcrafted Arch Mandap & Chandelier Staging',
      summary: 'An ethereal grand reception featuring multi-layered architectural arches, cascading garden English roses, bespoke luxury lounge seating, and zero-echo concert line-array sound.',
      scope: [
        '80ft custom hand-crafted illuminated white arches with floral pilasters',
        'Overhead heavy-duty truss grid holding Bohemian crystal chandeliers',
        'Concealed line-array sound hangs with zero visible cabling',
        'True 0-second twin silent generator power redundancy'
      ],
      testimonial: 'The stage was pure poetry. Not a single wire was visible, and the audio was crystal clear for all 1,200 guests across the royal ballroom.'
    },
    {
      id: 'royal-palace-mandap',
      title: 'Royal Palace Golden Mandap Celebration',
      category: 'weddings',
      categoryLabel: 'Royal Wedding',
      venue: 'ITC Grand Chola, Chennai',
      guests: '900 Guests',
      date: 'November 2025',
      image: '/royal-wedding-palace.jpg',
      highlight: '24K Hand-Carved Golden Pilasters & Floral Canopy',
      summary: 'A monumental royal wedding requiring intricate 24K gilded floral mandap pillars, 12,000 imported crimson Dutch roses, and calibrated warm 3000K palatial ambient washes.',
      scope: [
        'Hand-carved golden floral pillars with multi-tier floral dome canopy',
        'Digital sound delay alignment preventing palatial ballroom resonance',
        'Architectural warm 3000K ambient wash flattering bridal silks',
        'IP65 certified electrical distribution with immediate ATS failover'
      ],
      testimonial: 'Stepping into the hall took our breath away. Prince delivered an imperial ambiance worthy of royalty.'
    },
    {
      id: 'crimson-floral-stage',
      title: 'Crimson Floral Arch & Staging Architecture',
      category: 'weddings',
      categoryLabel: 'Royal Wedding',
      venue: 'Taj Connemara, Chennai',
      guests: '800 Guests',
      date: 'October 2025',
      image: '/pillar-event-planning.jpg',
      highlight: '100ft Walkthrough Rose Tunnel & Chandeliers',
      summary: 'A palatial floral gala featuring an illuminated 100ft walkthrough tunnel of imported English roses, crystal chandeliers, and acoustic baffle tuning.',
      scope: [
        '100ft bespoke illuminated floral walkthrough entrance tunnel',
        'Heavy-duty aluminum trussing holding 16 crystal chandeliers',
        'Acoustically treated sound baffling for 12-piece live Carnatic fusion orchestra',
        'Dual ATS power failover guaranteeing zero audio interruption'
      ],
      testimonial: 'Walking through that floral tunnel felt like stepping into an ancient Indian palace with absolute staging perfection.'
    },
    {
      id: 'sangeet-night-lighting',
      title: 'The Royal Glasshouse Starlight Sangeet',
      category: 'weddings',
      categoryLabel: 'Sangeet Night',
      venue: 'Radisson Blu Resort Temple Bay, Mamallapuram',
      guests: '1,100 Guests',
      date: 'March 2025',
      image: '/sangeet-celebrations.jpg',
      highlight: 'Clear Span Glass Truss & Kinetic Lighting',
      summary: 'A bespoke 40m clear-span glass pavilion erected on coastal terrain featuring 32 automated moving heads, cold-pyro visual effects, and incandescent ceiling canopies.',
      scope: [
        'Engineered wind-rated clear-span modular glass structure',
        'Overhead kinetic chandelier motion automation',
        'Precision acoustic time-aligned digital sound arrays',
        'Non-pyrotechnic indoor cold spark machines and low-lying hazers'
      ],
      testimonial: 'It felt like dining beneath a crystalline palace under the stars. The structural rigging was as flawless as the aesthetics.'
    },
    {
      id: 'coastal-sunset-setup',
      title: 'Covelong Coastal Sunset Beachfront Gala',
      category: 'destination',
      categoryLabel: 'Destination Event',
      venue: 'Taj Fisherman\'s Cove, Covelong Beach',
      guests: '750 Guests',
      date: 'November 2025',
      image: '/destination-coastal.png',
      highlight: '65 km/h Wind-Anchored Staging & Dune Cantilever',
      summary: 'A beachfront sunset celebration on open coastal sand requiring certified German aluminum box trusses ballasted to withstand 65 km/h Bay of Bengal coastal gusts.',
      scope: [
        'Cantilevered waterproof dome roof with 12-ton ballast anchor blocks',
        'Directional line-array acoustics calibrated against surf and wind noise',
        'Intelligent moving beam light show synchronized to celebrity playback singers',
        'Weatherproof IP65 electrical distribution with immediate rain covers'
      ],
      testimonial: 'When coastal winds picked up in the evening, other vendors panicked—but Prince’s stage was as solid as a fortress.'
    },
    {
      id: 'beachfront-reception-tent',
      title: 'Ooty Heritage Palace Estate Gala',
      category: 'destination',
      categoryLabel: 'Destination Event',
      venue: 'Fernhills Royal Palace, Ooty',
      guests: '450 Guests',
      date: 'June 2025',
      image: '/about-hero.jpg',
      highlight: 'Hillside Micro-Climate Heating & Zero-Impact Rigging',
      summary: 'An exclusive hillside gala under the stars in the Nilgiris hills. Required concealed thermal heating ducts, warm canopy lighting, and zero-impact heritage lawn rigging.',
      scope: [
        'Zero-penetration ground ballast trussing protecting heritage palace lawns',
        'Integrated warm radiant heating disguised within floral pillars',
        'Acoustically warm jazz and acoustic violin sound mapping across open gardens',
        'Low-noise whisper-quiet diesel generator positioned 60m away in acoustic shelter'
      ],
      testimonial: 'Hosting an outdoor reception in Ooty’s chilly hills is daunting, but Prince kept our guests warm and the palace grounds pristine.'
    },
    {
      id: 'corporate-arena-summit',
      title: 'Apex Global Leadership Tech Arena',
      category: 'corporate',
      categoryLabel: 'Corporate Gala',
      venue: 'Codissia Trade Center, Coimbatore',
      guests: '3,500 Delegates',
      date: 'December 2025',
      image: '/corporate-conventions.jpg',
      highlight: 'Tiered Keynote Stage & Dual Translation Matrix',
      summary: 'A high-stakes global technology summit featuring international keynote dignitaries, seamless tiered stage risers, and multi-tier keynote sound mapping.',
      scope: [
        'Modular multi-tier load-bearing stage decking for 50 keynote panelists',
        'Dante-networked wireless audio matrix for international panel speakers',
        'High-truss lighting matrix with computerized automated focus sweeps',
        'Synchronized low-latency live broadcast relay across twin overflow halls'
      ],
      testimonial: 'The technical precision of Prince was world-class. In front of our global board and 3,500 delegates, the execution was flawless.'
    },
    {
      id: 'curved-led-keynote',
      title: 'Flagship EV Luxury Launch Arena',
      category: 'corporate',
      categoryLabel: 'Corporate Gala',
      venue: 'Chennai Trade Center, Nandambakkam',
      guests: '1,800 Attendees',
      date: 'May 2025',
      image: '/pillar-engineering.png',
      highlight: '48m Curved 4K LED Backdrop & Hydraulic Turntable',
      summary: 'Precision-engineered rotating hydraulic vehicle turntable, 48-meter wide ultra-fine curved LED screens, and silent automated silk drop reveal mechanism.',
      scope: [
        '48m x 6m ultra-high-definition P2.6 curved video wall backdrop',
        'Heavy 5-ton motorized revolving hydraulic stage platform',
        'Full DMX-synchronized laser mapping array for vehicle silhouette reveal',
        'Triple-redundant power delivery with automatic microsecond isolation'
      ],
      testimonial: 'The turntable synchronization and lighting reveal for our flagship EV launch was immaculate. Prince is in a class of their own.'
    },
    {
      id: 'stage-lighting-laser-rig',
      title: 'Mega Music Festival Main Stage Rig',
      category: 'staging',
      categoryLabel: 'Technical Staging',
      venue: 'Island Grounds Open Arena, Chennai',
      guests: '7,500 Attendees',
      date: 'August 2025',
      image: '/hero-engineering.png',
      highlight: 'Certified Heavy Box Truss & DMX Lasers',
      summary: 'Monumental outdoor steel and aluminum truss structure engineered for heavy rain and 60km/h coastal wind gusts with synchronized DMX laser systems.',
      scope: [
        'Heavy-duty German F44 square aluminum box truss arena stage (30m wide)',
        'Cardioid line-array subwoofer array delivering punchy, zero-echo bass',
        'Computerized GrandMA3 lighting control with automated moving beam matrix',
        'CPCB decibel compliance mapping to prevent neighborhood noise complaints'
      ],
      testimonial: 'Prince is the only staging company in the region with the structural engineering calculations to pull off an arena concert safely.'
    },
    {
      id: 'auditorium-arena-production',
      title: 'South India Cultural & Music Festival Arena',
      category: 'staging',
      categoryLabel: 'Technical Staging',
      venue: 'VOC Ground Arena, Coimbatore',
      guests: '8,000+ Attendees',
      date: 'August 2025',
      image: '/hero-about.jpg',
      highlight: 'Heavy F44 Box Truss Arena Grid',
      summary: 'Massive open-air arena music festival requiring German F44 heavy box trussing, line-array hangs covering 8,000 attendees, and synchronized cold pyro visual effects.',
      scope: [
        '30m x 20m arena truss grid supporting 14 tons of acoustic and lighting gear',
        'High-tensile steel guy-wire anchoring into certified ground ballast blocks',
        '32-channel digital wireless RF coordination with zero cross-frequency drop',
        'Comprehensive on-ground electrical grounding and surge suppression'
      ],
      testimonial: '14 tons of overhead rigging suspended with millimeter perfection. Their engineering discipline sets them apart.'
    },
    {
      id: 'atmospheric-night-gala',
      title: 'Grand Night Gala & Concert Acoustic Production',
      category: 'staging',
      categoryLabel: 'Technical Staging',
      venue: 'Le Royal Meridien, Chennai',
      guests: '2,200 Attendees',
      date: 'September 2025',
      image: '/hero-portfolio.jpg',
      highlight: 'Zero-Echo Line Array Tuning & Atmospheric Lighting',
      summary: 'Turnkey concert sound design and atmospheric lighting washes across grand indoor ballroom spaces with high acoustic reverberation.',
      scope: [
        'Time-aligned line-array loudspeaker clusters eliminating slapback echo',
        'Warm palatial 3000K architectural washes flattering attendee attire',
        'Computerized GrandMA console choreography for celebrity orchestra',
        'Synchronized silent twin diesel gensets ensuring zero voltage dips'
      ],
      testimonial: 'The audio balance in a venue notoriously prone to reverberation was stunningly clear and musical.'
    },
    {
      id: 'luxury-floral-banquet',
      title: 'Golden Jubilee Heritage Banquet Soiree',
      category: 'weddings',
      categoryLabel: 'Royal Wedding',
      venue: 'Feathers Luxury Hotel, Chennai',
      guests: '500 VIP Guests',
      date: 'February 2025',
      image: '/hero-event-planning.jpg',
      highlight: 'Burgundy & Gold Luxury Dining Scenography',
      summary: 'An intimate royal evening draped in rich cherry and cream silks, crystal candelabras, acoustic chamber sound, and fine-dining silver service.',
      scope: [
        'Architectural thematic ambient guest lounges with bespoke velvet upholstery',
        'Overhead crystal candelabras with warm dimmable filament illumination',
        'Acoustic chamber sound mapping for live violin and harp ensemble',
        'Dedicated personal VIP guest hospitality protocol'
      ],
      testimonial: 'The attention to detail and grace with which Prince executed our anniversary banquet was exceptional.'
    }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? galleryProjects 
    : galleryProjects.filter(item => item.category === selectedFilter);

  // Keyboard navigation for details modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedProjectIndex === null) return;
      if (e.key === 'Escape') setSelectedProjectIndex(null);
      if (e.key === 'ArrowRight') setSelectedProjectIndex((prev) => (prev + 1) % filteredProjects.length);
      if (e.key === 'ArrowLeft') setSelectedProjectIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProjectIndex, filteredProjects.length]);

  const activeProject = selectedProjectIndex !== null ? filteredProjects[selectedProjectIndex] : null;

  return (
    <div className="bg-cream-50 text-burgundy-950 font-sans w-full min-h-screen">
      
      {/* 1. Portfolio Header */}
      <section className="relative isolate w-full py-12 sm:py-16 flex flex-col justify-center items-center overflow-hidden bg-burgundy-950 text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src="/hero-portfolio.jpg"
            alt="Portfolio background"
            className="w-full h-full object-cover object-center filter brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-burgundy-950/80 via-burgundy-950/60 to-burgundy-950" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs text-cream-100 mb-4 shadow-lg">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-white font-semibold">Portfolio Gallery</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 drop-shadow-md">
            Portfolio <span className="italic font-display text-amber-300">Gallery</span>
          </h1>

          {/* Quick Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { key: 'all', label: 'All Landmark Productions' },
              { key: 'weddings', label: 'Royal Weddings' },
              { key: 'corporate', label: 'Corporate Galas' },
              { key: 'staging', label: 'Technical Staging' },
              { key: 'destination', label: 'Destination Events' }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => {
                  setSelectedFilter(tab.key);
                  setSelectedProjectIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  selectedFilter === tab.key
                    ? 'bg-cherry-600 text-white shadow-md scale-105'
                    : 'bg-white/10 text-cream-100 hover:bg-white/20 border border-white/15'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Pure Images Gallery Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProjects.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedProjectIndex(idx)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-burgundy-950 shadow-warm-sm hover:shadow-warm-xl border border-cream-200 hover:border-cherry-400 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Subtle Hover Overlay with Title Preview & Expand Indicator */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex flex-col justify-between p-3.5 sm:p-4">
                  <div className="self-end w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 text-burgundy-950 opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100 flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-4 h-4 text-cherry-700" />
                  </div>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">
                      {item.categoryLabel}
                    </span>
                    <h3 className="font-editorial text-xs sm:text-sm font-bold line-clamp-1 drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Rich Project Details Modal (Shown when gallery item is clicked) */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 lg:p-8 animate-fadeIn overflow-y-auto"
          onClick={() => setSelectedProjectIndex(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-cream-300 max-h-[92vh] flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-7 bg-burgundy-950 text-white relative flex items-start justify-between border-b border-cherry-900/40">
              <div className="pr-10">
                <div className="flex flex-wrap items-center gap-2 mb-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-cherry-600 text-white font-bold uppercase tracking-wider text-[11px] shadow-sm">
                    {activeProject.categoryLabel}
                  </span>
                  <span className="inline-flex items-center gap-1 text-cream-200">
                    <Users className="w-3.5 h-3.5 text-amber-300" />
                    <span>{activeProject.guests}</span>
                  </span>
                  <span className="text-cream-400">•</span>
                  <span className="inline-flex items-center gap-1 text-cream-200">
                    <Calendar className="w-3.5 h-3.5 text-cream-300" />
                    <span>{activeProject.date}</span>
                  </span>
                </div>

                <h2 className="font-editorial text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug">
                  {activeProject.title}
                </h2>

                <div className="flex items-center gap-1.5 text-xs text-cream-200/90 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-cherry-400 shrink-0" />
                  <span>{activeProject.venue}</span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedProjectIndex(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20 shrink-0"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-6 flex-1">
              
              {/* Full Image Showcase */}
              <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-burgundy-950 relative shadow-md">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Floating Highlight Banner */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>{activeProject.highlight}</span>
                </div>
              </div>

              {/* Production Narrative Summary */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-cherry-700 mb-2">
                  Production Overview
                </h4>
                <p className="text-sm sm:text-base text-burgundy-950 font-normal leading-relaxed">
                  {activeProject.summary}
                </p>
              </div>

              {/* Engineering & Styling Scope Inclusions */}
              <div className="bg-cream-50 rounded-2xl p-5 sm:p-6 border border-cream-200 space-y-3">
                <h4 className="font-editorial text-lg sm:text-xl font-bold text-burgundy-950 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cherry-600" />
                  <span>Key Engineering & Styling Inclusions</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {activeProject.scope.map((item, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs text-burgundy-900 leading-relaxed font-medium">
                      <CheckCircle2 className="w-4 h-4 text-cherry-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Review Quote */}
              <div className="bg-cherry-50/70 rounded-2xl p-5 border border-cherry-200/80">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cherry-700 mb-2">
                  <Quote className="w-3.5 h-3.5 text-cherry-600" />
                  <span>Client & Director Verdict</span>
                </div>
                <p className="font-editorial text-base sm:text-lg italic text-burgundy-950 leading-relaxed">
                  "{activeProject.testimonial}"
                </p>
              </div>

            </div>

            {/* Modal Footer Controls */}
            <div className="p-4 sm:p-6 bg-cream-100 border-t border-cream-200 flex flex-wrap items-center justify-between gap-3">
              {/* Previous / Next Browsing */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedProjectIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1))}
                  className="px-3.5 py-2 rounded-xl bg-white hover:bg-cream-200 text-burgundy-900 text-xs font-semibold border border-cream-300 transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
                <button
                  onClick={() => setSelectedProjectIndex((prev) => (prev + 1) % filteredProjects.length)}
                  className="px-3.5 py-2 rounded-xl bg-white hover:bg-cream-200 text-burgundy-900 text-xs font-semibold border border-cream-300 transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Inquiry Action Button */}
              <button
                onClick={() => {
                  const title = activeProject.title;
                  setSelectedProjectIndex(null);
                  if (onOpenEnquiry) onOpenEnquiry({ service: `Inquiry for ${title}` });
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-cherry-600 to-burgundy-800 hover:from-cherry-500 hover:to-burgundy-700 text-white font-bold text-xs sm:text-sm shadow-warm-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Request Similar Production</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
