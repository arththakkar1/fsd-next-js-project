"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useVelocity,
  useSpring,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { fadeScaleProps, fadeUpProps } from "./Motion";
import ScrollToLink from "./ScrollToLink";
import { easeStandard } from "./Motion";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const heroBgY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const heroImageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, {
    stiffness: 140,
    damping: 25,
  });
  const metricY = useTransform(smoothVelocity, [-800, 0, 800], [10, 0, -10]);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden border-b border-black/5"
    >
      {/* depth blobs */}
      <motion.div
        style={{ y: heroBgY }}
        className="pointer-events-none absolute -top-32 right-[-120px] h-80 w-80 rounded-full bg-[#789e99]/25 blur-3xl"
      />
      <motion.div
        style={{ y: heroBgY }}
        className="pointer-events-none absolute top-40 left-[-120px] h-72 w-72 rounded-full bg-[#e0c7a6]/30 blur-3xl"
      />
      <motion.div
        style={{ y: heroBgY }}
        className="pointer-events-none absolute bottom-[-100px] right-[10%] h-64 w-64 rounded-full bg-[#b4d3cf]/25 blur-3xl"
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 py-16 md:py-24">
        {/* text */}
        <motion.div style={{ y: heroTextY }} {...fadeUpProps(0.05)}>
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-4">
            EARTH-KIND ORAL CARE
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-5 leading-tight">
            Love Your Smile.
            <span className="block text-[1.05rem] font-normal text-neutral-600 mt-3">
              A calmer, cleaner oral routine — for you and the planet.
            </span>
          </h2>

          <p className="text-neutral-600 text-sm md:text-base max-w-md mb-7">
            Thoughtfully designed toothbrushes and pastes that feel gentle, look
            minimal, and leave your mouth genuinely fresh.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <ScrollToLink to="#bestsellers">
              <Button
                className="rounded-full px-6 py-2 flex items-center gap-2"
                data-magnetic
              >
                Shop the collection <ArrowRight className="w-4 h-4" />
              </Button>
            </ScrollToLink>
            <Button
              variant="outline"
              className="rounded-full px-5 py-2 flex items-center gap-2"
              data-magnetic
            >
              Watch routine <PlayCircle className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center gap-4 text-xs text-neutral-500">
            <span>✓ Free shipping over $40</span>
            <span>✓ Recyclable packaging</span>
            <span>✓ Dentist-tested</span>
          </div>
        </motion.div>

        {/* hero image */}
        <motion.div
          style={{ y: heroImageY, scale: heroImageScale }}
          {...fadeScaleProps(0.1)}
          className="relative will-change-transform"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl bg-white/60 backdrop-blur-md border border-white/60">
            <Image
              src="/Hero.jpg"
              width={650}
              height={650}
              alt="PureBrush bathroom setup"
              className="object-cover h-[360px] md:h-[440px] w-full"
            />
          </div>

          {/* floating metric */}
          <motion.div
            style={{ y: metricY }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease: easeStandard }}
            className="absolute -bottom-6 left-6 rounded-2xl bg-white shadow-lg px-4 py-3 text-xs flex items-center gap-3"
          >
            <div className="h-7 w-7 rounded-full bg-[#789e99]/10 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#789e99]" />
            </div>
            <div>
              <p className="font-medium text-[0.75rem]">
                92% felt cleaner teeth
              </p>
              <p className="text-[0.7rem] text-neutral-500">
                Based on 4-week customer survey.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
