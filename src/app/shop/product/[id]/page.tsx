import { notFound } from "next/navigation";
import Wrap from "@/components/shop/Wrap";
import ProductDetail from "@/components/shop/ProductDetail";
import { PRODUCTS, findProduct } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: String(p.id) }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = findProduct(Number(id));
  if (!product) notFound();

  return (
    <Wrap>
      <ProductDetail product={product} />
    </Wrap>
  );
}
