"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "เกี่ยวกับเรา", href: "/about" },
      { name: "วิธีการใช้งาน", href: "/how-it-works" },
      { name: "ติดต่อเรา", href: "/contact" },
      { name: "ร่วมงานกับเรา", href: "/careers" },
      { name: "บล็อก", href: "/blog" },
    ],
    vendors: [
      { name: "สมัครเป็นผู้ให้บริการ", href: "/vendor/register" },
      { name: "เข้าสู่ระบบผู้ให้บริการ", href: "/vendor/login" },
      { name: "แพ็คเกจสำหรับผู้ให้บริการ", href: "/vendor/pricing" },
      { name: "คู่มือผู้ให้บริการ", href: "/vendor/guide" },
      { name: "เรื่องราวความสำเร็จ", href: "/vendor/success-stories" },
    ],
    customers: [
      { name: "ค้นหาผู้ให้บริการ", href: "/browse" },
      { name: "หมวดหมู่บริการ", href: "/categories" },
      { name: "จัดการงาน", href: "/events" },
      { name: "แพ็คเกจงาน", href: "/packages" },
      { name: "คำถามที่พบบ่อย", href: "/faq" },
    ],
    support: [
      { name: "ศูนย์ช่วยเหลือ", href: "/help" },
      { name: "นโยบายความเป็นส่วนตัว", href: "/privacy" },
      { name: "ข้อกำหนดการใช้งาน", href: "/terms" },
      { name: "นโยบายการคืนเงิน", href: "/refund-policy" },
      { name: "ข้อพิพาทและการแก้ไข", href: "/dispute-resolution" },
    ],
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                EventHub
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              แพลตฟอร์มหาผู้ให้บริการจัดงานครบวงจร
              เชื่อมต่อคุณกับผู้เชี่ยวชาญด้านงานอีเว้นท์
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 rounded-lg transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-800 hover:bg-pink-600 hover:text-white dark:hover:bg-pink-600 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-800 hover:bg-blue-400 hover:text-white dark:hover:bg-blue-400 rounded-lg transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-800 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-700 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              บริษัท
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vendor Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              สำหรับผู้ให้บริการ
            </h3>
            <ul className="space-y-2">
              {footerLinks.vendors.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              สำหรับลูกค้า
            </h3>
            <ul className="space-y-2">
              {footerLinks.customers.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              ช่วยเหลือ
            </h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white text-sm">
                  ที่อยู่
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  123 ถนนสุขุมวิท แขวงคลองเตย
                  <br />
                  เขตคลองเตย กรุงเทพฯ 10110
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white text-sm">
                  โทรศัพท์
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  02-XXX-XXXX
                  <br />
                  (จันทร์-ศุกร์ 9:00-18:00 น.)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white text-sm">
                  อีเมล
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  support@eventhub.com
                  <br />
                  contact@eventhub.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
              © {currentYear} EventHub. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
