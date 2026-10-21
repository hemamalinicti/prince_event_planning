import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  MapPin, 
  Users, 
  ShieldCheck, 
  ChevronRight, 
  X, 
  ArrowRight,
  ExternalLink,
  Layers,
  Volume2,
  Calendar,
  CheckCircle2
} from 'lucide-react';

export default function Portfolio({ onOpenEnquiry }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const projects = [
    {
      id: 'chettinad-wedding',
      title: 'Chettinad Palace Heritage Wedding',
      category: 'weddings',
      categoryLabel: 'Royal Wedding',
      venue: 'The Leela Palace, Chennai',
      guests: '1,200 Guests',
      date: 'January 2026',
      image: '/hero-stage.jpg',
      highlight: '80ft Handcrafted Mandap',
      summary: 'A monumental Chettinad royal wedding requiring 80ft wide hand-carved pillars, 10,000 imported crimson Dutch roses, and concert line-array audio hidden within floral pilasters.',
      scope: [
        'Custom 80ft hand-carved mandap with multi-layered floral canopy',
        'Concealed line-array sound hangs with zero visible cabling',
        'Architectural warm 3000K palatial ambient washes',
        'True 0-second twin silent generator power redundancy'
      ],
      testimonial: '"Prince Engineering delivered a wedding mandap that took our breath away. Not a single wire was visible, and the audio was crystal clear for all 1,200 guests."'
    },
    {
      id: 'apex-summit',
      title: 'Apex Global Leadership Tech Arena',
      category: 'corporate',
      categoryLabel: 'Corporate Gala',
      venue: 'Codissia Trade Center, Coimbatore',
      guests: '3,500 Delegates',
      date: 'December 2025',
      image: '/pillar-engineering.png',
      highlight: '48m Curved 4K LED Backdrop',
      summary: 'A high-stakes global technology summit featuring international keynote dignitaries, 48-meter wide ultra-fine curved LED screens, and multi-tier keynote sound mapping.',
      scope: [
        '48m x 6m ultra-high-definition P2.6 curved video wall backdrop',
        'Dante-networked wireless audio matrix for international panel speakers',
        'High-truss lighting matrix with computerized automated focus sweeps',
        'Synchronized indoor cold-spark visual effects for brand reveal'
      ],
      testimonial: '"The technical precision of Prince was world-class. In front of our global board and 3,500 delegates, the execution was flawless."'
    },
    {
      id: 'coastal-destination',
      title: 'Covelong Coastal Sunset Sangeet',
      category: 'destination',
      categoryLabel: 'Destination',
      venue: 'Taj Fisherman\'s Cove, Covelong Beach',
      guests: '750 Guests',
      date: 'November 2025',
      image: '/about-hero.jpg',
      highlight: '65 km/h Wind-Anchored Staging',
      summary: 'A beachfront sunset sangeet celebration on open coastal sand requiring certified German aluminum box trusses ballasted to withstand 65 km/h Bay of Bengal coastal gusts.',
      scope: [
        'Cantilevered waterproof dome roof with 12-ton ballast anchor blocks',
        'Directional line-array acoustics calibrated against surf and wind noise',
        'Intelligent moving beam light show synchronized to celebrity playback singers',
        'Weatherproof IP65 electrical distribution with immediate rain covers'
      ],
      testimonial: '"When coastal winds picked up in the evening, other vendors panicked—but Prince’s stage was as solid as a fortress. Our party went on until 3 AM without a hitch."'
    },
    {
      id: 'royal-floral-soiree',
      title: 'Maharaja Palace Floral Reception',
      category: 'weddings',
      categoryLabel: 'Royal Wedding',
      venue: 'ITC Grand Chola, Chennai',
      guests: '900 Guests',
      date: 'October 2025',
      image: '/pillar-event-planning.jpg',
      highlight: 'English Rose Tunnel & Golden Arches',
      summary: 'A palatial floral gala featuring a 100ft walkthrough tunnel of imported English roses, crystal chandeliers, and acoustic baffle tuning to eliminate ballroom reverberation.',
      scope: [
        '100ft bespoke illuminated floral walkthrough entrance tunnel',
        'Overhead heavy-duty truss grid holding 24 Bohemian crystal chandeliers',
        'Acoustically treated sound baffling for 12-piece live carnatic fusion orchestra',
        'Dual ATS power failover guaranteeing zero audio interruption'
      ],
      testimonial: '"Walking through that floral tunnel felt like stepping into an ancient Indian palace. The elegance was matched by absolute staging perfection."'
    },
    {
      id: 'arena-concert-staging',
      title: 'South India Cultural & Music Festival',
      category: 'staging',
      categoryLabel: 'Technical Staging',
      venue: 'VOC Ground Arena, Coimbatore',
      guests: '8,000+ Attendees',
      date: 'August 2025',
      image: '/hero-stage.jpg',
      highlight: 'Heavy F44 Box Truss Arena Grid',
      summary: 'Massive open-air arena music festival requiring German F44 heavy box trussing, line-array hangs covering 8,000 attendees, and synchronized cold pyro visual effects.',
      scope: [
        'Heavy-duty German F44 square aluminum box truss arena stage (30m wide)',
        'Cardioid line-array subwoofer array delivering punchy, zero-echo bass',
        'Computerized GrandMA3 lighting control with automated moving beam matrix',
        'CPCB decibel compliance mapping to prevent neighborhood noise complaints'
      ],
      testimonial: '"Prince is the only staging company in the region with the structural engineering calculations to pull off an 8,000-person concert safely."'
    },
    {
      id: 'ooty-estate-gala',
      title: 'Ooty Heritage Tea Estate Reception',
      category: 'destination',
      categoryLabel: 'Destination',
      venue: 'Fernhills Royal Palace, Ooty',
      guests: '450 Guests',
      date: 'June 2025',
      image: '/about-hero.jpg',
      highlight: 'Hillside Micro-Climate Heating & Rigging',
      summary: 'An exclusive hillside gala under the stars in the Nilgiris hills. Required concealed thermal heating ducts, warm canopy lighting, and zero-impact heritage rigging.',
      scope: [
        'Zero-penetration ground ballast trussing protecting heritage palace lawns',
        'Integrated warm radiant heating disguised within floral pillars',
        'Acoustically warm jazz and acoustic violin sound mapping across open gardens',
        'Low-noise whisper-quiet diesel generator positioned 60m away in acoustic shelter'
      ],
      testimonial: '"Hosting an outdoor reception in Ooty’s chilly hills is daunting, but Prince kept our guests warm and the palace grounds pristine."'
    },
    {
      id: 'automotive-launch',
      title: 'Flagship EV Luxury Launch Arena',
      category: 'corporate',
      categoryLabel: 'Corporate Gala',
      venue: 'Chennai Trade Center, Nandambakkam',
      guests: '1,800 Attendees',
      date: 'May 2025',
      image: '/pillar-engineering.png',
      highlight: 'Hydraulic Turntable & Laser Reveal',
      summary: 'Precision-engineered rotating hydraulic vehicle turntable, 360-degree holographic laser curtain, and silent automated silk drop reveal mechanism.',
      scope: [
        'Heavy 5-ton motorized revolving hydraulic stage platform',
        'Full DMX-synchronized green & amber laser mapping array',
        'Multi-angle 4K low-latency robotic camera live switching',
        'Triple-redundant power delivery with automatic isolation'
      ],
      testimonial: '"The turntable synchronization and lighting reveal for our flagship EV launch was immaculate. Prince is in a class of their own."'
    },
    {
      id: 'royal-glasshouse-sangeet',
      title: 'The Royal Glasshouse Starlight Soiree',
      category: 'staging',
      categoryLabel: 'Technical Staging',
      venue: 'Radisson Blu Resort Temple Bay, Mamallapuram',
      guests: '1,100 Guests',
      date: 'March 2025',
      image: '/pillar-event-planning.jpg',
      highlight: 'Clear Span Glass Truss Architecture',
      summary: 'A bespoke 40m clear-span glass pavilion erected on coastal terrain featuring 32 automated moving heads and warm incandescent ceiling canopies.',
      scope: [
        'Engineered wind-rated clear-span modular glass structure',
        'Overhead kinetic crystal chandelier motion automation',
        'Precision acoustic time-aligned digital sound arrays',
        'Concealed underground cable trenches with zero trip hazards'
      ],
      testimonial: '"It felt like dining beneath a crystalline palace under the stars. The structural rigging was as flawless as the aesthetics."'
    }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  return (
    <div className="bg-cream-50 text-burgundy-950 font-sans w-full">
      
      {/* 1. Portfolio Hero Banner */}
      <section className="relative isolate w-full py-16 sm:py-20 lg:py-24 flex flex-col justify-center items-center overflow-hidden bg-burgundy-950 text-white">
        {/* Photographic Background with Gentle Zoom & Balanced Contrast */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src="/hero-portfolio.jpg"
            alt="Atmospheric night banquet gala with blue stage illumination and overhead trussing"
            className="w-full h-full object-cover object-center animate-hero-zoom filter brightness-[0.88] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/70 via-transparent to-black/50" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center relative z-10 w-full">
          <div className="max-w-4xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs text-cream-100 mb-5 shadow-lg">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-white font-semibold">Signature Portfolio</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-white mb-5 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] leading-[1.12]">
              A Gallery of <br className="hidden sm:inline" />
              <span className="italic font-display text-amber-300 underline decoration-cherry-400 decoration-wavy underline-offset-8">
                Palatial Productions
              </span>
            </h1>

            <p className="font-sans text-sm sm:text-base md:text-lg text-cream-100 max-w-2xl mx-auto leading-relaxed font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] mb-8">
              Over 550+ bespoke weddings, luxury soirees, and corporate arenas delivered with 100% structural safety across Tamil Nadu and South India.
            </p>

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
                  onClick={() => setSelectedFilter(tab.key)}
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
        </div>
      </section>

      {/* 2. Interactive Projects Grid */}
      <section className="py-20 lg:py-28 bg-white border-b border-cream-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className="group bg-cream-50 rounded-2xl overflow-hidden border border-cream-300 hover:border-cherry-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Hover Zoom */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-burgundy-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    
                    {/* Floating Badges */}
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/25 text-white text-[9px] sm:text-[10px] font-semibold">
                      <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                      <span className="truncate max-w-[70px] sm:max-w-none">{project.categoryLabel}</span>
                    </div>

                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 inline-flex items-center gap-1 px-1.5 sm:px-2.5 py-0.5 rounded-full bg-amber-400 text-burgundy-950 text-[9px] sm:text-[10px] font-bold shadow-md">
                      <span>{project.guests}</span>
                    </div>

                    <div className="absolute bottom-2 left-2 right-2 sm:bottom-2.5 sm:left-3 sm:right-3 flex items-center gap-1 sm:gap-1.5 text-white text-[10px] sm:text-[11px] drop-shadow-md">
                      <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cherry-400 shrink-0" />
                      <span className="truncate">{project.venue}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-3 sm:p-5">
                    <div className="inline-block px-2 sm:px-2.5 py-0.5 rounded-full bg-cherry-50 text-cherry-700 text-[9px] sm:text-[10px] font-bold mb-1.5 sm:mb-2.5 border border-cherry-100 truncate max-w-full">
                      {project.highlight}
                    </div>

                    <h3 className="font-editorial text-sm sm:text-xl font-bold text-burgundy-950 group-hover:text-cherry-700 transition-colors leading-snug mb-1 sm:mb-2 line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-[11px] sm:text-xs text-burgundy-800/80 leading-relaxed font-bold line-clamp-2 sm:line-clamp-3">
                      {project.summary}
                    </p>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="px-3 sm:px-5 pb-3 sm:pb-4 pt-2.5 sm:pt-3 border-t border-cream-200/80 flex items-center justify-between text-[11px] sm:text-xs font-semibold text-cherry-600">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Lightbox Inspection Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-cream-300 max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 sm:p-8 bg-burgundy-950 text-white flex items-center justify-between relative">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold mb-2">
                  <span>{activeModalProject.categoryLabel}</span>
                  <span>•</span>
                  <span>{activeModalProject.guests}</span>
                </div>
                <h2 className="font-editorial text-2xl sm:text-3xl font-bold">
                  {activeModalProject.title}
                </h2>
                <div className="text-xs text-cream-200 flex items-center gap-2 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-cherry-400" />
                  <span>{activeModalProject.venue}</span>
                  <span>•</span>
                  <span>{activeModalProject.date}</span>
                </div>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
              {/* Photo Preview */}
              <div className="rounded-2xl overflow-hidden aspect-[16/8] bg-burgundy-950">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Technical Scope of Work */}
              <div className="bg-cream-50 rounded-2xl p-6 border border-cream-200">
                <h4 className="font-editorial text-xl font-bold text-burgundy-950 mb-3 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-cherry-600" />
                  <span>Engineering & Decor Scope of Work</span>
                </h4>
                <div className="space-y-2.5">
                  {activeModalProject.scope.map((item, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-burgundy-900 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cherry-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Review Quote */}
              <div className="bg-cherry-50/60 rounded-2xl p-6 border border-cherry-200/60">
                <div className="text-xs font-bold uppercase tracking-wider text-cherry-700 mb-2">
                  Client Verdict & Feedback
                </div>
                <p className="font-editorial text-lg italic text-burgundy-950 leading-relaxed">
                  {activeModalProject.testimonial}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-cream-100 border-t border-cream-200 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2 rounded-full border border-cream-300 text-burgundy-800 hover:bg-cream-200 text-xs font-semibold"
              >
                Close Preview
              </button>
              <button
                onClick={() => {
                  setActiveModalProject(null);
                  if (onOpenEnquiry) onOpenEnquiry({ service: `Inquiry for ${activeModalProject.title}` });
                }}
                className="px-6 py-2.5 rounded-full bg-cherry-600 hover:bg-cherry-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Commission Similar Production</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 4. Consultation CTA */}
      <section className="py-16 sm:py-20 bg-burgundy-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold mb-3">
            Have a Landmark Vision for Your Event?
          </h2>
          <p className="text-sm sm:text-base text-cream-200/90 leading-relaxed mb-6">
            Share your venue footprint and guest requirements. Our Lead Architects will prepare custom 3D moodboards and structural feasibility estimates.
          </p>
          <button
            onClick={() => onOpenEnquiry && onOpenEnquiry({ service: 'Portfolio Commission' })}
            className="px-8 py-3.5 rounded-full bg-cherry-600 hover:bg-cherry-700 text-white font-semibold text-sm transition-all shadow-md inline-flex items-center gap-2"
          >
            <span>Book Consultation With Our Directors</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
