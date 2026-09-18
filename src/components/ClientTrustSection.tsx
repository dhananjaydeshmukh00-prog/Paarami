import React from 'react';
import { motion } from 'motion/react';
import { CLIENT_LOGOS } from '../data/paaramiData';
import { Shield, CheckCircle2, Award } from 'lucide-react';

interface ClientTrustSectionProps {
  onOpenContact: () => void;
}

export const ClientTrustSection: React.FC<ClientTrustSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 mb-4 shadow-xs">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
              Trusted Partnerships
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight">
            Trusted By Growing Companies <br />
            <span className="text-navy-gradient">& Industry Pioneers.</span>
          </h2>
          <p className="mt-3 text-slate-600 text-xs sm:text-sm font-normal">
            Strategic digital growth partner to healthcare clinics, education institutions, manufacturing leaders, and consumer retail brands.
          </p>
        </div>

        {/* Client Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
          {CLIENT_LOGOS.map((client) => (
            <div
              key={client.id}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 hover:bg-white transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer shadow-xs hover:shadow-sm"
            >
              <span className="font-display font-bold text-xs text-slate-800 group-hover:text-blue-600 transition-colors">
                {client.name}
              </span>
              <span className="text-[10px] text-slate-500 mt-0.5">
                {client.industry}
              </span>
            </div>
          ))}
        </div>

        {/* Security & Quality Certification Strip */}
        <div className="mt-14 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-slate-600 text-xs">
          <div className="flex items-center gap-2 font-medium">
            <Shield className="w-4 h-4 text-blue-600" />
            <span>ISO 9001:2015 Quality Management Certified</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Google & Meta Certified Partner</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <span>Headquartered in Dadar West, Mumbai</span>
          </div>
        </div>
      </div>
    </section>
  );
};
