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
  "brand-story-documentaries": {
    slug: "brand-story-documentaries",
    name: "Brand Story Documentaries",
    headline: "Your most valuable communications asset is your story.",
    subhead: "Cinematic brand documentaries that share your mission, values, and team — deepening trust and loyalty with every viewer.",
    description: "A brand story documentary is the most powerful content asset your organization can own. By sharing your mission, values, and the passionate people behind your brand in an immersive video, you deepen trust and loyalty with customers, investors, and talent prospects alike.",
    heroVideo: "/videos/hero-brand-story.mp4",
    whatWeDeliver: [
      "Full documentary-style brand film (2–5 minutes)",
      "Pre-production research, creative briefs, and storyboards",
      "On-location filming with cinema-grade equipment",
      "Leadership and team interviews with professional audio",
      "Cinematic B-roll of your facility, operations, and culture",
      "Post-production editing with color grading, music, and graphics",
      "Derivative cuts for social media, ads, and presentations",
    ],
    whyItMatters: "Your brand story is the foundation of every relationship — with customers, investors, and talent. A documentary film lets people experience who you are and what you stand for in a way that no brochure, website, or sales pitch ever could.",
    faqs: [
      { question: "How long is a typical brand story documentary?", answer: "Most flagship brand films are 2–5 minutes. We also produce 30-second and 60-second derivative cuts for social media and advertising." },
      { question: "How much does a brand documentary cost?", answer: "Project scope varies based on complexity, number of interviews, locations, and post-production needs. Contact us for a custom quote tailored to your objectives." },
      { question: "How long does production take?", answer: "From creative brief to final delivery, most brand documentaries take 4–8 weeks. On-site filming is typically completed in 1–3 days." },
      { question: "Can the footage be used for other purposes?", answer: "Absolutely. We produce derivative cuts for social media, website headers, email campaigns, sales presentations, and digital ads — maximizing every frame." },
      { question: "Do you handle scripting and interviews?", answer: "Yes. We develop interview frameworks, research your brand deeply, and create creative briefs and storyboards before filming begins." },
    ],
    whyCards: [
      { title: "Build deep trust", text: "When people see the real humans behind your brand — their passion, expertise, and commitment — they develop a level of trust that no marketing copy can achieve." },
      { title: "Multi-purpose asset", text: "A single brand documentary becomes your website hero, your sales tool, your recruiting pitch, your investor presentation opener, and your social media anchor." },
      { title: "Differentiation that lasts", text: "Competitors can copy your products, your pricing, and your messaging. They can never copy your story. A brand documentary creates lasting differentiation." },
    ],
    process: [
      { step: "01", title: "Brand Immersion & Research", detail: "We dive deep into your brand — mission, values, audience, competitive landscape — to develop a creative brief and storyboard." },
      { step: "02", title: "Pre-Production Planning", detail: "Interview frameworks, shot lists, location scouting, talent coordination, and scheduling. Every detail is planned before cameras roll." },
      { step: "03", title: "On-Site Production", detail: "Full crew on location — director, DP, audio, lighting. We capture interviews, B-roll, drone footage, and candid moments." },
      { step: "04", title: "Post-Production", detail: "Professional editing, color grading, sound design, music licensing, and motion graphics. Multiple review rounds until it's perfect." },
      { step: "05", title: "Delivery & Deployment", detail: "Flagship film plus derivative cuts for social, ads, website, and presentations. Organized for easy deployment across all channels." },
    ],
    idealFor: [
      { title: "Purpose-driven brands", desc: "Companies with a strong mission who want to communicate their 'why' in a way that resonates with customers, investors, and talent." },
      { title: "Manufacturers & industrial companies", desc: "Organizations that need to showcase their facilities, processes, and team to build trust with B2B buyers." },
      { title: "Nonprofits & foundations", desc: "Organizations that need to communicate impact and inspire donors, volunteers, and community support." },
    ],
    diyVsPro: {
      diy: [
        "Interview footage with poor audio and lighting",
        "No narrative structure — just people talking",
        "Shaky handheld B-roll that looks amateur",
        "No music, color grading, or post-production polish",
        "One version that doesn't work on any platform well",
      ],
      pro: [
        "Cinematic quality with professional audio and lighting",
        "Story arc that builds emotional connection",
        "Dynamic B-roll with drone, gimbal, and detail shots",
        "Full post-production with color grading, music, and graphics",
        "Multiple formats optimized for every platform and use case",
      ],
    },
    stats: [
      { stat: "100+", label: "Videos produced for a single biotech client (Cybin Inc.)" },
      { stat: "$124M", label: "NYSE valuation supported by Story Real content (Cybin)" },
      { stat: "Telly", label: "Award-winning production team" },
      { stat: "4-Phase", label: "Proven production process" },
    ],
  },
  "interview-video-production": {
    slug: "interview-video-production",
    name: "Interview Video Production",
    headline: "Capture the essence of genuine conversations.",
    subhead: "Professional interview videos that create a space where real stories unfold — connecting viewers with the heart and soul behind the words.",
    description: "Interview videos are the backbone of visual storytelling. Whether you're capturing leadership insights, client testimonials, or family stories for a nonprofit, we create an environment where authentic conversations happen naturally — producing content that builds trust and drives action.",
    whatWeDeliver: [
      "Professional multi-camera interview setup",
      "Custom interview frameworks designed for natural conversation",
      "Professional lighting and audio for broadcast-quality results",
      "B-roll capture to complement interview content",
      "Post-production editing with story-driven narrative structure",
      "Derivative cuts for social media, website, and presentations",
    ],
    whyItMatters: "Authentic interviews are the most trusted form of video content. When real people share real experiences and insights, viewers connect on a level that scripted content never achieves. These videos become your most powerful trust-building assets.",
    faqs: [
      { question: "What if subjects are camera shy?", answer: "Most people are. We use a conversational approach — not scripted performance — that puts subjects at ease. The result feels natural and authentic." },
      { question: "How many interviews can you capture in a day?", answer: "A typical production day accommodates 4–6 individual interviews. We plan the schedule to respect everyone's time while ensuring quality." },
      { question: "How long are the final interview videos?", answer: "Full interviews typically run 60–120 seconds. We also cut 15–30 second versions for social media and advertising." },
      { question: "Do you provide the interview questions?", answer: "Yes. We develop custom interview frameworks based on your objectives, designed to draw out compelling stories naturally." },
      { question: "Can these be used across multiple campaigns?", answer: "Absolutely. Interview footage is incredibly versatile — a single interview produces content for your website, social media, ads, presentations, and email campaigns." },
    ],
    whyCards: [
      { title: "Authentic connection", text: "Real people sharing real stories creates a level of trust and emotional connection that no scripted ad or marketing copy can achieve." },
      { title: "Versatile content", text: "A single interview session produces flagship content, social media clips, quote graphics, and testimonial excerpts — maximizing your production investment." },
      { title: "Trust at scale", text: "Interview videos let you share authentic perspectives with thousands of people simultaneously — scaling the trust-building power of personal conversation." },
    ],
    process: [
      { step: "01", title: "Objective & Framework", detail: "We define interview objectives, develop question frameworks, and identify the stories you need to tell." },
      { step: "02", title: "Production Setup", detail: "Professional multi-camera setup with broadcast-quality lighting, audio, and backgrounds at your location." },
      { step: "03", title: "Guided Conversations", detail: "Our conversational approach puts subjects at ease, drawing out authentic insights and emotional responses." },
      { step: "04", title: "Story-Driven Editing", detail: "We craft narrative arcs from raw interviews — selecting the most compelling moments and weaving them into engaging stories." },
      { step: "05", title: "Multi-Format Delivery", detail: "Full interviews, social clips, and derivative content — all formatted for your specific platforms and campaigns." },
    ],
    idealFor: [
      { title: "Client testimonials", desc: "Capture the authentic voices of your customers and clients — the most powerful trust-building content you can own." },
      { title: "Leadership & thought leadership", desc: "Position your executives and subject matter experts as industry voices through polished interview series." },
      { title: "Nonprofit storytelling", desc: "Let the people your organization serves share their stories — building emotional connection with donors and supporters." },
    ],
    diyVsPro: {
      diy: [
        "Awkward, scripted responses that feel rehearsed",
        "Echo-filled audio from room acoustics",
        "Unflattering lighting that distracts from the message",
        "Single camera angle that feels like a Zoom recording",
        "No narrative structure — just a long talking head",
      ],
      pro: [
        "Natural, conversational responses that feel genuine",
        "Crystal-clear audio with professional microphones",
        "Flattering lighting that makes subjects look their best",
        "Multi-camera setup with dynamic angle changes",
        "Story-driven editing that keeps viewers engaged",
      ],
    },
    stats: [
      { stat: "30+", label: "Interview videos produced for RMHC in one engagement" },
      { stat: "100+", label: "Interview-based videos created for Cybin Inc." },
      { stat: "5+", label: "Testimonial videos captured for POWR2" },
      { stat: "Multi", label: "Camera production on every interview" },
    ],
  },
  "drone-content": {
    slug: "drone-content",
    name: "Aerial Drone Video",
    heroVideo: "/videos/hero-drone.mp4",
    headline: "Capture perspectives that ground-level media simply cannot.",
    subhead: "FAA-licensed drone photography and videography for manufacturing facilities, real estate, construction, and events.",
    description: "Some stories need to be told from above. Aerial footage communicates scale, scope, and professionalism in seconds — whether you're showcasing a manufacturing facility, documenting a construction project, or capturing the grandeur of an event venue.",
    whatWeDeliver: [
      "FAA Part 107 certified drone operations with commercial insurance",
      "4K ultra-high-definition aerial video",
      "High-resolution aerial photography",
      "Facility and property overviews",
      "Construction progress documentation",
      "Edited deliverables in multiple formats and aspect ratios",
    ],
    whyItMatters: "Aerial content makes your facilities, properties, and projects look larger, more capable, and more professional. It shows prospects the full scope of your operations in a way that ground-level media cannot. For manufacturing, real estate, and logistics companies, drone content is a major competitive advantage.",
    faqs: [
      { question: "Are your drone operators licensed?", answer: "Yes. All operations are conducted by FAA Part 107 certified pilots with commercial drone insurance. We handle all regulatory compliance." },
      { question: "What about airspace restrictions?", answer: "We assess airspace restrictions before every shoot and obtain any required authorizations. Some locations near airports may require advance coordination." },
      { question: "What resolution do you shoot in?", answer: "All aerial video is captured in 4K resolution. Photography is captured at maximum sensor resolution for print and digital use." },
      { question: "Can you do ongoing documentation?", answer: "Absolutely. We offer recurring packages for construction and development projects — monthly or milestone-based aerial progress documentation." },
      { question: "How weather-dependent is drone work?", answer: "We require clear conditions — no rain, wind under 25mph, and adequate visibility. We schedule weather contingency windows for every shoot." },
    ],
    whyCards: [
      { title: "Shows the full picture", text: "Ground-level media can't communicate the scale of a facility, the scope of a development, or the energy of an event the way aerial footage can." },
      { title: "Professional credibility", text: "Drone content instantly positions your business as more professional and capable. It signals an investment in quality that competitors can't match." },
      { title: "Versatile across use cases", text: "Aerial content works in brand films, on your website, in proposals, on social media, and in presentations — one of the highest-value content investments." },
    ],
    process: [
      { step: "01", title: "Pre-Flight Planning", detail: "Location assessment, airspace clearance, flight path planning, and timing for optimal lighting conditions." },
      { step: "02", title: "Safety & Compliance", detail: "FAA Part 107 compliant operations with proper insurance, permits, and authorizations." },
      { step: "03", title: "Aerial Capture", detail: "Professional-grade drones capture 4K video and high-resolution stills from multiple altitudes and angles." },
      { step: "04", title: "Post-Production", detail: "Color grading, stabilization, music, and editing transform raw aerial footage into polished content." },
      { step: "05", title: "Multi-Format Delivery", detail: "Final deliverables in horizontal, vertical, and square formats — ready for every platform." },
    ],
    idealFor: [
      { title: "Manufacturing facilities", desc: "Showcase the scale and capabilities of your operations from above — perfect for factory tours and capabilities videos." },
      { title: "Real estate & development", desc: "Capture properties with stunning aerial perspectives that highlight location, lot size, and neighborhood context." },
      { title: "Construction documentation", desc: "Track project progress from groundbreaking to completion with milestone-based aerial documentation." },
    ],
    diyVsPro: {
      diy: [
        "Consumer drone with shaky, low-quality footage",
        "No FAA certification — risking fines up to $32,666",
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
      { stat: "4K", label: "Ultra-high-definition resolution on every project" },
      { stat: "100%", label: "FAA compliant with Part 107 certification" },
      { stat: "83%", label: "Of sellers prefer agents who use drone photography (NAR)" },
      { stat: "68%", label: "Faster property sales with aerial content (NAR)" },
    ],
  },
  "tv-commercials": {
    slug: "tv-commercials",
    name: "TV Commercials & OTT Ads",
    headline: "Distill your message into impactful advertising that drives results.",
    subhead: "Broadcast-quality TV commercials and OTT ads — from concept to final cut — that capture attention and ensure your brand stands out.",
    description: "Television and OTT advertising hold a level of credibility and attention that digital alone can't match. When people see your brand on screen, they instantly perceive it as more established and trustworthy. We handle everything — concept, script, talent, filming, editing, and delivery in broadcast-ready specs.",
    heroVideo: "/videos/hero-tv-commercials.mp4",
    whatWeDeliver: [
      "Concept development and scripting",
      "Professional talent casting when needed",
      "Full production crew — director, DP, audio, lighting",
      "On-location or studio filming",
      "Post-production editing, color grading, and sound design",
      "Delivery in broadcast-ready formats for TV and OTT platforms",
      "Repurposed edits for digital campaigns and social media",
    ],
    whyItMatters: "A broadcast commercial gives your brand instant credibility. When prospects see your business on TV AND in their social feed, you build familiarity and trust that makes them far more likely to choose you. Our Black Lapel campaign achieved a sustained decrease in Cost Per Acquisition.",
    faqs: [
      { question: "How much does a TV commercial cost?", answer: "Production costs vary based on complexity, location, talent, and length. Most of our spots range from $5,000–$25,000 in production. Media buying is separate." },
      { question: "Do you handle media buying?", answer: "We can advise on media placement strategy and connect you with buyers in your market. Our core focus is producing the spot to the highest possible standard." },
      { question: "How long is a typical commercial?", answer: "Most spots are 15 or 30 seconds. We also produce 60-second versions for specific placements and digital use." },
      { question: "Can the same content work for digital ads?", answer: "Absolutely. We edit multiple versions — broadcast, social media, pre-roll — so your investment works across every platform." },
      { question: "How long does production take?", answer: "From concept to final delivery, most commercials take 3–6 weeks depending on complexity and post-production requirements." },
    ],
    whyCards: [
      { title: "Instant credibility", text: "TV remains the most trusted advertising medium. When people see your brand on screen, you're perceived as more established than competitors who only advertise digitally." },
      { title: "Multi-platform ROI", text: "A single commercial investment gets repurposed into social media ads, website content, YouTube pre-roll, and trade show material — stretching every dollar." },
      { title: "Proven results", text: "Our Traveler Suit campaign for Black Lapel resulted in a sustained decrease in Cost Per Acquisition — demonstrating the business impact of quality commercial production." },
    ],
    process: [
      { step: "01", title: "Creative Strategy", detail: "We learn your goals, audience, and competitive landscape. Then we develop a concept and script for maximum impact." },
      { step: "02", title: "Pre-Production", detail: "Storyboarding, location scouting, talent casting, shot list creation, and scheduling." },
      { step: "03", title: "Production Day", detail: "Full crew on set — director, DP, audio, lighting, and production assistants. We capture everything plus B-roll for digital cuts." },
      { step: "04", title: "Post-Production", detail: "Professional editing, color grading, sound design, motion graphics, and music licensing." },
      { step: "05", title: "Delivery & Distribution", detail: "Final spot in broadcast-ready specs plus repurposed cuts for social media, YouTube, and your website." },
    ],
    idealFor: [
      { title: "DTC brands", desc: "Direct-to-consumer companies looking to drive conversions and lower acquisition costs through compelling video advertising." },
      { title: "Regional businesses", desc: "Companies ready to position themselves as market leaders through broadcast and OTT advertising." },
      { title: "Product launches", desc: "Brands launching new products that need high-impact video content to drive awareness and initial sales." },
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
        "Delivered in exact specs every station and OTT platform requires",
        "Multiple versions for TV, social media, and web",
      ],
    },
    stats: [
      { stat: "Decreased", label: "Cost Per Acquisition for Black Lapel (Story Real campaign)" },
      { stat: "62%", label: "Of consumers trust TV ads more than any digital format (Nielsen)" },
      { stat: "3x", label: "Longer brand recall vs. digital-only campaigns (Nielsen)" },
      { stat: "5-10x", label: "Content ROI when repurposed across digital platforms" },
    ],
  },
  "3d-animated-videos": {
    slug: "3d-animated-videos",
    name: "3D Animated Videos",
    headline: "Simplify complex products and processes with hyper-realistic animation.",
    subhead: "In collaboration with our partner studio, we produce 3D animations that make the complex understandable and the invisible visible.",
    description: "Some products and processes can't be fully captured by a camera. 3D animation lets you show the internal workings of machinery, visualize products still in development, and simplify complex technical concepts into engaging visual content that educates and converts.",
    whatWeDeliver: [
      "Hyper-realistic 3D product animations",
      "Exploded views and cutaway visualizations",
      "Product launch animations for pre-development products",
      "Process and workflow animations",
      "Motion graphics and kinetic typography",
      "Multiple format deliverables for web, social, and presentations",
    ],
    whyItMatters: "When you can't point a camera at it, animation tells the story. Whether it's a product in development, an internal mechanism, or a complex process, 3D animation makes the invisible visible and the complex understandable — a powerful sales and education tool.",
    faqs: [
      { question: "How realistic are the animations?", answer: "We produce hyper-realistic 3D animations through our partner studio, JD Visuals. The level of detail and realism rivals photography for many applications." },
      { question: "Can you animate a product that's still in development?", answer: "Yes. We animated the POWRBANK MAX for POWR2 before the product was fully built — generating pre-orders and excitement for a product that didn't exist yet." },
      { question: "How long does 3D animation production take?", answer: "Timeline varies by complexity. Simple product animations typically take 3–4 weeks. Complex technical animations may take 6–8 weeks." },
      { question: "What do you need from us to get started?", answer: "CAD files, technical drawings, or reference photos of the product. We can also work from physical products to create 3D models." },
      { question: "Can animations be combined with live-action footage?", answer: "Absolutely. We frequently integrate 3D animation into live-action brand films and product videos for a dynamic, engaging result." },
    ],
    whyCards: [
      { title: "Show what cameras can't", text: "Internal mechanisms, microscopic processes, and products in development — 3D animation makes the impossible visible and the complex simple." },
      { title: "Pre-sell unreleased products", text: "Generate excitement and pre-orders for products still in development with realistic product launch animations — exactly what we did for POWR2." },
      { title: "Educate and convert", text: "Technical buyers need to understand how your product works. 3D animation simplifies complex processes into engaging content that educates and drives purchasing decisions." },
    ],
    process: [
      { step: "01", title: "Technical Brief", detail: "We review CAD files, technical specs, and product details to understand exactly what needs to be visualized and for what audience." },
      { step: "02", title: "3D Modeling", detail: "Our partner studio creates detailed 3D models of your product, components, or processes with precision accuracy." },
      { step: "03", title: "Animation & Simulation", detail: "Products are animated with realistic motion, lighting, materials, and environments that showcase form and function." },
      { step: "04", title: "Rendering & Post", detail: "High-resolution rendering with photorealistic materials and lighting, followed by post-production polish." },
      { step: "05", title: "Integration & Delivery", detail: "Standalone animation files plus integration with live-action footage when applicable. Multiple format delivery." },
    ],
    idealFor: [
      { title: "Manufacturing companies", desc: "Visualize internal mechanisms, assembly processes, and product capabilities that cameras can't capture on the factory floor." },
      { title: "Product companies with pre-launch products", desc: "Generate excitement for products still in development with realistic animated product reveals and launch videos." },
      { title: "Technical B2B companies", desc: "Simplify complex products and processes for buyers who need to understand how your solution works before committing." },
    ],
    diyVsPro: {
      diy: [
        "Basic animations that look cartoonish and unprofessional",
        "No understanding of product engineering or technical accuracy",
        "Inconsistent lighting and materials",
        "Generic templates that don't match your product",
        "Low resolution that pixelates on modern screens",
      ],
      pro: [
        "Hyper-realistic 3D animation indistinguishable from photography",
        "Technical accuracy reviewed by your engineering team",
        "Photorealistic materials, lighting, and environments",
        "Custom models built to your exact product specifications",
        "4K resolution optimized for every distribution channel",
      ],
    },
    stats: [
      { stat: "Pre-Launch", label: "Product animation for POWR2's POWRBANK MAX" },
      { stat: "Hyper", label: "Realistic rendering quality through JD Visuals partnership" },
      { stat: "Multi", label: "Format delivery for web, social, and presentations" },
      { stat: "Technical", label: "Accuracy through engineering review process" },
    ],
  },
  "social-media-content": {
    slug: "social-media-content",
    name: "Social Media Videos & Reels",
    headline: "Professional short-form content that drives engagement.",
    subhead: "Trending-style social media videos and IG reels blending your unique message with formats that spark interest and drive engagement.",
    description: "Social media demands a constant stream of fresh, engaging content. We produce short-form video content at professional quality — reels, stories, clips, and posts — designed to work within platform algorithms while maintaining your brand's visual standards.",
    whatWeDeliver: [
      "Platform-optimized vertical and square video content",
      "Instagram Reels, TikTok, and YouTube Shorts",
      "LinkedIn-optimized professional content",
      "Story-format content for Instagram and Facebook",
      "Content batches for consistent posting schedules",
      "Caption/subtitle overlays for silent viewing",
    ],
    whyItMatters: "Social media is where your audience spends their time. Professional short-form content that aligns with platform trends drives engagement and builds brand awareness — while maintaining the visual quality that differentiates your brand from competitors posting iPhone footage.",
    faqs: [
      { question: "How many social media videos do you produce per month?", answer: "Monthly packages vary. A typical engagement produces 8–15 social media videos per month, drawn from both dedicated social shoots and derivative cuts from larger productions." },
      { question: "Do you post the content for us?", answer: "We can deliver content ready to post with captions and optimal posting guidance, or work with your social media team to integrate into their calendar." },
      { question: "What platforms do you optimize for?", answer: "We produce content optimized for Instagram, TikTok, LinkedIn, YouTube Shorts, and Facebook — each formatted to platform specifications and algorithm preferences." },
      { question: "Can social content be derived from larger productions?", answer: "Absolutely. Every brand film, interview, and commercial we produce generates derivative social content — maximizing the value of every production day." },
      { question: "Do you follow social media trends?", answer: "Yes. We stay current with platform trends and algorithm changes, adapting content formats while maintaining your brand's professional standards." },
    ],
    whyCards: [
      { title: "Algorithm-friendly", text: "Content designed to work with platform algorithms — proper format, length, hooks, and engagement patterns that maximize organic reach." },
      { title: "Brand-quality consistency", text: "Professional production quality on every post — maintaining your brand standards even in trending, casual formats." },
      { title: "Batch efficiency", text: "We produce content in batches, giving you weeks of scheduled posts from a single production day — efficient and consistent." },
    ],
    process: [
      { step: "01", title: "Content Planning", detail: "We review your content calendar, identify trends, and plan a batch of social content aligned to your brand and objectives." },
      { step: "02", title: "Production", detail: "Dedicated social shoots or derivative content from larger productions — capturing quick-turn, high-quality social assets." },
      { step: "03", title: "Editing & Optimization", detail: "Platform-specific editing with captions, trending audio considerations, and format optimization for each platform." },
      { step: "04", title: "Review & Delivery", detail: "Content delivered in organized batches with posting guidance, captions, and hashtag recommendations." },
      { step: "05", title: "Performance Review", detail: "Regular analysis of content performance to inform future content direction and optimize what's working." },
    ],
    idealFor: [
      { title: "Brands with active social presence", desc: "Companies that need a consistent stream of professional content to maintain and grow their social media presence." },
      { title: "Marketing teams needing support", desc: "In-house teams that have the strategy but need professional production capacity to execute at the quality level their brand demands." },
      { title: "Companies running paid social", desc: "Brands investing in paid social media advertising that need a steady supply of fresh, high-quality creative to test and optimize." },
    ],
    diyVsPro: {
      diy: [
        "Inconsistent quality from phone footage",
        "Time-consuming for your team to produce regularly",
        "No strategic alignment with platform algorithms",
        "Brand voice and visual identity get lost in trends",
        "Content gaps lead to inconsistent posting",
      ],
      pro: [
        "Consistent professional quality on every post",
        "Batch production frees your team to focus on strategy",
        "Format and length optimized for each platform's algorithm",
        "Brand standards maintained even in trending formats",
        "Reliable content pipeline with scheduled delivery",
      ],
    },
    stats: [
      { stat: "3x", label: "LinkedIn audience growth for POWR2 through social content" },
      { stat: "15+", label: "Social videos typically produced per monthly engagement" },
      { stat: "Multi", label: "Platform optimization (IG, TikTok, LinkedIn, YouTube)" },
      { stat: "Batch", label: "Production for consistent, reliable content delivery" },
    ],
  },
  "product-demo-videos": {
    slug: "product-demo-videos",
    name: "Product Demo Videos",
    headline: "Transform product demonstrations into captivating experiences.",
    subhead: "Using live action, interviews, and animations, we highlight all features and benefits in videos that sell products and shorten sales cycles.",
    description: "Product demo videos are your most direct sales tool. We transform standard product demonstrations into captivating, immersive experiences that showcase every feature and benefit — combining live action footage, interviews, and animations to create content that educates buyers and drives purchasing decisions.",
    whatWeDeliver: [
      "Product overview videos (30–120 seconds)",
      "Feature-specific deep-dive videos",
      "Live action product demonstrations",
      "Integration of 3D animation for internal mechanisms",
      "Comparison and competitive positioning content",
      "Multiple format versions for web, social, and sales",
    ],
    whyItMatters: "B2B buyers want to see products in action before committing. Product demo videos let your sales team share compelling visual proof of capabilities with every prospect — working 24/7 as your digital sales representative across your website, email, and social channels.",
    faqs: [
      { question: "How long should a product demo video be?", answer: "Overview videos are typically 30–120 seconds. Feature-specific deep dives can be 2–3 minutes. We also create 15-second versions for social media advertising." },
      { question: "Can you demo a product that's still in development?", answer: "Yes. We can use 3D animation to demonstrate pre-production products, as we did for POWR2's POWRBANK MAX — generating pre-orders for a product not yet built." },
      { question: "Do you need the product shipped to your studio?", answer: "We typically film on location at your facility. For smaller products, we can also film at our studio in Southington, CT." },
      { question: "How quickly can product demo videos be produced?", answer: "Standard product demos can be turned around in under 3 weeks from shoot day to final delivery." },
      { question: "Can you show the product in use in real-world settings?", answer: "Absolutely. On-location filming shows products in their intended environment, adding context and credibility to the demonstration." },
    ],
    whyCards: [
      { title: "Sales tool that scales", text: "Your best sales presentation, available 24/7 to every prospect — on your website, in emails, and across social media. No more repeating the same demo in every meeting." },
      { title: "Shortens sales cycles", text: "Prospects who see product capabilities on video arrive at meetings already educated and ready to discuss scope — not asking basic questions about what your product does." },
      { title: "Multi-format versatility", text: "From 15-second social ads to 3-minute deep dives, one product shoot generates content for every stage of your sales funnel and every platform where buyers research." },
    ],
    process: [
      { step: "01", title: "Product & Audience Analysis", detail: "We understand your product, its key selling points, competitive advantages, and the audience you need to reach." },
      { step: "02", title: "Content Strategy", detail: "We plan which features to highlight, what formats to produce, and how the content will be used in your sales process." },
      { step: "03", title: "Production", detail: "On-location or studio shooting with professional equipment, capturing product in action from multiple angles." },
      { step: "04", title: "Post-Production", detail: "Editing that highlights key features, integrates graphics and animation, and creates a compelling narrative flow." },
      { step: "05", title: "Multi-Format Delivery", detail: "Overview videos, feature deep dives, social clips, and sales presentation versions — all from one production." },
    ],
    idealFor: [
      { title: "Manufacturing companies", desc: "Showcase complex equipment, machinery, and products with professional video that communicates capabilities better than spec sheets." },
      { title: "B2B product companies", desc: "Create scalable sales tools that educate buyers on your product's features and benefits before the first sales conversation." },
      { title: "Product launches", desc: "Generate excitement and educate your market with polished demo content that drives awareness and initial orders." },
    ],
    diyVsPro: {
      diy: [
        "Shaky footage that undermines product quality perception",
        "Poor lighting makes products look cheap",
        "No narrative — just showing the product existing",
        "Background noise and amateur audio",
        "One format that doesn't work well on any platform",
      ],
      pro: [
        "Cinematic quality that elevates product perception",
        "Professional lighting that showcases finish and detail",
        "Strategic narrative: problem → capability → result",
        "Crystal-clear audio with voiceover and music",
        "Multiple formats for every sales channel and platform",
      ],
    },
    stats: [
      { stat: "20+", label: "Product videos created for POWR2 alone" },
      { stat: "Under 3", label: "Weeks turnaround for standard product demos" },
      { stat: "30-120s", label: "Optimal product overview video length" },
      { stat: "24/7", label: "Your product demo working on every channel" },
    ],
  },
};

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData[slug];
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(servicesData);
}
