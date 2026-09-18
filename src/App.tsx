/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhatWeDoSection } from './components/WhatWeDoSection';
import { ParallaxStorytellingSection } from './components/ParallaxStorytellingSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { ImpactNumbersSection } from './components/ImpactNumbersSection';
import { HowPaaramiWorksSection } from './components/HowPaaramiWorksSection';
import { ClientTrustSection } from './components/ClientTrustSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

// Pages
import { TeamPage } from './pages/TeamPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { ApproachPage } from './pages/ApproachPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { BlogsPage } from './pages/BlogsPage';
import { BookConsultationPage } from './pages/BookConsultationPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState('Digital Growth Partnership');

  // Handle browser URL hash or state synchronization
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validRoutes: PageRoute[] = [
        'home',
        'team',
        'case-study',
        'digital-marketing-approach',
        'reviews',
        'portfolio',
        'digital-marketing-blogs',
        'book-a-consultation'
      ];
      if (validRoutes.includes(hash as PageRoute)) {
        setCurrentRoute(hash as PageRoute);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.location.hash = route === 'home' ? '' : `#/${route}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContact = (topic?: string) => {
    if (topic) {
      setContactTopic(topic);
    } else {
      setContactTopic('Digital Growth Partnership');
    }
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white relative font-sans">
      {/* Sticky Header Navigation */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentRoute === 'home' && (
          <>
            {/* SECTION 1 — HERO */}
            <HeroSection
              onOpenContact={handleOpenContact}
              onNavigate={handleNavigate}
            />

            {/* SECTION 2 — WHAT PAARAMI DOES (Apple Bento Grid) */}
            <WhatWeDoSection onOpenContact={handleOpenContact} />

            {/* SECTION 3 — STRATEGIC ROADMAP (Apple Interactive Milestones) */}
            <ParallaxStorytellingSection onOpenContact={handleOpenContact} />

            {/* SECTION 4 — SELECTED WORK (Apple Showcase Case Studies) */}
            <SelectedWorkSection
              onOpenContact={handleOpenContact}
              onNavigate={handleNavigate}
            />

            {/* SECTION 5 — VERIFIED METRICS */}
            <ImpactNumbersSection onOpenContact={handleOpenContact} />

            {/* SECTION 6 — METHODOLOGY (Think. Create. Grow.) */}
            <HowPaaramiWorksSection
              onOpenContact={handleOpenContact}
              onNavigate={handleNavigate}
            />

            {/* SECTION 7 — CLIENT TRUST & CERTIFICATIONS */}
            <ClientTrustSection onOpenContact={() => handleOpenContact('Enterprise Trust & Certifications')} />

            {/* SECTION 8 — FINAL CTA INVITATION */}
            <FinalCTASection
              onOpenContact={handleOpenContact}
              onNavigate={handleNavigate}
            />
          </>
        )}

        {currentRoute === 'team' && (
          <TeamPage onNavigate={handleNavigate} onOpenContact={handleOpenContact} />
        )}

        {currentRoute === 'case-study' && (
          <CaseStudyPage onNavigate={handleNavigate} onOpenContact={handleOpenContact} />
        )}

        {currentRoute === 'digital-marketing-approach' && (
          <ApproachPage onNavigate={handleNavigate} onOpenContact={handleOpenContact} />
        )}

        {currentRoute === 'reviews' && (
          <ReviewsPage onNavigate={handleNavigate} onOpenContact={handleOpenContact} />
        )}

        {currentRoute === 'portfolio' && (
          <PortfolioPage onNavigate={handleNavigate} onOpenContact={handleOpenContact} />
        )}

        {currentRoute === 'digital-marketing-blogs' && (
          <BlogsPage onNavigate={handleNavigate} onOpenContact={handleOpenContact} />
        )}

        {currentRoute === 'book-a-consultation' && (
          <BookConsultationPage onNavigate={handleNavigate} onOpenContact={handleOpenContact} />
        )}
      </main>

      {/* Modern Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Consultation Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        initialTopic={contactTopic}
      />
    </div>
  );
}
