/* ------------------------------------------------------------------ */
/*  Blog data — rich content blocks for SEO-optimised formatting      */
/* ------------------------------------------------------------------ */

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "numbered"; items: string[] }
  | { type: "stat"; value: string; label: string; source?: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "subheading"; text: string }
  | { type: "callout"; title: string; text: string }
  | { type: "cta"; text: string; href: string };

export interface RelatedPage {
  label: string;
  href: string;
}

export interface BlogSection {
  heading: string;
  blocks: ContentBlock[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  image: string;
  content: BlogSection[];
  relatedSlugs: string[];
  relatedPages: RelatedPage[];
}

/** Lightweight metadata used by listing pages (no content payload). */
export type BlogPostMeta = Omit<BlogPost, "content" | "relatedSlugs" | "relatedPages">;

/* ------------------------------------------------------------------ */
/*  Categories                                                        */
/* ------------------------------------------------------------------ */
export const blogCategories = [
  "All",
  "Video Production",
  "Visual Storytelling",
  "Manufacturing",
  "Strategy",
] as const;

/* ------------------------------------------------------------------ */
/*  Posts                                                              */
/* ------------------------------------------------------------------ */
export const blogPosts: BlogPost[] = [
  /* ================================================================ */
  /*  1. Why Video Is the Most Powerful Sales Tool for Manufacturers  */
  /* ================================================================ */
  {
    slug: "video-most-powerful-sales-tool-manufacturers",
    title: "Why Video Is the Most Powerful Sales Tool for Manufacturers",
    description: "Discover how manufacturing companies use video content to accelerate their sales cycle, build trust with buyers, and win more contracts without requiring facility visits.",
    category: "Manufacturing",
    author: "Story Real Studios",
    publishedAt: "2024-11-15",
    readTime: "8 min",
    image: "/images/blog-manufacturing-video.jpg",
    content: [
      {
        heading: "The Manufacturing Sales Problem",
        blocks: [
          { type: "paragraph", text: "Most manufacturers face the same challenge: their capabilities, craftsmanship, and commitment to quality are their greatest competitive advantages — but prospects can't see any of it until deep into the sales cycle." },
          { type: "paragraph", text: "Sales conversations start from zero. Your team spends the first meeting explaining what you do, how you do it, and why you're different. Prospects need facility tours before they trust you enough to move forward. And competitors with inferior capabilities sometimes win because they simply look better online." },
          { type: "stat", value: "72%", label: "of B2B buyers watch video throughout their purchase journey", source: "Google/Ipsos" },
        ],
      },
      {
        heading: "How Video Transforms the Manufacturing Sales Cycle",
        blocks: [
          { type: "paragraph", text: "Video content flips the traditional manufacturing sales process on its head. Instead of prospects arriving at meetings with questions about your capabilities, they arrive already confident in what you can do — ready to discuss scope and timeline." },
          { type: "subheading", text: "Cinematic Factory Tours" },
          { type: "paragraph", text: "A well-produced factory tour lets prospects experience your facility, equipment, and team from anywhere in the world. We helped Marion Manufacturing create a cinematic factory tour that eliminated the need for pre-sale facility visits entirely — buyers now show up ready to talk business." },
          { type: "subheading", text: "Product Capability Videos" },
          { type: "paragraph", text: "For POWR2, we produced over 20 product overview videos ranging from 30 to 120 seconds. These videos quickly educated construction managers on the benefits of integrating the POWRBANK into their operations — resulting in tens of thousands of units sold." },
          { type: "subheading", text: "Brand Story Documentaries" },
          { type: "paragraph", text: "EFI Solutions used our documentary-style brand films to share their sustainability mission and manufacturing excellence. The 20+ videos became their primary sales tool, effectively shortening their sales cycle by letting buyers see the facility, processes, and people before visiting." },
        ],
      },
      {
        heading: "Real Results from Manufacturing Clients",
        blocks: [
          { type: "bullets", items: [
            "POWR2: LinkedIn audience tripled, tens of thousands of units sold, 450M+ lbs CO2 saved",
            "Marion Manufacturing: Eliminated pre-sale facility visits, higher contract win rate",
            "EFI Solutions: 20+ videos became primary sales tool, expanded geographic reach",
            "Enstructure: Transformed complex logistics into a compelling story for business development",
          ] },
          { type: "quote", text: "Collaborating with Story Real on our video projects was a game-changer. Their full-service dedication, prompt responsiveness, and a constant flow of creative ideas resulted in videos that not only told our brand story effectively and boosted product sales.", attribution: "Anne Nelson, Marketing Director, POWR2" },
        ],
      },
      {
        heading: "Getting Started with Manufacturing Video",
        blocks: [
          { type: "paragraph", text: "Our 4-phase approach is designed specifically for manufacturing environments: Content Blueprint, On-Site Filming, Visual Asset Library Creation, and Monthly Content Launches." },
          { type: "numbered", items: [
            "Building Your Content Blueprint — We deep dive into your business to identify growth opportunities and design a custom content strategy.",
            "On-Site Filming — In just a few days at your facility, we capture months worth of strategic video content without interrupting operations.",
            "Visual Asset Library — We organize and edit footage into a comprehensive library of marketing and sales assets.",
            "Monthly Content Launches — We deliver fresh, engaging video content monthly, tailored to your marketing goals.",
          ] },
          { type: "cta", text: "Schedule Your Manufacturing Brand Strategy Session", href: "/contact" },
        ],
      },
    ],
    relatedSlugs: ["brand-story-documentary-roi", "factory-tour-video-guide"],
    relatedPages: [
      { label: "Manufacturing Video Services", href: "/industries/manufacturing" },
      { label: "Our Portfolio", href: "/case-studies" },
    ],
  },
  /* ================================================================ */
  /*  2. The ROI of a Brand Story Documentary                        */
  /* ================================================================ */
  {
    slug: "brand-story-documentary-roi",
    title: "The ROI of a Brand Story Documentary: Why It's Your Most Valuable Content Asset",
    description: "A brand documentary is the most versatile content investment your company can make. Learn how one film becomes your website hero, sales tool, recruiting pitch, and social media anchor.",
    category: "Visual Storytelling",
    author: "Story Real Studios",
    publishedAt: "2024-10-28",
    readTime: "7 min",
    image: "/images/blog-brand-documentary.jpg",
    content: [
      {
        heading: "Why Your Brand Story Matters More Than Ever",
        blocks: [
          { type: "paragraph", text: "Every brand has a story. The question is whether that story is being told — or whether it's living only in the minds of your team, invisible to the customers, investors, and talent you're trying to reach." },
          { type: "paragraph", text: "A brand story documentary is unique because it serves every audience simultaneously: customers see why you're different, investors see why you're credible, and potential hires see why they should join you." },
          { type: "callout", title: "Story Real Philosophy", text: "Your most valuable communications asset is your STORY. By sharing your mission, values, and passionate team in an immersive video, you deepen trust and brand loyalty." },
        ],
      },
      {
        heading: "One Film, Infinite Applications",
        blocks: [
          { type: "paragraph", text: "The true ROI of a brand documentary isn't measured by views alone — it's measured by how many different contexts it serves. A single production investment creates assets for:" },
          { type: "bullets", items: [
            "Website hero video — the first thing visitors experience when they land on your site",
            "Sales presentations — open every pitch with your story, not a slide deck",
            "Social media anchor content — derivative clips that fuel months of organic content",
            "Investor presentations — communicate organizational value and mission in minutes",
            "Recruiting materials — attract talent who align with your culture and values",
            "Trade show and event content — play your story at booths and conference displays",
            "Email campaigns — embed compelling video content in outreach sequences",
          ] },
        ],
      },
      {
        heading: "Case Study: Cybin Inc.",
        blocks: [
          { type: "paragraph", text: "When we began working with Cybin, a biotech company pioneering psychedelic medicine for mental health, they faced a massive communication gap. The stigma around psychedelics made it nearly impossible to convey their scientific credibility and mission through text alone." },
          { type: "paragraph", text: "Through documentary-style storytelling, we emphasized each team member's personal story and the passion driving the culture. We produced over 100 videos — from flagship brand films to educational content to leadership interviews." },
          { type: "stat", value: "$124M", label: "NYSE valuation — Cybin became the first psychedelic company listed on the New York Stock Exchange" },
          { type: "stat", value: "250%", label: "team size growth — attracting top scientific and executive talent" },
          { type: "quote", text: "Over the past 6 months Luke & his team have transformed our brand with the corporate videos they've created.", attribution: "Alexa Orban, Senior Communications Manager, Cybin Inc." },
        ],
      },
      {
        heading: "How We Approach Brand Story Production",
        blocks: [
          { type: "paragraph", text: "At Story Real Studios, we believe a brand's organic story is its greatest asset. Our process is rooted in the art and science of consumer psychology and brand development:" },
          { type: "numbered", items: [
            "Brand Story Development — Creating a powerful narrative that captures your brand's essence and resonates with your audience.",
            "Creative Content Production — Transforming your vision into compelling media that tells your story and amplifies your message.",
            "Strategic Video Deployment — Ensuring your content reaches the right audience through targeted platforms for maximum impact.",
          ] },
          { type: "cta", text: "Talk To A Producer", href: "/contact" },
        ],
      },
    ],
    relatedSlugs: ["video-most-powerful-sales-tool-manufacturers", "nonprofit-fundraising-video-guide"],
    relatedPages: [
      { label: "Brand Story Services", href: "/services/brand-story-documentaries" },
      { label: "View Our Portfolio", href: "/case-studies" },
    ],
  },
  /* ================================================================ */
  /*  3. Nonprofit Fundraising Video Guide                           */
  /* ================================================================ */
  {
    slug: "nonprofit-fundraising-video-guide",
    title: "The Complete Guide to Nonprofit Fundraising Videos That Actually Drive Donations",
    description: "How nonprofits use documentary-style video to capture authentic stories, connect with donors, and drive fundraising results — with real examples from RMHC and Movember.",
    category: "Visual Storytelling",
    author: "Story Real Studios",
    publishedAt: "2024-09-20",
    readTime: "9 min",
    image: "/images/blog-nonprofit-video.jpg",
    content: [
      {
        heading: "Why Video Is Essential for Nonprofit Fundraising",
        blocks: [
          { type: "paragraph", text: "Nonprofits live and die by their ability to communicate impact. Text and photos can inform — but video makes people feel. And when people feel the impact of your work, they give." },
          { type: "paragraph", text: "The challenge for most nonprofits isn't a lack of powerful stories — it's capturing those stories in a way that's authentic, respectful, and compelling enough to inspire action." },
          { type: "stat", value: "57%", label: "of people who watch nonprofit videos go on to make a donation", source: "Google for Nonprofits" },
        ],
      },
      {
        heading: "Empathetic Storytelling: The Story Real Approach",
        blocks: [
          { type: "paragraph", text: "When we partnered with Ronald McDonald House Charities of CT & Western MA to create their fundraising film series, the most important element wasn't technical production quality — it was empathy." },
          { type: "paragraph", text: "Our approach centered on creating authentic, documentary-style films that captured the essence of RMHC's mission. We crafted over 30 unique videos — flagship house documentaries, family interview spotlights, volunteer impact stories, social media content, and FAQ videos." },
          { type: "quote", text: "Their empathetic approach to storytelling allowed our families to feel comfortable sharing their struggles, story & triumphs on camera.", attribution: "Cathy Bignolas, Global Marketing Director, RMHC" },
        ],
      },
      {
        heading: "Types of Nonprofit Videos That Drive Results",
        blocks: [
          { type: "subheading", text: "1. Brand Impact Documentaries" },
          { type: "paragraph", text: "The flagship film that communicates your mission, impact, and the people you serve. This is your centerpiece at fundraising galas, on your website, and in grant applications." },
          { type: "subheading", text: "2. Personal Story Spotlights" },
          { type: "paragraph", text: "Individual stories from the people your organization serves. These deeply personal, touching interviews offer windows into real lives and create emotional connections with donors." },
          { type: "subheading", text: "3. Volunteer & Supporter Stories" },
          { type: "paragraph", text: "Showcase the contributions of your volunteers and supporters — demonstrating community involvement and inspiring others to get involved." },
          { type: "subheading", text: "4. Campaign-Specific Videos" },
          { type: "paragraph", text: "Short-form, emotionally engaging content tailored for specific fundraising campaigns, awareness months, or seasonal giving initiatives." },
          { type: "subheading", text: "5. Cause-Driven Brand Films" },
          { type: "paragraph", text: "Our Into The Dark Blue film for the Movember Foundation used visual metaphor and adventure filmmaking to raise awareness for men's mental health — generating incredible community response and proving that cause-driven storytelling can transcend traditional PSA formats." },
        ],
      },
      {
        heading: "Getting the Most From Your Nonprofit Video Budget",
        blocks: [
          { type: "paragraph", text: "We understand nonprofit budgets. Our 4-phase production process is designed to maximize the content you receive from each engagement:" },
          { type: "numbered", items: [
            "Building Your Brand Impact Story — deep dive into your nonprofit's mission and communication needs",
            "On-Site Filming — capturing months of content in just a few days without disrupting your operations",
            "Visual Content Creation — organizing footage into a comprehensive library of marketing assets",
            "Monthly Content Launches — delivering fresh content tailored to your campaigns and initiatives",
          ] },
          { type: "callout", title: "Maximum Value", text: "From a single multi-day shoot, we typically produce a flagship documentary plus 10–20 derivative pieces including social clips, testimonial excerpts, and FAQ videos." },
          { type: "cta", text: "Schedule Your Nonprofit Strategy Session", href: "/contact" },
        ],
      },
    ],
    relatedSlugs: ["brand-story-documentary-roi", "visual-storytelling-purpose-driven-brands"],
    relatedPages: [
      { label: "Nonprofit Video Services", href: "/industries/nonprofits" },
      { label: "RMHC Case Study", href: "/case-studies/ronald-mcdonald-house-charities" },
    ],
  },
  /* ================================================================ */
  /*  4. Visual Storytelling for Purpose-Driven Brands               */
  /* ================================================================ */
  {
    slug: "visual-storytelling-purpose-driven-brands",
    title: "Visual Storytelling for Purpose-Driven Brands: Why Your Mission Deserves to Be Seen",
    description: "How purpose-driven brands use cinematic visual storytelling to communicate their mission, build authentic connections, and drive business results through video.",
    category: "Strategy",
    author: "Story Real Studios",
    publishedAt: "2024-08-10",
    readTime: "7 min",
    image: "/images/blog-purpose-driven.jpg",
    content: [
      {
        heading: "The Power of Purpose in Visual Storytelling",
        blocks: [
          { type: "paragraph", text: "At Story Real Studios, we exclusively work with Purpose-Driven Brands who aim to make a positive impact in the lives of consumers as well as society at large. This isn't just a business philosophy — it's the foundation of every story we tell." },
          { type: "paragraph", text: "Video uniquely combines multi-sensory engagement and dynamic storytelling, making it ideal for precisely communicating a brand's mission and values. Through emotional and engaging narratives, visual storytelling forms a deep, authentic connection with viewers, winning their hearts and minds." },
          { type: "callout", title: "Our Philosophy", text: "Instead of relying on marketing tactics and persuasion tricks, we believe a brand's organic story is its greatest asset. Authenticity isn't just a buzzword — it's a strategy." },
        ],
      },
      {
        heading: "Four Outcomes of Purpose-Driven Visual Storytelling",
        blocks: [
          { type: "subheading", text: "1. Winning Your Customers' Hearts & Minds" },
          { type: "paragraph", text: "Through emotional and engaging narratives, visual storytelling forms a deep, authentic connection with viewers. When people understand your WHY, they become advocates, not just customers." },
          { type: "subheading", text: "2. Accelerating Your Sales Cycle" },
          { type: "paragraph", text: "Informative videos can quickly demonstrate product benefits, simplifying decision-making and speeding up sales. This leads to higher conversion rates and shorter time from first contact to closed deal." },
          { type: "subheading", text: "3. Precisely Communicating Your Mission" },
          { type: "paragraph", text: "Video uniquely combines multi-sensory engagement and dynamic storytelling, making it ideal for precisely communicating a brand's mission and values in a way that text alone cannot achieve." },
          { type: "subheading", text: "4. Building Long-Term Brand Loyalty" },
          { type: "paragraph", text: "Consistent, engaging visual storytelling fosters deep connections, cultivating long-term brand loyalty among viewers and increasing your Customer Lifetime Value." },
        ],
      },
      {
        heading: "Our Storytelling Process",
        blocks: [
          { type: "paragraph", text: "Our award-winning storytelling process is rooted in the art and science of consumer psychology and brand development:" },
          { type: "numbered", items: [
            "Brand Story Development — Creating a powerful narrative that captures your brand's essence",
            "Creative Content Production — Transforming your vision into compelling media",
            "Strategic Video Deployment — Ensuring your content reaches the right audience for maximum impact",
          ] },
          { type: "paragraph", text: "Whether it's a biotech company revolutionizing mental healthcare, a manufacturer saving millions of pounds of CO2, or a charity supporting families in crisis — every brand we work with has a story worth telling. We're here to make sure it gets seen." },
          { type: "cta", text: "Talk To A Producer", href: "/contact" },
        ],
      },
    ],
    relatedSlugs: ["brand-story-documentary-roi", "video-most-powerful-sales-tool-manufacturers"],
    relatedPages: [
      { label: "About Story Real", href: "/about" },
      { label: "Our Process", href: "/process" },
    ],
  },
  /* ================================================================ */
  /*  5. Factory Tour Video Guide                                     */
  /* ================================================================ */
  {
    slug: "factory-tour-video-guide",
    title: "The Complete Guide to Cinematic Factory Tour Videos That Win Contracts",
    description: "How manufacturers use cinematic factory tour videos to build trust, eliminate pre-sale facility visits, and win high-impact contracts.",
    category: "Manufacturing",
    author: "Story Real Studios",
    publishedAt: "2024-07-05",
    readTime: "8 min",
    image: "/images/blog-factory-tour.jpg",
    content: [
      {
        heading: "Why Factory Tours Are Your Best Sales Tool",
        blocks: [
          { type: "paragraph", text: "For manufacturers, the facility tour has always been the ultimate trust-builder. Nothing sells like seeing the precision, equipment, and professionalism of your operation firsthand. The problem? Your best prospects are often hundreds or thousands of miles away." },
          { type: "paragraph", text: "Cinematic factory tour videos solve this by bringing your facility to every prospect, anywhere in the world, at any time. When done right, they don't just document your space — they tell the story of your capabilities in a way that builds confidence and accelerates decisions." },
        ],
      },
      {
        heading: "Case Study: Marion Manufacturing",
        blocks: [
          { type: "paragraph", text: "Marion Manufacturing, a metal stamping company, needed to build trust with prospective clients without requiring them to visit their factory. We created two flagship assets: a virtual business card video and a cinematic factory tour." },
          { type: "paragraph", text: "The result: the video suite eliminated the need for pre-sale facility visits. Prospects who watched the factory tour arrived at meetings already confident in Marion's capabilities, shifting conversations from 'Can you do this?' to scope and timeline." },
          { type: "quote", text: "The factory tour video changed everything for us. Prospects see our facility, our team, and our capabilities before we ever meet — they show up ready to talk business.", attribution: "Marion Manufacturing" },
        ],
      },
      {
        heading: "Elements of an Effective Factory Tour Video",
        blocks: [
          { type: "paragraph", text: "Not all factory tour videos are created equal. The difference between a compelling cinematic experience and a boring walkthrough comes down to storytelling, production quality, and strategic structure." },
          { type: "bullets", items: [
            "Cinematic camera work — stabilized gimbal shots, drone footage, and detail close-ups that create visual interest",
            "Personal narratives — team interviews that humanize your operation and showcase expertise",
            "Process storytelling — showing the journey from raw material to finished product",
            "Scale demonstration — aerial and wide shots that communicate the scope of your capabilities",
            "Brand integration — graphics, music, and pacing that reinforce your brand identity",
          ] },
        ],
      },
      {
        heading: "Our Manufacturing Video Process",
        blocks: [
          { type: "numbered", items: [
            "Content Blueprint — understanding your sales process, target buyers, and competitive positioning",
            "On-Site Production — capturing your facility, equipment, and team with cinema-grade equipment",
            "Post-Production — cinematic editing, color grading, and branded graphics",
            "Multi-Format Delivery — full tour, social clips, website versions, and sales presentation cuts",
          ] },
          { type: "cta", text: "Schedule Your Manufacturing Strategy Session", href: "/contact" },
        ],
      },
    ],
    relatedSlugs: ["video-most-powerful-sales-tool-manufacturers", "brand-story-documentary-roi"],
    relatedPages: [
      { label: "Manufacturing Video Services", href: "/industries/manufacturing" },
      { label: "Marion Case Study", href: "/case-studies/marion-manufacturing-factory-tour" },
    ],
  },
  /* ================================================================ */
  /*  6. How Biotech Companies Use Video                              */
  /* ================================================================ */
  {
    slug: "biotech-video-investor-relations",
    title: "How Biotech Companies Use Video to Attract Investors, Talent, and Public Trust",
    description: "Learn how biotech and pharmaceutical companies leverage professional video content for investor relations, talent recruitment, and public education — with the Cybin Inc. case study.",
    category: "Video Production",
    author: "Story Real Studios",
    publishedAt: "2024-06-12",
    readTime: "8 min",
    image: "/images/blog-biotech-video.jpg",
    content: [
      {
        heading: "The Biotech Communication Challenge",
        blocks: [
          { type: "paragraph", text: "Biotech companies do some of the most important work in the world — pioneering treatments, developing life-saving therapies, and pushing the boundaries of scientific understanding. But communicating that work to non-scientific audiences remains one of the industry's greatest challenges." },
          { type: "paragraph", text: "Investors need to understand organizational value. Potential hires need to feel the mission. Regulators need to see credibility. And the public needs to understand the science in human terms. Video is uniquely suited to serve all of these audiences simultaneously." },
        ],
      },
      {
        heading: "The Cybin Story: From Stigma to NYSE",
        blocks: [
          { type: "paragraph", text: "When we began working with Cybin Inc., a biotech company pioneering psychedelic medicine for mental healthcare, they faced a unique challenge: the stigma surrounding both psychedelics and mental health created a massive communication gap." },
          { type: "paragraph", text: "Our approach used documentary-style storytelling to emphasize each team member's personal story and the mission driving the culture. We produced Flagship Content as brand introductions, Micro Content for community building, educational FAQ videos for investor education, and leadership interviews for thought leadership." },
          { type: "stat", value: "100+", label: "videos produced across brand documentaries, educational content, leadership interviews, and social media" },
          { type: "stat", value: "$124M", label: "NYSE valuation — first psychedelic company listed on the New York Stock Exchange" },
          { type: "stat", value: "250%", label: "team growth with top-tier scientific and executive talent" },
        ],
      },
      {
        heading: "Video Content Categories for Biotech",
        blocks: [
          { type: "subheading", text: "Flagship Brand Content" },
          { type: "paragraph", text: "The first touch point your audience has with your brand. These videos emphasize who you are and what you stand for." },
          { type: "subheading", text: "Educational & FAQ Videos" },
          { type: "paragraph", text: "Identify the most commonly asked questions from your audience and develop videos that educate and inform." },
          { type: "subheading", text: "Leadership Interviews & Culture Videos" },
          { type: "paragraph", text: "Showcase the caliber of your team and the passion driving your organization's mission." },
          { type: "subheading", text: "Micro Content for Social Media" },
          { type: "paragraph", text: "Stay top of mind with a steady stream of company news, team highlights, and science updates." },
        ],
      },
      {
        heading: "Getting Started",
        blocks: [
          { type: "paragraph", text: "Our production process begins with deep research into your science, pipeline, and organizational value. We create informed creative briefs before production begins — because accuracy and credibility are non-negotiable in biotech communication." },
          { type: "cta", text: "Schedule Your Strategy Session", href: "/contact" },
        ],
      },
    ],
    relatedSlugs: ["brand-story-documentary-roi", "visual-storytelling-purpose-driven-brands"],
    relatedPages: [
      { label: "Health & Biotech Industry", href: "/industries/health-biotech" },
      { label: "Cybin Case Study", href: "/case-studies/cybin-biotech-video-production" },
    ],
  },
  /* ================================================================ */
  /*  7. Video Deployment Strategy                                    */
  /* ================================================================ */
  {
    slug: "video-deployment-strategy-guide",
    title: "Beyond Production: How to Deploy Video Content for Maximum Impact",
    description: "Producing great video is only half the equation. Learn how to strategically deploy your content across platforms for maximum reach, engagement, and business results.",
    category: "Strategy",
    author: "Story Real Studios",
    publishedAt: "2024-05-18",
    readTime: "7 min",
    image: "/images/blog-video-deployment.jpg",
    content: [
      {
        heading: "Production Is Just the Beginning",
        blocks: [
          { type: "paragraph", text: "Many companies invest in professional video production — and then let the finished product sit on their website collecting digital dust. The truth is, producing great video is only half the equation. Strategic deployment is what transforms a content investment into business results." },
          { type: "paragraph", text: "At Story Real Studios, our three-pillar approach — Brand Story Development, Creative Content Production, and Strategic Video Deployment — ensures that every video we produce reaches the right audience on the right platform at the right time." },
        ],
      },
      {
        heading: "Deploying Video Across the Customer Journey",
        blocks: [
          { type: "subheading", text: "Awareness: Website & Social Media" },
          { type: "paragraph", text: "Your brand documentary and hero videos should be the first thing visitors experience on your website. Derivative clips fuel your social media presence across LinkedIn, Instagram, and YouTube." },
          { type: "subheading", text: "Consideration: Sales Enablement" },
          { type: "paragraph", text: "Product demos, factory tours, and capability videos should be integrated into your sales process. Share them with prospects before meetings to pre-qualify interest and build trust." },
          { type: "subheading", text: "Decision: Testimonials & Case Studies" },
          { type: "paragraph", text: "Client testimonials and project case study videos address objections and build final confidence. These are your closers — deploy them at the bottom of your funnel." },
          { type: "subheading", text: "Retention: Culture & Education" },
          { type: "paragraph", text: "Educational content, company updates, and culture videos keep existing customers and employees engaged, informed, and loyal." },
        ],
      },
      {
        heading: "Platform-Specific Optimization",
        blocks: [
          { type: "bullets", items: [
            "LinkedIn: 60–120 second professional content, native upload, subtitled for silent viewing",
            "Instagram: Vertical Reels (15–60 seconds), Stories, and feed posts with strong opening hooks",
            "YouTube: Full-length content, optimized titles and descriptions, channel organization",
            "Website: Hero videos, page-specific content, embedded player with proper loading optimization",
            "Email: Thumbnail links to hosted video, GIF previews, short-form teasers",
            "Sales Decks: Embedded video links or offline-capable files for presentations",
          ] },
        ],
      },
      {
        heading: "Maximizing Your Content Investment",
        blocks: [
          { type: "paragraph", text: "Every production day should generate content for multiple channels and use cases. A single brand documentary production creates:" },
          { type: "numbered", items: [
            "Flagship 2–5 minute documentary for your website and presentations",
            "30-second and 60-second social media cuts for LinkedIn and Instagram",
            "15-second ad creative for paid social campaigns",
            "Quote graphics and still frames for organic posting",
            "Behind-the-scenes content for Stories and Reels",
            "Audio clips for podcast and email marketing",
          ] },
          { type: "cta", text: "Talk To A Producer About Your Video Strategy", href: "/contact" },
        ],
      },
    ],
    relatedSlugs: ["brand-story-documentary-roi", "visual-storytelling-purpose-driven-brands"],
    relatedPages: [
      { label: "Our Services", href: "/video-production" },
      { label: "Content Deployment", href: "/organic-social" },
    ],
  },
  /* ================================================================ */
  /*  8. Choosing a Video Production Company                          */
  /* ================================================================ */
  {
    slug: "choosing-video-production-company-connecticut",
    title: "How to Choose a Video Production Company: What Purpose-Driven Brands Should Look For",
    description: "Not all video production companies are created equal. Learn what to evaluate when choosing a production partner for your brand — from creative process to strategic thinking.",
    category: "Video Production",
    author: "Story Real Studios",
    publishedAt: "2024-04-22",
    readTime: "6 min",
    image: "/images/blog-choosing-production.jpg",
    content: [
      {
        heading: "More Than Just Camera Operators",
        blocks: [
          { type: "paragraph", text: "The difference between a video production company and a visual storytelling partner is the difference between footage and results. Many production houses can point cameras and deliver clean files. Far fewer can develop strategy, understand your business, and produce content that actually drives outcomes." },
          { type: "paragraph", text: "If your brand has a mission worth sharing, you need a partner who understands purpose-driven storytelling — not just production techniques." },
        ],
      },
      {
        heading: "What to Evaluate",
        blocks: [
          { type: "subheading", text: "1. Do They Invest in Understanding Your Business?" },
          { type: "paragraph", text: "Look for a company that starts with research and strategy, not shot lists. The best content comes from deep understanding of your business, your audience, and your competitive landscape." },
          { type: "subheading", text: "2. Do They Think Beyond Production Day?" },
          { type: "paragraph", text: "Production is one step. You need a partner who thinks about pre-production strategy, post-production storytelling, and deployment — not just the shoot itself." },
          { type: "subheading", text: "3. Have They Worked in Your Industry?" },
          { type: "paragraph", text: "Industry experience matters. A team that understands manufacturing, biotech, or nonprofit operations will capture more meaningful content than a generalist who needs everything explained." },
          { type: "subheading", text: "4. Can They Show Real Business Results?" },
          { type: "paragraph", text: "Ask for case studies with measurable outcomes — not just pretty reels. Real results like POWR2's tripled LinkedIn audience or Cybin's NYSE listing demonstrate that content drove actual business impact." },
          { type: "subheading", text: "5. Do Their Values Align With Yours?" },
          { type: "paragraph", text: "Purpose-driven brands deserve production partners who share their values. Look for authenticity, integrity, and a genuine interest in your mission." },
        ],
      },
      {
        heading: "Red Flags to Avoid",
        blocks: [
          { type: "bullets", items: [
            "No discovery process — they jump straight to pricing without understanding your business",
            "Portfolio is all flash, no substance — beautiful footage with no strategic storytelling",
            "Can't articulate how video content serves your business objectives",
            "No case studies showing measurable business results from their work",
            "One-size-fits-all pricing without customization to your needs",
          ] },
        ],
      },
      {
        heading: "Why Story Real Studios",
        blocks: [
          { type: "paragraph", text: "Story Real Studios is a Telly Award-winning production studio based in Southington, CT that exclusively works with purpose-driven brands. Our three-pillar approach — Brand Story Development, Creative Content Production, and Strategic Video Deployment — ensures every project drives real business outcomes." },
          { type: "paragraph", text: "We don't just produce content. We build visual storytelling systems that serve your brand for years." },
          { type: "cta", text: "Schedule Your Brand Story Consultation", href: "/contact" },
        ],
      },
    ],
    relatedSlugs: ["visual-storytelling-purpose-driven-brands", "brand-story-documentary-roi"],
    relatedPages: [
      { label: "About Us", href: "/about" },
      { label: "Our Process", href: "/process" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

/** Alias used by blog/[slug]/page.tsx */
export const getBlogBySlug = getBlogPostBySlug;

export function getBlogPostMeta(): BlogPostMeta[] {
  return blogPosts.map(({ content: _c, relatedSlugs: _r, relatedPages: _rp, ...meta }) => meta);
}

/** Alias used by blog/page.tsx */
export const getBlogPostsMeta = getBlogPostMeta;

/** Return all blog slugs for static generation */
export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
