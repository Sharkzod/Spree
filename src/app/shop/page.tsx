"use client";

import { Suspense, useMemo, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Wrap from "@/components/shop/Wrap";
import Chips from "@/components/shop/Chips";
import ProductGrid from "@/components/shop/ProductGrid";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import type { Category } from "@/lib/types";
import { ArrowRightIcon } from "@/components/icons";

function ShopHomeContent() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") ?? "").toLowerCase().trim();
  const [activeCat, setActiveCat] = useState<Category["id"]>("all");

  const activeCategory = CATEGORIES.find((c) => c.id === activeCat)!;

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => activeCat === "all" || p.type === activeCat);
    if (query) {
      list = list.filter(
        (p) => p.name.toLowerCase().includes(query) || p.cat.toLowerCase().includes(query)
      );
    }
    return list;
  }, [activeCat, query]);

  return (
    <Wrap>
      <div className="relative my-2 mb-10 flex min-h-[340px] overflow-hidden rounded-[28px] bg-ink text-paper max-[1080px]:flex-col">
        <div className="z-2 flex max-w-[560px] flex-col justify-center px-14 py-13 max-[640px]:px-6 max-[640px]:py-7.5">
          <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[.22em] text-amber before:h-[1.5px] before:w-8.5 before:bg-amber before:content-['']">
            New Season 2026
          </div>
          <h1 className="font-display text-[clamp(34px,4.4vw,58px)] font-semibold leading-[1.02]">
            Wear the <em className="not-italic text-amber">bold</em> version of you.
          </h1>
          <p className="my-5 max-w-[400px] text-[15px] leading-relaxed text-white/62">
            Curated modern essentials for people who dress with intent. Fresh drops every week,
            styled for real life.
          </p>
          <a
            href="#grid"
            className="group inline-flex items-center gap-2.5 self-start rounded-2xl bg-paper px-7.5 py-4 text-[14.5px] font-semibold text-ink transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:bg-amber hover:shadow-[0_16px_30px_-12px_rgba(255,193,7,.6)]"
          >
            Explore collection
            <ArrowRightIcon className="h-4.5 w-4.5 transition-transform duration-300 ease-brand group-hover:translate-x-1" />
          </a>
        </div>
        <div className="relative min-w-[280px] flex-1 overflow-hidden max-[1080px]:hidden">
          <Image
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80"
            alt="Fashion"
            fill
            className="object-cover object-[center_25%]"
            sizes="45vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-ink to-transparent to-45%" />
        </div>
        <div className="absolute bottom-7.5 right-8.5 z-3 flex items-center gap-3.5 rounded-2xl border border-white/20 bg-white/12 px-5 py-4 backdrop-blur-md max-[1080px]:static max-[1080px]:mx-6 max-[1080px]:mb-6.5 max-[1080px]:self-start">
          <div className="font-display text-2xl font-bold">2.4k</div>
          <div className="text-[11px] uppercase leading-tight tracking-[.08em] text-white/60">
            Styles
            <br />
            in stock
          </div>
        </div>
      </div>

      <Chips active={activeCat} onChange={setActiveCat} />

      <div className="mb-6.5 flex items-end justify-between">
        <div>
          <h2 id="grid" className="scroll-mt-6 font-display text-[26px] font-semibold">
            {activeCategory.label}
          </h2>
          <div className="mt-1 text-[13px] text-slate">
            {activeCat === "all"
              ? "Handpicked pieces for the season"
              : `Browse our ${activeCategory.label.toLowerCase()} selection`}
          </div>
        </div>
      </div>

      <ProductGrid products={filtered} />

      <div className="mt-17.5 border-t border-ash py-15 text-center text-[13px] text-stone">
        Spree — Modern fashion, designed for the everyday. © 2026
      </div>
    </Wrap>
  );
}

export default function ShopHomePage() {
  return (
    <Suspense fallback={null}>
      <ShopHomeContent />
    </Suspense>
  );
}
