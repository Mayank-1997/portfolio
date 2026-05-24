"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorGlow() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { damping: 30, stiffness: 220 });
  const smoothY = useSpring(y, { damping: 30, stiffness: 220 });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      x.set(event.clientX - 160);
      y.set(event.clientY - 160);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-50 hidden h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,178,36,.17),rgba(255,107,0,.08)_40%,transparent_70%)] blur-xl lg:block"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}
