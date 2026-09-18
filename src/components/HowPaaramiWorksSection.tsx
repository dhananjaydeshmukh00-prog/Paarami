import React from 'react';
import { motion } from 'motion/react';
import { HOW_IT_WORKS_STEPS } from '../data/paaramiData';
import { Brain, Palette, TrendingUp, Check, ArrowRight, Layers } from 'lucide-react';
import { PageRoute } from '../types';

interface HowPaaramiWorksSectionProps {
  onOpenContact: (phase?: string) => void;
  onNavigate?: (route: PageRoute) => void;
}

export const HowPaaramiWorksSection: React.FC<HowPaaramiWorksSectionProps> = ({ onOpenContact, onNavigate }) => {
  const getPhaseIcon = (phase: string) => {
    switch (phase) {
      case 'THINK':
        return Brain;
      case 'CREATE':
        return Palette;
      case 'GROW':
        return TrendingUp;
      default:
        return Brain;
    }
  };

  return (
    <section id="how-it-works" className="relative py-20 md:py-28 bg-slate-50/70 overflow-hidden border-t border-slate-200/80">
      {/* Background shape elements */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-blue-100/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 mb-4 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
              Our 3-Step Methodology
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            How We Work With You: <br />
            <span className="text-navy-gradient">Think. Create. Grow.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            A transparent and proven process so you always know what is being built, when campaigns go live, and how results are measured.
          </p>
        </div>

        {/* 3 Architecture Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const Icon = getPhaseIcon(step.phase);
            return (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider bg-blue-50 text-blue-700 border border-blue-100 uppercase">
                      {step.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight mb-2">
                    {step.phase}
                  </h3>

                  <p className="text-xs font-bold text-blue-600 mb-4 uppercase tracking-wide">
                    {step.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 mb-6">
                    {step.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate('digital-marketing-approach');
                      } else {
                        onOpenContact(`Methodology Phase: ${step.phase}`);
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer uppercase tracking-wider"
                  >
                    <span>View 6-Step Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                  <span className="text-xs font-bold text-slate-400">Step 0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
