"use client";

import { useEffect, useState } from "react";
import RevealSection from "./RevealSection";

function getRemaining(target: number) {
  const diff = Math.max(0, target - Date.now());
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  };
}

const UNITS: Array<{ key: "d" | "h" | "m" | "s"; label: string }> = [
  { key: "d", label: "Days" },
  { key: "h", label: "Hours" },
  { key: "m", label: "Minutes" },
  { key: "s", label: "Seconds" },
];

export default function Countdown() {
  const [target] = useState(() => Date.now() + 14 * 24 * 60 * 60 * 1000 - 3 * 60 * 60 * 1000);
  const [remaining, setRemaining] = useState(() => getRemaining(target));

  useEffect(() => {
    const id = setInterval(() => setRemaining(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <section className="py-25 text-center">
      <div className="mx-auto max-w-[1240px] px-10 max-[600px]:px-5">
        <RevealSection>
          <div className="mb-[18px] flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[.22em] text-amber-deep before:h-[1.5px] before:w-[30px] before:bg-amber-deep before:content-['']">
            The clock is ticking
          </div>
          <h2 className="mx-auto text-center font-display text-[clamp(30px,3.6vw,46px)] font-semibold leading-[1.05]">
            First drop goes live in
          </h2>
          <div className="mt-11 flex flex-wrap justify-center gap-5">
            {UNITS.map((u) => (
              <div
                key={u.key}
                className="group min-w-[calc(50%-10px)] rounded-2xl bg-smoke px-4 py-[22px] transition-colors duration-300 ease-brand hover:bg-ink hover:text-paper sm:min-w-[130px] sm:px-[30px] sm:py-7"
              >
                <div className="font-display text-[40px] font-bold leading-none tabular-nums sm:text-[52px]">
                  {String(remaining[u.key]).padStart(2, "0")}
                </div>
                <div className="mt-3 text-[13px] font-semibold uppercase tracking-[.12em] text-slate group-hover:text-white/60">
                  {u.label}
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
