import Image from "next/image";
import { CITIES } from "@/lib/landing-data";
import RevealSection from "./RevealSection";

export default function Delivery() {
  return (
    <section id="delivery" className="py-25">
      <div className="mx-auto max-w-[1240px] px-10 max-[600px]:px-5">
        <div className="grid items-center gap-14 max-[960px]:grid-cols-1 min-[961px]:grid-cols-2">
          <RevealSection>
            <div className="mb-[18px] flex items-center gap-3 text-xs font-bold uppercase tracking-[.22em] text-amber-deep before:h-[1.5px] before:w-[30px] before:bg-amber-deep before:content-['']">
              Where we deliver
            </div>
            <h2 className="max-w-[640px] font-display text-[clamp(30px,3.6vw,46px)] font-semibold leading-[1.05]">
              Starting close to home, expanding fast.
            </h2>
            <p className="mt-[18px] max-w-[520px] text-[17px] leading-relaxed text-slate">
              We&apos;re launching city by city so every order arrives quickly. Tell us where you
              are when you join — it decides where we drop next.
            </p>
            <div className="mt-[34px] flex flex-col gap-3.5">
              {CITIES.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-4 rounded-2xl border border-ash bg-paper px-[22px] py-[18px] transition-all duration-300 ease-brand hover:translate-x-1.5 hover:border-ink"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-smoke font-display font-bold text-ink">
                    {c.abbr}
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-base font-semibold">{c.name}</div>
                    <div className="mt-0.5 text-[13px] text-slate">{c.sub}</div>
                  </div>
                  <div
                    className={`rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-[.04em] ${
                      c.status === "live" ? "bg-green-100 text-green-700" : "bg-smoke text-slate"
                    }`}
                  >
                    {c.label}
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
          <RevealSection className="relative aspect-square overflow-hidden rounded-[26px] shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80"
              alt="Delivery"
              fill
              className="object-cover"
              sizes="(max-width: 960px) 100vw, 50vw"
            />
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
