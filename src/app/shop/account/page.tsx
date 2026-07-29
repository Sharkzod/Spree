"use client";

import Image from "next/image";
import Wrap from "@/components/shop/Wrap";
import { useShop } from "@/context/ShopContext";
import { ORDERS } from "@/lib/products";
import { money } from "@/lib/format";

export default function AccountPage() {
  const { wishCount } = useShop();

  return (
    <Wrap>
      <div className="mb-6.5">
        <h2 className="font-display text-[26px] font-semibold">My Account</h2>
        <div className="mt-1 text-[13px] text-slate">Manage your profile and orders</div>
      </div>

      <div className="grid items-start gap-10 min-[1081px]:grid-cols-[300px_1fr]">
        <div className="rounded-[22px] border-[1.5px] border-ash bg-paper p-8 text-center">
          <div className="mx-auto mb-4.5 h-25 w-25 overflow-hidden rounded-[30px]">
            <Image
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
              alt="Albert"
              width={100}
              height={100}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="font-display text-xl font-semibold">Albert Stevano</div>
          <div className="mt-1 text-[13px] text-slate">albert@stevano.co</div>
          <div className="mt-6 flex justify-center gap-6 border-t border-ash pt-5.5">
            <Stat value="24" label="Orders" />
            <Stat value={String(wishCount)} label="Saved" />
            <Stat value="Gold" label="Tier" />
          </div>
        </div>

        <div className="rounded-[22px] border-[1.5px] border-ash bg-paper p-8">
          <h3 className="mb-5 text-[19px]">Recent orders</h3>
          <div>
            {ORDERS.map((o) => (
              <div
                key={o.id}
                className="flex items-center justify-between border-b border-ash py-4 last:border-b-0"
              >
                <div>
                  <div className="font-display font-semibold">{o.id}</div>
                  <div className="mt-0.5 text-[13px] text-slate">
                    {o.date} · {o.items} item(s)
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display font-bold">{money(o.total)}</div>
                  <div className="mt-0.5 text-xs font-semibold text-green-600">● {o.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrap>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-[22px] font-bold">{value}</div>
      <div className="text-xs text-slate">{label}</div>
    </div>
  );
}
