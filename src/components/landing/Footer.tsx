import Image from "next/image";
import { InstagramIcon, TiktokIcon, XIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-ink py-[70px] pb-10 text-paper">
      <div className="mx-auto max-w-[1240px] px-10 max-[600px]:px-5">
        <div className="grid grid-cols-1 gap-10 border-b border-white/12 pb-[50px] sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Image src="/logo.png" alt="Spree" width={1280} height={704} className="mb-5 h-14 w-auto rounded-[13px]" />
            <p className="max-w-[320px] text-[14.5px] leading-relaxed text-white/55">
              Spree — premium streetwear for people who dress with intent. Exclusive drops,
              delivered fast. Launching this season.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-xl bg-white/8 transition-all duration-300 ease-brand hover:-translate-y-1 hover:bg-amber hover:text-ink"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="grid h-11 w-11 place-items-center rounded-xl bg-white/8 transition-all duration-300 ease-brand hover:-translate-y-1 hover:bg-amber hover:text-ink"
              >
                <TiktokIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="X"
                className="grid h-11 w-11 place-items-center rounded-xl bg-white/8 transition-all duration-300 ease-brand hover:-translate-y-1 hover:bg-amber hover:text-ink"
              >
                <XIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-5 text-sm text-white/90">Explore</h4>
            <a href="#drops" className="mb-3.5 block text-sm text-white/55 transition-colors hover:text-amber">
              Collections
            </a>
            <a href="#how" className="mb-3.5 block text-sm text-white/55 transition-colors hover:text-amber">
              How it works
            </a>
            <a href="#delivery" className="mb-3.5 block text-sm text-white/55 transition-colors hover:text-amber">
              Delivery areas
            </a>
            <a href="#faq" className="mb-3.5 block text-sm text-white/55 transition-colors hover:text-amber">
              FAQ
            </a>
          </div>
          <div>
            <h4 className="mb-5 text-sm text-white/90">Company</h4>
            <a href="#" className="mb-3.5 block text-sm text-white/55 transition-colors hover:text-amber">
              About us
            </a>
            <a href="#" className="mb-3.5 block text-sm text-white/55 transition-colors hover:text-amber">
              Careers
            </a>
            <a href="#" className="mb-3.5 block text-sm text-white/55 transition-colors hover:text-amber">
              Contact
            </a>
            <a href="#waitlist" className="mb-3.5 block text-sm text-white/55 transition-colors hover:text-amber">
              Join waitlist
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3.5 pt-[30px] text-[13px] text-white/40">
          <div>© 2026 Spree. All rights reserved.</div>
          <div>Made for the streets, one drop at a time.</div>
        </div>
      </div>
    </footer>
  );
}
