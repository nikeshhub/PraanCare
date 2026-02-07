"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CartItem, getCart, removeFromCart, updateQuantity } from "@/lib/cart";

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(getCart());
    const handleUpdate = () => setItems(getCart());
    window.addEventListener("cart-updated", handleUpdate);
    return () => window.removeEventListener("cart-updated", handleUpdate);
  }, []);

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20">
        <section className="py-20 bg-gradient-to-br from-primary-teal/10 to-accent-saffron/10">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-stone">
                Your Cart
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Your cart is empty. Explore our products to get started.
              </p>
              <div className="mt-8">
                <Link href="/products">
                  <Button className="btn-primary">Browse Products</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary-teal/10 to-accent-saffron/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-stone">
              Your Cart
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Review your selections before checkout.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl space-y-8">
          {items.map((item) => (
            <Card key={item.slug} className="card-elevated">
              <CardHeader>
                <CardTitle className="text-2xl text-stone">{item.name}</CardTitle>
                <p className="text-sm text-gray-600">{item.form}</p>
              </CardHeader>
              <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="text-gray-700">
                  <p className="font-medium">{item.priceLabel} each</p>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    className="border-2"
                    onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                  >
                    -
                  </Button>
                  <span className="min-w-[2rem] text-center font-medium">
                    {item.quantity}
                  </span>
                  <Button
                    variant="outline"
                    className="border-2"
                    onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                  >
                    +
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => removeFromCart(item.slug)}
                  >
                    Remove
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Link href="/products">
              <Button variant="outline" className="border-2">
                Continue Shopping
              </Button>
            </Link>
            <Link href="/checkout">
              <Button className="btn-primary">Proceed to Checkout</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
