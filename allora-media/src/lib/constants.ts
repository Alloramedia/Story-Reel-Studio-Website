export const siteConfig = {
  name: "Allora Media",
  description:
    "Allora Media builds performance-driven marketing using paid growth strategy, authority media production, and disciplined execution for businesses ready to scale.",
  url: "https://www.alloramedia.us",
  ogImage: "/og-image.jpg",
  portalUrl: "https://app.alloramedia.us",
  email: "jared@alloramedia.us",
  phone: "(860) 321-8646",
  address: {
    street: "168 Center St, Suite 203",
    city: "Southington",
    state: "CT",
    zip: "06489",
  },
  socials: {
    facebook: "https://facebook.com/alloramedia.us",
    instagram: "https://instagram.com/alloramedia",
    linkedin: "https://linkedin.com/company/alloramedia",
    youtube: "https://youtube.com/@AlloraMedia",
    tiktok: "https://www.tiktok.com/@alloramedia",
  },
  gmb: "https://www.google.com/maps/place/Allora+Media/@41.6007921,-72.8844525,17z/data=!3m1!4b1!4m6!3m5!1s0x89e7ebd7f6ae62d9:0x14627aa02fc07cff!8m2!3d41.6007881!4d-72.8818776!16s%2Fg%2F11mw6yt3vq",
  foundingDate: "2018",
  ghl: {
    bookingUrl: "https://api.leadconnectorhq.com/widget/booking/iIpMe9Rgoxo9BY0mGUF8",
    formEmbedScript: "https://link.msgsndr.com/js/form_embed.js",
  },
};

/* ------------------------------------------------------------------ */
/*  Google review data — update these when your listing changes        */
/* ------------------------------------------------------------------ */
export const googleReview = {
  rating: 5.0,
  count: 27,
  url: "https://www.google.com/maps/place/Allora+Media/@41.6007921,-72.8844525,17z/data=!3m1!4b1!4m6!3m5!1s0x89e7ebd7f6ae62d9:0x14627aa02fc07cff!8m2!3d41.6007881!4d-72.8818776!16s%2Fg%2F11mw6yt3vq",
} as const;

/* ------------------------------------------------------------------ */
/*  Shared credibility stats — single source of truth                  */
/* ------------------------------------------------------------------ */
export const credibilityStats = {
  businessesServed: "50+",
  googleReviewCount: "27",
  googleRating: "5.0",
} as const;

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const navLinks: NavLink[] = [
  {
    label: "Paid Media",
    href: "/paid-media",
  },
  {
    label: "Media Production",
    href: "/media-production",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
  {
    label: "Services",
    href: "#services",
    children: [
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
    label: "Blog",
    href: "/blog",
  },
  {
    label: "About",
    href: "/about",
  },
];

export const footerLinks = {
  services: [
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
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Client Portal", href: "/client-portal" },
    { label: "Contact", href: "/contact" },
  ],
  industries: [
    { label: "Construction", href: "/industries/construction" },
    { label: "Home Services", href: "/industries/home-services" },
    { label: "Food & Beverage", href: "/industries/food-beverage" },
    { label: "Beauty & Retail", href: "/industries/beauty-retail" },
    { label: "Professional Services", href: "/industries/professional-services" },
  ],
  personal: [
    { label: "Personal Content", href: "/personal" },
  ],
};
