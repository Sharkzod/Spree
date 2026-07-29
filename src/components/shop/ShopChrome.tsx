"use client";

import { Suspense, type ReactNode } from "react";
import { ShopProvider } from "@/context/ShopContext";
import Rail from "./Rail";
import Topbar from "./Topbar";
import Toast from "@/components/Toast";

export default function ShopChrome({ children }: { children: ReactNode }) {
  return (
    <ShopProvider>
      <div className="flex min-h-screen">
        <Rail />
        <main className="min-w-0 flex-1 pb-30 sm:ml-24 sm:pb-0">
          <Suspense fallback={null}>
            <Topbar />
          </Suspense>
          {children}
        </main>
      </div>
      <Toast />
    </ShopProvider>
  );
}
