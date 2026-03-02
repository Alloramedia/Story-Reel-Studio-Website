"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#080808]">
      <div className="mx-auto max-w-lg px-6 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-red-500/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        <h1 className="font-heading text-3xl font-black text-white md:text-4xl">
          Something went wrong
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-white/60">
          We ran into an unexpected error. Please try again, or get in touch if
          the problem persists.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center rounded-full bg-[#65B207] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#65B207]/25 transition-all duration-300 hover:bg-[#7acc09] hover:scale-[1.03]"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center rounded-full border-2 border-white/20 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:border-[#65B207] hover:bg-[#65B207]/10"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
