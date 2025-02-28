"use client";
import { Card } from "@/components/ui/card";
import { Users, Trophy, Calendar, BarChart3, Search } from "lucide-react";

export default function TeamDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Team Management Hub</h1>
        <p className="text-gray-600 mt-2">
          Manage your team, track performance, and streamline recruiting.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Users className="w-8 h-8 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Active Roster</p>
              <p className="text-2xl font-bold">24</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Trophy className="w-8 h-8 text-yellow-500" />
            <div>
              <p className="text-sm text-gray-500">Season Record</p>
              <p className="text-2xl font-bold">18-4</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Calendar className="w-8 h-8 text-green-500" />
            <div>
              <p className="text-sm text-gray-500">Next Game</p>
              <p className="text-2xl font-bold">2d</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Search className="w-8 h-8 text-purple-500" />
            <div>
              <p className="text-sm text-gray-500">Recruiting</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Team Performance</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <BarChart3 className="w-6 h-6 text-blue-500" />
                <div>
                  <p className="font-medium">Points per Game</p>
                  <p className="text-2xl font-bold">86.5</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-green-500">↑ 4.2%</p>
                <p className="text-xs text-gray-500">vs last season</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <BarChart3 className="w-6 h-6 text-blue-500" />
                <div>
                  <p className="font-medium">Win Rate</p>
                  <p className="text-2xl font-bold">78%</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-green-500">↑ 12%</p>
                <p className="text-xs text-gray-500">vs last season</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Schedule</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">vs Central High</p>
                <p className="text-sm text-gray-500">Home • Tuesday, 7:00 PM</p>
              </div>
              <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                Details
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">vs East High</p>
                <p className="text-sm text-gray-500">Away • Friday, 8:00 PM</p>
              </div>
              <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                Details
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">State Tournament</p>
                <p className="text-sm text-gray-500">Neutral • Next Week</p>
              </div>
              <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                Details
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}