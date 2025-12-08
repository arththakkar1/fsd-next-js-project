"use client";

import { useRef } from "react";
import Image from "next/image";
import LenisProvider from "./lenis";

import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import {
  Heart,
  Leaf,
  Sparkles,
  ClipboardPlus,
  ShieldCheck,
  ArrowRight,
  Recycle,
  Globe2,
  Instagram,
  PlayCircle,
} from "lucide-react";

/* ---------- ANIMATION HELPERS ---------- */

const easeStandard = cubicBezier(0.16, 1, 0.3, 1);

const fadeUpProps = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.9, delay, ease: easeStandard },
});

const fadeScaleProps = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.94 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 1, delay, ease: easeStandard },
});

/* ---------- PAGE COMPONENT ---------- */

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms for hero
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const heroBgY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const heroImageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <main className="bg-[#faf7f2] text-[#1d1d1d]">
      <LenisProvider />

      {/* HEADER */}
      <motion.header
        {...fadeUpProps(0)}
        className="sticky top-0 z-30 border-b border-black/5 bg-[#faf7f2]/80 backdrop-blur-xl"
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center gap-2">
            <span className="h-7 w-7 rounded-full bg-[#789e99] text-white flex items-center justify-center text-xs font-semibold">
              PB
            </span>
            <h1 className="text-lg font-semibold tracking-tight">PureBrush</h1>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-neutral-600">
            <a href="#benefits">Benefits</a>
            <a href="#how-it-works">How it works</a>
            <a href="#bestsellers">Best-sellers</a>
            <a href="#faq">FAQ</a>
          </nav>

          <Button variant="outline" className="rounded-full px-5">
            Shop Now
          </Button>
        </div>
      </motion.header>

      {/* HERO WITH PARALLAX */}
      <section
        ref={heroRef}
        className="relative overflow-hidden border-b border-black/5"
      >
        {/* Background gradient blob */}
        <motion.div
          style={{ y: heroBgY }}
          className="pointer-events-none absolute -top-32 right-[-120px] h-80 w-80 rounded-full bg-[#789e99]/25 blur-3xl"
        />
        <motion.div
          style={{ y: heroBgY }}
          className="pointer-events-none absolute top-40 left-[-120px] h-72 w-72 rounded-full bg-[#e0c7a6]/30 blur-3xl"
        />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 py-16 md:py-24">
          {/* Hero text */}
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
              Thoughtfully designed toothbrushes and pastes that feel gentle,
              look minimal, and leave your mouth genuinely fresh.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <Button className="rounded-full px-6 py-2 flex items-center gap-2">
                Shop the collection <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-5 py-2 flex items-center gap-2"
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

          {/* Hero image card */}
          <motion.div
            style={{ y: heroImageY, scale: heroImageScale }}
            {...fadeScaleProps(0.1)}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl bg-white/60 backdrop-blur-md border border-white/60">
              <Image
                src="/1.jpg"
                width={650}
                height={650}
                alt="PureBrush bathroom setup"
                className="object-cover h-[360px] md:h-[440px] w-full"
              />
            </div>

            {/* Floating mini card */}
            <motion.div
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

      {/* FEATURES / BENEFITS */}
      <section
        id="benefits"
        className="bg-white border-b border-black/5 py-16 md:py-20"
      >
        <motion.div
          {...fadeUpProps(0)}
          className="max-w-6xl mx-auto px-6 text-center mb-10"
        >
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            Gentle by design. Powerful in results.
          </h3>
          <p className="text-sm text-neutral-600 max-w-xl mx-auto">
            Every detail is tuned to create a calm, effective routine that feels
            as good on your gums as it looks on your sink.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeStandard }}
          className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 px-6"
        >
          {[
            {
              icon: <Heart className="w-7 h-7 text-[#789e99]" />,
              title: "Gentle Care",
              text: "Soft tapered bristles designed to protect enamel and massage gums.",
            },
            {
              icon: <Leaf className="w-7 h-7 text-[#789e99]" />,
              title: "Sustainable",
              text: "Handles and packaging from responsible, low-waste materials.",
            },
            {
              icon: <Sparkles className="w-7 h-7 text-[#789e99]" />,
              title: "Minimal Aesthetic",
              text: "Neutral tones and soft forms that blend into any bathroom.",
            },
            {
              icon: <ClipboardPlus className="w-7 h-7 text-[#789e99]" />,
              title: "Dentist-Approved",
              text: "Developed with dental experts for better daily oral outcomes.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              {...fadeUpProps(0.05)}
              className="text-center flex flex-col items-center"
            >
              <div className="mb-4 h-12 w-12 rounded-full bg-[#789e99]/10 flex items-center justify-center">
                {item.icon}
              </div>
              <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
              <p className="text-neutral-500 text-xs leading-relaxed max-w-[220px]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="max-w-6xl mx-auto px-6 py-18 md:py-20"
      >
        <motion.div {...fadeUpProps(0)} className="mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-2">
            HOW IT WORKS
          </p>
          <h3 className="text-xl font-semibold mb-2">
            Your new routine in three easy steps.
          </h3>
          <p className="text-sm text-neutral-600 max-w-md">
            Build a ritual that feels intuitive, calm, and genuinely effective —
            without adding more noise to your day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1.3fr,1fr] gap-12 items-start">
          {/* Steps */}
          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Choose your set",
                text: "Pick the brush and paste combination that matches your sensitivity and aesthetic.",
              },
              {
                step: "02",
                title: "Build your ritual",
                text: "Place your PureBrush set where you see it daily — turning a habit into a moment.",
              },
              {
                step: "03",
                title: "Smile with intention",
                text: "Two minutes, twice a day. Gentle circular strokes, no harsh scrubbing needed.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                {...fadeUpProps(idx * 0.08)}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="h-8 w-8 rounded-full border border-neutral-300 flex items-center justify-center text-[0.7rem] font-medium">
                    {item.step}
                  </div>
                  {idx < 2 && (
                    <div className="w-px flex-1 bg-neutral-200 mt-1" />
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                  <p className="text-xs text-neutral-600">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Small image card */}
          <motion.div
            {...fadeScaleProps(0.1)}
            className="rounded-3xl overflow-hidden shadow-lg bg-white border border-white/60"
          >
            <Image
              src="/5.jpg"
              width={520}
              height={520}
              alt="How it works"
              className="object-cover h-72 w-full"
            />
            <div className="p-5 text-xs text-neutral-600">
              <p className="font-medium mb-1">Designed for everyday calm.</p>
              <p>
                A small shift on your sink that can completely change how you
                feel about daily care.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SUSTAINABILITY STATS */}
      <section className="bg-white border-y border-black/5 py-16 md:py-20">
        <motion.div
          {...fadeUpProps(0)}
          className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-2">
              SUSTAINABILITY
            </p>
            <h3 className="text-xl font-semibold mb-2">
              Small choices, lighter footprint.
            </h3>
            <p className="text-sm text-neutral-600 max-w-md">
              PureBrush is built to quietly reduce waste without asking you to
              change your entire lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 text-center text-xs">
            <div>
              <p className="text-2xl font-semibold mb-1">72%</p>
              <p className="text-neutral-500">less plastic per brush*</p>
            </div>
            <div>
              <p className="text-2xl font-semibold mb-1">4x</p>
              <p className="text-neutral-500">recyclable packaging layers</p>
            </div>
            <div>
              <p className="text-2xl font-semibold mb-1">100%</p>
              <p className="text-neutral-500">climate conscious shipping</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fadeUpProps(0.1)}
          className="max-w-6xl mx-auto px-6 mt-8 grid md:grid-cols-3 gap-6 text-xs"
        >
          <div className="flex gap-3 items-start">
            <div className="h-8 w-8 rounded-full bg-[#789e99]/10 flex items-center justify-center">
              <Recycle className="w-4 h-4 text-[#789e99]" />
            </div>
            <div>
              <p className="font-medium mb-1">Thoughtful end-of-life</p>
              <p className="text-neutral-600">
                Handles and packaging are designed to be responsibly recycled or
                repurposed.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="h-8 w-8 rounded-full bg-[#789e99]/10 flex items-center justify-center">
              <Globe2 className="w-4 h-4 text-[#789e99]" />
            </div>
            <div>
              <p className="font-medium mb-1">Lower impact logistics</p>
              <p className="text-neutral-600">
                Shipping decisions prioritize carbon-conscious partners and
                routes.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="h-8 w-8 rounded-full bg-[#789e99]/10 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-[#789e99]" />
            </div>
            <div>
              <p className="font-medium mb-1">No compromises on safety</p>
              <p className="text-neutral-600">
                Clean ingredients and materials, rigorously tested for daily
                use.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* IMAGE + TEXT SECTIONS (AESTHETIC / RESULTS) */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        <SplitSection
          img="/6.jpg"
          title="Elevated sink, calmer mind."
          desc="A visually quiet setup that invites you to slow down for two minutes — not rush through another task."
          reverse={false}
        />

        <SplitSection
          img="/7.jpg"
          title="Fresh that actually lasts."
          desc="Gentle formulas and soft bristles work together to support long-lasting freshness without harshness."
          reverse={true}
        />
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#789e99] text-white py-20">
        <motion.div {...fadeUpProps(0)} className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-2xl font-semibold mb-2">
            “It feels like a small spa moment twice a day.”
          </h2>
          <p className="text-center text-xs md:text-sm text-white/80 mb-10">
            PureBrush users consistently describe their new routine as calmer,
            softer, and more intentional.
          </p>
        </motion.div>

        <motion.div
          {...fadeUpProps(0.05)}
          className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6"
        >
          {[
            {
              quote: "“After two weeks, my teeth feel much healthier!”",
              name: "Sarah L.",
            },
            {
              quote: "“I've tried many brushes but PureBrush stands out.”",
              name: "Ajay M.",
            },
            {
              quote: "“Sustainable, beautiful, and actually effective.”",
              name: "Amanda C.",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              {...fadeScaleProps(0.05 * i)}
              className="bg-white/15 rounded-2xl backdrop-blur-xl border border-white/25 p-6 shadow-lg text-xs"
            >
              <p className="text-[0.75rem] mb-2">★★★★★</p>
              <p className="text-[0.8rem] mb-4">{t.quote}</p>
              <p className="text-[0.7rem] text-white/80">{t.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* BEST SELLERS */}
      <section id="bestsellers" className="bg-[#789e99] text-white pt-4 pb-20">
        <motion.div {...fadeUpProps(0)} className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-2">
                BEST-SELLERS
              </p>
              <h2 className="text-xl font-semibold">Explore our core set.</h2>
              <p className="text-sm text-white/80 max-w-md mt-1">
                Start with essentials trusted by thousands of calm-sink
                enthusiasts.
              </p>
            </div>
            <Button
              variant="outline"
              className="rounded-full border-white/40 text-xs"
            >
              View all products
            </Button>
          </div>
        </motion.div>

        <motion.div
          {...fadeUpProps(0.05)}
          className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6"
        >
          {[9, 10, 11].map((i) => (
            <motion.div
              key={i}
              {...fadeScaleProps(0.08 * i)}
              className="rounded-3xl overflow-hidden shadow-xl bg-white text-black hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={`/${i}.jpg`}
                alt="product"
                width={600}
                height={600}
                className="h-64 w-full object-cover"
              />
              <CardContent className="p-6 text-xs">
                <p className="uppercase tracking-[0.2em] text-neutral-400 mb-1">
                  PureBrush
                </p>
                <h3 className="font-semibold mb-1 text-sm">
                  PureBrush Product {i}
                </h3>
                <p className="text-neutral-600 text-[0.8rem] mb-4">
                  High-quality everyday essentials built around gentle care and
                  minimal aesthetic.
                </p>
                <Button className="rounded-full w-full text-xs">
                  Shop Now
                </Button>
              </CardContent>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ + NEWSLETTER */}
      <section
        id="faq"
        className="max-w-6xl mx-auto px-6 py-18 md:py-20 border-t border-black/5"
      >
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-12">
          {/* FAQ */}
          <motion.div {...fadeUpProps(0)}>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-2">
              QUESTIONS
            </p>
            <h3 className="text-xl font-semibold mb-4">FAQ</h3>

            <div className="space-y-3 text-xs">
              {[
                {
                  q: "How often should I replace my toothbrush?",
                  a: "We recommend replacing your brush every 3 months, or sooner if the bristles appear visibly frayed.",
                },
                {
                  q: "Is PureBrush safe for sensitive gums?",
                  a: "Yes. Our bristles are designed to be extra soft and gentle, reducing irritation while still cleaning effectively.",
                },
                {
                  q: "Is the packaging recyclable?",
                  a: "All primary packaging is curbside recyclable in most regions. Check your local guidelines for specifics.",
                },
              ].map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-xl border border-neutral-200 bg-white/70 px-4 py-3"
                >
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="font-medium text-[0.8rem]">{faq.q}</span>
                    <span className="text-neutral-400 text-[0.8rem] group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-2 text-neutral-600 text-[0.75rem]">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </motion.div>

          {/* Newsletter / Social */}
          <motion.div {...fadeScaleProps(0.1)}>
            <Card className="border-none bg-white shadow-md rounded-2xl">
              <CardContent className="p-6 text-xs">
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-2">
                  STAY IN THE LOOP
                </p>
                <h4 className="text-sm font-semibold mb-2">
                  Get calm care tips in your inbox.
                </h4>
                <p className="text-neutral-600 text-[0.78rem] mb-4">
                  Occasional notes on ritual, design, and oral care — no noise,
                  just slow-living inspiration.
                </p>

                <div className="flex gap-2 mb-4">
                  <Input
                    placeholder="Enter your email"
                    className="rounded-full text-xs"
                  />
                  <Button className="rounded-full px-4 text-xs">
                    Subscribe
                  </Button>
                </div>

                <div className="flex items-center gap-3 text-[0.75rem] text-neutral-500">
                  <span>Or follow along:</span>
                  <div className="flex gap-2">
                    <button className="h-7 w-7 rounded-full border border-neutral-200 flex items-center justify-center">
                      <Instagram className="w-3 h-3" />
                    </button>
                    <button className="h-7 w-7 rounded-full border border-neutral-200 flex items-center justify-center">
                      <Globe2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#f0e8dd] border-t border-black/5 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-full bg-[#789e99] text-white flex items-center justify-center text-[0.65rem] font-semibold">
              PB
            </span>
            <span>© 2025 PureBrush. All rights reserved.</span>
          </div>

          <div className="flex gap-4">
            <a href="#benefits">Benefits</a>
            <a href="#how-it-works">How it works</a>
            <a href="#bestsellers">Shop</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ---------- SPLIT SECTION (IMAGE + TEXT) ---------- */

type SplitProps = {
  img: string;
  title: string;
  desc: string;
  reverse?: boolean;
};

function SplitSection({ img, title, desc, reverse }: SplitProps) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-10 items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <motion.div {...fadeScaleProps(0.05)}>
        <div className="rounded-3xl overflow-hidden shadow-xl bg-white border border-white/60">
          <Image
            src={img}
            width={700}
            height={700}
            alt={title}
            className="object-cover h-72 md:h-80 w-full"
          />
        </div>
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
