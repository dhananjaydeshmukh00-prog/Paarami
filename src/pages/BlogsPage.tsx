import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../data/paaramiData';
import { BlogPost, PageRoute } from '../types';
import { 
  BookOpen, 
  Search, 
  Clock, 
  Calendar, 
  ArrowRight, 
  User, 
  Tag, 
  Share2, 
  X,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface BlogsPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContact: (source?: string) => void;
}

export const BlogsPage: React.FC<BlogsPageProps> = ({ onNavigate, onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = ['All', 'SEO & AI', 'Performance Marketing', 'Healthcare', 'Automation', 'Analytics'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 relative overflow-hidden bg-slate-50/60">
      {/* Background shape elements & gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-100/40 via-indigo-50/20 to-transparent pointer-events-none" />
      <div className="absolute top-28 left-10 w-96 h-96 bg-amber-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-96 right-10 w-96 h-96 bg-blue-200/25 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6">
          <button onClick={() => onNavigate('home')} className="hover:text-blue-600 transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="text-blue-600">Digital Marketing Insights & Blogs</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            Executive Growth Insights
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Frameworks, Data & Strategies <br />
            <span className="text-navy-gradient">From The Frontlines of Growth</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Direct playbooks on generative AI search (GEO), healthcare patient acquisition, unit-economic ROI, and WhatsApp revenue automation.
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-lg mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search topics (e.g., AI SEO, Healthcare, WhatsApp, ROAS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200/90 text-sm text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
            />
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

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07, duration: 0.4 }}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => setActivePost(post)}
            >
              <div>
                {/* Header Image */}
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/95 text-blue-700 text-[11px] font-bold shadow-xs">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span>{post.publishDate}</span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6 line-clamp-3">
                    {post.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {post.tags.slice(0, 2).map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-medium"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Author Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5 pt-4">
                  <img
                    src={post.author.avatarUrl}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full object-cover border border-slate-200"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-800">
                      {post.author.name}
                    </div>
                    <div className="text-[10px] text-slate-500">
                      {post.author.role}
                    </div>
                  </div>
                </div>

                <div className="pt-4 text-blue-600 text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal: Full Article Reader */}
        {activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-10 relative">
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
                <span>{activePost.category}</span>
                <span>•</span>
                <span>{activePost.readTime}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 leading-tight mb-4">
                {activePost.title}
              </h1>

              <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-100">
                <img
                  src={activePost.author.avatarUrl}
                  alt={activePost.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    {activePost.author.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {activePost.author.role} • Paarami Digital
                  </div>
                </div>
              </div>

              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-8 bg-slate-100">
                <img
                  src={activePost.imageUrl}
                  alt={activePost.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
                {activePost.content.map((paragraph, idx) => (
                  <p key={idx} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Article Tags
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {activePost.tags.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Want To Implement This In Your Organization?
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Schedule a 30-minute private audit with our designated partners.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const topic = activePost.title;
                      setActivePost(null);
                      onOpenContact(`Strategy inquiry regarding blog: ${topic}`);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md"
                  >
                    Schedule Strategy Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Newsletter / Insights Sub */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">
            Stay Ahead of Algorithmic & AI Shifts
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm mb-6">
            We share executive breakdowns of Google core updates, Meta ad auction changes, and conversion engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your corporate email"
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={() => onOpenContact('Subscribed to Paarami Executive Insights')}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
