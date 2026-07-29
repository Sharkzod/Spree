import type { Product, Category, ColorOption, Order } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Modern Light Clothes",
    cat: "T-Shirt",
    type: "tshirt",
    price: 212.99,
    old: 249,
    rating: 5.0,
    reviews: 128,
    tag: "New",
    img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=700&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=700&q=80",
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=700&q=80",
      "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=700&q=80",
    ],
    desc: "A relaxed everyday tee cut from breathable organic cotton. Soft hand-feel, clean drape, and a versatile silhouette that layers with anything in your rotation.",
  },
  {
    id: 2,
    name: "Light Dress Bless",
    cat: "Dress modern",
    type: "dress",
    price: 162.99,
    old: 190,
    rating: 5.0,
    reviews: 96,
    tag: null,
    img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=700&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=700&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=700&q=80",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=700&q=80",
    ],
    desc: "A flowing modern dress with a refined minimal cut. Lightweight fabric that moves with you — effortless from day to evening.",
  },
  {
    id: 3,
    name: "Street Style Puffer",
    cat: "Jacket",
    type: "jacket",
    price: 298.0,
    old: null,
    rating: 4.8,
    reviews: 54,
    tag: "Hot",
    img: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=700&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=700&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=700&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=700&q=80",
    ],
    desc: "An insulated puffer built for the city. Water-resistant shell, cozy fill, and a boxy modern fit made for cold commutes.",
  },
  {
    id: 4,
    name: "Neutral Knit Sweater",
    cat: "Sweater",
    type: "tshirt",
    price: 134.5,
    old: 159,
    rating: 4.9,
    reviews: 210,
    tag: null,
    img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=700&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=700&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=700&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=700&q=80",
    ],
    desc: "A chunky ribbed knit in a warm neutral tone. Oversized for comfort, with dropped shoulders and a soft merino blend.",
  },
  {
    id: 5,
    name: "Tailored Wide Trousers",
    cat: "Pants",
    type: "pants",
    price: 178.0,
    old: null,
    rating: 4.7,
    reviews: 88,
    tag: null,
    img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=700&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=700&q=80",
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=700&q=80",
      "https://images.unsplash.com/photo-1624206112918-f140f087f9b5?w=700&q=80",
    ],
    desc: "High-waisted wide-leg trousers with a sharp crease. Flowing drape, tailored waistband, and a length made for a clean break.",
  },
  {
    id: 6,
    name: "Minimal Slip Dress",
    cat: "Dress modern",
    type: "dress",
    price: 145.99,
    old: 175,
    rating: 4.9,
    reviews: 143,
    tag: "New",
    img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=700&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=700&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=700&q=80",
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=700&q=80",
    ],
    desc: "A bias-cut slip dress in satin-touch fabric. Adjustable straps and a fluid silhouette that catches the light beautifully.",
  },
  {
    id: 7,
    name: "Oversized Graphic Tee",
    cat: "T-Shirt",
    type: "tshirt",
    price: 89.0,
    old: 110,
    rating: 4.6,
    reviews: 302,
    tag: null,
    img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=700&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=700&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=700&q=80",
    ],
    desc: "A heavyweight cotton tee with a subtle screen print. Boxy oversized fit with ribbed collar — a wardrobe workhorse.",
  },
  {
    id: 8,
    name: "Denim Trucker Jacket",
    cat: "Jacket",
    type: "jacket",
    price: 189.0,
    old: null,
    rating: 4.8,
    reviews: 167,
    tag: null,
    img: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=700&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=700&q=80",
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=700&q=80",
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=700&q=80",
    ],
    desc: "A classic trucker in rigid raw denim that fades to your life. Structured shoulders, chest pockets, and timeless styling.",
  },
];

export const CATEGORIES: Category[] = [
  { id: "all", label: "All Items" },
  { id: "dress", label: "Dress" },
  { id: "tshirt", label: "T-Shirt" },
  { id: "pants", label: "Pants" },
  { id: "jacket", label: "Jacket" },
];

export const SIZES = ["XS", "S", "M", "L", "XL"] as const;

export const COLORS: ColorOption[] = [
  { name: "Ink", hex: "#141414" },
  { name: "Sand", hex: "#d6c3a5" },
  { name: "Sage", hex: "#93a583" },
  { name: "Rust", hex: "#b5654a" },
];

export const ORDERS: Order[] = [
  { id: "#ST-2418", date: "Jul 22, 2026", items: 2, total: 398.98, status: "Delivered" },
  { id: "#ST-2402", date: "Jul 10, 2026", items: 1, total: 178.0, status: "Delivered" },
  { id: "#ST-2377", date: "Jun 28, 2026", items: 3, total: 512.49, status: "Delivered" },
];

export function findProduct(id: number): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
