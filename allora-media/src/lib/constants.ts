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
    href: "#services",
    children: [
      { label: "Strategy", href: "/strategy" },
      { label: "Production", href: "/production" },
      { label: "Deployment", href: "/deployment" },
      { label: "Paid Media (Meta Ads)", href: "/paid-media" },
      { label: "Video Production", href: "/video-production" },
      { label: "Media Production", href: "/media-production" },
      { label: "Organic Social", href: "/organic-social" },
      { label: "TV Commercials", href: "/services/tv-commercials" },
      { label: "Testimonial Videos", href: "/services/testimonial-videos" },
      { label: "Drone Content", href: "/services/drone-content" },
      { label: "Corporate Photography", href: "/services/corporate-photography" },
      { label: "Product Shoots", href: "/services/product-shoots" },
      { label: "Graphic Design", href: "/services/graphic-design" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Construction", href: "/industries/construction" },
      { label: "Home Services", href: "/industries/home-services" },
      { label: "Food & Beverage", href: "/industries/food-beverage" },
      { label: "Beauty & Retail", href: "/industries/beauty-retail" },
      { label: "Professional Services", href: "/industries/professional-services" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Nonprofits", href: "/industries/nonprofits" },
      { label: "Health & Biotech", href: "/industries/health-biotech" },
      { label: "Real Estate", href: "/industries/real-estate" },
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
];

export const footerLinks = {
  services: [
    { label: "Strategy", href: "/strategy" },
    { label: "Production", href: "/production" },
    { label: "Deployment", href: "/deployment" },
    { label: "Paid Media (Meta Ads)", href: "/paid-media" },
    { label: "Video Production", href: "/video-production" },
    { label: "Media Production", href: "/media-production" },
    { label: "Organic Social", href: "/organic-social" },
    { label: "TV Commercials", href: "/services/tv-commercials" },
    { label: "Testimonial Videos", href: "/services/testimonial-videos" },
    { label: "Drone Content", href: "/services/drone-content" },
    { label: "Corporate Photography", href: "/services/corporate-photography" },
    { label: "Product Shoots", href: "/services/product-shoots" },
    { label: "Graphic Design", href: "/services/graphic-design" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Our Process", href: "/process" },
    { label: "Work", href: "/work" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Client Portal", href: "/client-portal" },
    { label: "Contact", href: "/contact" },
    { label: "Pricing", href: "/pricing" },
    { label: "Studio", href: "/studio" },
  ],
  industries: [
    { label: "Construction", href: "/industries/construction" },
    { label: "Home Services", href: "/industries/home-services" },
    { label: "Food & Beverage", href: "/industries/food-beverage" },
    { label: "Beauty & Retail", href: "/industries/beauty-retail" },
    { label: "Professional Services", href: "/industries/professional-services" },
    { label: "Manufacturing", href: "/industries/manufacturing" },
    { label: "Nonprofits", href: "/industries/nonprofits" },
    { label: "Health & Biotech", href: "/industries/health-biotech" },
    { label: "Real Estate", href: "/industries/real-estate" },
  ],
  personal: [
    { label: "Personal Content", href: "/personal" },
  ],
};
