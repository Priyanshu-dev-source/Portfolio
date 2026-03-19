"use client";

import { useState, useEffect } from "react";

export default function CursorTrail() {
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Don't add to trail if over an image
      if (target.tagName.toLowerCase() === "img" || target.closest("img")) {
        return;
      }

      setTrail((prev) => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY }];
        return newTrail.slice(-15);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrail((prev) => (prev.length > 0 ? prev.slice(1) : prev));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <svg className="fixed inset-0 w-full h-full pointer-events-none z-50 opacity-50">
      {trail.length > 1 && (
        <polyline
          points={trail.map((p) => `${p.x},${p.y}`).join(" ")}
          fill="none"
          stroke="#ea5b25"
          strokeWidth="3"
          strokeDasharray="6 8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}
