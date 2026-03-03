import type { Metadata } from "next";
import { Red_Hat_Display, Red_Hat_Text } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LocalBusinessSchema, OrganizationSchema } from "@/components/StructuredData";
import { CookieConsent } from "@/components/CookieConsent";
import { BackToTop } from "@/components/BackToTop";
import { ConsentGoogleAnalytics } from "@/components/ConsentGoogleAnalytics";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const redHatText = Red_Hat_Text({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alloramedia.us"),
  title: {
    default: "Allora Media | Performance-Driven Marketing, Paid Growth & Media Production",
    template: "%s | Allora Media",
  },
  description:
    "Allora Media is a full-service marketing agency in Southington, CT. Paid advertising, professional video & photo production, and social media management — built to bring in real customers.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.alloramedia.us",
    siteName: "Allora Media",
    title: "Allora Media | Marketing Agency in Connecticut — Paid Ads, Video & Social Media",
    description:
      "Paid advertising, professional video & photo production, and social media management for Connecticut businesses. Built to bring in real customers and measurable revenue.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Allora Media | Marketing Agency in Connecticut — Paid Ads, Video & Social Media",
    description:
      "Paid advertising, professional video & photo production, and social media management. Built to bring in real customers and measurable revenue for your business.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <body
        className={`${redHatDisplay.variable} ${redHatText.variable} antialiased`}
        // Suppress body-level hydration warnings caused by browser extensions
        // injecting attributes (e.g. Grammarly, password managers, dark-mode).
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-[#68ccd1] focus:px-6 focus:py-3 focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <LocalBusinessSchema />
        <OrganizationSchema />
        <Header />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
        <CookieConsent />
        <BackToTop />
        {gaId && <ConsentGoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
