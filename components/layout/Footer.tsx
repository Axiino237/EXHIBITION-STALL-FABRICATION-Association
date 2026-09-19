import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageSquare } from 'lucide-react';
import { LinkedinIcon, InstagramIcon, FacebookIcon, YoutubeIcon } from '@/components/ui/SocialIcons';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-[#070C15] border-t border-white/10 text-slate-300 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Logo & Mission */}
          <div className="space-y-4">
            <a href="#" className="inline-block transition-transform hover:scale-[1.02]">
              <Logo showTagline={true} className="h-12 sm:h-14 w-auto" />
            </a>
            <p className="text-sm text-slate-400 leading-relaxed">
              The premier national association uniting stall fabricators, 3D spatial designers, event contractors, and exhibition service providers across India. Dedicated to professional excellence, safety, and mutual industry growth.
            </p>
            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#F59E0B] hover:border-[#F59E0B] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#F59E0B] hover:border-[#F59E0B] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#F59E0B] hover:border-[#F59E0B] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#F59E0B] hover:border-[#F59E0B] transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919811054321"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                aria-label="WhatsApp Support"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#F59E0B] pl-2.5">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-[#F59E0B] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-[#F59E0B] transition-colors">Industry Ecosystem</a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-[#F59E0B] transition-colors">Leadership Committee</a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#F59E0B] transition-colors">Upcoming Events</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#F59E0B] transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#membership" className="hover:text-[#F59E0B] transition-colors">Membership Application</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F59E0B] transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Membership */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#F59E0B] pl-2.5">
              Membership Sangam
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#membership" className="text-[#F59E0B] font-semibold hover:underline flex items-center gap-1">
                  Become a Member <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a href="#membership" className="hover:text-[#F59E0B] transition-colors">Membership Categories</a>
              </li>
              <li>
                <a href="#membership" className="hover:text-[#F59E0B] transition-colors">Benefits &amp; Privileges</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F59E0B] transition-colors">Dispute Redressal</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Secretariat */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#F59E0B] pl-2.5">
              Secretariat Desk
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>Aerocity Expo Tower, New Delhi - 110037, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>+91 11 4987 6500</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>secretariat@esfa-india.org</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>Mon - Sat: 9:30 AM – 6:30 PM IST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 EXPO &amp; STALL FABRICATORS ASSOCIATION (ESFA INDIA). All Rights Reserved.</p>
          
          {/* Developed by Axiino */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-amber-400/40 transition-colors">
            <span className="text-slate-400">Developed by</span>
            <a
              href="https://axiino.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#F59E0B] hover:text-amber-300 transition-colors inline-flex items-center gap-1 group"
              title="Visit Axiino"
            >
              <span>Axiino</span>
              <span className="text-[10px] text-amber-400 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#contact" className="hover:text-white transition-colors">Dispute Redressal</a>
            <a href="#contact" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#contact" className="hover:text-white transition-colors">Terms of Membership</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
