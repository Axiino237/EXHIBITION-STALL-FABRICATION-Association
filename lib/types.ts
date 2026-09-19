export type RoleType = 'SUPER_ADMIN' | 'ADMIN' | 'EDITOR' | 'EVENT_MANAGER' | 'MEMBERSHIP_MANAGER';

export type ApplicationStatus = 'PENDING' | 'CONTACTED' | 'APPROVED' | 'REJECTED';
export type MemberStatus = 'ACTIVE' | 'PENDING' | 'SUSPENDED' | 'INACTIVE';
export type PublishStatus = 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';

export interface Leader {
  id: string;
  name: string;
  designation: string;
  slug: string;
  photoUrl?: string | null;
  shortBio: string;
  fullBio: string;
  experience?: string;
  responsibilities?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  twitter?: string;
  displayOrder: number;
  isActive: boolean;
}

export interface Member {
  id: string;
  companyName: string;
  slug: string;
  representative: string;
  designation?: string;
  category: string;
  memberType: string;
  city: string;
  state: string;
  website?: string;
  phone: string;
  email: string;
  logoUrl?: string;
  description: string;
  services: string[];
  portfolioImages: string[];
  status: MemberStatus;
  joinedAt: string;
}

export interface MembershipType {
  id: string;
  name: string;
  slug: string;
  description: string;
  benefits: string[];
  eligibility: string;
  feeAnnual?: number;
  feeCurrency: string;
  displayOrder: number;
  isActive: boolean;
}

export interface MembershipApplication {
  id: string;
  fullName: string;
  companyName: string;
  designation?: string;
  mobileNumber: string;
  email: string;
  city: string;
  state: string;
  businessCategory: string;
  experienceYears?: number;
  website?: string;
  gstNumber?: string;
  message?: string;
  docUrl?: string;
  status: ApplicationStatus;
  createdAt: string;
}

export interface EventAgendaItem {
  time: string;
  title: string;
  speaker?: string;
}

export interface EventSpeaker {
  name: string;
  role: string;
  company: string;
  photo?: string;
}

export interface EventItem {
  id: string;
  title: string;
  slug: string;
  bannerUrl: string;
  date: string;
  timeString: string;
  venue: string;
  city: string;
  mapsUrl?: string;
  description: string;
  agenda?: EventAgendaItem[];
  speakers?: EventSpeaker[];
  galleryImages?: string[];
  isFeatured?: boolean;
  status: PublishStatus;
}

export interface EventRegistration {
  id: string;
  eventId: string;
  name: string;
  company: string;
  mobile: string;
  email: string;
  attendees: number;
  createdAt: string;
}

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  imageUrl: string;
  summary: string;
  content: string;
  author: string;
  publishedAt: string;
  status: PublishStatus;
}

export interface GalleryItem {
  id: string;
  title?: string;
  imageUrl: string;
  thumbnailUrl?: string;
  category: string;
  albumId?: string;
  displayOrder: number;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  quote: string;
  avatarUrl?: string;
  rating: number;
  isActive: boolean;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  website?: string;
  displayOrder: number;
  isActive: boolean;
}

export interface ContactMessage {
  id: string;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  isRead: boolean;
  repliedAt?: string;
  createdAt: string;
}

export interface SiteSettings {
  associationName: string;
  tagline: string;
  logoUrl?: string;
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  workingHours: string;
  heroHeadline: string;
  heroSubtext: string;
  statMembers: string;
  statCompanies: string;
  statProjects: string;
  statCities: string;
  socialLinkedin: string;
  socialInstagram: string;
  socialFacebook: string;
  socialYoutube: string;
}
