import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CASE_STUDIES } from '../data/paaramiData';
import { CaseStudy, PageRoute } from '../types';
import { ArrowUpRight, TrendingUp, Sparkles, X, CheckCircle2, ChevronRight, Award, ArrowRight } from 'lucide-react';

interface SelectedWorkSectionProps {
  onOpenContact: (caseName?: string) => void;
  onNavigate?: (route: PageRoute) => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkSectionProps> = ({ onOpenContact, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  const categories = ['All', 'Healthcare', 'EdTech', 'B2B', 'Consumer'];

  const filteredStudies =
    selectedCategory === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((item) => item.category === selectedCategory);

  return (
    <section id="work" className="relative py-20 md:py-28 bg-slate-50/70 overflow-hidden border-t border-slate-200/80">
      {/* Background shape elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-18">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 mb-4 shadow-xs">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                Real Client Results
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-slate-900 leading-tight">
              Proven Track Record <br />
              <span className="text-navy-gradient">Across India & Global Markets.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-white border border-slate-200 shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider bg-slate-100 text-slate-700 uppercase">
                    {study.category}
                  </span>
                  <span className="text-xs font-semibold text-blue-600">
                    {study.industry}
                  </span>
                </div>

                {/* Client Name */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {study.client}
                </h3>

                {/* Primary Metric Callout */}
                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 mb-5">
                  <div className="text-[10px] text-blue-900 font-bold uppercase tracking-wider block mb-1">
                    Key Result
                  </div>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-blue-700 tracking-tight">
                    {study.impactHighlight}
                  </div>
                  <div className="text-xs text-slate-600 mt-1 font-medium">
                    {study.impactSecondary}
                  </div>
                </div>

                {/* Condensed Challenge & Solution */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 line-clamp-2">
                  {study.solution}
                </p>

                {/* Metrics Pill Grid */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {study.metrics.slice(0, 2).map((m) => (
                    <div key={m.label} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[9px] text-slate-500 block uppercase truncate font-medium">
                        {m.label}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalStudy(study)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                >
                  <span>Read Full Case Study</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenContact(`Inquiry regarding: ${study.client}`)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-all border border-slate-200"
                  aria-label={`Inquire about results for ${study.client}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-bold text-lg sm:text-xl text-slate-900">
              Want to see detailed numbers for your specific industry?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Browse all 8+ verified case studies with complete challenge and solution breakdowns.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            {onNavigate && (
              <button
                onClick={() => onNavigate('case-study')}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all"
              >
                All Case Studies
              </button>
            )}
            <button
              onClick={() => onOpenContact('Strategy Session for Industry Benchmark')}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-xs transition-all"
            >
              Book Strategy Session
            </button>
          </div>
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      <AnimatePresence>
        {activeModalStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveModalStudy(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-5">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    {activeModalStudy.category} • {activeModalStudy.industry}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1">
                    {activeModalStudy.client}
                  </h3>
                </div>

                {/* Primary Metric Banner */}
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100">
                  <span className="text-[10px] text-blue-800 font-bold uppercase tracking-wider">Key Impact</span>
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-blue-700 mt-0.5">
                    {activeModalStudy.impactHighlight}
                  </div>
                  <div className="text-xs text-slate-600">{activeModalStudy.impactSecondary}</div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {activeModalStudy.metrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-[10px] text-slate-500 font-medium uppercase truncate">{m.label}</div>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80">
                    <span className="text-xs text-amber-800 font-bold block mb-1">The Problem They Faced</span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{activeModalStudy.challenge}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80">
                    <span className="text-xs text-blue-800 font-bold block mb-1">What Paarami Built & Delivered</span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{activeModalStudy.solution}</p>
                  </div>
                </div>

                {/* Client Quote */}
                <blockquote className="p-4 rounded-xl bg-slate-50 border-l-4 border-blue-600 text-xs sm:text-sm text-slate-700 italic">
                  "{activeModalStudy.featuredQuote}"
                  <span className="block not-italic text-xs font-semibold text-slate-900 mt-2">— {activeModalStudy.clientPerson}</span>
                </blockquote>

                <div className="pt-3 border-t border-slate-100 flex justify-end gap-3">
                  <button
                    onClick={() => {
                      const client = activeModalStudy.client;
                      setActiveModalStudy(null);
                      onOpenContact(`Inquiry regarding case study: ${client}`);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-xs"
                  >
                    Discuss Similar Strategy For My Business
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
