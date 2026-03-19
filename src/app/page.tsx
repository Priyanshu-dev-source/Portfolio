import Image from "next/image";
import LiquidImage from "@/components/LiquidImage";
// import SemicircleBg from "@/components/SemicircleBg";
import InteractiveName from "@/components/InteractiveName";
import HeroDoodles from "@/components/HeroDoodles";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-24px)] flex flex-col cursor-pointer relative bg-white overflow-x-hidden font-sans text-[#111]">
      <nav className="flex flex-wrap justify-between items-center p-4 md:p-6 md:px-12 relative z-50 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md overflow-hidden bg-[#ea5b25]">
            <Image src="/avatar.png" alt="Danil" width={32} height={32} className="object-cover" />
          </div>
          <span className="font-medium text-base">Priyanshu Ojha</span>
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          <a href="#" className="text-[#888] text-sm hover:text-[#111] transition-colors">About</a>
          <a href="#" className="text-[#888] text-sm hover:text-[#111] transition-colors">Skills</a>
          <a href="#" className="text-[#888] text-sm hover:text-[#111] transition-colors">Experience</a>
          <a href="#" className="text-[#888] text-sm hover:text-[#111] transition-colors">Projects</a>
          <button className="bg-[#ea5b25] text-white border-none py-2 px-4 rounded-lg text-sm font-medium cursor-pointer flex items-center gap-2 hover:opacity-90 transition-opacity">Contact</button>
        </div>
      </nav>

      <main className="flex-1 flex justify-center items-center relative overflow-hidden min-h-[80vh]">
        {/* <SemicircleBg /> */}
        {/* <HeroDoodles /> */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center flex flex-col gap-[0px] whitespace-nowrap pointer-events-none select-none z-10">
          <div className="marqueeLeft">
            <div className="text-[clamp(2rem,7vw,6rem)] font-semibold text-black/20 tracking-tighter pr-5">CREATE SHIP REPEAT CREATE SHIP REPEAT CREATE SHIP REPEAT CREATE SHIP REPEAT&nbsp;</div>
            <div className="text-[clamp(2rem,7vw,6rem)] font-semibold text-black/20 tracking-tighter pr-5">CREATE SHIP REPEAT CREATE SHIP REPEAT CREATE SHIP REPEAT CREATE SHIP REPEAT&nbsp;</div>
          </div>
          <div className="marqueeRight">
            <div className="text-[clamp(2rem,7vw,6rem)] font-bold text-[#111] tracking-tighter pr-5">CHAOS BUILD SYSTEMS NOT CHAOS BUILD SYSTEMS NOT CHAOS BUILD SYSTEMS NOT CHAOS&nbsp;</div>
            <div className="text-[clamp(2rem,7vw,6rem)] font-bold text-[#111] tracking-tighter pr-5">CHAOS BUILD SYSTEMS NOT CHAOS BUILD SYSTEMS NOT CHAOS BUILD SYSTEMS NOT CHAOS&nbsp;</div>
          </div>
        </div>
        
        <LiquidImage 
          src="/hero_transparent.png" 
          alt="Hero representation" 
          className="relative w-[min(80vw,700px)] h-[calc(min(80vw,700px))] z-20 mt-auto self-end cursor-crosshair"
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
    </div>
  );
}
