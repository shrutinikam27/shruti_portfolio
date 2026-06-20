import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  targetSize: number;
  color: string;
  type: "sparkle" | "dot";
  speedX: number;
  speedY: number;
  alpha: number;
  phase: number;
  twinkleSpeed: number;
  isInteractive?: boolean;
  maxAge?: number;
  age?: number;
}

export default function GlitterBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const colors = [
      "rgba(20, 241, 149, ",  // Primary neon green
      "rgba(0, 255, 204, ",  // Accent teal
      "rgba(255, 255, 255, ", // Pure white
      "rgba(224, 255, 255, ", // Light cyan
    ];

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(150, Math.max(40, Math.floor((window.innerWidth * window.innerHeight) / 8000)));
      
      for (let i = 0; i < particleCount; i++) {
        const type = Math.random() > 0.45 ? "sparkle" : "dot";
        const size = type === "sparkle" ? Math.random() * 4 + 2 : Math.random() * 2 + 0.8;
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 0, // start small
          targetSize: size,
          color: colors[Math.floor(Math.random() * colors.length)],
          type,
          speedX: (Math.random() - 0.5) * 0.15,
          speedY: -(Math.random() * 0.2 + 0.05), // drift upwards
          alpha: Math.random(),
          phase: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.01 + Math.random() * 0.02,
        });
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Mouse and touch interactive effect: generate particles on move
    let lastMousePos = { x: 0, y: 0 };
    let mouseMoved = false;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      lastMousePos = { x, y };
      mouseMoved = true;

      // Spawn 1-2 interactive sparkles on mouse movement (throttled/limited)
      if (Math.random() > 0.7 && particles.length < 200) {
        particles.push({
          x: x + (Math.random() - 0.5) * 15,
          y: y + (Math.random() - 0.5) * 15,
          size: 0,
          targetSize: Math.random() * 5 + 3,
          color: colors[Math.floor(Math.random() * colors.length)],
          type: "sparkle",
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5 - 0.1,
          alpha: 1,
          phase: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.03 + Math.random() * 0.03,
          isInteractive: true,
          maxAge: 60 + Math.random() * 40,
          age: 0,
        });
      }
    };

    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const touch = e.touches[0];
      const x = touch.clientX;
      const y = touch.clientY;
      lastMousePos = { x, y };
      mouseMoved = true;

      // Spawn interactive sparkles on touch (slightly higher rate for direct touch feedback)
      if (Math.random() > 0.55 && particles.length < 220) {
        particles.push({
          x: x + (Math.random() - 0.5) * 20,
          y: y + (Math.random() - 0.5) * 20,
          size: 0,
          targetSize: Math.random() * 5 + 3,
          color: colors[Math.floor(Math.random() * colors.length)],
          type: "sparkle",
          speedX: (Math.random() - 0.5) * 0.6,
          speedY: (Math.random() - 0.5) * 0.6 - 0.1,
          alpha: 1,
          phase: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.03 + Math.random() * 0.03,
          isInteractive: true,
          maxAge: 60 + Math.random() * 40,
          age: 0,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouch, { passive: true });
    window.addEventListener("touchmove", handleTouch, { passive: true });

    // Drawing helper for 4-point sparkle
    const drawSparkle = (
      context: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      size: number,
      alpha: number,
      colorPrefix: string
    ) => {
      context.save();
      context.fillStyle = `${colorPrefix}${alpha})`;
      context.beginPath();
      // Concave 4-point star formula
      context.moveTo(cx, cy - size);
      context.quadraticCurveTo(cx, cy, cx + size, cy);
      context.quadraticCurveTo(cx, cy, cx, cy + size);
      context.quadraticCurveTo(cx, cy, cx - size, cy);
      context.quadraticCurveTo(cx, cy, cx, cy - size);
      context.closePath();
      context.fill();
      context.restore();
    };

    // Drawing helper for simple dots
    const drawDot = (
      context: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      radius: number,
      alpha: number,
      colorPrefix: string
    ) => {
      context.save();
      context.fillStyle = `${colorPrefix}${alpha})`;
      context.beginPath();
      context.arc(cx, cy, radius, 0, Math.PI * 2);
      context.fill();
      context.restore();
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, idx) => {
        // Handle age for interactive/temporary particles
        if (p.isInteractive && p.age !== undefined && p.maxAge !== undefined) {
          p.age++;
          if (p.age >= p.maxAge) {
            // Remove particle
            particles.splice(idx, 1);
            return;
          }
          // Fade out based on age
          p.alpha = Math.max(0, 1 - p.age / p.maxAge);
        } else {
          // Standard twinkling logic: cycle alpha using sine wave
          p.phase += p.twinkleSpeed;
          p.alpha = 0.15 + (Math.sin(p.phase) + 1) * 0.425; // cycle between 0.15 and 1
        }

        // Animate size entry
        if (p.size < p.targetSize) {
          p.size += (p.targetSize - p.size) * 0.1;
        }

        // Move particle
        p.x += p.speedX;
        p.y += p.speedY;

        // Mouse repelling (for standard particles)
        if (!p.isInteractive && mouseMoved) {
          const dx = p.x - lastMousePos.x;
          const dy = p.y - lastMousePos.y;
          const dist = Math.hypot(dx, dy);
          const limit = 120; // range of influence
          
          if (dist < limit) {
            const force = (limit - dist) / limit; // 0 to 1 force
            const angle = Math.atan2(dy, dx);
            p.x += Math.cos(angle) * force * 1.5;
            p.y += Math.sin(angle) * force * 1.5;
          }
        }

        // Wrap boundaries
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        
        // Wrap vertical (always drifting up)
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
          if (!p.isInteractive) {
            p.size = 0; // reset entry size
          }
        }

        // Draw particle
        if (p.type === "sparkle") {
          drawSparkle(ctx, p.x, p.y, p.size, p.alpha, p.color);
        } else {
          drawDot(ctx, p.x, p.y, p.size, p.alpha, p.color);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("touchmove", handleTouch);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      style={{
        mixBlendMode: "screen",
        opacity: 0.85,
      }}
    />
  );
}
