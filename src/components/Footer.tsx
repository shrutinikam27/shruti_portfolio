import { Github, Linkedin, Twitter, Heart, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#" className="text-3xl font-bold text-foreground hover:text-primary transition-colors">
              Shruti Nikam
            </a>
            <p className="mt-4 text-foreground/50 max-w-xs text-lg">
              Designing and developing beautiful, functional digital experiences that stand out.
            </p>
          </div>

          <div className="flex gap-16">
            <div className="space-y-4">
              <h4 className="font-bold text-primary text-xl">Links</h4>
              <ul className="space-y-2 text-lg text-foreground/60">
                <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-primary text-xl">Social</h4>
              <ul className="space-y-2 text-lg text-foreground/60">
                <li><a href="https://github.com/shrutinikam27" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="https://in.linkedin.com/in/shruti-s-nikam-983062257" target="_blank" rel="noopener" className="hover:text-primary transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-lg text-foreground/40">
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Made with <Heart className="h-5 w-5 text-primary fill-primary" /> by Shruti S Nikam
          </p>
        </div>
      </div>
    </footer>
  );
}

