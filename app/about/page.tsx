import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-teal/10 to-accent-saffron/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-stone">
              About PraanCare
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Transforming Nepal from a raw herb exporter into a premium
              health-tech hub, one certified product at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-4xl font-heading font-bold mb-8 text-center">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              PraanCare was born from a simple observation: Nepal, home to some
              of the world's most potent medicinal herbs, exports them raw while
              its own people suffer from preventable health issues caused by
              pollution, stress, and expensive imported medicines.
            </p>
            <p className="text-lg leading-relaxed">
              We saw delivery riders like Suman, exposed to Kathmandu's dust
              daily, relying on drowsy chemical cough syrups because local herbs
              felt uncertain and uncertified. We saw elderly women like Kamala,
              part of Aama Samuhas (Mothers' Groups), worried about
              contamination in traditional remedies yet unable to afford
              expensive alternatives.
            </p>
            <p className="text-lg leading-relaxed">
              That's when we decided to build a bridge—between ancient Himalayan
              wisdom and modern scientific validation. Between local farmers and
              urban families. Between prevention and cure.
            </p>
            <p className="text-lg leading-relaxed">
              Today, PraanCare stands as Nepal's first lab-certified,
              QR-verifiable herbal wellness platform, combining Nepcert-certified
              processing, AI-driven personalization, and ethical farmer
              partnerships to deliver trust you can scan.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-linen">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <Card className="card-elevated">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-primary-teal/10 rounded-lg">
                    <Target className="w-8 h-8 text-primary-teal" />
                  </div>
                  <CardTitle className="text-3xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To transform Nepal from a raw exporter into a premium
                  health-tech hub by bridging Himalayan herbal wisdom with
                  lab-certified safety, making preventive care accessible,
                  trustworthy, and affordable for every Nepali.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="card-elevated">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-accent-saffron/20 rounded-lg">
                    <Eye className="w-8 h-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-3xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Every Nepali household trusts preventive herbal care as their
                  first choice for wellness, reducing dependency on expensive
                  imported medicines and supporting local farmers through a
                  transparent, technology-enabled supply chain.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Trust */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Trust</h3>
              <p className="text-gray-600">
                Every product is lab-tested with batch-level QR verification. No
                hidden ingredients, no false claims.
              </p>
            </div>

            {/* Transparency */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Eye className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                Transparency
              </h3>
              <p className="text-gray-600">
                From farm to package, our entire supply chain is traceable. Know
                exactly where your herbs come from.
              </p>
            </div>

            {/* Community-First */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-4">
                <Heart className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                Community-First
              </h3>
              <p className="text-gray-600">
                Fair wages for farmers, affordable prices for customers, and
                wellness solutions for riders and families.
              </p>
            </div>

            {/* Innovation */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                Blending AI-driven personalization with ancient wisdom to create
                modern preventive care solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Team LUMINE
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            The people building PraanCare across research, design, and
            community-led execution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Nasana Shakya", role: "Team Lead", icon: "👑" },
              { name: "Abhinav Dangol", role: "Graphic Designer", icon: "🎨" },
              { name: "Aditi Rana", role: "Packaging & Marketing", icon: "📦" },
              {
                name: "Priyanchu Chaurasiya",
                role: "Research & Development (Herb Expert)",
                icon: "🧪",
              },
            ].map((member, index) => (
              <Card key={index} className="card-elevated text-center">
                <CardHeader>
                  <div className="text-6xl mb-4">{member.icon}</div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-teal font-semibold">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
