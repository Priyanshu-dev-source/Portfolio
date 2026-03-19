import React from 'react';

export default function HeroDoodles() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Hand-drawn Arrow pointing to text */}
      <svg
        className="absolute top-[12%] left-[5%] w-20 h-20 text-[#ea5b25] opacity-80 rotate-[15deg] md:w-28 md:h-28 md:top-[16%] md:left-[12%]"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20,80 Q30,50 80,30"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M60,20 Q80,28 80,30 Q70,45 65,50"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      {/* Hand-drawn Star */}
      <svg
        className="absolute top-[15%] right-[5%] w-16 h-16 text-[#ea5b25] opacity-80 animate-pulse md:w-24 md:h-24 md:top-[18%] md:right-[12%]"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50,15 Q52,45 85,50 Q52,55 50,85 Q48,55 15,50 Q48,45 50,15 Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      {/* Hand-drawn Swirl / Squiggle */}
      <svg
        className="absolute top-[35%] left-[4%] w-24 h-16 text-gray-400 opacity-50 -rotate-12 md:top-[32%] md:left-[6%] md:w-40 md:h-20"
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10,50 Q40,10 70,50 T130,50 T190,50"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      {/* Hand-drawn Circle */}
      <svg
        className="absolute top-[8%] right-[25%] w-16 h-16 text-gray-300 opacity-60 md:w-20 md:h-20 md:top-[10%] md:right-[30%]"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M45,15 C75,12 85,40 80,70 C75,95 35,90 20,65 C5,45 15,20 45,15"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Small spark symbols */}
      <svg 
        className="absolute top-[30%] right-[6%] w-8 h-8 text-[#ea5b25] opacity-60 md:top-[28%] md:right-[8%] md:w-10 md:h-10"
        viewBox="0 0 50 50" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25,5 L25,15 M25,35 L25,45 M5,25 L15,25 M35,25 L45,25" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
      </svg>
       
      <svg 
        className="absolute top-[22%] left-[4%] w-10 h-10 text-gray-400 opacity-50 md:top-[12%] md:left-[22%] md:w-12 md:h-12"
        viewBox="0 0 50 50" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10,10 L20,20 M40,10 L30,20 M10,40 L20,30 M40,40 L30,30" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    </div>
  );
}
