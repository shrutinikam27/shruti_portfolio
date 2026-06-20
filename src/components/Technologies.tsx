import React from "react";
import { motion } from "motion/react";

interface TechItem {
  name: string;
  category: "languages" | "frameworks" | "databases" | "tools";
  level: "Advanced" | "Intermediate" | "Basics";
  color: string; // Brand Hex Color for glow
  svg: React.ReactNode;
}

const technologies: TechItem[] = [
  // LANGUAGES & FRAMEWORKS (Row 1)
  {
    name: "Java",
    category: "languages",
    level: "Advanced",
    color: "#F89820",
    svg: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="2" x2="6" y2="5" />
        <line x1="10" y1="2" x2="10" y2="5" />
        <line x1="14" y1="2" x2="14" y2="5" />
      </svg>
    )
  },
  {
    name: "JavaScript",
    category: "languages",
    level: "Advanced",
    color: "#F7DF1E",
    svg: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor">
        <path d="M3 3h18v18H3V3zm12.525 10.95c-.09-.54-.36-.99-.81-1.35-.45-.36-1.035-.54-1.755-.54-.675 0-1.215.15-1.62.45-.405.3-.607.72-.607 1.26 0 .42.12.75.36.99.24.24.63.45 1.17.63l1.08.36c1.02.33 1.77.735 2.25 1.215.48.48.72 1.155.72 2.025 0 1.05-.39 1.86-1.17 2.43-.78.57-1.845.855-3.195.855-1.335 0-2.37-.345-3.105-1.035-.735-.69-1.125-1.62-1.17-2.79h2.61c.045.585.27 1.05.675 1.395.405.345.975.52 1.71.52.69 0 1.245-.15 1.665-.45.42-.3.63-.735.63-1.305 0-.465-.135-.825-.405-1.08-.27-.255-.765-.495-1.485-.72l-1.08-.36c-.99-.33-1.71-.735-2.16-1.215-.45-.48-.675-1.125-.675-1.935 0-1.005.375-1.785 1.125-2.34.75-.555 1.725-.832 2.925-.832 1.185 0 2.115.3 2.79.9.675.6.99 1.41.945 2.43h-2.52zM8.347 11.52v5.49c0 .645.15 1.11.45 1.395.3.285.765.427 1.395.427.465 0 .855-.075 1.17-.225V21c-.555.225-1.23.338-2.025.338-1.425 0-2.43-.405-3.015-1.215-.585-.81-.878-2.01-.878-3.6v-5h3.105v.002z"/>
      </svg>
    )
  },
  {
    name: "TypeScript",
    category: "languages",
    level: "Advanced",
    color: "#3178C6",
    svg: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor">
        <path d="M3 3h18v18H3V3zm8.992 10.99H9.37v1.898H8.016v-1.898H5.402v-1.206h2.614v-2.07H5.402V9.505h2.614V7.607h1.354v1.898h2.622v1.206H9.37v2.07h2.622v1.206zm5.82 4.41c-.96 0-1.74-.285-2.34-.855-.6-.57-.922-1.395-.968-2.475h1.995c.03.54.18.945.45 1.215.27.27.675.405 1.215.405.51 0 .915-.12 1.215-.36.3-.24.45-.585.45-1.035 0-.375-.105-.66-.315-.855-.21-.195-.57-.375-1.08-.54l-.855-.27c-.885-.27-1.53-.615-1.935-1.035-.405-.42-.608-.99-.608-1.71 0-.915.345-1.635 1.035-2.16.69-.525 1.59-.787 2.7-.787.945 0 1.725.24 2.34.72.615.48.93 1.155.945 2.025h-1.935c-.015-.405-.135-.72-.36-.945-.225-.225-.57-.338-1.035-.338-.465 0-.81.105-1.035.315-.225.21-.338.48-.338.81 0 .285.09.51.27.675.18.165.51.315.99.45l.855.27c.96.3 1.635.66 2.025 1.08.39.42.585.99.585 1.71 0 .96-.345 1.71-1.035 2.25-.69.54-1.605.81-2.745.81z"/>
      </svg>
    )
  },
  {
    name: "Dart",
    category: "languages",
    level: "Advanced",
    color: "#0175C2",
    svg: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor">
        <path d="M2.24 9.176l4.24 4.24L18.496 1.408l-4.24-4.24zm8.48 8.48l-4.24-4.24-5.656 5.656 4.24 4.24zM21.328 1.408L17.088-2.832 5.776 8.48l4.24 4.24 11.312-11.312z"/>
      </svg>
    )
  },
  {
    name: "React.js",
    category: "frameworks",
    level: "Advanced",
    color: "#61DAFB",
    svg: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-9 w-9">
        <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
        <g stroke="currentColor" strokeWidth="1.5" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    )
  },
  {
    name: "Next.js",
    category: "frameworks",
    level: "Intermediate",
    color: "#FFFFFF",
    svg: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 16V8l8 8V8" />
      </svg>
    )
  },
  {
    name: "Node.js",
    category: "frameworks",
    level: "Advanced",
    color: "#339933",
    svg: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor">
        <path d="M12 2L2 7.77v11.54L12 22l10-5.69V7.77L12 2zm8 16.5l-8 4.56-8-4.56V8.67l8-4.56 8 4.56v9.83zm-8-12.78l-6 3.42v6.85l6 3.42 6-3.42V9.14l-6-3.42z"/>
      </svg>
    )
  },
  {
    name: "Express.js",
    category: "frameworks",
    level: "Advanced",
    color: "#828282",
    svg: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    )
  },
  {
    name: "HTML5",
    category: "languages",
    level: "Advanced",
    color: "#E34F26",
    svg: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437zM18.87 5.748H5.13l.256 2.885h13.064l-.256 2.885H5.642l.256 2.885h10.96l-.527 5.69-4.331 1.2-4.331-1.2-.275-3.085h-2.9l.525 5.923L12 21.035l6.344-1.796z"/>
      </svg>
    )
  },
  {
    name: "CSS3",
    category: "languages",
    level: "Advanced",
    color: "#1572B6",
    svg: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437zM18.87 5.748H5.13l.256 2.885h13.064l-.512 5.77H8.53l.256 2.885h9.3l-.527 5.69-5.559 1.538-5.559-1.538-.275-3.085h-2.9l.525 5.923L12 21.035l7.394-2.046z"/>
      </svg>
    )
  },

  // DATABASES & TOOLS (Row 2)
  {
    name: "Flutter",
    category: "frameworks",
    level: "Advanced",
    color: "#02569B",
    svg: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor">
        <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zM21.684 12L14.3 19.38 9.77 14.85 6.07 18.55 14.3 24h7.384l-4.78-4.78z" />
      </svg>
    )
  },
  {
    name: "Tailwind CSS",
    category: "frameworks",
    level: "Advanced",
    color: "#06B6D4",
    svg: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor">
        <path d="M12 .587c-3.668 0-5.748 1.834-6.24 5.503 1.85-2.476 3.992-3.3 6.425-2.476 1.39.47 2.383 1.48 3.483 2.597 1.79 1.82 3.87 3.928 8.33 3.928 3.67 0 5.75-1.834 6.24-5.502-1.85 2.475-3.99 3.3-6.42 2.475-1.39-.47-2.38-1.48-3.49-2.6C18.536 2.7 16.455.587 12 .587zm-6.24 9.17c-3.67 0-5.75 1.835-6.24 5.504 1.85-2.476 3.99-3.3 6.42-2.476 1.39.47 2.38 1.48 3.49 2.6 1.79 1.82 3.87 3.93 8.33 3.93 3.67 0 5.75-1.836 6.24-5.504-1.85 2.475-3.99 3.3-6.42 2.475-1.39-.47-2.38-1.48-3.49-2.6-1.79-1.82-3.87-3.92-8.33-3.92z"/>
      </svg>
    )
  },
  {
    name: "MongoDB",
    category: "databases",
    level: "Advanced",
    color: "#47A248",
    svg: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor">
        <path d="M12 0C7.58 0 4 3.58 4 8c0 4.1 3.09 7.48 7 7.93V24h2v-8.07c3.91-.45 7-3.83 7-7.93 0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
      </svg>
    )
  },
  {
    name: "MySQL",
    category: "databases",
    level: "Intermediate",
    color: "#00758F",
    svg: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M12 8v8"/>
        <path d="M8 12h8"/>
      </svg>
    )
  },
  {
    name: "Firebase",
    category: "databases",
    level: "Advanced",
    color: "#FFCA28",
    svg: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor">
        <path d="M3.89 15.572L6.012 2.033c.068-.43.435-.747.873-.747.16 0 .317.042.457.127l1.79 1.084zM20.11 15.572l-2.122-13.54c-.068-.43-.435-.747-.873-.747-.16 0-.317.042-.457.127l-1.79 1.084zM12 3l1.866 3.125 1.134 1.9L12 11.2 8.998 8.025l1.134-1.9zm0 18.25L5.75 14.75 12 17.5l6.25-2.75z"/>
      </svg>
    )
  },
  {
    name: "Git & GitHub",
    category: "tools",
    level: "Advanced",
    color: "#F05032",
    svg: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3"/>
        <circle cx="6" cy="6" r="3"/>
        <circle cx="6" cy="18" r="3"/>
        <path d="M18 15V9a4 4 0 0 0-4-4H9"/>
        <line x1="6" y1="9" x2="6" y2="15"/>
      </svg>
    )
  },
  {
    name: "VS Code",
    category: "tools",
    level: "Advanced",
    color: "#007ACC",
    svg: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor">
        <path d="M23.984 6.742L18.42.508a.94.94 0 0 0-.695-.316.924.924 0 0 0-.691.316L9.652 7.746l-6.73-5.26a.936.936 0 0 0-1.125-.015.932.932 0 0 0-.395.766v17.525c0 .324.156.63.395.766a.936.936 0 0 0 1.125-.015l6.73-5.26 7.383 7.238c.18.188.43.294.69.294s.512-.106.69-.294l5.566-6.234a.94.94 0 0 0 0-1.258l-5.016-4.382 5.016-4.383a.94.94 0 0 0 0-1.258zM18 15.656L14.73 12.8 18 9.942v5.714zM3.75 17.508V6.492L8.71 12l-4.96 5.508z"/>
      </svg>
    )
  },
  {
    name: "Postman",
    category: "tools",
    level: "Advanced",
    color: "#FF6C37",
    svg: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor">
        <path d="M12 0c-.39 0-.77.16-1.06.44l-6.38 6.38a1.5 1.5 0 0 0 0 2.12l6.38 6.38c.59.59 1.53.59 2.12 0l6.38-6.38a1.5 1.5 0 0 0 0-2.12l-6.38-6.38C12.77.16 12.39 0 12 0zm0 3c2.48 0 4.5 2.02 4.5 4.5S14.48 12 12 12s-4.5-2.02-4.5-4.5S9.52 3 12 3zm0 11.25c-3.18 0-5.75-2.57-5.75-5.75S8.82 2.75 12 2.75s5.75 2.57 5.75 5.75-2.57 5.75-5.75 5.75z"/>
      </svg>
    )
  },
  {
    name: "SQL",
    category: "languages",
    level: "Intermediate",
    color: "#00758F",
    svg: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
      </svg>
    )
  }
];

export default function Technologies() {
  // Row 1: Languages and Frameworks
  const row1 = technologies.filter(
    (tech) => tech.category === "languages" || tech.name === "React.js" || tech.name === "Next.js"
  );
  // Row 2: Remaining Frameworks, Databases and Tools
  const row2 = technologies.filter(
    (tech) => tech.name !== "React.js" && tech.name !== "Next.js" && tech.category !== "languages"
  );

  // Helper function to render a row of marquee items
  const renderMarqueeRow = (items: TechItem[], directionClass: string) => {
    return (
      <div className="flex w-full overflow-hidden relative py-4 group">
        {/* Track 1 */}
        <div className={`flex gap-6 pr-6 shrink-0 flex-nowrap ${directionClass} group-hover:[animation-play-state:paused] select-none`}>
          {items.map((tech, idx) => (
            <div
              key={`${tech.name}-track1-${idx}`}
              className="group/card relative flex items-center gap-3.5 md:gap-4.5 px-4.5 py-3 md:px-5.5 md:py-3.5 rounded-[1.5rem] md:rounded-[1.8rem] bg-secondary/35 backdrop-blur-3xl border border-white/5 hover:border-primary/20 transition-all duration-500 w-[170px] md:w-[210px] shrink-0"
              style={
                {
                  "--brand-color": tech.color,
                  "--brand-color-15": `${tech.color}24`,
                } as React.CSSProperties
              }
            >
              {/* Neon Glow Hover Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[1.5rem] md:rounded-[1.8rem]"
                style={{
                  background: `radial-gradient(circle at center, var(--brand-color-15) 0%, transparent 80%)`,
                }}
              />

              {/* Tech Icon */}
              <div
                className="p-2.5 md:p-3 rounded-xl bg-white/[0.02] border border-white/5 text-foreground/45 group-hover/card:text-[var(--brand-color)] group-hover/card:bg-[var(--brand-color-15)] group-hover/card:border-[var(--brand-color)]/30 transition-all duration-500 flex items-center justify-center shrink-0"
              >
                <div className="group-hover/card:scale-105 transition-transform duration-500">
                  {tech.svg}
                </div>
              </div>

              {/* Text details */}
              <div className="flex flex-col justify-center">
                <h4 className="text-base md:text-lg font-black text-white uppercase tracking-tighter group-hover/card:text-[var(--brand-color)] transition-colors leading-tight">
                  {tech.name}
                </h4>
              </div>

              {/* Bottom Glow Indicator */}
              <div
                className="absolute bottom-0 left-0 w-0 h-1 group-hover/card:w-full transition-all duration-500 rounded-b-[1.5rem] md:rounded-b-[1.8rem]"
                style={{
                  backgroundColor: "var(--brand-color)",
                  boxShadow: `0 0 10px var(--brand-color)`,
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Track 2 (Duplicate for seamless infinite wrap) */}
        <div className={`flex gap-6 pr-6 shrink-0 flex-nowrap ${directionClass} group-hover:[animation-play-state:paused] select-none`} aria-hidden="true">
          {items.map((tech, idx) => (
            <div
              key={`${tech.name}-track2-${idx}`}
              className="group/card relative flex items-center gap-3.5 md:gap-4.5 px-4.5 py-3 md:px-5.5 md:py-3.5 rounded-[1.5rem] md:rounded-[1.8rem] bg-secondary/35 backdrop-blur-3xl border border-white/5 hover:border-primary/20 transition-all duration-500 w-[170px] md:w-[210px] shrink-0"
              style={
                {
                  "--brand-color": tech.color,
                  "--brand-color-15": `${tech.color}24`,
                } as React.CSSProperties
              }
            >
              {/* Neon Glow Hover Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[1.5rem] md:rounded-[1.8rem]"
                style={{
                  background: `radial-gradient(circle at center, var(--brand-color-15) 0%, transparent 80%)`,
                }}
              />

              {/* Tech Icon */}
              <div
                className="p-2.5 md:p-3 rounded-xl bg-white/[0.02] border border-white/5 text-foreground/45 group-hover/card:text-[var(--brand-color)] group-hover/card:bg-[var(--brand-color-15)] group-hover/card:border-[var(--brand-color)]/30 transition-all duration-500 flex items-center justify-center shrink-0"
              >
                <div className="group-hover/card:scale-105 transition-transform duration-500">
                  {tech.svg}
                </div>
              </div>

              {/* Text details */}
              <div className="flex flex-col justify-center">
                <h4 className="text-base md:text-lg font-black text-white uppercase tracking-tighter group-hover/card:text-[var(--brand-color)] transition-colors leading-tight">
                  {tech.name}
                </h4>
              </div>

              {/* Bottom Glow Indicator */}
              <div
                className="absolute bottom-0 left-0 w-0 h-1 group-hover/card:w-full transition-all duration-500 rounded-b-[1.5rem] md:rounded-b-[1.8rem]"
                style={{
                  backgroundColor: "var(--brand-color)",
                  boxShadow: `0 0 10px var(--brand-color)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="technologies" className="py-20 sm:py-28 relative bg-background/50 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[35%] h-[35%] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-4"
          >
            <div className="w-16 h-[2.5px] bg-primary" />
            <span className="text-primary font-black text-base sm:text-lg uppercase tracking-[0.5rem]">Tech Stack</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.95]"
          >
            Technologies <span className="text-primary">& Tools</span>
          </motion.h2>
          <p className="mt-6 text-base sm:text-lg text-foreground/45 font-light leading-relaxed max-w-xl">
            A visual overview of the tools, frameworks, and programming languages I use to build scalable, high-performance applications. Hover to inspect details or pause scroll.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Container with edge fading mask */}
      <div className="w-full mask-gradient flex flex-col gap-6 mt-12">
        {/* Row 1 (Scrolling Left) */}
        {renderMarqueeRow(row1, "animate-marquee-left")}

        {/* Row 2 (Scrolling Right) */}
        {renderMarqueeRow(row2, "animate-marquee-right")}
      </div>

      {/* Background Decorative Text Accent */}
      <div className="absolute bottom-0 right-0 pointer-events-none z-0 select-none">
        <h3 className="text-[20rem] font-black uppercase tracking-tighter text-white/[0.01] translate-y-16">
          DEVELOPMENT
        </h3>
      </div>
    </section>
  );
}
