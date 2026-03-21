"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "SapienOne",
    date: "Dec 2025 — Present",
    type: "Internship",
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Raman Research and Innovation",
    date: "Mar 2025 — Present",
    type: "Internship",
  },
  {
    id: 3,
    role: "Head GCS Developer",
    company: "ASI–ISRO Rocketry Competition",
    date: "Oct 2025",
    type: "Team Member",
  },
  {
    id: 4,
    role: "Head Developer",
    company: "Vyomnauts Club",
    date: "2024-2025",
    type: "Team Member",
  },
];

export default function Experience() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section id="experience" className="relative w-full py-20 bg-gray-200 font-sans text-gray-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 flex flex-col z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 text-left"
        >
          <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-semibold tracking-tight text-gray-900 leading-tight mb-4">
            My <span className="font-bold text-[#ea5b25]">Experience</span>
          </h2>
          <p className="text-gray-600 font-lighter text-lg md:text-[18px] max-w-2xl leading-relaxed">
            A glimpse into my journey of turning knowledge into real-world projects and impactful solutions.
          </p>
        </motion.div>

        {/* Content Area */}
        <div className="w-full">
          <div className="w-full relative border-l-2 border-[#ea5b25]/20 pl-8 md:pl-12 py-2">
            <div className="flex flex-col gap-6">
              {experienceData.map((exp, index) => {
                const isActive = activeId === exp.id;

                return (
                  <motion.div 
                    initial={{ opacity: 0, x: -30, rotateX: 10, perspective: 1000 }}
                    whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true, amount: 0.3 }}
                    key={exp.id} 
                    className="relative group cursor-pointer"
                    onClick={() => setActiveId(exp.id)}
                  >
                    {/* Timeline Dot */}
                    <div 
                      className={`absolute -left-[40px] md:-left-[56px] top-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full transition-all duration-300 z-10 border-2 ${
                        isActive 
                          ? "bg-[#ea5b25] border-[#ea5b25] scale-[1.4] shadow-[0_0_15px_4px_rgba(234,91,37,0.4)]" 
                          : "bg-white border-[#ea5b25] group-hover:bg-[#ea5b25]/20"
                      }`}
                    ></div>
                    
                    {/* Card */}
                    <div className={`bg-white rounded-2xl border transition-all duration-300 shadow-sm ${
                      isActive ? "border-[#ea5b25] shadow-md" : "border-gray-200"
                    } p-6 md:p-8 hover:shadow-md hover:border-[#ea5b25]/60 hover:-translate-y-1`}>
                      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr] gap-4 md:gap-8 items-center">
                        <div className="text-gray-500 text-sm md:text-base tracking-wide flex items-center font-medium">
                          {exp.date}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 w-full">
                          <div className="flex flex-col">
                            <h3 className="text-xl md:text-[24px] font-bold text-gray-900 mb-1.5 transition-colors duration-300">
                              {exp.company}
                            </h3>
                            <p className="text-gray-600 font-medium text-sm md:text-[17px] transition-colors duration-300">
                              {exp.role}
                            </p>
                          </div>
                          {exp.type && (
                            <div className="flex items-center">
                              <span className={`inline-flex items-center px-4 py-1.5 text-xs md:text-sm font-bold rounded-full border transition-colors duration-300 ${
                                isActive ? "bg-[#ea5b25] text-white border-[#ea5b25]" : "bg-[#ea5b25]/5 text-[#ea5b25] border-[#ea5b25]/20 group-hover:bg-[#ea5b25]/10"
                              }`}>
                                {exp.type}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
