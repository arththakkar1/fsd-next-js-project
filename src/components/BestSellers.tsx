"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { MotionDiv, fadeUpProps } from "./Motion";
import StaggerReveal from "./StaggerReveal";
import TiltCard from "./TiltCard";
import ScrollToLink from "./ScrollToLink";

export default function BestSellers() {
  const products = ["Toothbrushes", "ToothPasteCombo", "SoapSet"];

  return (
    <section id="bestsellers" className="bg-[#789e99] text-white pt-4 pb-20">
      <MotionDiv {...fadeUpProps(0)} className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-2">
              BEST-SELLERS
            </p>
            <h2 className="text-xl font-semibold">Explore our core set.</h2>
            <p className="text-sm text-white/80 max-w-md mt-1">
              Start with essentials trusted by thousands of calm-sink
              enthusiasts.
            </p>
          </div>
          <ScrollToLink to="#bestsellers">
            <Button
              variant="outline"
              className="rounded-full text-black border-white/40 hover:opacity-90 text-xs"
              data-magnetic
            >
              View all products
            </Button>
          </ScrollToLink>
        </div>
      </MotionDiv>

      <StaggerReveal className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {products.map((i) => (
          <TiltCard
            key={i}
            className="rounded-3xl overflow-hidden shadow-xl bg-white text-black"
          >
            <Image
              src={`/${i}.jpg`}
              alt="product"
              width={600}
              height={600}
              className="h-64 w-full object-cover"
            />
            <CardContent className="p-6 text-xs">
              <p className="uppercase tracking-[0.2em] text-neutral-400 mb-1">
                PureBrush
              </p>
              <h3 className="font-semibold mb-1 text-sm">
                PureBrush Product {i}
              </h3>
              <p className="text-neutral-600 text-[0.8rem] mb-4">
                High-quality everyday essentials built around gentle care and
                minimal aesthetic.
              </p>
              <Button className="rounded-full w-full text-xs" data-magnetic>
                Shop Now
              </Button>
            </CardContent>
          </TiltCard>
        ))}
      </StaggerReveal>
    </section>
  );
}
