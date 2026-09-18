import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GROWTH_STAGES } from '../data/paaramiData';
import {
  Lightbulb,
  Sparkles,
  Layout,
  Users,
  Zap,
  TrendingUp,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  ArrowRight,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

interface ParallaxStorytellingSectionProps {
  onOpenContact: (stageName?: string) => void;
}

export const ParallaxStorytellingSection: React.FC<ParallaxStorytellingSectionProps> = ({ onOpenContact }) => {
  const [currentStageIdx, setCurrentStageIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const stage = GROWTH_STAGES[currentStageIdx];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStageIdx((prev) => (prev + 1) % GROWTH_STAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentStageIdx((prev) => (prev + 1) % GROWTH_STAGES.length);
  };

  const handlePrev = () => {
    setCurrentStageIdx((prev) => (prev - 1 + GROWTH_STAGES.length) % GROWTH_STAGES.length);
  };

  const getStageIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return Lightbulb;
      case 1:
        return Sparkles;
      case 2:
        return Layout;
      case 3:
        return Users;
      case 4:
        return Zap;
      case 5:
        return TrendingUp;
      default:
        return Lightbulb;
    }
  };

  const StepIcon = getStageIcon(currentStageIdx);

  return (
    <section id="storytelling" className="relative py-20 md:py-28 bg-white overflow-hidden border-t border-slate-200/80">
      {/* Background shape elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-50/50 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
              Interactive Growth Roadmap
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            How Your Business Grows <br />
            <span className="text-navy-gradient">Step-by-Step With Paarami.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            A step-by-step roadmap from initial strategy and branding to high-converting websites, targeted advertising, and automatic lead routing.
          </p>
        </div>

        {/* Horizontal Scrubber Bar */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center justify-between gap-2.5 overflow-x-auto pb-4 scrollbar-none">
            {GROWTH_STAGES.map((st, idx) => {
              const isCurrent = idx === currentStageIdx;
              const isCompleted = idx < currentStageIdx;
              const Icon = getStageIcon(idx);

              return (
                <button
                  key={st.step}
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrentStageIdx(idx);
                  }}
                  className={`flex-1 min-w-[150px] text-left p-4 rounded-2xl transition-all duration-300 border relative cursor-pointer ${
                    isCurrent
                      ? 'bg-blue-50/80 border-blue-400 shadow-sm scale-[1.02]'
                      : isCompleted
                      ? 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700'
                      : 'bg-white border-slate-200/60 opacity-70 hover:opacity-100 text-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold tracking-wider text-blue-700 uppercase">
                      STAGE {st.step}
                    </span>
                    <Icon className={`w-4 h-4 ${isCurrent ? 'text-blue-600' : 'text-slate-400'}`} />
                  </div>
                  <span className={`block text-xs font-display font-bold tracking-tight truncate ${isCurrent ? 'text-slate-900' : 'text-slate-700'}`}>
                    {st.name}
                  </span>

                  {isCurrent && (
                    <motion.div
                      layoutId="activeStoryPill"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Showcase Card */}
        <div className="relative rounded-3xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Narrative Block (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700">
                  Stage {stage.step} of 06
                </span>
                <span className="text-xs text-slate-600 font-medium">
                  Key Metric: <strong className="text-slate-900 font-bold">{stage.metric}</strong>
                </span>
              </div>

              <div>
                <h3 className="text-xs tracking-wider text-blue-700 uppercase font-bold">
                  {stage.name}
                </h3>
                <h4 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1 leading-snug">
                  {stage.headline}
                </h4>
              </div>

              <div className="space-y-3 pt-1">
                {/* Challenge */}
                <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80">
                  <span className="text-xs uppercase tracking-wider text-amber-800 block mb-1 font-bold">
                    Common Problem:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {stage.challenge}
                  </p>
                </div>

                {/* Transformation */}
                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80">
                  <span className="text-xs uppercase tracking-wider text-blue-800 block mb-1 font-bold">
                    What Paarami Does:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {stage.transformation}
                  </p>
                </div>
              </div>

              {/* Deliverables */}
              <div className="pt-1">
                <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block mb-2">
                  What You Receive:
                </span>
                <div className="flex flex-wrap gap-2">
                  {stage.deliverables.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-slate-800 border border-slate-200 shadow-xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Controls & CTA */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200/70">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous step"
                    className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 transition-colors border border-slate-200 shadow-xs"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
                    className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-xs font-bold text-slate-700 flex items-center gap-2 transition-colors border border-slate-200 shadow-xs"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-600" /> : <Play className="w-3.5 h-3.5 text-blue-600" />}
                    <span>{isPlaying ? 'Pause' : 'Auto Play'}</span>
                  </button>

                  <button
                    onClick={handleNext}
                    aria-label="Next step"
                    className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 transition-colors border border-slate-200 shadow-xs"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => onOpenContact(`Inquiry regarding Stage ${stage.step}: ${stage.name}`)}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-xs transition-all cursor-pointer"
                >
                  <span>Talk to an Expert</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Visual Simulator Box (6 Cols) */}
            <div className="lg:col-span-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={stage.step}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-square max-h-[420px] w-full rounded-2xl border border-slate-200 bg-white p-6 flex flex-col justify-between overflow-hidden shadow-sm"
                >
                  {/* Top Bar */}
                  <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-3 relative z-10 font-medium">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                      <span>PHASE 0{stage.step}</span>
                    </div>
                    <span className="text-blue-700 font-bold uppercase tracking-wider">{stage.name}</span>
                  </div>

                  {/* Center Visual Content */}
                  <div className="relative flex-1 flex items-center justify-center my-4 z-10">
                    {currentStageIdx === 0 && (
                      <div className="text-center space-y-3 max-w-xs">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-xs">
                          <Lightbulb className="w-8 h-8" />
                        </div>
                        <div className="text-xs font-bold text-slate-900 tracking-wider">
                          MARKET & COMPETITOR ANALYSIS
                        </div>
                        <p className="text-xs text-slate-600 font-normal">
                          We analyze your industry, existing customer sources, and competitors to formulate a winning strategy.
                        </p>
                      </div>
                    )}

                    {currentStageIdx === 1 && (
                      <div className="w-full space-y-3 max-w-sm">
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs space-y-2">
                          <div className="flex justify-between text-[11px] text-slate-500 font-bold">
                            <span>BRAND IDENTITY</span>
                            <span className="text-blue-600">PREMIUM PERCEPTION</span>
                          </div>
                          <div className="font-display font-extrabold text-lg text-slate-900">
                            DESIGN SYSTEM & GUIDELINES
                          </div>
                          <div className="flex gap-2 pt-1">
                            <span className="w-7 h-7 rounded-lg bg-[#1e3a8a] border border-slate-200"></span>
                            <span className="w-7 h-7 rounded-lg bg-[#2563eb]"></span>
                            <span className="w-7 h-7 rounded-lg bg-[#d97706]"></span>
                            <span className="w-7 h-7 rounded-lg bg-[#059669]"></span>
                          </div>
                        </div>
                        <div className="text-center text-xs text-slate-500">
                          Professional brand presence that builds immediate customer trust.
                        </div>
                      </div>
                    )}

                    {currentStageIdx === 2 && (
                      <div className="w-full max-w-sm space-y-3">
                        <div className="rounded-xl bg-slate-50 border border-slate-200 overflow-hidden shadow-xs">
                          <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 border-b border-slate-200">
                            <span className="w-2 h-2 rounded-full bg-red-400"></span>
                            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            <span className="text-[11px] text-slate-600 ml-2 font-mono">yourbrand.com</span>
                          </div>
                          <div className="p-4 space-y-2.5">
                            <div className="h-3 w-3/4 bg-blue-200 rounded"></div>
                            <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
                            <div className="grid grid-cols-2 gap-2 pt-2">
                              <div className="h-9 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center text-[11px] font-bold text-blue-700">
                                Book Consultation
                              </div>
                              <div className="h-9 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-center text-[11px] font-bold text-emerald-700">
                                WhatsApp Inquiry
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStageIdx === 3 && (
                      <div className="w-full max-w-sm space-y-3">
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs space-y-3">
                          <div className="flex justify-between text-[11px] text-slate-500 font-bold">
                            <span>TARGETED INQUIRIES</span>
                            <span className="text-blue-600">ACTIVE BUYERS</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs text-slate-700 font-medium">
                              <span>Google Search Campaigns</span>
                              <span className="text-blue-700 font-bold">Top 3 Visibility</span>
                            </div>
                            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div className="w-4/5 h-full bg-blue-600"></div>
                            </div>
                            <div className="flex justify-between text-xs text-slate-700 font-medium">
                              <span>Meta & Instagram Ads</span>
                              <span className="text-emerald-700 font-bold">High Inquiries</span>
                            </div>
                            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div className="w-11/12 h-full bg-emerald-600"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStageIdx === 4 && (
                      <div className="w-full max-w-sm space-y-3">
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs space-y-2.5">
                          <div className="flex items-center justify-between text-[11px] text-slate-500 font-bold">
                            <span>INSTANT LEAD ALERT</span>
                            <span className="text-emerald-700 font-bold">&lt; 30s Alert</span>
                          </div>
                          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
                            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                              ✓
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-900">High-Intent Client Lead Captured</div>
                              <div className="text-[11px] text-slate-600">Pushed to sales team WhatsApp & CRM</div>
                            </div>
                          </div>
                          <div className="text-right text-xs font-bold text-blue-700">
                            1.9M+ Inquiries Successfully Processed
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStageIdx === 5 && (
                      <div className="w-full max-w-sm space-y-3">
                        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 shadow-xs text-center space-y-2">
                          <div className="w-12 h-12 mx-auto rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
                            <TrendingUp className="w-6 h-6" />
                          </div>
                          <div className="font-display font-extrabold text-xl text-slate-900">
                            Long-Term Business Growth
                          </div>
                          <p className="text-xs text-slate-600">
                            Predictable monthly revenue growth, clear cost per acquisition, and continuous campaign optimization.
                          </p>
                          <div className="pt-2 flex justify-center gap-2">
                            <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
                              1,000+ Projects
                            </span>
                            <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                              545+ Cities
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Bar */}
                  <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3 relative z-10 font-medium">
                    <span>PAARAMI GROWTH ROADMAP</span>
                    <span className="text-emerald-700 font-bold">READY TO SCALE</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
