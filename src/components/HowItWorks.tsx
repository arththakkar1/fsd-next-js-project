"use client";

import { MotionDiv, fadeUpProps } from "./Motion";
import VelocityImageCard from "./VelocityImageCard";

export default function HowItWorks() {
  const steps = [
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
  ];

  return (
    <section
      id="how-it-works"
      className="max-w-6xl mx-auto px-6 py-16 md:py-20"
    >
      <MotionDiv {...fadeUpProps(0)} className="mb-10">
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
      </MotionDiv>

      <div className="grid md:grid-cols-[1.3fr,1fr] gap-12 items-start">
        <div className="space-y-6">
          {steps.map((item, idx) => (
            <MotionDiv
              key={item.step}
              {...fadeUpProps(idx * 0.08)}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="h-8 w-8 rounded-full border border-neutral-300 flex items-center justify-center text-[0.7rem] font-medium">
                  {item.step}
                </div>
                {idx < steps.length - 1 && (
                  <div className="w-px flex-1 bg-neutral-200 mt-1" />
                )}
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                <p className="text-xs text-neutral-600">{item.text}</p>
              </div>
            </MotionDiv>
          ))}
        </div>

        <VelocityImageCard img="/Pair.jpg" />
      </div>
    </section>
  );
}
