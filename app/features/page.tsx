import { Navigation } from '@/components/ui/navigation';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Shield, Star, Award, Users, BrainCircuit, Trophy, Video, QrCode, BarChart3, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black">
          <img
            src="https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=90&w=2000"
            alt="Features Background"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight">
              Powerful Features for
              <span className="block text-[#F7A800] mt-2">Athletic Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
              Everything you need to succeed in your athletic journey, from performance tracking to college recruitment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Cutting-Edge Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our platform offers everything you need to elevate your athletic career to new heights</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "AI-Powered Insights",
                description: "Get personalized recommendations and performance analysis from our advanced AI system.",
                color: "blue"
              },
              {
                icon: Video,
                title: "Game Highlights",
                description: "Upload and showcase your best moments with high-quality video hosting and sharing.",
                color: "purple"
              },
              {
                icon: Trophy,
                title: "Recruiting Tools",
                description: "Connect with college coaches and track your recruiting journey all in one place.",
                color: "yellow"
              },
              {
                icon: BarChart3,
                title: "Performance Analytics",
                description: "Track your progress with detailed statistics and performance metrics.",
                color: "green"
              },
              {
                icon: QrCode,
                title: "Digital Profile",
                description: "Share your athletic profile instantly with a unique QR code.",
                color: "indigo"
              },
              {
                icon: Users,
                title: "Network Building",
                description: "Build relationships with coaches, scouts, and other athletes.",
                color: "red"
              },
              {
                icon: BrainCircuit,
                title: "Smart Training",
                description: "Access AI-generated training programs tailored to your goals.",
                color: "pink"
              },
              {
                icon: Star,
                title: "Elite Exposure",
                description: "Get noticed by top programs with our exposure platform.",
                color: "orange"
              },
              {
                icon: Award,
                title: "Achievement Tracking",
                description: "Document and showcase your athletic achievements and milestones.",
                color: "teal"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="p-8">
                  <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-${feature.color}-500 to-${feature.color}-600 mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#F7A800] transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Champions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Hear what athletes and coaches say about our platform</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-colors">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#F7A800] flex items-center justify-center text-black font-bold">MJ</div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Michael Johnson</h4>
                  <p className="text-gray-400 text-sm">Track & Field, Stanford</p>
                </div>
              </div>
              <p className="text-gray-300">"RepMax has transformed how I approach my training. The analytics alone have helped me improve my sprint times by 0.4 seconds this season."</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-colors">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#F7A800] flex items-center justify-center text-black font-bold">SL</div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Sarah Lee</h4>
                  <p className="text-gray-400 text-sm">Basketball, UCLA</p>
                </div>
              </div>
              <p className="text-gray-300">"I received 5 scholarship offers through the recruiting tools on RepMax. Being able to showcase my highlights directly to coaches made all the difference."</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-colors">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#F7A800] flex items-center justify-center text-black font-bold">JR</div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">James Rodriguez</h4>
                  <p className="text-gray-400 text-sm">Head Coach, Michigan State</p>
                </div>
              </div>
              <p className="text-gray-300">"As a coach, RepMax helps me identify and connect with top talent. The platform's AI insights give me a deeper understanding of each prospect before I even speak with them."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Select the perfect plan to match your athletic ambitions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "Free",
                features: [
                  "Basic Profile",
                  "Performance Tracking",
                  "Limited Highlights",
                  "Community Access"
                ]
              },
              {
                name: "Pro",
                price: "$19/month",
                features: [
                  "Advanced Profile",
                  "Unlimited Highlights",
                  "AI Insights",
                  "Direct Messaging",
                  "Priority Support",
                  "Custom Analytics"
                ],
                popular: true
              },
              {
                name: "Elite",
                price: "$49/month",
                features: [
                  "All Pro Features",
                  "1-on-1 Coaching",
                  "Recruiting Assistance",
                  "Premium Exposure",
                  "VIP Support",
                  "Custom Branding"
                ]
              }
            ].map((plan, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 ${
                  plan.popular 
                    ? 'relative bg-gradient-to-b from-white to-gray-50 border-0 shadow-xl' 
                    : 'bg-white border-0 shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#F7A800] to-amber-500"></div>
                )}
                <CardHeader className="text-center pt-8 pb-6">
                  <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-4xl font-bold text-[#F7A800]">{plan.price}</p>
                  {plan.popular && (
                    <div className="absolute top-4 right-4 bg-[#F7A800] text-black px-3 py-1 text-xs font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-[#F7A800] mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="px-8 pb-8 pt-2">
                  <Link 
                    href="/auth/signup"
                    className={`w-full py-3 text-center rounded-lg font-semibold transition-colors ${
                      plan.popular 
                        ? 'bg-[#F7A800] text-black hover:bg-amber-600' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {plan.popular ? 'Get Started' : 'Select Plan'}
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grad1)"></path>
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F7A800" />
                <stop offset="100%" stopColor="#FF6B00" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Take Your Game to the Next Level?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of athletes who are already using RepMax to achieve their dreams.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/auth/signup"
              className="inline-block px-8 py-4 bg-[#F7A800] text-black rounded-lg font-semibold hover:bg-amber-600 transition-colors shadow-lg"
            >
              Start Your Journey
            </Link>
            <Link 
              href="/about"
              className="inline-block px-8 py-4 bg-transparent border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}