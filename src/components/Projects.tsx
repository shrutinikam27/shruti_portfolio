import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "StreetVend",
    description: "An innovative platform for street vendors to manage suppliers, track product inventory, and streamline business operations.",
    image: "/streetvendor.png",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    github: "https://github.com/shrutinikam27/streetvend",
    demo: "https://streetvend-web.vercel.app/",
  },
  {
    title: "Gemzi Jewellery App",
    description: "A premium Flutter application for jewellery marketing and gold saving schemes, featuring secure payments and interactive catalogs.",
    image: "/gemzi.png",
    tags: ["Flutter", "Dart", "Firebase", "Mobile App"],
    github: "https://github.com/shrutinikam27/gemzi-flutter-app",
    demo: "#",
  },
  {
    title: "SnipApp",
    description: "A productivity tool for developers to save, organize, and quickly access reusable code snippets with syntax highlighting.",
    image: "/snipapp.png",
    tags: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/shrutinikam27/snipapp",
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
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-xl bg-background border border-white/10 hover:border-primary/50 text-foreground transition-all"
                    title="View GitHub Repository"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  {project.demo !== "#" && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 rounded-xl bg-background border border-white/10 hover:border-primary/50 text-foreground transition-all"
                      title="View Live Demo"
                    >
                      <ExternalLink className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

