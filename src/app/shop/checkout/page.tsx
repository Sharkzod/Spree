"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Wrap from "@/components/shop/Wrap";
import SuccessOverlay from "@/components/shop/SuccessOverlay";
import { useShop } from "@/context/ShopContext";
import { findProduct } from "@/lib/products";
import { money, computeTotals } from "@/lib/format";
import { BackArrowIcon, BankIcon, CardIcon, CheckIcon, PaypalIcon } from "@/components/icons";

const PAY_METHODS = [
  { id: "card", label: "Card", icon: CardIcon },
  { id: "paypal", label: "PayPal", icon: PaypalIcon },
  { id: "bank", label: "Bank", icon: BankIcon },
] as const;

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart } = useShop();
  const [payMethod, setPayMethod] = useState<(typeof PAY_METHODS)[number]["id"]>("card");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (cart.length === 0 && !showSuccess) router.replace("/shop/cart");
  }, [cart.length, showSuccess, router]);

  const subtotal = cart.reduce((sum, line) => {
    const product = findProduct(line.id);
    return sum + (product ? product.price * line.qty : 0);
  }, 0);
  const { shipping, tax, total } = computeTotals(subtotal);

  function placeOrder() {
    setShowSuccess(true);
    clearCart();
  }

  if (cart.length === 0 && !showSuccess) return null;

  return (
    <Wrap>
      <Link
        href="/shop/cart"
        className="mb-5.5 inline-flex items-center gap-2 text-sm font-medium text-slate transition-all hover:gap-2.75 hover:text-ink"
      >
        <BackArrowIcon className="h-4.5 w-4.5" />
        Back to cart
      </Link>

      <div className="mb-6.5">
        <h2 className="font-display text-[26px] font-semibold">Checkout</h2>
        <div className="mt-1 text-[13px] text-slate">Almost there — just a few details</div>
      </div>

      <div className="grid items-start gap-11 min-[1081px]:grid-cols-[1fr_400px]">
        <div>
          <div className="mb-6 rounded-[22px] border-[1.5px] border-ash bg-paper p-8">
            <h3 className="mb-5.5 flex items-center gap-3 text-[19px]">
              <span className="grid h-7.5 w-7.5 place-items-center rounded-[10px] bg-ink text-sm font-bold text-paper">
                1
              </span>
              Shipping details
            </h3>
            <div className="mb-4.5 grid grid-cols-2 gap-4">
              <Field label="First name" defaultValue="Albert" />
              <Field label="Last name" defaultValue="Stevano" />
            </div>
            <Field label="Email address" defaultValue="albert@stevano.co" className="mb-4.5" />
            <Field label="Street address" placeholder="123 Fashion Ave" className="mb-4.5" />
            <div className="grid grid-cols-2 gap-4">
              <Field label="City" placeholder="Port Harcourt" />
              <Field label="Postal code" placeholder="500001" />
            </div>
          </div>

          <div className="rounded-[22px] border-[1.5px] border-ash bg-paper p-8">
            <h3 className="mb-5.5 flex items-center gap-3 text-[19px]">
              <span className="grid h-7.5 w-7.5 place-items-center rounded-[10px] bg-ink text-sm font-bold text-paper">
                2
              </span>
              Payment method
            </h3>
            <div className="mb-1.5 flex gap-3.5">
              {PAY_METHODS.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setPayMethod(m.id)}
                  className={`flex flex-1 items-center gap-3 rounded-2xl border-[1.5px] p-4.5 text-sm font-semibold transition-all duration-300 ease-brand ${
                    payMethod === m.id ? "border-ink bg-ink text-paper" : "border-ash hover:border-ink"
                  }`}
                >
                  <m.icon className="h-6 w-6" />
                  {m.label}
                </button>
              ))}
            </div>
            <Field label="Card number" placeholder="4242 4242 4242 4242" className="mt-5" />
            <div className="mt-4.5 grid grid-cols-2 gap-4">
              <Field label="Expiry" placeholder="MM / YY" />
              <Field label="CVC" placeholder="123" />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-ink p-8 text-paper min-[1081px]:sticky min-[1081px]:top-7.5">
          <h3 className="mb-5 text-xl font-semibold">Your order</h3>
          <div className="mb-5 max-h-55 overflow-auto">
            {cart.map((line) => {
              const product = findProduct(line.id);
              if (!product) return null;
              return (
                <div key={`${line.id}-${line.size}-${line.color}`} className="mb-3.5 flex items-center gap-3">
                  <div className="h-15 w-13 shrink-0 overflow-hidden rounded-[11px]">
                    <Image src={product.img} alt={product.name} width={52} height={60} className="h-full w-full object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold">{product.name}</div>
                    <div className="text-xs text-white/55">
                      {line.size} · {line.color} · x{line.qty}
                    </div>
                  </div>
                  <div className="font-display text-sm font-bold">{money(product.price * line.qty)}</div>
                </div>
              );
            })}
          </div>
          <div className="mb-3.75 flex justify-between text-[14.5px] text-white/70">
            <span>Subtotal</span>
            <span className="font-semibold text-paper">{money(subtotal)}</span>
          </div>
          <div className="mb-3.75 flex justify-between text-[14.5px] text-white/70">
            <span>Shipping</span>
            <span className="font-semibold text-paper">{shipping === 0 ? "Free" : money(shipping)}</span>
          </div>
          <div className="mb-3.75 flex justify-between text-[14.5px] text-white/70">
            <span>Tax</span>
            <span className="font-semibold text-paper">{money(tax)}</span>
          </div>
          <div className="flex items-baseline justify-between border-t border-white/15 pt-5.5">
            <span className="text-[15px] font-semibold">Total</span>
            <span className="font-display text-[30px] font-bold">{money(total)}</span>
          </div>
          <button
            onClick={placeOrder}
            className="mt-6 flex h-14.5 w-full items-center justify-center gap-2.75 rounded-2xl bg-paper text-[15px] font-semibold text-ink transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:bg-black hover:text-paper hover:shadow-soft"
          >
            Place order · {money(total)}
            <CheckIcon className="h-4.75 w-4.75" />
          </button>
        </div>
      </div>

      <SuccessOverlay show={showSuccess} onClose={() => setShowSuccess(false)} />
    </Wrap>
  );
}

function Field({
  label,
  defaultValue,
  placeholder,
  className = "",
}: {
  label: string;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-2 block text-[13px] font-semibold text-slate">{label}</label>
      <input
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="h-13 w-full rounded-2xl border-[1.5px] border-ash px-4 text-[14.5px] transition-all duration-250 ease-brand focus:border-ink focus:shadow-[0_0_0_3px_rgba(20,20,20,.06)] focus:outline-none"
      />
    </div>
  );
}
