"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MagneticCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const scale = useMotionValue(0.6);

  const springX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 });
  const springScale = useSpring(scale, { stiffness: 250, damping: 25 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const enter = () => scale.set(1);
    const leave = () => scale.set(0.6);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseenter", enter);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", enter);
      window.removeEventListener("mouseleave", leave);
    };
  }, [x, y, scale]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-90 hidden md:block h-9 w-9 rounded-full border border-[#789e99]/70 bg-[#789e99]/10 backdrop-blur-md -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"
      style={{ x: springX, y: springY, scale: springScale }}
    />
  );
}
