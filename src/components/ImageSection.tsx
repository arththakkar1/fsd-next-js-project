"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MotionDiv, fadeFromLeft, fadeFromRight } from "./MotionDiv";

export default function ImageSection({ img, title, desc, reverse }: any) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-10 items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <MotionDiv
        variants={reverse ? fadeFromRight : fadeFromLeft}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
        className="rounded-3xl overflow-hidden shadow-xl"
      >
        <Image
          src={img}
          width={700}
          height={700}
          alt={title}
          className="object-cover"
        />
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <h3 className="text-3xl font-semibold mb-3">{title}</h3>
        <p className="text-neutral-600 text-base mb-5 max-w-sm">{desc}</p>
        <Button className="rounded-full px-6 py-2">Shop Now</Button>
      </MotionDiv>
    </div>
  );
}
