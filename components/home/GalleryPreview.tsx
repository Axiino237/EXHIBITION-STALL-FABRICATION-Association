'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GalleryItem } from '@/lib/types';
import Lightbox from '@/components/ui/Lightbox';
import { Maximize2, ArrowRight } from 'lucide-react';

interface GalleryProps {
  items: GalleryItem[];
}

const filterCategories = [
  'All',
  'Exhibitions',
  'Fabrication',
  'Member Meets',
  'Workshops',
  'Awards'
];

export default function GalleryPreview({ items }: GalleryProps) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = items.filter(
    (item) => selectedFilter === 'All' || item.category === selectedFilter
  );

  return (
    <section id="gallery" className="py-24 bg-[#0E1626] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F59E0B] uppercase">
              Visual Craftsmanship
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-1">
              Exhibition &amp; Stall Gallery
            </h2>
            <p className="text-sm text-slate-300 mt-2 max-w-2xl">
              Witness the architectural scale, double-decker engineering, and fine woodworking produced by our member fabrication houses.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a
              href="#membership"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#F59E0B] hover:text-amber-400 group"
            >
              <span>Submit Your Stall Showcase</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedFilter === cat
                  ? 'bg-[#F59E0B] text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-black/40 ${
                index % 3 === 0 ? 'sm:col-span-2 h-[340px]' : 'h-[260px]'
              }`}
            >
              <Image
                src={item.imageUrl}
                alt={item.title || 'Stall Showcase'}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/90 via-[#0B1220]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Badge & Info */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-[#0B1220]/80 backdrop-blur-md border border-amber-500/30">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[11px] text-slate-300">Click to expand fullscreen</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        images={filteredItems}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => {
          if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
          }
        }}
        onNext={() => {
          if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
          }
        }}
      />
    </section>
  );
}
