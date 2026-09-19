import React from 'react';
import { db } from '@/lib/db';
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import VisionMission from '@/components/home/VisionMission';
import IndustryIntro from '@/components/home/IndustryIntro';
import LeadershipPreview from '@/components/home/LeadershipPreview';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import ActivitiesTimeline from '@/components/home/ActivitiesTimeline';
import GalleryPreview from '@/components/home/GalleryPreview';
import MembershipTiers from '@/components/home/MembershipTiers';
import PartnersMarquee from '@/components/home/PartnersMarquee';
import Testimonials from '@/components/home/Testimonials';
import CTABanner from '@/components/home/CTABanner';
import ContactPreview from '@/components/home/ContactPreview';

export const revalidate = 0; // Dynamic server-rendered with live data

export default function HomePage() {
  const leaders = db?.leaders || [];
  const membershipTypes = db?.membershipTypes || [];
  const events = db?.events || [];
  const gallery = db?.gallery || [];
  const testimonials = db?.testimonials || [];
  const partners = db?.partners || [];

  return (
    <main className="relative min-h-screen bg-[#0B1220]">
      {/* 1. Home (Hero Section) */}
      <Hero />

      {/* 2. About Association Section (#about) */}
      <AboutSection />
      <VisionMission />

      {/* 3. Industry Ecosystem Section (#ecosystem) */}
      <IndustryIntro />

      {/* 4. Leadership Section (#leadership) */}
      <LeadershipPreview leaders={leaders} />

      {/* 5. Events & Activities Section (#events) */}
      <UpcomingEvents events={events} />
      <ActivitiesTimeline />

      {/* 6. Gallery Section (#gallery) */}
      <GalleryPreview items={gallery} />

      {/* 7. Membership Section (#membership) */}
      <MembershipTiers tiers={membershipTypes} />
      <PartnersMarquee partners={partners} />
      <Testimonials testimonials={testimonials} />
      <CTABanner />

      {/* 8. Contact Section (#contact) with active email dispatch */}
      <ContactPreview />
    </main>
  );
}
