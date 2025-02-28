"use client";

import { Navigation } from '@/components/ui/navigation';
import { Card } from '@/components/ui/card';
import { Check, Star, Shield, BrainCircuit, Video, Trophy, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=2000"
            alt="Pricing Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Choose Your Path to
            <span className="block text-[#F7A800]">Athletic Excellence</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Flexible plans designed to support your athletic journey, from aspiring athletes to professional recruiters.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 -mt-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Tier */}
            <Card className="p-8 bg-white shadow-xl relative">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Free</h3>
                <p className="text-4xl font-bold mb-2">$0<span className="text-lg text-gray-500">/month</span></p>
                <p className="text-gray-600">Perfect for getting started</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Basic athlete profile</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>3 AI recommendations/month</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Community access</span>
                </li>
              </ul>
            </Card>

            {/* Pro Tier */}
            <Card className="p-8 bg-white shadow-xl relative border-2 border-[#F7A800]">
              <div className="absolute top-0 right-0 bg-[#F7A800] text-black px-4 py-1 text-sm font-semibold transform translate-y-[-50%] rounded-full">
                Most Popular
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <p className="text-4xl font-bold mb-2">$20<span className="text-lg text-gray-500">/month</span></p>
                <p className="text-gray-600">For serious athletes</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Everything in Free</span>
                </li>
                <li className="flex items-center">
                  <BrainCircuit className="w-5 h-5 text-[#F7A800] mr-3" />
                  <span>Unlimited AI tools</span>
                </li>
                <li className="flex items-center">
                  <Video className="w-5 h-5 text-[#F7A800] mr-3" />
                  <span>AR/VR features</span>
                </li>
                <li className="flex items-center">
                  <Trophy className="w-5 h-5 text-[#F7A800] mr-3" />
                  <span>Advanced analytics</span>
                </li>
              </ul>
            </Card>

            {/* Elite Tier */}
            <Card className="p-8 bg-white shadow-xl relative">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Elite</h3>
                <p className="text-4xl font-bold mb-2">$50<span className="text-lg text-gray-500">/month</span></p>
                <p className="text-gray-600">For elite performance</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-[#F7A800] mr-3" />
                  <span>Priority recruiter access</span>
                </li>
                <li className="flex items-center">
                  <Shield className="w-5 h-5 text-[#F7A800] mr-3" />
                  <span>Blockchain verification</span>
                </li>
                <li className="flex items-center">
                  <Trophy className="w-5 h-5 text-[#F7A800] mr-3" />
                  <span>1-on-1 coaching</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Recruiter Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">For Recruiters</h2>
              <p className="text-xl text-gray-300 mb-8">
                Access powerful tools and analytics to find your next star athlete.
              </p>
              <Card className="bg-white/10 backdrop-blur-lg p-8 border-0">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Recruiter Pro</h3>
                    <p className="text-[#F7A800] text-lg">$100/month</p>
                  </div>
                  <Shield className="w-12 h-12 text-[#F7A800]" />
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#F7A800] mr-3" />
                    <span>Advanced athlete search</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#F7A800] mr-3" />
                    <span>Performance analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#F7A800] mr-3" />
                    <span>Direct messaging</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#F7A800] mr-3" />
                    <span>Recruitment pipeline tools</span>
                  </li>
                </ul>
              </Card>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80&w=2000"
                alt="Recruiting"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#F7A800]/30 to-black/40 mix-blend-multiply rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              {
                question: "Can I switch plans at any time?",
                answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle."
              },
              {
                question: "Is there a contract or commitment?",
                answer: "No, all our plans are month-to-month with no long-term commitment required."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, debit cards, and digital payment methods."
              },
              {
                question: "Do you offer refunds?",
                answer: "Yes, we offer a 30-day money-back guarantee on all paid plans."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Journey Today</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of athletes and recruiters already using RepMax.
          </p>
          <Link 
            href="/auth/signup" 
            className="inline-flex items-center px-8 py-4 bg-[#F7A800] text-black rounded-lg font-semibold hover:bg-[#e09700] transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}