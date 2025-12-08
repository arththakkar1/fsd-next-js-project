"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider() {
  useEffect(() => {
    // IMPORTANT: Single instance only
    const lenis = new Lenis({
      // Smooth scroll base
      smoothWheel: true,

      // Modern smoothing
      lerp: 0.08, // smoothing factor
      duration: 1.2,

      // Modern exponential easing — Apple-feel
      easing: (t: number) => 1 - Math.pow(2, -10 * t),

      // Touch behavior tuning
      syncTouch: true,
      syncTouchLerp: 0.08,
      touchInertiaExponent: 35,

      // Sensitivity multiplier
      touchMultiplier: 1.4,
      wheelMultiplier: 1.1,
    });

    // RAF loop (Lenis handles timing)
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
