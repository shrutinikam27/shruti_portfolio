import { motion, AnimatePresence } from "motion/react";
import { Code2, Palette, Smartphone, X } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Web Development",
    icon: Code2,
    description: "Building fast, responsive, and secure web applications using React, Next.js, and modern technologies.",
    details: "I specialize in creating high-performance websites that are optimized for speed and SEO. My expertise includes front-end frameworks like React and Next.js, back-end integration, and ensuring a seamless user experience across all devices. I focus on writing clean, maintainable code and implementing modern design patterns."
  },
  {
    title: "App Development",
    icon: Smartphone,
    description: "Creating high-performance cross-platform mobile applications using Flutter and Java.",
    details: "I build native and cross-platform mobile applications that provide a buttery-smooth user experience. Leveraging Flutter for cross-platform efficiency and Java for deep Android integration, I ensure that your app performs exceptionally on every screen. From MVP to full-scale production, I handle the entire lifecycle."
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    description: "Designing intuitive and aesthetically pleasing user interfaces that provide seamless user experiences.",
    details: "Design is more than just looks; it's about how it works. I create user-centric designs that prioritize accessibility and engagement. Using modern design tools, I develop wireframes, prototypes, and final high-fidelity mockups that bring your vision to life with vibrant colors and smooth interactions."
  },
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Our <span className="text-primary italic">Services</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-foreground/70 text-xl max-w-2xl mx-auto mb-16"
        >
          We provide a wide range of creative and technical services to help your business thrive in the digital world.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -15,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="p-10 rounded-[2rem] bg-background border border-white/5 hover:border-primary/40 transition-all duration-300 group shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col h-full relative overflow-hidden"
            >
              {/* Optional: Glare effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="mb-6 p-4 rounded-2xl bg-secondary border border-primary/20 w-fit mx-auto group-hover:bg-primary transition-colors text-primary group-hover:text-background shadow-[0_0_1.5rem_rgba(0,171,240,0.1)]">
                <service.icon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-foreground/60 text-lg leading-relaxed mb-4">
                {service.description}
              </p>

              <div className="mt-auto pt-8">
                <button
                  onClick={() => setExpandedIndex(index)}
                  className="relative inline-flex justify-center items-center px-8 py-3 bg-primary border-2 border-primary rounded-xl text-lg text-background font-bold tracking-wide z-[1] transition-all duration-500 hover:text-primary overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-background before:z-[-1] before:transition-all before:duration-500 hover:before:w-full shadow-[0_0_1rem_rgba(0,171,240,0.3)] hover:shadow-[0_0_2rem_rgba(0,171,240,0.5)]"
                >
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {expandedIndex !== null && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setExpandedIndex(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] cursor-pointer"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl bg-secondary/80 backdrop-blur-2xl border border-white/10 p-12 rounded-[3rem] z-[101] shadow-[0_30px_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row gap-8"
              >
                <button 
                  onClick={() => setExpandedIndex(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-foreground/50 hover:text-foreground"
                >
                  <X />
                </button>
                
                <div className="flex-shrink-0 flex items-start justify-center">
                  <div className="p-6 rounded-3xl bg-primary/10 border border-primary/20 text-primary">
                    {(() => {
                      const Icon = services[expandedIndex].icon;
                      return <Icon className="h-16 w-16" />;
                    })()}
                  </div>
                </div>

                <div className="flex-grow text-left">
                  <h2 className="text-4xl font-bold mb-4">{services[expandedIndex].title}</h2>
                  <div className="w-20 h-1 bg-primary rounded-full mb-6" />
                  <p className="text-foreground/80 text-xl leading-relaxed mb-8">
                    {services[expandedIndex].details}
                  </p>
                  <button
                    onClick={() => setExpandedIndex(null)}
                    className="px-10 py-3 bg-primary text-background font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,171,240,0.5)] transition-all"
                  >
                    Got It
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
