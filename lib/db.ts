import {
  initialSiteSettings,
  initialLeaders,
  initialMembers,
  initialMembershipTypes,
  initialEvents,
  initialActivities,
  initialGallery,
  initialNews,
  initialTestimonials,
  initialPartners
} from './data';
import {
  SiteSettings,
  Leader,
  Member,
  MembershipType,
  MembershipApplication,
  EventItem,
  NewsItem,
  GalleryItem,
  Testimonial,
  Partner,
  ContactMessage,
  EventRegistration
} from './types';

// Global state container for runtime persistence
declare global {
  var __esfa_db: {
    siteSettings: SiteSettings;
    leaders: Leader[];
    members: Member[];
    membershipTypes: MembershipType[];
    applications: MembershipApplication[];
    events: EventItem[];
    eventRegistrations: EventRegistration[];
    news: NewsItem[];
    gallery: GalleryItem[];
    testimonials: Testimonial[];
    partners: Partner[];
    messages: ContactMessage[];
  } | undefined;
}

if (!globalThis.__esfa_db) {
  globalThis.__esfa_db = {
    siteSettings: { ...initialSiteSettings },
    leaders: [...initialLeaders],
    members: [...initialMembers],
    membershipTypes: [...initialMembershipTypes],
    applications: [
      {
        id: "app-101",
        fullName: "Vikram Malhotra",
        companyName: "Horizon Exhibition Displays",
        designation: "Managing Partner",
        mobileNumber: "+91 98200 12345",
        email: "vikram@horizondisplays.in",
        city: "Pune",
        state: "Maharashtra",
        businessCategory: "Stall Fabrication",
        experienceYears: 8,
        website: "https://horizondisplays.in",
        gstNumber: "27AAACH1234F1Z8",
        message: "We specialize in custom woodworking and aluminum matrix stalls across Western India. Eager to join ESFA.",
        status: "PENDING",
        createdAt: new Date().toISOString()
      }
    ],
    events: [...initialEvents],
    eventRegistrations: [],
    news: [...initialNews],
    gallery: [...initialGallery],
    testimonials: [...initialTestimonials],
    partners: [...initialPartners],
    messages: [
      {
        id: "msg-101",
        name: "Rohit Deshmukh",
        company: "Craft & Booth Interiors",
        email: "rohit@craftbooth.com",
        phone: "+91 99887 76655",
        subject: "Inquiry regarding ESFA membership criteria and regional chapter meets",
        message: "Hello team, we are a stall fabrication firm based in Pune. We would like to understand the eligibility process for Company Membership and when the next Mumbai chapter gathering is scheduled.",
        isRead: false,
        createdAt: new Date().toISOString()
      }
    ]
  };
}

export const db = globalThis.__esfa_db;
