import Image from "next/image";
import { DROPS } from "@/lib/landing-data";
import { LockIcon } from "@/components/icons";
import RevealSection from "./RevealSection";

export default function Drops() {
  return (
    <section id="drops" className="py-25">
      <div className="mx-auto max-w-[1240px] px-10 max-[600px]:px-5">
        <RevealSection className="mb-[50px] flex flex-wrap items-end justify-between gap-[30px]">
          <div>
            <div className="mb-[18px] flex items-center gap-3 text-xs font-bold uppercase tracking-[.22em] text-amber-deep before:h-[1.5px] before:w-[30px] before:bg-amber-deep before:content-['']">
              The first collection
            </div>
            <h2 className="max-w-[640px] font-display text-[clamp(30px,3.6vw,46px)] font-semibold leading-[1.05]">
              A preview of what&apos;s dropping.
            </h2>
          </div>
          <p className="max-w-[520px] text-[17px] leading-relaxed text-slate">
            These pieces unlock at launch. Waitlist members get first pick — and the launch
            discount — before anyone else.
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 gap-[26px] sm:grid-cols-2 lg:grid-cols-3">
          {DROPS.map((d) => (
            <div key={d.num} className="group relative cursor-pointer overflow-hidden rounded-card bg-smoke">
              <span className="absolute left-[18px] top-[18px] z-10 rounded-[9px] bg-amber px-3 py-1.5 font-display text-[13px] font-bold text-ink">
                {d.num}
              </span>
              <div className="absolute right-4 top-4 z-10 grid h-[38px] w-[38px] place-items-center rounded-full bg-white/16 backdrop-blur-md">
                <LockIcon className="h-[17px] w-[17px] text-paper" />
              </div>
              <div className="aspect-[1/1.2] overflow-hidden">
                <Image
                  src={d.img}
                  alt={d.name}
                  width={600}
                  height={720}
                  className="h-full w-full object-cover transition-transform duration-700 ease-brand group-hover:scale-[1.07]"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-ink/88 to-transparent to-55% p-6 text-paper">
                <h3 className="mb-1 text-[21px] font-semibold">{d.name}</h3>
                <div className="font-display text-sm font-semibold text-white/70">
                  {d.old && <s className="mr-2 text-white/40">{d.old}</s>}
                  {d.price} <span className="text-amber">· unlocks at launch</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
