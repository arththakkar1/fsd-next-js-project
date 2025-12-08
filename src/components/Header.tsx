"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ScrollToLink from "./ScrollToLink";
import Image from "next/image";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="sticky top-0 z-30 border-b border-black/5 bg-[#faf7f2]/80 backdrop-blur-xl"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="PureBrush Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <h1 className="text-lg font-semibold tracking-tight">PureBrush</h1>
        </div>

        <nav className="hidden md:flex gap-6 text-sm text-neutral-600">
          <ScrollToLink to="#benefits">Benefits</ScrollToLink>
          <ScrollToLink to="#how-it-works">How it works</ScrollToLink>
          <ScrollToLink to="#bestsellers">Best-sellers</ScrollToLink>
          <ScrollToLink to="#faq">FAQ</ScrollToLink>
        </nav>

        <Button variant="outline" className="rounded-full px-5">
          Shop Now
        </Button>
      </div>
    </motion.header>
  );
}
