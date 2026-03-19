const fs = require('fs');

const path = 'd:/Portfolio/src/components/Skills.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Descriptions Mapping
const descriptions = {
  'Python': 'Python is my go-to language for data processing, scripting, and backend logic. Its elegant syntax and extensive library ecosystem allow me to quickly build robust solutions.',
  'Javascript': 'JavaScript is the backbone of my dynamic web interfaces. I use it daily to craft interactive, high-performance client-side features that delight users and drive engagement.',
  'C': 'C provides me with a deep understanding of memory management and system-level operations. I utilize it for performance-critical components and algorithm optimization.',
  'Pandas': 'Pandas is essential for my data manipulation workflows. It enables me to efficiently clean, transform, and analyze large datasets for machine learning pipelines and reporting.',
  'NumPy': 'NumPy empowers my numerical computations with its powerful array operations. I rely on it for fast, vectorized mathematical calculations in complex data modeling.',
  'NodeJs': 'Node.js is my preferred runtime for building scalable backend services. Its event-driven, non-blocking I/O model is perfect for creating fast RESTful APIs and apps.',
  'Fast API': 'FastAPI helps me construct lightning-fast APIs in Python. Its automatic interactive documentation and type-checking drastically reduce my development time.',
  'React': 'React is central to my frontend architecture. I build modular, reusable component systems that ensure maintainable code and highly reactive user experiences.',
  'NextJs': 'Next.js takes my React applications to the next level with server-side rendering and static site generation, guaranteeing high SEO performance and blazing-fast load times.',
  'C\\+\\+': 'C++ is my tool of choice when extreme performance and control are required. I apply its object-oriented patterns to develop complex, resource-intensive software systems.',
  'HTML': 'HTML is the semantic foundation of every web project I build. I write clean, accessible markup that aligns with modern web standards and boosts SEO accessibility.',
  'Tailwind CSS': 'Tailwind CSS accelerates my styling workflow tremendously. Its utility-first approach allows me to rapidly construct responsive layouts without leaving my markup.',
  'CSS': 'CSS is where I bring designs to life. Beyond frameworks, my deep knowledge of modern CSS allows me to craft complex grid layouts, fluid typography, and intricate animations.',
  'React Native': 'React Native allows me to bridge the gap between web and mobile. I utilize it to deploy high-quality, cross-platform mobile applications from a single codebase.',
  'PostgreSQL': 'PostgreSQL is my trusted relational database for complex data architectures. I rely on its robust features and advanced querying capabilities for data integrity.',
  'MongoDB': 'MongoDB provides the flexibility I need for fast-evolving, unstructured data models. Its document-oriented architecture is perfect for scalable, dynamic apps.',
  'Redis': 'Redis is my secret weapon for speed. I implement it as an in-memory caching layer to drastically reduce database load and deliver ultra-responsive backend performance.',
  'Prisma ORM': 'Prisma ORM acts as my modern data access layer. Its intuitive ORM and type-safe database client streamline my backend development and keep my schemas meticulously synced.',
  'AWS': 'AWS is my cloud platform of choice for deploying resilient infrastructure. I orchestrate computing, storage, and serverless functions to ensure my applications scale globally.',
  'GitHub': 'GitHub is central to my version control and collaboration. I use it iteratively to manage continuous integration, code reviews, and robust DevOps deployment pipelines.',
  'Postman': 'Postman is my comprehensive API testing companion. I use it heavily to mock, document, and validate endpoint payloads, ensuring bulletproof integrations before launch.',
  'Figma': 'Figma is my primary workspace for UI/UX ideation. I rely on its collaborative prototyping and robust design systems to translate abstract concepts into beautiful interfaces.'
};

for (const [id, desc] of Object.entries(descriptions)) {
  const escapedId = id.replace(/\+/g, '\\+');
  const regex = new RegExp(`(id:\\s*['"]${escapedId}['"][\\s\\S]*?description:\\s*")[^"]*(")`, 'g');
  content = content.replace(regex, `$1${desc}$2`);
}

// 2. Adjust hooks imports
if (!content.includes('useRef')) {
  content = content.replace('import { useState } from "react";', 'import { useState, useRef, useEffect, useCallback } from "react";');
}

// 3. Update Component Start
const oldComponentStart = `export default function Skills() {
  const [activeToolId, setActiveToolId] = useState('figma');
  
  const activeTool = toolsData.find(t => t.id === activeToolId) || toolsData[0];`;

const newComponentStart = `export default function Skills() {
  const [activeToolId, setActiveToolId] = useState('figma');
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const scroll = (time: number) => {
      const deltaTime = time - lastTime;
      if (scrollRef.current && !isHovered && !isDragging && deltaTime > 16) {
        scrollRef.current.scrollLeft += 1;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0; // Seamless loop
        }
        lastTime = time;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    if (!scrollRef.current) return;
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  }, [isDragging, startX, scrollLeftPos]);

  const handleMouseUpOrLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const activeTool = toolsData.find(t => 
    t.id.toLowerCase() === activeToolId?.toLowerCase() || 
    t.id === activeToolId
  ) || toolsData[0];`;

content = content.replace(oldComponentStart, newComponentStart);

// 4. Update the Marquee Container
const regexMarquee = /<div className="relative h-\[300px\] flex items-center justify-center w-full mb-16 md:mb-10 overflow-hidden select-none[\s\S]*?<div className="flex w-max relative gap-6 md:gap-10 animate-\[scrollRightCarousel_[^\]]+\]">/;

const replacementMarquee = `<div 
        ref={scrollRef as any}
        className="relative h-[300px] flex items-center justify-start w-full mb-16 md:mb-10 overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing select-none [mask-image:_linear-gradient(to_right,transparent_0,_black_328px,_black_calc(100%-328px),transparent_100%)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); handleMouseUpOrLeave(); }}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
      >
        <div className="flex w-max relative gap-6 md:gap-10 py-4">`;

content = content.replace(regexMarquee, replacementMarquee);

// 5. Remove the old keyframe style since we no longer animate with CSS
const keyframesRegex = /\{\/\*\s*Hide the scrollbar for custom keyframes inject\s*\*\/\}[\s\S]*?<\/style>/;
content = content.replace(keyframesRegex, `{/* JS-based infinite scroll implemented */}`);

// We also need to update the CSS animation inside JSX key arrays
// Since we used mapping inside JSX, let's just make sure the JSX closes correctly.
// The tools mapping maps 6 sets, so \`scrollWidth / 2\` perfectly represents 3 sets. 
// It will seamlessly loop!

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated Skills.tsx descriptions and scroll logic.');
