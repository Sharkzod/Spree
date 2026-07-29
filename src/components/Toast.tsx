"use client";

import { useShop } from "@/context/ShopContext";
import { CheckIcon } from "@/components/icons";

export default function Toast() {
  const { toastMessage } = useShop();
  const show = toastMessage !== null;

  return (
    <div
      className={`fixed bottom-8 left-1/2 z-[200] flex items-center gap-3 rounded-2xl bg-ink px-6 py-4 text-[14.5px] font-medium text-paper shadow-toast transition-transform duration-500 ease-brand ${
        show ? "translate-x-[-50%] translate-y-0" : "translate-x-[-50%] translate-y-[120px]"
      }`}
    >
      <CheckIcon className="h-[22px] w-[22px] text-amber" />
      <span>{toastMessage}</span>
    </div>
  );
}
