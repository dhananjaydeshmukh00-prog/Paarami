import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CASE_STUDIES } from '../data/paaramiData';
import { CaseStudy, PageRoute } from '../types';
import { 
  Briefcase, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Filter, 
  Sparkles, 
  Building2, 
  ChevronRight,
  ExternalLink,
  Award,
  X
} from 'lucide-react';

interface CaseStudyPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContact: (source?: string) => void;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ onNavigate, onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  const categories = ['All', 'Healthcare', 'EdTech', 'B2B', 'Consumer'];

  const filteredStudies = selectedCategory === 'All' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(s => s.category === selectedCategory);

  return (
    <div className="pt-28 pb-24 relative overflow-hidden bg-slate-50/60">
      {/* Background shape elements & gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-100/40 via-indigo-50/20 to-transparent pointer-events-none" />
      <div className="absolute top-32 left-10 w-96 h-96 bg-amber-200/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-80 right-10 w-96 h-96 bg-blue-200/25 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6">
          <button onClick={() => onNavigate('home')} className="hover:text-blue-600 transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="text-blue-600">Case Studies</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Briefcase className="w-3.5 h-3.5 text-blue-600" />
            Verified Case Studies
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Real Business Problems. <br />
            <span className="text-navy-gradient">Measurable Financial Returns.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We measure our contribution by your bank account balance, clinic footfalls, and revenue growth. Explore verified transformations across healthcare, enterprise B2B, and education.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-blue-600">6X</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">Verified Clinical ROAS</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-indigo-600">75K+</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">Global Attendees</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-blue-700">210K+</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">Students Enrolled</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-amber-600">1000%</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">Organic Traffic Lift</div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white text-slate-600 border border-slate-200/90 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={study.imageUrl}
                    alt={study.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-bold shadow-xs">
                      {study.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-white text-[11px] font-bold shadow-xs">
                      {study.industry}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-display font-bold leading-snug">
                      {study.client}
                    </h3>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-blue-50/50 border border-blue-100/80 mb-6">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                        Primary Impact
                      </div>
                      <div className="text-xl sm:text-2xl font-display font-extrabold text-blue-900 mt-0.5">
                        {study.impactHighlight}
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Efficiency Metric
                      </div>
                      <div className="text-sm sm:text-base font-bold text-slate-800 mt-1">
                        {study.impactSecondary}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                        The Challenge
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                        Paarami Strategic Solution
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {study.featuredQuote && (
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 mb-6 text-xs italic text-slate-700 leading-relaxed">
                      “{study.featuredQuote}”
                      {study.clientPerson && (
                        <div className="text-[11px] font-semibold text-blue-600 not-italic mt-2">
                          — {study.clientPerson}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {study.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 sm:px-8 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveStudy(study)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                >
                  View Complete Breakdown <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenContact(`Inquiry regarding ${study.client} case study`)}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold transition-colors duration-200 shadow-xs"
                >
                  Scale Similar Model
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for detailed study breakdown */}
        {activeStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 relative">
              <button
                onClick={() => setActiveStudy(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                <span>{activeStudy.category}</span>
                <span>•</span>
                <span>{activeStudy.industry}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                {activeStudy.client}
              </h2>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
                  Key Business Outcome
                </div>
                <div className="text-2xl font-extrabold text-blue-900">
                  {activeStudy.impactHighlight}
                </div>
                <div className="text-xs font-medium text-slate-600 mt-1">
                  {activeStudy.impactSecondary}
                </div>
              </div>

              <div className="space-y-6 text-sm text-slate-700">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Client Challenge & Baseline
                  </h3>
                  <p className="leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {activeStudy.challenge}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Paarami Growth Intervention
                  </h3>
                  <p className="leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {activeStudy.solution}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Verified Execution Metrics
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {activeStudy.metrics.map((m, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 text-center">
                        <div className="text-xs text-slate-500">{m.label}</div>
                        <div className="text-base font-extrabold text-slate-900 mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => setActiveStudy(null)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const client = activeStudy.client;
                    setActiveStudy(null);
                    onOpenContact(`Growth strategy audit based on ${client}`);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md hover:shadow-blue-500/20"
                >
                  Discuss This Strategy For My Business
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm text-center max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
            Ready For Verifiable Growth Numbers Like These?
          </h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto mb-8">
            Let our senior partners conduct an audit of your current ad spend, search rankings, and conversion rates to show you exactly where revenue is leaking.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('book-a-consultation')}
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-md hover:shadow-blue-500/25 transition-all"
            >
              Book 30-Minute Growth Audit
            </button>
            <button
              onClick={() => onNavigate('digital-marketing-approach')}
              className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold transition-colors"
            >
              See Our 6-Step Methodology
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
