"use client";

import { Heart, Leaf, Sparkles, ClipboardPlus } from "lucide-react";
import StaggerReveal from "./StaggerReveal";
import { MotionDiv, fadeUpProps } from "./Motion";

export default function Features() {
  const items = [
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
  ];

  return (
    <section
      id="benefits"
      className="bg-white border-b border-black/5 py-16 md:py-20"
    >
      <MotionDiv
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
      </MotionDiv>

      <StaggerReveal className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 px-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="text-center flex flex-col items-center"
          >
            <div className="mb-4 h-12 w-12 rounded-full bg-[#789e99]/10 flex items-center justify-center">
              {item.icon}
            </div>
            <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
            <p className="text-neutral-500 text-xs leading-relaxed max-w-[230px]">
              {item.text}
            </p>
          </div>
        ))}
      </StaggerReveal>
    </section>
  );
}
