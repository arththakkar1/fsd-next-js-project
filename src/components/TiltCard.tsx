"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
};

export default function TiltCard({
  children,
  className = "",
  maxTilt = 10,
}: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const hoverScale = useMotionValue(1);

  const rotateX = useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]);
  const scale = useSpring(hoverScale, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseEnter = () => hoverScale.set(1.03);
  const handleMouseLeave = () => {
    hoverScale.set(1);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      style={{
        rotateX,
        rotateY,
        scale,
        transformPerspective: 900,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
