import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "motion/react";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const mainX = useMotionValue(0);
  const mainY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 250 };
  const trailConfig = { damping: 40, stiffness: 150 };

  // Multiple trail circles for a liquid effect
  const trail1X = useSpring(mainX, springConfig);
  const trail1Y = useSpring(mainY, springConfig);
  const trail2X = useSpring(mainX, trailConfig);
  const trail2Y = useSpring(mainY, trailConfig);
  const trail3X = useSpring(mainX, { damping: 50, stiffness: 100 });
  const trail3Y = useSpring(mainY, { damping: 50, stiffness: 100 });

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mainX.set(e.clientX);
      mainY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleHover = () => setIsHovering(true);
    const handleUnhover = () => setIsHovering(false);

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Hide default cursor globally
    document.body.style.cursor = "none";

    const updateInteractives = () => {
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.addEventListener("mouseenter", handleHover);
        el.addEventListener("mouseleave", handleUnhover);
        // Explicitly hide cursor on these too
        (el as HTMLElement).style.cursor = "none";
      });
    };

    updateInteractives();
    
    // Observer for dynamic content
    const observer = new MutationObserver(updateInteractives);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "auto";
      observer.disconnect();
    };
  }, [mainX, mainY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Liquid Trail - Layer 3 (Slowest) */}
      <motion.div
        className="absolute w-12 h-12 rounded-full bg-primary/5 blur-xl"
        style={{ x: trail3X, y: trail3Y, translateX: "-50%", translateY: "-50%" }}
      />
      
      {/* Liquid Trail - Layer 2 */}
      <motion.div
        className="absolute w-8 h-8 rounded-full border border-primary/20"
        style={{ x: trail2X, y: trail2Y, translateX: "-50%", translateY: "-50%" }}
      />

      {/* Liquid Trail - Layer 1 (Inner) */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-primary/30"
        style={{ 
          x: trail1X, 
          y: trail1Y, 
          translateX: "-50%", 
          translateY: "-50%",
          scale: isClicking ? 0.8 : 1
        }}
      />

      {/* Main Pulse Pointer */}
      <motion.div
        className="absolute w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_rgba(20,241,149,0.8)]"
        style={{ 
          x: mainX, 
          y: mainY, 
          translateX: "-50%", 
          translateY: "-50%",
          scale: isHovering ? 4 : 1,
          opacity: isHovering ? 0.3 : 1
        }}
      >
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-primary"
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Interaction Ripple on Click */}
      <AnimatePresence>
        {isClicking && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0.5 }}
            animate={{ scale: 2.5, opacity: 0 }}
            exit={{ scale: 3, opacity: 0 }}
            className="absolute w-12 h-12 border-2 border-primary rounded-full"
            style={{ x: mainX, y: mainY, translateX: "-50%", translateY: "-50%" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
