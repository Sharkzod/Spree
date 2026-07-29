"use client";

import Wrap from "@/components/shop/Wrap";
import CartList from "@/components/shop/CartList";
import { useShop } from "@/context/ShopContext";

export default function CartPage() {
  const { cart } = useShop();
  const hasItems = cart.length > 0;

  return (
    <Wrap>
      <div className="mb-6.5 flex items-end justify-between">
        <div>
          <h2 className="font-display text-[26px] font-semibold">Your Cart</h2>
          <div className="mt-1 text-[13px] text-slate">
            {hasItems ? `${cart.reduce((a, b) => a + b.qty, 0)} item(s) ready to go` : ""}
          </div>
        </div>
      </div>
      <CartList />
    </Wrap>
  );
}
