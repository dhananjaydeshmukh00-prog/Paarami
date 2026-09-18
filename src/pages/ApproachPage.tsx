import React, { useState } from 'react';
import { motion } from 'motion/react';
import { APPROACH_STEPS } from '../data/paaramiData';
import { PageRoute } from '../types';
import { 
  Workflow, 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Zap, 
  TrendingUp, 
  BarChart3, 
  ShieldCheck, 
  Calculator,
  Compass,
  DollarSign,
  PieChart,
  Lightbulb
} from 'lucide-react';

interface ApproachPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContact: (source?: string) => void;
}

export const ApproachPage: React.FC<ApproachPageProps> = ({ onNavigate, onOpenContact }) => {
  // Interactive ROI Calculator State
  const [adSpend, setAdSpend] = useState<number>(150000); // 1.5 Lakhs
  const [ticketSize, setTicketSize] = useState<number>(25000); // Average deal/patient value
  const [conversionRate, setConversionRate] = useState<number>(3.5); // %

  // Calculated estimates
  const estimatedClicks = Math.round(adSpend / 28);
  const estimatedQualifiedLeads = Math.round(estimatedClicks * (conversionRate / 100));
  const estimatedClosedCustomers = Math.max(1, Math.round(estimatedQualifiedLeads * 0.18));
  const estimatedRevenue = estimatedClosedCustomers * ticketSize;
  const estimatedROAS = ((estimatedRevenue / adSpend)).toFixed(1);

  return (
    <div className="pt-28 pb-24 relative overflow-hidden bg-slate-50/60">
      {/* Background shape elements & gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-100/40 via-indigo-50/20 to-transparent pointer-events-none" />
      <div className="absolute top-36 right-10 w-96 h-96 bg-blue-200/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[600px] left-10 w-80 h-80 bg-amber-200/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6">
          <button onClick={() => onNavigate('home')} className="hover:text-blue-600 transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="text-blue-600">Digital Marketing Approach</span>
        </div>

        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            Methodology & Growth Architecture
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            A Proven 6-Step System <br />
            <span className="text-navy-gradient">Engineered For Predictable Scale</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Most agencies jump straight into burning ad budgets on random keywords. At Paarami, we treat digital marketing like financial engineering: analyzing unit economics, removing funnel friction, and aligning every rupee with bottom-line profit.
          </p>
        </div>

        {/* 6 Step Interactive Architecture */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight">
              The 6-Step Paarami Growth Framework
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              From business diagnostic to compounding market leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {APPROACH_STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Step number badge watermark */}
                <div className="absolute top-4 right-6 text-6xl font-display font-extrabold text-slate-100 group-hover:text-blue-50 transition-colors pointer-events-none select-none">
                  {step.number}
                </div>

                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                    Step {step.number}
                  </div>

                  <h3 className="text-xl font-display font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mb-4">
                    {step.subtitle}
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <div className="border-t border-slate-100 pt-4 mb-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                      Key Deliverables
                    </div>
                    <ul className="space-y-2">
                      {step.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-500">Core Target</span>
                  <span className="text-blue-600 font-bold bg-blue-50 px-2.5 py-1 rounded-lg">
                    {step.metric}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Full-Funnel Breakdown Section */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-indigo-600" />
              Full Funnel Synchronization
            </div>
            <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight">
              Why Disconnected Marketing Fails
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Running ads without fixing landing pages or lead response times burns cash. Here is how Paarami synchronizes the entire customer journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm mb-4">
                01
              </div>
              <h4 className="text-base font-display font-bold text-slate-900 mb-1">
                Top of Funnel
              </h4>
              <div className="text-xs text-blue-600 font-semibold mb-3">
                High-Intent Capture
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Google Search, Maps local packs, and Meta targeted interest clusters intercepting prospects already looking for your exact solution.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm mb-4">
                02
              </div>
              <h4 className="text-base font-display font-bold text-slate-900 mb-1">
                Middle of Funnel
              </h4>
              <div className="text-xs text-indigo-600 font-semibold mb-3">
                Authority & Proof
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sub-second landing pages, verified case videos, customer reviews, and clear comparison tables that eliminate buyer hesitation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center font-bold text-sm mb-4">
                03
              </div>
              <h4 className="text-base font-display font-bold text-slate-900 mb-1">
                Bottom of Funnel
              </h4>
              <div className="text-xs text-blue-700 font-semibold mb-3">
                Conversion Velocity
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sub-30-second automated WhatsApp routing, direct calendar booking, and pre-qualification questionnaires to eliminate drop-off.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm mb-4">
                04
              </div>
              <h4 className="text-base font-display font-bold text-slate-900 mb-1">
                Retention & LTV
              </h4>
              <div className="text-xs text-amber-600 font-semibold mb-3">
                Compounding Revenue
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated post-purchase check-ins, repeat consultation reminder loops, and referral incentives that maximize customer lifetime value.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Growth & ROAS Projection Simulator */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl mb-24 relative overflow-hidden">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Calculator className="w-3.5 h-3.5" />
              Interactive Financial Modeler
            </div>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Simulate Your Growth Returns
            </h3>
            <p className="text-slate-300 text-sm mt-2">
              Adjust your intended monthly ad budget and average transaction value to estimate potential pipeline output with Paarami’s full-funnel optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Controls */}
            <div className="space-y-6 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="text-slate-300">Monthly Ad Investment</span>
                  <span className="text-blue-400 font-bold">₹{adSpend.toLocaleString('en-IN')} / mo</span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="1000000"
                  step="25000"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>₹50,000 (Test)</span>
                  <span>₹5,00,000 (Scale)</span>
                  <span>₹10,00,000+ (Dominance)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="text-slate-300">Average Customer / Patient Value</span>
                  <span className="text-amber-400 font-bold">₹{ticketSize.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="150000"
                  step="5000"
                  value={ticketSize}
                  onChange={(e) => setTicketSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="text-slate-300">Funnel Conversion Rate (Landing Page + WhatsApp)</span>
                  <span className="text-emerald-400 font-bold">{conversionRate}%</span>
                </div>
                <input
                  type="range"
                  min="1.5"
                  max="8.0"
                  step="0.5"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>
            </div>

            {/* Output Display */}
            <div className="bg-white/10 p-6 sm:p-8 rounded-2xl border border-white/15 backdrop-blur-md text-center">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-1">
                Estimated Monthly Return
              </div>
              <div className="text-4xl sm:text-5xl font-display font-extrabold text-white mb-2">
                ₹{estimatedRevenue.toLocaleString('en-IN')}
              </div>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-6">
                <TrendingUp className="w-3.5 h-3.5" />
                Estimated ROAS: {estimatedROAS}X
              </div>

              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[11px] text-slate-300">Qualified Inquiries</div>
                  <div className="text-lg font-bold text-white mt-0.5">~{estimatedQualifiedLeads} leads</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[11px] text-slate-300">Est. Closed Clients</div>
                  <div className="text-lg font-bold text-white mt-0.5">~{estimatedClosedCustomers} accounts</div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => onOpenContact(`Calculated Growth Projection with ₹${adSpend.toLocaleString('en-IN')} budget`)}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow-lg"
                >
                  Verify Feasibility With Our Strategists
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
            Stop Guessing. Build A Data-Backed Growth Machine.
          </h3>
          <p className="text-slate-600 text-sm mb-8">
            Book a private 30-minute growth diagnostic session where our partners break down your unit economics and competition live.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('book-a-consultation')}
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-md transition-all flex items-center gap-2"
            >
              Book Growth Diagnostic <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('portfolio')}
              className="px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
            >
              View Our Client Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
