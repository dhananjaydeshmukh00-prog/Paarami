import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import { PageRoute } from '../types';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenContact: (initialPillar?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; route?: PageRoute; href?: string }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Approach', route: 'digital-marketing-approach' },
    { label: 'Case Studies', route: 'case-study' },
    { label: 'Portfolio', route: 'portfolio' },
    { label: 'Reviews', route: 'reviews' },
    { label: 'Team', route: 'team' },
    { label: 'Blogs', route: 'digital-marketing-blogs' },
  ];

  const handleNavClick = (route?: PageRoute, href?: string) => {
    setMobileMenuOpen(false);
    if (route) {
      onNavigate(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href) {
      if (currentRoute !== 'home') {
        onNavigate('home');
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || currentRoute !== 'home'
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 py-3 shadow-sm'
          : 'bg-white/80 backdrop-blur-md py-4 sm:py-5 border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-3 text-left focus:outline-none rounded-lg"
          aria-label="Paarami Digital Homepage"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 border border-blue-600/30 shadow-md shadow-blue-900/15 text-white font-display font-black text-xl tracking-tighter transition-transform group-hover:scale-105">
            <span>P</span>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-amber-500 rounded-full border-2 border-white shadow-xs"></span>
          </div>

          <div className="flex flex-col">
            <span className="font-display font-black text-xl tracking-tight text-slate-950 group-hover:text-blue-700 transition-colors flex items-center gap-1.5">
              PAARAMI
              <span className="text-blue-700 text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 bg-blue-50 border border-blue-200 rounded">
                DIGITAL
              </span>
            </span>
            <span className="text-[10px] tracking-wider font-mono text-slate-500 font-semibold uppercase -mt-0.5">
              Digital Growth Partner
            </span>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 border border-slate-200/90 px-3 py-1.5 rounded-full shadow-inner">
          {navItems.map((item) => {
            const isActive = item.route && currentRoute === item.route;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.route, item.href)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-white/80'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onNavigate('book-a-consultation')}
            className={`group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 shadow-sm cursor-pointer ${
              currentRoute === 'book-a-consultation'
                ? 'bg-blue-700 text-white shadow-md'
                : 'text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-900" />
            <span>Book Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onNavigate('book-a-consultation')}
            className="px-3.5 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 rounded-full shadow-xs"
          >
            Book Call
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-950 bg-slate-100 border border-slate-200 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-2xl px-6 py-5 space-y-3 shadow-xl"
          >
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = item.route && currentRoute === item.route;
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.route, item.href)}
                    className={`w-full text-left px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600 font-bold'
                        : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('book-a-consultation');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-xs"
              >
                <span>Book 30-Min Diagnostic Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 text-xs font-semibold text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-50"
              >
                Quick Inquiry Form
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

