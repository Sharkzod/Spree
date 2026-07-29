"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/types";
import { money } from "@/lib/format";
import { useShop } from "@/context/ShopContext";
import { HeartIcon, StarIcon } from "@/components/icons";

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const { isWished, toggleWish } = useShop();
  const wished = isWished(product.id);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), (index % 4) * 70);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <Link
      href={`/shop/product/${product.id}`}
      className={`group block cursor-pointer transition-all duration-400 ease-brand ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="relative aspect-[1/1.16] overflow-hidden rounded-card bg-smoke">
        {product.tag && (
          <span className="absolute left-3.5 top-3.5 z-10 rounded-[9px] bg-amber px-2.75 py-1.5 text-[11px] font-bold uppercase tracking-[.03em] text-ink">
            {product.tag}
          </span>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWish(product.id);
          }}
          className={`absolute right-3.5 top-3.5 z-10 grid h-10.5 w-10.5 place-items-center rounded-full backdrop-blur-md transition-all duration-300 ease-brand hover:scale-110 ${
            wished ? "bg-paper text-red-500" : "bg-ink/55 text-paper hover:bg-ink"
          }`}
        >
          <HeartIcon filled={wished} className="h-4.75 w-4.75" />
        </button>
        <Image
          src={product.img}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 258px"
          className="object-cover transition-transform duration-700 ease-brand group-hover:scale-[1.06]"
        />
      </div>
      <div className="px-1 pb-1.5 pt-4">
        <div className="font-display text-base font-semibold">{product.name}</div>
        <div className="mt-1.25 text-xs text-stone">{product.cat}</div>
        <div className="mt-2.75 flex items-center justify-between">
          <div className="font-display text-[17px] font-bold">{money(product.price)}</div>
          <div className="flex items-center gap-1.25 text-sm font-semibold text-slate">
            <StarIcon className="h-3.75 w-3.75 fill-amber text-amber" />
            {product.rating.toFixed(1)}
          </div>
        </div>
      </div>
    </Link>
  );
}
