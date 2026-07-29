"use client";

import { useEffect, useRef, useState } from "react";
import { GOAL, useWaitlist } from "@/context/WaitlistContext";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

const PERKS = [
  { b: "15% off", rest: "your first order" },
  { b: "Early access", rest: "to every new collection" },
  { b: "Limited-edition", rest: "launch-only pieces" },
  { b: "Free delivery", rest: "on your first purchase" },
];

export default function Waitlist() {
  const { members, addMember } = useWaitlist();
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [errorField, setErrorField] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const pct = Math.min(100, (members / GOAL) * 100);
  const spotsLeft = GOAL - members;

  function handleSubmit() {
    if (!name.trim()) {
      setErrorField("name");
      return;
    }
    if (!email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setErrorField("email");
      return;
    }
    if (!city) {
      setErrorField("city");
      return;
    }
    setErrorField(null);
    addMember();
    setSubmitted(true);
  }

  const fieldError = (field: string) =>
    errorField === field ? "border-red-500!" : "";

  return (
    <section id="waitlist" className="pt-10">
      <div
        ref={sectionRef}
        className={`reveal ${
          visible ? "in" : ""
        } mx-4 max-w-[1240px] overflow-hidden rounded-[36px] bg-ink text-paper sm:mx-10`}
        style={{ marginInline: "auto" }}
      >
        <div className="grid min-[961px]:grid-cols-2">
          <div className="px-7 py-16 sm:px-14">
            <div className="mb-[18px] flex items-center gap-3 text-xs font-bold uppercase tracking-[.22em] text-amber before:h-[1.5px] before:w-[30px] before:bg-amber before:content-['']">
              Join the waitlist
            </div>
            <h2 className="mb-5 font-display text-[clamp(30px,3.4vw,44px)] font-semibold leading-[1.05]">
              Reserve your spot and <em className="not-italic text-amber">skip the line.</em>
            </h2>
            <p className="max-w-[420px] text-base leading-relaxed text-white/60">
              Members get more than a heads-up. Sign up now and lock in these launch perks:
            </p>
            <div className="mt-8 flex flex-col gap-4">
              {PERKS.map((p) => (
                <div key={p.b} className="flex items-center gap-3.5">
                  <span className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-[9px] bg-amber/15">
                    <CheckIcon className="h-4 w-4 text-amber" />
                  </span>
                  <span className="text-[15.5px] text-white/90">
                    <b className="font-semibold text-paper">{p.b}</b> {p.rest}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-10 flex items-baseline gap-3 border-t border-white/14 pt-[30px]">
              <div className="font-display text-[42px] font-bold text-amber">
                {members.toLocaleString()}
              </div>
              <div className="text-[13px] leading-tight text-white/60">
                of {GOAL.toLocaleString()} early-access
                <br />
                spots claimed
              </div>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/12">
              <span
                className="block h-full rounded-full bg-amber transition-[width] duration-[1400ms] ease-brand"
                style={{ width: visible ? `${pct}%` : "0%" }}
              />
            </div>
            <div className="mt-2.5 text-[12.5px] text-white/55">
              {spotsLeft.toLocaleString()} spots left before early access closes
            </div>
          </div>

          <div className="flex flex-col justify-center border-t border-white/8 bg-white/4 px-7 py-14 min-[961px]:border-l min-[961px]:border-t-0 sm:px-14">
            {!submitted ? (
              <div>
                <h3 className="mb-1.5 text-[22px]">Claim your early access</h3>
                <div className="mb-7 text-sm text-white/55">Takes 20 seconds. No spam, ever.</div>
                <div className="mb-4">
                  <label className="mb-2 block text-[12.5px] font-semibold uppercase tracking-[.05em] text-white/60">
                    Full name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Albert Stevano"
                    className={`h-[52px] w-full rounded-2xl border-[1.5px] border-white/14 bg-white/6 px-4 text-[15px] text-paper transition-colors duration-250 ease-brand placeholder:text-white/35 focus:border-amber focus:bg-white/9 focus:outline-none ${fieldError(
                      "name"
                    )}`}
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-2 block text-[12.5px] font-semibold uppercase tracking-[.05em] text-white/60">
                    Email address
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="you@email.com"
                    className={`h-[52px] w-full rounded-2xl border-[1.5px] border-white/14 bg-white/6 px-4 text-[15px] text-paper transition-colors duration-250 ease-brand placeholder:text-white/35 focus:border-amber focus:bg-white/9 focus:outline-none ${fieldError(
                      "email"
                    )}`}
                  />
                </div>
                <div className="mb-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[12.5px] font-semibold uppercase tracking-[.05em] text-white/60">
                      Phone <span className="font-normal normal-case tracking-normal text-white/40">(optional)</span>
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+234 ..."
                      className="h-[52px] w-full rounded-2xl border-[1.5px] border-white/14 bg-white/6 px-4 text-[15px] text-paper transition-colors duration-250 ease-brand placeholder:text-white/35 focus:border-amber focus:bg-white/9 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[12.5px] font-semibold uppercase tracking-[.05em] text-white/60">
                      City
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className={`h-[52px] w-full appearance-none rounded-2xl border-[1.5px] border-white/14 bg-white/6 bg-[url('data:image/svg+xml,%3Csvg_xmlns=%27http://www.w3.org/2000/svg%27_width=%2716%27_height=%2716%27_fill=%27none%27_stroke=%27%23a8a29e%27_stroke-width=%272%27_viewBox=%270_0_24_24%27%3E%3Cpath_d=%27m6_9_6_6_6-6%27/%3E%3C/svg%3E')] bg-[right_16px_center] bg-no-repeat px-4 text-[15px] text-paper transition-colors duration-250 ease-brand focus:border-amber focus:bg-white/9 focus:outline-none ${fieldError(
                        "city"
                      )}`}
                    >
                      <option value="" className="text-ink">
                        Select
                      </option>
                      {["Lagos", "Abuja", "Port Harcourt", "Ibadan", "Kano", "Other"].map((c) => (
                        <option key={c} value={c} className="text-ink">
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  className="group mt-2.5 flex h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-paper text-[15.5px] font-semibold text-ink transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:bg-amber"
                >
                  Reserve my spot
                  <ArrowRightIcon className="h-[18px] w-[18px] transition-transform duration-300 ease-brand group-hover:translate-x-1" />
                </button>
                <div className="mt-4 text-center text-xs leading-relaxed text-white/40">
                  By joining you agree to receive launch updates. Unsubscribe anytime.
                </div>
              </div>
            ) : (
              <div className="animate-pop-in text-center">
                <div className="mx-auto mb-6 grid h-[90px] w-[90px] place-items-center rounded-full bg-amber/15">
                  <CheckIcon className="h-11 w-11 text-amber" />
                </div>
                <h3 className="mb-3 text-2xl">You&apos;re on the list! 🎉</h3>
                <p className="text-[15px] leading-relaxed text-white/60">
                  {`Thanks ${name.split(" ")[0]} — we'll email you the moment the first collection drops in ${city}, with your 15% member discount locked in.`}
                </p>
                <div className="mt-[22px] inline-block rounded-2xl border border-white/15 bg-white/8 px-[22px] py-3 font-display font-semibold">
                  You&apos;re member <b className="text-amber">#{(members + 1).toLocaleString()}</b>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
