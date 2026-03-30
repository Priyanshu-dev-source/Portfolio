"use client";

import { useRef, useEffect, useCallback } from "react";

export default function CursorTrail() {
  const svgRef = useRef<SVGSVGElement>(null);
  const polylineRef = useRef<SVGPolylineElement>(null);
  const trailRef = useRef<{ x: number; y: number }[]>([]);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  const updatePolyline = useCallback(() => {
    if (!polylineRef.current) return;
    const trail = trailRef.current;
    if (trail.length > 1) {
      polylineRef.current.setAttribute(
        "points",
        trail.map((p) => `${p.x},${p.y}`).join(" ")
      );
      polylineRef.current.style.display = "";
    } else {
      polylineRef.current.style.display = "none";
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Don't add to trail if over an image
      if (target.tagName.toLowerCase() === "img" || target.closest("img")) {
        return;
      }

      trailRef.current = [
        ...trailRef.current.slice(-14),
        { x: e.clientX, y: e.clientY },
      ];
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const tick = (timestamp: number) => {
      // Decay trail every ~40ms
      if (timestamp - lastTimeRef.current > 40) {
        lastTimeRef.current = timestamp;
        if (trailRef.current.length > 0) {
          trailRef.current = trailRef.current.slice(1);
        }
      }
      updatePolyline();
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [updatePolyline]);

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-50 opacity-50"
    >
      <polyline
        ref={polylineRef}
        fill="none"
        stroke="#ea5b25"
        strokeWidth="3"
        strokeDasharray="6 8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ display: "none" }}
      />
    </svg>
  );
}
