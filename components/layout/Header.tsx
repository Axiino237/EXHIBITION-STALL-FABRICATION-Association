'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, Award } from 'lucide-react';
import Logo from '@/components/ui/Logo';

const landingLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Ecosystem', href: '#ecosystem' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'Events', href: '#events' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Membership', href: '#membership' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1220]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#0B1220]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group transition-transform duration-300 group-hover:scale-[1.02]">
            <Logo showTagline={false} className="h-10 sm:h-12 w-auto" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {landingLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-[#F59E0B] hover:bg-white/5 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('open-membership-modal'));
                }
              }}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs xl:text-sm font-bold tracking-wide text-slate-950 bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#D97706] rounded-md shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group cursor-pointer"
            >
              <span>Become a Member</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden space-x-2">
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('open-membership-modal'));
                }
              }}
              className="text-xs font-bold px-3 py-1.5 bg-[#F59E0B] text-slate-950 rounded-md shadow cursor-pointer"
            >
              Join
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-[#0B1220]/98 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col justify-between overflow-y-auto animate-fadeIn">
          <div className="space-y-2">
            <div className="pb-3 mb-2 border-b border-white/10">
              <span className="text-xs font-bold tracking-wider uppercase text-amber-400 flex items-center gap-1.5">
                <Award className="w-4 h-4" /> National Association Sangam
              </span>
            </div>

            {landingLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-white/5 hover:text-[#F59E0B] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('open-membership-modal'));
                }
              }}
              className="w-full flex items-center justify-center px-5 py-3 text-base font-bold text-slate-950 bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] rounded-lg shadow-xl shadow-amber-500/20 cursor-pointer"
            >
              Become a Member Today
            </button>
            <p className="text-center text-xs text-slate-400">
              One Industry &bull; One Community &bull; One Voice
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
