export const siteConfig = {
  name: "Story Real Studios",
  description:
    "Story Real Studios builds strategy-led video campaigns and content systems for purpose-led organizations — combining strategy, cinematic production, and deployment into measurable growth.",
  url: "https://www.storyreal.co",
  ogImage: "/og-image.jpg",
  portalUrl: "https://app.storyreal.co",
  email: "info@storyreal.co",
  phone: "(860) 321-8646",
  address: {
    street: "168 Center St, Suite 203",
    city: "Southington",
    state: "CT",
    zip: "06489",
  },
  socials: {
    facebook: "https://facebook.com/storyreal.co",
    instagram: "https://instagram.com/storyrealstudios",
    linkedin: "https://linkedin.com/company/storyrealstudios",
    youtube: "https://youtube.com/@StoryRealStudios",
    tiktok: "https://www.tiktok.com/@storyrealstudios",
  },
  gmb: "https://www.google.com/maps/place/Story+Real+Studios",
  foundingDate: "2018",
  ghl: {
    bookingUrl: "https://api.leadconnectorhq.com/widget/booking/iIpMe9Rgoxo9BY0mGUF8",
    formEmbedScript: "https://link.msgsndr.com/js/form_embed.js",
  },
  /** Shortcut — same as ghl.bookingUrl */
  get bookingUrl() {
    return this.ghl.bookingUrl;
  },
  studioBookingUrl: "https://api.leadconnectorhq.com/widget/booking/iIpMe9Rgoxo9BY0mGUF8",
};

/* ------------------------------------------------------------------ */
/*  Google review data — update these when your listing changes        */
/* ------------------------------------------------------------------ */
export const googleReview = {
  rating: 5.0,
  count: 27,
  url: "https://www.google.com/maps/place/Story+Real+Studios",
} as const;

/* ------------------------------------------------------------------ */
/*  Shared credibility stats — single source of truth                  */
/* ------------------------------------------------------------------ */
export const credibilityStats = {
  businessesServed: "50+",
  googleReviewCount: "27",
  googleRating: "5.0",
  projectsDelivered: "200+",
  yearsInBusiness: "7+",
  industriesServed: "12+",
} as const;

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const navLinks: NavLink[] = [
  {
    label: "Services",
    href: "/video-production",
    children: [
      { label: "Brand Story Development", href: "/strategy" },
      { label: "Video Production", href: "/video-production" },
      { label: "Content Deployment", href: "/deployment" },
      { label: "Brand Story Documentaries", href: "/services/brand-story-documentaries" },
      { label: "Interview Production", href: "/services/interview-video-production" },
      { label: "Drone & Aerial Video", href: "/services/drone-content" },
      { label: "TV Commercials & OTT", href: "/services/tv-commercials" },
      { label: "3D Animation", href: "/services/3d-animated-videos" },
      { label: "Social Media Content", href: "/services/social-media-content" },
      { label: "Product Demo Videos", href: "/services/product-demo-videos" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Nonprofits", href: "/industries/nonprofits" },
      { label: "Health & Biotech", href: "/industries/health-biotech" },
      { label: "Brand Lifestyle & DTC", href: "/industries/brand-lifestyle" },
      { label: "Sports & Entertainment", href: "/industries/sports-entertainment" },
      { label: "Professional Services", href: "/industries/professional-services" },
    ],
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Process",
    href: "/process",
  },
  {
    label: "Rent Our Studio",
    href: "/studio",
  },
];

export const footerLinks = {
  services: [
    { label: "Brand Story Development", href: "/strategy" },
    { label: "Video Production", href: "/video-production" },
    { label: "Content Deployment", href: "/deployment" },
    { label: "Brand Story Documentaries", href: "/services/brand-story-documentaries" },
    { label: "Interview Production", href: "/services/interview-video-production" },
    { label: "Drone & Aerial Video", href: "/services/drone-content" },
    { label: "TV Commercials & OTT", href: "/services/tv-commercials" },
    { label: "3D Animation", href: "/services/3d-animated-videos" },
    { label: "Social Media Content", href: "/services/social-media-content" },
    { label: "Product Demo Videos", href: "/services/product-demo-videos" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Our Process", href: "/process" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "Rent Our Studio", href: "/studio" },
    { label: "Client Portal", href: "/client-portal" },
    { label: "Contact", href: "/contact" },
  ],
  industries: [
    { label: "Manufacturing", href: "/industries/manufacturing" },
    { label: "Nonprofits", href: "/industries/nonprofits" },
    { label: "Health & Biotech", href: "/industries/health-biotech" },
    { label: "Brand Lifestyle & DTC", href: "/industries/brand-lifestyle" },
    { label: "Sports & Entertainment", href: "/industries/sports-entertainment" },
    { label: "Professional Services", href: "/industries/professional-services" },
  ],
  personal: [
    { label: "Personal Content", href: "/personal" },
  ],
};
