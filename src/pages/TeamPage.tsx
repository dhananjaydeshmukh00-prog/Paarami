import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TEAM_MEMBERS } from '../data/paaramiData';
import { TeamMember, PageRoute } from '../types';
import { 
  Users, 
  Award, 
  Linkedin, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Target, 
  Sparkles,
  PhoneCall
} from 'lucide-react';

interface TeamPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContact: (source?: string) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onNavigate, onOpenContact }) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="pt-28 pb-24 relative overflow-hidden bg-slate-50/60">
      {/* Background shape elements & gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-100/40 via-indigo-50/20 to-transparent pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-96 left-10 w-80 h-80 bg-amber-200/25 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6">
          <button onClick={() => onNavigate('home')} className="hover:text-blue-600 transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="text-blue-600">Executive Team</span>
        </div>

        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            Leadership & Growth Architects
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            The Senior Minds Scaling <br />
            <span className="text-navy-gradient">High-Growth Enterprises</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Led by founders with 19+ years of proven market experience. We do not pass your brand to junior interns—senior strategists and seasoned technologists personally architect every campaign.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200/80 shadow-xs text-sm font-medium text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              19+ Years Founder Track Record
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200/80 shadow-xs text-sm font-medium text-slate-700">
              <Award className="w-4 h-4 text-amber-500" />
              Ex-TCS, Infosys & Growth Sense Leadership
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200/80 shadow-xs text-sm font-medium text-slate-700">
              <Target className="w-4 h-4 text-blue-600" />
              ISO 9001:2015 Quality Certified
            </div>
          </div>
        </div>

        {/* Founders Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {TEAM_MEMBERS.slice(0, 3).map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Corner decoration gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/60 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <div className="relative mb-6">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-slate-100 shadow-md group-hover:scale-105 transition-transform duration-300 bg-slate-100">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-16 bg-blue-600 text-white p-1.5 rounded-lg shadow-sm">
                    <Award className="w-4 h-4" />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
                    {member.credentials}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-sm font-semibold text-slate-700 mt-1">
                    {member.role}
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {member.quote && (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 italic text-xs text-slate-700 leading-relaxed relative">
                    <span className="text-blue-500 font-bold text-base mr-1">“</span>
                    {member.quote}
                  </div>
                )}

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                    Core Specializations
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50/70 border border-blue-100 text-[11px] font-medium text-blue-800"
                      >
                        <CheckCircle2 className="w-3 h-3 text-blue-600" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={member.linkedinUrl || 'https://www.linkedin.com/company/paarami-digital-consulting-llp/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  LinkedIn Profile
                </a>
                <button
                  onClick={() => onOpenContact(`Consultation with ${member.name}`)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Direct Consultation
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Practice Leads & Functional Directors */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight">
              Functional Practice Heads
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Domain leaders managing performance budgets, brand creative, technology pipelines, and organic SEO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.slice(3).map((member, idx) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-16 h-16 rounded-xl object-cover border border-slate-200 bg-slate-100"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-lg font-display font-bold text-slate-900">
                        {member.name}
                      </h4>
                      <div className="text-xs font-semibold text-blue-600">
                        {member.role}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {member.credentials}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.specialties.map((item, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">{member.experience}</span>
                  <button
                    onClick={() => onOpenContact(`Inquiry for ${member.role}`)}
                    className="text-blue-600 font-semibold hover:underline flex items-center gap-1"
                  >
                    Connect <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Culture & Working Model */}
        <div className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Subtle background light glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              The Paarami Commitment
            </div>
            <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
              Direct Senior Partner Involvement On Every Account.
            </h3>
            <p className="text-slate-300 text-base leading-relaxed mb-8">
              We operate as your dedicated digital growth council. No account managers shielding junior mistakes; our designated partners actively review campaign metrics, attribution, and growth roadmaps with your executive team weekly.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('book-a-consultation')}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2"
              >
                Schedule Executive Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('case-study')}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors duration-300"
              >
                View Measurable Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
