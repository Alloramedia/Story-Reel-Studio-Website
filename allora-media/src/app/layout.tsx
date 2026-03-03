import type { Metadata } from "next";
import { Playfair_Display, IBM_Plex_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LocalBusinessSchema, OrganizationSchema } from "@/components/StructuredData";
import { CookieConsent } from "@/components/CookieConsent";
import { BackToTop } from "@/components/BackToTop";
import { ConsentGoogleAnalytics } from "@/components/ConsentGoogleAnalytics";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.storyreal.co"),
  title: {
    default: "Story Real Studios | Strategy-Led Video Production & Content Systems",
    template: "%s | Story Real Studios",
  },
  description:
    "Story Real Studios builds strategy-led video campaigns and content systems for purpose-led organizations — combining strategy, cinematic production, and deployment into measurable growth.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.storyreal.co",
    siteName: "Story Real Studios",
    title: "Story Real Studios | Strategy-Led Video Production & Content Systems",
    description:
      "Strategy-led video campaigns and content systems for purpose-led organizations. Combining strategy, cinematic production, and deployment into measurable growth.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Story Real Studios | Strategy-Led Video Production & Content Systems",
    description:
      "Strategy-led video campaigns and content systems for purpose-led organizations. Combining strategy, cinematic production, and deployment into measurable growth.",
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
        className={`${playfairDisplay.variable} ${ibmPlexSans.variable} antialiased`}
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
