"use client";

import { MotionDiv, fadeUpProps } from "./Motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function VideoShowcase() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 1]);

  return (
    <section ref={ref} className="py-20 bg-[#faf7f2] border-t border-black/5">
      <MotionDiv {...fadeUpProps(0)} className="text-center mb-12">
        <h3 className="text-xl font-semibold">A Ritual, Not a Task</h3>
        <p className="text-sm text-neutral-600">
          See how PureBrush fits into a calm morning routine.
        </p>
      </MotionDiv>

      <motion.div
        style={{
          scale,
          y,
          opacity,
        }}
        className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-xl will-change-transform"
      >
        <video
          src="/Video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full object-cover"
        />
      </motion.div>
    </section>
  );
}
