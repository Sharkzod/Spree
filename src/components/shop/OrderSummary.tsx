"use client";

import { useState } from "react";
import Link from "next/link";
import { money, computeTotals } from "@/lib/format";
import { findProduct } from "@/lib/products";
import { useShop } from "@/context/ShopContext";
import { ArrowRightIcon } from "@/components/icons";

export default function OrderSummary({ withCheckout }: { withCheckout?: boolean }) {
  const { cart, showToast } = useShop();
  const [promo, setPromo] = useState("");

  const subtotal = cart.reduce((sum, line) => {
    const product = findProduct(line.id);
    return sum + (product ? product.price * line.qty : 0);
  }, 0);
  const { shipping, tax, total } = computeTotals(subtotal);

  return (
    <div className="rounded-3xl bg-ink p-8 text-paper min-[1081px]:sticky min-[1081px]:top-7.5">
      <h3 className="mb-6 text-xl font-semibold">Order summary</h3>
      <div className="mb-3.75 flex justify-between text-[14.5px] text-white/70">
        <span>Subtotal</span>
        <span className="font-semibold text-paper">{money(subtotal)}</span>
      </div>
      <div className="mb-3.75 flex justify-between text-[14.5px] text-white/70">
        <span>Shipping</span>
        <span className="font-semibold text-paper">{shipping === 0 ? "Free" : money(shipping)}</span>
      </div>
      <div className="mb-3.75 flex justify-between text-[14.5px] text-white/70">
        <span>Tax (8%)</span>
        <span className="font-semibold text-paper">{money(tax)}</span>
      </div>
      <div className="my-5.5 flex gap-2.5">
        <input
          value={promo}
          onChange={(e) => setPromo(e.target.value)}
          placeholder="Promo code"
          className="h-12 flex-1 rounded-[13px] border-[1.5px] border-white/14 bg-white/8 px-4 text-sm text-paper placeholder:text-white/40 focus:border-amber focus:outline-none"
        />
        <button
          onClick={() => showToast("Code applied — 0% off 😉")}
          className="rounded-[13px] bg-white/12 px-5 text-[13px] font-semibold transition-colors duration-250 hover:bg-amber hover:text-ink"
        >
          Apply
        </button>
      </div>
      <div className="flex items-baseline justify-between border-t border-white/15 pt-5.5">
        <span className="text-[15px] font-semibold">Total</span>
        <span className="font-display text-[30px] font-bold">{money(total)}</span>
      </div>
      {withCheckout && (
        <Link
          href="/shop/checkout"
          className="group mt-6 flex h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-paper text-[15px] font-semibold text-ink transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:bg-amber"
        >
          Checkout
          <ArrowRightIcon className="h-4.75 w-4.75 transition-transform duration-300 ease-brand group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
