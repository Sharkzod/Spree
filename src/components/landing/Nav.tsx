"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CloseIcon, MenuIcon } from "@/components/icons";

const LINKS = [
  { href: "#drops", label: "Collections" },
  { href: "#how", label: "How it works" },
  { href: "#delivery", label: "Delivery" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[80] transition-[background-color,padding,border-color] duration-400 ease-brand ${
        scrolled || open
          ? "border-b border-ash bg-white/82 py-3.5 backdrop-blur-lg"
          : "border-b border-transparent py-4.5"
      }`}
    >
      <div className="flex items-center justify-between w-[90%]">
        <a href="#" className="" onClick={() => setOpen(false)}>
          <Image src="/logo.jpg" alt="Spree" width={1080} height={704} priority className="h-16 w-auto" />
        </a>
        <div className="ml-auto hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="rounded-xl bg-ink px-5.5 py-2.75 text-sm font-semibold text-paper transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:bg-amber hover:text-ink"
          >
            Join waitlist
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="ml-auto grid h-11 w-11 place-items-center rounded-2xl bg-ink text-paper transition-colors duration-300 ease-brand hover:bg-black md:hidden"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-[grid-template-rows] duration-400 ease-brand md:hidden`}
        style={{ display: "grid", gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div
          className={`overflow-hidden bg-white/95 px-6 backdrop-blur-lg ${
            open ? "border-t border-ash" : ""
          }`}
        >
          <div className="flex flex-col gap-1 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 text-[15px] font-medium text-slate transition-colors hover:bg-smoke hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-ink px-5 py-3.5 text-center text-sm font-semibold text-paper transition-colors hover:bg-amber hover:text-ink"
            >
              Join waitlist
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
