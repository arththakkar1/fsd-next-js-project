"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
} from "framer-motion";
import { fadeScaleProps, fadeUpProps } from "./Motion";
import { ShieldCheck } from "lucide-react";

type Props = {
  img: string;
  title: string;
  desc: string;
  reverse?: boolean;
};

export default function SplitSection({ img, title, desc, reverse }: Props) {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, {
    stiffness: 120,
    damping: 20,
  });
  const velocityY = useTransform(smoothVelocity, [-800, 0, 800], [18, 0, -18]);

  return (
    <div
      className={`grid md:grid-cols-2 gap-10 items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <motion.div
        {...fadeScaleProps(0.05)}
        style={{ y: velocityY }}
        className="rounded-3xl overflow-hidden shadow-xl bg-white border border-white/60"
      >
        <Image
          src={img}
          width={700}
          height={700}
          alt={title}
          className="object-cover h-72 md:h-80 w-full"
        />
      </motion.div>

      <motion.div {...fadeUpProps(0.05)}>
        <h3 className="text-xl md:text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-sm text-neutral-600 mb-5 max-w-md">{desc}</p>
        <div className="flex items-center gap-2 text-xs text-neutral-500">
          <ShieldCheck className="w-4 h-4 text-[#789e99]" />
          <span>Backed by everyday users & dental experts.</span>
        </div>
      </motion.div>
    </div>
  );
}
