"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { UserCircle } from 'lucide-react';

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    {
      href: '/features',
      label: 'Features',
    },
    {
      href: '/pricing',
      label: 'Pricing',
    },
    {
      href: '/about',
      label: 'About',
    },
  ];

  const loginOptions = [
    { label: 'Athlete Login', href: '/auth/login?role=athlete' },
    { label: 'Parent Login', href: '/auth/login?role=parent' },
    { label: 'Recruiter Login', href: '/auth/login?role=recruiter' },
    { label: 'Team Login', href: '/auth/login?role=team' },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-white">
            RepMax
          </Link>
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium',
                  pathname === item.href && 'text-[#F7A800] font-semibold'
                )}
              >
                {item.label}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 text-white hover:text-gray-200">
                  <UserCircle className="w-6 h-6" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {loginOptions.map((option) => (
                  <DropdownMenuItem key={option.href} asChild>
                    <Link href={option.href} className="w-full">
                      {option.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/auth/signup"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-[#F7A800] hover:bg-[#e09700]"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}