export type ProductType = "tshirt" | "dress" | "jacket" | "pants";

export interface Product {
  id: number;
  name: string;
  cat: string;
  type: ProductType;
  price: number;
  old: number | null;
  rating: number;
  reviews: number;
  tag: string | null;
  img: string;
  gallery: string[];
  desc: string;
}

export interface Category {
  id: "all" | ProductType;
  label: string;
}

export interface ColorOption {
  name: string;
  hex: string;
}

export interface Order {
  id: string;
  date: string;
  items: number;
  total: number;
  status: string;
}

export interface CartLine {
  id: number;
  qty: number;
  size: string;
  color: string;
}
