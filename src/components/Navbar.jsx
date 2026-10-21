import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Sparkles, 
  ChevronRight,
  Calendar,
  MessageCircle
} from 'lucide-react';
import { companyInfo } from '../data/mockData';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Event Planning', path: '/event-planning' },
    { name: 'Engineering', path: '/engineering' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Main Sticky Navbar with Balanced 3-Column Alignment */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-cream-50/95 backdrop-blur-md shadow-warm-md border-b border-burgundy-900/10' 
            : 'bg-cream-50/90 backdrop-blur-sm border-b border-burgundy-900/5'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-20">
            
            {/* 1. Left: Brand Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link 
                to="/" 
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cherry-600 to-burgundy-800 p-0.5 shadow-sm group-hover:shadow-cherry-glow transition-all duration-300 flex-shrink-0">
                  <div className="w-full h-full rounded-[10px] bg-cream-50 flex items-center justify-center border border-champagne-300/40">
                    <span className="font-display font-bold text-xl text-burgundy-900 tracking-tighter">
                      P
                    </span>
                  </div>
                </div>
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1.5 leading-none">
                    <span className="font-display font-bold text-xl sm:text-2xl tracking-wider text-burgundy-950 uppercase">
                      Prince
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cherry-600 inline-block mb-0.5"></span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-burgundy-950 font-bold mt-1">
                    Engineering & Events
                  </span>
                </div>
              </Link>
            </div>

            {/* 2. Center: Navigation Links (Centrally Aligned) */}
            <nav className="hidden lg:flex items-center justify-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => `px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all duration-200 flex items-center gap-1 ${
                    isActive 
                      ? 'text-cherry-700 bg-cherry-100/80 shadow-warm-sm font-bold' 
                      : 'text-burgundy-950 hover:text-cherry-700 hover:bg-cream-100'
                  }`}
                >
                  <span>{link.name}</span>
                </NavLink>
              ))}
            </nav>

            {/* 3. Right: Action CTA (Right Aligned) */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <Link
                to="/enquiry"
                className="px-5 py-2.5 rounded-xl text-xs xl:text-sm font-bold text-white bg-gradient-to-r from-cherry-600 to-burgundy-800 hover:from-cherry-700 hover:to-burgundy-900 shadow-warm-sm hover:shadow-cherry-glow transition-all duration-200 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Get a Quote</span>
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenEnquiry}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-cherry-600 hover:bg-cherry-700 shadow-sm"
              >
                Enquire
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-burgundy-900 hover:bg-cherry-50 hover:text-cherry-600 transition-colors border border-burgundy-900/10"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Sliding Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-burgundy-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed right-0 top-0 bottom-0 w-5/6 max-w-sm bg-cream-50 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-burgundy-900/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-burgundy-900 text-cream-100 flex items-center justify-center font-display font-bold text-lg">
                    P
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-lg text-burgundy-950">Prince Events</span>
                    <span className="text-[10px] tracking-wider text-burgundy-700 font-bold uppercase">Engineering & Luxury</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-burgundy-900 hover:bg-cream-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) => `flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-cherry-100/70 text-cherry-800'
                        : 'text-burgundy-950 hover:bg-cream-100'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-burgundy-400" />
                  </NavLink>
                ))}
                
                <NavLink
                  to="/enquiry"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => `flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-cherry-100/70 text-cherry-800'
                      : 'text-burgundy-950 hover:bg-cream-100'
                  }`}
                >
                  <span>Service Enquiry & Quote</span>
                  <ChevronRight className="w-4 h-4 text-burgundy-400" />
                </NavLink>
              </div>
            </div>

            <div className="pt-6 border-t border-burgundy-900/10 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cherry-600 to-burgundy-800 text-white font-semibold text-sm shadow-warm-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-gold-300" />
                <span>Book Free Consultation</span>
              </button>

              <a
                href={`https://wa.me/${companyInfo.whatsappPhone}?text=Hello%20Prince%20Events,%20I%20would%20like%20to%20plan%20an%20event.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Instant Chat</span>
              </a>

              <div className="text-center pt-2">
                <p className="text-xs text-burgundy-700 font-bold">Direct Line: {companyInfo.phone}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
