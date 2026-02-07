import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sprout, FlaskConical, Brain, Truck, ArrowRight, CheckCircle, QrCode } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-teal/10 to-accent-saffron/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-stone">
              How It Works
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              From Himalayan highlands to your doorstep—our transparent, certified journey
            </p>
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="space-y-16">
            {/* Step 1: Community Sourcing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-teal text-white text-2xl font-bold">
                    1
                  </div>
                  <div>
                    <h2 className="text-4xl font-heading font-bold text-stone">Community Sourcing</h2>
                    <p className="text-lg text-primary-teal font-semibold">The Gorkha Harvest</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Our journey begins in the highlands of Gorkha and Kavre districts, where we partner directly with local farming communities who have cultivated medicinal herbs for generations.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We ensure fair wages, sustainable harvesting practices, and organic cultivation methods. Every farmer in our network is trained in Good Agricultural Practices (GAP) and receives regular support from our agronomists.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Direct farmer partnerships with fair-trade prices</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Organic, high-altitude herbs with maximum potency</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Sustainable harvesting that protects biodiversity</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center">
                  <Sprout className="w-32 h-32 text-green-600" />
                </div>
              </div>
            </div>

            {/* Step 2: Lab Testing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <FlaskConical className="w-32 h-32 text-blue-600" />
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-teal text-white text-2xl font-bold">
                    2
                  </div>
                  <div>
                    <h2 className="text-4xl font-heading font-bold text-stone">Lab Testing</h2>
                    <p className="text-lg text-primary-teal font-semibold">ISO-Certified Safety</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Every batch of raw herbs enters our ISO-certified processing facility in Lalitpur, where rigorous testing ensures your safety and the product's potency.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We test for heavy metals, pesticide residues, microbial contamination, and bioactive compound concentration. Only batches that meet our strict standards move forward.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Heavy metal testing (Lead, Mercury, Arsenic, Cadmium)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Microbial contamination screening</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Pesticide residue analysis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Bioactive compound verification</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3: Personalized Recommendation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-teal text-white text-2xl font-bold">
                    3
                  </div>
                  <div>
                    <h2 className="text-4xl font-heading font-bold text-stone">Personalized Recommendation</h2>
                    <p className="text-lg text-primary-teal font-semibold">AI-Driven Matching</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Not sure which product is right for you? Our AI-powered health questionnaire considers your occupation, lifestyle, health concerns, and preferences to recommend the perfect blend.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Whether you're a delivery rider exposed to daily pollution, an office worker dealing with stress, or an elderly person seeking natural joint support—we match you with the right solution.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Takes only 2 minutes to complete</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Considers occupation, symptoms, and lifestyle</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Get personalized dosage recommendations</span>
                  </li>
                </ul>
                <Link href="/quiz">
                  <Button className="mt-6 btn-primary">
                    Take Health Quiz
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <Brain className="w-32 h-32 text-purple-600" />
                </div>
              </div>
            </div>

            {/* Step 4: Delivered Fresh */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
                  <Truck className="w-32 h-32 text-orange-600" />
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-teal text-white text-2xl font-bold">
                    4
                  </div>
                  <div>
                    <h2 className="text-4xl font-heading font-bold text-stone">Delivered Fresh</h2>
                    <p className="text-lg text-primary-teal font-semibold">Fast & Secure</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Your certified herbal products are carefully packaged and delivered to your doorstep within 1 day in Kathmandu Valley, or 2-3 days outside the valley.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Every package includes a unique QR code that links to your batch's specific lab test results. Scan it anytime to verify authenticity and quality.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Secure packaging to preserve freshness</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">QR code for batch-specific lab results</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Delivery is available across Nepal</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">7-day easy returns if unused</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Verification Section */}
      <section className="py-20 bg-gradient-to-br from-accent-saffron/20 to-amber-100">
        <div className="container-custom max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-6">
            <QrCode className="w-10 h-10 text-primary-teal" />
          </div>
          <h2 className="text-4xl font-heading font-bold mb-6 text-stone">Scan. Verify. Trust.</h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Every PraanCare product comes with a unique QR code that links directly to your batch's lab test certificate. See exactly what we tested for and the results—complete transparency in your hands.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-lg">Heavy Metals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Lead, Mercury, Arsenic, Cadmium levels—all within safe limits</p>
              </CardContent>
            </Card>
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-lg">Microbial Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">E.coli, Salmonella, and pathogen screening results</p>
              </CardContent>
            </Card>
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-lg">Pesticide Residue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Comprehensive analysis of pesticide contamination</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-heading font-bold mb-6 text-stone">Ready to Start Your Wellness Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">Experience the PraanCare difference—certified, personalized, and ethically sourced.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz">
              <Button size="lg" className="btn-primary">
                Take Health Quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="btn-secondary">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
