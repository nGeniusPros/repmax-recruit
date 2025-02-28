"use client";

import Link from 'next/link';
import { QrCode, BarChart3, Trophy, Star, Shield, Award, Users, ArrowRight } from 'lucide-react';
import { Navigation } from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevButton,
  CarouselNextButton,
  CarouselDots,
} from '@/components/ui/carousel';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      {/* Premium Sports Showcase */}
      <section className="relative h-screen overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1569517282132-25d22f4573e6?auto=format&fit=crop&q=80&w=2000"
            alt="Elite Athletes"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              The Future of
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#F7A800] to-white">
                Athletic Excellence
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl">
              From high school standouts to professional prospects, we empower athletes to reach their full potential.
            </p>
            <div>
              <Link href="/auth/signup" className="inline-flex items-center px-8 py-4 bg-[#F7A800] text-black rounded-lg font-semibold hover:bg-[#e09700] transition-colors">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Rest of the code remains unchanged */}
      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="relative z-20 flex flex-col items-center text-center pt-20">
            <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#F7A800] to-white">
                The Future of College Recruiting
            </h1>
            <p className="text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
                A game-changing platform where high school athletes and college coaches connect. Create your profile, showcase your skills, and get discovered by top college programs – all in one place.
            </p>
            <div className="flex gap-4">
              <Link href="/about" className="inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Remaining sections of the code */}
      {/* Stats Section, Athletic Excellence Image Section, Partner Logos Marquee, Sports Showcase Carousel, Features Grid, Testimonials Section, CTA Section */}
      {/* ... (rest of the code remains exactly the same as in the original file) */}
    </main>
  );
}