import type { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return <div className="py-20 text-center text-slate">No pieces match your search.</div>;
  }
  return (
    <div className="grid grid-cols-2 gap-3.5 sm:gap-6.5 md:grid-cols-3 lg:grid-cols-4">
      {products.map((p, i) => (
        <ProductCard key={p.id} product={p} index={i} />
      ))}
    </div>
  );
}
