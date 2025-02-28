"use client";
import { Card } from "@/components/ui/card";
import { Users, Trophy, Calendar, Bell } from "lucide-react";

export default function ParentDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Parent Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Monitor and support your athletes' journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Users className="w-8 h-8 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Athletes</p>
              <p className="text-2xl font-bold">2</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Trophy className="w-8 h-8 text-yellow-500" />
            <div>
              <p className="text-sm text-gray-500">Achievements</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Calendar className="w-8 h-8 text-green-500" />
            <div>
              <p className="text-sm text-gray-500">Upcoming Events</p>
              <p className="text-2xl font-bold">3</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Bell className="w-8 h-8 text-purple-500" />
            <div>
              <p className="text-sm text-gray-500">Notifications</p>
              <p className="text-2xl font-bold">5</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Athletes Overview</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-sm text-gray-500">Basketball • Class of 2024</p>
              </div>
              <button className="text-blue-600 hover:text-blue-700">View Profile</button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Michael Johnson</p>
                <p className="text-sm text-gray-500">Football • Class of 2026</p>
              </div>
              <button className="text-blue-600 hover:text-blue-700">View Profile</button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-medium">College Coach View</p>
              <p className="text-sm text-gray-500">Sarah's profile was viewed by State University</p>
              <p className="text-xs text-gray-400">2 hours ago</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-medium">New Achievement</p>
              <p className="text-sm text-gray-500">Michael completed speed training certification</p>
              <p className="text-xs text-gray-400">Yesterday</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="font-medium">Upcoming Event</p>
              <p className="text-sm text-gray-500">Basketball showcase this weekend</p>
              <p className="text-xs text-gray-400">In 3 days</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}