import { motion } from "motion/react";
import { Code2, Palette, Smartphone, Globe } from "lucide-react";

const services = [
  {
    title: "Web Development",
    icon: Code2,
    description: "Building fast, responsive, and secure web applications using React, Next.js, and modern technologies.",
  },
  {
    title: "App Development",
    icon: Smartphone,
    description: "Creating high-performance cross-platform mobile applications using Flutter and Java.",
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    description: "Designing intuitive and aesthetically pleasing user interfaces that provide seamless user experiences.",
  },
];

export default function Services() {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2rem] bg-background border border-white/5 hover:border-primary/40 transition-all duration-300 group shadow-[0_0_2rem_rgba(0,0,0,0.2)]"
            >
              <div className="mb-6 p-4 rounded-2xl bg-secondary border border-primary/20 w-fit mx-auto group-hover:bg-primary transition-colors text-primary group-hover:text-background shadow-[0_0_1.5rem_rgba(0,171,240,0.1)]">
                <service.icon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-foreground/60 text-lg leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8">
                <a href="#" className="relative inline-flex justify-center items-center px-8 py-3 bg-primary border-2 border-primary rounded-xl text-lg text-background font-bold tracking-wide z-[1] transition-all duration-500 hover:text-primary overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-background before:z-[-1] before:transition-all before:duration-500 hover:before:w-full shadow-[0_0_1rem_rgba(0,171,240,0.3)] hover:shadow-[0_0_2rem_rgba(0,171,240,0.5)]">
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
