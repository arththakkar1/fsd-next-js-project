"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import { LenisContext } from "../components/context/LenisContext";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const instance = new Lenis({
      smoothWheel: true,
      lerp: 0.08,
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(2, -10 * t),
      syncTouch: true,
      syncTouchLerp: 0.08,
      touchInertiaExponent: 35,
      touchMultiplier: 1.4,
      wheelMultiplier: 1.1,
    });

    queueMicrotask(() => {
      setLenis(instance);
    });

    const raf = (time: number) => {
      instance.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => instance.destroy();
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}
