import { motion } from "motion/react";
import { Award, Cpu, Code2, Terminal, Briefcase, ExternalLink } from "lucide-react";
import { link } from "fs";

const certifications = [
  {
    title: "Hacknovate 2026",
    issuer: "KBPCOE, Satara",
    description: "Participated and built innovative software systems during a rigorous 30-hour continuous hackathon held on May 16 & 17, 2026 at Karmaveer Bhaurao Patil College of Engineering, Satara.",
    icon: Award,
    type: "30-Hour Hackathon",
    link: "/Hacknovate_2026_Certificate.jpg"
  },
  {
    title: "Complete Full-Stack Web Development",
    issuer: "Udemy",
    description: "End-to-end full-stack engineering covering modern web architectures, MERN stack, database design, persistent state management, and production API deployment.",
    icon: Code2,
    type: "Full-Stack Development",
    link: "#"
  },
  {
    title: "Agentic AI: From Learner to Builder",
    issuer: "IBM SkillsBuild",
    description: "Deep dive training in agentic workflows, multi-agent frameworks, large language model (LLM) orchestration, and prompt engineering pipelines.",
    icon: Cpu,
    type: "AI & Innovation",
    link: "/IBM_Agentic_AI_Certificate.png"
  },

  {
    title: "Data Structures and Algorithms in C",
    issuer: "AICTE - EduSkills",
    description: "An intensive training and virtual internship program focusing on core data structures, algorithmic design, pointer manipulations, and complexity analysis. Completed in January - March 2026.",
    icon: Terminal,
    type: "Computer Science Core",
    link: "/Data_Structures_and_Algorithms_in_C.pdf"
  },
  {
    title: "Java Full Stack Developer",
    issuer: "EduSkills Academy x AICTE",
    description: "Successfully completed a 10-week Java Full Stack Developer Virtual Internship during April - June 2025. Supported by EduSkills Academy and AICTE. Certificate ID: 6dc68f81d833a29236895cded73aa6e4.",
    icon: Briefcase,
    type: "Virtual Internship",
    link: "/Java_Full_Stack_Internship_Certificate.png"
  },

  {
    title: "Prabal National Level Hackathon",
    issuer: "SGU Kolhapur x GDG on Campus",
    description: "Participated as a valued member of 'Team Prototype' in the Prabal National Level Hackathon held from April 18 to April 20, 2025. Recognized by Google Developer Group on Campus SGU for demonstrating exceptional creativity and innovation.",
    icon: Award,
    type: "National Hackathon",
    link: "/Prabal_Hackathon_Certificate.png"
  }

];

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 relative bg-background/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-4"
          >
            <div className="w-16 h-[2.5px] bg-primary" />
            <span className="text-primary font-black text-xl uppercase tracking-[0.5rem]">Credentials</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-7xl font-black text-white tracking-tighter uppercase"
          >
            Certifications & <span className="text-primary">Training</span>
          </motion.h2>
          <p className="mt-6 text-xl text-foreground/40 font-light leading-relaxed max-w-2xl">
            A verified catalog of technical expertise, professional certifications, and hands-on virtual internships.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-secondary/10 backdrop-blur-3xl shadow-2xl p-8 flex flex-col justify-between h-full hover:border-primary/20 transition-all duration-500"
            >
              <div>
                {/* Header elements inside card */}
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 rounded-2xl bg-background/50 backdrop-blur-xl border border-white/10 text-primary z-20 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500">
                    <cert.icon size={24} />
                  </div>
                  <span className="text-[0.6rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 text-foreground/50 border border-white/5 group-hover:border-primary/20 group-hover:text-primary transition-all">
                    {cert.type}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h4 className="text-foreground/40 font-black uppercase tracking-[0.2rem] text-[0.65rem] mb-2 font-mono">
                    {cert.issuer}
                  </h4>
                  <h3 className="text-2xl font-bold text-white tracking-tight uppercase mb-4 group-hover:text-primary transition-all duration-500 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-foreground/50 font-medium leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[0.65rem] font-black uppercase tracking-widest text-primary/40 group-hover:text-primary transition-colors">
                  VERIFIED CREDENTIAL
                </span>
                {cert.link !== "#" && (
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={cert.link}
                    target="_blank"
                    className="text-foreground/60 hover:text-primary transition-all p-2 bg-white/5 rounded-lg active:bg-primary/20"
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                )}
              </div>

              {/* High End Accent Border decoration */}
              <div className="absolute top-0 right-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-700 delay-100" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
