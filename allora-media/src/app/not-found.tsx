import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#0e2a35]">
      <div className="mx-auto max-w-lg px-6 text-center">
        <p className="font-heading text-8xl font-black text-[#68ccd1] md:text-9xl">
          404
        </p>
        <h1 className="mt-4 font-heading text-3xl font-black text-white md:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-white/60">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-[#68ccd1] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#68ccd1]/25 transition-all duration-300 hover:bg-[#7dd6da] hover:scale-[1.03]"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border-2 border-white/20 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:border-[#68ccd1] hover:bg-[#68ccd1]/10"
          >
            Contact Us
          </Link>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-white/40">
            Popular pages
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Paid Media", href: "/paid-media" },
              { label: "Video Production", href: "/video-production" },
              { label: "Media Production", href: "/media-production" },
              { label: "Case Studies", href: "/case-studies" },
              { label: "About Us", href: "/about" },
            ].map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/60 transition-all hover:border-[#68ccd1] hover:text-[#68ccd1]"
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
