"use client";

import { useRouter } from "next/navigation";
import { CheckIcon } from "@/components/icons";

export default function SuccessOverlay({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  const router = useRouter();

  if (!show) return null;

  return (
    <div className="animate-page-in fixed inset-0 z-300 grid place-items-center bg-white/97 backdrop-blur-md">
      <div className="max-w-105 px-5 text-center">
        <div className="animate-pop-check mx-auto mb-7.5 grid h-27.5 w-27.5 place-items-center rounded-full bg-ink">
          <CheckIcon className="h-13 w-13 text-amber" />
        </div>
        <h2 className="mb-3.5 text-[30px]">Order confirmed!</h2>
        <p className="mb-7.5 leading-relaxed text-slate">
          Thanks, Albert. Your order is on its way and a confirmation has been sent to your email.
        </p>
        <button
          onClick={() => {
            onClose();
            router.push("/shop");
          }}
          className="rounded-2xl bg-ink px-8.5 py-4 font-semibold text-paper transition-all duration-300 ease-brand hover:bg-amber hover:text-ink"
        >
          Continue shopping
        </button>
      </div>
    </div>
  );
}
