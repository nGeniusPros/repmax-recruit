import { Card } from "@/components/ui/card";
import { QrCode, Download, Share2 } from "lucide-react";

export default function QrCodePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Your QR Code</h1>
        <p className="text-gray-600 mt-2">
          Share your profile instantly with college coaches.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-8">
          <div className="flex flex-col items-center">
            <div className="w-64 h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <QrCode className="w-32 h-32 text-gray-400" />
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Download
              </button>
              <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
            </div>
          </div>
        </Card>

        <Card className="p-8">
          <h2 className="text-xl font-semibold mb-6">QR Code Analytics</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Profile Views</p>
              <p className="text-3xl font-bold">247</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Unique Coaches</p>
              <p className="text-3xl font-bold">18</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Last Scan</p>
              <p className="text-3xl font-bold">2 hours ago</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Recent Profile Views</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <p className="font-medium">State University</p>
              <p className="text-sm text-gray-500">Coach Thompson</p>
            </div>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <p className="font-medium">Tech Institute</p>
              <p className="text-sm text-gray-500">Coach Williams</p>
            </div>
            <p className="text-sm text-gray-500">Yesterday</p>
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium">City College</p>
              <p className="text-sm text-gray-500">Coach Martinez</p>
            </div>
            <p className="text-sm text-gray-500">2 days ago</p>
          </div>
        </div>
      </Card>
    </div>
  );
}