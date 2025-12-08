"use client";

import { motion, cubicBezier } from "framer-motion";

export const MotionDiv = motion.div;

export const easeStandard = cubicBezier(0.16, 1, 0.3, 1);

export const fadeUpProps = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.9, delay, ease: easeStandard },
});

export const fadeScaleProps = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.94 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 1, delay, ease: easeStandard },
});
