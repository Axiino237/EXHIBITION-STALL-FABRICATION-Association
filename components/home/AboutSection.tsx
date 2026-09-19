import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const focusAreas = [
  "Industry Networking & Regional Chapters",
  "Professional Standards & Safety Guidelines",
  "Knowledge Sharing & Parametric 3D Clinics",
  "B2B Collaboration & Vendor Leads",
  "Member Grievance & Contract Protection",
  "National Industry Representation before ITPO",
  "Skill Certification for Carpentry & Rigging Crews",
  "Recognition & Annual Stall Excellence Awards"
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#0B1220] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Image with architectural border framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="relative h-[420px] sm:h-[480px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
                  alt="Custom Exhibition Stall Fabrication Workshop"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Floating Floating Stat Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0B1220]/90 backdrop-blur-md border border-amber-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">Collective Impact</span>
                  <p className="text-sm font-bold text-white">Uniting Fabrication Studios Across Tamil Nadu</p>
                </div>
                <div className="h-9 px-2 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-[#F59E0B] font-bold text-xs">
                  TNSFA
                </div>
              </div>
            </div>

            {/* Decorative Gold Frame Offset Behind */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#F59E0B]/20 rounded-2xl -z-0 pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: Editorial About Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F59E0B] uppercase">
                About the Association
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">
                Empowering the Craftsmen &amp; Creators of Tamil Nadu&apos;s Trade Exhibitions
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              The <strong>Tamil Nadu Stall Fabrication Association (TNSFA)</strong> was established as the apex state representative body for businesses, contractors, and creative professionals operating across Tamil Nadu&apos;s exhibition and stall fabrication ecosystem.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              From high-pressure build-ups at premier convention venues like Chennai Trade Centre (CTC), CODISSIA Trade Fair Complex Coimbatore, and Madurai Expo Centre, to intricate state-wide brand pavilions, our members transform architectural blueprints into stunning physical brand environments. We ensure their rights, safety, standard contracts, and vocational growth are protected at every tier.
            </p>

            {/* 8 Focus Areas Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {focusAreas.map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="#membership"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-slate-950 bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all"
              >
                <span>Apply for Membership</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#leadership"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <span>Our Leadership</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
