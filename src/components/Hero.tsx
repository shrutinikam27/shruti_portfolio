import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter, Github } from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "B.Tech CSE Student",
    "Software Engineer",
    "Frontend Developer",
    "Problem Solver"
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
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="home min-h-screen flex items-center justify-between px-[9%] pt-[100px]">
      <div className="home-content max-w-[600px]">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[3.2rem] font-bold"
        >
          Hello, It's Me
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[5.6rem] font-bold leading-[1.3]"
        >
          Shruti S Nikam
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-[3.2rem] font-bold"
        >
          And I'm a <span className="text-primary typing-text">{text}</span>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-[1.6rem] my-[2rem]"
        >
          I'm a B.Tech Computer Science and Engineering student. I'm an aspiring software engineer
          with a strong foundation in coding, problem-solving, and a passion for creating impactful digital solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="social-media flex gap-[1.5rem] mt-[2rem]"
        >
          <a href="https://github.com/shrutinikam27" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center w-[4rem] h-[4rem] bg-transparent border-[.2rem] border-primary rounded-full text-[2rem] text-primary transition-all duration-[.3s] hover:bg-primary hover:text-background hover:shadow-[0_0_2rem_rgba(0,171,240,1)]">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/shruti-s-nikam-983062257/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center w-[4rem] h-[4rem] bg-transparent border-[.2rem] border-primary rounded-full text-[2rem] text-primary transition-all duration-[.3s] hover:bg-primary hover:text-background hover:shadow-[0_0_2rem_rgba(0,171,240,1)]">
            <Linkedin size={24} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="btn-box flex justify-between w-[34.5rem] h-[5rem] mt-[4rem]"
        >
          <a href="ShrutiNikam_Resume.pdf" className="relative inline-flex justify-center items-center w-[15rem] h-full bg-primary border-[.2rem] border-primary rounded-[.8rem] text-[1.8rem] text-background font-semibold tracking-[.1rem] z-[1] transition-all duration-[.5s] hover:text-primary hover:bg-transparent overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-background before:z-[-1] before:transition-all before:duration-[.5s] hover:before:w-full">
            Hire Me
          </a>
          <a href="#contact" className="relative inline-flex justify-center items-center w-[15rem] h-full bg-transparent border-[.2rem] border-primary rounded-[.8rem] text-[1.8rem] text-primary font-semibold tracking-[.1rem] z-[1] transition-all duration-[.5s] hover:text-background hover:bg-primary overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-primary before:z-[-1] before:transition-all before:duration-[.5s] hover:before:w-full">
            Let's Talk
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="home-img relative flex items-center justify-center w-[35vw]"
      >
        <div className="img-box relative flex items-center justify-center w-[32vw] h-[32vw] rounded-full">
          {/* Animated Glowing Ring (Background) */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-accent to-primary animate-[rotateRing_4s_linear_infinite] blur-[15px] opacity-80 z-0" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent via-primary to-accent animate-[rotateRing_4s_linear_infinite_reverse] blur-[30px] opacity-50 z-0" />

          <img
            src="/profile.png"
            alt="Shruti S Nikam"
            className="w-[90%] h-[90%] rounded-full border-[.4rem] border-primary p-[.5rem] object-cover transition-all duration-[.5s] z-10"
          />
        </div>

      </motion.div>
    </section>
  );
}

