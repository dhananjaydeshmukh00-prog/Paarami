import React from 'react';
import { motion } from 'motion/react';
import { VERIFIED_STATS } from '../data/paaramiData';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface ImpactNumbersSectionProps {
  onOpenContact: (detail?: string) => void;
}

export const ImpactNumbersSection: React.FC<ImpactNumbersSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="impact" className="relative py-20 md:py-28 bg-white overflow-hidden border-t border-slate-200/80">
      {/* Background shape elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-50/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 mb-4 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
              Measurable Track Record
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            Proven Scale in Numbers, <br />
            <span className="text-navy-gradient">Not Theoretical Promises.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Since 2012, we have helped companies expand market share, lower customer acquisition costs, and build reliable digital revenue pipelines.
          </p>
        </div>

        {/* Stat Grid (Light Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VERIFIED_STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-3xl border border-slate-200/90 bg-slate-50/70 p-7 sm:p-8 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 mb-2">
                  {stat.value}
                  <span className="text-blue-600">{stat.suffix}</span>
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 mb-2">
                  {stat.label}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {stat.detail}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/70 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Verified Data
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenContact('Metrics & Performance Audit Request')}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            <span>Request Full Agency Track Record & Capabilities Deck</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
