import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Building2, 
  Sparkles, 
  Layers, 
  Volume2, 
  SunMedium, 
  MonitorPlay,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  CalendarCheck
} from 'lucide-react';
import { eventPlanningServices, engineeringServices } from '../data/mockData';

export default function DualPillars({ onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState('both'); // 'both', 'events', 'engineering'

  const iconMap = {
    HeartHandshake: HeartHandshake,
    Building2: Building2,
    Sparkles: Sparkles,
    Layers: Layers,
    Volume2: Volume2,
    SunMedium: SunMedium,
    MonitorPlay: MonitorPlay
  };

  return (
    <section id="synergy" className="py-20 md:py-28 bg-cream-100/60 border-y border-burgundy-900/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cherry-100/70 text-cherry-800 text-xs font-semibold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cherry-600" />
            The Prince Advantage
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy-950 tracking-tight mb-4">
            A Masterclass in Two Disciplines: <br />
            <span className="italic text-cherry-700">Artistry</span> & <span className="text-burgundy-800">Engineering</span>.
          </h2>
          <p className="font-sans text-sm sm:text-base text-burgundy-900/80 leading-relaxed">
            Most event planners outsource their staging and sound, risking delays and miscalculations. At Prince, our in-house mechanical & audio engineers work directly alongside our luxury decor architects.
          </p>

          {/* Filter Pills */}
          <div className="inline-flex p-1.5 bg-cream-200/80 rounded-xl border border-burgundy-900/10 mt-8">
            <button
              onClick={() => setActiveTab('both')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'both' 
                  ? 'bg-white text-burgundy-950 shadow-warm-sm' 
                  : 'text-burgundy-800/80 hover:text-burgundy-950'
              }`}
            >
              Complete Synergy
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'events' 
                  ? 'bg-cherry-600 text-white shadow-warm-sm' 
                  : 'text-burgundy-800/80 hover:text-burgundy-950'
              }`}
            >
              Event Planning
            </button>
            <button
              onClick={() => setActiveTab('engineering')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'engineering' 
                  ? 'bg-burgundy-900 text-white shadow-warm-sm' 
                  : 'text-burgundy-800/80 hover:text-burgundy-950'
              }`}
            >
              Engineering Staging
            </button>
          </div>
        </div>

        {/* The Two Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {/* Pillar 1: Event Planning & Management */}
          {(activeTab === 'both' || activeTab === 'events') && (
            <div id="event-planning" className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-cherry-200 shadow-warm-md relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-cherry-100 mb-6">
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-widest text-cherry-600">Pillar One</span>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-burgundy-950 mt-1">
                      Event Planning & Experience Design
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-cherry-50 border border-cherry-200 flex items-center justify-center text-cherry-600">
                    <Sparkles className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-sm text-burgundy-900/80 mb-6 leading-relaxed">
                  We translate your personal stories and organizational milestones into immersive sensory journeys. Every floral arrangement, lighting cue, and hospitality detail is directed with royal poise.
                </p>

                <div className="space-y-4 mb-8">
                  {eventPlanningServices.map((service) => {
                    const IconComponent = iconMap[service.icon] || Sparkles;
                    return (
                      <div 
                        key={service.id}
                        className="p-4 rounded-2xl bg-cream-50/70 border border-burgundy-900/5 hover:border-cherry-300 hover:bg-cream-50 transition-all duration-200"
                      >
                        <div className="flex items-start gap-3.5">
                          <div className="w-9 h-9 rounded-xl bg-cherry-100/60 text-cherry-700 flex items-center justify-center shrink-0 mt-0.5">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-bold text-sm text-burgundy-950">{service.title}</h4>
                              <span className="text-[10px] font-semibold uppercase tracking-wider text-cherry-700 px-2 py-0.5 bg-cherry-50 rounded-full">
                                {service.badge}
                              </span>
                            </div>
                            <p className="text-xs text-burgundy-800/80 mt-1 leading-normal">
                              {service.description}
                            </p>
                            <div className="mt-2.5 flex flex-wrap gap-1.5">
                              {service.highlights.map((h, i) => (
                                <span key={i} className="text-[10px] bg-white px-2 py-0.5 rounded border border-burgundy-900/10 text-burgundy-900/90 font-bold">
                                  ✓ {h}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-cherry-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-burgundy-700 font-bold">
                  Includes full vendor curation & on-day event director
                </span>
                <button
                  onClick={onOpenEnquiry}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-cherry-600 hover:bg-cherry-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-warm-sm transition-all"
                >
                  <span>Plan Event Experience</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Pillar 2: Technical Engineering Services */}
          {(activeTab === 'both' || activeTab === 'engineering') && (
            <div id="engineering" className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-burgundy-900/15 shadow-warm-md relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-burgundy-100 mb-6">
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-widest text-burgundy-800">Pillar Two</span>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-burgundy-950 mt-1">
                      Technical Staging & Engineering
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-burgundy-50 border border-burgundy-200 flex items-center justify-center text-burgundy-900">
                    <Layers className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-sm text-burgundy-900/80 mb-6 leading-relaxed">
                  Certified German aluminum trussing, concert-grade line array acoustics, curved 4K LED video backdrops, and automated kinetic lighting designed for zero failover and extreme structural stability.
                </p>

                <div className="space-y-4 mb-8">
                  {engineeringServices.map((service) => {
                    const IconComponent = iconMap[service.icon] || Layers;
                    return (
                      <div 
                        key={service.id}
                        className="p-4 rounded-2xl bg-cream-50/70 border border-burgundy-900/5 hover:border-burgundy-300 hover:bg-cream-50 transition-all duration-200"
                      >
                        <div className="flex items-start gap-3.5">
                          <div className="w-9 h-9 rounded-xl bg-burgundy-100 text-burgundy-900 flex items-center justify-center shrink-0 mt-0.5">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-bold text-sm text-burgundy-950">{service.title}</h4>
                              <span className="text-[10px] font-semibold uppercase tracking-wider text-burgundy-900 px-2 py-0.5 bg-burgundy-100 rounded-full">
                                {service.badge}
                              </span>
                            </div>
                            <p className="text-xs text-burgundy-800/80 mt-1 leading-normal">
                              {service.description}
                            </p>
                            <div className="mt-2.5 flex flex-wrap gap-1.5">
                              {service.highlights.map((h, i) => (
                                <span key={i} className="text-[10px] bg-white px-2 py-0.5 rounded border border-burgundy-900/10 text-burgundy-900/90 font-bold">
                                  ⚡ {h}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-burgundy-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-burgundy-700 font-bold">
                  Licensed structural engineers & safety certification
                </span>
                <button
                  onClick={onOpenEnquiry}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-burgundy-900 hover:bg-burgundy-950 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-warm-sm transition-all"
                >
                  <span>Book Technical Staging</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
