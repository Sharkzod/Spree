"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { CartLine } from "@/lib/types";

interface ShopContextValue {
  cart: CartLine[];
  wishlist: number[];
  cartCount: number;
  wishCount: number;
  addToCart: (id: number, qty?: number, size?: string, color?: string) => void;
  updateQty: (index: number, delta: number) => void;
  removeLine: (index: number) => void;
  toggleWish: (id: number) => void;
  isWished: (id: number) => boolean;
  clearCart: () => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const ShopContext = createContext<ShopContextValue | null>(null);

const CART_KEY = "stevano-cart";
const WISH_KEY = "stevano-wishlist";

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    try {
      const c = localStorage.getItem(CART_KEY);
      const w = localStorage.getItem(WISH_KEY);
      if (c) setCart(JSON.parse(c));
      if (w) setWishlist(JSON.parse(w));
    } catch {
      // ignore malformed storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, hydrated]);

  useEffect(() => {
    if (hydrated) localStorage.setItem(WISH_KEY, JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastMessage(null), 2200);
  }, []);

  const addToCart = useCallback(
    (id: number, qty = 1, size = "M", color = "Ink") => {
      setCart((prev) => {
        const idx = prev.findIndex((c) => c.id === id && c.size === size && c.color === color);
        if (idx > -1) {
          const next = [...prev];
          next[idx] = { ...next[idx], qty: next[idx].qty + qty };
          return next;
        }
        return [...prev, { id, qty, size, color }];
      });
      showToast(qty > 1 ? `${qty} added to cart` : "Added to cart");
    },
    [showToast]
  );

  const updateQty = useCallback((index: number, delta: number) => {
    setCart((prev) => {
      const next = [...prev];
      const line = next[index];
      if (!line) return prev;
      const qty = line.qty + delta;
      if (qty < 1) {
        next.splice(index, 1);
      } else {
        next[index] = { ...line, qty };
      }
      return next;
    });
  }, []);

  const removeLine = useCallback((index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const toggleWish = useCallback(
    (id: number) => {
      setWishlist((prev) => {
        if (prev.includes(id)) {
          showToast("Removed from wishlist");
          return prev.filter((w) => w !== id);
        }
        showToast("Saved to wishlist ♥");
        return [...prev, id];
      });
    },
    [showToast]
  );

  const isWished = useCallback((id: number) => wishlist.includes(id), [wishlist]);

  const clearCart = useCallback(() => setCart([]), []);

  const cartCount = cart.reduce((a, b) => a + b.qty, 0);
  const wishCount = wishlist.length;

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        cartCount,
        wishCount,
        addToCart,
        updateQty,
        removeLine,
        toggleWish,
        isWished,
        clearCart,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop(): ShopContextValue {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used within a ShopProvider");
  return ctx;
}
