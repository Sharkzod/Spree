"use client";

import Link from "next/link";
import Image from "next/image";
import { useShop } from "@/context/ShopContext";
import { findProduct } from "@/lib/products";
import { money } from "@/lib/format";
import { BagIcon, TrashIcon } from "@/components/icons";
import OrderSummary from "./OrderSummary";

export default function CartList() {
  const { cart, updateQty, removeLine } = useShop();

  if (cart.length === 0) {
    return (
      <div className="animate-page-in py-22.5 text-center">
        <div className="mx-auto mb-6 grid h-24 w-24 place-items-center rounded-[28px] bg-smoke">
          <BagIcon className="h-10 w-10 text-stone" />
        </div>
        <h3 className="mb-2.5 text-2xl">Your cart is empty</h3>
        <p className="mb-6.5 text-[15px] text-slate">Looks like you haven&apos;t added anything yet.</p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2.25 rounded-2xl bg-ink px-7 py-3.75 text-sm font-semibold text-paper transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:bg-amber hover:text-ink"
        >
          Start shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="grid items-start gap-10 min-[1081px]:grid-cols-[1fr_380px]">
      <div className="flex flex-col gap-4.5">
        {cart.map((line, i) => {
          const product = findProduct(line.id);
          if (!product) return null;
          return (
            <div
              key={`${line.id}-${line.size}-${line.color}`}
              className="flex items-center gap-5 rounded-[20px] border-[1.5px] border-ash bg-paper p-4 transition-all duration-350 ease-brand hover:border-ink hover:shadow-soft"
            >
              <div className="h-27.5 w-24 shrink-0 overflow-hidden rounded-2xl bg-smoke">
                <Image src={product.img} alt={product.name} width={96} height={110} className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-display text-[17px] font-semibold">{product.name}</div>
                <div className="mt-0.75 text-[13px] text-stone">{product.cat}</div>
                <div className="mt-2.5 flex gap-2">
                  <span className="rounded-lg bg-smoke px-2.5 py-1.25 text-[11px] font-semibold text-slate">
                    Size {line.size}
                  </span>
                  <span className="rounded-lg bg-smoke px-2.5 py-1.25 text-[11px] font-semibold text-slate">
                    {line.color}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-0.5 rounded-xl border-[1.5px] border-ash">
                <button onClick={() => updateQty(i, -1)} className="h-9.5 w-8.5 text-lg text-slate hover:text-ink">
                  −
                </button>
                <span className="w-7.5 text-center text-sm font-bold">{line.qty}</span>
                <button onClick={() => updateQty(i, 1)} className="h-9.5 w-8.5 text-lg text-slate hover:text-ink">
                  +
                </button>
              </div>
              <div className="whitespace-nowrap font-display text-[19px] font-bold">
                {money(product.price * line.qty)}
              </div>
              <button
                onClick={() => removeLine(i)}
                className="grid h-10 w-10 place-items-center rounded-[11px] text-stone transition-colors duration-250 hover:bg-red-50 hover:text-red-500"
              >
                <TrashIcon className="h-4.5 w-4.5" />
              </button>
            </div>
          );
        })}
      </div>
      <OrderSummary withCheckout />
    </div>
  );
}
