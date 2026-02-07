import Link from "next/link";
import { products } from "@/lib/products";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AddToCartButton from "@/components/cart/AddToCartButton";

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary-teal/10 to-accent-saffron/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-stone">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Focused formulations for daily throat comfort and respiratory support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <Card key={product.slug} className="card-elevated">
                <CardHeader>
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                      {product.form}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm text-gray-600 border border-gray-200">
                      {product.priceLabel}
                    </span>
                  </div>
                  <CardTitle className="text-3xl text-stone">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {product.shortDescription}
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    {product.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href={`/products/${product.slug}`}>
                      <Button className="btn-primary">View Details</Button>
                    </Link>
                    <AddToCartButton
                      slug={product.slug}
                      name={product.name}
                      form={product.form}
                      priceLabel={product.priceLabel}
                      redirectToCheckout
                      variant="outline"
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      Order Now
                    </AddToCartButton>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
