"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/lib/cart";

type AddToCartButtonProps = {
  slug: string;
  name: string;
  form: string;
  priceLabel?: string;
  className?: string;
  children: ReactNode;
  redirectToCheckout?: boolean;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
};

export default function AddToCartButton({
  slug,
  name,
  form,
  priceLabel = "NPR 650",
  className,
  children,
  redirectToCheckout = false,
  variant = "default",
}: AddToCartButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    addToCart({ slug, name, form, priceLabel });
    if (redirectToCheckout) {
      router.push("/checkout");
      return;
    }
    router.push("/cart");
  };

  return (
    <Button onClick={handleClick} className={className} variant={variant}>
      {children}
    </Button>
  );
}
