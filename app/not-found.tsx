import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary-teal/10 to-accent-saffron/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-stone">
              Page Not Found
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              We couldn&apos;t find what you were looking for. Let&apos;s get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/">
                <Button className="btn-primary">Back to Home</Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                  Browse Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
