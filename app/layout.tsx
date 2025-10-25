import { ThemeProvider } from "@/src/presentation/components/providers/ThemeProvider";
import type { Metadata } from "next";
import "../public/styles/index.css";

export const metadata: Metadata = {
  title: "EventHub - แพลตฟอร์มหาผู้ให้บริการจัดงานครบวงจร",
  description:
    "แพลตฟอร์ม Marketplace เชื่อมต่อลูกค้าที่ต้องการจัดงานกับผู้ให้บริการครบทุกหมวดหมู่ ทั้งเช่าอุปกรณ์ จัดเลี้ยง ตกแต่ง ถ่ายภาพ วงดนตรี พร้อมระบบจอง จัดการโปรเจกต์ และติดตามงานแบบครบวงจร",
  keywords: [
    "event marketplace",
    "แพลตฟอร์มจัดงาน",
    "eventhub",
    "ผู้ให้บริการจัดงาน",
    "งานแต่งงาน",
    "งานสัมมนา",
    "จองผู้ให้บริการ",
    "event management",
    "project management",
    "real-time chat",
    "stripe",
    "nestjs",
    "next.js",
    "tailwind css",
    "zod",
    "zustand",
  ],
  authors: [{ name: "EventHub Team" }],
  creator: "Marosdee Uma",
  publisher: "EventHub",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  ),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: ["/favicon.ico"],
    apple: ["/favicon/apple-touch-icon.png"],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "EventHub - แพลตฟอร์มหาผู้ให้บริการจัดงานครบวงจร",
    description:
      "เชื่อมต่อลูกค้ากับผู้ให้บริการจัดงานหลากหลายหมวดหมู่ พร้อมระบบจอง งาน และการสื่อสารแบบ Real-time ในที่เดียว",
    type: "website",
    siteName: "EventHub",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "EventHub - Event Organizer Marketplace",
      },
    ],
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: "EventHub - แพลตฟอร์มหาผู้ให้บริการจัดงานครบวงจร",
    description:
      "จองผู้ให้บริการจัดงานทุกประเภท จัดการโปรเจกต์ ตรวจสอบไทม์ไลน์ และสื่อสารได้ในที่เดียว",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
