'use client';

import React from 'react';
import {
  Hammer,
  Compass,
  Box,
  Briefcase,
  Printer,
  Zap,
  Tv,
  Armchair,
  Truck,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, React.ReactNode> = {
  Hammer: <Hammer className="w-6 h-6 text-[#F59E0B]" />,
  Compass: <Compass className="w-6 h-6 text-[#F59E0B]" />,
  Box: <Box className="w-6 h-6 text-[#F59E0B]" />,
  Briefcase: <Briefcase className="w-6 h-6 text-[#F59E0B]" />,
  Printer: <Printer className="w-6 h-6 text-[#F59E0B]" />,
  Zap: <Zap className="w-6 h-6 text-[#F59E0B]" />,
  Tv: <Tv className="w-6 h-6 text-[#F59E0B]" />,
  Armchair: <Armchair className="w-6 h-6 text-[#F59E0B]" />,
  Truck: <Truck className="w-6 h-6 text-[#F59E0B]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#F59E0B]" />
};

const categories = [
  {
    name: "Exhibition Stall Fabricators",
    count: "Carpentry & Metal",
    description: "Custom wood, structural steel, and modular octanorm fabrication workshops crafting brand pavilions.",
    icon: "Hammer"
  },
  {
    name: "Stall Designers & Architects",
    count: "Spatial Concepts",
    description: "Spatial layout conceptualizers, biophilic architects, and experiential brand journey creators.",
    icon: "Compass"
  },
  {
    name: "3D Designers & Visualizers",
    count: "CGI & Walkthroughs",
    description: "Photorealistic 3ds Max/Blender rendering, lighting simulations, and client walkthrough animations.",
    icon: "Box"
  },
  {
    name: "Event & Expo Contractors",
    count: "Turnkey Leadership",
    description: "Full-service project managers coordinating hall permits, vendor schedules, and 48-hr handovers.",
    icon: "Briefcase"
  },
  {
    name: "Printing & Branding Companies",
    count: "Large Format UV",
    description: "Backlit tension fabric lightboxes (SEG), vinyl graphics, CNC cut logos, and acrylic signs.",
    icon: "Printer"
  },
  {
    name: "Electrical & Lighting Vendors",
    count: "Trussing & Power",
    description: "Certified exhibition distribution boards, trussing rigs, profile spots, and safety switchgear.",
    icon: "Zap"
  },
  {
    name: "AV & Technology Providers",
    count: "LED & Interactive",
    description: "Fine-pitch P2.5/P2.9 LED video walls, interactive touch kiosks, holographic displays, and stage audio.",
    icon: "Tv"
  },
  {
    name: "Furniture & Rental Providers",
    count: "Expo Amenities",
    description: "Lounge sets, bar counters, brochure stands, showcase vitrines, and conference furniture.",
    icon: "Armchair"
  },
  {
    name: "Logistics & Installation Teams",
    count: "Rigging & Transport",
    description: "Inter-state heavy haulage, crane rigging, rapid overnight hall erection, and dismantle crews.",
    icon: "Truck"
  },
  {
    name: "Exhibition Support Services",
    count: "Manpower & Safety",
    description: "Trained booth hostesses, housekeeping, on-site carpentry maintenance, and venue clearances.",
    icon: "ShieldCheck"
  }
];

export default function IndustryIntro() {
  return (
    <section id="ecosystem" className="py-24 bg-[#0E1626] relative overflow-hidden border-t border-b border-white/5">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-booth-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F59E0B] uppercase">
            The Exhibition Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4">
            One Industry. One Community. One Voice.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            The association serves as the apex state platform uniting all specialized disciplines required to bring world-class exhibition pavilions and brand spaces to life across Tamil Nadu.
          </p>
        </div>

        {/* 10 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((cat, idx) => (
            <div
              key={cat.name}
              className="group relative bg-[#111827]/90 border border-white/10 hover:border-amber-400/50 rounded-xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/10 cursor-pointer overflow-hidden"
            >
              {/* Subtle top accent line animation on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
                  {iconMap[cat.icon]}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/80">
                  {cat.count}
                </span>
                <h3 className="text-base font-bold text-white mt-1 mb-2 group-hover:text-amber-300 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-white">
                <span>View Directory</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F59E0B] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-400">
            Are you a service provider in the exhibition industry?{' '}
            <Link href="/membership" className="text-[#F59E0B] font-semibold underline hover:text-amber-400">
              Register your business profile in the national directory &rarr;
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
