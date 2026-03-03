export interface IndustryData {
  slug: string;
  name: string;
  headline: string;
  subhead: string;
  description: string;
  stats: { value: string; label: string; benchmark?: string }[];
  services: { title: string; description: string; icon: string }[];
  differentiators: { title: string; description: string }[];
  results: { metric: string; description: string }[];
  testimonial: { quote: string; name: string; role: string };
  challenges: string[];
  approach: string[];
  faqs: { question: string; answer: string }[];
}

export const industryData: Record<string, IndustryData> = {
  construction: {
    slug: "construction",
    name: "Construction",
    headline: "More jobs. Better clients. Less relying on referrals.",
    subhead: "Marketing for general contractors, specialty trades, and construction companies in Connecticut — built to win better contracts and fill your pipeline.",
    description: "Your work speaks for itself — the problem is, not enough people are seeing it. Referrals are great, but they cap your growth. We build a marketing system that puts your best projects in front of property managers, developers, and homeowners who are actively looking for a contractor they can trust.",
    stats: [
      { value: "3.8x", label: "Average Return on Ad Spend", benchmark: "Industry Avg: 1.5–2x" },
      { value: "52%", label: "Reduction in Cost Per Lead" },
      { value: "30", label: "Days to First Digital Lead" },
      { value: "12+", label: "Contractors Served in CT" },
    ],
    services: [
      { title: "Project Showcase Campaigns", description: "Turn your best builds into scroll-stopping ads — drone footage, time-lapses, and before/afters that make prospects say 'I want that.'", icon: "Clapperboard" },
      { title: "Geo-Targeted Lead Generation", description: "Facebook & Instagram ads aimed at property managers, developers, and homeowners in your exact service area — no wasted spend.", icon: "MapPin" },
      { title: "Reputation & Trust Building", description: "Professionally captured client testimonials and project walkthroughs that close deals before the first handshake.", icon: "Shield" },
      { title: "Full-Funnel Tracking", description: "Know exactly which campaigns generate calls, form fills, and signed contracts. Every dollar is accounted for.", icon: "BarChart3" },
      { title: "Seasonal Campaign Strategy", description: "Weather-aware, season-specific campaigns that match your pipeline to demand — ramp up in spring, stay visible in winter.", icon: "Calendar" },
      { title: "Retargeting & Follow-Up", description: "Stay top-of-mind with prospects who've viewed your work but haven't called yet. When they're ready, you're first.", icon: "RefreshCw" },
    ],
    differentiators: [
      { title: "We Know the Trades", description: "We've worked with GCs, electricians, plumbers, roofers, and heavy civil. We understand long sales cycles, seasonal swings, and the difference between a lead and a signed contract." },
      { title: "Content That Sells the Work", description: "We don't just run ads — we produce the drone footage, project walkthroughs, and testimonial videos that make your company look like the obvious choice." },
      { title: "Transparent ROI, Not Vanity Metrics", description: "No fluff reports about impressions. You'll see exactly how many leads came in, what they cost, and which ones turned into actual jobs." },
    ],
    results: [
      { metric: "$92 → $44 Cost Per Lead", description: "Reduced CPL by 52% within 90 days for a Connecticut general contractor through creative testing and audience refinement." },
      { metric: "2.4x Pipeline Value", description: "More than doubled the value of one specialty contractor's active project pipeline within 6 months of launching paid campaigns." },
      { metric: "22 Qualified Leads/Month", description: "Built a consistent flow of qualified inbound leads for a residential renovation company that previously relied 100% on referrals." },
    ],
    testimonial: {
      quote: "We went from hoping the phone would ring to having to hire another estimator. Allora completely changed how we get new business.",
      name: "Mike R.",
      role: "General Contractor, Fairfield County",
    },
    challenges: [
      "You're relying on referrals, which means growth is out of your control",
      "You have amazing project work but no way to showcase it at scale",
      "Competitors with lower quality are winning because they show up online first",
      "Lead flow is feast-or-famine — some months are packed, others are dead",
      "You have no idea which marketing efforts actually bring in paying jobs",
    ],
    approach: [
      "Document your best projects with professional video, drone footage, and photography",
      "Launch targeted Facebook and Instagram campaigns to reach property managers, developers, and homeowners in your service area",
      "Install tracking so every lead ties back to the exact campaign that generated it",
      "Capture testimonial videos from satisfied clients that build trust before the first meeting",
      "Review performance together every month and optimize based on real numbers",
    ],
    faqs: [
      { question: "Do you work with both commercial and residential contractors?", answer: "Yes. Our system works for general contractors, specialty trades, renovation companies, and commercial builders. The targeting and messaging adapt to your specific market." },
      { question: "What kind of results should I expect?", answer: "Most construction clients see their first digital leads within 30-60 days. The quality of leads typically improves over 90 days as we refine targeting and build retargeting audiences." },
      { question: "Do you handle the photography and video too?", answer: "Yes. We produce all media in-house — drone footage, project documentation, team profiles, and testimonial videos. Everything is built to perform in ads and on your website." },
      { question: "How much should I budget for marketing?", answer: "Most construction clients invest $2,000-$5,000 per month in ad spend plus management fees. The right budget depends on your market size and growth goals." },
      { question: "Can you work with us if we serve a specific region?", answer: "Absolutely. Geo-targeting is one of the strongest features of Meta campaigns. We target the exact service area you want to reach." },
    ],
  },
  "home-services": {
    slug: "home-services",
    name: "Home Services",
    headline: "Fill your schedule with the calls you actually want.",
    subhead: "Marketing for HVAC, plumbing, electrical, landscaping, and home service companies — built to generate consistent, quality leads every month.",
    description: "Your business grows when the phone rings with quality calls. When it stops, you're scrambling. We build the marketing system that makes your lead flow predictable instead of hopeful — exclusive leads that come directly to you, not shared with five other companies.",
    stats: [
      { value: "3.2x", label: "Average Return on Ad Spend", benchmark: "Industry Avg: 1.5–2x" },
      { value: "$48", label: "Average Cost Per Lead", benchmark: "Industry Avg: $75–$120" },
      { value: "2-3", label: "Weeks to First Leads" },
      { value: "100%", label: "Exclusive Leads (Not Shared)" },
    ],
    services: [
      { title: "Exclusive Lead Campaigns", description: "No more competing with 5 other companies for the same lead. Every inquiry comes directly to you from your own ads.", icon: "Phone" },
      { title: "Before & After Content", description: "We capture the transformation — before/after photos, service demos, and job-site videos that prove your quality instantly.", icon: "Camera" },
      { title: "Call Tracking & Attribution", description: "Every phone call, form fill, and message is tracked back to the exact ad that generated it. No more guessing.", icon: "PhoneCall" },
      { title: "Service Area Targeting", description: "Reach homeowners in the exact towns and zip codes you serve — no wasted budget on areas you can't service.", icon: "MapPin" },
      { title: "Seasonal Campaign Adjustment", description: "AC in summer, heating in winter, landscaping in spring. We adjust messaging, budget, and targeting with the seasons.", icon: "Sun" },
      { title: "Review & Reputation Ads", description: "Turn your best Google and Facebook reviews into social proof ads that build trust before prospects even call.", icon: "Star" },
    ],
    differentiators: [
      { title: "Exclusive Leads, Not Shared Ones", description: "Unlike Angi or HomeAdvisor, we generate leads that come directly to YOUR business. No bidding wars. No racing to call back first. The lead is yours." },
      { title: "We Understand Seasonal Business", description: "We've managed campaigns through every season — we know when to push budget, when to pull back, and how to stay booked year-round." },
      { title: "Real Numbers You Can Act On", description: "Every month you'll know exactly how many calls came in, what each cost, and which campaigns are driving actual booked jobs — not just clicks." },
    ],
    results: [
      { metric: "32 Calls/Month (From 8)", description: "Took an HVAC company from 8 inbound calls per month to 32 within 90 days through targeted Meta campaigns." },
      { metric: "61% Lower Cost vs. Angi", description: "Generated leads at 61% less cost than HomeAdvisor/Angi leads for a plumbing company — and they were exclusive." },
      { metric: "Fully Booked in 60 Days", description: "A landscaping company went from open availability to a 3-week waitlist within 2 months of campaign launch." },
    ],
    testimonial: {
      quote: "I cancelled Angi and HomeAdvisor within two months. The leads from Allora are better quality, exclusive, and cost me way less.",
      name: "Jason T.",
      role: "Owner, HVAC Company — New Haven County",
    },
    challenges: [
      "Lead flow is up and down — you never know what next month will look like",
      "You're paying for shared leads through platforms like Angi or HomeAdvisor",
      "You've tried running Facebook ads but couldn't tell if they were working",
      "Competitors are showing up online everywhere while you rely on word of mouth",
      "You have no system to track which marketing efforts are actually producing revenue",
    ],
    approach: [
      "Build targeted Facebook and Instagram campaigns aimed at homeowners in your exact service area",
      "Produce before/after photos, service demos, and testimonial videos for ad creative",
      "Install call tracking and lead attribution so you know exactly where each call came from",
      "Set up retargeting so people who visit your website but don't call see your ads again",
      "Optimize budget and creative every month to get your cost per lead lower and lower",
    ],
    faqs: [
      { question: "How is this different from buying leads on Angi or HomeAdvisor?", answer: "Those platforms sell the same lead to 3-5 companies at once. You're competing on speed, not quality. Our system generates exclusive leads that come directly to your business from your ads. You own the customer relationship from the first click." },
      { question: "What home service industries do you work with?", answer: "HVAC, plumbing, electrical, landscaping, residential cleaning, pest control, roofing, painting, and general handyman services. If you serve homeowners locally, our system works for you." },
      { question: "How quickly will I see leads?", answer: "Most home service clients begin receiving leads within the first 2-3 weeks of campaign launch. The system optimizes over 60-90 days as we gather data and refine targeting." },
      { question: "Do I need a website for this to work?", answer: "A basic, professional website helps conversion rates. If yours needs improvement, we can advise on what to prioritize. The campaigns can also drive to lead forms directly." },
      { question: "What happens during slow seasons?", answer: "We adjust budgets, messaging, and targeting for seasonal patterns. During slower periods, we often shift focus to brand-building content and retargeting to prepare for peak season." },
    ],
  },
  "food-beverage": {
    slug: "food-beverage",
    name: "Food & Beverage",
    headline: "Fill tables, drive orders, and become the go-to spot.",
    subhead: "Marketing for restaurants, cafes, bars, and food brands in Connecticut — built to turn local attention into consistent foot traffic and revenue.",
    description: "Beautiful food photos and a decent Instagram aren't enough anymore — every restaurant has those. What separates the places that are always packed from the ones struggling to fill seats is a system that turns local attention into consistent foot traffic, online orders, and repeat customers.",
    stats: [
      { value: "4.2x", label: "Average Return on Ad Spend", benchmark: "Industry Avg: 2–3x" },
      { value: "$8", label: "Average Cost Per Reservation", benchmark: "Industry Avg: $18–$25" },
      { value: "35%", label: "Increase in Online Orders" },
      { value: "2x", label: "Event Booking Rate" },
    ],
    services: [
      { title: "Menu & Atmosphere Shoots", description: "We shoot your food the way it deserves — cinematic video and photography designed to make people hungry and ready to visit.", icon: "Utensils" },
      { title: "Reservation & Order Campaigns", description: "Ads tied directly to your reservation system or online ordering — so you can measure every dollar against real revenue.", icon: "CalendarCheck" },
      { title: "Event & Promo Campaigns", description: "New menu drop? Wine dinner? Holiday brunch? We launch targeted campaigns that fill seats for every special event.", icon: "PartyPopper" },
      { title: "Local Awareness Targeting", description: "Reach people within driving distance of your location who actively dine out, order in, or attend food events.", icon: "MapPin" },
      { title: "Multi-Platform Content Library", description: "One shoot produces assets for ads, Instagram, your website, Google Business Profile, and in-store displays.", icon: "LayoutGrid" },
      { title: "Delivery App Alternative Strategy", description: "Own your customer relationships instead of giving 30% margins to delivery apps. Build direct ordering channels.", icon: "ShoppingBag" },
    ],
    differentiators: [
      { title: "We Make Food Look Incredible", description: "Our in-house video and photo team specializes in food and atmosphere content that performs in ads — not just looks pretty on a feed." },
      { title: "Revenue-Tied Campaigns", description: "We don't measure success in likes. Every campaign is tied to a real business outcome — reservations, online orders, catering inquiries, or event bookings." },
      { title: "Built for Local, Not National", description: "We geo-target your exact trade area. A 10-mile radius of high-intent local diners is worth more than 100k followers who'll never walk through your door." },
    ],
    results: [
      { metric: "180 Reservations in 30 Days", description: "Generated 180 trackable reservations in the first month for a new restaurant opening through hyper-local Facebook and Instagram campaigns." },
      { metric: "2.5x Online Order Volume", description: "More than doubled direct online orders for a pizza restaurant, reducing their dependency on DoorDash and saving thousands in commission fees." },
      { metric: "$12 Per Event Booking", description: "Filled a 120-seat wine dinner event in 8 days at $12 per reservation through targeted local campaigns." },
    ],
    testimonial: {
      quote: "They shot our entire menu in one day and had ads running by the end of the week. We were fully booked that Saturday for the first time in months.",
      name: "Sarah L.",
      role: "Owner, Farm-to-Table Restaurant — Hartford",
    },
    challenges: [
      "Your Instagram looks great but isn't actually driving people through the door",
      "You've boosted posts a few times but have no idea if it actually worked",
      "Delivery apps are eating your margins and stealing customer loyalty",
      "Revenue swings wildly with seasons and events — no consistent baseline",
      "You can't tell which marketing efforts are actually filling tables",
    ],
    approach: [
      "Shoot high-quality food, atmosphere, and team content built specifically for ad campaigns",
      "Launch geo-targeted campaigns tied to your reservation system or online ordering platform",
      "Build event-specific campaigns for promotions, new menus, and seasonal offerings",
      "Track conversions tied to reservations, online orders, and phone calls",
      "Create a content library that works across ads, social media, your website, and in-store displays",
    ],
    faqs: [
      { question: "Do you work with both sit-down restaurants and quick service?", answer: "Yes. Our approach adapts to your model — whether you measure success by reservations, online orders, catering inquiries, or foot traffic." },
      { question: "How do you measure results for a restaurant?", answer: "We track reservation completions, online orders, calls, direction requests, and promotional code redemptions. The specific KPIs depend on your business model." },
      { question: "Do you handle food photography?", answer: "Yes. We shoot all food, atmosphere, and team content in-house. Every image and video is produced with ad performance in mind, not just aesthetics." },
      { question: "What budget do restaurants typically need?", answer: "Most restaurant clients invest $1,500-$3,000 per month in ad spend. Local geo-targeting keeps costs efficient since we are reaching a focused area." },
      { question: "Can you help with multiple locations?", answer: "Absolutely. We run location-specific campaigns with tailored messaging and budgets for each. The portal gives you visibility into performance per location." },
    ],
  },
  "beauty-retail": {
    slug: "beauty-retail",
    name: "Beauty & Retail",
    headline: "Book more appointments. Build a brand people love.",
    subhead: "Marketing for salons, med spas, boutiques, and beauty businesses — built to drive bookings, foot traffic, and repeat clients.",
    description: "A strong Instagram following feels good, but it doesn't pay the bills by itself. We build a paid marketing system that puts your brand in front of the right local audience and drives them to actually book, buy, or walk through the door.",
    stats: [
      { value: "4.8x", label: "Average Return on Ad Spend", benchmark: "Industry Avg: 2–3x" },
      { value: "$14", label: "Average Cost Per Booking", benchmark: "Industry Avg: $35–$50" },
      { value: "68%", label: "Client Rebooking Rate" },
      { value: "2", label: "Weeks to First New Bookings" },
    ],
    services: [
      { title: "Brand & Service Content", description: "We capture your space, your team, and your transformations — content that makes people feel the experience before they walk in.", icon: "Sparkles" },
      { title: "Booking-Driven Ad Campaigns", description: "Ads connected directly to your booking system — Vagaro, Square, Booksy, or custom. Every click is a potential appointment.", icon: "CalendarCheck" },
      { title: "Transformation & Before/After Ads", description: "Your best work, showcased in ads that target beauty-conscious audiences in your area. Social proof that converts.", icon: "Camera" },
      { title: "Retargeting & Rebooking", description: "Bring back website visitors who didn't book and past clients who haven't returned. Stay top-of-mind automatically.", icon: "RefreshCw" },
      { title: "New Service & Promo Launches", description: "Launching a new treatment, product line, or seasonal promotion? We build the buzz and fill the calendar.", icon: "Megaphone" },
      { title: "Lookalike Audience Targeting", description: "We build audiences that mirror your best existing clients — same demographics, interests, and spending habits.", icon: "Users" },
    ],
    differentiators: [
      { title: "We Understand Beauty Marketing", description: "From med spas to barbershops, we know the visual standards, booking flows, and seasonal trends that drive results in the beauty industry." },
      { title: "Content That Converts, Not Just Impresses", description: "Beautiful content is the baseline. Ours is strategically designed to stop the scroll, build desire, and drive the booking. Every asset has a job to do." },
      { title: "Booking System Integration", description: "We connect your ads directly to your booking platform. No friction, no lost leads. Prospects go from ad to appointment in seconds." },
    ],
    results: [
      { metric: "94 New Bookings in 30 Days", description: "Generated 94 new client bookings in the first month for a med spa through Instagram and Facebook campaigns." },
      { metric: "$14 Cost Per Appointment", description: "Drove appointment bookings at $14 each for a hair salon — compared to $40+ per booking from previous ad efforts." },
      { metric: "Waitlist in 6 Weeks", description: "A boutique esthetician went from 60% booked to a 2-week waitlist within 6 weeks of launching with us." },
    ],
    testimonial: {
      quote: "I used to spend hours on Instagram hoping it would bring clients in. Now I have a waitlist and I barely touch social media — the ads do the work.",
      name: "Tanya M.",
      role: "Owner, Med Spa — Stamford",
    },
    challenges: [
      "You're relying on Instagram followers for new clients but growth has plateaued",
      "Every salon, spa, and boutique in your area is competing for the same local audience",
      "Booking flow is inconsistent — packed one week, empty the next",
      "People visit your website or profile but never actually book",
      "You're constantly creating content but can't tell if it's driving any business",
    ],
    approach: [
      "Produce beautiful brand, service, and transformation content designed specifically for ads",
      "Launch Facebook and Instagram campaigns targeting beauty-interested audiences in your area",
      "Build retargeting campaigns for website visitors, past engagers, and lookalike audiences",
      "Connect ad tracking to your booking system and contact forms",
      "Test new creative every month and optimize budget toward what's driving the most bookings",
    ],
    faqs: [
      { question: "What types of beauty businesses do you work with?", answer: "Hair salons, med spas, estheticians, nail studios, barbershops, cosmetic practices, and beauty product retailers. If you book appointments or sell beauty services and products locally, we can build a system for you." },
      { question: "How do you target the right audience?", answer: "We use a combination of interest-based targeting, lookalike audiences from your existing clients, geographic targeting, and demographic filters to reach ideal clients in your area." },
      { question: "Do you handle content creation for social Media?", answer: "Yes. We produce all visual content — service demonstrations, transformations, team profiles, and atmosphere content — built for both ad campaigns and organic presence." },
      { question: "How quickly can I expect new bookings?", answer: "Most beauty clients see new bookings within the first 2-3 weeks of campaign launch. Consistency and volume improve over 60-90 days as we optimize." },
      { question: "What about retention marketing?", answer: "Our retargeting systems also serve as retention tools. We can target past clients with seasonal promotions, new services, and rebooking campaigns." },
    ],
  },
  "professional-services": {
    slug: "professional-services",
    name: "Professional Services",
    headline: "Get in front of the clients who need you most.",
    subhead: "Marketing for law firms, accounting practices, consultants, and advisors — built to establish authority and generate quality inquiries.",
    description: "Your potential clients research you long before they ever reach out. If your online presence doesn't reflect the caliber of your work, you're losing business to firms that look better online — even if they're not better at the work. We build a system that establishes your authority, puts you in front of decision-makers, and generates inquiries from people who are ready to hire.",
    stats: [
      { value: "4.1x", label: "Average Return on Ad Spend", benchmark: "Industry Avg: 1.5–2x" },
      { value: "$72", label: "Average Cost Per Inquiry", benchmark: "Industry Avg: $120–$180" },
      { value: "23%", label: "Inquiry-to-Client Close Rate" },
      { value: "90", label: "Day Retargeting Sequences" },
    ],
    services: [
      { title: "Authority Content Production", description: "Professional headshots, team videos, client testimonials, and thought leadership content that positions your firm as the clear choice.", icon: "Award" },
      { title: "Decision-Maker Targeting", description: "Reach business owners, executives, and high-net-worth individuals in your service area with precision demographic and interest targeting.", icon: "Target" },
      { title: "Long-Cycle Retargeting", description: "Professional services have longer decision cycles. Our 90-day retargeting keeps you visible until the prospect is ready to hire.", icon: "Clock" },
      { title: "Inquiry Attribution & Tracking", description: "Every form fill, phone call, and consultation request is tracked back to the specific campaign. Know your true cost per client acquisition.", icon: "BarChart3" },
      { title: "Thought Leadership Campaigns", description: "Position your expertise with educational content ads — guides, checklists, and insights that build trust and generate warm leads.", icon: "BookOpen" },
      { title: "Competitive Visibility Strategy", description: "Show up where your competitors don't. We identify gaps in your market's digital landscape and fill them with your firm.", icon: "Eye" },
    ],
    differentiators: [
      { title: "We Respect the Profession", description: "We understand that professional services demand a polished, credible presence. Our content is dignified, authoritative, and built to match the caliber of your firm." },
      { title: "Quality Over Quantity", description: "We don't flood you with junk leads. Our campaigns are optimized for inquiry quality — the right prospects who are ready to engage, not tire kickers." },
      { title: "Built for Long Sales Cycles", description: "Unlike agencies that optimize for immediate conversions, we build multi-touch campaigns designed for the way professional service clients actually make decisions." },
    ],
    results: [
      { metric: "14 New Clients in 90 Days", description: "Generated 14 new retained clients for a family law firm within the first quarter through Facebook authority campaigns." },
      { metric: "$62 Cost Per Consultation", description: "Drove consultation requests at $62 each for an accounting firm — each consultation averaging $4,200 in annual billings." },
      { metric: "34% Inquiry Quality Increase", description: "Improved inquiry quality by 34% for a financial advisory firm by refining targeting and adding thought leadership content to the funnel." },
    ],
    testimonial: {
      quote: "We were skeptical about social media ads for a law firm. Within 3 months, we had more qualified consultations than we'd gotten from networking all year.",
      name: "David K.",
      role: "Managing Partner, Law Firm — Hartford County",
    },
    challenges: [
      "Larger firms with bigger budgets dominate online visibility in your market",
      "Your online presence doesn't reflect the quality of work you actually do",
      "You're relying on referrals and networking, which limits how fast you can grow",
      "LinkedIn and content marketing feel like a time sink with unclear results",
      "You have no way to track which marketing efforts generate quality inquiries",
    ],
    approach: [
      "Produce authority content — professional team photos, client testimonials, thought leadership videos",
      "Launch targeted Facebook and Instagram campaigns reaching decision-makers in your service area",
      "Build retargeting to stay visible during long decision-making cycles (prospects may take months to decide)",
      "Install tracking to attribute every inquiry to the specific campaign that generated it",
      "Analyze inquiry quality and volume monthly, adjusting strategy to attract better prospects",
    ],
    faqs: [
      { question: "Do social media ads work for professional services?", answer: "Absolutely. Meta ads are highly effective for professional services because of the targeting precision — we can reach specific job titles, industries, income levels, and geographic areas. The key is the right creative and messaging." },
      { question: "How do you handle the longer sales cycle?", answer: "We build retargeting systems that keep your firm visible throughout the decision-making process. When a prospect is ready to commit, you are the firm they have been seeing consistently." },
      { question: "What kind of content do you produce?", answer: "Team portraits, client testimonial videos, case study content, and authority-building media. Everything is designed to position you as the credible choice before the first conversation." },
      { question: "How do you measure success in professional services?", answer: "We track inquiry volume, inquiry quality (assessed by your team), cost per inquiry, and pipeline contribution. The goal is quality conversations with the right people, not volume for its own sake." },
      { question: "What is a typical budget for professional services marketing?", answer: "Most professional service clients invest $3,000-$8,000 per month in ad spend plus management. Higher-value clients and longer sales cycles typically justify higher investment." },
    ],
  },
};

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industryData[slug];
}

export function getAllIndustrySlugs(): string[] {
  return Object.keys(industryData);
}

/** Array of all industries with their data, for listing pages */
export const industries = Object.entries(industryData).map(([key, data]) => ({
  ...data,
  slug: key,
  title: data.name,
}));
