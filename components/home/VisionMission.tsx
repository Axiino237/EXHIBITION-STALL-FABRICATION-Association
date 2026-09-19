import React from 'react';
import { Eye, Target, HeartHandshake } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="py-20 bg-[#0E1626] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F59E0B] uppercase">
            Our Guiding Purpose
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Vision, Mission &amp; Shared Values
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            The guiding pillars powering our commitment to every stall fabricator and designer in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: VISION */}
          <div className="glass-card rounded-2xl p-8 relative flex flex-col justify-between group">
            <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div>
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-6 text-[#F59E0B] group-hover:scale-110 transition-transform">
                <Eye className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Pillar 01</span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-4">OUR VISION</h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                &ldquo;To build a strong, respected and professionally connected exhibition industry community.&rdquo;
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-slate-400">
              National Unity &amp; Global Standing
            </div>
          </div>

          {/* Card 2: MISSION */}
          <div className="glass-card rounded-2xl p-8 relative flex flex-col justify-between group border-amber-500/30 bg-gradient-to-b from-[#1C273C] to-[#111827]">
            <div className="absolute top-0 left-8 right-8 h-1 bg-[#F59E0B] opacity-100" />
            <div>
              <div className="w-14 h-14 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mb-6 text-[#F59E0B] group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-300">Pillar 02</span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-4">OUR MISSION</h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                &ldquo;To connect, support and empower businesses and professionals across the exhibition stall and fabrication ecosystem.&rdquo;
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-amber-400 font-semibold">
              Empowerment &bull; Protection &bull; Growth
            </div>
          </div>

          {/* Card 3: VALUES */}
          <div className="glass-card rounded-2xl p-8 relative flex flex-col justify-between group">
            <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div>
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-6 text-[#F59E0B] group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Pillar 03</span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-4">OUR VALUES</h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                &ldquo;Integrity &bull; Quality &bull; Collaboration &bull; Professionalism &bull; Growth&rdquo;
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-slate-400">
              Upholding Industry Code of Ethics
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
