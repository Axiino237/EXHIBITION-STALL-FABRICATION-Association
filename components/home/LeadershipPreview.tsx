'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Leader } from '@/lib/types';
import { ArrowRight, Mail, Shield, X, Award, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon, TwitterIcon } from '@/components/ui/SocialIcons';

interface LeadershipProps {
  leaders: Leader[];
}

export default function LeadershipPreview({ leaders }: LeadershipProps) {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const displayLeaders = leaders.filter(l => l.isActive).sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section id="leadership" className="py-24 bg-[#0B1220] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F59E0B] uppercase">
              Governing Body
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-1">
              Leadership Committee
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
              Meet the people working together to build a stronger exhibition industry across Tamil Nadu.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#F59E0B] hover:text-amber-400 group"
            >
              <span>Connect with Secretariat</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayLeaders.map((leader) => {
            const avatarSrc = leader.photoUrl || '/silhouette-avatar.svg';

            return (
              <div
                key={leader.id}
                className="group relative bg-[#111827]/80 rounded-2xl p-6 border border-white/10 hover:border-[#F59E0B] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
              >
                {/* Gold glowing rim on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Portrait Placeholder / Real Photo Container */}
                  <div className="relative w-36 h-36 mx-auto mb-6 rounded-full p-1 border-2 border-dashed border-amber-500/30 group-hover:border-solid group-hover:border-[#F59E0B] transition-all duration-300">
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-[#1E293B]">
                      <Image
                        src={avatarSrc}
                        alt={leader.designation}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="150px"
                      />
                    </div>

                    {/* Official Committee Emblem Tag */}
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#0B1220] border border-[#F59E0B] flex items-center justify-center text-[#F59E0B] shadow-md">
                      <Shield className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Leader Info */}
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 mb-2">
                      {leader.designation}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-3 line-clamp-3 leading-relaxed">
                      {leader.shortBio}
                    </p>
                  </div>
                </div>

                {/* Footer of card: Social & View Profile in modal */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-slate-400">
                    {leader.linkedin && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded hover:text-[#F59E0B] hover:bg-white/5 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <LinkedinIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {leader.email && (
                      <a
                        href={`mailto:${leader.email}`}
                        className="p-1.5 rounded hover:text-[#F59E0B] hover:bg-white/5 transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedLeader(leader)}
                    className="text-xs font-semibold text-[#F59E0B] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read Bio</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Placeholder Note Banner */}
        <div className="mt-12 p-4 rounded-xl bg-white/5 border border-white/10 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400">
            <strong className="text-amber-400">Official Committee Roster:</strong> The Association Executive Council represents fabrication workshops, design agencies, and allied equipment providers nationwide.
          </p>
        </div>
      </div>

      {/* In-Page Biography Modal */}
      {selectedLeader && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedLeader(null)}
        >
          <div
            className="bg-[#111827] border border-white/10 rounded-2xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Close bio"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-[#1E293B] border-2 border-amber-500/40 shrink-0">
                <Image
                  src={selectedLeader.photoUrl || '/silhouette-avatar.svg'}
                  alt={selectedLeader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                  {selectedLeader.designation}
                </span>
                <h3 className="text-lg font-bold text-white">{selectedLeader.name}</h3>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300 border-t border-white/10 pt-4">
              {selectedLeader.experience && (
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                  <span><strong>Experience:</strong> {selectedLeader.experience}</span>
                </div>
              )}
              {selectedLeader.responsibilities && (
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                  <span><strong>Portfolios:</strong> {selectedLeader.responsibilities}</span>
                </div>
              )}
              <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-white/5">
                {selectedLeader.fullBio}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedLeader(null)}
                className="px-4 py-2 rounded-lg bg-[#F59E0B] text-slate-950 text-xs font-bold hover:bg-amber-400 transition-colors"
              >
                Close Bio
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
