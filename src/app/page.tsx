"use client";

import { motion, useScroll } from "framer-motion";

import MagneticCursor from "@/components/MagneticCursor";
import Header from "@/components/Header";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SplitSection from "@/components/SplitSection";
import Testimonials from "@/components/Testimonials";
import BestSellers from "@/components/BestSellers";
import FaqNewsletter from "@/components/FaqNewsletter";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import ComparisonSection from "@/components/ComparisonSection";
import IngredientsSection from "@/components/IngredientsSection";
import VideoShowcase from "@/components/VideoShowcase";

export default function Page() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="bg-[#faf7f2] text-[#1d1d1d]">
      <MagneticCursor />

      <motion.div
        className="fixed left-0 top-0 h-[3px] w-full origin-left bg-[#789e99] z-80"
        style={{ scaleX: scrollYProgress }}
      />

      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <StatsSection />
      <ComparisonSection />
      <IngredientsSection />
      <VideoShowcase />
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        <SplitSection
          img="/Benefits-1.jpg"
          title="Elevated sink, calmer mind."
          desc="A visually quiet setup that invites you to slow down for two minutes — not rush through another task."
        />
        <SplitSection
          img="/Benefits-2.jpg"
          title="Fresh that actually lasts."
          desc="Gentle formulas and soft bristles work together to support long-lasting freshness without harshness."
          reverse
        />
      </section>
      <Testimonials />
      <BestSellers />
      <FaqNewsletter />
      <Footer />
    </main>
  );
}
