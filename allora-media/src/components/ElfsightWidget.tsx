"use client";

import Script from "next/script";

/**
 * Renders an Elfsight embedded widget.
 *
 * Loads the Elfsight platform script once via next/script and renders
 * the widget container identified by its app ID.
 */
export function ElfsightWidget({
  appId,
  className = "",
}: {
  /** The Elfsight app ID (the UUID portion after "elfsight-app-") */
  appId: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="lazyOnload"
        data-use-service-core=""
      />
      <div
        className={`elfsight-app-${appId}`}
        data-elfsight-app-lazy=""
      />
    </div>
  );
}
