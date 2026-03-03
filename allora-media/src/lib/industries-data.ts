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
  manufacturing: {
    slug: "manufacturing",
    name: "Manufacturing",
    headline: "Accelerate sales, build trust, and showcase your capabilities.",
    subhead: "Visual storytelling and media strategy for manufacturers — from cinematic factory tours to product launch videos that win contracts and attract talent.",
    description: "Your manufacturing facility, your processes, and your team are your greatest competitive advantages — but most buyers never see them until deep into the sales cycle. We build a visual content system that lets prospects experience your capabilities, precision, and commitment to quality before they ever step foot on your factory floor.",
    stats: [
      { value: "20+", label: "Videos Per Client (Avg)" },
      { value: "3x", label: "LinkedIn Audience Growth (POWR2)" },
      { value: "450M+", label: "Lbs CO2 Saved (POWR2)" },
      { value: "4", label: "Phase Production Process" },
    ],
    services: [
      { title: "Cinematic Factory Tours", description: "Immerse clients in your operations with a cinematic factory tour that builds trust, inspires confidence, and highlights your commitment to quality.", icon: "Clapperboard" },
      { title: "Brand Story Documentaries", description: "Your most valuable communications asset is your STORY. Share your mission, values, and team in an immersive video that deepens trust and brand loyalty.", icon: "Film" },
      { title: "Product Launch Videos", description: "Generate excitement and demand with cinematic product launch videos that showcase features and benefits to drive sales.", icon: "Rocket" },
      { title: "Informational Video Content", description: "Simplify complex processes with engaging videos that educate your audience and position your business as an industry leader.", icon: "BookOpen" },
      { title: "Project Highlight Videos", description: "Document your top projects to highlight expertise, innovative solutions, and the results you deliver for clients.", icon: "Award" },
      { title: "FAA Compliant Drone Video", description: "Capture stunning aerial footage with FAA-compliant drone operators to showcase facilities, projects, or events.", icon: "Plane" },
    ],
    differentiators: [
      { title: "We Understand Manufacturing", description: "From metal stamping to sustainable energy storage, we've produced content for manufacturers across the spectrum. We know how to translate technical processes into compelling visual stories." },
      { title: "4-Phase Production Process", description: "Our proven approach — Content Blueprint, On-Site Filming, Visual Asset Library, Monthly Content Launches — ensures maximum value from every production day." },
      { title: "Sales Tools That Close Deals", description: "Our videos aren't just marketing content — they're sales tools that shorten your cycle, eliminate pre-sale site visits, and let prospects experience your capabilities before the first meeting." },
    ],
    results: [
      { metric: "20+ Videos for EFI Solutions", description: "Created a comprehensive video library highlighting capabilities, processes, and story — resulting in more sales and higher trust." },
      { metric: "3x LinkedIn Growth for POWR2", description: "Nearly tripled POWR2's LinkedIn audience through strategic video content, establishing them as a voice in sustainable energy storage." },
      { metric: "Eliminated Pre-Sale Visits", description: "Marion Manufacturing's cinematic factory tour eliminated the need for prospect facility visits — buyers show up ready to discuss scope and timeline." },
    ],
    testimonial: {
      quote: "Collaborating with Story Real on our video projects was a game-changer. Their full-service dedication, prompt responsiveness, and a constant flow of creative ideas resulted in videos that not only told our brand story effectively and boosted product sales but also played a pivotal role in aligning our content with our company's comprehensive rebranding.",
      name: "Anne Nelson",
      role: "Marketing Director, POWR2",
    },
    challenges: [
      "Your capabilities and craftsmanship are your best-kept secret — buyers can't see them until they visit",
      "Complex technical processes are difficult to communicate in sales conversations",
      "Your sales cycle is too long because prospects need on-site visits to build trust",
      "Competitors with inferior capabilities look better online because they have video content",
      "Recruiting top talent is difficult without showcasing your culture and facility",
    ],
    approach: [
      "Deep dive into your manufacturing business to identify opportunities for growth and design a custom content blueprint",
      "On-site filming at your facility — capturing months worth of strategic video and photo content without interrupting operations",
      "Organize and edit footage into a comprehensive library of marketing and sales assets",
      "Deliver fresh, engaging video content monthly, tailored to your marketing goals and campaigns",
      "Integrate content seamlessly across your website, social media, sales process, and trade show presentations",
    ],
    faqs: [
      { question: "How long does the production process take?", answer: "Our 4-phase process typically spans 4–8 weeks from Content Blueprint to first deliverables. On-site filming is usually completed in 2–3 days at your facility without disrupting operations." },
      { question: "What types of manufacturing companies do you work with?", answer: "We've worked with metal stamping companies, sustainable energy storage manufacturers, water pump manufacturers, and logistics operations. Our process adapts to any manufacturing vertical." },
      { question: "Do you offer ongoing content production?", answer: "Yes. Phase 4 of our process includes monthly content launches and integration — delivering fresh video content each month tailored to your marketing goals and campaigns." },
      { question: "Can the videos be used as sales tools?", answer: "Absolutely. That's one of their primary purposes. Our factory tours, capabilities videos, and product demos are designed to function as visual sales assets that shorten your sales cycle." },
      { question: "Do you handle drone footage for large facilities?", answer: "Yes. We have FAA Part 107 certified drone operators with commercial insurance. Aerial footage is often integrated into factory tours and facility overviews." },
    ],
  },
  nonprofits: {
    slug: "nonprofits",
    name: "Nonprofits",
    headline: "Capture the hearts and minds of donors with compelling storytelling.",
    subhead: "Visual storytelling and media strategy for nonprofits — from documentary-style fundraising films to volunteer stories that inspire action and generosity.",
    description: "Your mission deserves to be seen and felt, not just read about. We produce documentary-style videos that let donors and supporters experience the real impact of your work — authentic stories told with empathy and cinematic quality that inspire people to give, volunteer, and advocate.",
    stats: [
      { value: "30+", label: "Videos for RMHC" },
      { value: "Award", label: "Winning Productions" },
      { value: "5", label: "Content Categories" },
      { value: "4", label: "Phase Production Process" },
    ],
    services: [
      { title: "Brand Story Documentaries", description: "Capture your nonprofit's mission, impact, and the people behind it in an immersive documentary film that inspires donors and builds trust.", icon: "Film" },
      { title: "Message-Driven Films", description: "Convey your organization's message and purpose through authentic content and immersive visuals that represent who you are.", icon: "Heart" },
      { title: "Personalized Testimonials", description: "Let your audience hear directly from the people whose lives you've impacted — authentic stories that form genuine connections with viewers.", icon: "Users" },
      { title: "Fundraising Campaign Videos", description: "Purpose-built videos designed to drive donations, volunteer sign-ups, and community engagement for specific campaigns and events.", icon: "HandHeart" },
      { title: "Social Media Content", description: "Short-form, emotionally engaging content tailored for social platforms that extends your reach and drives engagement with new supporters.", icon: "Share2" },
      { title: "FAQ & Educational Videos", description: "Clear, informative videos that answer common questions about your services and how the community can get involved.", icon: "HelpCircle" },
    ],
    differentiators: [
      { title: "Empathetic Storytelling", description: "We approach every nonprofit project with deep empathy. Our process ensures subjects feel comfortable sharing their stories on camera, resulting in genuinely moving content that connects." },
      { title: "Purpose-Driven Production", description: "Story Real Studios exclusively works with Purpose-Driven Brands. We understand the unique challenges nonprofits face in communicating impact and inspiring action through visual media." },
      { title: "Comprehensive Content Libraries", description: "One production engagement creates a library that serves your organization for months — flagship films, family spotlights, volunteer stories, social media content, and FAQ videos from a single shoot." },
    ],
    results: [
      { metric: "30+ Videos for RMHC", description: "Produced over 30 unique videos for Ronald McDonald House Charities — flagship documentaries, family spotlights, volunteer stories, social media content, and FAQ explainers." },
      { metric: "Award-Winning Mental Health Film", description: "Into The Dark Blue for Movember Foundation generated incredible community response and raised awareness for men's mental health through cinematic visual metaphor." },
      { metric: "CT Wine PSA Campaign", description: "Produced a series of persuasive PSA videos that humanized a complex legislative issue and generated community engagement for local businesses." },
    ],
    testimonial: {
      quote: "This past year, The Story Real Studios team partnered with our houses to create heartwarming fundraising films, focusing on the real authentic stories of the families who stay with us. Their empathetic approach to storytelling allowed our families to feel comfortable sharing their struggles, story & triumphs on camera.",
      name: "Cathy Bignolas",
      role: "Global Marketing Director, RMHC",
    },
    challenges: [
      "Your mission is powerful but difficult to communicate through text and photos alone",
      "Donors need to feel the emotional impact of your work before they're moved to give",
      "You need content that works across fundraising galas, social media, and grant applications",
      "Volunteers and families need to feel comfortable sharing their stories on camera",
      "Limited marketing budgets mean every content investment needs to serve multiple purposes",
    ],
    approach: [
      "Deep dive into your nonprofit's mission, operations, and outreach to identify opportunities for storytelling",
      "On-site filming at your locations — capturing emotionally moving video and photo content with sensitivity and empathy",
      "Organize and edit footage into a comprehensive library of fundraising and communications assets",
      "Deliver fresh content monthly, tailored to your fundraising campaigns and awareness initiatives",
      "Integrate content across your website, social media, email campaigns, and event presentations",
    ],
    faqs: [
      { question: "How do you handle sensitive subject matter?", answer: "With deep empathy and care. Our process ensures families and participants feel comfortable sharing their stories. We work closely with your team to establish boundaries and create a safe environment for authentic storytelling." },
      { question: "Can the videos be used for grant applications?", answer: "Absolutely. Our documentary-style content is perfect for demonstrating impact to foundations and grant committees. We can produce specific versions tailored to grant requirements." },
      { question: "What is the typical budget for nonprofit video production?", answer: "We understand nonprofit budgets. Our 4-phase process is designed to maximize the content you receive from each production engagement. Contact us for a custom quote based on your needs." },
      { question: "Do you produce content for fundraising events?", answer: "Yes. We create flagship films for galas, campaign launch videos, and post-event recap content. Each piece is designed to drive donations and community engagement." },
      { question: "How many videos can we get from one shoot?", answer: "Our approach is designed for efficiency. From a single multi-day shoot, we typically produce a flagship documentary plus 10–20 derivative pieces including social media clips, testimonial excerpts, and FAQ videos." },
    ],
  },
  "health-biotech": {
    slug: "health-biotech",
    name: "Health & Biotech",
    headline: "Communicate complex science through compelling visual stories.",
    subhead: "Visual storytelling and media strategy for biotech, pharmaceutical, and health companies — from investor relations videos to recruitment content that attracts top talent.",
    description: "Breakthrough science and innovative medicine deserve to be understood, not just published. We produce video content that bridges the gap between complex research and human understanding — helping biotech companies attract investors, recruit talent, educate regulators, and connect with the public.",
    stats: [
      { value: "100+", label: "Videos for Cybin Inc." },
      { value: "$124M", label: "Client NYSE Valuation" },
      { value: "250%", label: "Client Team Growth" },
      { value: "First", label: "Psychedelic Co. on NYSE" },
    ],
    services: [
      { title: "Investor Relations Videos", description: "Communicate your science, pipeline, and organizational value to institutional investors with polished, credible content that builds confidence.", icon: "TrendingUp" },
      { title: "Recruitment & Culture Videos", description: "Attract top scientific and executive talent by showcasing your mission, culture, and the passionate people driving your organization.", icon: "Users" },
      { title: "Educational & FAQ Content", description: "Translate complex scientific concepts into accessible, engaging videos that educate investors, regulators, and the public.", icon: "BookOpen" },
      { title: "Leadership Interview Series", description: "Position your leadership team as thought leaders with professionally produced interview content for LinkedIn, your website, and investor channels.", icon: "Mic" },
      { title: "Brand Documentary Films", description: "Tell the story of your company's mission, the science behind your work, and the human impact you're striving to create.", icon: "Film" },
      { title: "Social Media Micro-Content", description: "Stay top of mind with a steady stream of short-form content — company news, team highlights, and science updates for LinkedIn and social platforms.", icon: "Share2" },
    ],
    differentiators: [
      { title: "We Understand the Stakes", description: "From regulatory communication to investor relations, we understand that biotech video content must be accurate, credible, and professional. We research your science and create informed briefs before production begins." },
      { title: "Proven Biotech Track Record", description: "Our work with Cybin Inc. — 100+ videos, NYSE listing, 250% team growth — demonstrates our ability to create content that drives real business outcomes for biotech companies." },
      { title: "Multi-Audience Content Strategy", description: "We produce content that serves multiple audiences from a single production — investors, talent prospects, regulators, and the public — maximizing your content investment." },
    ],
    results: [
      { metric: "100+ Videos for Cybin", description: "Collaborated with mental health biotech startup Cybin on over 100 videos spanning brand documentaries, educational content, leadership interviews, and social media content." },
      { metric: "$124M NYSE Valuation", description: "Cybin became the first psychedelic company in history to trade on the NYSE — supported by professional video content that communicated credibility to institutional investors." },
      { metric: "250% Team Size Growth", description: "Cybin's team nearly tripled with top-tier scientific and executive talent, with recruitment and culture videos playing a significant role in attracting candidates." },
    ],
    testimonial: {
      quote: "Over the past 6 months Luke & his team have transformed our brand with the corporate videos they've created. His team has a keen eye for video production, even taking the time to research and create briefs, storyboards, and questions that align perfectly with the goal of the project!",
      name: "Alexa Orban",
      role: "Senior Communications Manager, Cybin Inc.",
    },
    challenges: [
      "Complex science is difficult to communicate to non-technical audiences like investors and the public",
      "Stigma or misunderstanding around your field creates communication barriers",
      "Recruiting top talent requires showcasing your culture and mission compellingly",
      "Regulatory bodies and investors need credible, professional content — not marketing fluff",
      "Your story is powerful but you lack the visual content to tell it at scale",
    ],
    approach: [
      "Research your science, pipeline, and organizational value to create informed creative briefs",
      "Develop a multi-audience content strategy — investor relations, recruitment, education, and brand storytelling",
      "On-site production capturing leadership interviews, facility footage, team culture, and scientific processes",
      "Edit footage into a comprehensive library organized by audience and objective",
      "Deliver ongoing content monthly to keep all channels active and your brand top of mind",
    ],
    faqs: [
      { question: "How do you handle scientific accuracy?", answer: "We invest significant time in research and pre-production briefing. Our team works closely with your scientific leadership to ensure all content is accurate and appropriate for each audience." },
      { question: "Can you produce content for investor presentations?", answer: "Absolutely. Investor-facing content is one of our primary deliverables for biotech clients. We create polished videos that communicate pipeline progress, organizational value, and team caliber." },
      { question: "What about regulatory sensitivity?", answer: "We understand the regulatory environment biotech companies operate in. Our content is developed with appropriate disclaimers and messaging that respects regulatory requirements." },
      { question: "How many videos can we expect?", answer: "Our Cybin engagement produced 100+ videos over the course of the partnership. A typical initial engagement produces 15–25 videos across multiple categories from a series of production days." },
      { question: "Do you offer ongoing production partnerships?", answer: "Yes. Most of our biotech clients engage in ongoing production relationships, with quarterly or monthly content production cycles that keep their visual library current and their channels active." },
    ],
  },
  "real-estate": {
    slug: "real-estate",
    name: "Real Estate",
    headline: "Showcase properties and projects with cinematic visual storytelling.",
    subhead: "Visual storytelling and media strategy for real estate developers, commercial properties, and construction companies — from aerial tours to brand films.",
    description: "Properties sell faster when buyers can experience them visually before visiting. We produce cinematic property tours, aerial drone footage, development progress documentation, and brand storytelling content that helps real estate professionals stand out in a competitive market.",
    stats: [
      { value: "4K", label: "Ultra-HD Resolution" },
      { value: "FAA", label: "Certified Drone Ops" },
      { value: "68%", label: "Faster Sales (NAR)" },
      { value: "83%", label: "Prefer Drone Video (NAR)" },
    ],
    services: [
      { title: "Cinematic Property Tours", description: "Immersive video tours that let buyers experience the property, neighborhood, and lifestyle before ever visiting in person.", icon: "Home" },
      { title: "FAA-Compliant Drone Footage", description: "Stunning aerial video and photography that showcases properties, developments, and surroundings from perspectives that ground-level media can't capture.", icon: "Plane" },
      { title: "Development Progress Documentation", description: "Monthly or milestone-based aerial and ground-level documentation that tracks construction progress for investors, stakeholders, and marketing.", icon: "Calendar" },
      { title: "Brand Story Films", description: "Communicate your company's track record, values, and approach through polished brand documentaries that build trust with buyers and investors.", icon: "Film" },
      { title: "Community & Lifestyle Content", description: "Showcase the lifestyle and community surrounding your properties — restaurants, parks, schools, and amenities that drive buying decisions.", icon: "MapPin" },
      { title: "Agent & Team Profiles", description: "Professional video profiles that build personal connection and trust with potential clients before the first showing.", icon: "Users" },
    ],
    differentiators: [
      { title: "Cinematic Production Quality", description: "Our production quality stands apart from typical real estate video. We bring the same cinematic approach used in brand films and documentaries to every property we shoot." },
      { title: "Full-Service Drone Operations", description: "FAA Part 107 certified pilots with commercial insurance handle all regulatory compliance, airspace authorization, and flight planning." },
      { title: "Multi-Purpose Content", description: "Every production creates assets for listings, social media, your website, investor presentations, and digital advertising — maximizing your content investment." },
    ],
    results: [
      { metric: "Cinematic Operations Films", description: "Produced dynamic property and operations films for commercial real estate clients, transforming technical spaces into compelling visual stories." },
      { metric: "Drone Documentation", description: "FAA-compliant aerial footage that showcases the full scope of properties and developments from perspectives that ground-level media can't achieve." },
      { metric: "Multi-Platform Content", description: "Each production creates a library of assets for listings, social media, websites, and investor presentations." },
    ],
    testimonial: {
      quote: "The aerial footage and cinematic tours Story Real produces transform how our properties are perceived online. Buyers arrive already emotionally connected to the space.",
      name: "Real Estate Client",
      role: "Commercial Developer, Connecticut",
    },
    challenges: [
      "Static photos and virtual tours don't convey the feel and experience of a property",
      "Competing properties with professional video content attract more inquiries",
      "Development projects need progress documentation for investors and stakeholders",
      "Your brand story and track record aren't visible to potential buyers before meetings",
      "Generic real estate video doesn't differentiate your listings from competitors",
    ],
    approach: [
      "Pre-production planning — understanding the property, target buyer, and key selling points",
      "On-site production with professional cinema cameras, lighting, audio, and FAA-certified drone operators",
      "Post-production editing with cinematic color grading, music, and graphics",
      "Delivery in multiple formats — full tours, social clips, aerial highlights — for every platform",
      "Ongoing documentation packages for development projects and property portfolios",
    ],
    faqs: [
      { question: "Do you handle commercial and residential properties?", answer: "Yes. Our cinematic approach adapts to commercial developments, luxury residential, multifamily properties, and mixed-use projects." },
      { question: "How quickly can you turn around property tours?", answer: "Standard property tours are delivered within 5–7 business days. Expedited delivery is available for time-sensitive listings." },
      { question: "Do you handle drone photography regulations?", answer: "Fully. Our FAA Part 107 certified pilots handle all airspace authorizations, flight planning, and regulatory compliance." },
      { question: "Can you document a development project over time?", answer: "Absolutely. We offer monthly and milestone-based documentation packages that track construction progress with both aerial and ground-level coverage." },
      { question: "What resolution do you shoot in?", answer: "All video is captured in 4K resolution with cinema-grade cameras. Photography is captured at maximum sensor resolution for both digital and print use." },
    ],
  },
  "professional-services": {
    slug: "professional-services",
    name: "Professional Services",
    headline: "Build authority and trust through professional visual storytelling.",
    subhead: "Visual storytelling and media strategy for law firms, financial advisors, consultants, and professional service firms — content that establishes credibility.",
    description: "Your potential clients research you thoroughly before ever reaching out. If your online presence doesn't reflect the caliber of your work, you're losing business to firms that simply look better online. We produce video content that establishes your authority, communicates your expertise, and builds trust before the first conversation.",
    stats: [
      { value: "Telly", label: "Award Winning Team" },
      { value: "4", label: "Phase Production Process" },
      { value: "Multi", label: "Platform Content" },
      { value: "Full", label: "Service Production" },
    ],
    services: [
      { title: "Authority Content Production", description: "Professional team videos, leadership interviews, and thought leadership content that positions your firm as the clear choice in your market.", icon: "Award" },
      { title: "Client Testimonial Videos", description: "Let your clients tell the story of working with you — professionally captured testimonials that build trust and overcome objections.", icon: "MessageSquare" },
      { title: "Brand Story Films", description: "Communicate your firm's mission, values, and approach through a cinematic brand film that differentiates you from competitors.", icon: "Film" },
      { title: "Team & Culture Content", description: "Showcase your team, your office, and your culture through professional video and photography that builds personal connection.", icon: "Users" },
      { title: "Educational Video Series", description: "Position your team as thought leaders with educational video content that demonstrates expertise and provides value to prospects.", icon: "BookOpen" },
      { title: "Event & Conference Coverage", description: "Capture keynotes, panels, and networking moments at your events — creating content that extends the impact of every gathering.", icon: "Calendar" },
    ],
    differentiators: [
      { title: "Dignified, Professional Production", description: "We understand that professional services demand a polished, credible presence. Our content matches the caliber of your firm — no gimmicks, no fluff." },
      { title: "Purpose-Driven Approach", description: "Story Real Studios works exclusively with purpose-driven brands. We believe your firm's authentic story is its greatest asset — and we know how to tell it." },
      { title: "Multi-Purpose Content Library", description: "One production engagement creates assets for your website, social media, sales process, recruiting efforts, and investor presentations." },
    ],
    results: [
      { metric: "Comprehensive Video Libraries", description: "We produce content libraries spanning brand films, team profiles, client testimonials, and educational content — each serving a specific business objective." },
      { metric: "Authority Positioning", description: "Our clients' video content positions them as market leaders, differentiating them from competitors who rely solely on text-based content." },
      { metric: "Multi-Channel Deployment", description: "Content from a single production engagement is deployed across websites, LinkedIn, social media, email campaigns, and sales presentations." },
    ],
    testimonial: {
      quote: "Story Real helped us communicate our mission and values in a way that text and photos never could. The video content has become our most powerful business development tool.",
      name: "Professional Services Client",
      role: "Managing Partner, Connecticut",
    },
    challenges: [
      "Your online presence doesn't reflect the quality and caliber of your work",
      "Competitors with inferior capabilities look more professional because they have video content",
      "LinkedIn and social media feel like a time sink with unclear results without proper content",
      "Your team's expertise and thought leadership are invisible to potential clients",
      "You need content that works across business development, recruiting, and brand building",
    ],
    approach: [
      "Deep dive into your firm's mission, expertise, and target audience to develop a content blueprint",
      "On-site production capturing leadership interviews, team culture, client testimonials, and workspace",
      "Post-production with cinematic quality editing, color grading, and branded graphics",
      "Delivery in multiple formats optimized for your website, LinkedIn, social media, and presentations",
      "Ongoing content production to keep your channels active and your brand top of mind",
    ],
    faqs: [
      { question: "Is video appropriate for professional services?", answer: "Absolutely. Professional services buy on trust, and video is the most effective medium for building trust at scale. It lets prospects experience your team's expertise and personality before the first meeting." },
      { question: "How do you handle client confidentiality?", answer: "We work within your firm's compliance and confidentiality requirements. All content is reviewed and approved before publication, and we can produce content that demonstrates expertise without revealing client details." },
      { question: "What content types work best for professional services?", answer: "Brand films, leadership interviews, educational videos, and client testimonials are the highest-impact formats. Each serves a different purpose in the trust-building and business development process." },
      { question: "How long is a typical engagement?", answer: "An initial production engagement typically spans 4–6 weeks from blueprint to first deliverables. Many of our professional services clients maintain ongoing production relationships." },
      { question: "Can the content be used for recruiting?", answer: "Yes. Team culture videos and firm brand films are powerful recruiting tools. They help attract talent who align with your firm's mission and values." },
    ],
  },
  "marketing-teams": {
    slug: "marketing-teams",
    name: "Marketing Teams",
    headline: "Elevate your content strategy with professional video production.",
    subhead: "Production partnership for in-house marketing teams — cinematic quality content at the pace your campaigns demand.",
    description: "Your marketing team knows the strategy. You know the audience. You know the brand. What you need is a production partner who can execute at the level your brand deserves — consistently, reliably, and at the quality that makes every campaign perform better.",
    stats: [
      { value: "Telly", label: "Award Winning Team" },
      { value: "100+", label: "Videos (Single Client)" },
      { value: "Full", label: "Service Production" },
      { value: "Monthly", label: "Content Delivery" },
    ],
    services: [
      { title: "Campaign Video Production", description: "Concept-to-delivery video production for product launches, brand campaigns, and seasonal initiatives — at cinematic quality.", icon: "Clapperboard" },
      { title: "Content Library Development", description: "Build a comprehensive video and photo library your team can draw from for months of campaigns, social posts, and digital ads.", icon: "FolderOpen" },
      { title: "Social Media Content", description: "Short-form, platform-optimized video content — reels, stories, clips — produced at the quality your brand standards demand.", icon: "Share2" },
      { title: "Brand Film Production", description: "Flagship brand films that communicate your company's mission and story — the centerpiece content that anchors your entire visual identity.", icon: "Film" },
      { title: "Event Coverage", description: "Professional multi-camera event coverage that captures keynotes, panels, and moments — producing a library of content from a single event.", icon: "Calendar" },
      { title: "Animated & Motion Graphics", description: "3D animations, motion graphics, and kinetic typography that simplify complex products and processes into engaging visual content.", icon: "Wand2" },
    ],
    differentiators: [
      { title: "Extension of Your Team", description: "We function as your production department — understanding your brand guidelines, messaging, and objectives as deeply as any internal team member." },
      { title: "Scalable Production Capacity", description: "From a single brand film to 100+ videos per year, our production capacity scales with your needs without sacrificing quality." },
      { title: "Strategy-Informed Production", description: "We don't just point cameras — we understand how video content serves your marketing funnel and produce content optimized for each stage and channel." },
    ],
    results: [
      { metric: "100+ Videos for a Single Client", description: "Our ongoing partnership with Cybin Inc. has produced over 100 videos spanning brand films, educational content, leadership interviews, and social media assets." },
      { metric: "Multi-Format Efficiency", description: "Each production day generates content for brand campaigns, social media, website, email, and sales enablement — maximizing your budget." },
      { metric: "Brand-Aligned Quality", description: "Every piece we produce aligns with your brand standards and guidelines, maintaining consistency across all channels and campaigns." },
    ],
    testimonial: {
      quote: "Story Real functions as an extension of our marketing team. They understand our brand, our audience, and our objectives — and they execute at a level that elevates everything we do.",
      name: "Marketing Director",
      role: "Enterprise Client",
    },
    challenges: [
      "Your team has the strategy but not the production capacity to execute at the quality level you need",
      "Freelance videographers lack the consistency and strategic understanding your brand requires",
      "You need a production partner who understands your brand as deeply as an internal team member",
      "Content demand outpaces your ability to produce at the quality standard your brand deserves",
      "Coordinating video production across campaigns, events, and ongoing content is complex",
    ],
    approach: [
      "Brand immersion — we learn your guidelines, messaging, audience, and objectives inside and out",
      "Collaborative content planning aligned to your marketing calendar and campaign strategy",
      "Efficient on-site production designed to capture maximum content in minimum time",
      "Post-production workflow with brand-aligned editing, review rounds, and timely delivery",
      "Ongoing partnership with monthly production cycles and regular strategy alignment",
    ],
    faqs: [
      { question: "How do you integrate with our existing marketing team?", answer: "We function as your production department. We attend planning sessions, understand your campaign calendar, and align our production schedule to your marketing timeline." },
      { question: "Can you handle multiple projects simultaneously?", answer: "Yes. Our team is structured to manage multiple concurrent productions. We assign dedicated producers and editors to each client for consistency." },
      { question: "What is the typical turnaround time?", answer: "Standard turnaround is 2–3 weeks from shoot to final delivery. Rush timelines are available for time-sensitive campaigns and product launches." },
      { question: "Do you work with our brand guidelines?", answer: "Absolutely. We produce all content within your established brand guidelines — color palette, typography, tone, messaging, and visual standards." },
      { question: "What does a typical monthly engagement include?", answer: "Monthly engagements vary by client needs. A typical package includes 1–2 production days and 8–15 finished video assets across multiple formats and platforms." },
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
