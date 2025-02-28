"use client";
import { Card } from "@/components/ui/card";
import { Bell, Lock, Eye, Trash2 } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-600 mt-2">
          Manage your account preferences and settings.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card className="p-6">
          <div className="flex items-center mb-6">
            <Bell className="w-5 h-5 mr-3" />
            <h2 className="text-xl font-semibold">Notifications</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-gray-500">
                  Receive emails about profile views and updates
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Coach View Alerts</p>
                <p className="text-sm text-gray-500">
                  Get notified when coaches view your profile
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center mb-6">
            <Lock className="w-5 h-5 mr-3" />
            <h2 className="text-xl font-semibold">Security</h2>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Current Password
              </label>
              <input
                type="password"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={(e) => {}}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                New Password
              </label>
              <input
                type="password"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={(e) => {}}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={(e) => {}}
              />
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Update Password
            </button>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center mb-6">
            <Eye className="w-5 h-5 mr-3" />
            <h2 className="text-xl font-semibold">Privacy</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Profile Visibility</p>
                <p className="text-sm text-gray-500">
                  Make your profile visible to verified coaches
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center mb-6">
            <Trash2 className="w-5 h-5 mr-3 text-red-500" />
            <h2 className="text-xl font-semibold text-red-500">Danger Zone</h2>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-4">
              Once you delete your account, there is no going back. Please be
              certain.
            </p>
            <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
              Delete Account
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}