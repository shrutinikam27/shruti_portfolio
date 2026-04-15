import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-1/2 relative group"
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden border border-white/5 bg-secondary/20">
              <img
                src="/profile.png"
                alt="About Shruti"
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
              />
            </div>
            {/* Decorative Geometric Elements */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border-r-2 border-b-2 border-primary/20 rounded-br-[5rem] z-0 pointer-events-none" />
            <div className="absolute -top-8 -left-8 w-48 h-48 border-l-2 border-t-2 border-primary/20 rounded-tl-[5rem] z-0 pointer-events-none" />

            <div className="absolute top-1/2 -right-12 -translate-y-1/2 hidden xl:block">
              <span className="text-[10rem] font-black text-white/5 tracking-tighter vertical-text select-none uppercase">PROFILE</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-[1px] bg-primary" />
              <span className="text-primary font-black uppercase tracking-[.4rem] text-sm">Introduction</span>
            </div>

            <h2 className="text-[7rem] md:text-[9rem] font-black mb-12 tracking-tighter leading-[0.9] text-white  uppercase">
              About <span className="text-primary ">Me</span>
            </h2>

            <div className="mb-8">
              <span className="px-6 py-2 rounded-full border border-primary/20 text-primary font-black uppercase tracking-widest text-xs bg-primary/5">
                Available to work
              </span>
            </div>

            <p className="text-2xl text-foreground/50 leading-relaxed font-light mb-12 max-w-xl">
              I'm a dedicated B.Tech student and versatile digital creator who thrives at the intersection of complex problem solving and elegant user interfaces.
            </p>

            <AnimatePresence>
              {showMore && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-xl text-foreground/40 leading-relaxed mb-12 max-w-xl">
                    Whether it's architecting a robust MERN stack backend or crafting a high-performance mobile app with Flutter, I approach every project as a unique opportunity to push the boundaries of what's possible. As a freelancer, I collaborate with clients world-wide to transform ambitious ideas into polished, production-ready products.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-2 gap-16 mb-16">
              <div className="flex flex-col gap-2">
                <h4 className="text-primary font-black text-5xl  tracking-tighter">04+</h4>
                <p className="text-foreground/40 font-bold uppercase tracking-widest text-xs">Major Projects</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-primary font-black text-5xl  tracking-tighter">100%</h4>
                <p className="text-foreground/40 font-bold uppercase tracking-widest text-xs">Quality Commitment</p>
              </div>
            </div>

            <div className="flex items-center gap-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowMore(!showMore)}
                className="px-12 py-5 bg-secondary/40 border border-primary/20 rounded-2xl text-foreground font-black uppercase tracking-widest text-sm hover:bg-primary/10 transition-all"
              >
                {showMore ? "SHOW LESS" : "READ MORE"}
              </motion.button>

              <a
                href="#contact"
                className="inline-flex items-center gap-4 text-sm font-black text-primary uppercase tracking-[0.3rem] hover:gap-8 transition-all"
              >
                HIRE ME
                <div className="w-4 h-[1px] bg-primary" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Absolute decor text */}
      <div className="absolute top-[20%] -left-20 opacity-5 pointer-events-none">
        <span className="text-[20rem] font-black text-white tracking-tighter uppercase leading-none">IDENTITY</span>
      </div>
    </section>
  );
}
