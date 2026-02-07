import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Smartphone, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-bg opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-teal/10 to-accent-saffron/10 opacity-60"></div>
        </div>

        <div className="relative z-10 text-center container-custom px-4">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
            Safe Herbs. Modern Science. Pure Praan.
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light">
            Bridging the gap between Himalayan wisdom and lab-certified safety
            for a healthier Nepal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz">
              <Button
                size="lg"
                className="btn-primary text-lg px-8 py-6 h-auto"
              >
                Take Health Quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="btn-secondary text-lg px-8 py-6 h-auto border-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                Shop Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 text-stone">
            Why We Are Here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Uncertainty */}
            <Card className="card-elevated border-b-4 border-b-secondary-terracotta">
              <CardHeader>
                <div className="text-5xl mb-4">❓</div>
                <CardTitle className="text-2xl">Uncertainty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  90% of local herbs are sold uncertified and undocumented
                </p>
              </CardContent>
            </Card>

            {/* Card 2: Toxicity */}
            <Card className="card-elevated border-b-4 border-b-secondary-terracotta">
              <CardHeader>
                <div className="text-5xl mb-4">⚠️</div>
                <CardTitle className="text-2xl">Toxicity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  Urban pollution and mislabeled dosages lead to hidden health
                  risks
                </p>
              </CardContent>
            </Card>

            {/* Card 3: Dependency */}
            <Card className="card-elevated border-b-4 border-b-secondary-terracotta">
              <CardHeader>
                <div className="text-5xl mb-4">💊</div>
                <CardTitle className="text-2xl">Dependency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  Rising reliance on expensive, imported chemicals with
                  long-term side effects
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HSH Framework Section */}
      <section className="py-20 bg-gradient-to-b from-teal-50 to-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-stone">
            Our Three-Pillar Approach
          </h2>
          <p className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Hardware. Software. Humanware.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hardware */}
            <Card className="card-elevated text-center">
              <CardHeader>
                <div className="text-6xl mb-4">🌿</div>
                <CardTitle className="text-2xl mb-2">Hardware</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary-teal">
                  The Source
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Nepcert-certified local processing units and lab-tested,
                  high-altitude raw herbs from trusted farmers.
                </p>
              </CardContent>
            </Card>

            {/* Software */}
            <Card className="card-elevated text-center">
              <CardHeader>
                <div className="text-6xl mb-4">📱</div>
                <CardTitle className="text-2xl mb-2">Software</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary-teal">
                  The Access
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  AI-driven health questionnaire and transparent batch-tracking
                  dashboard for full traceability.
                </p>
              </CardContent>
            </Card>

            {/* Humanware */}
            <Card className="card-elevated text-center">
              <CardHeader>
                <div className="text-6xl mb-4">🤝</div>
                <CardTitle className="text-2xl mb-2">Humanware</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary-teal">
                  The Trust
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  A network of certified Ayurvedic doctors and ethical community
                  farmers committed to your wellness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 text-stone">
            Why Choose PraanCare?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Certified Potency
              </h3>
              <p className="text-gray-600 text-lg">
                Lab-tested for heavy metals, pesticides, and purity. Every batch
                comes with a QR-verified certificate.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Personalized Care
              </h3>
              <p className="text-gray-600 text-lg">
                AI questionnaires match the right dosage to your lifestyle,
                occupation, and health concerns.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Ethically Sourced
              </h3>
              <p className="text-gray-600 text-lg">
                Direct support to community farmers with fair-trade prices. Know
                exactly where your herbs come from.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Farm Story Section */}
      <section className="py-20 bg-gradient-to-br from-primary-teal/10 to-accent-saffron/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/gorkhaharvest.jpeg"
                alt="Gorkha harvest"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-stone">
                The Gorkha Harvest
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our journey begins in the highlands of Gorkha, where generations
                of farmers have cultivated medicinal herbs using traditional
                methods passed down through centuries.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We partner directly with these farming communities, ensuring
                fair wages and sustainable practices. Every purchase supports
                local livelihoods while bringing authentic Himalayan wellness to
                your doorstep.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                From farm to wellness—our supply chain is transparent, ethical,
                and traceable through QR verification on every product.
              </p>
              <Link href="/our-farmers">
                <Button
                  variant="link"
                  className="text-primary-teal text-lg p-0 h-auto font-semibold"
                >
                  View Our Harvesting Standards
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-teal/10 to-accent-saffron/10 text-stone">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-stone">
              Join the Preventive Revolution
            </h2>
            <p className="text-xl mb-8 text-gray-700">
              Investors and Customers: Let's reclaim our health together
            </p>
          </div>

          <form className="space-y-4 max-w-xl mx-auto">
            <Input
              type="text"
              placeholder="Full Name"
              className="h-14 text-lg bg-transparent border border-gray-300/70 placeholder:text-gray-500"
            />
            <Input
              type="email"
              placeholder="Email Address"
              className="h-14 text-lg bg-transparent border border-gray-300/70 placeholder:text-gray-500"
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              className="h-14 text-lg bg-transparent border border-gray-300/70 placeholder:text-gray-500"
            />
            <Button
              size="lg"
              className="w-full bg-secondary-terracotta hover:bg-secondary-terracotta/90 text-white font-bold py-6 text-lg"
            >
              Submit Interest
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
