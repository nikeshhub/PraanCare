import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQPage() {
  const faqCategories = [
    {
      category: 'Products & Usage',
      questions: [
        {
          q: 'Are your products safe for daily use?',
          a: 'Yes, all PraanCare products are designed for daily use and are made from natural herbal ingredients. However, we recommend following the dosage instructions on each product. If you have any pre-existing medical conditions or are taking prescription medications, please consult your healthcare provider before starting any new supplement.',
        },
        {
          q: 'How long before I see results?',
          a: 'Results vary depending on the product and individual health conditions. For respiratory and digestive issues, many customers report improvements within 7-14 days of consistent use. For chronic conditions or preventive care, we recommend at least 30 days of regular use. Remember, herbal supplements work gradually to support your body\'s natural healing processes.',
        },
        {
          q: 'Can I take PraanCare products with my current medication?',
          a: 'While our products are natural, they can interact with certain prescription medications. We strongly recommend consulting with your doctor or our certified Ayurvedic expert before combining herbal supplements with prescription drugs. You can reach our expert via WhatsApp at +977 981-2345678.',
        },
        {
          q: 'What is the recommended dosage?',
          a: 'Each product has specific dosage instructions on the packaging. Generally, powders require 1 teaspoon (3-5g) mixed with warm water once daily, while juices are consumed directly. Our health quiz provides personalized dosage recommendations based on your health profile.',
        },
      ],
    },
    {
      category: 'Safety & Certifications',
      questions: [
        {
          q: 'What does "lab-tested" mean?',
          a: 'Every batch of our products undergoes rigorous testing for heavy metals (Lead, Mercury, Arsenic, Cadmium), microbial contamination (E.coli, Salmonella), pesticide residues, and bioactive compound concentration. Tests are conducted by certified third-party laboratories following international standards.',
        },
        {
          q: 'How do I verify my product is genuine?',
          a: 'Every PraanCare product comes with a unique QR code on the packaging. Scan it with your phone camera to access your batch\'s specific lab test certificate, including all safety parameters and test results. This ensures complete transparency and authenticity.',
        },
        {
          q: 'Are your products organic?',
          a: 'Yes, all our herbs are sourced from farmers practicing organic cultivation methods in high-altitude regions of Gorkha and Kavre. Our farmers do not use synthetic pesticides or chemical fertilizers. While we\'re in the process of obtaining formal organic certification, our lab tests confirm zero pesticide residue.',
        },
        {
          q: 'What is Nepcert certification?',
          a: 'Our processing facility in Lalitpur is Nepcert certified, which means we follow strict protocols for hygiene, quality control, traceability, and contamination prevention throughout the manufacturing process.',
        },
      ],
    },
    {
      category: 'Ordering & Payment',
      questions: [
        {
          q: 'What payment methods do you accept?',
          a: 'We accept Cash on Delivery (COD), eSewa, Khalti, and bank transfers. COD is our most popular option—pay when you receive your order. For digital payments, you\'ll receive instant confirmation after payment.',
        },
        {
          q: 'Is there a minimum order amount?',
          a: 'No, there\'s no minimum order amount.',
        },
        {
          q: 'Can I cancel or modify my order?',
          a: 'Yes, you can cancel or modify your order within 2 hours of placement by contacting us via WhatsApp (+977 981-2345678) or email (info@praancare.com.np). Once the order is dispatched, cancellation is not possible, but you can return it within 7 days if unused.',
        },
        {
          q: 'Do you offer discounts or loyalty programs?',
          a: 'Yes! We offer a QR reward program where you can earn mobile data credits (up to NPR 50 in Ncell/NTC) by scanning the QR code on your product packaging daily. We also run seasonal discounts and special offers—subscribe to our newsletter to stay updated.',
        },
      ],
    },
    {
      category: 'Shipping & Returns',
      questions: [
        {
          q: 'How long does delivery take?',
          a: 'Kathmandu Valley: 1 business day. Outside Valley: 2-3 business days. You\'ll receive an SMS when your order is shipped.',
        },
        {
          q: 'What are the delivery charges?',
          a: 'Delivery is available across Nepal. Self-pickup from our Lalitpur hub is always free.',
        },
        {
          q: 'What is your return policy?',
          a: 'We offer a 7-day easy return policy if the product is unused, unopened, and in original packaging. To initiate a return, contact us via WhatsApp or email. Once we receive and verify the returned product, we\'ll process a full refund or replacement within 7-10 business days.',
        },
        {
          q: 'What if my product arrives damaged?',
          a: 'If your product arrives damaged or defective, please contact us immediately with photos. We\'ll arrange for a replacement or full refund at no additional cost. Your satisfaction is our priority.',
        },
      ],
    },
    {
      category: 'Health & Consultation',
      questions: [
        {
          q: 'Can pregnant or breastfeeding women use your products?',
          a: 'We do not recommend our products for pregnant or breastfeeding women without explicit approval from a healthcare provider. Some herbs can affect pregnancy, so please consult your doctor before use.',
        },
        {
          q: 'Can children use your products?',
          a: 'Our products are formulated for adults (18+ years). For children between 12-18, we recommend consulting with our Ayurvedic expert for appropriate dosage. Products are NOT recommended for children under 12.',
        },
        {
          q: 'Can I speak with an Ayurvedic doctor?',
          a: 'Absolutely! We offer FREE 15-minute consultations with our certified Ayurvedic doctors. You can book a consultation via WhatsApp (+977 981-2345678) or call us during business hours (10 AM - 6 PM, Sunday-Friday). Our experts can guide you on product selection and dosage.',
        },
        {
          q: 'I have allergies. Are your products safe for me?',
          a: 'Each product page lists all ingredients. If you have known allergies to specific herbs or plants, please review the ingredients list carefully. For personalized advice, consult our Ayurvedic expert who can recommend allergy-safe alternatives.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-teal/10 to-accent-saffron/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-stone">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Find answers to common questions about our products, certifications, and services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6 text-primary-teal">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${categoryIndex}-${index}`}
                    className="border border-gray-200 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary-teal">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-linen">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl font-heading font-bold mb-6 text-stone">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Our team is here to help! Reach out via WhatsApp, phone, or email, and we\'ll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/9779812345678"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold"
            >
              WhatsApp Us
            </a>
            <a
              href="/contact"
              className="btn-secondary inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold"
            >
              Contact Form
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
