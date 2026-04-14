import { motion } from "motion/react";
import { 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  Layout, 
  Layers, 
  Smartphone, 
  Zap 
} from "lucide-react";

const skills = [
  { name: "Web Systems", icon: Globe, description: "Modern architectures using React, Next.js, and advanced CSS frameworks.", color: "text-primary" },
  { name: "App Development", icon: Smartphone, description: "High-performance cross-platform mobile solutions built with Flutter & Dart.", color: "text-primary" },
  { name: "Logic & DSA", icon: Code2, description: "Algorithmic thinking and efficient data structure implementations in Java.", color: "text-primary" },
  { name: "Backend Core", icon: Database, description: "Scalable API design with Node.js, Express, and distributed database systems.", color: "text-primary" },
  { name: "Data Structures", icon: Layers, description: "Optimized relational and non-relational mapping for complex data models.", color: "text-primary" },
  { name: "System Design", icon: Cpu, description: "Foundational principles of scalability, microservices, and design patterns.", color: "text-primary" },
  { name: "Cloud & DevOps", icon: Layout, description: "Modern deployment workflows using Git, AWS, and edge computing platforms.", color: "text-primary" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-4"
          >
            <div className="w-16 h-[2.5px] bg-primary" />
            <span className="text-primary font-black text-xl uppercase tracking-[0.5rem]">The Arsenal</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-7xl font-black text-white italic tracking-tighter uppercase leading-none"
          >
            Technical <span className="text-primary">Toolkit</span>
          </motion.h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-10 auto-rows-[280px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.05, duration: 0.6 }
                }
              }}
              whileHover={{ scale: 1.02 }}
              className={`group relative p-12 rounded-[3.5rem] bg-secondary/20 backdrop-blur-3xl border border-white/5 hover:border-primary/20 transition-all duration-500 overflow-hidden flex flex-col justify-end ${
                index === 0 ? "md:col-span-8 md:row-span-1" : 
                index === 1 ? "md:col-span-4 md:row-span-2" : 
                index === 2 ? "md:col-span-4 md:row-span-1" : 
                index === 3 ? "md:col-span-4 md:row-span-1" :
                index === 5 ? "md:col-span-8 md:row-span-1" : 
                index === 6 ? "md:col-span-12 md:row-span-1" :
                "md:col-span-4"
              }`}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute top-10 right-10">
                 <skill.icon className={`h-12 w-12 text-primary opacity-10 group-hover:opacity-40 transition-all duration-700 -rotate-12 group-hover:rotate-0 group-hover:scale-110`} />
              </div>

              <div className="relative z-10">
                <div className={`mb-8 p-5 rounded-2xl bg-primary/10 border border-primary/20 w-fit group-hover:bg-primary group-hover:text-background transition-all duration-500 ${skill.color}`}>
                  <skill.icon className="h-10 w-10" />
                </div>
                <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <p className="text-foreground/40 text-lg font-light leading-relaxed group-hover:text-foreground/60 transition-colors">
                  {skill.description}
                </p>
              </div>

              {/* Accent Border */}
              <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-primary group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute bottom-0 right-0 pointer-events-none z-0">
         <h3 className="text-[20rem] font-black italic uppercase tracking-tighter text-white/[0.02] translate-y-20 select-none">
           EXPERTISE
         </h3>
      </div>
    </section>
  );
}
