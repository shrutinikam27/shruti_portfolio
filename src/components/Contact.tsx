import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader2, Linkedin, Github } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xnjorbkp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="text-primary ">Me!</span>
            </h2>
            <p className="text-foreground/70 text-xl mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-background border border-primary/20 text-primary group-hover:bg-primary group-hover:text-background transition-all duration-500 shadow-[0_0_1.5rem_rgba(0,171,240,0.1)]">
                  <Mail className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-xl">Email</h4>
                  <p className="text-foreground/60 text-lg">shrutisnikam95@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-background border border-primary/20 text-primary group-hover:bg-primary group-hover:text-background transition-all duration-500 shadow-[0_0_1.5rem_rgba(0,171,240,0.1)]">
                  <Phone className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-xl">Phone</h4>
                  <p className="text-foreground/60 text-lg">+91 7083671131</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-background border border-primary/20 text-primary group-hover:bg-primary group-hover:text-background transition-all duration-500 shadow-[0_0_1.5rem_rgba(0,171,240,0.1)]">
                  <MapPin className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-xl">Location</h4>
                  <p className="text-foreground/60 text-lg">Satara, Maharashtra, India</p>
                </div>
              </div>

              {/* Social Networking Block */}
              <div className="mt-12 pt-12 border-t border-white/5">
                <h4 className="font-black text-white text-xl uppercase tracking-[0.2rem] mb-8 ">Social Networking</h4>
                <div className="flex gap-6">
                   <motion.a 
                    whileHover={{ y: -5, scale: 1.1 }}
                    href="https://in.linkedin.com/in/shruti-s-nikam-983062257" 
                    target="_blank" 
                    rel="noopener"
                    className="flex items-center gap-4 px-6 py-4 bg-primary text-background rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-[0_10px_20px_rgba(20,241,149,0.2)]"
                   >
                     <Linkedin size={20} />
                     LinkedIn
                   </motion.a>
                   <motion.a 
                    whileHover={{ y: -5, scale: 1.1 }}
                    href="https://github.com/shrutinikam27" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-6 py-4 bg-secondary border border-primary/20 text-primary rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-primary/10 transition-all"
                   >
                     <Github size={20} />
                     GitHub
                   </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2rem] bg-background border border-white/5 shadow-[0_0_3rem_rgba(0,0,0,0.3)]"
          >
            <form 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/50 ml-1">Name</label>
                  <input 
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe" 
                    className="w-full px-5 h-14 bg-secondary border border-white/10 rounded-xl focus:border-primary/50 focus:outline-none transition-all text-lg placeholder:text-foreground/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/50 ml-1">Email</label>
                  <input 
                    id="email"
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com" 
                    className="w-full px-5 h-14 bg-secondary border border-white/10 rounded-xl focus:border-primary/50 focus:outline-none transition-all text-lg placeholder:text-foreground/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground/50 ml-1">Subject</label>
                <input 
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry" 
                  className="w-full px-5 h-14 bg-secondary border border-white/10 rounded-xl focus:border-primary/50 focus:outline-none transition-all text-lg placeholder:text-foreground/20"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/50 ml-1">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..." 
                  className="w-full p-5 bg-secondary border border-white/10 rounded-xl focus:border-primary/50 focus:outline-none transition-all text-lg min-h-[160px] placeholder:text-foreground/20 resize-none"
                />
              </div>
              <button 
                type="submit"
                disabled={status === "submitting"}
                className={`relative inline-flex justify-center items-center w-full h-14 bg-primary border-[.2rem] border-primary rounded-[.8rem] text-[1.8rem] text-background font-semibold tracking-[.1rem] z-[1] transition-all duration-[.5s] hover:text-primary hover:bg-transparent overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-background before:z-[-1] before:transition-all before:duration-[.5s] hover:before:w-full disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {status === "submitting" ? (
                  <>Sending... <Loader2 className="ml-3 h-5 w-5 animate-spin" /></>
                ) : status === "success" ? (
                  <>Message Sent! <CheckCircle className="ml-3 h-5 w-5" /></>
                ) : status === "error" ? (
                  <>Error! Try Again <AlertCircle className="ml-3 h-5 w-5" /></>
                ) : (
                  <>Send Message <Send className="ml-3 h-5 w-5" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


