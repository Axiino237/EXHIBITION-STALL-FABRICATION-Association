'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { MembershipType } from '@/lib/types';
import { Check, Star, ArrowRight, Shield, Send, CheckCircle2, AlertCircle, X, Sparkles } from 'lucide-react';

interface TiersProps {
  tiers: MembershipType[];
}

const businessCategories = [
  'Exhibition Stall Fabrication',
  'Exhibition Stall Design & 3D',
  'Event & Expo Contracting',
  'Printing & Large Format Graphics',
  'Electrical, Trussing & Stage Lighting',
  'AV, LED Video Walls & Stage Tech',
  'Furniture & Exhibition Rentals',
  'Logistics & Rigging Installation',
  'Exhibition Support & Manpower',
  'Other Allied Expo Services'
];

export default function MembershipTiers({ tiers }: TiersProps) {
  const activeTiers = tiers.filter(t => t.isActive).sort((a, b) => a.displayOrder - b.displayOrder);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Exhibition Stall Fabrication');
  const [selectedTierName, setSelectedTierName] = useState<string>('Company Member');
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    designation: '',
    mobileNumber: '',
    email: '',
    city: '',
    state: '',
    businessCategory: 'Exhibition Stall Fabrication',
    experienceYears: '5',
    website: '',
    gstNumber: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // Listen for hash or custom event to open modal
  useEffect(() => {
    const handleCustomOpen = (e: any) => {
      if (e?.detail?.tier) {
        setSelectedTierName(e.detail.tier);
      }
      if (e?.detail?.category) {
        setSelectedCategory(e.detail.category);
      }
      setIsModalOpen(true);
    };

    window.addEventListener('open-membership-modal', handleCustomOpen);

    if (typeof window !== 'undefined' && (window.location.hash === '#apply' || window.location.hash === '#membership-form')) {
      setIsModalOpen(true);
    }

    return () => {
      window.removeEventListener('open-membership-modal', handleCustomOpen);
    };
  }, []);

  const handleOpenModalForTier = (tierName: string) => {
    setSelectedTierName(tierName);
    if (tierName.toLowerCase().includes('individual')) {
      setSelectedCategory('Exhibition Stall Design & 3D');
    } else if (tierName.toLowerCase().includes('associate')) {
      setSelectedCategory('Other Allied Expo Services');
    } else {
      setSelectedCategory('Exhibition Stall Fabrication');
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/membership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          businessCategory: selectedCategory,
          tierName: selectedTierName
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit application.');

      setSubmitted(true);
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (err) {}
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="membership" className="py-24 bg-[#0E1626] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F59E0B] uppercase">
            National Association Membership
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-1">
            Choose Your Membership Category
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3">
            Open to individual designers, fabrication workshops, turnkey contractors, allied equipment suppliers, and national materials partners.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {activeTiers.slice(0, 3).map((tier) => {
            const isFeatured = tier.slug === 'company-member';

            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#1C273C] to-[#111827] border-2 border-[#F59E0B] shadow-2xl shadow-amber-500/15 scale-[1.02]'
                    : 'bg-[#111827]/90 border border-white/10 hover:border-amber-400/40 hover:-translate-y-1'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#F59E0B] text-slate-950 font-black text-xs uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-current" /> Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                    <Shield className={`w-5 h-5 ${isFeatured ? 'text-[#F59E0B]' : 'text-slate-400'}`} />
                  </div>

                  <p className="text-xs text-slate-300 mt-2 min-h-[36px] leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Fee */}
                  <div className="my-6 py-4 border-y border-white/10">
                    <span className="text-xs text-slate-400">Annual Association Dues</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-3xl sm:text-4xl font-black text-white">
                        {tier.feeAnnual ? `₹${tier.feeAnnual.toLocaleString('en-IN')}` : 'Contact'}
                      </span>
                      <span className="text-xs text-slate-400">/ year</span>
                    </div>
                  </div>

                  {/* Eligibility */}
                  <div className="mb-6 p-3 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300">
                    <strong className="text-amber-400">Eligibility: </strong>
                    {tier.eligibility}
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Included Privileges:
                    </span>
                    {tier.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    onClick={() => handleOpenModalForTier(tier.name)}
                    className={`w-full inline-flex items-center justify-center px-5 py-3 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all ${
                      isFeatured
                        ? 'bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] text-slate-950 shadow-lg shadow-amber-500/25 hover:scale-[1.02]'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                    }`}
                  >
                    <span>Apply for {tier.name}</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Application Prompt Banner */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-amber-500/10 via-[#1A2333] to-amber-500/10 border border-amber-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl text-center sm:text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Fast-Track Digital Enrolment
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ready to Join ESFA India Sangam?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg">
              Click the button to open the official application form. Our membership scrutiny desk will verify and issue your membership credentials.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setSelectedTierName('Company Member');
              setIsModalOpen(true);
            }}
            className="shrink-0 px-8 py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#D97706] shadow-xl shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <span>Apply for Membership</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* POPUP MODAL DIALOG */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-3xl bg-[#111827] border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-amber-500/10 my-auto max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Application Successfully Received!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you. Your membership application for <strong className="text-amber-400">{selectedTierName}</strong> has been received by the ESFA Secretariat. Our team will contact you shortly for onboarding verification.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setIsModalOpen(false);
                    }}
                    className="px-6 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-[#F59E0B] hover:bg-amber-400 transition-colors"
                  >
                    Close Window
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    Submit Another
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="border-b border-white/10 pb-5 mb-6 pr-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> ESFA National Membership Enrolment
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                    Apply for Membership
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Applying for: <strong className="text-amber-400">{selectedTierName}</strong> &bull; Join the united voice of Indian stall fabricators and expo builders.
                  </p>
                </div>

                {error && (
                  <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-300 text-xs sm:text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-400" />
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Patel"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F59E0B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Pavilions Pvt Ltd"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F59E0B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Designation
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Managing Partner / Director"
                        value={formData.designation}
                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F59E0B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F59E0B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="contact@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F59E0B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Business Category *
                      </label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full px-4 py-2.5 bg-[#111827] border border-white/10 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#F59E0B]"
                      >
                        {businessCategories.map((c) => (
                          <option key={c} value={c} className="bg-[#111827] text-white">
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mumbai"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F59E0B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        State *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Maharashtra"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F59E0B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Years of Experience
                      </label>
                      <input
                        type="number"
                        placeholder="e.g. 10"
                        value={formData.experienceYears}
                        onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F59E0B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Company Website
                      </label>
                      <input
                        type="url"
                        placeholder="https://company.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F59E0B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        GST Number (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="27AAACH1234F1Z8"
                        value={formData.gstNumber}
                        onChange={(e) => setFormData({ ...formData, gstNumber: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F59E0B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Message / Major Past Exhibitions
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Brief description of your workshop infrastructure, key client pavilions, and trade fairs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F59E0B]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#D97706] shadow-xl shadow-amber-500/25 hover:scale-[1.02] active:scale-95 disabled:opacity-50 transition-all"
                  >
                    {loading ? (
                      <span>Submitting Application...</span>
                    ) : (
                      <>
                        <span>Submit Membership Application</span>
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
