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
  { name: "Web Tech", icon: Globe, description: "HTML/CSS, JavaScript, Tailwind, React, Next.js", color: "text-primary" },
  { name: "App Dev (Flutter)", icon: Smartphone, description: "Responsive cross-platform mobile apps using Flutter & Dart", color: "text-primary" },
  { name: "Java & DSA", icon: Code2, description: "Efficient Data Structures and OOPS concepts in Java", color: "text-primary" },
  { name: "Backend Dev", icon: Database, description: "Node.js, Express, SQL, MongoDB, API Development", color: "text-primary" },
  { name: "DBMS", icon: Layers, description: "SQL, Database Management, Normalization, Query Tuning", color: "text-primary" },
  { name: "System Design", icon: Cpu, description: "Basic Scalability, OOPs, Design Patterns, Logical Mapping", color: "text-primary" },
  { name: "Problem Solving", icon: Zap, description: "Competitive Programming, Logical Reasoning, Bug Fixing", color: "text-primary" },
  { name: "Cloud & Git", icon: Layout, description: "GitHub, Vercel, AWS Basics, Netlify, Version Control", color: "text-primary" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My Technical <span className="text-primary italic">Toolkit</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/70 text-xl max-w-2xl mx-auto"
          >
            I use a wide range of tools and technologies to bring ideas to life. Here are some of my core competencies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2rem] bg-secondary border border-white/5 hover:border-primary/30 transition-all duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
            >
              <div className={`mb-6 p-4 rounded-2xl bg-background border border-primary/20 w-fit group-hover:scale-110 transition-transform ${skill.color}`}>
                <skill.icon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{skill.name}</h3>
              <p className="text-foreground/60 text-lg leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
