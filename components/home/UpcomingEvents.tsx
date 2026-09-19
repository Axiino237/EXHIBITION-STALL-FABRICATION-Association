'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { EventItem } from '@/lib/types';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

interface EventsProps {
  events: EventItem[];
}

export default function UpcomingEvents({ events }: EventsProps) {
  const displayEvents = events.slice(0, 3);

  return (
    <section id="events" className="py-24 bg-[#0E1626] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F59E0B] uppercase">
              Summits &bull; Meets &bull; Masterclasses
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-1">
              Upcoming Industry Events
            </h2>
            <p className="text-sm text-slate-300 mt-2 max-w-2xl">
              Join peer networking meets, technical training clinics, and annual state conventions across Tamil Nadu.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#F59E0B] hover:text-amber-400 group"
            >
              <span>RSVP via Secretariat</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {displayEvents.map((evt) => (
            <div
              key={evt.id}
              className="group bg-[#111827] rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Banner Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={evt.bannerUrl}
                    alt={evt.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0B1220]/80 backdrop-blur-md border border-amber-500/30 text-[11px] font-bold text-amber-300">
                    {evt.city}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="space-y-1.5 text-xs text-slate-400 mb-3">
                    <div className="flex items-center gap-2 text-amber-400 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{new Date(evt.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{evt.timeString}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-slate-400" />
                      <span className="line-clamp-1">{evt.venue}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {evt.title}
                  </h3>

                  <p className="text-xs text-slate-300 mt-2.5 line-clamp-3 leading-relaxed">
                    {evt.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="p-6 pt-0">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] shadow hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <span>RSVP for this Event</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
