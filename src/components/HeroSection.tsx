"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamic import Three.js components — they stay off the critical path
const LiquidImage = dynamic(() => import("@/components/LiquidImage"), {
  ssr: false,
  loading: () => (
    <div className="relative w-[min(80vw,700px)] h-[calc(min(80vw,700px))] z-20 mt-auto self-end">
      <Image
        src="/Adobe Express - file.webp"
        alt="Hero representation"
        fill
        priority
        className="object-contain"
        sizes="(max-width: 768px) 80vw, 700px"
      />
    </div>
  ),
});

const GlobalLiquidBackground = dynamic(
  () => import("@/components/GlobalLiquidBackground"),
  { ssr: false }
);

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <GlobalLiquidBackground />
      {/* Mobile Menu Overlay - outside nav for proper z-index stacking */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[105] bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-900 text-2xl font-medium hover:text-[#ea5b25] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-[#ea5b25] text-white py-3 px-8 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity"
          >
            Contact
          </a>
        </div>
      )}

      <nav className="flex justify-between items-center p-4 md:p-6 md:px-12 relative z-[110]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md overflow-hidden bg-[#ea5b25]">
            <Image
              src="/avatar.png"
              alt="Priyanshu"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <span className={`font-medium text-base ${mobileMenuOpen ? "text-gray-900" : ""}`}>Priyanshu Ojha</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#888] text-sm hover:text-[#111] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#ea5b25] text-white border-none py-2 px-4 rounded-lg text-sm font-medium cursor-pointer flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 origin-center ${mobileMenuOpen ? "rotate-45 translate-y-[4px]" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0 scale-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 origin-center ${mobileMenuOpen ? "-rotate-45 -translate-y-[4px]" : ""}`}
          />
        </button>
      </nav>

      <main className="flex-1 flex justify-center items-center relative overflow-hidden min-h-[80vh]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center flex flex-col gap-[0px] whitespace-nowrap pointer-events-none select-none z-10">
          <div className="marqueeLeft">
            <div className="text-[clamp(2rem,7vw,6rem)] font-semibold text-black/20 tracking-tighter pr-5">
              CREATE SHIP REPEAT CREATE SHIP REPEAT CREATE SHIP REPEAT CREATE
              SHIP REPEAT&nbsp;
            </div>
            <div className="text-[clamp(2rem,7vw,6rem)] font-semibold text-black/20 tracking-tighter pr-5">
              CREATE SHIP REPEAT CREATE SHIP REPEAT CREATE SHIP REPEAT CREATE
              SHIP REPEAT&nbsp;
            </div>
          </div>
          <div className="marqueeRight">
            <div className="text-[clamp(2rem,7vw,6rem)] font-bold text-[#111] tracking-tighter pr-5">
              CHAOS BUILD SYSTEMS NOT CHAOS BUILD SYSTEMS NOT CHAOS BUILD
              SYSTEMS NOT CHAOS&nbsp;
            </div>
            <div className="text-[clamp(2rem,7vw,6rem)] font-bold text-[#111] tracking-tighter pr-5">
              CHAOS BUILD SYSTEMS NOT CHAOS BUILD SYSTEMS NOT CHAOS BUILD
              SYSTEMS NOT CHAOS&nbsp;
            </div>
          </div>
        </div>

        <LiquidImage
          src="/Adobe Express - file.webp"
          alt="Hero representation"
          className="relative w-[min(80vw,700px)] h-[calc(min(80vw,700px))] z-20 mt-auto self-end cursor-pointer"
        />
      </main>
    </>
  );
}
