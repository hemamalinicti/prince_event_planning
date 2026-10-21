import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ChevronRight, AlertTriangle, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';

export default function TermsConditions() {
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
            <span className="text-white font-semibold">Terms & Conditions</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 drop-shadow-md">
            Terms & Conditions of Service
          </h1>

          <p className="font-sans text-sm sm:text-base text-cream-100 max-w-xl mx-auto leading-relaxed">
            Transparent operational protocols, safety standards, and engineering contracts governing all Prince Engineering & Events productions.
          </p>

          <div className="mt-4 text-xs font-mono text-amber-300">
            Effective: October 2026 • Certified Operations
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-warm-md space-y-10 text-sm leading-relaxed text-burgundy-900/90">
            
            {/* 1. Scope */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-cherry-50 text-cherry-600 flex items-center justify-center font-bold">
                  <FileCheck className="w-4 h-4" />
                </div>
                <h2 className="font-editorial text-2xl font-bold text-burgundy-950">
                  1. Scope of Engagement
                </h2>
              </div>
              <p>
                These Terms govern all turnkey wedding planning, corporate staging, German aluminum box trussing, line-array acoustics, intelligent lighting, and power infrastructure provided by Prince Engineering & Events. Execution of any event proposal or advance deposit constitutes full acceptance of these terms.
              </p>
            </div>

            {/* 2. Date Reservations & Retainers */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-cherry-50 text-cherry-600 flex items-center justify-center font-bold">
                  <Scale className="w-4 h-4" />
                </div>
                <h2 className="font-editorial text-2xl font-bold text-burgundy-950">
                  2. Date Reservation & Retainer Protocol
                </h2>
              </div>
              <ul className="space-y-2 pl-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cherry-600 shrink-0 mt-0.5" />
                  <span><strong>Date Lock:</strong> Event dates, equipment inventory, and crew allocations are officially reserved only upon receipt of the contractual advance booking retainer.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cherry-600 shrink-0 mt-0.5" />
                  <span><strong>Payment Milestones:</strong> Standard turnkey schedules require 40% upon booking, 40% post-3D render approval and structural calculation sign-off, and the remaining 20% prior to on-site handover.</span>
                </li>
              </ul>
            </div>

            {/* 3. Engineering Safety & Chief Rigging Override */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-cherry-50 text-cherry-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h2 className="font-editorial text-2xl font-bold text-burgundy-950">
                  3. Safety Standards & Structural Physics
                </h2>
              </div>
              <p className="mb-2">
                All temporary staging, box trussing roofs, and cantilevered LED walls comply strictly with <strong>DIN EN 13814</strong> temporary structure specifications. 
              </p>
              <p>
                The on-site <strong>Chief Rigging Engineer</strong> holds absolute safety authority. If sustained environmental conditions (such as wind gusts exceeding 65 km/h, severe ungrounded lightning, or flood runoff) endanger human life, the engineer may mandate temporary lowering of hanging fixtures until environmental safety thresholds are restored.
              </p>
            </div>

            {/* 4. Force Majeure */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-cherry-50 text-cherry-600 flex items-center justify-center font-bold">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <h2 className="font-editorial text-2xl font-bold text-burgundy-950">
                  4. Force Majeure & Contingency Protocols
                </h2>
              </div>
              <p>
                Neither party shall be held liable for failure or delay in performance resulting from acts of God, extreme cyclones, national emergency declarations, or government regulatory lockdown mandates. In such events, Prince Engineering & Events will apply 100% of retainers towards an agreed mutually available reschedule date within 12 months.
              </p>
            </div>

            {/* 5. Jurisdiction */}
            <div className="pt-6 border-t border-cream-200">
              <h3 className="font-editorial text-lg font-bold text-burgundy-950 mb-2">
                5. Governing Law & Jurisdiction
              </h3>
              <p className="text-xs text-burgundy-800">
                These terms and any contracts executed with Prince Engineering & Events are governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the competent courts in <strong>Coimbatore, Tamil Nadu</strong>.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
