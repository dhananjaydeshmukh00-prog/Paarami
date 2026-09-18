import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../types';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  PhoneCall, 
  Mail, 
  MapPin, 
  MessageSquare, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Building, 
  HelpCircle,
  Award
} from 'lucide-react';

interface BookConsultationPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContact: (source?: string) => void;
}

export const BookConsultationPage: React.FC<BookConsultationPageProps> = ({ onNavigate }) => {
  // Step state
  const [step, setStep] = useState<number>(1);
  const [objective, setObjective] = useState<string>('Scale High-Intent Paid Ads (Google / Meta)');
  const [budget, setBudget] = useState<string>('₹1,00,000 – ₹3,00,000 / mo');
  const [selectedSlot, setSelectedSlot] = useState<string>('Tomorrow, 11:00 AM IST');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    challenge: '',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const objectives = [
    { title: 'Scale High-Intent Paid Ads', desc: 'Google Search, PMax & Meta ad bid engineering' },
    { title: 'SEO & Generative Engine (GEO)', desc: 'Dominate traditional Google and AI Overviews' },
    { title: 'Sub-Second Web App & UX', desc: 'Apple-grade conversion-optimized platform' },
    { title: 'WhatsApp Revenue Automation', desc: 'Sub-30s triage & CRM pipeline synchronization' },
    { title: 'End-to-End Growth Partnership', desc: 'Full-funnel branding, media, and technology council' },
  ];

  const budgets = [
    '₹50,000 – ₹1,00,000 / month',
    '₹1,00,000 – ₹3,00,000 / month',
    '₹3,00,000 – ₹10,00,000 / month',
    '₹10,00,000+ / month (Enterprise)',
  ];

  const availableSlots = [
    'Tomorrow, 11:00 AM IST',
    'Tomorrow, 3:30 PM IST',
    'Day After Tomorrow, 12:00 PM IST',
    'Day After Tomorrow, 4:00 PM IST',
    'Custom Time (We will coordinate via WhatsApp)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 relative overflow-hidden bg-slate-50/60">
      {/* Background shape elements & gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-100/40 via-indigo-50/20 to-transparent pointer-events-none" />
      <div className="absolute top-28 right-10 w-96 h-96 bg-blue-200/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-96 left-10 w-80 h-80 bg-amber-200/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6">
          <button onClick={() => onNavigate('home')} className="hover:text-blue-600 transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="text-blue-600">Book A Growth Consultation</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-blue-600" />
            Direct Senior Partner Session
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Schedule Your Private <br />
            <span className="text-navy-gradient">30-Minute Growth Diagnostic</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            No sales pitches. Sushant Gaikwad and our senior architects review your current funnel, search rankings, and ad metrics live on Google Meet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Main Booking Interactive Form */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm relative">
            {!isSubmitted ? (
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between pb-8 mb-8 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                      {step}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase">
                        Step {step} of 3
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        {step === 1 && 'Select Growth Objective'}
                        {step === 2 && 'Investment Scale & Preferred Slot'}
                        {step === 3 && 'Contact & Website Details'}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-1.5">
                    <div className={`w-6 h-1.5 rounded-full ${step >= 1 ? 'bg-blue-600' : 'bg-slate-200'}`} />
                    <div className={`w-6 h-1.5 rounded-full ${step >= 2 ? 'bg-blue-600' : 'bg-slate-200'}`} />
                    <div className={`w-6 h-1.5 rounded-full ${step >= 3 ? 'bg-blue-600' : 'bg-slate-200'}`} />
                  </div>
                </div>

                {/* Step 1: Objective */}
                {step === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h3 className="text-xl font-display font-bold text-slate-900 mb-2">
                      What is your immediate primary objective?
                    </h3>
                    <p className="text-xs text-slate-500 mb-6">
                      Select the primary domain where you need verifiable improvements.
                    </p>

                    <div className="space-y-3 mb-8">
                      {objectives.map((obj, i) => (
                        <div
                          key={i}
                          onClick={() => setObjective(obj.title)}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                            objective === obj.title
                              ? 'border-blue-500 bg-blue-50/50 shadow-xs'
                              : 'border-slate-200/90 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <div>
                            <div className="text-sm font-bold text-slate-900">
                              {obj.title}
                            </div>
                            <div className="text-xs text-slate-500 mt-0.5">
                              {obj.desc}
                            </div>
                          </div>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-4 ${
                            objective === obj.title
                              ? 'border-blue-600 bg-blue-600 text-white'
                              : 'border-slate-300'
                          }`}>
                            {objective === obj.title && <CheckCircle2 className="w-4 h-4" />}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors flex items-center gap-2"
                      >
                        Continue <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Budget & Slot */}
                {step === 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h3 className="text-xl font-display font-bold text-slate-900 mb-2">
                      Budget Scale & Preferred Meeting Time
                    </h3>
                    <p className="text-xs text-slate-500 mb-6">
                      Helps us assemble the right senior specialist and competitive analysis in advance.
                    </p>

                    {/* Budget Select */}
                    <div className="mb-8">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                        Planned Monthly Marketing Investment
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {budgets.map((b, i) => (
                          <div
                            key={i}
                            onClick={() => setBudget(b)}
                            className={`p-3.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                              budget === b
                                ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold'
                                : 'border-slate-200 hover:border-slate-300 text-slate-700'
                            }`}
                          >
                            {b}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Slot Select */}
                    <div className="mb-8">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                        Select Preferred 30-Minute Consultation Slot
                      </label>
                      <div className="space-y-2">
                        {availableSlots.map((slot, i) => (
                          <div
                            key={i}
                            onClick={() => setSelectedSlot(slot)}
                            className={`p-3 rounded-xl border text-xs cursor-pointer flex items-center justify-between ${
                              selectedSlot === slot
                                ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold'
                                : 'border-slate-200 hover:border-slate-300 text-slate-700'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <Clock className="w-3.5 h-3.5 text-blue-600" />
                              <span>{slot}</span>
                            </div>
                            {selectedSlot === slot && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors flex items-center gap-2"
                      >
                        Continue To Contact Details <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Contact Info */}
                {step === 3 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h3 className="text-xl font-display font-bold text-slate-900 mb-2">
                      Where Should We Send The Meeting Invite & Research?
                    </h3>
                    <p className="text-xs text-slate-500 mb-6">
                      Our partners will review your domain and competitor ad footprints prior to the call.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Your Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g., Rajesh Sharma"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="rajesh@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Phone / WhatsApp Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Website / Company Domain *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="https://company.com"
                            value={formData.website}
                            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Brief Note on Your Current Bottleneck (Optional)
                        </label>
                        <textarea
                          rows={3}
                          placeholder="e.g., Rising ad costs on Google, poor lead quality on Meta, need clinic footfall..."
                          value={formData.challenge}
                          onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <div className="flex justify-between items-center pt-4">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md hover:shadow-blue-500/20"
                        >
                          Confirm & Schedule Consultation
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </div>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">
                  Consultation Request Confirmed!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                  Thank you, <span className="font-bold text-slate-800">{formData.name}</span>. Our team is preparing your competitor audit. We have sent the calendar invite and confirmation to <span className="font-bold text-slate-800">{formData.email}</span>.
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs text-slate-700 space-y-2 mb-8">
                  <div><strong>Focus:</strong> {objective}</div>
                  <div><strong>Budget:</strong> {budget}</div>
                  <div><strong>Proposed Time:</strong> {selectedSlot}</div>
                </div>

                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => onNavigate('case-study')}
                    className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-xs hover:bg-blue-500 transition-colors"
                  >
                    Read Case Studies While You Wait
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setStep(1);
                    }}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Book Another Slot
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column: Trust Details, Direct Contacts & What to Expect */}
          <div className="lg:col-span-4 space-y-6">
            {/* What to Expect Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs">
              <h4 className="text-sm font-display font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                What To Expect In 30 Minutes
              </h4>
              <div className="space-y-4 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">Unit Economics Diagnostic</div>
                    <div>Analysis of your CAC vs LTV and conversion bottlenecks.</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">Competitor Gap Analysis</div>
                    <div>Uncovering high-intent keywords competitors are winning.</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">Actionable 90-Day Roadmap</div>
                    <div>Specific milestones, projected ROAS, and tech improvements.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contacts & Address Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs">
              <h4 className="text-sm font-display font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Building className="w-4 h-4 text-blue-600" />
                Direct Agency Contacts
              </h4>

              <div className="space-y-3.5 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <PhoneCall className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Direct Partner Lines:</div>
                    <a href="tel:+919867055734" className="text-blue-600 hover:underline block font-medium">
                      +91 98670 55734
                    </a>
                    <a href="tel:+919820087349" className="text-blue-600 hover:underline block font-medium">
                      +91 98200 87349
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Executive Email:</div>
                    <a href="mailto:contact@paarami.com" className="text-blue-600 hover:underline font-medium">
                      contact@paarami.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Mumbai Registered Office:</div>
                    <p className="text-slate-600 mt-0.5">
                      Paarami Digital Consulting LLP<br />
                      Dadar West, Mumbai - 400028, Maharashtra, India.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href="https://wa.me/919867055734?text=Hello%20Paarami%20Digital,%20I%20would%20like%20to%20schedule%20an%20urgent%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Instant WhatsApp Message
                </a>
              </div>
            </div>

            {/* Quality Cert Badge */}
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-center gap-3">
              <Award className="w-8 h-8 text-blue-600 shrink-0" />
              <div>
                <div className="text-xs font-bold text-slate-900">ISO 9001:2015 Certified</div>
                <div className="text-[11px] text-slate-600">Enterprise governance and quality standards.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
