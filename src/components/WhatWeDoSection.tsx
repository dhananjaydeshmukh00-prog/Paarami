import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Smartphone, Target, Cpu, Check, Zap, Gauge, ShieldCheck } from 'lucide-react';

interface WhatWeDoSectionProps {
  onOpenContact: (pillarTitle?: string) => void;
}

export const WhatWeDoSection: React.FC<WhatWeDoSectionProps> = ({ onOpenContact }) => {
  const [selectedSwatch, setSelectedSwatch] = useState<number>(1);

  const swatches = [
    { name: 'Classic Navy', hex: '#1e3a8a', role: 'Trust' },
    { name: 'Vibrant Blue', hex: '#2563eb', role: 'Action' },
    { name: 'Warm Amber', hex: '#d97706', role: 'Warmth' },
    { name: 'Cool Slate', hex: '#64748b', role: 'Balance' },
  ];

  return (
    <section id="what-we-do" className="relative py-20 md:py-28 bg-white overflow-hidden border-t border-slate-200/80">
      {/* Subtle shape and gradient accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-18">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                Core Services & Capabilities
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-slate-900 leading-tight">
              Four Practical Pillars <br />
              <span className="text-navy-gradient">That Drive Real Business Growth.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 max-w-md font-normal leading-relaxed">
            Everything your company needs to attract high-intent inquiries, build a respected brand reputation, and close more business without wasted ad spend.
          </p>
        </div>

        {/* Bento Grid (Clean Light Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Bento Card 1: Brand Design (Span 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-7 rounded-3xl border border-slate-200/90 bg-slate-50/70 p-7 sm:p-9 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-amber-700 uppercase block">
                      PILLAR 01
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                      Brand Design & Market Positioning
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => onOpenContact('Brand Design & Market Positioning')}
                  className="w-9 h-9 rounded-full bg-white hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-all border border-slate-200 shadow-xs"
                  aria-label="Inquire about Brand Design"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-xl">
                We make your brand look established and trustworthy. From logos and marketing collateral to messaging, we ensure clients see you as the premier choice in your field.
              </p>
            </div>

            {/* Interactive Design Palette Specimen */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100 font-semibold">
                <span>Visual Brand Identity System</span>
                <span className="text-amber-700 font-bold">Premium Perception</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {swatches.map((sw, idx) => (
                  <div
                    key={sw.name}
                    onClick={() => setSelectedSwatch(idx)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      selectedSwatch === idx
                        ? 'bg-blue-50/50 border-blue-500 shadow-xs'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div
                      className="w-full h-8 rounded-lg mb-2 border border-slate-200 shadow-xs"
                      style={{ backgroundColor: sw.hex }}
                    />
                    <div className="text-[11px] font-bold text-slate-800 truncate">{sw.name}</div>
                    <div className="text-[9px] text-slate-500">{sw.role}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Complete Design System
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Sales Presentations
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Consistent Brand Voice
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: Fast Websites (Span 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="md:col-span-5 rounded-3xl border border-slate-200/90 bg-slate-50/70 p-7 sm:p-9 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-blue-700 uppercase block">
                      PILLAR 02
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                      Modern, Fast Websites
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => onOpenContact('Modern Fast Websites')}
                  className="w-9 h-9 rounded-full bg-white hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-all border border-slate-200 shadow-xs"
                  aria-label="Inquire about Websites"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Fast-loading websites built for mobile devices with clear call-to-action buttons, so visitors contact you immediately instead of bouncing away.
              </p>
            </div>

            {/* Performance Metric Box */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-slate-900">Speed & Mobile Usability</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  99/100 SPEED
                </span>
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between text-xs text-slate-600">
                  <span>Average Page Load</span>
                  <span className="font-bold text-blue-700">&lt; 1.0 Second</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-[95%] h-full bg-blue-600 rounded-full" />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-600">
                <span className="text-emerald-700 font-semibold">✓ 1-Tap Call & WhatsApp buttons</span>
                <span>Works on All Devices</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 3: Ad Campaigns (Span 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="md:col-span-5 rounded-3xl border border-slate-200/90 bg-slate-50/70 p-7 sm:p-9 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-blue-700 uppercase block">
                      PILLAR 03
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                      High-Intent Ads (Google & Meta)
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => onOpenContact('High-Intent Ad Campaigns')}
                  className="w-9 h-9 rounded-full bg-white hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-all border border-slate-200 shadow-xs"
                  aria-label="Inquire about Ads"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Target people right when they are searching to buy. We eliminate wasted clicks and optimize ads to produce qualified customer phone calls and inquiries.
              </p>
            </div>

            {/* Metric Indicator Card */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] text-slate-500 block mb-0.5">Verified Inquiries</span>
                  <span className="text-lg font-display font-extrabold text-blue-700">1.9 Million+</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] text-slate-500 block mb-0.5">Cities Covered</span>
                  <span className="text-lg font-display font-extrabold text-slate-900">545+ Markets</span>
                </div>
              </div>
              <div className="text-[11px] text-slate-600 flex items-center justify-between pt-1">
                <span>Google Search & Maps</span>
                <span className="text-blue-700 font-bold">Up to 6X Return on Ad Spend</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 4: WhatsApp & Lead Automation (Span 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:col-span-7 rounded-3xl border border-slate-200/90 bg-slate-50/70 p-7 sm:p-9 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-emerald-700 uppercase block">
                      PILLAR 04
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                      WhatsApp & Automated Lead Flow
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => onOpenContact('WhatsApp & Automated Lead Flow')}
                  className="w-9 h-9 rounded-full bg-white hover:bg-emerald-600 hover:text-white text-slate-700 flex items-center justify-center transition-all border border-slate-200 shadow-xs"
                  aria-label="Inquire about Lead Automation"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-xl">
                Never lose an inquiry again. When a prospect fills a form, your team receives an instant alert on WhatsApp and CRM in under 30 seconds to close the sale.
              </p>
            </div>

            {/* Instant Alert Simulation */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100 font-semibold">
                <span className="flex items-center gap-2 text-emerald-700 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  INSTANT LEAD DISPATCH
                </span>
                <span className="text-slate-900 font-bold">&lt; 30 SECONDS</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50/60 border border-emerald-200">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  ✓
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-slate-900 truncate">Qualified Customer Inquiry Verified</div>
                  <div className="text-[11px] text-slate-600">Dispatched directly to executive WhatsApp & CRM</div>
                </div>
                <span className="text-[10px] text-emerald-700 font-bold shrink-0">Instant Alert</span>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-600 pt-1">
                <span>Leads Missed: <strong className="text-emerald-700">0%</strong></span>
                <span>Integrations: <strong className="text-slate-800">WhatsApp, Zoho, HubSpot, Salesforce</strong></span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
