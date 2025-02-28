"use client";
import { Card } from "@/components/ui/card";
import { Video, Plus } from "lucide-react";

export default function HighlightsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Game Highlights</h1>
        <p className="text-gray-600 mt-2">
          Upload and manage your game highlights and film.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Upload Card */}
        <Card className="p-6 border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors cursor-pointer">
          <div className="flex flex-col items-center justify-center h-48">
            <Plus className="w-12 h-12 text-gray-400 mb-4" />
            <p className="text-sm text-gray-600">Upload New Highlight</p>
          </div>
        </Card>

        {/* Example Highlight Cards */}
        <Card className="overflow-hidden">
          <div className="relative pb-[56.25%] bg-gray-100">
            <Video className="absolute inset-0 m-auto w-12 h-12 text-gray-400" />
          </div>
          <div className="p-4">
            <h3 className="font-semibold">Championship Game Highlights</h3>
            <p className="text-sm text-gray-500 mt-1">Uploaded 2 weeks ago</p>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative pb-[56.25%] bg-gray-100">
            <Video className="absolute inset-0 m-auto w-12 h-12 text-gray-400" />
          </div>
          <div className="p-4">
            <h3 className="font-semibold">Training Session</h3>
            <p className="text-sm text-gray-500 mt-1">Uploaded 1 month ago</p>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Upload Details</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Title
            </label>
            <input
              type="text"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              onChange={(e) => {}}
              placeholder="Enter highlight title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Description
            </label>
            <textarea
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              rows={3}
              onChange={(e) => {}}
              placeholder="Describe your highlight video..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Date Recorded
            </label>
            <input
              type="date"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              onChange={(e) => {}}
            />
          </div>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Upload Video
          </button>
        </div>
      </Card>
    </div>
  );
}