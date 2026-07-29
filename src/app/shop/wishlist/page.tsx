"use client";

import Link from "next/link";
import Image from "next/image";
import Wrap from "@/components/shop/Wrap";
import { useShop } from "@/context/ShopContext";
import { findProduct } from "@/lib/products";
import { money } from "@/lib/format";
import { HeartIcon, PlusIcon, StarIcon, TrashIcon } from "@/components/icons";

export default function WishlistPage() {
  const { wishlist, addToCart, toggleWish } = useShop();
  const hasItems = wishlist.length > 0;

  return (
    <Wrap>
      <div className="mb-6.5 flex items-end justify-between">
        <div>
          <h2 className="font-display text-[26px] font-semibold">Wishlist</h2>
          <div className="mt-1 text-[13px] text-slate">
            {hasItems ? `${wishlist.length} saved item(s)` : "Pieces you're keeping an eye on"}
          </div>
        </div>
      </div>

      {!hasItems ? (
        <div className="animate-page-in py-22.5 text-center">
          <div className="mx-auto mb-6 grid h-24 w-24 place-items-center rounded-[28px] bg-smoke">
            <HeartIcon className="h-10 w-10 text-stone" />
          </div>
          <h3 className="mb-2.5 text-2xl">No favorites yet</h3>
          <p className="mb-6.5 text-[15px] text-slate">Tap the heart on any item to save it here.</p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2.25 rounded-2xl bg-ink px-7 py-3.75 text-sm font-semibold text-paper transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:bg-amber hover:text-ink"
          >
            Discover pieces
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4.5">
          {wishlist.map((id) => {
            const product = findProduct(id);
            if (!product) return null;
            return (
              <div
                key={id}
                className="flex flex-wrap items-center gap-5 rounded-[20px] border-[1.5px] border-ash bg-paper p-4 transition-all duration-350 ease-brand hover:border-ink hover:shadow-soft"
              >
                <Link href={`/shop/product/${product.id}`} className="h-27.5 w-24 shrink-0 overflow-hidden rounded-2xl bg-smoke">
                  <Image src={product.img} alt={product.name} width={96} height={110} className="h-full w-full object-cover" />
                </Link>
                <div className="min-w-0 flex-1">
                  <div className="font-display text-[17px] font-semibold">{product.name}</div>
                  <div className="mt-0.75 text-[13px] text-stone">{product.cat}</div>
                  <div className="mt-2.5 flex items-center gap-1.25 rounded-lg bg-smoke px-2.5 py-1.25 text-[11px] font-semibold text-slate w-fit">
                    <StarIcon className="h-3 w-3 fill-amber text-amber" /> {product.rating.toFixed(1)}
                  </div>
                </div>
                <div className="whitespace-nowrap font-display text-[19px] font-bold">{money(product.price)}</div>
                <button
                  onClick={() => addToCart(product.id)}
                  className="flex items-center gap-1.75 whitespace-nowrap rounded-xl bg-ink px-4.5 py-2.5 text-[13px] font-semibold text-paper transition-all duration-300 ease-brand hover:bg-amber hover:text-ink"
                >
                  <PlusIcon className="h-3.75 w-3.75" />
                  Add to cart
                </button>
                <button
                  onClick={() => toggleWish(product.id)}
                  className="grid h-10 w-10 place-items-center rounded-[11px] text-stone transition-colors duration-250 hover:bg-red-50 hover:text-red-500"
                >
                  <TrashIcon className="h-4.5 w-4.5" />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </Wrap>
  );
}
