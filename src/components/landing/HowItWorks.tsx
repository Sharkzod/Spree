import { STEPS } from "@/lib/landing-data";
import { BagIcon, HomeIcon, TruckIcon } from "@/components/icons";
import RevealSection from "./RevealSection";

const ICONS = [HomeIcon, BagIcon, TruckIcon];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-smoke py-25">
      <div className="mx-auto max-w-[1240px] px-10 max-[600px]:px-5">
        <RevealSection className="mb-[50px] flex flex-wrap items-end justify-between gap-[30px]">
          <div>
            <div className="mb-[18px] flex items-center gap-3 text-xs font-bold uppercase tracking-[.22em] text-amber-deep before:h-[1.5px] before:w-[30px] before:bg-amber-deep before:content-['']">
              Simple by design
            </div>
            <h2 className="max-w-[640px] font-display text-[clamp(30px,3.6vw,46px)] font-semibold leading-[1.05]">
              How ordering will work.
            </h2>
          </div>
          <p className="max-w-[520px] text-[17px] leading-relaxed text-slate">
            No complicated steps. Browse the drop, reserve your size, and we bring it to you.
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={s.title}
                className="rounded-card border border-transparent bg-paper p-[34px] px-[30px] transition-all duration-400 ease-brand hover:-translate-y-1.5 hover:border-ink hover:shadow-soft"
              >
                <div className="mb-[22px] font-display text-sm font-bold text-stone">
                  STEP {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mb-[22px] grid h-14 w-14 place-items-center rounded-2xl bg-ink text-amber">
                  <Icon className="h-[26px] w-[26px]" />
                </div>
                <h3 className="mb-2.5 text-xl font-semibold">{s.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-slate">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
