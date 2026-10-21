import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Users, 
  ExternalLink, 
  X, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { portfolioItems } from '../data/mockData';

export default function PortfolioShowcase({ onOpenEnquiry }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Weddings', 'Corporate', 'Engineering'];

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-sky-100 border-y border-burgundy-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cherry-100 text-cherry-800 text-xs font-semibold tracking-wide uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cherry-600" />
              Completed Milestones
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy-950 tracking-tight">
              Curated Event & Staging <span className="text-cherry-700 italic">Portfolio</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-burgundy-900/80 mt-3 leading-relaxed">
              Explore our recent luxury celebrations, grand palace weddings, and precision engineering installations across South India.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cherry-600 to-burgundy-800 text-white shadow-warm-sm'
                    : 'bg-white text-burgundy-900/80 hover:bg-cream-200 border border-burgundy-900/10'
                }`}
              >
                {cat === 'All' ? 'All Portfolios' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedProject(item)}
              className="group bg-white rounded-2xl overflow-hidden border border-burgundy-900/10 shadow-warm-sm hover:shadow-warm-lg transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase backdrop-blur-md shadow-sm ${
                    item.category === 'Weddings' 
                      ? 'bg-cherry-600/90 text-white' 
                      : item.category === 'Engineering'
                      ? 'bg-burgundy-900/90 text-cream-100'
                      : 'bg-burgundy-700/90 text-white'
                  }`}>
                    {item.category}
                  </span>
                </div>

                {/* Lightbox Trigger Icon */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-cream-50/80 backdrop-blur-md flex items-center justify-center text-burgundy-950 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-burgundy-700 font-bold mb-1.5">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cherry-600" />
                      {item.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-burgundy-600" />
                      {item.attendees}
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl font-bold text-burgundy-950 group-hover:text-cherry-700 transition-colors line-clamp-1 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-burgundy-900/75 line-clamp-2 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-burgundy-900/5">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-cream-100 text-burgundy-900 font-bold border border-burgundy-900/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-burgundy-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-cream-50 rounded-3xl overflow-hidden shadow-2xl border border-cherry-300 max-h-[90vh] flex flex-col">
            
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-cream-50/80 backdrop-blur-md text-burgundy-950 hover:bg-white flex items-center justify-center shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto">
              <div className="relative aspect-[16/9] w-full bg-black">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-cherry-600 text-white">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-4 text-xs font-semibold text-burgundy-800">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-cherry-600" />
                    {selectedProject.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-burgundy-600" />
                    {selectedProject.attendees}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-burgundy-950">
                  {selectedProject.title}
                </h3>

                <p className="text-sm text-burgundy-900/80 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-burgundy-950 mb-2">
                    Key Engineering & Styling Inclusions:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-lg bg-cherry-50 text-cherry-800 font-bold border border-cherry-200"
                      >
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-burgundy-900/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-burgundy-700">
                    Interested in reproducing this concept for your upcoming date?
                  </span>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenEnquiry();
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-cherry-600 to-burgundy-800 text-white font-semibold text-xs shadow-warm-sm flex items-center justify-center gap-2"
                  >
                    <span>Request Similar Setup</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
