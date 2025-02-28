"use client";
import { Card } from "@/components/ui/card";
import { ShoppingBag, Award, Book, Video, Dumbbell, Calendar } from "lucide-react";

export default function MarketplacePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Marketplace</h1>
        <p className="text-gray-600 mt-2">
          Discover training programs, equipment, and services to enhance your athletic journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Video className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold">Virtual Combines</h3>
              <p className="text-sm text-gray-500">Showcase your skills online</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Join virtual combines and get evaluated by top coaches and recruiters.
          </p>
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Browse Events
          </button>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold">Training Programs</h3>
              <p className="text-sm text-gray-500">Expert-led workouts</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Access personalized training programs from certified coaches.
          </p>
          <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            View Programs
          </button>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold">Elite Camps</h3>
              <p className="text-sm text-gray-500">In-person training camps</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Join intensive training camps led by professional coaches and athletes.
          </p>
          <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Find Camps
          </button>
        </Card>
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-6">Featured Offerings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Speed & Agility Program",
            coach: "Coach Mike Johnson",
            price: "$99",
            rating: "4.8",
            reviews: "128",
            image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            title: "Elite Basketball Camp",
            coach: "Pro Team Academy",
            price: "$299",
            rating: "4.9",
            reviews: "256",
            image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            title: "Strength Foundation",
            coach: "Sarah Williams",
            price: "$149",
            rating: "4.7",
            reviews: "89",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ].map((program, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <div className="h-48 relative">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">{program.title}</h3>
              <p className="text-sm text-gray-500 mb-2">by {program.coach}</p>
              <div className="flex items-center justify-between">
                <p className="font-bold text-lg">{program.price}</p>
                <div className="flex items-center">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1 text-sm font-medium">{program.rating}</span>
                  <span className="ml-1 text-sm text-gray-500">({program.reviews})</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 mt-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Need Equipment?</h2>
            <p className="text-gray-600 mt-1">
              Browse our curated selection of athletic equipment and gear.
            </p>
          </div>
          <button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
            Shop Now
          </button>
        </div>
      </Card>
    </div>
  );
}