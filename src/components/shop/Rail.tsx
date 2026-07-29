"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useShop } from "@/context/ShopContext";
import { CartRailIcon, HeartIcon, HomeIcon, UserIcon } from "@/components/icons";

const NAV = [
  { href: "/shop", match: (p: string) => p === "/shop", icon: HomeIcon, label: "Shop" },
  { href: "/shop/cart", match: (p: string) => p.startsWith("/shop/cart"), icon: CartRailIcon, label: "Cart", badgeKey: "cart" as const },
  { href: "/shop/wishlist", match: (p: string) => p.startsWith("/shop/wishlist"), icon: HeartIcon, label: "Wishlist", badgeKey: "wish" as const },
  { href: "/shop/account", match: (p: string) => p.startsWith("/shop/account"), icon: UserIcon, label: "Account" },
];

export default function Rail() {
  const pathname = usePathname();
  const { cartCount, wishCount } = useShop();

  return (
    <aside className="fixed inset-x-0 bottom-5 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-0 rounded-full bg-ink px-5 py-3.5 shadow-[0_20px_45px_-12px_rgba(0,0,0,.5)] sm:inset-y-0 sm:left-0 sm:top-0 sm:w-24 sm:translate-x-0 sm:flex-col sm:items-center sm:gap-8 sm:rounded-none sm:px-0 sm:py-6.5 sm:shadow-none">
      <div
        className="hidden h-11 w-11 overflow-hidden rounded-[13px] bg-paper sm:block"
        style={{
          backgroundImage: "url(/logo.jpg)",
          backgroundSize: "128px 70px",
          backgroundPosition: "-42px -4px",
          backgroundRepeat: "no-repeat",
        }}
        aria-label="Spree"
        role="img"
      />
      <nav className="mt-0 flex flex-row gap-5.5 sm:mt-2 sm:flex-col sm:gap-2">
        {NAV.map(({ href, match, icon: Icon, label, badgeKey }) => {
          const active = match(pathname);
          const count = badgeKey === "cart" ? cartCount : badgeKey === "wish" ? wishCount : 0;
          return (
            <Link
              key={href}
              href={href}
              title={label}
              className={`relative grid h-11 w-11 place-items-center rounded-2xl transition-colors duration-300 ease-brand sm:h-13 sm:w-13 ${
                active ? "bg-paper text-ink" : "text-slate hover:bg-white/7 hover:text-paper"
              }`}
            >
              <Icon className="h-[22px] w-[22px]" />
              {badgeKey && (
                <span
                  className={`absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500 transition-transform duration-300 ease-brand sm:bg-amber ${
                    count > 0 ? "scale-100" : "scale-0"
                  }`}
                />
              )}
            </Link>
          );
        })}
      </nav>
      <div className="hidden flex-1 sm:block" />
      <div className="hidden h-11 w-11 overflow-hidden rounded-2xl border-2 border-white/15 sm:block">
        <Image
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80"
          alt="Albert"
          width={44}
          height={44}
          className="h-full w-full object-cover"
        />
      </div>
    </aside>
  );
}
