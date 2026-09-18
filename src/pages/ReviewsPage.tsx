import React, { useState } from 'react';
import { motion } from 'motion/react';
import { REVIEWS } from '../data/paaramiData';
import { ReviewItem, PageRoute } from '../types';
import { 
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Award, 
  Sparkles,
  Quote,
  Building,
  ThumbsUp
} from 'lucide-react';

interface ReviewsPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContact: (source?: string) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate, onOpenContact }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const sources = ['All', 'Google Reviews', 'Clutch', 'GoodFirms', 'Direct Client'];

  const filteredReviews = selectedFilter === 'All'
    ? REVIEWS
    : REVIEWS.filter(r => r.source === selectedFilter);

  return (
    <div className="pt-28 pb-24 relative overflow-hidden bg-slate-50/60">
      {/* Background shape elements & gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-100/40 via-indigo-50/20 to-transparent pointer-events-none" />
      <div className="absolute top-24 left-10 w-96 h-96 bg-amber-200/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-80 right-10 w-96 h-96 bg-blue-200/25 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6">
          <button onClick={() => onNavigate('home')} className="hover:text-blue-600 transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="text-blue-600">Client Reviews & Testimonials</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/60 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            Verified Client Feedback
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Trusted by 125+ Founders, <br />
            <span className="text-navy-gradient">CMOs & Enterprise Leaders</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Read unfiltered feedback from leaders whose businesses scaled with Paarami. No manufactured hype—just tangible, verified outcomes.
          </p>

          {/* Social Proof Badges Grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
              <div className="flex items-center justify-center gap-1 text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-2xl font-display font-extrabold text-slate-900">4.9 / 5.0</div>
              <div className="text-[11px] font-semibold text-slate-500">Google Verified Rating</div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
              <div className="text-2xl font-display font-extrabold text-blue-600">125+</div>
              <div className="text-xs font-semibold text-slate-900 mt-1">Direct Reviews</div>
              <div className="text-[11px] text-slate-500">Across Google & Clutch</div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
              <div className="text-2xl font-display font-extrabold text-indigo-600">98.4%</div>
              <div className="text-xs font-semibold text-slate-900 mt-1">Client Retention</div>
              <div className="text-[11px] text-slate-500">Annual Retainers</div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
              <div className="text-2xl font-display font-extrabold text-amber-600">₹450Cr+</div>
              <div className="text-xs font-semibold text-slate-900 mt-1">Revenue Influenced</div>
              <div className="text-[11px] text-slate-500">For Client Portfolios</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {sources.map((src) => (
            <button
              key={src}
              onClick={() => setSelectedFilter(src)}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                selectedFilter === src
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white text-slate-600 border border-slate-200/90 hover:bg-slate-50'
              }`}
            >
              {src}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredReviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07, duration: 0.4 }}
              className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[10px] font-bold text-slate-600 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-blue-600" />
                    {review.source}
                  </span>
                </div>

                {review.impactMetric && (
                  <div className="inline-block px-3 py-1 rounded-xl bg-blue-50 border border-blue-100 text-blue-800 text-xs font-bold mb-4">
                    Impact: {review.impactMetric}
                  </div>
                )}

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic relative">
                  <span className="text-blue-400 font-serif text-2xl leading-none mr-1">“</span>
                  {review.reviewText}
                  <span className="text-blue-400 font-serif text-2xl leading-none ml-1">”</span>
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
                <img
                  src={review.avatarUrl}
                  alt={review.author}
                  className="w-12 h-12 rounded-xl object-cover border border-slate-200 bg-slate-100"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {review.author}
                  </h4>
                  <div className="text-xs text-slate-600">
                    {review.position}, <span className="font-semibold text-slate-800">{review.company}</span>
                  </div>
                  <div className="text-[11px] text-blue-600 font-medium">
                    {review.industry}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Collaboration Callout */}
        <div className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
            <ThumbsUp className="w-3.5 h-3.5 text-amber-400" />
            Partner With Confidence
          </div>
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
            Experience The Same Commercial Growth In Your Business
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8">
            Speak directly with Sushant Gaikwad and Tanuja Gaikwad to explore how Paarami can structure your customer acquisition funnel.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('book-a-consultation')}
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2"
            >
              Book 30-Minute Growth Audit
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('case-study')}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
            >
              Examine Verified Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
