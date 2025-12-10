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

  // Desktop animation
  const scaleDesktop = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const yDesktop = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  // Mobile animation (softer)
  const scaleMobile = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const yMobile = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);

  // Choose animation based on screen width
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  const scale = isMobile ? scaleMobile : scaleDesktop;
  const y = isMobile ? yMobile : yDesktop;

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 1]);

  return (
    <section
      ref={ref}
      className="py-12 sm:py-20 bg-[#faf7f2] border-t border-black/5 px-4"
    >
      <MotionDiv {...fadeUpProps(0)} className="text-center mb-8 sm:mb-12">
        <h3 className="text-lg sm:text-xl font-semibold">
          A Ritual, Not a Task
        </h3>
        <p className="text-sm sm:text-base text-neutral-600">
          See how PureBrush fits into a calm morning routine.
        </p>
      </MotionDiv>

      <motion.div
        style={{
          scale,
          y,
          opacity,
        }}
        className="max-w-3xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl will-change-transform"
      >
        <video
          src="/Video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </section>
  );
}
