"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/types";
import { COLORS, SIZES } from "@/lib/products";
import { money } from "@/lib/format";
import { useShop } from "@/context/ShopContext";
import {
  BackArrowIcon,
  BagIcon,
  HeartIcon,
  ReturnIcon,
  ShieldCheckIcon,
  StarIcon,
  TruckIcon,
} from "@/components/icons";

export default function ProductDetail({ product }: { product: Product }) {
  const { addToCart, isWished, toggleWish } = useShop();
  const [activeImg, setActiveImg] = useState(0);
  const [size, setSize] = useState("M");
  const [colorIdx, setColorIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const wished = isWished(product.id);

  return (
    <div>
      <Link
        href="/shop"
        className="mb-5.5 inline-flex items-center gap-2 text-sm font-medium text-slate transition-all hover:gap-2.75 hover:text-ink"
      >
        <BackArrowIcon className="h-4.5 w-4.5" />
        Back to shop
      </Link>

      <div className="grid items-start gap-14 min-[1081px]:grid-cols-2">
        <div className="min-[1081px]:sticky min-[1081px]:top-7.5">
          <div className="aspect-[1/1.1] overflow-hidden rounded-[26px] bg-smoke">
            <Image
              src={product.gallery[activeImg]}
              alt={product.name}
              width={700}
              height={770}
              className="h-full w-full object-cover transition-opacity duration-300"
            />
          </div>
          <div className="mt-4 flex gap-3.5">
            {product.gallery.map((g, i) => (
              <button
                key={g}
                onClick={() => setActiveImg(i)}
                className={`h-25 w-22 overflow-hidden rounded-2xl border-2 transition-transform duration-300 ease-brand hover:-translate-y-0.75 ${
                  i === activeImg ? "border-ink" : "border-transparent"
                }`}
              >
                <Image src={g} alt="" width={88} height={100} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[13px] font-semibold uppercase tracking-[.14em] text-amber-deep">
            {product.cat}
          </div>
          <h1 className="my-3 font-display text-[clamp(30px,3.4vw,44px)] font-semibold leading-[1.05]">
            {product.name}
          </h1>
          <div className="mb-6 flex items-center gap-5">
            <div className="flex items-center gap-1.5 font-semibold">
              <StarIcon className="h-4.25 w-4.25 fill-amber text-amber" />
              {product.rating.toFixed(1)}
            </div>
            <div className="text-[13px] text-slate">{product.reviews} reviews</div>
          </div>
          <div className="mb-6.5 font-display text-[34px] font-bold">
            {money(product.price)}
            {product.old && (
              <small className="ml-3 text-lg font-medium text-stone line-through">
                {money(product.old)}
              </small>
            )}
          </div>
          <p className="mb-7.5 text-[15px] leading-relaxed text-slate">{product.desc}</p>

          <div className="mb-3.5 text-[13px] font-semibold uppercase tracking-[.06em]">
            Select size
          </div>
          <div className="mb-7 flex gap-2.75">
            {SIZES.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`grid h-13.5 w-13.5 place-items-center rounded-2xl border-[1.5px] text-sm font-semibold transition-all duration-250 ease-brand ${
                  size === s ? "border-ink bg-ink text-paper" : "border-ash text-slate hover:border-ink hover:text-ink"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="mb-3.5 text-[13px] font-semibold uppercase tracking-[.06em]">
            Color — <span>{COLORS[colorIdx].name}</span>
          </div>
          <div className="mb-8.5 flex gap-3">
            {COLORS.map((c, i) => (
              <button
                key={c.name}
                onClick={() => setColorIdx(i)}
                style={{ background: c.hex }}
                className={`h-9.5 w-9.5 rounded-full border-2 border-paper shadow-[0_0_0_1.5px_var(--color-ash)] transition-transform duration-250 ease-brand hover:scale-110 ${
                  i === colorIdx ? "shadow-[0_0_0_2px_var(--color-ink)]" : ""
                }`}
              />
            ))}
          </div>

          <div className="flex items-stretch gap-3.5">
            <div className="flex items-center overflow-hidden rounded-2xl border-[1.5px] border-ash">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="h-14 w-12 text-xl text-slate transition-colors hover:bg-smoke hover:text-ink"
              >
                −
              </button>
              <span className="w-11 text-center font-display text-base font-bold">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="h-14 w-12 text-xl text-slate transition-colors hover:bg-smoke hover:text-ink"
              >
                +
              </button>
            </div>
            <button
              onClick={() => addToCart(product.id, qty, size, COLORS[colorIdx].name)}
              className="flex h-14 flex-1 items-center justify-center gap-2.75 rounded-2xl bg-ink text-[15px] font-semibold text-paper transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:bg-black hover:shadow-soft"
            >
              <BagIcon className="h-4.75 w-4.75" />
              Add to cart · {money(product.price)}
            </button>
            <button
              onClick={() => toggleWish(product.id)}
              className={`grid h-14 w-14 place-items-center rounded-2xl border-[1.5px] transition-all duration-300 ease-brand ${
                wished ? "border-red-500 text-red-500" : "border-ash hover:border-ink"
              }`}
            >
              <HeartIcon filled={wished} className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-8.5 flex flex-wrap gap-6 border-t border-ash pt-7.5">
            <div className="flex items-center gap-2.75 text-[13px] text-slate">
              <TruckIcon className="h-5.5 w-5.5 text-ink" />
              Free shipping over $150
            </div>
            <div className="flex items-center gap-2.75 text-[13px] text-slate">
              <ReturnIcon className="h-5.5 w-5.5 text-ink" />
              30-day returns
            </div>
            <div className="flex items-center gap-2.75 text-[13px] text-slate">
              <ShieldCheckIcon className="h-5.5 w-5.5 text-ink" />
              Authenticity guaranteed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
