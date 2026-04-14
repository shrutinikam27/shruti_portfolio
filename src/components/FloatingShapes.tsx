import { motion } from "motion/react";

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full"
      />
      <motion.div
        animate={{
          y: [0, 50, 0],
          rotate: [360, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-accent/10 blur-[180px] rounded-full"
      />
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[30%] right-[20%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full"
      />
      
      {/* 3D-like floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            y: ["-10%", "110%"],
            rotateZ: Math.random() * 360,
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * -20,
          }}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          style={{
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
}
