import React from 'react';
import { initialActivities } from '@/lib/data';
import { Layers, ShieldCheck, BookOpen, Users, Award, FileText } from 'lucide-react';
import Link from 'next/link';

const activityIcons = [
  <Users key="1" className="w-5 h-5 text-[#F59E0B]" />,
  <FileText key="2" className="w-5 h-5 text-[#F59E0B]" />,
  <BookOpen key="3" className="w-5 h-5 text-[#F59E0B]" />,
  <ShieldCheck key="4" className="w-5 h-5 text-[#F59E0B]" />,
  <Layers key="5" className="w-5 h-5 text-[#F59E0B]" />,
  <Award key="6" className="w-5 h-5 text-[#F59E0B]" />
];

export default function ActivitiesTimeline() {
  return (
    <section className="py-24 bg-[#0B1220] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F59E0B] uppercase">
            Driving Industry Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-1">
            Our Core Activities &amp; Initiatives
          </h2>
          <p className="text-sm text-slate-300 mt-3">
            Structured programs designed to elevate craftsmanship, ensure equitable business practices, and train the next generation of exhibition fabricators.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l-2 border-amber-500/20 ml-4 sm:ml-32 md:ml-40 space-y-12 pl-6 sm:pl-10">
          {initialActivities.map((act, index) => (
            <div key={act.title} className="relative group">
              {/* Timeline Indicator Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-8 h-8 rounded-full bg-[#111827] border-2 border-[#F59E0B] flex items-center justify-center text-[#F59E0B] shadow-lg group-hover:scale-110 group-hover:bg-[#F59E0B] group-hover:text-black transition-all">
                {activityIcons[index % activityIcons.length]}
              </div>

              {/* Tag Label on Left for Desktop */}
              <div className="hidden sm:block absolute -left-36 top-2 text-right w-24">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {act.year}
                </span>
              </div>

              {/* Main Activity Card */}
              <div className="bg-[#111827]/90 border border-white/10 hover:border-amber-400/40 rounded-xl p-6 transition-all duration-300 group-hover:-translate-y-1">
                <span className="sm:hidden text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-1 block">
                  {act.year}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {act.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {act.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-bold text-[#F59E0B] hover:text-amber-400 border border-amber-500/30 hover:bg-amber-500/10 transition-colors"
          >
            <span>Connect with Regional Chapter Desk &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
