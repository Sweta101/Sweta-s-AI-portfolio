"use client";

import { useEffect } from "react";

/** Keeps Home at the top on load/refresh (avoids jumping to chat). */
export function ScrollToTop() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return null;
}
