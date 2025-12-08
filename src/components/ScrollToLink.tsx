"use client";

import { cn } from "@/lib/utils";
import { useLenis } from "./context/LenisContext";

export default function ScrollToLink({
  to,
  children,
  className,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) {
  const lenis = useLenis();

  const handleClick = () => {
    if (!lenis) return;

    const el = document.querySelector<HTMLElement>(to);
    if (!el) return;

    lenis.scrollTo(el, {
      offset: -70,
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(2, -10 * t),
    });
  };

  return (
    <div onClick={handleClick} className={cn("cursor-pointer", className)}>
      {children}
    </div>
  );
}
