import {
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
  SiteSettings
} from './types';

export const initialSiteSettings: SiteSettings = {
  associationName: "TAMIL NADU STALL FABRICATION ASSOCIATION",
  tagline: "One Industry. One Community. One Voice across Tamil Nadu.",
  logoUrl: "/logo.svg",
  address: "Association Secretariat, Trade Centre Hub, Mount Poonamallee Road, Nandambakkam / Guindy, Chennai - 600089, Tamil Nadu, India",
  phone: "+91 44 4897 6500",
  email: "secretariat@tnsfa.org",
  whatsapp: "+91 98401 23456",
  workingHours: "Monday - Saturday: 9:30 AM to 6:30 PM IST",
  heroHeadline: "UNITING TAMIL NADU'S STALL & FABRICATION INDUSTRY",
  heroSubtext: "Building a stronger, connected and professional future for exhibition stall designers, fabricators and expo service providers across Chennai, Coimbatore, Madurai, Trichy, Salem and all of Tamil Nadu.",
  statMembers: "500+",
  statCompanies: "100+",
  statProjects: "1000+",
  statCities: "20+",
  socialLinkedin: "https://linkedin.com",
  socialInstagram: "https://instagram.com",
  socialFacebook: "https://facebook.com",
  socialYoutube: "https://youtube.com"
};

// Silhouette avatar placeholder SVG data URI for leadership cards
export const SILHOUETTE_AVATAR = "/silhouette-avatar.svg";

export const initialLeaders: Leader[] = [
  {
    id: "lead-1",
    name: "President / Chairman",
    designation: "President",
    slug: "president",
    photoUrl: null, // neutral silhouette placeholder
    shortBio: "Veteran fabrication pioneer leading the state-wide effort to standardize exhibition stall production guidelines, vendor safety, and industry fair-practice codes across Tamil Nadu.",
    fullBio: "Serving as President of the Tamil Nadu Stall Fabrication Association (TNSFA), providing leadership, vision, and strategic direction. With over 25 years of extensive industry immersion across Chennai Trade Centre, CODISSIA Coimbatore, and national venues, spearheads initiatives on labor safety benchmarks, standard vendor payment contracts, and venue authority dialogue.",
    experience: "25+ Years in Exhibition Architecture & Mega Structure Fabrication",
    responsibilities: "Strategic Direction, State Representation, Government Liaison, Committee Oversight",
    email: "president@tnsfa.org",
    phone: "+91 44 4897 6501",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    displayOrder: 1,
    isActive: true
  },
  {
    id: "lead-2",
    name: "Vice President",
    designation: "Vice President",
    slug: "vice-president",
    photoUrl: null,
    shortBio: "Specialist in high-tech experiential booths and multi-district expo turnkey logistics, championing sustainable modular fabrication across Tamil Nadu.",
    fullBio: "Guides strategic operations, member welfare programs, and regional chapter coordination across Chennai, Kongu Region (Coimbatore, Tirupur, Erode), and Southern Districts. Instrumental in introducing carbon-neutral exhibition design frameworks and vendor upskilling academies.",
    experience: "20+ Years in Modular Exhibition Engineering & Turnkey Services",
    responsibilities: "Regional Chapter Development, Green Booth Standards, State-wide Logistics",
    email: "vicepresident@tnsfa.org",
    phone: "+91 44 4897 6502",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    displayOrder: 2,
    isActive: true
  },
  {
    id: "lead-3",
    name: "General Secretary",
    designation: "General Secretary",
    slug: "secretary",
    photoUrl: null,
    shortBio: "Manages association operations, membership verification, venue dispute mediation, and organizational knowledge platforms for Tamil Nadu fabricators.",
    fullBio: "Acts as the chief administrative officer of TNSFA, coordinating committee decisions, institutional filings, and daily member grievances. Has led more than 150 turnkey pavilions across Chennai Trade Centre, CODISSIA Coimbatore, and major national trade fairs.",
    experience: "18+ Years in Expo Production Management & Trade Association Affairs",
    responsibilities: "Secretariat Administration, Member Grievance Cell, AGM Governance",
    email: "secretary@tnsfa.org",
    phone: "+91 44 4897 6503",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    displayOrder: 3,
    isActive: true
  },
  {
    id: "lead-4",
    name: "Joint Secretary",
    designation: "Joint Secretary",
    slug: "joint-secretary",
    photoUrl: null,
    shortBio: "Spearheading modern 3D spatial design conventions, youth talent incubation, and vocational certification for Tamil Nadu fabricators.",
    fullBio: "Focuses on technical training workshops, safety protocol rollouts, and bridging design agencies with ground fabrication workshops. Collaborates closely with vocational design institutes to establish specialized exhibition design curricula.",
    experience: "15+ Years in 3D Exhibition Design, Parametric Booths & Lighting",
    responsibilities: "Design Standards, Vocational Workshops, Digital Communication",
    email: "jointsecretary@tnsfa.org",
    phone: "+91 44 4897 6504",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    displayOrder: 4,
    isActive: true
  },
  {
    id: "lead-5",
    name: "Treasurer",
    designation: "Treasurer",
    slug: "treasurer",
    photoUrl: null,
    shortBio: "Ensuring fiscal transparency, member welfare fund allocation, and ethical financial management for the state body.",
    fullBio: "Oversees the financial health, audit compliances, and membership fee allocations of the association. Manages the newly instituted Emergency Artisan & Fabricator Relief Fund for on-site emergencies across Tamil Nadu trade centers.",
    experience: "22+ Years in Commercial Exhibition Contracting & Industrial Management",
    responsibilities: "Financial Audits, Budget Allocation, Member Relief Fund",
    email: "treasurer@tnsfa.org",
    phone: "+91 44 4897 6505",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    displayOrder: 5,
    isActive: true
  },
  {
    id: "lead-6",
    name: "Executive Committee Member",
    designation: "Executive Committee Member (Technical)",
    slug: "executive-committee-technical",
    photoUrl: null,
    shortBio: "Expert on electrical safety, fire retardant certifications, and structural load calculations for expo pavilions in Tamil Nadu venues.",
    fullBio: "Directs technical audits and safety advisories for member workshops. Regularly conducts safety masterclasses for rigging, electrical balance, and structural integrity during high-rush setup windows at Chennai Trade Centre and CODISSIA.",
    experience: "19+ Years in Mezzanine Stall Fabrication & Electrical Engineering",
    responsibilities: "Safety Certification, Electrical Standards, On-site Hall Audits",
    email: "committee.tech@tnsfa.org",
    phone: "+91 44 4897 6506",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    displayOrder: 6,
    isActive: true
  }
];

export const industryCategories = [
  {
    name: "Exhibition Stall Fabricators",
    count: "320+ Units",
    description: "Custom wood, steel, and octanorm fabrication workshops crafting large-scale brand pavilions.",
    icon: "Hammer"
  },
  {
    name: "Stall Designers & Architects",
    count: "210+ Studios",
    description: "Creative masterminds conceptualizing experiential spatial layouts and visitor journeys.",
    icon: "Compass"
  },
  {
    name: "3D Visualizers & Spatial Designers",
    count: "180+ Artists",
    description: "3D rendering, virtual expo previews, walkthrough animations, and lighting simulations.",
    icon: "Box"
  },
  {
    name: "Event & Expo Contractors",
    count: "140+ Agencies",
    description: "Turnkey project leaders coordinating mega hall setups, venue clearances, and timing deadlines.",
    icon: "Briefcase"
  },
  {
    name: "Printing & Large Format Branding",
    count: "195+ Houses",
    description: "Backlit fabrics, vinyl graphics, 3D acrylic typography, CNC routing, and UV print experts.",
    icon: "Printer"
  },
  {
    name: "Electrical & Truss Lighting Vendors",
    count: "130+ Providers",
    description: "Power distribution, specialized warm exhibition spotlights, trussing rigs, and safety switchgear.",
    icon: "Zap"
  },
  {
    name: "AV, LED Video Walls & Tech Providers",
    count: "115+ Partners",
    description: "Seamless P2.5/P3 LED walls, interactive touch kiosks, holographic displays, and sound design.",
    icon: "Tv"
  },
  {
    name: "Furniture & Rental Providers",
    count: "160+ Suppliers",
    description: "Designer lounge sofas, conference podiums, barstools, brochure racks, and glass display showcases.",
    icon: "Armchair"
  },
  {
    name: "Logistics & Installation Teams",
    count: "240+ Crews",
    description: "Inter-state heavy transport, crane rigging, rapid night-shift erection, and safe dismantle crews.",
    icon: "Truck"
  },
  {
    name: "Exhibition Support Services",
    count: "90+ Specialists",
    description: "Hostess management, housekeeping, on-site carpentry maintenance, and catering coordinators.",
    icon: "ShieldCheck"
  }
];

export const initialMembers: Member[] = [
  {
    id: "mem-1",
    companyName: "Apex Expo Pavilions Pvt Ltd",
    slug: "apex-expo-pavilions",
    representative: "Rajesh Sharma",
    designation: "Managing Director",
    category: "Stall Fabrication",
    memberType: "Founder Member",
    city: "Mumbai",
    state: "Maharashtra",
    website: "https://apexexpomumbai.com",
    phone: "+91 22 2840 9100",
    email: "contact@apexexpomumbai.com",
    logoUrl: "",
    description: "Specialists in double-decker mezzanine pavilions, high-gloss paint finishes, and CNC carved architectural fascias. Over 500+ successful booths executed at BEC Goregaon, Jio World Convention Centre, and HITEX Hyderabad.",
    services: ["Double Decker Fabrications", "Turnkey Stall Construction", "CNC Wood Crafting", "High Gloss PU Finishing"],
    portfolioImages: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
    ],
    status: "ACTIVE",
    joinedAt: "2024-01-15"
  },
  {
    id: "mem-2",
    companyName: "Vanguard Spatial & 3D Design",
    slug: "vanguard-spatial-design",
    representative: "Priya Sundaram",
    designation: "Principal Architect",
    category: "Exhibition Design",
    memberType: "Company Member",
    city: "Bengaluru",
    state: "Karnataka",
    website: "https://vanguardspatial.in",
    phone: "+91 80 4120 7890",
    email: "studio@vanguardspatial.in",
    logoUrl: "",
    description: "Award-winning exhibition design agency blending biophilic stall elements, interactive visitor funnels, and modern minimalism for aerospace, defence, and tech expos.",
    services: ["Parametric 3D Stall Design", "Virtual Reality Pre-Visualizations", "Material Specification", "Brand Architecture"],
    portfolioImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
    ],
    status: "ACTIVE",
    joinedAt: "2024-02-10"
  },
  {
    id: "mem-3",
    companyName: "Pragati Mega Structures & Fab",
    slug: "pragati-mega-structures",
    representative: "Sanjay Verma",
    designation: "Director of Operations",
    category: "Stall Fabrication",
    memberType: "Founder Member",
    city: "New Delhi",
    state: "Delhi NCR",
    website: "https://pragatistructures.com",
    phone: "+91 11 2678 4400",
    email: "info@pragatistructures.com",
    logoUrl: "",
    description: "One of North India's largest production houses with 40,000 sq.ft state-of-the-art carpentry and metal workshops. Official contractor for major industrial and automotive expos at Bharat Mandapam & Yashobhoomi.",
    services: ["Large Country Pavilions", "Metal Trussing & Rigging", "Heavy Machine Mounting", "Emergency On-site Fabrication"],
    portfolioImages: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80"
    ],
    status: "ACTIVE",
    joinedAt: "2024-01-20"
  },
  {
    id: "mem-4",
    companyName: "Luminex Audio Visual & Stage",
    slug: "luminex-audio-visual",
    representative: "Karthik Subramanian",
    designation: "Technical Head",
    category: "AV & Technology",
    memberType: "Company Member",
    city: "Chennai",
    state: "Tamil Nadu",
    website: "https://luminexav.in",
    phone: "+91 44 2499 1122",
    email: "projects@luminexav.in",
    logoUrl: "",
    description: "Pioneering curved LED video walls, kinetic light fixtures, and multi-zone directional sound arrays for exhibition booths across South India.",
    services: ["Curved P2.6 LED Displays", "Touch Table Integration", "Architectural Profile Lighting", "Live Product Stage Sound"],
    portfolioImages: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80"
    ],
    status: "ACTIVE",
    joinedAt: "2024-03-01"
  },
  {
    id: "mem-5",
    companyName: "Graphica Print & Signage Systems",
    slug: "graphica-print-signage",
    representative: "Amitabh Sen",
    designation: "Partner",
    category: "Printing & Branding",
    memberType: "Associate Member",
    city: "Kolkata",
    state: "West Bengal",
    website: "https://graphicaprint.com",
    phone: "+91 33 2289 7711",
    email: "orders@graphicaprint.com",
    logoUrl: "",
    description: "Seamless UV tension fabric lightboxes up to 5 meters seamless height, metallic vinyl wrapping, and customized 3D edge-lit acrylic signage.",
    services: ["SEG Fabric Lightboxes", "Direct UV Flatbed Printing", "Edge-Lit Acrylic Letters", "Flame-Retardant Media"],
    portfolioImages: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
    ],
    status: "ACTIVE",
    joinedAt: "2024-04-12"
  },
  {
    id: "mem-6",
    companyName: "Deccan Modular Rentals & Decors",
    slug: "deccan-modular-rentals",
    representative: "Syed Imran",
    designation: "General Manager",
    category: "Furniture & Rentals",
    memberType: "Company Member",
    city: "Hyderabad",
    state: "Telangana",
    website: "https://deccanmodular.com",
    phone: "+91 40 2334 8877",
    email: "rental@deccanmodular.com",
    logoUrl: "",
    description: "Extensive inventory of 30,000+ pieces of premium expo furniture, Maxima modular frame systems, glass display vitrines, and meeting pods.",
    services: ["Designer Lounge Furniture Rental", "Maxima System Partitioning", "Bar Counters & Showcases", "Fast Delivery & Clearance"],
    portfolioImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
    ],
    status: "ACTIVE",
    joinedAt: "2024-05-18"
  }
];

export const initialMembershipTypes: MembershipType[] = [
  {
    id: "type-1",
    name: "Individual Member",
    slug: "individual-member",
    description: "Designed for independent stall designers, 3D visualizers, supervisors, and freelance expo consultants.",
    benefits: [
      "Official TNSFA Member Certificate & Digital Badge",
      "Access to State Member Directory & Networking Meets",
      "Discounted Entry to Technical Skill Workshops & Seminars",
      "Access to standard client contracts & legal dispute advice",
      "Job & Project Collaboration Board across Tamil Nadu"
    ],
    eligibility: "Minimum 2 years proven freelance or professional track record in stall design or expo supervision.",
    feeAnnual: 2000,
    feeCurrency: "INR",
    displayOrder: 1,
    isActive: true
  },
  {
    id: "type-2",
    name: "Company Member",
    slug: "company-member",
    description: "For registered fabrication workshops, turnkey exhibition contractors, and full-service booth agencies.",
    benefits: [
      "Comprehensive Company Profile with Portfolio Showcase on TNSFA Portal",
      "Direct Lead Forwarding from Association Client Inquiries",
      "Venue Dispute Mediation & Defaulting Client Blacklist Warning Bulletin",
      "Voting Rights at Annual General Meeting (AGM)",
      "Priority Booth Allotment & Sponsorship Discounts at TNSFA Expos",
      "Free Passes for 4 Team Members to Annual State Summit"
    ],
    eligibility: "Registered entity (Pvt Ltd, LLP, Partnership, or GST registered proprietorship) with completed booths.",
    feeAnnual: 5000,
    feeCurrency: "INR",
    displayOrder: 2,
    isActive: true
  },
  {
    id: "type-3",
    name: "Associate Member",
    slug: "associate-member",
    description: "For vendors in the allied ecosystem: Printing, AV, Furniture Rentals, Electrical, and Logistics.",
    benefits: [
      "Direct exposure to active fabrication companies across Tamil Nadu seeking allied vendors",
      "Listing in Allied Vendor Directory across Chennai, Coimbatore & Madurai trade hubs",
      "Product Demo & Vendor Showcase slots during Chapter Meets",
      "Regular updates on upcoming exhibitions at Chennai Trade Centre & CODISSIA"
    ],
    eligibility: "Companies supplying equipment, materials, AV, printing, or logistics to the expo industry.",
    feeAnnual: 3000,
    feeCurrency: "INR",
    displayOrder: 3,
    isActive: true
  },
  {
    id: "type-4",
    name: "Industry Partner",
    slug: "industry-partner",
    description: "For material manufacturers (plywood, laminates, aluminum trusses, LED modules) and large expo venue operators.",
    benefits: [
      "Exclusive Brand Placement on Homepage Header Marquee & Print Publications",
      "Co-branding of Association Masterclasses & Skill Labs",
      "Keynote speaking slots at Annual Industry Summit",
      "Access to aggregated industry material demand insights"
    ],
    eligibility: "National-scale manufacturers, venue owners, or multi-national exhibition equipment brands.",
    feeAnnual: 50000,
    feeCurrency: "INR",
    displayOrder: 4,
    isActive: true
  },
  {
    id: "type-5",
    name: "Founder Member",
    slug: "founder-member",
    description: "Prestigious lifetime patron membership for established industry stalwarts shaping the future of Indian exhibitions.",
    benefits: [
      "Permanent Seat on the National Advisory Advisory Council",
      "Lifetime VIP Credentials at all National Summits & Awards",
      "Hall of Fame recognition on Association Wall of Honor",
      "Influence over national industry policy recommendations submitted to ministries"
    ],
    eligibility: "By invitation or recommendation of the Executive Committee for 15+ years distinguished service.",
    feeAnnual: 100000,
    feeCurrency: "INR",
    displayOrder: 5,
    isActive: true
  }
];

export const initialEvents: EventItem[] = [
  {
    id: "evt-1",
    title: "Tamil Nadu State Stall Fabricators & Designers Summit 2026",
    slug: "tamil-nadu-stall-fabricators-summit-2026",
    bannerUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    date: "2026-10-18T09:30:00.000Z",
    timeString: "09:30 AM – 06:30 PM IST",
    venue: "Convention Centre, Chennai Trade Centre (CTC), Nandambakkam",
    city: "Chennai",
    mapsUrl: "https://maps.google.com/?q=Chennai+Trade+Centre",
    description: "The flagship state congregation bringing together stall designers, fabrication production heads, venue authorities, and material suppliers across Tamil Nadu to debate emerging trends, 3D spatial design, and unified vendor contracts.",
    agenda: [
      { time: "09:30 AM", title: "Registration & Traditional Welcome", speaker: "TNSFA Secretariat Team" },
      { time: "10:30 AM", title: "Keynote: Growth of Exhibition Architecture in Tamil Nadu", speaker: "President / Chairman" },
      { time: "12:00 PM", title: "Panel: CTC & CODISSIA Setup Windows & Safety Compliance", speaker: "Leading Fabrication Heads" },
      { time: "02:00 PM", title: "Networking Lunch & Allied Vendor Expo", speaker: "All Attendees" },
      { time: "03:30 PM", title: "Session: Electrical Safety & Fire Norms in Two-Tier Stalls", speaker: "State Fire & Electrical Safety Marshals" },
      { time: "05:00 PM", title: "Tamil Nadu Stall Fabrication Excellence Awards 2026", speaker: "Jury Panel" }
    ],
    speakers: [
      { name: "Executive Committee Panel", role: "Keynote Speakers", company: "TNSFA State Body" },
      { name: "Senior Trade Centre Official", role: "Special Guest", company: "Chennai Trade Centre Authority" }
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80"
    ],
    isFeatured: true,
    status: "PUBLISHED"
  },
  {
    id: "evt-2",
    title: "Kongu Region Fabricators Meet – Coimbatore & Tirupur",
    slug: "kongu-region-fabricators-meet-coimbatore",
    bannerUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    date: "2026-11-12T15:00:00.000Z",
    timeString: "03:00 PM – 08:30 PM IST",
    venue: "CODISSIA Trade Fair Complex, Hall D, Avinashi Road",
    city: "Coimbatore",
    mapsUrl: "https://maps.google.com/?q=CODISSIA+Coimbatore",
    description: "An intensive regional networking gathering addressing local challenges at CODISSIA: night shift safety passes, crane/forklift logistics, labor rates, and standardized quotation templates.",
    agenda: [
      { time: "03:00 PM", title: "Check-in & Tea", speaker: "Coimbatore Chapter Convenor" },
      { time: "04:00 PM", title: "Open Mic: Ground Realities of Industrial Expo Setups", speaker: "Member Fabricators" },
      { time: "06:00 PM", title: "Action Charter for Western Tamil Nadu", speaker: "Vice President" },
      { time: "07:30 PM", title: "Dinner & Business Networking", speaker: "All Attendees" }
    ],
    isFeatured: false,
    status: "PUBLISHED"
  },
  {
    id: "evt-3",
    title: "Masterclass on Sustainable Modular Fabrication & 3D Spatial Tools",
    slug: "masterclass-sustainable-modular-fabrication",
    bannerUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    date: "2026-12-05T10:00:00.000Z",
    timeString: "10:00 AM – 04:00 PM IST",
    venue: "Madurai Convention Center / Expo Hall, Ring Road",
    city: "Madurai",
    mapsUrl: "https://maps.google.com/?q=Madurai+Convention+Centre",
    description: "Hands-on technical workshop for Tamil Nadu 3D designers and workshop supervisors on moving toward reusable aluminum matrices, recyclable fabrics, and sustainable modular designs.",
    agenda: [
      { time: "10:00 AM", title: "Eco-Friendly Material Selection", speaker: "Technical Consultant" },
      { time: "11:30 AM", title: "Modular Matrix Setup Demonstration", speaker: "Master Fabricator" },
      { time: "02:00 PM", title: "Standard Pricing Models for Commercial Booths", speaker: "Joint Secretary" }
    ],
    isFeatured: false,
    status: "PUBLISHED"
  }
];

export const initialActivities = [
  {
    year: "Core Pillar 1",
    title: "State-Wide Industry Networking & Chapters",
    description: "Creating unified chapters across Chennai, Coimbatore, Madurai, Tiruchirappalli, and Salem so fabricators have immediate peer support during trade exhibitions."
  },
  {
    year: "Core Pillar 2",
    title: "Standardized Client Contracts & Safety Codes",
    description: "Drafting recommended payment milestones, force majeure clauses, and fire-retardant structural guidelines to protect Tamil Nadu fabricators from arbitrary payment deductions."
  },
  {
    year: "Core Pillar 3",
    title: "Technical Workshops & 3D Clinics",
    description: "Conducting regular technical sessions on parametric 3D tools, structural load calculations, and energy-efficient lighting across Tamil Nadu trade hubs."
  },
  {
    year: "Core Pillar 4",
    title: "Labor Welfare & Artisan Relief Fund",
    description: "Establishing emergency medical assistance, group on-site accidental insurance, and vocational training certifications for carpentry and electrical crews in Tamil Nadu."
  },
  {
    year: "Core Pillar 5",
    title: "Venue & Government Dialogue",
    description: "Liaising with Chennai Trade Centre, CODISSIA, and state industry departments for fair gate passes, clean setup facilities, and prompt depot clearances."
  },
  {
    year: "Core Pillar 6",
    title: "Tamil Nadu Stall Fabrication Awards",
    description: "Celebrating true craftsmanship through peer-voted annual awards for Best Custom Pavilion, Best Double Decker, and Outstanding Fabricator of the Year."
  }
];

export const initialGallery: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Grand Custom Double-Decker Pavilion",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    category: "Exhibitions",
    displayOrder: 1
  },
  {
    id: "gal-2",
    title: "Sleek Minimalist Tech Stall",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    category: "Design",
    displayOrder: 2
  },
  {
    id: "gal-3",
    title: "Large Format Country Pavilion",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    category: "Fabrication",
    displayOrder: 3
  },
  {
    id: "gal-4",
    title: "Precision Workshop Production & CNC Routing",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    category: "Fabrication",
    displayOrder: 4
  },
  {
    id: "gal-5",
    title: "Dynamic Curved LED & Lighting Rig",
    imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
    category: "Technology",
    displayOrder: 5
  },
  {
    id: "gal-6",
    title: "State Association General Body Assembly",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    category: "Events",
    displayOrder: 6
  },
  {
    id: "gal-7",
    title: "On-Site Midnight Build-up Rigging",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    category: "Fabrication",
    displayOrder: 7
  },
  {
    id: "gal-8",
    title: "Industry Excellence Trophy Felicitation",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    category: "Awards",
    displayOrder: 8
  }
];

export const initialNews: NewsItem[] = [
  {
    id: "news-1",
    title: "Formation of Tamil Nadu Stall Fabrication Association Announced",
    slug: "formation-of-tamil-nadu-stall-fabrication-association",
    category: "Association Launch",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    summary: "Leading exhibition stall builders, spatial designers, and allied vendors assemble in Chennai to formally register the premier state association.",
    content: `In a historic step for the Tamil Nadu trade fair and exhibition industry, fabricators, designers, and allied service contractors gathered in Chennai to announce the formation of the **TAMIL NADU STALL FABRICATION ASSOCIATION** (TNSFA).

The association addresses longstanding industry pain points: lack of standardized safety norms, arbitrary delays in site handover, payment settlement disputes, and the absence of a unified voice before venue operators and event organizers.

The association will coordinate regional chapters across Chennai, Coimbatore, Madurai, Tiruchirappalli, and Salem to ensure grassroots representation for production workshops of all sizes.`,
    author: "TNSFA Secretariat",
    publishedAt: "2026-08-10",
    status: "PUBLISHED"
  },
  {
    id: "news-2",
    title: "TNSFA Issues Advisory on Fire-Retardant Standards for Chennai Trade Centre",
    slug: "tnsfa-fire-retardant-standards-advisory",
    category: "Industry Update",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    summary: "New technical advisory outlines certified non-toxic, fire-retardant coatings and electrical safety protocols for pavilions across Tamil Nadu.",
    content: `In view of venue safety regulations across Chennai Trade Centre and CODISSIA, the TNSFA Technical Committee has issued a comprehensive advisory outlining approved Class-1 fire retardant materials and electrical wiring standards.

Member fabricators will receive free calibration templates and can avail bulk member discounts directly from approved paint and truss manufacturers.`,
    author: "Technical Committee",
    publishedAt: "2026-08-28",
    status: "PUBLISHED"
  },
  {
    id: "news-3",
    title: "Preparations Underway for Tamil Nadu Stall Fabricators Summit 2026",
    slug: "preparations-underway-tamil-nadu-summit-2026",
    category: "Upcoming Expo",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    summary: "Delegates expected at Chennai Trade Centre for the state gathering of stall craftsmanship and experiential spatial design.",
    content: `Registration has officially opened for the Tamil Nadu Stall Fabricators & Designers Summit 2026. The summit features technical panels, an allied vendor technology expo, and the prestigious State Stall Excellence Awards ceremony.

Members can reserve early bird seats through the association web portal.`,
    author: "Event Committee",
    publishedAt: "2026-09-05",
    status: "PUBLISHED"
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Founder & Creative Director",
    designation: "Principal Designer",
    company: "Chennai Pavilion Crafts, Guindy, Chennai",
    quote: "For decades, our industry in Tamil Nadu worked in fragmented silos. TNSFA finally gives us the collective dignity, institutional backing, and contract protection we needed when delivering turnkey trade fair stalls.",
    avatarUrl: "",
    rating: 5,
    isActive: true
  },
  {
    id: "test-2",
    name: "Managing Partner",
    designation: "Managing Partner",
    company: "Kongu Expo Tech, CODISSIA Zone, Coimbatore",
    quote: "The technical workshops and standard client payment guidelines have brought genuine structure to our business in Western Tamil Nadu. Becoming a TNSFA member is the single best decision for any growing fabrication studio.",
    avatarUrl: "",
    rating: 5,
    isActive: true
  },
  {
    id: "test-3",
    name: "Director of Production",
    designation: "Director of Production",
    company: "Pandian Trade Structures, Madurai",
    quote: "When unexpected hall security issues happen at midnight during build-up at Chennai Trade Centre or CODISSIA, having TNSFA's backing and rapid grievance cell makes all the difference in the world.",
    avatarUrl: "",
    rating: 5,
    isActive: true
  }
];

export const initialPartners: Partner[] = [
  { id: "part-1", name: "National Plywood Consortium", logoUrl: "PLYWOOD", displayOrder: 1, isActive: true },
  { id: "part-2", name: "AluTruss Systems India", logoUrl: "ALUTRUSS", displayOrder: 2, isActive: true },
  { id: "part-3", name: "ProScreen LED Displays", logoUrl: "PROSCREEN", displayOrder: 3, isActive: true },
  { id: "part-4", name: "ColorMax UV Graphics", logoUrl: "COLORMAX", displayOrder: 4, isActive: true },
  { id: "part-5", name: "LumaLux Architectural Spotlights", logoUrl: "LUMALUX", displayOrder: 5, isActive: true },
  { id: "part-6", name: "EcoBoard Modular Matrices", logoUrl: "ECOBOARD", displayOrder: 6, isActive: true }
];
