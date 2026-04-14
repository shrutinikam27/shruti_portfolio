import { motion } from "motion/react";

const educationData = [
  {
    level: "B.Tech Degree",
    institution: "Dnyanshree Institute of Engineering and Technology",
    location: "Satara",
    description: "Specializing in Computer Science and Engineering with a focus on modern software development and algorithmic logic.",
    year: "Current"
  },
  {
    level: "12th Standard (HSC)",
    institution: "Yashavantrao Chavan Institute of Science",
    location: "Satara",
    description: "Focused on Science stream with a strong foundation in Mathematics and Physics.",
    year: "Completed"
  },
  {
    level: "10th Standard (SSC)",
    institution: "Raghunathmal Dargaji Oswal Vidyalay",
    location: "Jamb Triputi",
    description: "Foundational education with academic excellence and participation in technical workshops.",
    year: "Completed"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-32 relative bg-background/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-24">

          {/* Left Side: Sticky Title */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 mb-6"
              >
                <div className="w-16 h-[2.5px] bg-primary" />
                <span className="text-primary font-black text-xl uppercase tracking-[0.5rem]">The Journey</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl lg:text-[4.8rem] font-black text-white italic tracking-tight uppercase leading-tight font-['Times_New_Roman',_serif]"
              >
                Academic <br /> <span className="text-primary italic">Timeline</span>
              </motion.h2>
              <p className="mt-12 text-xl text-foreground/40 font-light leading-relaxed max-w-sm">
                A journey of technical growth and academic excellence across leading institutions.
              </p>
            </div>
          </div>

          {/* Right Side: Timeline List */}
          <div className="lg:w-2/3 flex flex-col gap-12 relative">
            {/* Vertical Line Decor */}
            <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-primary/40 via-primary/10 to-transparent" />

            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="pl-12 relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] top-4 w-[11px] h-[11px] rounded-full bg-primary shadow-[0_0_15px_rgba(20,241,149,0.5)] group-hover:scale-150 transition-transform duration-500" />

                <div className="p-12 rounded-[3.5rem] bg-secondary/20 border border-white/5 backdrop-blur-3xl group-hover:border-primary/20 transition-all duration-500 relative overflow-hidden">
                  {/* Background Index */}
                  <span className="absolute -top-10 -right-10 text-[12rem] font-black text-white/[0.02] select-none italic">{index + 1}</span>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-primary font-black uppercase tracking-[0.3rem] text-sm font-mono">{edu.year}</span>
                      <span className="text-white/20 font-black italic text-2xl uppercase font-mono">#Level_{3 - index}</span>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase mb-2 font-['Times_New_Roman',_serif]">
                      {edu.level}
                    </h3>
                    <h4 className="text-xl md:text-2xl font-bold text-primary mb-6">
                      {edu.institution}
                    </h4>
                    <div className="flex items-center gap-3 text-white/40 font-black uppercase tracking-widest text-xs mb-8">
                      <div className="w-2 h-2 rounded-full bg-primary/40" />
                      {edu.location}
                    </div>

                    <p className="text-xl text-foreground/50 font-light leading-relaxed max-w-2xl">
                      {edu.description}
                    </p>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-[4rem]" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
