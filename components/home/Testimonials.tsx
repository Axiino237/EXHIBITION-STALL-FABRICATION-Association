import React from 'react';
import { Testimonial } from '@/lib/types';
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialProps) {
  const activeTestimonials = testimonials.filter(t => t.isActive);

  return (
    <section className="py-24 bg-[#0E1626] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F59E0B] uppercase">
            Member Voices
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-1">
            Endorsed by Stall Builders
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            Hear from workshop owners, 3D design studio heads, and turnkey contractors benefiting from national association membership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeTestimonials.map((t) => (
            <div
              key={t.id}
              className="glass-card rounded-2xl p-8 flex flex-col justify-between relative group"
            >
              <div>
                <Quote className="w-8 h-8 text-amber-500/30 mb-4" />
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-[#F59E0B] font-bold text-xs">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-amber-400 font-medium">{t.designation}</p>
                  <p className="text-[11px] text-slate-400">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
