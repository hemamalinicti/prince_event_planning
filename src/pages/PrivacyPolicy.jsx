import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-cream-50 text-burgundy-950 font-sans min-h-screen">
      
      {/* Header Banner */}
      <section className="relative isolate w-full py-16 sm:py-20 flex flex-col justify-center items-center overflow-hidden bg-burgundy-950 text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-burgundy-950/90 to-black/90" />
          <div className="subtle-grain absolute inset-0 opacity-20" />
        </div>

        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 text-center relative z-10 w-full">
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs text-cream-100 mb-5 shadow-lg">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-white font-semibold">Privacy Policy</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 drop-shadow-md">
            Privacy & Confidentiality Policy
          </h1>

          <p className="font-sans text-sm sm:text-base text-cream-100 max-w-xl mx-auto leading-relaxed">
            At Prince Engineering & Events, we hold your personal celebrations, guest privacy, and technical blueprints in the highest confidence.
          </p>

          <div className="mt-4 text-xs font-mono text-amber-300">
            Last Updated: October 2026 • Coimbatore HQ
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-warm-md space-y-10 text-sm leading-relaxed text-burgundy-900/90">
            
            {/* 1. Commitment */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-cherry-50 text-cherry-600 flex items-center justify-center font-bold">
                  <Lock className="w-4 h-4" />
                </div>
                <h2 className="font-editorial text-2xl font-bold text-burgundy-950">
                  1. Our Commitment to Client Confidentiality
                </h2>
              </div>
              <p>
                Prince Engineering & Events (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), operating from our headquarters at <strong>291/1, MM & Son Campus, Sowripalayam, Coimbatore – 641015</strong>, is dedicated to protecting the privacy and personal data of our patrons, bridal families, and enterprise corporate clients across South India.
              </p>
            </div>

            {/* 2. Data We Collect */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-cherry-50 text-cherry-600 flex items-center justify-center font-bold">
                  <FileText className="w-4 h-4" />
                </div>
                <h2 className="font-editorial text-2xl font-bold text-burgundy-950">
                  2. Information We Collect
                </h2>
              </div>
              <p className="mb-3">
                To engineer and plan turnkey celebrations, we collect only necessary logistical and coordination details, including:
              </p>
              <ul className="space-y-2 pl-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cherry-600 shrink-0 mt-0.5" />
                  <span><strong>Contact Data:</strong> Client full names, primary phone numbers, email addresses, and WhatsApp handles.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cherry-600 shrink-0 mt-0.5" />
                  <span><strong>Event Specifications:</strong> Date of event, chosen venue addresses, anticipated guest counts, and customized theme briefs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cherry-600 shrink-0 mt-0.5" />
                  <span><strong>Technical Rigging Data:</strong> Venue ceiling heights, electrical load requirements, and ground anchoring approvals.</span>
                </li>
              </ul>
            </div>

            {/* 3. Non-Disclosure & VIP Celebrations */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-cherry-50 text-cherry-600 flex items-center justify-center font-bold">
                  <Eye className="w-4 h-4" />
                </div>
                <h2 className="font-editorial text-2xl font-bold text-burgundy-950">
                  3. VIP, Celebrity & Corporate Non-Disclosure (NDA)
                </h2>
              </div>
              <p>
                We regularly produce high-profile destination weddings, political banquets, and proprietary corporate unveilings. When an NDA is executed, all photography, artist schedules, guest itineraries, and stage renders remain strictly confidential. No promotional media or public announcements will be shared without your prior written authorization.
              </p>
            </div>

            {/* 4. Communications */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-cherry-50 text-cherry-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h2 className="font-editorial text-2xl font-bold text-burgundy-950">
                  4. Communication & Anti-Spam Policy
                </h2>
              </div>
              <p>
                We maintain a strict zero-spam communication standard. Phone, email, and WhatsApp communications are utilized exclusively for project coordination, 3D render sharing, quote delivery, and on-site event logistics. We will never sell, lease, or monetize your contact information to third-party advertising networks.
              </p>
            </div>

            {/* 5. Contact & Grievance Officer */}
            <div className="pt-6 border-t border-cream-200">
              <h3 className="font-editorial text-lg font-bold text-burgundy-950 mb-2">
                5. Privacy Queries & Coimbatore Headquarters
              </h3>
              <p className="text-xs text-burgundy-800">
                For questions regarding personal data or to request deletion of event blueprints:
              </p>
              <div className="mt-3 p-4 rounded-2xl bg-cream-100/70 border border-cream-200 text-xs space-y-1">
                <p><strong>Prince Engineering & Events</strong></p>
                <p>291/1, MM & Son Campus, Sowripalayam, Coimbatore – 641015, Tamil Nadu, India</p>
                <p>Phone: +91 98430 12345 • Email: contact@princeevents.in</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
