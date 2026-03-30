"use client";

import { useEffect } from "react";

/**
 * Loads an external stylesheet asynchronously after the page has painted,
 * preventing it from blocking FCP/LCP.
 */
export default function AsyncCSS({ href }: { href: string }) {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);

    return () => {
      // Cleanup on unmount (won't normally happen for layout-level usage)
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, [href]);

  return null;
}
