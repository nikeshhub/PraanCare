"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CartItem, clearCart, getCart } from "@/lib/cart";

export default function CheckoutPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [orderItems, setOrderItems] = useState<CartItem[]>([]);
  const [orderId, setOrderId] = useState("");
  const router = useRouter();

  useEffect(() => {
    setItems(getCart());
    const handleUpdate = () => setItems(getCart());
    window.addEventListener("cart-updated", handleUpdate);
    return () => window.removeEventListener("cart-updated", handleUpdate);
  }, []);

  if (items.length === 0 && !submitted) {
    return (
      <div className="min-h-screen pt-20">
        <section className="py-20 bg-gradient-to-br from-primary-teal/10 to-accent-saffron/10">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-stone">
                Checkout
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Your cart is empty. Add products before checkout.
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
              Checkout
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Complete your details and place the order.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-3xl text-stone">
                  {submitted ? "Order Confirmed" : "Customer Details"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {submitted && (
                  <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-green-700 space-y-2">
                    <p>Your order has been placed successfully.</p>
                    <p className="text-sm text-green-800">Order ID: {orderId}</p>
                    <p className="text-sm text-green-800">
                      Delivery: Kathmandu Valley in 1 day, outside valley in 2-3 days.
                    </p>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" className="mt-2 h-12" placeholder="Enter your name" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" className="mt-2 h-12" placeholder="+977" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email (optional)</Label>
                    <Input id="email" className="mt-2 h-12" placeholder="you@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input id="city" className="mt-2 h-12" placeholder="Kathmandu" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Delivery Address *</Label>
                  <Textarea id="address" className="mt-2 min-h-[120px]" placeholder="Street, ward, landmark" />
                </div>
                <div>
                  <Label htmlFor="notes">Order Notes</Label>
                  <Textarea id="notes" className="mt-2 min-h-[120px]" placeholder="Any preferences or delivery instructions" />
                </div>
                {!submitted && (
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      className="btn-primary"
                      onClick={() => {
                        const snapshot = getCart();
                        const id = `PC-${Date.now().toString().slice(-6)}`;
                        setOrderItems(snapshot);
                        setOrderId(id);
                        setSubmitted(true);
                        window.localStorage.setItem(
                          "prancare-last-order",
                          JSON.stringify({
                            orderId: id,
                            items: snapshot,
                            placedAt: new Date().toISOString(),
                          })
                        );
                        clearCart();
                        router.push("/order-success");
                      }}
                    >
                      Place Order
                    </Button>
                    <Link href="/cart">
                      <Button variant="outline" className="border-2">
                        Back to Cart
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-2xl text-stone">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {(submitted ? orderItems : items).map((item) => (
                  <div key={item.slug} className="flex justify-between text-gray-700">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-sm">{item.priceLabel}</span>
                  </div>
                ))}
                <div className="border-t border-gray-200 pt-4 text-sm text-gray-600">
                  Delivery: Kathmandu Valley in 1 day, outside valley in 2-3 days.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
