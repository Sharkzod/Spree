"use client";

import { CATEGORIES } from "@/lib/products";
import type { Category } from "@/lib/types";
import {
  DressCatIcon,
  GridIcon,
  JacketCatIcon,
  PantsCatIcon,
  TshirtCatIcon,
} from "@/components/icons";

const ICONS: Record<Category["id"], typeof GridIcon> = {
  all: GridIcon,
  dress: DressCatIcon,
  tshirt: TshirtCatIcon,
  pants: PantsCatIcon,
  jacket: JacketCatIcon,
};

export default function Chips({
  active,
  onChange,
}: {
  active: Category["id"];
  onChange: (id: Category["id"]) => void;
}) {
  return (
    <div className="mb-8.5 flex flex-wrap gap-3">
      {CATEGORIES.map((c) => {
        const Icon = ICONS[c.id];
        const isActive = active === c.id;
        return (
          <button
            key={c.id}
            onClick={() => onChange(c.id)}
            className={`flex items-center gap-2.5 rounded-2xl border-[1.5px] px-5.5 py-3.5 text-sm font-medium transition-all duration-300 ease-brand ${
              isActive
                ? "border-ink bg-ink text-paper"
                : "border-ash text-slate hover:-translate-y-0.5 hover:border-ink hover:text-ink"
            }`}
          >
            <Icon className="h-4.5 w-4.5" />
            {c.label}
          </button>
        );
      })}
    </div>
  );
}
