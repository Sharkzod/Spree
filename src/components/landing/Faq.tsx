"use client";

import { useState } from "react";
import { FAQ } from "@/lib/landing-data";
import { PlusIcon } from "@/components/icons";
import RevealSection from "./RevealSection";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-smoke py-25">
      <div className="mx-auto max-w-[1240px] px-10 max-[600px]:px-5">
        <RevealSection className="mb-[50px] text-center">
          <div className="mb-[18px] flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[.22em] text-amber-deep before:h-[1.5px] before:w-[30px] before:bg-amber-deep before:content-['']">
            Good questions
          </div>
          <h2 className="mx-auto font-display text-[clamp(30px,3.6vw,46px)] font-semibold leading-[1.05]">
            Everything you might ask.
          </h2>
        </RevealSection>

        <div className="mx-auto max-w-[760px]">
          {FAQ.map((f, i) => {
            const open = openIndex === i;
            return (
              <div
                key={f.q}
                className={`mb-3.5 overflow-hidden rounded-2xl border-[1.5px] bg-paper transition-colors duration-300 ease-brand ${
                  open ? "border-ink" : "border-transparent"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-5 px-7 py-6 text-left font-display text-[17px] font-semibold"
                >
                  {f.q}
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-[10px] transition-colors duration-300 ease-brand ${
                      open ? "bg-ink text-paper" : "bg-smoke"
                    }`}
                  >
                    <PlusIcon
                      className={`h-[18px] w-[18px] transition-transform duration-300 ease-brand ${
                        open ? "rotate-45" : ""
                      }`}
                    />
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-400 ease-brand"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-[26px] leading-relaxed text-slate">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
