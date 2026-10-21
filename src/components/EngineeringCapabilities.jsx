import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Wrench, 
  Zap, 
  Wind, 
  Volume2, 
  HardHat, 
  CheckCircle2,
  FileCheck2
} from 'lucide-react';
import { engineeringPillars } from '../data/mockData';

export default function EngineeringCapabilities({ onOpenEnquiry }) {
  const safetyBadges = [
    { title: "German Heavy Truss Certification", code: "DIN EN 13814" },
    { title: "Electrical Safety & Fire Retardant", code: "IS 732 / NFPA 701" },
    { title: "Public Audio Decibel Compliance", code: "CPCB Acoustics" },
    { title: "Stage Wind Load Structural Rating", code: "Up to 65 km/h" }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-burgundy-950 via-burgundy-900 to-burgundy-950 text-cream-50 relative overflow-hidden">
      
      {/* Structural grid blueprint background lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Storytelling & Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cherry-900/60 border border-cherry-500/40 text-cherry-300 text-xs font-semibold tracking-wide uppercase">
              <HardHat className="w-3.5 h-3.5 text-gold-400" />
              Structural Rigor
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Event Beauty Built on <br />
              <span className="text-cherry-400 italic">Rock-Solid Engineering</span>.
            </h2>

            <p className="text-sm text-cream-200/80 leading-relaxed font-sans">
              A single lighting failure, stage sag, or sound echo can ruin a once-in-a-lifetime moment. We engineer every square foot with CAD simulations, certified tensile calculations, and dual power backups so you can enjoy absolute peace of mind.
            </p>

            {/* Certifications Box */}
            <div className="p-5 rounded-2xl bg-burgundy-900/60 border border-burgundy-700/50 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-400 flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4" />
                Engineering Standard Compliance
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {safetyBadges.map((badge, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-burgundy-950/60 border border-burgundy-800 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] font-semibold text-cream-100">{badge.title}</p>
                      <span className="text-[9px] text-cream-300/70">{badge.code}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="px-6 py-3 rounded-xl bg-cherry-600 hover:bg-cherry-500 text-white font-semibold text-xs transition-all shadow-cherry-glow flex items-center gap-2"
              >
                <span>Request Technical Site Inspection</span>
              </button>
            </div>
          </div>

          {/* Right Column: 4 Engineering Pillars Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {engineeringPillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-burgundy-900/40 border border-cherry-900/40 hover:border-cherry-500/50 hover:bg-burgundy-900/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-cherry-950 border border-cherry-700/50 flex items-center justify-center font-display font-bold text-cherry-400 text-sm">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-cherry-600/30 text-cherry-300 border border-cherry-500/30">
                      {pillar.stat}
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl font-bold text-cream-100 mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-cream-200/75 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-burgundy-800/60 flex items-center gap-1.5 text-[11px] text-gold-300/90 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                  <span>Verified On-Site by Lead Engineer</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
