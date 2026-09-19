'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="relative py-28 bg-[#0B1220] overflow-hidden">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=80"
          alt="Exhibition Hall Mega Structures"
          fill
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220] via-[#0B1220]/90 to-[#0B1220]" />
        <div className="absolute inset-0 bg-expo-grid opacity-50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" /> Collective State Strength
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
          Together, We Build the <span className="text-gold-gradient">Future of Exhibitions</span> in Tamil Nadu.
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Connect with industry professionals, grow your network and be part of a stronger stall fabrication community across Tamil Nadu.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('open-membership-modal'));
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#D97706] shadow-xl shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all group cursor-pointer"
          >
            <span>Become a Member</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
          >
            <Mail className="w-4 h-4 mr-2 text-amber-400" />
            <span>Contact Secretariat</span>
          </a>
        </div>
      </div>
    </section>
  );
}
