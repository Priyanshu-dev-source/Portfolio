"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    number: "1",
    title: "Wegyanik",
    subtitle: "E-Commerce Platform",
    description: "Wegyanik is an e-commerce platform where users can buy products while also showcasing their own projects. It allows users to explore courses, attend workshops, and gain the knowledge needed to build real-world projects. The platform combines learning and shopping into a single ecosystem. It is a full-stack, user-focused application.",
    image: "/wegyanik.png",
    video: "/wegyanik.mp4",
    videoResolution: false,
    liveLink: "https://wegyanik.in/",
  },
  {
    id: 2,
    number: "2",
    title: "Vi Meet",
    subtitle: "Video Conferencing and Chat Platform",
    description: "Vi Meet is a real-time video conferencing platform that enables seamless communication through video and audio calls. It allows users to create or join meetings using a room code, making collaboration simple and efficient. The platform focuses on smooth connectivity, user-friendly design, and real-time interaction. It reflects my skills in building scalable, full-stack communication applications.",
    image: "/vimeet.ico",
    video: "/vimeet.mp4",
    videoResolution: false,
    liveLink: "https://vi-meet-app.vercel.app/",
  },
  {
    id: 3,
    number: "3",
    title: "Rail Disha",
    subtitle: "Smart Navigation App",
    description: "Rail Disha is a smart navigation app designed to help users find their way across large railway stations with ease. It uses Bluetooth Low Energy (BLE) technology for indoor positioning to guide users to the correct platform or destination. The app provides real-time directions and improves convenience in crowded stations. It shows to build practical, tech-driven solutions for real-world problems.",
    image: "/raildisha.png",
    videoResolution: true,
    video: "/raildisha.mp4",
  },
  {
    id: 4,
    number: "4",
    title: "Vyomnauts",
    subtitle: "Informational Website",
    description: "I developed a dashboard and informational website for our college club Vyomnoutes, focused primarily on frontend design and user experience. It showcases the club’s activities, events, and key information in a structured and engaging way. The website ensures easy navigation and a clean interface for users. It reflects my skills in building responsive and visually appealing web applications.",
    image: "/vyomnauts.png",
    video: "/vyomnauts.mp4",
    liveLink: "https://vyomnautspsit.vercel.app/",
  },
  {
    id: 5,
    number: "5",
    title: "Authscan",
    subtitle: "Blockchain Certificate Verification",
    description: "AuthScan is a web application designed to verify the authenticity of certificates issued to users and industries. It leverages blockchain technology to ensure secure, tamper-proof validation of credentials. The platform enables reliable and transparent verification processes. It ensures trust and integrity in digital certification systems.",
    image: "/authscan.png",
    video: "/authscan.mp4",
  },
  {
    id: 6,
    number: "6",
    title: "Bus Buddy",
    subtitle: "Real-time Bus Tracking System",
    description: "Bus Buddy is a real-time bus tracking system that uses IoT devices to provide live location updates. It helps users track buses accurately, ensuring faster and smoother transportation. The system improves convenience and reduces waiting time with reliable tracking.",
    image: "/busbuddy.png",
    video: "/busbuddy.mp4",
  },
  {
    id: 7,
    number: "7",
    title: "Afri Build",
    subtitle: "Smart Infrastructure Planning",
    description: "Afri Build is a platform where users can select locations on a map and propose infrastructure based on their needs. Others can view and upvote these suggestions, highlighting demand within the community. The data can then be used by authorities to make informed decisions for public development. It encourages community-driven planning for better urban infrastructure.",
    image: "/afribuild.png",
    video: "/afribuild.mp4",
    liveLink: "https://afribuild.vercel.app/",
  },
  {
    id: 8,
    number: "8",
    title: "Med Buddy",
    subtitle: "Digital Healthcare Hub",
    description: "Med Buddy is an online healthcare platform where users and doctors can register and connect for real-time appointments. It allows patients to consult doctors, receive medical suggestions, and access emergency ambulance support. The platform streamlines healthcare access with quick and reliable services.",
    image: "/medbuddy2.jpg",
    video: "/medbuddy.mp4",
  },
  {
    id: 9,
    number: "9",
    title: "Weather Net",
    subtitle: "Real-Time Weather Platform",
    description: "WeatherNet is a web application that fetches real-time weather data using APIs to display current conditions of any location. It provides accurate and up-to-date information like temperature, humidity, and forecasts. The platform ensures a simple and clean interface for quick weather insights.",
    image: "/weathernet.png",
    video: "/weathernet.mp4",
    liveLink: "https://weathernet.vercel.app/",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  // Close modal when clicking outside
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="relative w-full bg-transparent font-sans overflow-hidden py-16 md:px-26">
      
      {/* Header */}
      {/* <div className="px-8 md:px-16 mb-12">
         <h2 className="text-5xl font-semibold tracking-[0.2em] uppercase text-gray-900 border-b border-[#ea5b25]/30 inline-block pb-1">
           My <span className="text-[#ea5b25]">Projects</span>
         </h2>
      </div> */}

      <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 text-left px-8 md:px-16"
        >
          <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-semibold tracking-tight text-gray-900 leading-tight mb-4">
            My <span className="font-bold text-[#ea5b25]">Projects</span>
          </h2>
          <p className="text-gray-600 font-lighter text-lg md:text-[18px] max-w-2xl leading-relaxed">
            A showcase of my work where ideas come to life through creativity, code, and problem-solving.
          </p>
        </motion.div>

      {/* Projects Grid/Flex Layout */}
      <div className="grid grid-cols-1 md:grid-cols-5 w-full min-h-[500px] md:min-h-[450px]">
        {projectsData.map((project, idx) => {
          // Calculate grid positions
          const hasCardBelowMobile = idx + 1 < projectsData.length;
          const hasCardBelowMd = idx + 5 < projectsData.length;

          return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 15, perspective: 1000 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.6, delay: (idx % 5) * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={`group relative flex flex-col justify-between p-8 md:p-10 cursor-pointer transition-colors duration-500 overflow-hidden border-gray-200 md:border-r ${
              hasCardBelowMobile ? "border-b" : "border-b-0"
            } ${
              hasCardBelowMd ? "md:border-b" : "md:border-b-0"
            }`}
          >
            {/* Background Image (visible on hover) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-contain bg-white p-8 scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 bg-black/50 transition-opacity duration-700"></div>
            </div>

            {/* Giant Number in the center */}
            <div className="flex-grow flex items-center justify-center relative z-10">
              <span className="text-[10rem] md:text-[10rem] font-light leading-none text-gray-900 group-hover:text-white transition-colors duration-500 select-none">
                {project.number}
              </span>
            </div>

            {/* Bottom Info Section */}
            <div className="relative z-10 flex justify-between items-end mt-8 transition-colors duration-500">
              <div>
                <h3 className="text-xl md:text-[22px] font-medium text-gray-900 group-hover:text-white transition-colors duration-500 mb-1">
                  {project.title}
                </h3>
                <p className="text-[15px] text-gray-500 group-hover:text-gray-300 transition-colors duration-500">
                  {project.subtitle}
                </p>
              </div>
              <div className="text-gray-900 group-hover:text-white transition-colors duration-500 pb-2 ml-4 flex-shrink-0 group-hover:-translate-y-1 group-hover:translate-x-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
            </div>
          </motion.div>
        );
        })}
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          ></div>

          {/* Modal Content container */}
          <div className="relative w-full max-w-5xl h-[90vh] md:h-auto md:max-h-[90vh] bg-white rounded-3xl overflow-y-auto overflow-x-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 z-20 p-2.5 bg-black/40 hover:bg-[#ea5b25] text-white rounded-full transition-all duration-300 backdrop-blur-md"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Video Header area */}
            <div className="relative w-full h-[250px] md:h-[400px] flex-shrink-0 group/video">
              <video 
                src={selectedProject.video} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className={`w-full h-full ${selectedProject.videoResolution ? "object-contain" : "object-cover"}`}
              />
              
              {/* Enlarge Button */}
              <button 
                onClick={(e) => {
                  const video = e.currentTarget.parentElement?.querySelector('video');
                  if (video) {
                    if (video.requestFullscreen) video.requestFullscreen();
                    else if ((video as any).webkitRequestFullscreen) (video as any).webkitRequestFullscreen();
                    else if ((video as any).msRequestFullscreen) (video as any).msRequestFullscreen();
                  }
                }}
                className="absolute top-6 left-6 z-30 p-2.5 bg-black/40 hover:bg-[#ea5b25] text-white rounded-full transition-all duration-300 backdrop-blur-md opacity-0 opacity-100 shadow-lg"
                title="Enlarge Video"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
                  <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
                  <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
                  <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
                </svg>
              </button>
              
              {/* Blurry fade out at bottom of video overlapping with content */}
              <div className="absolute inset-x-0 bottom-0 h-40 md:h-36 pointer-events-none">
                <div 
                  className="absolute inset-0 backdrop-blur-[12px]"
                  style={{ 
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)', 
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)' 
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
              </div>
            </div>

            {/* Text Description area - using negative margin to pull under the blur */}
            <div className="relative px-8 md:px-16 pt-0 pb-12 -mt-20 md:-mt-24 z-10 flex-grow">
              <div className="max-w-4xl mx-auto">
                 <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 drop-shadow-sm">
                   {selectedProject.title}
                 </h2>
                 <p className="text-[#ea5b25] font-semibold text-lg md:text-xl mb-8 tracking-wide">
                   {selectedProject.subtitle}
                 </p>
                 
                 <p className="text-gray-700 text-lg md:text-[16px] leading-relaxed whitespace-pre-wrap font-medium">
                   {selectedProject.description}
                 </p>
                 
                 {selectedProject.liveLink && (
                   <a 
                     href={selectedProject.liveLink}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center justify-center gap-3 mt-8 px-5 py-3 bg-[#ea5b25] hover:bg-[#d4481c] text-white font-semibold rounded-[10px] transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
                   >
                     View Live Project
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                       <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                       <polyline points="15 3 21 3 21 9"></polyline>
                       <line x1="10" y1="14" x2="21" y2="3"></line>
                     </svg>
                   </a>
                 )}

                 {/* Decorative element to tie in theme */}
                 {/* <div className="mt-12 w-12 h-1 bg-[#ea5b25] rounded-full"></div> */}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
