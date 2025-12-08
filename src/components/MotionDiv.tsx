"use client";

import { motion, cubicBezier } from "framer-motion";

export const MotionDiv = motion.div;

export const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.9,
    ease: cubicBezier(0.16, 1, 0.3, 1),
  },
};

export const fadeScale = {
  initial: { opacity: 0, scale: 0.94 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 1,
    ease: cubicBezier(0.16, 1, 0.3, 1),
  },
};

export const fadeFromLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: {
    duration: 1,
    ease: cubicBezier(0.18, 0.89, 0.32, 1),
  },
};

export const fadeFromRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: {
    duration: 1,
    ease: cubicBezier(0.18, 0.89, 0.32, 1),
  },
};

export const staggerParent = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};
