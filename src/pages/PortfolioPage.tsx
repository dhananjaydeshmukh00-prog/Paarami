import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_ITEMS } from '../data/paaramiData';
import { PortfolioItem, PageRoute } from '../types';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  Code, 
  Layers, 
  Sparkles,
  Zap,
  TrendingUp,
  Cpu
} from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContact: (source?: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate, onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Lead Generation', 'Branding', 'Technology', 'SEO & Content'];

  const filteredItems = selectedCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-28 pb-24 relative overflow-hidden bg-slate-50/60">
      {/* Background shape elements & gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-100/40 via-indigo-50/20 to-transparent pointer-events-none" />
      <div className="absolute top-28 right-10 w-96 h-96 bg-blue-200/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-96 left-10 w-80 h-80 bg-amber-200/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6">
          <button onClick={() => onNavigate('home')} className="hover:text-blue-600 transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="text-blue-600">Selected Portfolio</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <FolderGit2 className="w-3.5 h-3.5 text-blue-600" />
            Digital Work & Creative Deployments
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Engineered For Scale. <br />
            <span className="text-navy-gradient">Crafted For Category Prestige.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            A curated showcase of high-performance ad architectures, sub-second web platforms, semantic SEO networks, and revenue-automating WhatsApp pipelines.
          </p>
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

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Preview */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/95 text-slate-800 text-[11px] font-bold shadow-xs">
                      {item.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold shadow-xs">
                      {item.industry}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-1">
                      {item.client}
                    </div>
                    <h3 className="text-xl font-display font-bold leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  {/* Metric Ribbon */}
                  <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100 text-blue-900 text-xs font-bold flex items-center gap-2 mb-6">
                    <TrendingUp className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Verified Result: {item.metricHighlight}</span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Deliverables */}
                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                      Delivered Components
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.deliverables.map((deliv, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span className="truncate">{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Pills */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Tools & Stack Deployed
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-6 sm:px-8 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onOpenContact(`Inquiry regarding portfolio item: ${item.title}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                >
                  Request Similar Project Architecture <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('case-study')}
                  className="px-3.5 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
                >
                  Case Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm text-center max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
            Have A Project In Mind?
          </h3>
          <p className="text-slate-600 text-sm mb-8">
            Tell us about your industry, current marketing setup, and goals. We will provide a transparent assessment of feasibility and timeline.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('book-a-consultation')}
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-md transition-all"
            >
              Book A Consultation
            </button>
            <button
              onClick={() => onNavigate('digital-marketing-approach')}
              className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold transition-colors"
            >
              View Our Approach
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
