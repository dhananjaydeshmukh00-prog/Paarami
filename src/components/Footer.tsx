import React from 'react';
import { ArrowUp, MapPin, Mail, Phone, ShieldCheck, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate?: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (route: PageRoute) => {
    if (onNavigate) {
      onNavigate(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800 text-slate-300 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800">
          {/* Brand Identity Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-600 text-white font-display font-black text-lg shadow-md">
                P
              </div>
              <span className="font-display font-black text-xl tracking-tight text-white flex items-center gap-2">
                PAARAMI
                <span className="text-amber-400 text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 bg-amber-400/10 border border-amber-400/30 rounded">
                  DIGITAL
                </span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
              A premier digital growth partner engineering bespoke brand systems, sub-second web platforms, algorithmic demand generation, and automated revenue pipelines.
            </p>

            <div className="pt-2 text-xs font-mono text-slate-400 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Headquarters: Dadar West, Mumbai 400028, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>contact@paarami.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>+91 98670 55734 / +91 98200 87349</span>
              </div>
            </div>
          </div>

          {/* Dedicated Pages Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              Agency Pages
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('team')} className="hover:text-white transition-colors">
                  Executive Team (/team/)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('digital-marketing-approach')} className="hover:text-white transition-colors">
                  Growth Approach (/approach/)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('case-study')} className="hover:text-white transition-colors">
                  Verified Case Studies (/case-study/)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('portfolio')} className="hover:text-white transition-colors">
                  Client Portfolio (/portfolio/)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('reviews')} className="hover:text-white transition-colors">
                  Client Reviews (/reviews/)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('digital-marketing-blogs')} className="hover:text-white transition-colors">
                  Marketing Insights & Blogs
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('book-a-consultation')} className="text-amber-400 font-bold hover:text-amber-300 transition-colors flex items-center gap-1">
                  Book A Consultation <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Benchmark Results (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400">
              Key Milestones
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li><span className="text-slate-300">Aanvii Hearing:</span> 6X ROAS</li>
              <li><span className="text-slate-300">Diabetes Care:</span> 75K+ Global</li>
              <li><span className="text-slate-300">Executive EdTech:</span> 210K+</li>
              <li><span className="text-slate-300">STEM Learning:</span> 1000% Boost</li>
              <li><span className="text-slate-300">Luxury Marine:</span> 76K Leads</li>
            </ul>
          </div>

          {/* Governance & Architecture (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              Governance
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>ISO 9001:2015 Certified</li>
              <li>Google Certified Partner</li>
              <li>Meta Media Architect</li>
              <li>Designated LLP Governance</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Scroll-to-Top and ISO statement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            © {new Date().getFullYear()} Paarami Digital Consulting LLP. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> ISO 9001:2015 Certified
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

