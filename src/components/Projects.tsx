"use client";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Reimagined",
    description: "A fully responsive, high-converting e-commerce platform built with Next.js, Tailwind CSS, and Stripe integration.",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 2,
    title: "AI Prompt Generator",
    description: "An intuitive SaaS application leveraging OpenAI's API to help writers brainstorm creative prompts.",
    tags: ["React", "Node.js", "OpenAI", "MongoDB"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 3,
    title: "Real-time Chat Dashboard",
    description: "A fast, scalable internal communication tool featuring real-time socket connections and message history.",
    tags: ["TypeScript", "Socket.io", "Redis", "React"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 4,
    title: "Automated Booking System",
    description: "A comprehensive booking management software designed for local clinics to manage patient appointments.",
    tags: ["FastAPI", "Python", "React Native", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section className="relative w-full py-24 bg-white font-sans text-[#111] overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#ea5b25]/5 blur-[100px] rounded-full pointer-events-none transform -translate-x-1/4 translate-y-1/4"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
            My <span className="text-[#ea5b25]">Projects</span>
          </h2>
        </div>

        {/* Content Area */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {projectsData.map((project) => (
              <div 
                key={project.id} 
                className="group relative rounded-[2rem] overflow-hidden bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)] cursor-pointer h-[400px] md:h-[450px] hover:shadow-[0_20px_40px_rgb(234,91,37,0.12)] transition-all duration-500 hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-100">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111]/90 via-[#111]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                </div>

                {/* Glassmorphic Content Overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 p-8 pt-20 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  
                  <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-md transition-transform duration-500 group-hover:-translate-y-1">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-200 text-base leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.description}
                  </p>

                  {/* Glass Tags & Button */}
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 translate-y-4 group-hover:translate-y-0">
                    <div className="flex flex-wrap gap-2.5">
                      {project.tags.slice(0,3).map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-3.5 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-sm text-sm font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="w-12 h-12 rounded-full bg-[#ea5b25] flex items-center justify-center text-white hover:bg-[#c9491c] transition-colors flex-shrink-0 shadow-lg group-hover:scale-110 duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
