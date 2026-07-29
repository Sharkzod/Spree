"use client";

import Image from "next/image";
import { useWaitlist } from "@/context/WaitlistContext";
import { ArrowRightIcon, CollectionsIcon, TruckIcon } from "@/components/icons";

const AVATARS = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
];

export default function Hero() {
  const { members } = useWaitlist();

  return (
    <header className="relative overflow-hidden pt-[150px] pb-[90px] max-[600px]:pt-[120px] max-[600px]:pb-[60px]">
      <div className="mx-auto max-w-[1240px] px-10 max-[600px]:px-5">
        <div className="grid items-center gap-[60px] max-[960px]:grid-cols-1 min-[961px]:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-[9px] rounded-full border border-ash bg-smoke px-4 py-2 text-[13px] font-semibold text-slate">
              <span className="relative h-2 w-2 rounded-full bg-amber">
                <span className="absolute -inset-1 animate-ping-slow rounded-full bg-amber opacity-40" />
              </span>
              Launching this season · Early access open
            </div>
            <h1 className="font-display text-[clamp(44px,6vw,78px)] leading-[.98] font-semibold tracking-[-.03em]">
              Premium streetwear,{" "}
              <em className="relative not-italic text-ink after:absolute after:inset-x-[-2px] after:bottom-[.08em] after:-z-10 after:h-[.32em] after:rounded-[3px] after:bg-amber after:content-['']">
                delivered
              </em>{" "}
              to your door.
            </h1>
            <p className="my-6 max-w-[460px] text-lg leading-relaxed text-slate">
              Exclusive drops. Fast local delivery. Limited collections you won&apos;t find
              anywhere else. Be first in line before we go live.
            </p>
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#waitlist"
                className="group inline-flex items-center gap-[11px] rounded-2xl bg-ink px-8 py-[17px] text-[15.5px] font-semibold text-paper transition-all duration-300 ease-brand hover:-translate-y-1 hover:bg-amber hover:text-ink hover:shadow-[0_18px_34px_-14px_rgba(255,193,7,.6)]"
              >
                Join the waitlist
                <ArrowRightIcon className="h-[18px] w-[18px] transition-transform duration-300 ease-brand group-hover:translate-x-1" />
              </a>
              <a
                href="#drops"
                className="rounded-2xl border border-ash px-7 py-[17px] text-[15.5px] font-semibold transition-all duration-300 ease-brand hover:-translate-y-1 hover:border-ink"
              >
                See the drops
              </a>
            </div>
            <div className="mt-[34px] flex items-center gap-3.5">
              <div className="flex">
                {AVATARS.map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={40}
                    height={40}
                    className={`h-10 w-10 rounded-full border-[2.5px] border-paper object-cover ${
                      i > 0 ? "-ml-3" : ""
                    }`}
                  />
                ))}
              </div>
              <div className="text-[13.5px] leading-tight text-slate">
                <b className="font-display text-ink">{members.toLocaleString()}</b> people already
                reserved their spot
              </div>
            </div>
          </div>

          <div className="relative h-[420px] min-[961px]:mt-0 min-[961px]:h-[520px] max-[960px]:mt-5">
            <div className="absolute right-0 top-0 z-[2] h-[78%] w-[66%] animate-float-a overflow-hidden rounded-[26px] shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=700&q=80"
                alt="Streetwear look"
                fill
                className="object-cover"
                sizes="(max-width: 960px) 60vw, 30vw"
              />
            </div>
            <div className="absolute bottom-0 left-0 z-[3] h-[60%] w-[52%] animate-float-b overflow-hidden rounded-[26px] shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80"
                alt="Graphic tee"
                fill
                className="object-cover"
                sizes="(max-width: 960px) 45vw, 24vw"
              />
            </div>
            <div className="animate-float-b-slow absolute left-[-8px] top-6 z-[4] flex items-center gap-3 rounded-2xl bg-paper px-[18px] py-3.5 shadow-soft">
              <div className="grid h-[38px] w-[38px] place-items-center rounded-[11px] bg-ink text-amber">
                <CollectionsIcon className="h-[19px] w-[19px]" />
              </div>
              <div>
                <div className="font-display text-[15px] font-bold">Limited drops</div>
                <div className="text-[11px] text-slate">New every week</div>
              </div>
            </div>
            <div className="animate-float-a-slow absolute bottom-[34px] right-[-10px] z-[4] flex items-center gap-3 rounded-2xl bg-paper px-[18px] py-3.5 shadow-soft">
              <div className="grid h-[38px] w-[38px] place-items-center rounded-[11px] bg-ink text-amber">
                <TruckIcon className="h-[19px] w-[19px]" />
              </div>
              <div>
                <div className="font-display text-[15px] font-bold">Same-week delivery</div>
                <div className="text-[11px] text-slate">Lagos &amp; Abuja</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
