'use client';

import React from 'react';
import { Partner } from '@/lib/types';
import { Award } from 'lucide-react';

interface PartnerProps {
  partners: Partner[];
}

export default function PartnersMarquee({ partners }: PartnerProps) {
  const activePartners = partners.filter(p => p.isActive);
  // Duplicate array to enable seamless infinite scroll
  const marqueeList = [...activePartners, ...activePartners, ...activePartners];

  return (
    <section className="py-16 bg-[#0B1220] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-xs font-bold tracking-widest text-[#F59E0B] uppercase">
          Ecosystem Alliances
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
          Our Partners &amp; Industry Supporters
        </h2>
      </div>

      {/* Infinite scrolling marquee strip */}
      <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <div className="animate-marquee flex items-center space-x-8 whitespace-nowrap py-2">
          {marqueeList.map((partner, idx) => (
            <div
              key={`${partner.id}-${idx}`}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-colors shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center text-[#F59E0B]">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold tracking-wide text-slate-200">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
