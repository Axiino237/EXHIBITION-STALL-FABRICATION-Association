'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Award, Sparkles, Building2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-24 pb-16 bg-[#0B1220]">
      {/* Background Image with Dark Vignette & Architectural Grid */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=85"
          alt="Exhibition Hall Custom Pavilions"
          fill
          priority
          className="object-cover object-center scale-105 transition-transform duration-[10000ms] hover:scale-100 opacity-30"
        />
        {/* Layered Gradient Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/80 to-[#0B1220]/60" />
        <div className="absolute inset-0 bg-expo-grid opacity-70" />
        <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
      </div>

      {/* Subtle Floating Architectural Structural Lines (Trusses & Booth Geometry) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg
          className="absolute w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="10%" y1="0" x2="30%" y2="100%" stroke="#F59E0B" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="90%" y1="0" x2="70%" y2="100%" stroke="#F59E0B" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="20%" cy="30%" r="180" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.1" fill="none" />
          <circle cx="85%" cy="70%" r="240" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.1" fill="none" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-amber-400/30 backdrop-blur-md mb-6 shadow-lg shadow-amber-500/10 animate-fade-in">
          <Sparkles className="w-4 h-4 text-[#F59E0B]" />
          <span className="text-xs sm:text-sm font-bold tracking-wider text-amber-300 uppercase">
            National Sangam of Stall Fabricators &amp; Designers
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
          UNITING THE EXHIBITION <br className="hidden sm:inline" />
          <span className="text-gold-gradient">STALL &amp; FABRICATION</span> INDUSTRY
        </h1>

        {/* Supporting Text */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-10">
          Building a stronger, connected and professional future for exhibition stall designers, fabricators and service providers across India.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            type="button"
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('open-membership-modal'));
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#D97706] rounded-lg shadow-xl shadow-amber-500/25 hover:shadow-amber-500/45 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 group cursor-pointer"
          >
            <span>Become a Member</span>
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <a
            href="#ecosystem"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-amber-400/50 rounded-lg backdrop-blur-md transition-all duration-300"
          >
            <Building2 className="w-4 h-4 mr-2 text-amber-400" />
            <span>Explore Our Community</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3">
            <span className="text-xs uppercase tracking-wider text-slate-400">Representation</span>
            <p className="text-sm sm:text-base font-bold text-white mt-0.5">National Body</p>
          </div>
          <div className="p-3">
            <span className="text-xs uppercase tracking-wider text-slate-400">Coverage</span>
            <p className="text-sm sm:text-base font-bold text-white mt-0.5">Pan-India Chapters</p>
          </div>
          <div className="p-3">
            <span className="text-xs uppercase tracking-wider text-slate-400">Standards</span>
            <p className="text-sm sm:text-base font-bold text-white mt-0.5">Safety &amp; Contracts</p>
          </div>
          <div className="p-3">
            <span className="text-xs uppercase tracking-wider text-slate-400">Dispute Support</span>
            <p className="text-sm sm:text-base font-bold text-white mt-0.5">Vendor Grievance Cell</p>
          </div>
        </div>
      </div>
    </section>
  );
}
