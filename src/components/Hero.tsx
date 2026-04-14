import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter, Github } from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "B.Tech Student",
    "Problem Solver",
    "MERN Stack Developer",
    "App Developer"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section id="home" className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-[9%] pt-32 lg:pt-[100px] gap-12 lg:gap-0">
      <div className="home-content max-w-[600px]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8 backdrop-blur-sm group"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary font-black uppercase tracking-[0.2rem] text-[1rem]">Fresher • Open to Work</span>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[2.8rem] font-medium tracking-[.5rem] uppercase text-primary mb-4 opacity-80"
        >
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "backOut" }}
          className="text-[8rem] font-black leading-[1] text-white mb-8 tracking-tighter"
        >
          Shruti <br /> S Nikam
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-6 mb-12"
        >
          <div className="w-16 h-[2px] bg-primary/40" />
          <h3 className="text-[3rem] font-black text-foreground/90 uppercase tracking-tight italic">
            <span className="text-primary typing-text">{text}</span>
          </h3>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-[1.8rem] max-w-[500px] mb-12 text-foreground/60 leading-relaxed font-light"
        >
          Specializing in the MERN stack and cross-platform App Development, I transform complex engineering problems into high-performance digital realities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="social-media flex items-center gap-[2.5rem] mt-[5rem]"
        >
          <div className="flex gap-6">
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/shrutinikam27"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center w-[5rem] h-[5rem] bg-transparent border-[.2rem] border-primary rounded-full text-[2.2rem] text-primary transition-all duration-[.3s] hover:bg-primary hover:text-background hover:shadow-[0_0_2rem_rgba(20,241,149,0.5)]"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://in.linkedin.com/in/shruti-s-nikam-983062257"
              target="_blank"
              rel="noopener"
              className="inline-flex justify-center items-center w-[5rem] h-[5rem] bg-transparent border-[.2rem] border-primary rounded-full text-[2.2rem] text-primary transition-all duration-[.3s] hover:bg-primary hover:text-background hover:shadow-[0_0_2rem_rgba(20,241,149,0.5)]"
            >
              <Linkedin size={28} />
            </motion.a>
          </div>


        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex gap-12 mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="ShrutiNikam_Resume.pdf"
            className="px-12 py-6 bg-primary text-background rounded-2xl text-xl font-black uppercase tracking-widest hover:bg-white transition-all shadow-[0_20px_40px_rgba(20,241,149,0.3)]"
          >
            Hire Me
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-12 py-6 border-2 border-primary/20 text-primary rounded-2xl text-xl font-black uppercase tracking-widest hover:bg-primary/5 transition-all"
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
          y: [-20, -40, -20]
        }}
        transition={{
          opacity: { duration: 1.2 },
          scale: { duration: 1.2 },
          x: { duration: 1.2, ease: "backOut" },
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="home-img relative flex items-center justify-center w-[80vw] md:w-[30vw] translate-y-0 lg:translate-y-[-15%]"
      >
        <motion.div
          whileHover={{
            scale: 1.05,
            filter: "brightness(1.1)"
          }}
          className="img-box relative flex items-center justify-center w-[75vw] h-[75vw] md:w-[28vw] md:h-[28vw] rounded-full transition-all duration-500"
        >
          {/* Animated Glowing Ring (Background) */}
          <div className="absolute inset-[-10%] rounded-full bg-gradient-to-tr from-primary via-accent to-primary animate-[rotateRing_4s_linear_infinite] blur-[30px] opacity-40 z-0" />
          <div className="absolute inset-[-15%] rounded-full bg-gradient-to-tr from-accent via-primary to-accent animate-[rotateRing_6s_linear_infinite_reverse] blur-[60px] opacity-20 z-0" />

          <img
            src="/profile.png"
            alt="Shruti S Nikam"
            className="w-[92%] h-[92%] rounded-full border-[.3rem] border-primary/40 p-[.8rem] object-cover z-10 shadow-[0_0_80px_rgba(20,241,149,0.3)] bg-secondary/20 backdrop-blur-3xl"
          />
        </motion.div>
      </motion.div>

      {/* Creative Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-8 h-12 rounded-full border-2 border-primary/30 flex justify-center p-2">
          <motion.div
            animate={{
              y: [0, 15, 0],
              opacity: [1, 0, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
        <span className="text-primary/40 text-sm font-medium tracking-widest uppercase text-[1rem]">Scroll</span>
      </motion.div>
    </section>
  );
}

