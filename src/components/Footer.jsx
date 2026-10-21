import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  ChevronRight,
  ExternalLink,
  Heart
} from 'lucide-react';
import { companyInfo } from '../data/mockData';

export default function Footer({ onOpenEnquiry }) {
  const quickLinks = [
    { name: 'Home Experience', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Event Planning & Decor', path: '/event-planning' },
    { name: 'Engineering Staging & Rigging', path: '/engineering' },
    { name: 'Project Gallery & Portfolio', path: '/portfolio' },
    { name: 'Service Enquiry Form', path: '/enquiry' },
    { name: 'Contact & Google Maps', path: '/contact' },
  ];

  const engineeringOfferings = [
    'Certified German Aluminum Box Trussing',
    'Concert Line Array Audio Calibration',
    'DMX Computerized Intelligent Lighting',
    'Curved 4K Ultra-Fine LED Backdrops',
    'Dual Synchronized Silent Gensets',
    'Hydraulic Ramps & Revolving Stages'
  ];

  return (
    <footer id="contact" className="relative z-30 isolate bg-burgundy-950 text-white pt-16 pb-12 border-t-2 border-cherry-900/60 shadow-2xl">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 xl:gap-12 items-start pb-14 border-b border-white/15">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cherry-600 to-burgundy-800 p-0.5 shadow-md">
                <div className="w-full h-full rounded-[10px] bg-cream-50 flex items-center justify-center">
                  <span className="font-display font-bold text-lg text-burgundy-950">P</span>
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-xl tracking-wider text-white uppercase block group-hover:text-cherry-300 transition-colors">
                  Prince
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-cherry-400 font-bold -mt-1 block">
                  Engineering & Events
                </span>
              </div>
            </Link>

            <p className="text-xs text-cream-100/90 leading-relaxed font-sans">
              Blending timeless luxury celebration design with structural engineering precision. Certified load calculation, concert sound design, and bespoke wedding architecture.
            </p>
          </div>

          {/* Column 2: Quick Multi-Page Navigation */}
          <div className="space-y-3.5">
            <h4 className="font-bold text-xs uppercase tracking-widest text-amber-400">
              Multi-Page Site
            </h4>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-cream-100/90 hover:text-white hover:translate-x-1 font-bold transition-all flex items-center gap-1.5 group whitespace-nowrap"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-cherry-400 group-hover:text-amber-400 transition-colors" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Engineering Offerings */}
          <div className="space-y-3.5">
            <h4 className="font-bold text-xs uppercase tracking-widest text-amber-400">
              Engineering Staging
            </h4>
            <ul className="space-y-2.5 text-xs text-cream-100/90 font-bold">
              {engineeringOfferings.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & HQ */}
          <div className="space-y-3.5">
            <h4 className="font-bold text-xs uppercase tracking-widest text-amber-400">
              Contact & HQ
            </h4>

            <div className="space-y-3 text-xs text-cream-100">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cherry-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-bold">{companyInfo.address}</p>
                  <a
                    href={companyInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cherry-400 hover:text-cherry-300 font-bold mt-1"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="text-white hover:text-amber-300 font-semibold transition-colors">
                  {companyInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cherry-400 shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-white hover:text-amber-300 font-semibold transition-colors">
                  {companyInfo.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs text-cream-100/90 font-bold">{companyInfo.hours}</span>
              </div>
            </div>

            <button
              onClick={onOpenEnquiry}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cherry-600 to-burgundy-800 hover:from-cherry-500 hover:to-burgundy-700 text-white font-bold text-xs shadow-warm-md hover:shadow-cherry-glow transition-all flex items-center justify-center gap-2 border border-cherry-400/30"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Request Date Availability</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream-200/90 font-bold">
          <p>© {new Date().getFullYear()} Prince Engineering & Events. All rights reserved.</p>

          <p className="flex items-center gap-1.5 text-[11px] text-cream-300">
            <span>Crafted with passion, precision & elegance</span>
            <Heart className="w-3.5 h-3.5 text-cherry-500 fill-cherry-500 inline" />
            <span>Coimbatore HQ</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs">
            <Link to="/privacy-policy" className="text-cream-200 hover:text-white transition-colors underline decoration-cream-200/40 underline-offset-4">
              Privacy Policy
            </Link>
            <span className="text-cream-400">•</span>
            <Link to="/terms-and-conditions" className="text-cream-200 hover:text-white transition-colors underline decoration-cream-200/40 underline-offset-4">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
