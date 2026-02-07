import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OurFarmersPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary-teal/10 to-accent-saffron/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-stone">
              Our Farmers
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Community Roots. Certified Quality.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom max-w-5xl space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                PraanCare works directly with community herb farmers across Nepal, including
                regions such as Gorkha, Kavre, and Lalitpur. These farmers grow and supply
                traditional medicinal herbs that have been used for generations — but under our
                model, those herbs are no longer treated as raw, uncertified commodities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                We transform community-grown herbs into lab-tested, certified wellness
                ingredients through standardized sourcing and verification.
              </p>
            </div>
            <div className="relative h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/gorkhaharvest.jpeg"
                alt="Farmers harvesting herbs in Gorkha"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-3xl text-stone">Direct Community Partnerships</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li>We follow a direct partnership model — not middlemen trading.</li>
                <li>We partner with local community farmers.</li>
                <li>We establish structured sourcing relationships.</li>
                <li>We focus on consistent quality over bulk volume.</li>
                <li>We build long-term sourcing networks instead of one-time purchases.</li>
                <li>Our goal is to turn undervalued raw herbs into premium, verified wellness inputs.</li>
                <li>This approach helps create stable demand and better value for farmer-grown herbs.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-3xl text-stone">From Farm to Lab Verification</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Every herb batch we source goes through lab testing and certification before it
                becomes part of any PraanCare product.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>Batch-level lab testing</li>
                <li>Safety and contamination screening</li>
                <li>Active ingredient verification (where applicable)</li>
                <li>Certification-based acceptance</li>
                <li>Rejection of uncertified raw lots</li>
              </ul>
              <p className="text-gray-700 mt-6">
                This replaces the traditional “dusty market herb” supply chain with a verified
                safety pipeline.
              </p>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-3xl text-stone">Traceable Chain of Custody</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                PraanCare follows a chain-of-custody model — meaning herbs are tracked from source
                to final processed form.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>Source-region identification</li>
                <li>Batch tracking</li>
                <li>QR-linked lab reports (product level)</li>
                <li>Documented sourcing flow from farm → processing → certification</li>
                <li>Standardized handling instead of open-market aggregation</li>
              </ul>
              <p className="text-gray-700 mt-6">
                Traceability builds trust — for both customers and farmer partners.
              </p>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-3xl text-stone">Standardized Sourcing Model</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                We are building a sourcing system based on standardization, certification, and
                verification, not informal herb trading.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>Nepcert / GMP-aligned processing goals</li>
                <li>Certified lab partnerships</li>
                <li>Quality-first procurement</li>
                <li>Verified batches only</li>
                <li>Export-grade safety targets (USP-level standards roadmap)</li>
              </ul>
              <p className="text-gray-700 mt-6">
                This allows Nepal’s medicinal herbs to compete as premium verified wellness
                ingredients, not raw ungraded exports.
              </p>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-3xl text-stone">Farmer Value Creation Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Nepal exports large volumes of raw herbs with low value capture. Our model changes
                that by:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>Standardizing local herb value chains</li>
                <li>Connecting farmers to certified processing</li>
                <li>Converting raw herbs into high-trust wellness inputs</li>
                <li>Building a verification-based premium market</li>
                <li>Creating a trust-driven herbal ecosystem</li>
              </ul>
              <p className="text-gray-700 mt-6">
                Our long-term goal is a system where community farmers are part of a certified
                wellness infrastructure — not just raw suppliers.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
