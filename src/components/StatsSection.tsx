"use client";

import { MotionDiv, fadeUpProps } from "./Motion";

export default function StatsSection() {
  const stats = [
    { value: "92%", label: "Cleaner feeling teeth" },
    { value: "3M+", label: "Brush strokes tested" },
    { value: "4.9★", label: "Customer rating" },
    { value: "100%", label: "Recyclable packing" },
  ];

  return (
    <section className="bg-white py-20 border-y border-black/5">
      <MotionDiv {...fadeUpProps(0)} className="text-center mb-10">
        <h2 className="text-xl font-semibold">Trusted By Many</h2>
        <p className="text-sm text-neutral-600">
          Designed with intention — used with confidence.
        </p>
      </MotionDiv>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 px-6 text-center">
        {stats.map((s) => (
          <MotionDiv key={s.label} {...fadeUpProps(0.1)}>
            <p className="text-3xl font-semibold font-metric">{s.value}</p>
            <p className="text-xs text-neutral-600 mt-1">{s.label}</p>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}
