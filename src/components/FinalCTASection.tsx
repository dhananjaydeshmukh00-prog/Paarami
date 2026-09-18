import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Phone, Mail, MapPin, CheckCircle2, Calendar } from 'lucide-react';
import { PageRoute } from '../types';

interface FinalCTASectionProps {
  onOpenContact: (topic?: string) => void;
  onNavigate?: (route: PageRoute) => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenContact, onNavigate }) => {
  const [selectedInterest, setSelectedInterest] = useState<string>('Full Digital Growth');

  const interests = [
    'Full Digital Growth',
    'Brand & Logo Design',
    'Fast Modern Website',
    'Google & Meta Ads',
    'WhatsApp Lead Flow',
  ];

  return (
    <section className="relative py-20 md:py-28 bg-slate-50/70 overflow-hidden border-t border-slate-200/80">
      {/* Background shape elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-blue-100/40 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 lg:p-16 shadow-lg text-center overflow-hidden"
        >
          {/* Top Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
              Start Your Growth Conversation
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto mb-6">
            Ready to Accelerate Your <br />
            <span className="text-navy-gradient">Business Growth Online?</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed mb-8 font-normal">
            Speak directly with our senior growth directors. We will analyze your current digital presence and provide a clear, actionable roadmap.
          </p>

          {/* Interest Selector Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl mx-auto">
            {interests.map((interest) => (
              <button
                key={interest}
                onClick={() => setSelectedInterest(interest)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  selectedInterest === interest
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs font-bold'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                {interest}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            {onNavigate && (
              <button
                onClick={() => onNavigate('book-a-consultation')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book 30-Min Strategy Call</span>
              </button>
            )}

            <button
              onClick={() => onOpenContact(selectedInterest)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-[0.98] text-slate-800 font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Send Message Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Direct Headquarters Contact Bar */}
          <div className="pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>Dadar West, Mumbai 400028</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <a href="tel:+919867055734" className="hover:text-blue-600 transition-colors font-medium">
                +91 98670 55734
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-amber-600" />
              <a href="mailto:contactus@paarami.com" className="hover:text-blue-600 transition-colors font-medium">
                contactus@paarami.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
