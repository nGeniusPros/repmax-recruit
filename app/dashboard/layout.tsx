// Add "use client" directive at the top of the file
"use client";

import { UserCircle, BarChart3, Video, QrCode, Settings, Trophy, Users, BookOpen, ShoppingBag, BrainCircuit, GraduationCap, Building2, Shield } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const athleteItems = [
  {
    icon: UserCircle,
    label: "Profile",
    href: "/dashboard",
    description: "Manage your athlete profile"
  },
  {
    icon: BarChart3,
    label: "Performance",
    href: "/dashboard/stats",
    description: "Track your athletic metrics"
  },
  {
    icon: Video,
    label: "Highlights",
    href: "/dashboard/highlights",
    description: "Showcase your best moments"
  },
  {
    icon: Trophy,
    label: "Recruiting",
    href: "/dashboard/recruiting",
    description: "Track your recruiting journey"
  },
  {
    icon: BrainCircuit,
    label: "AI Advisor",
    href: "/dashboard/advisor",
    description: "Get personalized guidance"
  },
  {
    icon: Users,
    label: "Network",
    href: "/dashboard/network",
    description: "Connect with coaches and athletes"
  },
  {
    icon: BookOpen,
    label: "Resources",
    href: "/dashboard/resources",
    description: "Access training and guides"
  },
  {
    icon: ShoppingBag,
    label: "Marketplace",
    href: "/dashboard/marketplace",
    description: "Discover products and services"
  },
  {
    icon: QrCode,
    label: "QR Profile",
    href: "/dashboard/qr-code",
    description: "Share your profile instantly"
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/dashboard/settings",
    description: "Manage your preferences"
  }
];

const parentItems = [
  {
    icon: UserCircle,
    label: "Dashboard",
    href: "/dashboard/parent",
    description: "Parent dashboard overview"
  },
  {
    icon: Users,
    label: "Athletes",
    href: "/dashboard/parent/athletes",
    description: "Manage your athletes"
  },
  {
    icon: BrainCircuit,
    label: "AI Advisor",
    href: "/dashboard/parent/advisor",
    description: "Get guidance and insights"
  },
  {
    icon: BookOpen,
    label: "Resources",
    href: "/dashboard/parent/resources",
    description: "Parent guides and materials"
  }
];

const recruiterItems = [
  {
    icon: UserCircle,
    label: "Dashboard",
    href: "/dashboard/recruiter",
    description: "Recruiter command center"
  },
  {
    icon: Users,
    label: "Prospects",
    href: "/dashboard/recruiter/prospects",
    description: "Browse and track athletes"
  },
  {
    icon: Trophy,
    label: "Pipeline",
    href: "/dashboard/recruiter/pipeline",
    description: "Manage recruiting pipeline"
  },
  {
    icon: BrainCircuit,
    label: "AI Insights",
    href: "/dashboard/recruiter/insights",
    description: "AI-powered recruiting tools"
  }
];

const teamItems = [
  {
    icon: Building2,
    label: "Dashboard",
    href: "/dashboard/team",
    description: "Team management hub"
  },
  {
    icon: Users,
    label: "Roster",
    href: "/dashboard/team/roster",
    description: "Manage team roster"
  },
  {
    icon: Trophy,
    label: "Recruiting",
    href: "/dashboard/team/recruiting",
    description: "Team recruiting tools"
  }
];

const adminItems = [
  {
    icon: Shield,
    label: "Admin",
    href: "/dashboard/admin",
    description: "Platform administration"
  },
  {
    icon: Users,
    label: "Users",
    href: "/dashboard/admin/users",
    description: "Manage platform users"
  },
  {
    icon: Building2,
    label: "Organizations",
    href: "/dashboard/admin/organizations",
    description: "Manage organizations"
  }
];

// Mock user role - this would come from auth context
const userRole = "athlete";

const getSidebarItems = (role: string) => {
  switch (role) {
    case "athlete":
      return athleteItems;
    case "parent":
      return parentItems;
    case "recruiter":
      return recruiterItems;
    case "team":
      return teamItems;
    case "admin":
      return adminItems;
    default:
      return athleteItems;
  }
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const sidebarItems = getSidebarItems(userRole);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-md flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            RepMax
          </h1>
          <p className="text-sm text-gray-500 mt-1 capitalize">{userRole} Portal</p>
        </div>
        <nav className="flex-1 overflow-y-auto py-6">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col px-6 py-3 text-gray-700 hover:bg-gray-50 border-l-4 transition-colors",
                pathname === item.href
                  ? "border-blue-600 bg-blue-50"
                  : "border-transparent"
              )}
            >
              <div className="flex items-center">
                <item.icon className={cn(
                  "w-5 h-5 mr-3",
                  pathname === item.href ? "text-blue-600" : "text-gray-400"
                )} />
                <span className={cn(
                  "font-medium",
                  pathname === item.href && "text-blue-600"
                )}>
                  {item.label}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1 ml-8">
                {item.description}
              </p>
            </Link>
          ))}
        </nav>
        <div className="p-6 border-t bg-gray-50">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
              JD
            </div>
            <div className="ml-3">
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-gray-500">Basketball • Class of 2024</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-50">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}