"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { GOOGLE_ADS_ID, CALL_CONVERSION_LABEL } from "../google-ads";

// Hívás-kattintáskor Google Ads konverziót jelent, ha be van állítva a
// konverziós azonosító és címke (app/google-ads.js).
function reportCallConversion() {
  if (!GOOGLE_ADS_ID || !CALL_CONVERSION_LABEL) return;
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${CALL_CONVERSION_LABEL}`,
  });
}

// Link, ami kattintáskor Vercel Analytics eseményt küld,
// híváskattintásnál Google Ads konverziót is.
export function TrackedLink({ event, data, children, ...rest }) {
  return (
    <a
      {...rest}
      onClick={() => {
        track(event, data);
        if (event === "hivas_kattintas") reportCallConversion();
      }}
    >
      {children}
    </a>
  );
}

// Görgetési tölcsér: szekciónként egyszer küld eseményt, amikor a szekció
// egy része láthatóvá válik. Alacsony küszöb, mert mobilon egy hosszú szekció
// sosem éri el a magas láthatósági arányt.
export function SectionTracker({ sections }) {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const seen = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !seen.has(entry.target.id)) {
            seen.add(entry.target.id);
            track("szekcio_megtekintes", { szekcio: entry.target.id });
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 }
    );
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [sections]);
  return null;
}
