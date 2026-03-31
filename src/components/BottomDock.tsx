"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BottomDock() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // On mount: read saved preference (default to light)
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.1 }}
      className="fixed bottom-6 left-1/2 z-[100] flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-2xl bg-black/70 backdrop-blur-[8px] border border-white/10 shadow-[0_8px_40px_0_rgba(0,0,0,0.4)] transition-all duration-300 max-w-[92vw]"
    >
      {/* Resume Download Button */}
      <a
        href="/PriyanshuNewResume.pdf"
        download="Priyanshu_Ojha_Resume.pdf"
        title="Download Resume"
        className="group flex items-center gap-2.5 px-3 sm:px-4 py-2.5 rounded-xl hover:bg-[#ea5b25]/10 hover:scale-[1.04] transition-all duration-200 active:scale-95 text-white"
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#ea5b25]/10 group-hover:bg-[#ea5b25]/20 transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea5b25" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </span>
        <div className="hidden sm:flex flex-col leading-tight">
          <span className="text-[11px] font-bold text-[#ea5b25]">Resume</span>
          <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">Download CV</span>
        </div>
      </a>

      <div className="w-px h-10 bg-white/15 mx-0.5 sm:mx-1"></div>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        className="group flex items-center gap-2.5 px-3 sm:px-4 py-2.5 rounded-xl hover:bg-white/10 hover:scale-[1.04] transition-all duration-200 active:scale-95 text-white"
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
          {theme === "light" ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          )}
        </span>
        <div className="hidden sm:flex flex-col leading-tight">
          <span className="text-[11px] font-bold text-gray-200">
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </span>
          <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">
            {theme === "light" ? "Switch theme" : "Switch theme"}
          </span>
        </div>
      </button>

      <div className="w-px h-10 bg-white/15 mx-0.5 sm:mx-1"></div>

      {/* Spotify Blend Link Button */}
      <a
        href="https://open.spotify.com/blend/taste-match/166e08e6e0d80c30?si=8_oXUslpT067W--SrbElaQ&fallback=getapp"
        target="_blank"
        rel="noopener noreferrer"
        title="Blend with me on Spotify"
        className="group flex items-center gap-2.5 px-3 sm:px-4 py-2.5 rounded-xl hover:bg-[#1DB954]/10 hover:scale-[1.04] transition-all duration-200 active:scale-95"
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#1DB954]/10 group-hover:bg-[#1DB954]/20 transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#1DB954" stroke="none">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.394-.68.522-1.04.288-2.906-1.782-6.55-2.185-10.84-1.194-.43.1-.82-.16-.92-.59-.1-.43.16-.82.59-.92 4.67-1.08 8.65-.63 11.92 1.38.35.24.48.68.29 1.04zm1.43-3.13c-.30.49-.91.64-1.39.34-3.32-2.04-8.41-2.65-11.98-1.45-.55.19-1.14-.11-1.33-.66-.19-.55.11-1.14.66-1.33 4.14-1.38 9.87-.71 13.7 1.71.49.3.64.91.34 1.39zm.13-3.28c-3.95-2.35-10.45-2.57-14.21-1.42-.68.21-1.4-.18-1.61-.86-.21-.68.18-1.4.86-1.61 4.31-1.32 11.51-1.07 16.03 1.63.63.37.82 1.18.45 1.81-.37.63-1.18.82-1.81.45z"/>
          </svg>
        </span>
        <div className="hidden sm:flex flex-col leading-tight">
          <span className="text-[11px] font-bold text-[#1DB954]">Spotify</span>
          <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">Blend with me</span>
        </div>
      </a>
    </motion.div>
  );
}
