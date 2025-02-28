"use client";
import { Card } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

export default function StatsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Athletic Stats</h1>
        <p className="text-gray-600 mt-2">
          Track and showcase your performance metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Vertical Jump</h3>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-3xl font-bold">32"</div>
          <div className="text-sm text-gray-500 mt-1">Last updated: 2 days ago</div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">40-Yard Dash</h3>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-3xl font-bold">4.5s</div>
          <div className="text-sm text-gray-500 mt-1">Last updated: 1 week ago</div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Bench Press</h3>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-3xl font-bold">225 lbs</div>
          <div className="text-sm text-gray-500 mt-1">Last updated: 3 days ago</div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Add New Stat</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Metric
            </label>
            <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option>Vertical Jump</option>
              <option>40-Yard Dash</option>
              <option>Bench Press</option>
              <option>Squat</option>
              <option>Broad Jump</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Value
            </label>
            <input
              type="text"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              onChange={(e) => {}}
              placeholder="Enter value"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Date
            </label>
            <input
              type="date"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              onChange={(e) => {}}
            />
          </div>
        </div>
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Add Stat
        </button>
      </Card>
    </div>
  );
}