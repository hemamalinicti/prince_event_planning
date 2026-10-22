import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Heart, 
  Crown, 
  Briefcase, 
  Music, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight,
  Calendar,
  Compass,
  Palette,
  Users,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';

export default function EventPlanning({ onOpenEnquiry }) {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'weddings',
      title: 'Royal Palatial & Temple Weddings',
      subtitle: 'Sacred Traditions Executed on a Grand Architectural Scale',
      icon: Crown,
      badge: 'Signature Royal Experience',
      bgImage: '/royal-wedding-palace.jpg',
      desc: 'From palatial Chettinad courtyards to grand five-star ballrooms, we craft sacred wedding environments with architectural grandeur.',
      features: [
        'Bespoke hand-carved mandaps with customized floral canopies',
        'Precision sacred muhurtham choreography and VIP elder hospitality',
        'Traditional brass kuthuvilakku lighting with architectural ambient wash'
      ]
    },
    {
      id: 'destination',
      title: 'Destination Coastal & Hill Celebrations',
      subtitle: 'Covelong, Mahabalipuram, Ooty, Kodaikanal & Bangalore',
      icon: Compass,
      badge: 'Turnkey Destination Protocol',
      bgImage: '/destination-coastal.png',
      desc: 'Seamless destination wedding logistics across beaches and hill stations, backed by wind and weather engineering.',
      features: [
        'Wind-engineered cantilevered beachfront canopies tested up to 65 km/h',
        'Guest hospitality, airport charter fleets, and hotel room blocking',
        'All-weather audio/visual systems with instant rain-cover protocols'
      ]
    },
    {
      id: 'corporate',
      title: 'Corporate Conventions & Mega Arenas',
      subtitle: 'Conferences, Product Unveilings & Enterprise Banquets',
      icon: Briefcase,
      badge: 'Enterprise Reliability',
      bgImage: '/corporate-conventions.jpg',
      desc: 'Flawless production for 500 to 5,000+ delegates with zero-latency audio and ultra-fine pitch 4K curved LED backdrops.',
      features: [
        'Curved 4K LED video backdrops with multi-window PIP presentations',
        'Zero-echo line-array acoustics for keynote speakers and panels',
        '0-Second silent diesel power redundancy for continuous live sessions'
      ]
    },
    {
      id: 'sangeet',
      title: 'Milestone Sangeet & Private Celebrations',
      subtitle: 'High-Octane Concert Stages, Choreography & Thematic Lounges',
      icon: Music,
      badge: 'Concert Spectacle',
      bgImage: '/sangeet-celebrations.jpg',
      desc: 'Electrifying concert arena experiences with moving-head intelligent lighting, cold pyrotechnics, and custom lounges.',
      features: [
        'Concert-grade dance staging with anti-slip polished acrylic flooring',
        'DMX computerized moving beam lights, lasers, and cold-spark fountains',
        'Bespoke cocktail lounges, floral photo-ops, and immersive tunnels'
      ]
    }
  ];

  const methodology = [
    {
      step: '01',
      title: 'Architectural Vision & 3D Renders',
      desc: 'We translate your family traditions and aesthetic dreams into realistic 3D CAD renders and material swatches before a single hammer is struck.'
    },
    {
      step: '02',
      title: 'Venue Survey & Structural Calculations',
      desc: 'Our staging engineers inspect the venue to calculate load limits, wind corridors, guest egress flow, and generator placement.'
    },
    {
      step: '03',
      title: 'Artisan Fabrication & Floral Curation',
      desc: 'Master carpenters build custom mandaps and decor structures in our Coimbatore workshops while fresh florals are sourced directly from top growers.'
    },
    {
      step: '04',
      title: 'Technical Dress Rehearsal & Tuning',
      desc: '24 hours prior to guests arriving, our audio engineers calibrate line arrays and lighting directors run synchronized scene rehearsals.'
    },
    {
      step: '05',
      title: 'Live Event Master Concierge',
      desc: 'A dedicated team of on-site coordinators, shadow escorts, and technical directors run the event to the exact minute with 0 stress for your family.'
    }
  ];

  return (
    <div className="bg-cream-50 text-burgundy-950 font-sans w-full">
      
      {/* 1. Hero Banner */}
      <section className="relative isolate w-full py-16 sm:py-20 lg:py-24 flex flex-col justify-center items-center overflow-hidden bg-burgundy-950 text-white">
        {/* Photographic Background with Gentle Zoom & Balanced Contrast */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src="/hero-event-planning.jpg"
            alt="Majestic luxury ballroom with crystal chandeliers and royal floral decor"
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
              <span className="text-white font-semibold">Event Planning & Management</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-white mb-5 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] leading-[1.12]">
              Palatial Celebrations <br className="hidden sm:inline" />
              <span className="italic font-display text-amber-300 underline decoration-cherry-400 decoration-wavy underline-offset-8">
                Designed With Royal Artistry
              </span>
            </h1>

            <p className="font-sans text-sm sm:text-base md:text-lg text-cream-100 max-w-2xl mx-auto leading-relaxed font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] mb-8">
              From sacred muhurthams to high-octane corporate conventions, we bring 12+ years of bespoke decor craftsmanship and structural perfection to life across South India.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry({ service: 'Turnkey Wedding Planning' })}
                className="px-6 py-3 rounded-full bg-cherry-600 hover:bg-cherry-700 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                <span>Plan Your Wedding</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/portfolio"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/25 inline-flex items-center gap-2"
              >
                <span>View Real Celebrations</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Signature Celebration Categories - Light Pink Luxury Background */}
      <section className="py-14 sm:py-16 lg:py-20 bg-gradient-to-b from-[#FFF0F4] via-[#FFEAEF] to-[#FFF0F4] border-b border-cherry-200/60">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cherry-100/80 border border-cherry-200 text-cherry-700 text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-cherry-600" />
              Turnkey Management
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-burgundy-950 tracking-tight leading-tight mb-3">
              Celebrations Crafted Without Compromise
            </h2>
            <p className="text-xs sm:text-sm text-burgundy-800/80 leading-relaxed">
              Every genre of gathering receives our hallmark devotion: royal aesthetics anchored by certified engineering reliability.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-10">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const isActive = activeCategory === idx;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(idx)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-cherry-600 text-white shadow-md shadow-cherry-600/30 scale-105'
                      : 'bg-white/90 text-burgundy-900 hover:bg-white hover:text-cherry-700 border border-cherry-200/70 shadow-xs'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.title.split('&')[0].trim()}</span>
                </button>
              );
            })}
          </div>

          {/* Active Category Display: 1 Side Image, 1 Side Content (Consistent Compact Height for All Cards) */}
          <div className="relative isolate rounded-2xl overflow-hidden bg-white border border-cherry-200/80 shadow-[0_16px_40px_rgba(201,24,74,0.08)] max-w-5xl mx-auto flex flex-col lg:flex-row items-stretch lg:h-[395px]">
            
            {/* 1 Side: Dedicated Photographic Showcase */}
            <div className="w-full lg:w-1/2 relative min-h-[250px] sm:min-h-[290px] lg:min-h-0 lg:h-full overflow-hidden group bg-burgundy-950">
              <img
                key={categories[activeCategory].bgImage}
                src={categories[activeCategory].bgImage || "/royal-wedding-palace.jpg"}
                alt={categories[activeCategory].title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
              
              {/* Top Floating Badge */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md text-amber-300 text-[11px] font-bold border border-amber-300/40 shadow-md">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  {categories[activeCategory].badge}
                </span>
              </div>

              {/* Bottom Image Caption & Category Number */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white pointer-events-none">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-bold block mb-0.5">
                  Category 0{activeCategory + 1} • Signature Build
                </span>
                <p className="font-editorial text-base sm:text-lg font-bold text-white drop-shadow-md leading-snug line-clamp-1">
                  {categories[activeCategory].title}
                </p>
              </div>
            </div>

            {/* Other Side: Complete Details & Inclusions Content */}
            <div className="w-full lg:w-1/2 p-5 sm:p-6 lg:p-7 flex flex-col justify-between bg-white lg:h-full overflow-hidden">
              <div>
                {/* Top Meta Bar */}
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cherry-50 text-cherry-700 text-[11px] font-bold border border-cherry-200">
                    <Crown className="w-3 h-3 text-cherry-600" />
                    Turnkey Production
                  </span>
                  <span className="text-[11px] font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                    Category 0{activeCategory + 1}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-burgundy-950 mb-1 leading-snug line-clamp-1">
                  {categories[activeCategory].title}
                </h3>
                <div className="text-xs font-semibold text-cherry-700 uppercase tracking-wider mb-2 line-clamp-1">
                  {categories[activeCategory].subtitle}
                </div>

                {/* Narrative Description */}
                <p className="text-xs sm:text-[13px] text-burgundy-800/85 leading-relaxed font-medium mb-3.5 line-clamp-2">
                  {categories[activeCategory].desc}
                </p>

                {/* Inclusions & Logistics Section */}
                <div className="pt-3 border-t border-cream-200">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-burgundy-900 mb-2 flex items-center justify-between">
                    <span className="font-editorial text-xs sm:text-sm font-bold text-burgundy-950">
                      Turnkey Inclusions & Logistics
                    </span>
                    <span className="text-[10px] font-mono text-cherry-700 font-semibold">
                      Key Deliverables
                    </span>
                  </div>

                  <div className="space-y-2">
                    {categories[activeCategory].features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-burgundy-900 font-medium leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cherry-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions & Supervision Note */}
              <div className="pt-3.5 mt-3.5 border-t border-cream-200 space-y-2">
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry({ service: categories[activeCategory].title })}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-cherry-600 hover:bg-cherry-700 text-white font-semibold text-xs transition-all shadow-sm hover:shadow-md active:scale-95"
                >
                  <span>Book Consultation for This Event</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-1.5 text-[11px] text-burgundy-700/80 font-medium">
                  <Heart className="w-3 h-3 text-cherry-500 shrink-0" />
                  <span>Handcrafted by master decorators with on-site engineering supervision.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. The 5-Phase Planning Methodology */}
      <section className="py-20 bg-cream-100 border-b border-cream-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-cream-300 text-burgundy-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Calendar className="w-3.5 h-3.5 text-cherry-600" />
              Our Methodology
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy-950 tracking-tight leading-tight mb-4">
              The 5-Stage Journey to Flawless Execution
            </h2>
            <p className="text-sm sm:text-base text-burgundy-800/80 leading-relaxed">
              How we ensure zero miscommunication, zero delays, and 100% peace of mind from first brief to the final send-off.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
            {methodology.map((m, idx) => (
              <div 
                key={idx}
                className="relative rounded-3xl p-[2.5px] overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between bg-gradient-to-br from-cream-300 via-cherry-200/40 to-amber-200/60"
              >
                {/* Highlighted rotating border beam that sweeps continuously around all 4 corners */}
                <div 
                  className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0_240deg,#D4AF37_275deg,#C9184A_315deg,#FF4D6D_355deg,transparent_360deg)] animate-rotate-border pointer-events-none"
                  style={{ animationDelay: `-${idx * 0.7}s` }}
                />
                
                {/* Radiant corner blur glow as the beam passes each corner */}
                <div 
                  className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0_240deg,#D4AF37_275deg,#C9184A_315deg,#FF4D6D_355deg,transparent_360deg)] animate-rotate-border blur-md opacity-70 group-hover:opacity-100 pointer-events-none"
                  style={{ animationDelay: `-${idx * 0.7}s` }}
                />

                {/* Inner Card Container with concentric rounded corners */}
                <div className="relative z-10 w-full h-full bg-white rounded-[21.5px] p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-2xl font-bold text-cherry-600">
                        {m.step}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-cream-100 border border-cream-200 text-burgundy-900/70 font-semibold">
                        Stage {m.step}
                      </span>
                    </div>

                    <h3 className="font-editorial text-lg font-bold text-burgundy-950 mb-2 leading-snug">
                      {m.title}
                    </h3>
                    
                    <p className="text-xs sm:text-[13px] text-burgundy-800/80 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-cream-100 text-[11px] font-semibold text-cherry-600 flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cherry-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cherry-600"></span>
                    </span>
                    <span>Phase Approved</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Consultation Banner */}
      <section className="py-16 sm:py-20 bg-burgundy-950 text-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Begin Planning Your Palatial Celebration
            </h2>
            <p className="text-sm sm:text-base text-cream-200/90 leading-relaxed mb-8 max-w-xl mx-auto">
              Meet with our Principal Event Architects and Technical Rigging Directors to explore custom themes, 3D renderings, and date reservations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry({ service: 'Vision Consultation' })}
                className="px-8 py-3.5 rounded-full bg-cherry-600 hover:bg-cherry-700 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                <span>Book Private Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/enquiry"
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/20 inline-flex items-center gap-2"
              >
                <span>Submit Event Brief</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
