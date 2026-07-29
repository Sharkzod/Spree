"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useShop } from "@/context/ShopContext";
import { BagIcon, HeartIcon, SearchIcon } from "@/components/icons";

export default function Topbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { cartCount, wishCount } = useShop();
  const [value, setValue] = useState(pathname === "/shop" ? searchParams.get("q") ?? "" : "");

  useEffect(() => {
    if (pathname === "/shop") setValue(searchParams.get("q") ?? "");
  }, [pathname, searchParams]);

  function handleChange(next: string) {
    setValue(next);
    const url = next ? `/shop?q=${encodeURIComponent(next)}` : "/shop";
    if (pathname === "/shop") router.replace(url);
    else router.push(url);
  }

  return (
    <header className="mx-auto flex max-w-[1320px] items-center gap-7 px-12 pb-5.5 pt-6.5 max-[640px]:flex-wrap max-[640px]:gap-3 max-[640px]:px-4.5 max-[640px]:pb-4 max-[640px]:pt-5">
      <div className="flex-1 max-[640px]:flex-auto">
        <div className="flex items-center gap-1.5 text-[13px] text-slate">Hello, Welcome 👋</div>
        <div className="mt-0.5 text-[22px] font-bold">Albert Stevano</div>
      </div>
      <div className="relative ml-2 max-w-[520px] flex-1 max-[640px]:order-3 max-[640px]:ml-0 max-[640px]:mt-1 max-[640px]:max-w-none max-[640px]:flex-[1_1_100%]">
        <SearchIcon className="pointer-events-none absolute left-4.5 top-1/2 h-[19px] w-[19px] -translate-y-1/2 text-stone" />
        <input
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search clothes . . ."
          className="h-13 w-full rounded-2xl border-[1.5px] border-transparent bg-smoke pl-12.5 pr-5 text-[14.5px] transition-all duration-300 ease-brand focus:border-ink focus:bg-paper focus:shadow-soft focus:outline-none"
        />
      </div>
      <div className="ml-auto flex gap-3">
        <Link
          href="/shop/wishlist"
          title="Wishlist"
          className="group relative grid h-13 w-13 place-items-center rounded-2xl bg-smoke transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:bg-ink hover:text-paper"
        >
          <HeartIcon className="h-5 w-5" />
          <span
            className={`absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full border-2 border-paper bg-amber px-1 text-[11px] font-bold text-ink transition-transform duration-300 ease-brand ${
              wishCount > 0 ? "scale-100" : "scale-0"
            }`}
          >
            {wishCount}
          </span>
        </Link>
        <Link
          href="/shop/cart"
          title="Cart"
          className="group relative grid h-13 w-13 place-items-center rounded-2xl bg-smoke transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:bg-ink hover:text-paper"
        >
          <BagIcon className="h-5 w-5" />
          <span
            className={`absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full border-2 border-paper bg-amber px-1 text-[11px] font-bold text-ink transition-transform duration-300 ease-brand ${
              cartCount > 0 ? "scale-100" : "scale-0"
            }`}
          >
            {cartCount}
          </span>
        </Link>
      </div>
    </header>
  );
}
