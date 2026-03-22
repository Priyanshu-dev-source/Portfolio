"use client";

import { motion } from "framer-motion";

interface Achievement {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  photos: { src: string; alt: string; span: string }[];
}

const achievementsData: Achievement[] = [
  {
    id: 1,
    title: "IN-SPACe CANSAT India Student Competition 2024-25",
    subtitle: "ASI-CANSAT Competition",
    description:
      "Our team proudly secured the Best Design Award at the IN-SPACe CanSat India Student Competition, recognizing our innovation and engineering excellence. The project involved designing a compact and efficient satellite system with optimized structure and seamless subsystem integration. I contributed as the GCS (Ground Control System) developer, building the system that enabled real-time communication with the satellite. Through this, commands were transmitted and telemetry data was accurately received and monitored. This achievement reflects our strong teamwork, technical expertise, and passion for aerospace innovation.",
    photos: [
      {
        src: "/award.jpeg",
        alt: "Best design Cansat award",
        span: "col-span-2 row-span-2",
      },
      {
        src: "/group.jpeg",
        alt: "Team photo at the event",
        span: "col-span-1 row-span-1",
      },
      {
        src: "/cert2.webp",
        alt: "Best design Certificate",
        span: "col-span-1 row-span-1",
      },
      {
        src: "/group2.jpg",
        alt: "Team photo at the event",
        span: "col-span-2 row-span-1",
      },
    ],
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative w-full bg-gray-200 font-sans overflow-hidden py-12 md:py-15 px-4 sm:px-6 md:px-26"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mb-10 md:mb-16 text-left px-4 sm:px-8 md:px-16"
      >
        <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-semibold tracking-tight text-gray-900 leading-tight mb-4">
          My <span className="font-bold text-[#ea5b25]">Achievements</span>
        </h2>
        <p className="text-gray-600 font-lighter text-lg md:text-[18px] max-w-2xl leading-relaxed">
          Milestones that define my journey from hackathons to national
          competitions, each one a story of passion and perseverance.
        </p>
      </motion.div>

      {/* Achievement Rows */}
      <div className="flex flex-col gap-14 md:gap-28 px-4 sm:px-8 md:px-16">
        {achievementsData.map((achievement, idx) => {
          const isReversed = idx % 2 !== 0;

          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`flex flex-col ${
                isReversed ? "md:flex-row-reverse" : "md:flex-row"
              } gap-10 md:gap-16 items-start`}
            >
              {/* Text Side */}
              <div className="w-full md:w-[40%] flex flex-col justify-start items-start">
                {/* Decorative number */}
                {/* <span className="text-[6rem] md:text-[8rem] font-extralight leading-none text-[#ea5b25]/15 select-none -mb-6 md:mb-8">
                  {String(achievement.id).padStart(2, "0")}
                </span> */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <span className="inline-block text-[#ea5b25] font-semibold text-base md:text-lg tracking-wide mb-5">
                  {achievement.subtitle}
                </span>
                <p className="text-gray-600 text-base md:text-[16px] leading-relaxed">
                  {achievement.description}
                </p>

                {/* Decorative line */}
                <div className="mt-6 w-12 h-[3px] rounded-full bg-[#ea5b25]" />
              </div>

              {/* Bento Photo Gallery Side */}
              <div className="w-full md:w-[60%]">
                <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-3 gap-2 sm:gap-3 md:gap-4 aspect-[4/3]">
                  {achievement.photos.map((photo, pIdx) => (
                    <motion.div
                      key={pIdx}
                      className={`${photo.span} relative rounded-2xl overflow-hidden group/photo cursor-pointer`}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      {/* Image */}
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/photo:scale-110"
                      />
                      {/* Subtle overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-500" />
                      {/* Alt text label on hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-full group-hover/photo:translate-y-0 transition-transform duration-500 ease-out">
                        <span className="text-white text-xs md:text-sm font-medium drop-shadow-lg">
                          {photo.alt}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
