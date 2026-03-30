import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";

// Below-fold sections — dynamically imported to reduce initial bundle
const InteractiveName = dynamic(
  () => import("@/components/InteractiveName"),
  {
    loading: () => (
      <div className="w-full min-h-[70vh] bg-gray-200 animate-pulse" />
    ),
  }
);

const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => (
    <div className="w-full min-h-[50vh] bg-transparent animate-pulse" />
  ),
});

const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => (
    <div className="w-full min-h-[40vh] bg-transparent animate-pulse" />
  ),
});

const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => (
    <div className="w-full min-h-[40vh] bg-transparent animate-pulse" />
  ),
});

const Achievements = dynamic(() => import("@/components/Achievements"), {
  loading: () => (
    <div className="w-full min-h-[30vh] bg-transparent animate-pulse" />
  ),
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => (
    <div className="w-full min-h-[40vh] bg-transparent animate-pulse" />
  ),
});

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-24px)] flex flex-col cursor-pointer relative bg-transparent overflow-x-hidden font-sans text-[#111]">
      {/* Hero section is a client component (handles nav state + Three.js) */}
      <HeroSection />

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
