export interface ServiceData {
  slug: string;
  name: string;
  headline: string;
  subhead: string;
  description: string;
  /** Optional override for the hero banner video */
  heroVideo?: string;
  whatWeDeliver: string[];
  whyItMatters: string;
  faqs: { question: string; answer: string }[];
  /** 3 key reasons this service matters — shown as card grid */
  whyCards: { title: string; text: string }[];
  /** Step-by-step process */
  process: { step: string; title: string; detail: string }[];
  /** Who this service is best for */
  idealFor: { title: string; desc: string }[];
  /** DIY vs Professional comparison */
  diyVsPro: { diy: string[]; pro: string[] };
  /** Stats to display in the content-is-king style section */
  stats: { stat: string; label: string }[];
}

export const servicesData: Record<string, ServiceData> = {
  "tv-commercials": {
    slug: "tv-commercials",
    name: "TV Commercials",
    headline: "TV commercials that make your business the one people remember.",
    subhead: "Broadcast-quality production — from concept to final cut — built to position your brand as the authority on local and regional television.",
    description: "Television advertising still holds a level of credibility and attention that digital alone can't match. When people see your business on TV, they instantly perceive it as more established, more professional, and more trustworthy. We handle everything — concept, script, talent, filming, editing, and delivery in broadcast-ready specs.",
    heroVideo: "/videos/hero-tv-commercials.mp4",
    whatWeDeliver: [
      "Concept development and scripting",
      "Professional talent casting when needed",
      "Full production crew — director, DP, audio, lighting",
      "On-location or studio filming",
      "Post-production editing, color grading, and sound design",
      "Delivery in broadcast-ready formats for local and regional stations",
      "Repurposed edits for digital campaigns and social media",
    ],
    whyItMatters: "A TV commercial gives your brand the kind of instant credibility that compounds over time. When prospects see your business on television AND in their social media feeds, you build familiarity and trust that makes them far more likely to choose you over competitors.",
    faqs: [
      { question: "How much does a TV commercial cost?", answer: "Production costs vary based on complexity, location, talent, and length. Most of our TV spots range from $5,000-$25,000 in production. Media buying (airtime) is separate and depends on your market and schedule." },
      { question: "Do you handle media buying for TV?", answer: "We can advise on media placement strategy and connect you with media buyers in your market. Our core focus is producing the spot itself to the highest possible standard." },
      { question: "How long is a typical commercial?", answer: "Most TV spots are 15 or 30 seconds. We also produce 60-second versions for specific placements and digital use." },
      { question: "Can the same content be used for digital ads?", answer: "Absolutely. We edit multiple versions — broadcast, social media, pre-roll — so your investment works across every platform." },
      { question: "How long does production take?", answer: "From concept to final delivery, most TV commercials take 3-6 weeks depending on complexity, talent scheduling, and post-production requirements." },
    ],
    whyCards: [
      { title: "Instant credibility", text: "TV is still the most trusted advertising medium. When people see your business on their television, you're perceived as more established and more legitimate than competitors who only advertise online." },
      { title: "Multi-platform ROI", text: "A single TV commercial investment gets repurposed into social media ads, website content, YouTube pre-roll, and trade show material — stretching every dollar across dozens of placements." },
      { title: "Brand recall that sticks", text: "TV combines sight, sound, and motion in a way that no other medium can. Viewers remember TV ads 3x longer than digital-only ads, creating lasting brand awareness." },
    ],
    process: [
      { step: "01", title: "Creative Strategy", detail: "We learn your goals, audience, and competitive landscape. Then we develop a concept and script that positions your brand for maximum impact." },
      { step: "02", title: "Pre-Production Planning", detail: "Storyboarding, location scouting, talent casting, shot list creation, and scheduling. Every detail is planned before the camera rolls." },
      { step: "03", title: "Production Day", detail: "Full crew on set — director, DP, audio, lighting, and production assistants. We capture everything needed plus B-roll for digital versions." },
      { step: "04", title: "Post-Production", detail: "Professional editing, color grading, sound design, motion graphics, and music licensing. Multiple rounds of review until it's perfect." },
      { step: "05", title: "Delivery & Distribution", detail: "Final spot delivered in broadcast-ready specs for your stations, plus repurposed cuts for social media, YouTube, and your website." },
    ],
    idealFor: [
      { title: "Established local businesses", desc: "Companies ready to position themselves as market leaders and reach a broader audience beyond digital channels." },
      { title: "Multi-location companies", desc: "Businesses with multiple locations looking for a unified brand message across regional television markets." },
      { title: "Franchise owners", desc: "Local franchisees who want to stand out in their market with custom commercials that build local trust and awareness." },
    ],
    diyVsPro: {
      diy: [
        "Looks like a low-budget local access channel ad",
        "Bad audio that immediately turns viewers off",
        "No concept or story — just listing features",
        "Wrong format specs rejected by TV stations",
        "Single version with no digital repurposing",
      ],
      pro: [
        "Broadcast-quality production that builds instant credibility",
        "Crystal-clear audio with professional voiceover and music",
        "Strategic storytelling that creates emotional connection",
        "Delivered in exact specs every station requires",
        "Multiple versions for TV, social media, and web",
      ],
    },
    stats: [
      { stat: "62%", label: "Of consumers trust TV ads more than any digital format (Nielsen)" },
      { stat: "3x", label: "Longer brand recall vs. digital-only campaigns (Nielsen)" },
      { stat: "80%", label: "Of households still watch traditional or streaming TV daily (Nielsen)" },
      { stat: "5-10x", label: "Content ROI when repurposed across digital platforms (Content Marketing Institute)" },
    ],
  },
  "testimonial-videos": {
    slug: "testimonial-videos",
    name: "Testimonial Videos",
    heroVideo: "/videos/hero-casestudies.mp4",
    headline: "Let your customers sell for you.",
    subhead: "Professionally captured client testimonials — the most powerful ad creative and trust-building asset your business can own.",
    description: "Nothing convinces a potential customer faster than hearing someone just like them describe their experience working with you. Testimonial videos consistently outperform every other type of ad creative we run, and they work just as hard on your website, in sales presentations, and across social media.",
    whatWeDeliver: [
      "Client interview coordination and scheduling",
      "Interview question framework designed to tell a compelling story",
      "Professional on-location filming with proper audio and lighting",
      "Post-production editing with branded graphics and captions",
      "Multiple format versions for ads, website, and social",
      "Highlight reels and short cuts for specific campaigns",
    ],
    whyItMatters: "Testimonial videos consistently deliver the lowest cost per lead of any creative format in paid campaigns. They build credibility, overcome objections, and shorten the sales cycle by letting your happiest clients do the convincing for you.",
    faqs: [
      { question: "What if my clients are camera shy?", answer: "Most people are. We use a conversational interview format — not a scripted performance — that puts clients at ease. The result feels natural and authentic, which is exactly what makes testimonials effective." },
      { question: "How many testimonials should I capture?", answer: "We recommend starting with 3-5 testimonials from different client types or industries. This gives you creative variety for testing in campaigns and covering different prospect objections." },
      { question: "How long are testimonial videos?", answer: "Full testimonials typically run 60-90 seconds. We also cut short versions (15-30 seconds) for ad campaigns and specific touchpoints." },
      { question: "Do you help select which clients to feature?", answer: "Yes. We help identify clients whose stories best align with the prospects you want to attract. The best testimonials come from clients who represent your ideal customer profile." },
      { question: "Can these be used in paid ad campaigns?", answer: "That is their primary purpose. Testimonial videos are our highest-performing ad creative across every industry we serve." },
    ],
    whyCards: [
      { title: "Lowest cost per lead", text: "Testimonial videos consistently outperform every other ad creative type in paid campaigns. Prospects trust real people sharing real experiences more than any scripted ad." },
      { title: "Overcomes objections automatically", text: "When a prospect hears a client describe the exact concern they had — and how your business solved it — the objection disappears. Testimonials pre-close sales." },
      { title: "Works everywhere", text: "One testimonial video becomes an ad, a website trust element, a social media post, a sales tool, and an email asset. No other content type is this versatile." },
    ],
    process: [
      { step: "01", title: "Client Selection Strategy", detail: "We help you identify which clients to feature based on your ideal customer profile, the objections you need to overcome, and the industries you want to attract." },
      { step: "02", title: "Interview Prep", detail: "We develop a question framework designed to draw out compelling stories naturally — not scripted responses. Your clients sound authentic because they are." },
      { step: "03", title: "Professional Capture", detail: "On-location filming with professional audio, lighting, and multiple camera angles. We make your clients comfortable and capture genuine emotion." },
      { step: "04", title: "Story-Driven Editing", detail: "We craft a narrative arc from the raw interview — problem, solution, result. Branded graphics, captions, and music create a polished, shareable asset." },
      { step: "05", title: "Multi-Format Delivery", detail: "Full-length testimonial, 15-second and 30-second ad cuts, square and vertical versions for social media, and website-optimized formats." },
    ],
    idealFor: [
      { title: "Service-based businesses", desc: "Companies where trust is the #1 factor in a buyer's decision — contractors, agencies, consultants, healthcare, and professional services." },
      { title: "Businesses with happy clients", desc: "If your clients love working with you but you've never captured those stories on camera, you're leaving your most powerful marketing asset on the table." },
      { title: "Companies running paid ads", desc: "If you're investing in Facebook or Instagram ads, testimonial videos will dramatically reduce your cost per lead and improve conversion rates." },
    ],
    diyVsPro: {
      diy: [
        "Shaky iPhone footage that looks unprofessional",
        "Muffled audio from background noise",
        "Awkward, scripted responses that feel fake",
        "No story structure — just a customer saying 'they're great'",
        "One format that doesn't work across platforms",
      ],
      pro: [
        "Cinematic quality that elevates your brand",
        "Crystal-clear audio with professional microphones",
        "Natural, conversational responses that build genuine trust",
        "Story arc: problem → solution → results that sell",
        "Multiple cuts optimized for every platform and placement",
      ],
    },
    stats: [
      { stat: "72%", label: "Of consumers trust a business more after watching testimonials (BrightLocal)" },
      { stat: "2x", label: "Higher conversion rate vs. standard ad creative (Wyzowl)" },
      { stat: "#1", label: "Highest-performing ad format across all industries we serve" },
      { stat: "40%", label: "Lower cost per lead compared to non-testimonial ads (Wyzowl)" },
    ],
  },
  "drone-content": {
    slug: "drone-content",
    name: "Drone Content",
    heroVideo: "/videos/hero-drone.mp4",
    headline: "Aerial content that shows the full scope of your work.",
    subhead: "FAA-licensed drone photography and videography for construction documentation, real estate showcases, events, and brand storytelling that sets you apart.",
    description: "Some businesses need to be seen from above to be fully appreciated. Construction companies, real estate firms, event venues, and businesses with impressive facilities — drone content communicates scale, quality, and professionalism in seconds flat.",
    whatWeDeliver: [
      "Licensed Part 107 drone operations",
      "4K aerial video and high-resolution photography",
      "Project progress documentation from aerial perspective",
      "Facility and property overviews",
      "Event coverage from unique angles",
      "Edited deliverables in multiple formats and aspect ratios",
    ],
    whyItMatters: "Aerial content makes your business look larger, more capable, and more professional. It shows prospects the full scope of your work in a way that ground-level photos simply can't. For construction, real estate, and hospitality businesses, drone content is a major competitive advantage.",
    faqs: [
      { question: "Are your drone operators licensed?", answer: "Yes. All drone operations are conducted by FAA Part 107 certified pilots with commercial drone insurance. We handle all regulatory compliance." },
      { question: "What about airspace restrictions?", answer: "We assess airspace restrictions before every shoot and obtain any required authorizations. Some locations near airports or restricted zones may require advance coordination." },
      { question: "What resolution do you shoot in?", answer: "All aerial video is captured in 4K resolution. Photography is captured at maximum sensor resolution for print and digital use." },
      { question: "Can you do ongoing documentation of a project?", answer: "Absolutely. We offer recurring documentation packages for construction and development projects — monthly or milestone-based aerial progress documentation." },
      { question: "How weather-dependent is drone work?", answer: "Drone flights require clear conditions — no rain, wind under 25mph, and adequate visibility. We schedule weather contingency windows for every shoot." },
    ],
    whyCards: [
      { title: "Shows the full picture", text: "Ground-level photos can't communicate the scale of a construction project, the beauty of a property, or the energy of an event the way aerial footage can." },
      { title: "Professional credibility", text: "Drone content instantly positions your business as more professional and more capable. It signals investment in quality that competitors can't match." },
      { title: "Versatile across use cases", text: "Aerial content works in ads, on your website, in proposals, on social media, and in presentations. It's one of the highest-value content investments you can make." },
    ],
    process: [
      { step: "01", title: "Pre-Flight Planning", detail: "We assess the location, check airspace regulations, plan the flight path, and coordinate timing for optimal lighting conditions." },
      { step: "02", title: "Safety & Compliance", detail: "All flights are FAA Part 107 compliant with proper insurance. We handle all permits and authorizations required for your location." },
      { step: "03", title: "Aerial Capture", detail: "Professional-grade drones capture 4K video and high-resolution stills from multiple altitudes and angles to tell the complete visual story." },
      { step: "04", title: "Post-Production", detail: "Color grading, stabilization, music, and editing transform raw aerial footage into polished, professional content." },
      { step: "05", title: "Multi-Format Delivery", detail: "Final deliverables in horizontal, vertical, and square formats — ready for your website, social media, ads, proposals, and presentations." },
    ],
    idealFor: [
      { title: "Construction & development", desc: "Document project progress from groundbreaking to completion with monthly or milestone-based aerial documentation that impresses clients and stakeholders." },
      { title: "Real estate professionals", desc: "Showcase properties with stunning aerial flyovers that highlight location, lot size, surroundings, and neighborhood context." },
      { title: "Event venues & hospitality", desc: "Capture the full scope of venues, outdoor spaces, and events from perspectives that ground-level photography simply cannot." },
    ],
    diyVsPro: {
      diy: [
        "Consumer drone with shaky, low-quality footage",
        "No FAA certification — risking hefty fines",
        "Raw footage with no editing or post-production",
        "Dangerous operation without proper training",
        "Limited to basic angles and altitudes",
      ],
      pro: [
        "Professional-grade 4K drone with stabilized gimbal",
        "FAA Part 107 certified with commercial insurance",
        "Fully edited with color grading, music, and graphics",
        "Safe, compliant operations with proven procedures",
        "Creative angles, altitudes, and flight paths that tell a story",
      ],
    },
    stats: [
      { stat: "83%", label: "Of sellers prefer agents who use drone photography (NAR)" },
      { stat: "68%", label: "Faster property sales with aerial content (NAR)" },
      { stat: "4K", label: "Ultra-high-definition resolution on every project" },
      { stat: "100%", label: "FAA compliant with Part 107 certification" },
    ],
  },
  "corporate-photography": {
    slug: "corporate-photography",
    name: "Corporate Photography",
    headline: "Look as professional online as you are in person.",
    subhead: "Team headshots, facility documentation, event coverage, and brand photography — all shot with digital performance in mind.",
    description: "Your online presence is the first impression most potential customers have of your business. Professional photography elevates your website, ads, social media, and proposals from amateur to authoritative. We shoot with a purpose — every image is optimized for the platforms where it will be used.",
    whatWeDeliver: [
      "Individual and team portrait sessions",
      "Facility and workspace documentation",
      "Event and corporate function coverage",
      "Environmental portraits and workflow documentation",
      "High-resolution files for print and digital",
      "Optimized versions for web, social, and ad placements",
    ],
    whyItMatters: "Real photos of your real team and real work outperform stock images in every marketing context — websites, ads, social media, and proposals. Authentic photography builds the trust and credibility that generic imagery never can.",
    faqs: [
      { question: "Where do you shoot?", answer: "Most corporate shoots happen on location at your office, facility, or job site. We bring all lighting and equipment needed to produce professional results in any environment." },
      { question: "How long does a typical shoot take?", answer: "A standard corporate shoot takes 2-4 hours depending on the scope — team size, number of locations, and deliverables needed." },
      { question: "How many final images will I receive?", answer: "This depends on the scope. A typical corporate session delivers 30-75 edited images. We discuss deliverable expectations during planning." },
      { question: "Do you handle retouching?", answer: "Yes. All delivered images are professionally edited including color correction, exposure adjustment, and standard retouching." },
      { question: "Can these photos be used in ad campaigns?", answer: "Yes. We shoot with ad use in mind — proper framing, lighting, and composition that works across ad formats and placements." },
    ],
    whyCards: [
      { title: "First impressions are visual", text: "90% of prospects check your website before contacting you. Professional photos of your real team and workspace build instant trust that stock images can never match." },
      { title: "Consistency builds recognition", text: "Professional photography creates a unified visual identity across your website, social media, ads, and marketing materials — making your brand more recognizable and memorable." },
      { title: "Authentic > stock every time", text: "Real photos of your real team outperform stock images in every measurable way — more clicks, more engagement, more conversions, and more trust." },
    ],
    process: [
      { step: "01", title: "Planning & Briefing", detail: "We discuss your needs — team headshots, facility shots, workflow documentation — and plan wardrobe, locations, and scheduling." },
      { step: "02", title: "On-Location Setup", detail: "We arrive with all equipment — professional lighting, backdrops, and gear — and set up to work efficiently in your space." },
      { step: "03", title: "Photo Session", detail: "Individual portraits, team shots, workspace documentation, and workflow captures. We keep it efficient and comfortable for your team." },
      { step: "04", title: "Professional Editing", detail: "Every image is individually color corrected, retouched, and optimized. Consistent style across all deliverables." },
      { step: "05", title: "Delivery & Organization", detail: "High-resolution master files plus web-optimized, social-optimized, and ad-ready versions. Organized and named for easy use." },
    ],
    idealFor: [
      { title: "Growing companies", desc: "Businesses that have outgrown their iPhone photos and need professional imagery that matches the quality of their work and their reputation." },
      { title: "Companies hiring and recruiting", desc: "Attract better talent with professional team photos and workspace imagery that showcases your culture and professionalism." },
      { title: "Professional service firms", desc: "Law firms, financial advisors, consultants, and agencies where personal credibility directly influences buying decisions." },
    ],
    diyVsPro: {
      diy: [
        "Inconsistent quality across team headshots",
        "Poor lighting that makes everyone look tired",
        "Cluttered backgrounds that distract from the subject",
        "Different phone cameras creating a mismatched look",
        "No optimization for web, social, or ad use",
      ],
      pro: [
        "Consistent, polished look across every team member",
        "Professional lighting that flatters every subject",
        "Clean, branded backgrounds that reinforce professionalism",
        "Uniform style and color palette across all images",
        "Delivered optimized for every platform — web, social, ads, print",
      ],
    },
    stats: [
      { stat: "94%", label: "Of first impressions are based on visual design (Stanford)" },
      { stat: "7x", label: "More likely to be contacted with professional photos (MDG Advertising)" },
      { stat: "46%", label: "Of consumers judge credibility based on website visuals (Stanford)" },
      { stat: "90%", label: "Of prospects research you online before reaching out (BrightLocal)" },
    ],
  },
  "product-shoots": {
    slug: "product-shoots",
    name: "Product Shoots",
    headline: "Product photos that make people want to buy.",
    subhead: "Clean, professional product imagery built for e-commerce, Facebook ads, catalogs, and social media.",
    description: "Product photography is where conversion rates are won or lost. Whether you sell physical products online or need to showcase your offerings in proposals, the quality of your product images directly impacts buying decisions. We shoot with composition and lighting optimized for every platform.",
    whatWeDeliver: [
      "Studio and environmental product photography",
      "White background and lifestyle context shots",
      "Multiple angles and detail captures per product",
      "E-commerce optimized images (square, consistent lighting)",
      "Social media and ad-ready versions",
      "Catalog and print-resolution files",
    ],
    whyItMatters: "Professional product images increase conversion rates, reduce returns, and build buyer confidence. In competitive markets, image quality is often the deciding factor between a customer choosing your product or a competitor's.",
    faqs: [
      { question: "Do you have a studio for product shoots?", answer: "We have access to studio space for controlled product photography. We also shoot on location for lifestyle and environmental product shots." },
      { question: "How many products can you shoot in a session?", answer: "This depends on complexity. Simple products on white backgrounds can be shot at high volume. Complex or styled products take more time. We scope every project individually." },
      { question: "Do you handle product styling?", answer: "For lifestyle shots, we coordinate styling and props. For food and beverage products, we work with food styling when needed." },
      { question: "What file formats do you deliver?", answer: "Standard delivery includes high-resolution JPEG files. We can also provide PNG (transparent background), TIFF, and web-optimized versions." },
      { question: "Do you shoot 360-degree product views?", answer: "We can capture multi-angle photo sets for interactive product viewers. True 360 video requires specialized equipment which we can arrange for specific projects." },
    ],
    whyCards: [
      { title: "Photos sell products", text: "Consumers make purchasing decisions in seconds based on product imagery. Professional photos increase click-through rates, add-to-cart rates, and overall conversion rates." },
      { title: "Fewer returns, more trust", text: "Accurate, high-quality product photos set proper expectations. Customers who see exactly what they're buying return products less and leave better reviews." },
      { title: "Competitive advantage", text: "In crowded e-commerce markets, professional product imagery is often the single biggest differentiator between brands. Quality photography signals quality product." },
    ],
    process: [
      { step: "01", title: "Product & Style Planning", detail: "We review your product line, discuss the visual style you need (clean white, lifestyle, environmental), and plan the shoot layout." },
      { step: "02", title: "Studio or Location Setup", detail: "Professional lighting, backgrounds, and surfaces are configured for consistent, repeatable results across your entire product line." },
      { step: "03", title: "Product Capture", detail: "Each product is photographed from multiple angles with attention to detail — texture, color accuracy, scale, and context." },
      { step: "04", title: "Professional Retouching", detail: "Color correction, background cleanup, shadow refinement, and detail enhancement. Every image meets e-commerce and advertising standards." },
      { step: "05", title: "Format-Specific Delivery", detail: "Square crops for e-commerce, lifestyle formats for social media, high-resolution for print, and transparent-background PNGs when needed." },
    ],
    idealFor: [
      { title: "E-commerce brands", desc: "Online retailers who need consistent, high-quality product imagery that drives conversions and reduces return rates across their catalog." },
      { title: "Food & beverage companies", desc: "Restaurants, breweries, and food brands that need mouth-watering photography that drives orders and builds brand recognition." },
      { title: "Retail businesses", desc: "Brick-and-mortar stores expanding online, launching new product lines, or updating their digital presence with professional imagery." },
    ],
    diyVsPro: {
      diy: [
        "Inconsistent lighting and color from photo to photo",
        "Shadows and reflections that distract from the product",
        "Wrong backgrounds that make products look cheap",
        "Images too small or blurry for e-commerce standards",
        "No platform-specific sizing or optimization",
      ],
      pro: [
        "Perfectly consistent lighting and color across every image",
        "Clean shadows and reflections that enhance the product",
        "Professional backgrounds matched to your brand aesthetic",
        "Ultra-high-resolution images that zoom and crop perfectly",
        "Delivered in exact sizes for every platform and use case",
      ],
    },
    stats: [
      { stat: "75%", label: "Of online shoppers rely on product photos to make decisions (Justuno)" },
      { stat: "22%", label: "Lower return rate with high-quality product images (Shopify)" },
      { stat: "40%", label: "Higher conversion rates with professional photography (MDG Advertising)" },
      { stat: "67%", label: "Of consumers say image quality is 'very important' (Etsy)" },
    ],
  },
  "graphic-design": {
    slug: "graphic-design",
    name: "Graphic Design",
    headline: "Design that builds trust and drives action.",
    subhead: "Ad graphics, social content, presentations, and brand materials — all designed to make your business look credible and get people to take the next step.",
    description: "Good design does more than look nice — it communicates credibility and gets people to take action. We produce graphic design assets built for specific purposes: ad creatives that generate clicks, social graphics that reinforce your brand, presentation decks that help close deals, and collateral that represents the quality of your business.",
    whatWeDeliver: [
      "Ad creative design for Meta and digital campaigns",
      "Social media graphic templates and one-off designs",
      "Presentation decks and proposal templates",
      "Brand collateral (business cards, letterheads, signage)",
      "Infographics and data visualization",
      "Print-ready files and digital-optimized versions",
    ],
    whyItMatters: "Consistent, professional design across every touchpoint — your website, ads, social media, and proposals — reinforces your brand authority and makes your business more recognizable. In paid campaigns, well-designed ad creatives directly impact how much you pay per lead.",
    faqs: [
      { question: "Do you create brand identity systems?", answer: "We can develop visual identity elements — logos, color systems, typography, and brand guidelines — but our primary focus is producing design assets that serve marketing campaigns and business operations." },
      { question: "How do revisions work?", answer: "Every project includes revision rounds. We present concepts, gather feedback, and refine until the design meets the strategic objective and your standards." },
      { question: "Can you design ad creatives for ongoing campaigns?", answer: "Yes. For clients with active paid campaigns, we produce new ad creatives on a recurring basis for testing. Fresh creative prevents ad fatigue and improves performance." },
      { question: "What tools do you design in?", answer: "We work in industry-standard tools and deliver in whatever format your team, printer, or platform requires." },
      { question: "Do you create templates I can use internally?", answer: "Yes. We can build branded templates for social media, presentations, and internal documents that your team can customize as needed." },
    ],
    whyCards: [
      { title: "Design drives credibility", text: "People judge businesses by how they look. Professional design across your ads, social content, and proposals signals that you're serious, established, and trustworthy." },
      { title: "Creative impacts ad costs", text: "The quality of your ad creative directly affects what you pay per click and per lead. Better-designed ads get more engagement, which lowers your cost per result on Meta and Google." },
      { title: "Brand consistency compounds", text: "Every touchpoint that looks consistent reinforces recognition. Over time, this consistency compounds — people start recognizing your brand before they even read your name." },
    ],
    process: [
      { step: "01", title: "Brand & Brief Review", detail: "We review your existing brand assets, understand the strategic objective, and define what each design piece needs to accomplish." },
      { step: "02", title: "Concept Development", detail: "Our design team develops 2–3 visual directions that align with your brand and the specific use case — whether it's an ad, a social post, or a pitch deck." },
      { step: "03", title: "Design Execution", detail: "The selected direction is built out across all required formats and sizes. We ensure every detail — typography, spacing, color — is pixel-perfect." },
      { step: "04", title: "Revision & Refinement", detail: "We present the work, gather your feedback, and refine. Our process ensures revisions are fast and focused on getting you the result you need." },
      { step: "05", title: "Final Delivery & Formats", detail: "Designs are delivered in every format you need — web-optimized for digital, print-ready for physical, editable templates for your team." },
    ],
    idealFor: [
      { title: "Businesses running paid ads", desc: "Companies spending on Meta or Google Ads who need high-quality ad creatives that lower costs and improve click-through rates." },
      { title: "Growing brands", desc: "Companies that have outgrown DIY canva designs and need professional, consistent brand materials across all touchpoints." },
      { title: "Teams that pitch", desc: "Sales teams and agencies that need polished presentation decks, proposals, and leave-behinds that help close deals." },
    ],
    diyVsPro: {
      diy: [
        "Canva templates that look like everyone else's",
        "Inconsistent fonts, colors, and spacing across materials",
        "Ad graphics that get ignored in the feed",
        "Presentations that don't instill confidence",
        "Hours spent designing instead of running your business",
      ],
      pro: [
        "Original designs built specifically for your brand",
        "Pixel-perfect consistency across every platform and format",
        "Ad creatives engineered for engagement and conversions",
        "Presentation decks that reinforce your authority",
        "Professional output delivered on a predictable timeline",
      ],
    },
    stats: [
      { stat: "94%", label: "Of first impressions are design-related (Stanford)" },
      { stat: "3×", label: "Higher engagement on well-designed ad creatives" },
      { stat: "80%", label: "Of consumers say brand consistency increases trust (Lucidpress)" },
      { stat: "23%", label: "Average revenue increase from consistent branding (Forbes)" },
    ],
  },
};

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData[slug];
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(servicesData);
}
