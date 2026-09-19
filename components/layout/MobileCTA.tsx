'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function MobileCTA() {
  return (
    <aside aria-label="Mobile membership quick action" className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B1220]/95 backdrop-blur-lg border-t border-white/10 px-4 py-3 shadow-2xl flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-[11px] font-bold text-[#F59E0B] uppercase tracking-wider flex items-center gap-1">
          <Sparkles className="w-3 h-3" /> Join TNSFA Today
        </span>
        <span className="text-xs text-slate-300">Uniting Stall Fabricators</span>
      </div>
      <button
        type="button"
        onClick={() => {
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('open-membership-modal'));
          }
        }}
        className="px-4 py-2 bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] text-slate-950 text-xs font-bold rounded-md shadow-md flex items-center gap-1 active:scale-95 transition-transform cursor-pointer"
      >
        <span>Become Member</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
}
