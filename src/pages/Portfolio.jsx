import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ChevronLeft, 
  X, 
  Maximize2 
} from 'lucide-react';

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const galleryImages = [
    {
      id: 'imperial-white-arch',
      image: '/hero-stage.jpg',
      category: 'weddings'
    },
    {
      id: 'royal-palace-mandap',
      image: '/royal-wedding-palace.jpg',
      category: 'weddings'
    },
    {
      id: 'crimson-floral-stage',
      image: '/pillar-event-planning.jpg',
      category: 'weddings'
    },
    {
      id: 'sangeet-night-lighting',
      image: '/sangeet-celebrations.jpg',
      category: 'weddings'
    },
    {
      id: 'coastal-sunset-setup',
      image: '/destination-coastal.png',
      category: 'destination'
    },
    {
      id: 'beachfront-reception-tent',
      image: '/about-hero.jpg',
      category: 'destination'
    },
    {
      id: 'corporate-arena-summit',
      image: '/corporate-conventions.jpg',
      category: 'corporate'
    },
    {
      id: 'curved-led-keynote',
      image: '/pillar-engineering.png',
      category: 'corporate'
    },
    {
      id: 'stage-lighting-laser-rig',
      image: '/hero-engineering.png',
      category: 'staging'
    },
    {
      id: 'auditorium-arena-production',
      image: '/hero-about.jpg',
      category: 'staging'
    },
    {
      id: 'atmospheric-night-gala',
      image: '/hero-portfolio.jpg',
      category: 'staging'
    },
    {
      id: 'luxury-floral-banquet',
      image: '/hero-event-planning.jpg',
      category: 'weddings'
    }
  ];

  const filteredImages = selectedFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(item => item.category === selectedFilter);

  // Keyboard navigation for full-screen lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') setSelectedImageIndex((prev) => (prev + 1) % filteredImages.length);
      if (e.key === 'ArrowLeft') setSelectedImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredImages.length]);

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
              { key: 'all', label: 'All Photos' },
              { key: 'weddings', label: 'Royal Weddings' },
              { key: 'corporate', label: 'Corporate Galas' },
              { key: 'staging', label: 'Technical Staging' },
              { key: 'destination', label: 'Destination Events' }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => {
                  setSelectedFilter(tab.key);
                  setSelectedImageIndex(null);
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredImages.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedImageIndex(idx)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-burgundy-950 shadow-warm-sm hover:shadow-warm-xl border border-cream-200 hover:border-cherry-400 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt="Portfolio event visual"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Subtle Hover Overlay with Expand Indicator */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-burgundy-950 opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100 flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Pure Image Fullscreen Lightbox Modal */}
      {selectedImageIndex !== null && filteredImages[selectedImageIndex] && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-5 right-5 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors border border-white/20 shadow-lg"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous image */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
            }}
            className="absolute left-3 sm:left-6 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors border border-white/20 shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Lightbox Image Container */}
          <div 
            className="max-w-5xl max-h-[85vh] w-full flex items-center justify-center overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[selectedImageIndex].image}
              alt="Portfolio full resolution view"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>

          {/* Next image */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex((prev) => (prev + 1) % filteredImages.length);
            }}
            className="absolute right-3 sm:right-6 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors border border-white/20 shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}

    </div>
  );
}
