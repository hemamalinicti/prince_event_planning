import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  ChevronRight, 
  CheckCircle2, 
  MessageSquare, 
  ShieldAlert, 
  Car, 
  Plane, 
  Train,
  ArrowRight
} from 'lucide-react';

export default function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Consultation',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
  };

  const handleWhatsApp = () => {
    let text = `Hello Prince Engineering & Events Team, I would like to schedule a visit to your Coimbatore campus regarding my upcoming event.`;
    if (contactForm.name || contactForm.message) {
      text = `Hello Prince Engineering & Events Team, my name is ${contactForm.name || 'a prospective client'}.\nSubject: ${contactForm.subject}\nPhone: ${contactForm.phone || 'N/A'}\nMessage: ${contactForm.message || 'I would like to inquire about your services.'}`;
    }
    window.open(`https://wa.me/919842212345?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-cream-50 text-burgundy-950 font-sans w-full min-h-screen">
      
      {/* 1. Hero Banner */}
      <section className="relative isolate w-full py-14 sm:py-18 lg:py-20 flex flex-col justify-center items-center overflow-hidden bg-burgundy-950 text-white">
        {/* Photographic Background with Gentle Zoom & Balanced Contrast */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img
            src="/hero-contact.jpg"
            alt="Executive meeting and consultation hall at Prince headquarters"
            className="w-full h-full object-cover object-center animate-hero-zoom filter brightness-[0.85] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/70 via-transparent to-black/50" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center relative z-10 w-full">
          <div className="max-w-3xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs text-cream-100 mb-4 shadow-lg">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-white font-semibold">Contact & Location</span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold tracking-tight text-white mb-4 leading-[1.14]">
              Visit Our Coimbatore Campus <br className="hidden sm:inline" />
              <span className="italic font-display text-amber-300 underline decoration-cherry-400 decoration-wavy underline-offset-8">
                Or Connect Directly
              </span>
            </h1>

            <p className="font-sans text-xs sm:text-sm md:text-base text-cream-100 max-w-xl mx-auto leading-relaxed">
              We welcome couples, family elders, corporate VPs, and creative directors to our flagship staging campus at Sowripalayam, Coimbatore.
            </p>

          </div>
        </div>
      </section>

      {/* 2. Key Contact Cards Strip */}
      <section className="py-12 bg-white border-b border-cream-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            
            {/* Address */}
            <div className="bg-cream-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-cream-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-cherry-100 text-cherry-600 flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
                  <MapPin className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-burgundy-900 mb-1">
                  Headquarters Campus
                </div>
                <p className="text-xs sm:text-sm font-semibold text-burgundy-950 leading-snug">
                  291/1, MM & Son Campus, Sowripalayam, Coimbatore – 641015, Tamil Nadu
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Sowripalayam+Coimbatore"
                target="_blank"
                rel="noreferrer"
                className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-cream-200 text-[11px] sm:text-xs font-bold text-cherry-600 hover:text-cherry-700 inline-flex items-center gap-1"
              >
                <span>Open in Maps</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Phone */}
            <div className="bg-cream-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-cream-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-cherry-100 text-cherry-600 flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
                  <Phone className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-burgundy-900 mb-1">
                  Direct Phone Lines
                </div>
                <div className="space-y-1">
                  <a href="tel:+919842212345" className="block text-xs sm:text-sm font-bold text-burgundy-950 hover:text-cherry-600 transition-colors">
                    +91 98422 12345
                  </a>
                  <a href="tel:+919443367890" className="block text-xs sm:text-sm font-bold text-burgundy-950 hover:text-cherry-600 transition-colors">
                    +91 94433 67890
                  </a>
                </div>
              </div>
              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-cream-200 text-[10px] sm:text-xs text-burgundy-700 font-bold">
                Senior planners available Mon – Sat
              </div>
            </div>

            {/* Email */}
            <div className="bg-cream-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-cream-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-cherry-100 text-cherry-600 flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
                  <Mail className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-burgundy-900 mb-1">
                  Email Correspondence
                </div>
                <div className="space-y-1">
                  <a href="mailto:director@princeevents.in" className="block text-[11px] sm:text-sm font-bold text-burgundy-950 hover:text-cherry-600 transition-colors break-all sm:break-normal">
                    director@princeevents.in
                  </a>
                  <a href="mailto:consult@princeevents.in" className="block text-[11px] sm:text-sm font-bold text-burgundy-950 hover:text-cherry-600 transition-colors break-all sm:break-normal">
                    consult@princeevents.in
                  </a>
                </div>
              </div>
              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-cream-200 text-[10px] sm:text-xs text-burgundy-700 font-bold">
                Typical response time: 4 hours
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-cream-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-cream-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-cherry-100 text-cherry-600 flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
                  <Clock className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-burgundy-900 mb-1">
                  Operational Schedule
                </div>
                <div className="space-y-1 text-[11px] sm:text-sm text-burgundy-950">
                  <div><strong>Mon – Sat:</strong> 9 AM – 8 PM</div>
                  <div><strong>Sunday:</strong> On-Site Events</div>
                </div>
              </div>
              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-cream-200 text-[10px] sm:text-xs text-cherry-600 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cherry-500 animate-ping" />
                <span>By Appointment</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Interactive Map & Contact Form */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Map & Landmarks */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-xl space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cherry-50 text-cherry-700 text-xs font-bold mb-3 border border-cherry-100">
                  <MapPin className="w-3.5 h-3.5" />
                  Campus Location & Navigation
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-burgundy-950 mb-2">
                  Visiting Sowripalayam, Coimbatore
                </h3>
                <p className="text-xs sm:text-sm text-burgundy-800/80 leading-relaxed">
                  Our flagship campus features structural staging mockups, acoustic testing bays, and a private client consultation suite.
                </p>
              </div>

              {/* Google Maps Embed iframe */}
              <div className="rounded-2xl overflow-hidden aspect-[16/10] border border-cream-200 bg-cream-100 shadow-inner">
                <iframe
                  title="Prince Engineering and Events Coimbatore Campus"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.326233777242!2d76.9942!3d11.0085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a7f3400001%3A0x6730040000000000!2sSowripalayam%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Transit Distance Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-cream-50 rounded-2xl p-3.5 border border-cream-200 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-burgundy-950 mb-1">
                    <Plane className="w-3.5 h-3.5 text-cherry-600" />
                    <span>CJB Airport</span>
                  </div>
                  <div className="text-burgundy-700">15 mins drive (8.2 km) via Avinashi Road</div>
                </div>

                <div className="bg-cream-50 rounded-2xl p-3.5 border border-cream-200 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-burgundy-950 mb-1">
                    <Train className="w-3.5 h-3.5 text-cherry-600" />
                    <span>Coimbatore Jn</span>
                  </div>
                  <div className="text-burgundy-700">12 mins drive (5.5 km) via Trichy Road</div>
                </div>

                <div className="bg-cream-50 rounded-2xl p-3.5 border border-cream-200 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-burgundy-950 mb-1">
                    <Car className="w-3.5 h-3.5 text-cherry-600" />
                    <span>Codissia Arena</span>
                  </div>
                  <div className="text-burgundy-700">10 mins drive (4.8 km) via Hope College</div>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Message Form */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-xl">
              
              {isSent ? (
                <div className="py-12 text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-cherry-100 text-cherry-600 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-burgundy-950 mb-2">
                    Message Sent Successfully
                  </h3>
                  <p className="text-sm text-burgundy-800/80 max-w-md mx-auto mb-6">
                    Our team in Coimbatore has received your inquiry. We will contact you at <strong>{contactForm.phone || contactForm.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="px-6 py-2.5 rounded-full border border-cream-300 hover:bg-cream-100 text-burgundy-900 font-semibold text-xs"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cherry-50 text-cherry-700 text-xs font-bold mb-3 border border-cherry-100">
                      <Send className="w-3.5 h-3.5" />
                      Direct Inquiry Form
                    </div>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-burgundy-950 mb-1">
                      Send a Direct Note to Our Directors
                    </h3>
                    <p className="text-xs text-burgundy-800/80">
                      Have questions about venue feasibility, dates, or technical equipment? Write to us below:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-burgundy-900 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        autoComplete="off"
                        placeholder="Enter your full name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-cream-300 bg-cream-50/60 text-burgundy-950 text-sm focus:outline-none focus:ring-2 focus:ring-cherry-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-burgundy-900 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        autoComplete="off"
                        placeholder="Enter mobile number"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-cream-300 bg-cream-50/60 text-burgundy-950 text-sm focus:outline-none focus:ring-2 focus:ring-cherry-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-burgundy-900 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        autoComplete="off"
                        placeholder="Enter your email address"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-cream-300 bg-cream-50/60 text-burgundy-950 text-sm focus:outline-none focus:ring-2 focus:ring-cherry-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-burgundy-900 mb-1.5">
                        Subject / Topic
                      </label>
                      <select
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-cream-300 bg-cream-50/60 text-burgundy-950 text-sm focus:outline-none focus:ring-2 focus:ring-cherry-500"
                      >
                        <option value="General Consultation">General Consultation</option>
                        <option value="Wedding Date Inquiry">Wedding Date Inquiry</option>
                        <option value="Corporate Staging Rigging">Corporate Staging & Rigging</option>
                        <option value="Campus Visit Appointment">Campus Visit Appointment</option>
                        <option value="Vendor / Partner Collaboration">Vendor / Partner Collaboration</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-burgundy-900 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please share event dates, venue location, or any specific structural and aesthetic requirements..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-cream-300 bg-cream-50/60 text-burgundy-950 text-sm focus:outline-none focus:ring-2 focus:ring-cherry-500"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}

              {/* Weekend Emergency Support Box */}
              <div className="mt-8 pt-6 border-t border-cream-200 flex items-start gap-3 bg-cream-50/80 rounded-2xl p-4 border border-cream-200">
                <ShieldAlert className="w-5 h-5 text-cherry-600 shrink-0 mt-0.5" />
                <div className="text-xs text-burgundy-900">
                  <strong className="block text-burgundy-950">Active Weekend Production Hotline:</strong>
                  If your event is currently on-site and you require urgent staging, audio, or generator dispatch, contact our 24/7 Field Dispatcher at <a href="tel:+919842212345" className="font-bold underline text-cherry-600">+91 98422 12345</a>.
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
