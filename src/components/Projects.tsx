import { motion } from "motion/react";
import { Github, ExternalLink, Code2, Globe, Database, Smartphone } from "lucide-react";

const projects = [
  {
    title: "StreetVend",
    description: "A comprehensive business management ecosystem for street vendors. This platform integrates real-time inventory tracking, supplier connection modules, and sales analytics to empower micro-entrepreneurs.",
    image: "/streetvendor.png",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    icon: Globe,
    github: "https://github.com/shrutinikam27/streetvend",
    demo: "https://streetvend-web.vercel.app/",
  },
  {
    title: "Gemzi App",
    description: "A premium mobile marketing platform for luxury jewellery. Built with Flutter, it features high-fidelity catalogs and secure b-to-c gold saving schemes.",
    image: "/gemzi.png",
    tags: ["Flutter", "Dart", "Firebase", "Ongoing"],
    icon: Smartphone,
    github: "https://github.com/shrutinikam27/gemzi-flutter-app",
    demo: "#",
    isApp: true,
  },
  {
    title: "SnipText",
    description: "An elegant productivity tool for developers. It provides a personalized code snippet library with advanced syntax highlighting and rapid-search functionality.",
    image: "/snipapp.png",
    tags: ["React", "TypeScript", "Tailwind"],
    icon: Smartphone,
    github: "https://github.com/shrutinikam27/snipapp",
    demo: "#",
    isApp: true,
  },

  {
    title: "Infinite Era",
    description: "An immersive language learning platform featuring interactive lessons, daily challenges, and gamified progress tracking with a vibrant, intuitive interface.",
    image: "/lingo_real.png",

    tags: ["Next.js", "TypeScript", "Drizzle", "PostgreSQL", "Clerk",],
    icon: Globe,
    github: "https://github.com/shrutinikam27/mini_project",
    demo: "https://lingo-pi-roan.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
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
            <span className="text-primary font-black text-xl uppercase tracking-[0.5rem]">The Portfolio</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-7xl font-black text-white  tracking-tighter uppercase"
          >
            Project <span className="text-primary"> Gallery</span>
          </motion.h2>
        </div>

        {/* Bento Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-secondary/10 backdrop-blur-3xl shadow-2xl flex flex-col"
            >
              <div className="relative h-[300px] overflow-hidden flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-80 group-hover:opacity-100 object-top ${'mobileImage' in project ? 'hidden md:block' : ''}`}
                />
                {'mobileImage' in project && (
                  <img
                    src={project.mobileImage as string}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-80 group-hover:opacity-100 object-top block md:hidden"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                {/* Floating Icon inside Image Part */}
                <div className="absolute top-8 left-8 p-4 rounded-2xl bg-background/50 backdrop-blur-xl border border-white/10 text-primary z-20">
                  <project.icon size={28} />
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow bg-secondary/5 group-hover:bg-primary/[0.01] transition-colors duration-500">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[0.6rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 text-foreground/50 border border-white/5 group-hover:border-primary/20 group-hover:text-primary transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github}
                      target="_blank"
                      className="text-foreground/60 hover:text-primary transition-all p-2 bg-white/5 rounded-lg active:bg-primary/20"
                    >
                      <Github size={24} />
                    </motion.a>
                    {(project.demo !== "#" || ('isApp' in project && project.isApp)) && (
                      <motion.a
                        whileHover={project.demo !== "#" ? { scale: 1.1, y: -2 } : {}}
                        whileTap={project.demo !== "#" ? { scale: 0.9 } : {}}
                        href={project.demo}
                        target="_blank"
                        className={`transition-all p-2 rounded-lg ${project.demo !== "#"
                          ? "text-foreground/60 hover:text-primary bg-white/5 active:bg-primary/20"
                          : "text-foreground/20 cursor-default bg-transparent"
                          }`}
                      >
                        {'isApp' in project && project.isApp ? <Smartphone size={24} /> : <ExternalLink size={24} />}
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-3xl font-bold text-white tracking-tight uppercase mb-3 group-hover:text-primary transition-all duration-500">
                    {project.title}
                  </h3>
                  <p className="text-base text-foreground/50 font-medium leading-relaxed line-clamp-3 group-hover:text-foreground/80 transition-colors">
                    {project.description}
                  </p>
                </div>

                {/* Animated Call to Action */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="mt-10 flex items-center gap-4 text-xs font-black uppercase tracking-[0.3rem] text-primary/40 group-hover:text-primary transition-colors cursor-pointer"
                >
                  EXPLORE PROJECT
                  <div className="w-8 h-[1px] bg-primary/20 group-hover:w-16 group-hover:bg-primary transition-all duration-700" />
                </motion.div>
              </div>

              {/* High End Accent Border */}
              <div className="absolute top-0 right-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-700 delay-100" />
            </motion.div>
          ))}
        </div>
        {/* View More Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 pt-20 border-t border-white/5 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-primary/5 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <p className="text-primary font-black uppercase tracking-[1rem] mb-6">Deep Dive</p>
          <h3 className="text-8xl md:text-[12rem] font-black text-white uppercase tracking-tighter mb-12 opacity-10 group-hover:opacity-20 transition-opacity select-none leading-none">
            REPOSITORIES
          </h3>

          <div className="relative z-10">
            <h4 className="text-4xl font-light text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              Want to see more? Explore my full technical catalog and open-source contributions.
            </h4>

            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/shrutinikam27"
              target="_blank"
              className="inline-flex items-center gap-6 px-16 py-8 bg-white text-background rounded-3xl font-black uppercase tracking-[0.3rem] hover:bg-primary transition-all shadow-[0_30px_60px_rgba(0,0,0,0.4)] group"
            >
              VIEW ON GITHUB
              <Github size={28} className="group-hover:rotate-12 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
