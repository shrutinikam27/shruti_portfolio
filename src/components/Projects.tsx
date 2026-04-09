import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Timesheet Management",
    description: "A full-stack MERN application for managing employee timesheets, allowing for easy tracking and reporting.",
    image: "https://picsum.photos/seed/timesheet/800/600",
    tags: ["MERN Stack", "React", "Node.js", "MongoDB"],
    github: "https://github.com/ShrutiNnikam/Timesheet-Management-System",
    demo: "https://timesheet-management-system-qs1o.vercel.app/",
  },
  {
    title: "Java Banking System",
    description: "A robust backend system for financial transactions using Java and OOPs principles.",
    image: "https://picsum.photos/seed/bank/800/600",
    tags: ["Java", "OOPs", "SQL", "DBMS"],
    github: "https://github.com/shrutinikam27",
    demo: "#",
  },
  {
    title: "Flutter Fitness App",
    description: "A sleek cross-platform mobile application for tracking workouts and health metrics.",
    image: "https://picsum.photos/seed/fitness/800/600",
    tags: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/shrutinikam27",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Latest <span className="text-primary italic">Projects</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-foreground/70 text-lg"
            >
              Each project is a unique piece of work that combines aesthetic design with powerful functionality.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href="https://github.com/shrutinikam27" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 transition-colors text-lg">
              View All Work <ExternalLink className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-[2rem] overflow-hidden bg-secondary border border-white/5 hover:border-primary/20 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-foreground/60 mb-8 line-clamp-2 text-lg">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <a href={project.github} className="p-3 rounded-xl bg-background border border-white/10 hover:border-primary/50 text-foreground transition-all">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href={project.demo} className="p-3 rounded-xl bg-background border border-white/10 hover:border-primary/50 text-foreground transition-all">
                    <ExternalLink className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

