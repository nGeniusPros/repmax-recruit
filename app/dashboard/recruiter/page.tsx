"use client";
import { Card } from "@/components/ui/card";
import { Users, Star, Clock, Filter } from "lucide-react";

export default function RecruiterDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Recruiter Command Center</h1>
        <p className="text-gray-600 mt-2">
          Discover and track top athletic talent.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Users className="w-8 h-8 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Active Prospects</p>
              <p className="text-2xl font-bold">48</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Star className="w-8 h-8 text-yellow-500" />
            <div>
              <p className="text-sm text-gray-500">Watchlist</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Clock className="w-8 h-8 text-green-500" />
            <div>
              <p className="text-sm text-gray-500">Recent Views</p>
              <p className="text-2xl font-bold">24</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Filter className="w-8 h-8 text-purple-500" />
            <div>
              <p className="text-sm text-gray-500">Saved Filters</p>
              <p className="text-2xl font-bold">5</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Top Prospects</h2>
          <div className="space-y-4">
            {[
              {
                name: "Marcus Thompson",
                sport: "Basketball",
                stats: "6'5\" | SG | 4.0 GPA",
                match: "98%"
              },
              {
                name: "Emma Rodriguez",
                sport: "Volleyball",
                stats: "6'1\" | OH | 3.8 GPA",
                match: "95%"
              },
              {
                name: "David Chen",
                sport: "Basketball",
                stats: "6'8\" | PF | 3.9 GPA",
                match: "93%"
              }
            ].map((prospect, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{prospect.name}</p>
                  <p className="text-sm text-gray-500">{prospect.sport} • {prospect.stats}</p>
                </div>
                <div className="text-right">
                  <p className="text-green-600 font-semibold">{prospect.match} Match</p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm">View Profile</button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-medium">New Match</p>
              <p className="text-sm text-gray-500">High match with 3 new athletes in basketball</p>
              <p className="text-xs text-gray-400">1 hour ago</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-medium">Profile Update</p>
              <p className="text-sm text-gray-500">Marcus Thompson added new game highlights</p>
              <p className="text-xs text-gray-400">3 hours ago</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="font-medium">Upcoming Showcase</p>
              <p className="text-sm text-gray-500">5 prospects participating in weekend tournament</p>
              <p className="text-xs text-gray-400">In 2 days</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}