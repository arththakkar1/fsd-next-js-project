"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Globe2 } from "lucide-react";
import { MotionDiv, fadeUpProps, fadeScaleProps } from "./Motion";

export default function FaqNewsletter() {
  const faqs = [
    {
      q: "How often should I replace my toothbrush?",
      a: "We recommend replacing your brush every 3 months, or sooner if the bristles appear visibly frayed.",
    },
    {
      q: "Is PureBrush safe for sensitive gums?",
      a: "Yes. Our bristles are designed to be extra soft and gentle, reducing irritation while still cleaning effectively.",
    },
    {
      q: "Is the packaging recyclable?",
      a: "All primary packaging is curbside recyclable in most regions. Check your local guidelines for specifics.",
    },
  ];

  return (
    <section
      id="faq"
      className="max-w-6xl mx-auto px-6 py-16 md:py-20 border-t border-black/5"
    >
      <div className="grid md:grid-cols-[1.2fr,1fr] gap-12">
        <MotionDiv {...fadeUpProps(0)}>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-2">
            QUESTIONS
          </p>
          <h3 className="text-xl font-semibold mb-4">FAQ</h3>

          <div className="space-y-3 text-xs">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-neutral-200 bg-white/70 px-4 py-3"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-medium text-[0.8rem]">{faq.q}</span>
                  <span className="text-neutral-400 text-[0.8rem] group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-neutral-600 text-[0.75rem]">{faq.a}</p>
              </details>
            ))}
          </div>
        </MotionDiv>

        <MotionDiv {...fadeScaleProps(0.1)}>
          <Card className="border-none bg-white shadow-md rounded-2xl">
            <CardContent className="p-6 text-xs">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-2">
                STAY IN THE LOOP
              </p>
              <h4 className="text-sm font-semibold mb-2">
                Get calm care tips in your inbox.
              </h4>
              <p className="text-neutral-600 text-[0.78rem] mb-4">
                Occasional notes on ritual, design, and oral care — no noise,
                just slow-living inspiration.
              </p>

              <div className="flex gap-2 mb-4">
                <Input
                  placeholder="Enter your email"
                  className="rounded-full text-xs"
                />
                <Button className="rounded-full px-4 text-xs" data-magnetic>
                  Subscribe
                </Button>
              </div>

              <div className="flex items-center gap-3 text-[0.75rem] text-neutral-500">
                <span>Or follow along:</span>
                <div className="flex gap-2">
                  <button className="h-7 w-7 rounded-full border border-neutral-200 flex items-center justify-center">
                    <Instagram className="w-3 h-3" />
                  </button>
                  <button className="h-7 w-7 rounded-full border border-neutral-200 flex items-center justify-center">
                    <Globe2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionDiv>
      </div>
    </section>
  );
}
