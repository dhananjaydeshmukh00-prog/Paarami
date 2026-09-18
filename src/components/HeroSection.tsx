import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Smartphone, Eye, PhoneCall, TrendingUp, CheckCircle2, Shield, Calendar } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact: (initialPillar?: string) => void;
  onNavigate?: (route: any) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact, onNavigate }) => {
  const [activeStage, setActiveStage] = useState<number>(2);

  const pillars = [
    {
      id: 0,
      title: 'Brand & Creative Identity',
      shortTitle: 'Brand Design',
      simpleBenefit: 'Make your business look world-class and earn customer trust instantly.',
      icon: Sparkles,
      tag: 'Reputation & Trust',
    },
    {
      id: 1,
      title: 'Fast Modern Websites',
      shortTitle: 'Web & Tech',
      simpleBenefit: 'Clean, lightning-fast websites designed to turn visitors into inquiries.',
      icon: Smartphone,
      tag: '< 1s Speed',
    },
    {
      id: 2,
      title: 'High-Intent Ad Campaigns',
      shortTitle: 'Google & Meta Ads',
      simpleBenefit: 'Reach genuine buyers who are actively searching for your services today.',
      icon: Eye,
      tag: '1.9M+ Inquiries Generated',
    },
    {
      id: 3,
      title: 'Instant Lead & WhatsApp Automation',
      shortTitle: 'Lead Automation',
      simpleBenefit: 'Connect leads to your sales team in 30 seconds via automated WhatsApp.',
      icon: PhoneCall,
      tag: 'Sub-30s Response',
    },
    {
      id: 4,
      title: 'Continuous Revenue Growth',
      shortTitle: 'Compounding Scale',
      simpleBenefit: 'Data-driven monthly improvements that maximize your marketing return.',
      icon: TrendingUp,
      tag: '14+ Years Track Record',
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50/70">
      {/* Background shape elements & Apple-style soft gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-gradient-to-b from-blue-100/40 via-indigo-50/20 to-transparent pointer-events-none" />
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-40 right-10 w-[450px] h-[450px] bg-amber-200/25 rounded-full blur-[130px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-light-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Status Capsule */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 shadow-xs" />
            <span className="text-xs font-semibold tracking-wide text-slate-700">
              Your Strategic Digital Growth Partner <span className="text-slate-300">•</span> ISO 9001:2015 Certified
            </span>
          </motion.div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-slate-900 leading-[1.1]"
          >
            We Help Ambitious Brands <br />
            <span className="text-navy-gradient">Grow Faster Online.</span>
          </motion.h1>
        </div>

        {/* Supporting Subtitle in simple language */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            Paarami designs modern websites, manages profitable Google & Meta ad campaigns, and automates customer inquiries—delivering real business revenue you can measure.
          </motion.p>
        </div>

        {/* Hero Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => {
              if (onNavigate) {
                onNavigate('book-a-consultation');
              } else {
                onOpenContact('Home Hero Consultation');
              }
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-600/20 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer group"
          >
            <Calendar className="w-4 h-4 text-blue-200" />
            <span>Book 30-Minute Growth Audit</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => {
              if (onNavigate) {
                onNavigate('case-study');
              } else {
                const el = document.querySelector('#work');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider transition-all duration-200 text-center shadow-xs"
          >
            View Real Case Studies
          </button>
        </motion.div>

        {/* Apple-grade Interactive Growth Bento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-3xl border border-slate-200/90 bg-white/90 p-6 sm:p-8 lg:p-10 shadow-sm backdrop-blur-xl"
        >
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100 mb-8">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                The Complete Paarami Growth System
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
              <span className="text-amber-700 flex items-center gap-1.5 font-bold">
                <Shield className="w-3.5 h-3.5 text-amber-500" /> 14+ Years Industry Experience
              </span>
              <span>•</span>
              <span className="font-semibold text-slate-700">1,000+ Successful Campaigns</span>
            </div>
          </div>

          {/* Interactive Flow Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = activeStage === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveStage(pillar.id)}
                  className={`text-left p-5 rounded-2xl transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? 'bg-blue-50/70 border-blue-500 shadow-sm'
                      : 'bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-transform ${
                        isActive
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400">
                      STEP 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xs text-slate-900 mb-1">
                    {pillar.shortTitle}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                    {pillar.simpleBenefit}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-100 text-[10px] font-bold text-blue-600">
                    {pillar.tag}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Details Card */}
          <div className="mt-8 pt-6 border-t border-slate-100 bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200/60">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    Step 0{activeStage + 1}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-xs font-bold text-slate-900">
                    {pillars[activeStage].title}
                  </span>
                </div>
                <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                  {pillars[activeStage].simpleBenefit}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => onOpenContact(`Inquiry regarding: ${pillars[activeStage].title}`)}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-xs"
                >
                  Talk To Our Specialist →
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
