import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="about py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-[30rem] h-[30rem] rounded-full overflow-hidden border-[.4rem] border-primary p-[.5rem]">
              <img
                src="/profile.png"
                alt="Shruti S Nikam"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 rounded-full border-[.4rem] border-primary animate-pulse" />
            </div>
            <div className="absolute -bottom-6 -right-6 p-8 bg-background border border-primary/20 rounded-2xl max-w-[240px] shadow-[0_0_2rem_rgba(0,171,240,0.2)]">
              <p className="text-4xl font-bold text-primary">Fresher</p>
              <p className="text-sm text-foreground">B.Tech CSE Student</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="space-y-6 text-foreground/80 text-xl leading-relaxed">
              <p>
                Hello! I'm <span className="text-primary font-semibold">Shruti S Nikam</span>, a dedicated B.Tech student in Computer Science and Engineering with a passion for software development and problem-solving.
              </p>
              <p>
                As a fresher, I am eager to apply my technical knowledge and skills to real-world projects. I have a strong interest in frontend development, data structures, and algorithms.
              </p>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <p>
                      During my academic journey, I've worked on various projects that have helped me hone my coding skills and understand the principles of software engineering. I specialize in building mobile apps with Flutter and robust backends using Java.
                    </p>
                    <p>
                      I approach every challenge with curiosity and a results-driven mindset, always looking for opportunities to learn and grow in the ever-evolving tech industry.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-4 bg-background/50 rounded-xl border border-primary/10">
                <h4 className="font-bold text-primary mb-1">Expertise</h4>
                <p>Java, Flutter, Web Tech</p>
              </div>
              <div className="p-4 bg-background/50 rounded-xl border border-primary/10">
                <h4 className="font-bold text-primary mb-1">Education</h4>
                <p>B.Tech in Computer Science</p>
              </div>
            </div>

            <div className="btn-box mt-10">
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="relative inline-flex justify-center items-center w-[15rem] h-[5rem] bg-primary border-[.2rem] border-primary rounded-[.8rem] text-[1.8rem] text-background font-semibold tracking-[.1rem] z-[1] transition-all duration-[.5s] hover:text-primary hover:bg-transparent overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-background before:z-[-1] before:transition-all before:duration-[.5s] hover:before:w-full"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

