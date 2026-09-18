import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Send, CheckCircle2, Sparkles, Clock, Shield } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialTopic = 'Digital Growth Partnership',
}) => {
  const [topic, setTopic] = useState(initialTopic);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [budget, setBudget] = useState('₹1,00,000 - ₹3,00,000 / month');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialTopic) {
      setTopic(initialTopic);
    }
  }, [initialTopic]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-2xl text-slate-900"
      >
        <button
          onClick={resetAndClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
              Message Received
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-normal">
              Thank you <strong>{name || 'valued partner'}</strong>. Our team has received your details regarding <strong>{topic}</strong>. We will get in touch with you within 24 hours.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-xs text-slate-600 space-y-1">
              <div>Inquiry ID: #PMR-{Math.floor(100000 + Math.random() * 900000)}</div>
              <div>Direct Phone: +91 98670 55734</div>
            </div>
            <button
              onClick={resetAndClose}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider mt-4 cursor-pointer shadow-xs"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Start a Conversation</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
                Talk to Paarami Digital
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Tell us about your business goals and let’s discuss how we can help you grow.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
                  What are you looking for?
                </label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Singhania"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98200 12345"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="vikram@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
                    Company / Organization Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Health Systems"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
                  Estimated Monthly Marketing Budget
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                >
                  <option value="₹50,000 - ₹1,00,000 / month">₹50,000 - ₹1,00,000 / month (Starter)</option>
                  <option value="₹1,00,000 - ₹3,00,000 / month">₹1,00,000 - ₹3,00,000 / month (Growth)</option>
                  <option value="₹3,00,000 - ₹10,00,000 / month">₹3,00,000 - ₹10,00,000 / month (Scale)</option>
                  <option value="₹10,00,000+ / month">₹10,00,000+ / month (Enterprise)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
                  Tell us a bit about your goals
                </label>
                <textarea
                  rows={3}
                  placeholder="Share what you are trying to achieve (e.g. get more clinic patient leads, build a new website, run Google Ads)..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-blue-600" /> Fast Response within 24 Hours
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Shield className="w-3.5 h-3.5 text-emerald-600" /> Privacy & Data Protected
                </span>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};
