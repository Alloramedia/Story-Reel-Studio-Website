"use client";

import { useSyncExternalStore } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

function subscribe(callback: () => void) {
  window.addEventListener("cookie-consent-change", callback);
  return () => window.removeEventListener("cookie-consent-change", callback);
}

function getSnapshot() {
  return localStorage.getItem("cookie-consent") === "accepted";
}

function getServerSnapshot() {
  return false;
}

/**
 * Wraps GoogleAnalytics so it only loads after the user accepts cookies.
 * Listens for the custom "cookie-consent-change" event dispatched by
 * <CookieConsent /> and also checks localStorage on mount.
 */
export function ConsentGoogleAnalytics({ gaId }: { gaId: string }) {
  const consented = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!consented) return null;
  return <GoogleAnalytics gaId={gaId} />;
}
