"use client";

import { MotionDiv, fadeUpProps } from "./Motion";
import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  const rows = [
    { label: "Soft tapered bristles", pb: true, other: false },
    { label: "Eco-friendly materials", pb: true, other: false },
    { label: "Minimal & modern design", pb: true, other: false },
    { label: "Dentist-approved", pb: true, other: true },
  ];

  return (
    <section className="bg-[#faf7f2] py-20">
      {/* Heading */}
      <MotionDiv {...fadeUpProps(0)} className="text-center mb-12">
        <h3 className="text-xl font-semibold">Why PureBrush?</h3>
        <p className="text-sm text-neutral-600">
          A simple choice that makes your daily care feel better.
        </p>
      </MotionDiv>

      {/* Comparison Box */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-md p-6 md:p-10">
        {/* Header Row */}
        <div className="grid grid-cols-[1fr,120px,120px] text-sm font-semibold mb-6">
          <p className="opacity-0">Feature</p>
          <p className="text-center">PureBrush</p>
          <p className="text-center">Others</p>
        </div>

        {/* Feature Rows */}
        <div className="space-y-5">
          {rows.map((r, i) => (
            <MotionDiv
              key={i}
              {...fadeUpProps(i * 0.05)}
              className="grid grid-cols-[1fr,120px,120px] items-center text-sm"
            >
              <p className="text-neutral-700">{r.label}</p>

              <div className="flex justify-center">
                {r.pb ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <X className="w-5 h-5 text-red-500" />
                )}
              </div>

              <div className="flex justify-center">
                {r.other ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <X className="w-5 h-5 text-red-500" />
                )}
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
