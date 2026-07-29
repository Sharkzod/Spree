export function money(n: number): string {
  return "$" + n.toFixed(2);
}

export interface CartTotals {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

export function computeTotals(subtotal: number): CartTotals {
  const shipping = subtotal > 150 || subtotal === 0 ? 0 : 12;
  const tax = subtotal * 0.08;
  return { subtotal, shipping, tax, total: subtotal + shipping + tax };
}
