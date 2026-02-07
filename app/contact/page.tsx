'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-teal/10 to-accent-saffron/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-stone">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Have questions? We're here to help. Reach out and let's talk wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6 text-stone">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 h-12"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 h-12"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 h-12"
                    placeholder="+977 98XXXXXXXX"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 min-h-[150px]"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full btn-primary">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold mb-6 text-stone">Get In Touch</h2>

              {/* WhatsApp */}
              <Card className="card-elevated">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle>WhatsApp Business</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">Chat with us for instant support</p>
                  <a
                    href="https://wa.me/9779812345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-teal font-semibold hover:underline"
                  >
                    +977 981-2345678
                  </a>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="card-elevated">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle>Phone</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">Call us during business hours</p>
                  <a
                    href="tel:+9779812345678"
                    className="text-primary-teal font-semibold hover:underline"
                  >
                    +977 981-2345678
                  </a>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="card-elevated">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle>Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">Send us an email anytime</p>
                  <a
                    href="mailto:info@praancare.com.np"
                    className="text-primary-teal font-semibold hover:underline"
                  >
                    info@praancare.com.np
                  </a>
                </CardContent>
              </Card>

              {/* Address */}
              <Card className="card-elevated">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-amber-100 rounded-lg">
                      <MapPin className="w-6 h-6 text-amber-600" />
                    </div>
                    <CardTitle>Visit Us</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-medium mb-2">PraanCare Wellness Hub</p>
                  <p className="text-gray-600">
                    Lalitpur, Nepal<br />
                    (Self-pickup available)
                  </p>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="card-elevated">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-teal-100 rounded-lg">
                      <Clock className="w-6 h-6 text-primary-teal" />
                    </div>
                    <CardTitle>Business Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Sunday - Friday:</span>
                      <span className="font-semibold">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-12 bg-gray-100">
        <div className="container-custom">
          <div className="h-96 bg-gray-300 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">
                Map Location<br />
                <span className="text-sm">Lalitpur Hub, Lalitpur, Nepal</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
