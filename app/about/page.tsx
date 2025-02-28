import { Navigation } from '@/components/ui/navigation';
import { Card } from '@/components/ui/card';
import { Trophy, Users, Star, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1526676338882-d86e14c10aad?auto=format&fit=crop&q=80&w=2000"
            alt="About RepMax"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Empowering the Next Generation of
            <span className="block text-[#F7A800]">Athletic Excellence</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            RepMax is revolutionizing how athletes showcase their talents and connect with opportunities. Our platform combines cutting-edge technology with deep sports expertise to create the ultimate athletic development ecosystem.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-8">
                We believe every athlete deserves the opportunity to reach their full potential. Our mission is to break down barriers in athletic recruitment and development by providing innovative tools and connections that empower athletes to showcase their talents and achieve their dreams.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Trophy className="w-6 h-6 text-[#F7A800] mr-4" />
                  <p className="text-gray-700">Democratizing athletic recruitment</p>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-[#F7A800] mr-4" />
                  <p className="text-gray-700">Building meaningful connections</p>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-[#F7A800] mr-4" />
                  <p className="text-gray-700">Fostering athletic excellence</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white via-[#F7A800]/20 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=100&w=2000&h=1200"
                alt="Football Player"
                className="rounded-2xl shadow-2xl relative"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F7A800] rounded-2xl -z-10 opacity-80 shadow-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-[#F7A800]/30 to-transparent mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-[#F7A800]/30 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFB612]/30 to-[#101820]/40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#F7A800] mb-2">50K+</p>
              <p className="text-gray-300">Active Athletes</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#F7A800] mb-2">1000+</p>
              <p className="text-gray-300">College Programs</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#F7A800] mb-2">85%</p>
              <p className="text-gray-300">Success Rate</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#F7A800] mb-2">24/7</p>
              <p className="text-gray-300">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "William League",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
                bio: "Former NFL player with 20+ years in sports technology"
              },
              {
                name: "Michael Bady",
                role: "Chief Operating Officer",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
                bio: "Tech industry veteran with deep experience in scaling operations"
              },
              {
                name: "Tashara League",
                role: "Chief Marketing Officer",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
                bio: "Marketing executive with expertise in sports and digital media"
              }
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#F7A800] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Trophy,
                title: "Excellence",
                description: "We strive for excellence in everything we do, pushing boundaries and setting new standards."
              },
              {
                icon: Users,
                title: "Community",
                description: "Building strong relationships and fostering a supportive athletic community."
              },
              {
                icon: Star,
                title: "Innovation",
                description: "Leveraging cutting-edge technology to create better opportunities for athletes."
              },
              {
                icon: Award,
                title: "Integrity",
                description: "Operating with transparency and honesty in all our interactions."
              }
            ].map((value, index) => (
              <Card key={index} className="p-6">
                <div className="w-12 h-12 bg-[#F7A800]/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[#F7A800]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the RepMax Community</h2>
          <p className="text-xl text-gray-300 mb-8">
            Take the first step towards achieving your athletic dreams.
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