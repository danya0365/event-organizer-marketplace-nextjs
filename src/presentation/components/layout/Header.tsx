"use client";

import { Bell, Heart, Menu, Search, User, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "เช่าเต๊นท์", href: "/categories/tent-rental" },
    { name: "อาหาร", href: "/categories/catering" },
    { name: "ตกแต่งงาน", href: "/categories/decoration" },
    { name: "ถ่ายภาพ", href: "/categories/photography" },
    { name: "DJ/ดนตรี", href: "/categories/music" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      {/* Top Bar */}
      <div className="border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12 text-sm">
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
              <span>📞 02-XXX-XXXX</span>
              <span className="hidden md:inline">✉️ support@eventhub.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/vendor/register"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                เป็นผู้ให้บริการ
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white hidden sm:inline">
              EventHub
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ค้นหาผู้ให้บริการ บริการ หรือสถานที่..."
                className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search Icon - Mobile */}
            <button className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              <Search className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>

            {/* Favorites */}
            <Link
              href="/favorites"
              className="hidden sm:flex p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg relative"
            >
              <Heart className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Link>

            {/* Notifications */}
            <Link
              href="/notifications"
              className="hidden sm:flex p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg relative"
            >
              <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
                5
              </span>
            </Link>

            {/* User Menu */}
            <Link
              href="/login"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">เข้าสู่ระบบ</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* Categories Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-6 py-3 border-t border-gray-100 dark:border-gray-800">
          <Link
            href="/categories"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            หมวดหมู่ทั้งหมด
          </Link>
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Search Bar - Mobile */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ค้นหาผู้ให้บริการ..."
                className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            {/* Categories - Mobile */}
            <nav className="space-y-2">
              <Link
                href="/categories"
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                หมวดหมู่ทั้งหมด
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </nav>

            {/* Quick Links - Mobile */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-2">
              <Link
                href="/favorites"
                className="flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Heart className="w-5 h-5" />
                <span>รายการโปรด</span>
                <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  3
                </span>
              </Link>
              <Link
                href="/notifications"
                className="flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Bell className="w-5 h-5" />
                <span>การแจ้งเตือน</span>
                <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  5
                </span>
              </Link>
              <Link
                href="/vendor/register"
                className="block px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                เป็นผู้ให้บริการกับเรา
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
