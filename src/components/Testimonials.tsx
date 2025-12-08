"use client";

import { MotionDiv, fadeUpProps } from "./Motion";
import StaggerReveal from "./StaggerReveal";

export default function Testimonials() {
  const items = [
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
  ];

  return (
    <section className="bg-[#789e99] text-white py-20">
      <MotionDiv {...fadeUpProps(0)} className="max-w-5xl mx-auto px-6">
        <h2 className="text-center text-2xl font-semibold mb-2">
          “It feels like a small spa moment twice a day.”
        </h2>
        <p className="text-center text-xs md:text-sm text-white/80 mb-10">
          PureBrush users consistently describe their new routine as calmer,
          softer, and more intentional.
        </p>
      </MotionDiv>

      <StaggerReveal className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {items.map((t, i) => (
          <div
            key={i}
            className="bg-white/15 rounded-2xl backdrop-blur-xl border border-white/25 p-6 shadow-lg text-xs"
          >
            <p className="text-[0.75rem] mb-2">★★★★★</p>
            <p className="text-[0.8rem] mb-4">{t.quote}</p>
            <p className="text-[0.7rem] text-white/80">{t.name}</p>
          </div>
        ))}
      </StaggerReveal>
    </section>
  );
}
