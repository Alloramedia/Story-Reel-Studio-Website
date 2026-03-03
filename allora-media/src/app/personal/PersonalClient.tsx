"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextImage from "next/image";
import Link from "next/link";
import {
  Camera,
  Heart,
  Users,
  GraduationCap,
  Baby,
  PartyPopper,
  ImageIcon,
  Shirt,
  Sparkles,
  ChevronDown,
  Star,
  ArrowRight,
} from "lucide-react";
import { FAQSchema } from "@/components/StructuredData";
import { cn } from "@/lib/utils";
import { GoogleLogo } from "@/components/GoogleLogo";
import { googleReview } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Cheli Photography brand tokens                                     */
/* ------------------------------------------------------------------ */

const purple = {
  accent: "#9333EA",
  accentHover: "#a855f7",
  glow: "rgba(147, 51, 234, 0.30)",
  heroBg: "#1a1328",
  sectionAlt: "#0f0b14",
  card: "#231a2e",
  iconBg: "#1a1328",
  border: "rgba(147, 51, 234, 0.20)",
};

/* ------------------------------------------------------------------ */
/*  Purple-themed inline components (shared ones stay green for rest)  */
/* ------------------------------------------------------------------ */

function PurpleSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`py-20 md:py-28 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </motion.section>
  );
}

function PurpleSectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#9333EA]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl font-black tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-white/60 md:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}

function PurpleFAQ({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-white transition-colors hover:bg-white/5 md:px-8"
          >
            <span className="text-base font-semibold md:text-lg">
              {item.question}
            </span>
            <ChevronDown
              size={20}
              className={cn(
                "shrink-0 text-[#9333EA] transition-transform duration-200",
                openIndex === i && "rotate-180"
              )}
            />
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-base leading-relaxed text-white/60 md:px-8">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const services = [
  {
    icon: <PartyPopper size={24} />,
    title: "Event Coverage",
    description:
      "Special events are a reason to gather with the people who mean the most. Why not make sure you have beautiful photos to reminisce on those cherished moments? Whether it\u2019s a birthday, bridal or baby shower, or a simple get-together \u2014 we capture the magic so you can treasure those moments forever.",
    images: [
      {
        src: "/images/personal/event-coverage-1.jpg",
        alt: "Event photography by Cheli Photography",
      },
      {
        src: "/images/personal/event-coverage-2.jpg",
        alt: "Event coverage in Connecticut",
      },
      {
        src: "/images/personal/event-coverage-3.jpg",
        alt: "Professional event photos CT",
      },
    ],
    pricing: [
      {
        name: "Package I",
        price: "$375",
        details: ["1-hour shoot", "50+ edited images", "Online photo gallery"],
      },
      {
        name: "Package II",
        price: "$550",
        details: ["2-hour shoot", "80+ edited images", "Online photo gallery"],
      },
    ],
  },
  {
    icon: <Heart size={24} />,
    title: "Wedding Photo & Video",
    description:
      "Your wedding day is a celebration of love and family, and every moment is worth capturing. We focus on every detail and every guest to tell the full story of your special day \u2014 from the laughter and tears to the unforgettable moments. Let us create a timeless collection you and your loved ones will cherish for generations.",
    images: [
      {
        src: "/images/personal/wedding-1.jpg",
        alt: "Wedding photography in Connecticut",
      },
      {
        src: "/images/personal/wedding-2.jpg",
        alt: "Wedding photographer CT",
      },
      {
        src: "/images/personal/wedding-3.jpg",
        alt: "Connecticut wedding photos",
      },
    ],
    pricing: [
      {
        name: "Package I",
        price: "$2,000",
        details: [
          "Up to 4 hours",
          "1 photographer",
          "300+ edited hi-res images",
          "Private online gallery",
          '8\u00d78" hardcover photo book',
        ],
      },
      {
        name: "Package II",
        price: "$3,000",
        details: [
          "Up to 6 hours",
          "1 lead + 1 assistant",
          "500+ edited hi-res images",
          "Gallery with print ordering",
          "1-hour engagement session",
          "$100 print credit",
        ],
      },
      {
        name: "Package III",
        price: "$3,800",
        details: [
          "Full-day (up to 8 hours)",
          "2 professional photographers",
          "600+ edited hi-res images",
          '10\u00d710" premium flatlay album',
          "2-hour engagement session",
          "$200 print credit",
        ],
      },
    ],
  },
  {
    icon: <Users size={24} />,
    title: "Family Photography",
    description:
      "Family time is precious, and it\u2019s even more special when your fur babies are part of the picture! Let\u2019s create beautiful family photos that capture the love and joy of your entire crew. These photos aren\u2019t just about today \u2014 they\u2019re about creating memories that will make you smile decades from now.",
    images: [
      {
        src: "/images/personal/family-1.jpg",
        alt: "Family photography in Connecticut",
      },
      {
        src: "/images/personal/family-2.jpg",
        alt: "Family photo session CT",
      },
      {
        src: "/images/personal/family-3.jpg",
        alt: "Professional family portraits",
      },
    ],
    pricing: [
      {
        name: "Package I",
        price: "$375",
        details: [
          "1-hour shoot",
          "50+ edited images",
          "1\u20132 outfits",
          "Families of 4 or less",
        ],
      },
      {
        name: "Package II",
        price: "$550",
        details: [
          "2-hour shoot",
          "80+ edited images",
          "2\u20133 outfits",
          "Families of 5 to 10",
        ],
      },
    ],
  },
  {
    icon: <Sparkles size={24} />,
    title: "Engagement Photos",
    description:
      "Congratulations! Engagement photos are a moment to celebrate this incredible time. Let\u2019s capture the love between the two of you on your way to getting married \u2014 perfect for save the dates, wedding invites, and all the d\u00e9cor you could need.",
    images: [
      {
        src: "/images/personal/engagement-1.jpg",
        alt: "Engagement photography in Connecticut",
      },
      {
        src: "/images/personal/engagement-2.jpg",
        alt: "Engagement photo session CT",
      },
      {
        src: "/images/personal/engagement-3.jpg",
        alt: "Professional engagement photos",
      },
    ],
    pricing: [
      {
        name: "Package I",
        price: "$375",
        details: [
          "1-hour shoot",
          "50+ edited images",
          "1\u20132 outfits",
          "Online photo gallery",
        ],
      },
      {
        name: "Package II",
        price: "$550",
        details: [
          "2-hour shoot",
          "80+ edited images",
          "2\u20133 outfits",
          "Online photo gallery",
        ],
      },
    ],
  },
  {
    icon: <GraduationCap size={24} />,
    title: "Senior Photos",
    description:
      "You\u2019ve made it \u2014 you\u2019re about to be a senior! Let\u2019s capture this amazing time in your life, celebrating all the important moments and milestones that have brought you here. We\u2019ll create photos that you and your parents will adore, giving you beautiful memories to look back on and cherish forever.",
    images: [
      {
        src: "/images/personal/senior-1.jpg",
        alt: "Senior photography in Connecticut",
      },
      {
        src: "/images/personal/senior-2.jpg",
        alt: "Senior photo session CT",
      },
      {
        src: "/images/personal/senior-3.jpg",
        alt: "Professional senior portraits",
      },
    ],
    pricing: [
      {
        name: "Package I",
        price: "$375",
        details: [
          "1-hour shoot",
          "50+ edited images",
          "1\u20132 outfits",
          "Online photo gallery",
        ],
      },
      {
        name: "Package II",
        price: "$550",
        details: [
          "2-hour shoot",
          "80+ edited images",
          "2\u20133 outfits",
          "Online photo gallery",
        ],
      },
    ],
  },
  {
    icon: <Baby size={24} />,
    title: "Maternity Photos",
    description:
      "Whether you\u2019re a first-time mom or having your third, it\u2019s important to capture the special moment. Maternity photos celebrate the extraordinary journey of pregnancy, highlighting the anticipation, joy, and love that come with bringing a new life into the world. Each image becomes a cherished keepsake.",
    images: [
      {
        src: "/images/personal/maternity-1.jpg",
        alt: "Maternity photography in Connecticut",
      },
      {
        src: "/images/personal/maternity-2.jpg",
        alt: "Maternity photo session CT",
      },
      {
        src: "/images/personal/maternity-3.jpg",
        alt: "Professional maternity portraits",
      },
    ],
    pricing: [
      {
        name: "Package I",
        price: "$375",
        details: [
          "1-hour shoot",
          "50+ edited images",
          "1\u20132 outfits",
          "Online photo gallery",
        ],
      },
      {
        name: "Package II",
        price: "$550",
        details: [
          "2-hour shoot",
          "80+ edited images",
          "2\u20133 outfits",
          "Online photo gallery",
        ],
      },
    ],
  },
];

const addOns = [
  { label: "Additional shoot hour", price: "$175/hr" },
  { label: "Rush delivery (48\u201372 hours)", price: "$200\u2013$300" },
  { label: "Additional photographer", price: "$100/hr" },
  { label: "Additional family member (over 10)", price: "$25" },
];

const whatToWear = [
  {
    icon: <Shirt size={20} />,
    title: "Wear Something That Makes You Happy",
    text: "We\u2019ll be moving, standing, sitting, walking. Don\u2019t match, but do coordinate \u2014 wear clothing that has the same dressiness. You guys already look like a family. Don\u2019t hamper your individuality by forcing matching.",
  },
  {
    icon: <ImageIcon size={20} />,
    title: "Consider Color",
    text: "Pick a color theme or palette and go from there. Pinterest has some great color ideas. Before you go out and buy another outfit, you probably already have everything you need. Spend some time with favorite items you already own.",
  },
  {
    icon: <Sparkles size={20} />,
    title: "Flatter Yourself",
    text: "Don\u2019t forget about you \u2014 you deserve to look amazing in these photos. Play up things you love about yourself. If you have a feature you\u2019re proud of, don\u2019t hide it! If you have insecurities, let\u2019s chat beforehand. We\u2019re all working on self-love.",
  },
  {
    icon: <Heart size={20} />,
    title: "It\u2019s About the Memories",
    text: "There is nothing more beautiful than showing how you love and share joy. It isn\u2019t about the smiling and posing \u2014 it\u2019s about spending quality time together and documenting that connection. If we do that, you\u2019re going to look great.",
  },
];

const faqs = [
  {
    question: "How do I book a session?",
    answer:
      "Just email Chelsie at chelsie@storyreal.co. We\u2019ll walk you through available dates, discuss your vision for the session, and get everything scheduled. A deposit is required to secure your date.",
  },
  {
    question: "Where do sessions take place?",
    answer:
      "Most sessions are on location \u2014 parks, downtown areas, your home, at a venue, or wherever feels right for you. We shoot throughout Connecticut and are happy to travel for the right setting. We\u2019ll help you pick the perfect spot during our consultation.",
  },
  {
    question: "How long does it take to get my photos back?",
    answer:
      "Standard delivery is within one week. Rush delivery (48\u201372 hours) is available as an add-on. Wedding galleries typically arrive within one week, with highlight galleries available as fast as 3 days depending on the package.",
  },
  {
    question: "What if the weather is bad on our scheduled day?",
    answer:
      "No worries \u2014 we\u2019ll reschedule to the next available date at no additional charge. Light overcast days actually produce some of the best photos (no harsh shadows!), so we only reschedule for rain or severe weather.",
  },
  {
    question: "Can I bring my pets to the session?",
    answer:
      "Absolutely! Fur babies are always welcome. We love including them in family and engagement sessions. Just let us know ahead of time so we can plan for it.",
  },
  {
    question: "Do you offer video along with photography?",
    answer:
      "Yes \u2014 especially for weddings and events. We can build packages that include both photography and videography. Contact us and we\u2019ll put together a custom quote based on what you need.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function PersonalClient() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      {/* HERO -------------------------------------------------------- */}
      <section
        className="relative pt-32 pb-20 text-white md:pt-40 md:pb-28"
        style={{ backgroundColor: purple.heroBg }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <NextImage
            src="/images/personal/personal-hero-1.jpg"
            alt="Cheli Photography — personal photography in Connecticut"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${purple.heroBg}, ${purple.heroBg}E6, transparent)`,
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-balance"
              style={{ color: purple.accent }}
            >
              Cheli Photography
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-heading font-black leading-tight tracking-tight text-pretty md:text-5xl lg:text-6xl"
            >
              Life&apos;s biggest moments, captured beautifully.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
            >
              Professional photography and video for weddings, events, family
              portraits, engagement sessions, senior photos, and maternity
              shoots — throughout Connecticut.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="mailto:chelsie@storyreal.co"
                className="inline-flex items-center rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:scale-105"
                style={{
                  backgroundColor: purple.accent,
                  boxShadow: `0 10px 25px ${purple.glow}`,
                }}
              >
                <Star size={16} className="mr-2" />
                Email Chelsie to Book
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center rounded-full border-2 border-white/20 px-7 py-3.5 text-sm font-bold text-white transition-all hover:border-[#9333EA]"
              >
                View Our Work
                <ArrowRight size={16} className="ml-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS ------------------------------------------------ */}
      <PurpleSection>
        <PurpleSectionHeader
          eyebrow="Our Services"
          title="Photography for every chapter of your life."
          description="From weddings and engagement sessions to family portraits and milestone moments — we capture the real, authentic joy of your most important days."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl shadow-sm"
              style={{ backgroundColor: purple.card }}
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <NextImage
                  src={svc.images[0].src}
                  alt={svc.images[0].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${purple.card}, transparent)`,
                  }}
                />
              </div>
              <div className="p-6">
                <div
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg text-white"
                  style={{ backgroundColor: purple.iconBg }}
                >
                  {svc.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold">{svc.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {svc.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </PurpleSection>

      {/* PHOTO GALLERY ------------------------------------------------ */}
      <PurpleSection id="gallery">
        <div
          style={{
            backgroundColor: purple.sectionAlt,
            margin: "-5rem -1.5rem",
            padding: "5rem 1.5rem",
          }}
        >
          <PurpleSectionHeader
            eyebrow="Our Work"
            title="Real moments. Real people."
            description="A selection of photos from recent sessions across Connecticut."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, svcIdx) =>
              svc.images.map((img, imgIdx) => (
                <motion.div
                  key={`${svc.title}-${imgIdx}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: (svcIdx * 3 + imgIdx) * 0.03,
                  }}
                  className="group relative aspect-4/3 overflow-hidden rounded-xl"
                >
                  <NextImage
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute bottom-3 left-3 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {svc.title}
                  </span>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </PurpleSection>

      {/* MEET YOUR PHOTOGRAPHER --------------------------------------- */}
      <PurpleSection>
        <div
          style={{
            backgroundColor: purple.heroBg,
            margin: "-5rem -1.5rem",
            padding: "5rem 1.5rem",
          }}
        >
          <PurpleSectionHeader
            eyebrow="Meet Your Photographer"
            title="A photographer always making sure to capture your good side."
          />
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-[#080808] p-8 md:p-10"
          >
            <p className="text-base leading-relaxed text-white/70">
              &ldquo;What started as a favor to a friend ended up turning into
              one of my greatest passions. Crafting emotional and authentic
              moments through photography is what I live for. Anyone can take
              photos, but not everyone can capture a moment in its true essence.
              When I&apos;m behind the camera, I&apos;m not just a photographer;
              I&apos;m your biggest hype girl! My goal is to make everyone feel
              confident and capture your true emotions. Genuine smiles, candids
              and details are my superpower.&rdquo;
            </p>
            <p
              className="mt-6 text-right text-sm font-semibold"
              style={{ color: purple.accent }}
            >
              — Chelsie, Cheli Photography
            </p>
          </motion.div>
        </div>
      </PurpleSection>

      {/* HOW IT WORKS ------------------------------------------------- */}
      <PurpleSection>
        <div
          style={{
            backgroundColor: purple.sectionAlt,
            margin: "-5rem -1.5rem",
            padding: "5rem 1.5rem",
          }}
        >
          <PurpleSectionHeader
            eyebrow="How It Works"
            title="From booking to delivery. Simple."
          />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Consultation",
                text: "Tell us about your session — the occasion, the vibe, and who's involved. We'll help you pick a date, location, and package.",
              },
              {
                step: "02",
                title: "Session Day",
                text: "Show up, be yourself, and have fun. We handle posing guidance, lighting, and making sure everyone looks their best.",
              },
              {
                step: "03",
                title: "Editing",
                text: "Every image is professionally edited for color, light, and tone so they look stunning across prints, screens, and social media.",
              },
              {
                step: "04",
                title: "Gallery Delivery",
                text: "Your private online gallery is delivered within one week. View, share, download, and order prints directly.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <p
                  className="mb-2 font-heading text-3xl font-black"
                  style={{ color: purple.accent }}
                >
                  {item.step}
                </p>
                <h3 className="mb-2 text-base font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </PurpleSection>

      {/* PRICING ------------------------------------------------------ */}
      <PurpleSection>
        <div
          style={{
            backgroundColor: purple.sectionAlt,
            margin: "-5rem -1.5rem",
            padding: "5rem 1.5rem",
          }}
        >
          <PurpleSectionHeader
            eyebrow="Pricing & Packages"
            title="Transparent pricing for every session."
            description="Every package includes professionally edited, high-resolution images delivered through a private online gallery you can view, share, and download from."
          />

          <div className="space-y-16">
            {services.map((svc, svcIdx) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: svcIdx * 0.05 }}
              >
                <h3 className="mb-6 text-center font-heading text-xl font-bold text-white">
                  {svc.title}
                </h3>
                <div
                  className={`mx-auto grid max-w-5xl gap-4 ${
                    svc.pricing.length === 3
                      ? "md:grid-cols-3"
                      : "md:grid-cols-2"
                  }`}
                >
                  {svc.pricing.map((pkg) => (
                    <div
                      key={pkg.name}
                      className="rounded-2xl border border-white/10 p-6"
                      style={{ backgroundColor: purple.heroBg }}
                    >
                      <p
                        className="mb-1 text-sm font-semibold uppercase tracking-wider"
                        style={{ color: purple.accent }}
                      >
                        {pkg.name}
                      </p>
                      <p className="mb-4 font-heading text-3xl font-black text-white">
                        {pkg.price}
                      </p>
                      <ul className="space-y-2">
                        {pkg.details.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2 text-sm text-white/60"
                          >
                            <Camera
                              size={14}
                              className="mt-0.5 shrink-0"
                              style={{ color: purple.accent }}
                            />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Add-ons */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mx-auto mt-16 max-w-2xl rounded-2xl border p-8"
            style={{
              borderColor: purple.border,
              backgroundColor: purple.heroBg,
            }}
          >
            <h3 className="mb-6 text-center font-heading text-lg font-bold text-white">
              Add-Ons (Available for Any Session)
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {addOns.map((addon) => (
                <div
                  key={addon.label}
                  className="flex items-center justify-between rounded-xl bg-[#080808] px-4 py-3"
                >
                  <span className="text-sm text-white/60">{addon.label}</span>
                  <span
                    className="text-sm font-bold"
                    style={{ color: purple.accent }}
                  >
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </PurpleSection>

      {/* WHAT TO WEAR ------------------------------------------------- */}
      <PurpleSection>
        <PurpleSectionHeader
          eyebrow="Session Tips"
          title="What to wear to your session."
          description="The most common question we get! Here's our advice to make sure you look and feel incredible."
        />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {whatToWear.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 p-6"
              style={{ backgroundColor: purple.card }}
            >
              <div
                className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg"
                style={{
                  backgroundColor: purple.iconBg,
                  color: purple.accent,
                }}
              >
                {tip.icon}
              </div>
              <h3 className="mb-2 text-base font-bold">{tip.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">
                {tip.text}
              </p>
            </motion.div>
          ))}
        </div>
      </PurpleSection>

      {/* GOOGLE REVIEWS ----------------------------------------------- */}
      <PurpleSection>
        <div
          style={{
            backgroundColor: purple.heroBg,
            margin: "-5rem -1.5rem",
            padding: "5rem 1.5rem",
          }}
        >
          <PurpleSectionHeader
            eyebrow="Real Reviews"
            title="Don't take our word for it — check Google."
          />

          {/* Rating summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-4 flex items-center justify-center gap-2"
          >
            <GoogleLogo className="h-6 w-6" />
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-[#FBBC05] text-[#FBBC05]" />
              ))}
            </div>
            <span className="text-lg font-bold text-white">{googleReview.rating}</span>
            <span className="text-sm text-white/50">&bull;&nbsp;5-Star Rated</span>
          </motion.div>

          {/* Review cards */}
          <div className="mx-auto max-w-7xl grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Stephanie Fontano",
                date: "Sep 2024",
                text: "I shared inspo pictures with Chelsie for a branding shoot, and she brought my vision to life \u2014 and enhanced it tenfold! I\u2019m so happy with how quick and amazing my pictures came out. I would HIGHLY recommend her to anyone looking for professional, high-quality pictures.",
              },
              {
                name: "Alexis Vieira Payne",
                date: "2025",
                text: "We had Jared come shoot some content for our personal training business. He did a fantastic job at capturing our studio and gave us exactly what we were looking for. The Story Real team also created some content for us to use on social media which was extremely helpful and wonderfully done!",
              },
              {
                name: "Meg Riel",
                date: "Jun 2024",
                text: "Highly recommend Story Real Studios!! I had them for a brew fest and couldn\u2019t be happier with the results. Got so much content from the event. Got great slow motion videos that I can speed up if needed. Sent everything over very soon after the event.",
              },
              {
                name: "Luke Adams",
                date: "2025",
                text: "I started working with Jared from Story Real back in December and his social media marketing is incredible. His ability to help understand the value that my business provides and communicate that through incredible content is unmatched.",
              },
              {
                name: "Kendall Hils",
                date: "Oct 2023",
                text: "Hiring Jared back in March 2023 has been one of the best decisions I\u2019ve ever made! It has been a weight off my shoulders not having to handle any social media platforms for my business. He is professional, laid-back, easy to communicate. He genuinely wants to help your business grow!",
              },
              {
                name: "Anthony Torromeo",
                date: "2025",
                text: "Jared\u2019s attention to detail and genuine care for his clients is unmatched. I consider myself lucky to be part of the Story Real media network.",
              },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="flex h-full flex-col rounded-2xl border border-white/8 bg-[#0f0b14]/80 p-6"
              >
                <div className="mb-3 flex items-center gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-white/70">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#9333EA]/15 text-sm font-bold text-[#9333EA]">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{review.name}</p>
                      <p className="text-xs text-white/40">{review.date}</p>
                    </div>
                  </div>
                  <GoogleLogo className="h-4 w-4 opacity-30" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 text-center"
          >
            <a
              href={googleReview.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-linear-to-r from-[#9333EA] to-[#7c22d0] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#9333EA]/20 transition-all duration-300 hover:shadow-[#9333EA]/30 hover:scale-[1.03]"
            >
              <GoogleLogo className="h-5 w-5" />
              Read All Reviews on Google
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>
      </PurpleSection>

      {/* FAQ ---------------------------------------------------------- */}
      <PurpleSection>
        <PurpleSectionHeader
          eyebrow="FAQ"
          title="Common questions about personal sessions."
        />
        <div className="mx-auto max-w-3xl">
          <PurpleFAQ items={faqs} />
        </div>
      </PurpleSection>

      {/* CTA ---------------------------------------------------------- */}
      <section
        className="relative overflow-hidden py-20 lg:py-28"
        style={{ backgroundColor: purple.heroBg }}
      >
        <div className="absolute inset-0 opacity-5">
          <NextImage
            src="/images/personal/personal-hero-2.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-3xl font-black text-white md:text-4xl lg:text-5xl"
          >
            Ready to capture your next milestone?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60"
          >
            Tell us about the moment you want to preserve — we&apos;ll handle
            the rest. Free consultations for all personal photography and video
            sessions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href="mailto:chelsie@storyreal.co"
              className="inline-flex items-center rounded-full px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:scale-105"
              style={{
                backgroundColor: purple.accent,
                boxShadow: `0 10px 25px ${purple.glow}`,
              }}
            >
              <Star size={18} className="mr-2" />
              Email Chelsie to Book
            </a>
            <Link
              href="/media-production"
              className="inline-flex items-center rounded-full border-2 border-white/20 px-8 py-4 text-base font-bold text-white transition-all hover:border-[#9333EA]"
            >
              See Our Business Services
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
