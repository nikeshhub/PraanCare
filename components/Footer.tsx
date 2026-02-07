import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary-teal/10 to-accent-saffron/10 text-stone">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="mb-4">
              <div className="relative h-16 w-48">
                <Image
                  src="/images/logo.png"
                  alt="PraanCare"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              Safe Herbs. Modern Science. Pure Praan.
            </p>
            <p className="text-sm text-gray-600">
              Bridging the gap between Himalayan wisdom and lab-certified
              safety.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-gray-700 hover:text-stone transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/quiz"
                  className="text-gray-700 hover:text-stone transition-colors"
                >
                  Health Quiz
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-stone transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-700 hover:text-stone transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/our-farmers"
                  className="text-gray-700 hover:text-stone transition-colors"
                >
                  Our Farmers
                </Link>
              </li>
              <li>
                <Link
                  href="/certifications"
                  className="text-gray-700 hover:text-stone transition-colors"
                >
                  Certifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shipping-returns"
                  className="text-gray-700 hover:text-stone transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-700 hover:text-stone transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-stone transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-700 hover:text-stone transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-700 hover:text-stone transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-sm">
                  Lalitpur Hub, Lalitpur, Nepal
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <a
                  href="tel:+9779812345678"
                  className="text-gray-700 hover:text-stone transition-colors text-sm"
                >
                  +977 981-2345678
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <a
                  href="mailto:info@praancare.com.np"
                  className="text-gray-700 hover:text-stone transition-colors text-sm"
                >
                  info@praancare.com.np
                </a>
              </li>
            </ul>

            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-stone transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-stone transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300/70 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} PraanCare. All rights reserved.
          </p>
          <p className="mt-2 text-xs">
            Disclaimer: These products are not intended to diagnose, treat,
            cure, or prevent any disease. Always consult your healthcare
            provider before starting any supplement.
          </p>
        </div>
      </div>
    </footer>
  );
}
