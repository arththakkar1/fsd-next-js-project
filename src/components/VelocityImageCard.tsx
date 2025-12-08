"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
} from "framer-motion";
import { fadeScaleProps } from "./Motion";

type Props = { img: string };

export default function VelocityImageCard({ img }: Props) {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, {
    stiffness: 140,
    damping: 25,
  });
  const offsetY = useTransform(smoothVelocity, [-900, 0, 900], [16, 0, -16]);

  return (
    <motion.div
      {...fadeScaleProps(0.1)}
      style={{ y: offsetY }}
      className="rounded-3xl overflow-hidden shadow-lg bg-white border border-white/60"
    >
      <Image
        src={img}
        width={520}
        height={520}
        alt="How it works"
        className="object-cover h-72 w-full"
      />
      <div className="p-5 text-xs text-neutral-600">
        <p className="font-medium mb-1">Designed for everyday calm.</p>
        <p>
          A small shift on your sink that can completely change how you feel
          about daily care.
        </p>
      </div>
    </motion.div>
  );
}
