"use client";

import React from "react";
import { motion } from "framer-motion";
import { easeStandard } from "./Motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function StaggerReveal({ children, className }: Props) {
  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: easeStandard,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeStandard },
    },
  };

  return (
    <motion.div
      className={className}
      variants={parent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {React.Children.map(children, (node, i) => (
        <motion.div key={i} variants={child}>
          {node}
        </motion.div>
      ))}
    </motion.div>
  );
}
