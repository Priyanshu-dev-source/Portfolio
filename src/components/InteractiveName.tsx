"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function InteractiveName() {
  return (
    <div className="relative w-full min-h-[90vh] bg-gray-200 flex justify-center items-center overflow-hidden py-16 md:py-24 font-sans border-t border-gray-100">
      
      {/* Decorative Corner Blobs */}
      <div className="absolute top-[-5%] left-[-5%] w-[400px] h-[300px] bg-[#ea5b25] rounded-br-full z-0 opacity-90 hidden md:block"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[460px] h-[350px] bg-[#ea5b25] rounded-tl-[300px] z-0 opacity-90 hidden md:block"></div>

      {/* Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 md:px-12 gap-12 md:gap-8">
        
        {/* Left Side: Avatar & Shapes */}
        <motion.div 
          initial={{ opacity: 0, x: -50, rotateY: -15, perspective: 1000 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative w-full md:w-1/2 flex justify-center items-end min-h-[500px] md:min-h-[600px] mt-10 md:mt-0"
        >
          
          {/* Background Shapes */}
          {/* Small Navy Block (Left) */}
          <div className="absolute left-[-6%] bottom-[10%] w-[60%] h-[30%] bg-[#0B1021] z-0 rounded-md hidden md:block"></div>

          {/* Large Vertical Navy Block */}
          <div className="absolute left-[35%] bottom-[10%] w-[45%] h-[80%] bg-[#0B1021] z-0 rounded-md"></div>
          
          {/* Big Orange Circle */}
          <div className="absolute left-[8%] bottom-[15%] w-[65%] aspect-square rounded-full bg-[#ea5b25] z-0 shadow-lg"></div>

          {/* Small Navy Block (Behind image left-top) */}
          {/* <div className="absolute left-[20%] top-[40%] w-[10%] h-[15%] bg-[#0B1021] z-0 hidden md:block rounded-md"></div> */}

          {/* Person Image */}
          <div className="relative z-20 w-[85%] max-w-[450px] aspect-[3/4] bottom-[20px] right-[60px] origin-bottom transform transition-transform duration-500">
            <Image 
              src="/newAvatar.png" 
              alt="Person" 
              fill
              className="object-contain drop-shadow-2xl object-bottom"
              priority
            />
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 z-20 md:pl-8"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#111] leading-[1.1]">
            Hello, I'm <span className="text-[#ea5b25]">Priyanshu Ojha</span>
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-black font-light mt-2 md:mt-4 tracking-wide">
            Full Stack Developer
          </h3>
          
          <div className="mt-8 text-sm md:text-base lg:text-lg text-[#555] max-w-xl leading-relaxed space-y-4 md:space-y-6">
            <p>
              I’m a passionate Full Stack Developer experienced in building responsive and scalable web applications. I work across both frontend and backend, using technologies like JavaScript, React, and Node.js. I focus on writing clean, efficient code and delivering smooth user experiences.
            </p>
            <p>
              I enjoy solving real-world problems and continuously learning new technologies.
            </p>
          </div>

          {/* <button className="mt-8 md:mt-10 bg-[#ea5b25] text-white font-medium py-3 px-8 md:py-4 md:px-10 rounded-full hover:shadow-[0_8px_30px_rgb(234,91,37,0.3)] hover:bg-[#d4481c] transition-all transform hover:-translate-y-1 text-sm md:text-base tracking-widest">
            GET IN TOUCH!
          </button> */}

          <div className="mt-10 md:mt-12 flex flex-col items-center md:items-start gap-4 w-full">
            {/* <p className="font-semibold text-[#111] text-base md:text-lg">Contact@website.com</p> */}
            
            {/* Social Icons */}
            <div className="flex gap-4">
              
              <a href="https://www.linkedin.com/in/priyanshu-kumar-04ba7a300/" target="_blank" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:bg-[#004182] hover:scale-110 transition-all shadow-md">
  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452H16.89v-5.569c0-1.327-.027-3.036-1.849-3.036-1.849 0-2.131 1.445-2.131 2.939v5.666H9.356V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.368-1.849 3.6 0 4.266 2.369 4.266 5.455v6.285zM5.337 7.433a1.984 1.984 0 1 1 0-3.969 1.984 1.984 0 0 1 0 3.969zM6.857 20.452H3.817V9h3.04v11.452z"/>
  </svg>
</a>
            
              <a href="https://github.com/Priyanshu-dev-source" target="_blank" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#24292F] flex items-center justify-center text-white hover:bg-[#000000] hover:scale-110 transition-all shadow-md">
  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.235 1.84 1.235 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.76-1.605-2.665-.303-5.466-1.334-5.466-5.93 0-1.31.468-2.382 1.235-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 0 1 3.003-.403c1.02.005 2.047.138 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.874.118 3.176.77.84 1.233 1.912 1.233 3.222 0 4.609-2.804 5.624-5.476 5.921.43.372.814 1.103.814 2.222 0 1.606-.015 2.902-.015 3.293 0 .322.218.694.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
</a>
              {/* Dribbble / Basketball (Placeholder for matching icon) */}
              <a href="https://www.instagram.com/priyanshu_oj/" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#ea5b25] flex items-center justify-center text-white hover:bg-[#d4481c] hover:scale-110 transition-all shadow-md">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0ea5e9] flex items-center justify-center text-white hover:bg-[#0284c7] hover:scale-110 transition-all shadow-md">
  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 
    10-4.477 10-10S17.523 2 12 2zm7.93 9h-3.95a15.65 
    15.65 0 0 0-1.38-5.02A8.02 8.02 0 0 1 19.93 
    11zM12 4c1.54 1.89 2.56 4.31 2.82 7H9.18C9.44 
    8.31 10.46 5.89 12 4zM4.07 13h3.95c.19 1.8.73 
    3.52 1.58 5.02A8.02 8.02 0 0 1 4.07 
    13zm3.95-2H4.07a8.02 8.02 0 0 1 5.53-5.02A15.65 
    15.65 0 0 0 8.02 11zM12 20c-1.54-1.89-2.56-4.31-2.82-7h5.64C14.56 
    15.69 13.54 18.11 12 20zm2.42-1.98A15.65 15.65 0 0 0 15.98 
    13h3.95a8.02 8.02 0 0 1-5.51 5.02z"/>
  </svg>
</a>
            </div>
          </div>
          
        </motion.div>
      </div>
    </div>
  );
}
