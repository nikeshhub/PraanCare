"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { CartItem } from "@/lib/cart";

type OrderSummary = {
  orderId: string;
  items: CartItem[];
  placedAt: string;
};

const STORAGE_KEY = "prancare-last-order";

export default function OrderSuccessPage() {
  const [summary, setSummary] = useState<OrderSummary | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw) as OrderSummary;
      setSummary(parsed);
    } catch {
      // ignore
    }
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary-teal/10 to-accent-saffron/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-stone">
              Order Success
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Thank you. Your order is confirmed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl space-y-8">
          {!summary && (
            <Card className="card-elevated">
              <CardContent className="p-8 text-center space-y-4">
                <p className="text-lg text-gray-700">
                  We couldn&apos;t find a recent order summary.
                </p>
                <Link href="/products">
                  <Button className="btn-primary">Browse Products</Button>
                </Link>
              </CardContent>
            </Card>
          )}

          {summary && (
            <>
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl text-stone">Order Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-gray-700">
                  <p className="text-sm">Order ID: <span className="font-semibold">{summary.orderId}</span></p>
                  <p className="text-sm">Placed: {new Date(summary.placedAt).toLocaleString()}</p>
                  <p className="text-sm">Delivery: Kathmandu Valley in 1 day, outside valley in 2-3 days.</p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl text-stone">Items</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {summary.items.map((item) => (
                    <div key={item.slug} className="flex justify-between text-gray-700">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                      <span className="text-sm">{item.priceLabel}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button className="btn-primary">Continue Shopping</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
