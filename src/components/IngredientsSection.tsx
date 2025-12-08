"use client";

import Image from "next/image";
import { MotionDiv, fadeScaleProps } from "./Motion";

export default function IngredientsSection() {
  const items = [
    {
      img: "/Mint.jpg",
      name: "Mint Extract",
      desc: "Naturally refreshing & soothing.",
    },
    {
      img: "/Aloe-Vera.jpg",
      name: "Aloe Vera",
      desc: "Gentle on gums, reduces irritation.",
    },
    {
      img: "/Coconut.jpg",
      name: "Coconut Fiber",
      desc: "Plant-based & biodegradable.",
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-black/5">
      <MotionDiv {...fadeScaleProps(0)} className="text-center mb-10">
        <h3 className="text-xl font-semibold">Natural Ingredients</h3>
        <p className="text-sm text-neutral-600">
          Gentle on your teeth — gentle on the planet.
        </p>
      </MotionDiv>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {items.map((item, i) => (
          <MotionDiv
            key={i}
            {...fadeScaleProps(i * 0.1)}
            className="rounded-3xl overflow-hidden shadow-lg bg-white"
          >
            <Image
              src={item.img}
              alt={item.name}
              width={400}
              height={400}
              className="object-cover h-48 w-full"
            />
            <div className="p-5 text-center">
              <p className="font-semibold text-sm mb-1">{item.name}</p>
              <p className="text-xs text-neutral-600">{item.desc}</p>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}
