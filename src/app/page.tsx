"use client";

import { useState } from "react";
import Image from "next/image";
import LiquidImage from "@/components/LiquidImage";
// import SemicircleBg from "@/components/SemicircleBg";
import InteractiveName from "@/components/InteractiveName";
import HeroDoodles from "@/components/HeroDoodles";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Achievements from "@/components/Achievements";
import GlobalLiquidBackground from "@/components/GlobalLiquidBackground";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-[calc(100vh-24px)] flex flex-col cursor-pointer relative bg-transparent overflow-x-hidden font-sans text-[#111]">
      <GlobalLiquidBackground />
      <nav className="flex justify-between items-center p-4 md:p-6 md:px-12 relative z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md overflow-hidden bg-[#ea5b25]">
            <Image
              src="/avatar.png"
              alt="Danil"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <span className="font-medium text-base">Priyanshu Ojha</span>
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
          <a href="#contact" className="bg-[#ea5b25] text-white border-none py-2 px-4 rounded-lg text-sm font-medium cursor-pointer flex items-center gap-2 hover:opacity-90 transition-opacity">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden">
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
      </nav>

      <main className="flex-1 flex justify-center items-center relative overflow-hidden min-h-[80vh]">
        {/* <SemicircleBg /> */}
        {/* <HeroDoodles /> */}
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

      {/* Interactive Name Section */}
      <InteractiveName />

      {/* Skills Section */}
      <Skills />
      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Achievements Section */}
      <Achievements />

      {/* Contact Section + Footer */}
      <Contact />
    </div>
  );
}
