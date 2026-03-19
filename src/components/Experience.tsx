"use client";

const experienceData = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "SapienOne",
    date: "December 2025 - Present",
    description: [
      "Led the migration from a legacy monolith to a microservices architecture using Next.js and Node.js.",
      "Improved application performance by 40% through effective Redis caching and query optimization.",
      "Mentored a team of 4 junior developers and established CI/CD best practices."
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Raman Research and Innovation",
    date: "March 2025 - Present",
    description: [
      "Built highly interactive user interfaces for Fortune 500 clients using React and modern CSS features.",
      "Implemented robust state management with Redux Toolkit and integrated complex third-party APIs.",
      "Collaborated closely with designers to ensure pixel-perfect, accessible WCAG compliant code."
    ],
  },
  {
    id: 3,
    role: "Software Engineering Intern",
    company: "StartUp Hub",
    date: "2020 - 2021",
    description: [
      "Developed internal dashboard tools using Vue.js and Express.",
      "Assisted in database schema design using PostgreSQL and Prisma ORM.",
      "Participated in Agile sprints, code reviews, and automated testing implementations."
    ],
  },
];

export default function Experience() {
  return (
    <section className="relative w-full py-14 bg-gray-200 font-sans text-[#111] overflow-hidden">
      {/* Background Decorative Blur */}
      {/* <div className="absolute top-0 right-0 w-[70vw] h-[50vw] bg-[#ea5b25]/5 blur-[120px] rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/4"></div> */}

      <div className="relative max-w-8xl mx-auto px-6 md:px-12 flex flex-col items-center z-10">
        
        {/* Header */}
        <div className="text-center mb-0">
          <h2 className="text-[2.5rem] md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
            My <span className="text-[#ea5b25]">Experience</span>
          </h2>
          <div className="w-full md:w-[600px] flex items-center mb-10">
          <p className="text-[#555] text-sm md:text-base leading-relaxed">
            A glimpse into my journey of turning knowledge into real-world projects and impactful solutions.
          </p>
        </div>
        </div>

        {/* Content Area */}
        <div className="w-full">
          <div className="w-full max-w-4xl mx-auto relative border-l-2 border-[#ea5b25]/20 pl-8 md:pl-16 py-4">
            <div className="flex flex-col gap-12 md:gap-16">
              {experienceData.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Glowing Timeline Dot */}
                  <div className="absolute -left-[41px] md:-left-[73px] top-2 w-[18px] h-[18px] bg-white border-4 border-[#ea5b25] rounded-full group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(234,91,37,0.5)] transition-all duration-300 z-10"></div>
                  
                  {/* Glassmorphic Timeline Highlight */}
                  <div className="absolute -left-[41px] md:-left-[73px] top-2 w-[18px] h-[18px] bg-[#ea5b25] scale-150 opacity-0 group-hover:opacity-20 group-hover:animate-ping rounded-full blur-sm transition-all duration-300"></div>
                  
                  {/* Glassmorphic Card */}
                  <div className="bg-white/60 backdrop-blur-xl border border-white/80 p-6 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(234,91,37,0.06)] hover:border-[#ea5b25]/20 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                    {/* Subtle diagonal gradient inside card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-3">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#111] mb-1">{exp.role}</h3>
                        <h4 className="text-lg md:text-xl font-semibold text-[#ea5b25]">{exp.company}</h4>
                      </div>
                      <span className="inline-flex items-center px-4 py-1.5 bg-[#ea5b25]/10 text-[#ea5b25] font-bold text-sm md:text-base rounded-full border border-[#ea5b25]/20 w-max">
                        {exp.date}
                      </span>
                    </div>
                    
                    <ul className="relative z-10 space-y-3 mt-6">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-4 text-[#444] text-base md:text-lg leading-relaxed">
                          <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[#ea5b25] to-[#f4845f] flex-shrink-0 mt-2.5 shadow-sm"></span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
