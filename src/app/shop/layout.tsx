import type { Metadata } from "next";
import type { ReactNode } from "react";
import ShopChrome from "@/components/shop/ShopChrome";

export const metadata: Metadata = {
  title: "Spree — Shop",
};

export default function ShopLayout({ children }: { children: ReactNode }) {
  return <ShopChrome>{children}</ShopChrome>;
}
