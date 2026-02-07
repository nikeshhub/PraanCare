export type CartItem = {
  slug: string;
  name: string;
  form: string;
  priceLabel: string;
  quantity: number;
};

const STORAGE_KEY = "prancare-cart";

const safeParse = (value: string | null): CartItem[] => {
  if (!value) return [];
  try {
    const data = JSON.parse(value) as CartItem[];
    if (Array.isArray(data)) return data;
  } catch {
    // ignore
  }
  return [];
};

export const getCart = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  return safeParse(window.localStorage.getItem(STORAGE_KEY));
};

export const setCart = (items: CartItem[]) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("cart-updated"));
};

export const addToCart = (item: Omit<CartItem, "quantity">, quantity = 1) => {
  const current = getCart();
  const existing = current.find((i) => i.slug === item.slug);
  if (existing) {
    existing.quantity += quantity;
    setCart([...current]);
    return;
  }
  setCart([...current, { ...item, quantity }]);
};

export const updateQuantity = (slug: string, quantity: number) => {
  const current = getCart();
  const next = current
    .map((item) => (item.slug === slug ? { ...item, quantity } : item))
    .filter((item) => item.quantity > 0);
  setCart(next);
};

export const removeFromCart = (slug: string) => {
  const current = getCart();
  setCart(current.filter((item) => item.slug !== slug));
};

export const clearCart = () => {
  setCart([]);
};
