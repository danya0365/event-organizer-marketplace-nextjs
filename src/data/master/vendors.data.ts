/**
 * Master data for featured vendors
 */

export interface Vendor {
  id: string;
  businessName: string;
  slug: string;
  categoryId: string;
  categoryName: string;
  description: string;
  avatar: string;
  coverImage: string;
  rating: number;
  reviewCount: number;
  startingPrice: number;
  location: string;
  verified: boolean;
  featured: boolean;
  responseTime: string;
  yearsExperience: number;
  completedProjects: number;
  tags: string[];
}

export const FEATURED_VENDORS: Vendor[] = [
  {
    id: "vendor-001",
    businessName: "Dream Wedding Photography",
    slug: "dream-wedding-photography",
    categoryId: "cat-004",
    categoryName: "ถ่ายภาพและวิดีโอ",
    description:
      "ช่างภาพมืออาชีพเชี่ยวชาญงานแต่งงาน มีประสบการณ์มากกว่า 10 ปี จับภาพทุกความทรงจำอันล้ำค่าในวันสำคัญของคุณ",
    avatar: "/images/vendors/dream-wedding.jpg",
    coverImage: "/images/vendors/dream-wedding-cover.jpg",
    rating: 4.9,
    reviewCount: 245,
    startingPrice: 15000,
    location: "กรุงเทพฯ",
    verified: true,
    featured: true,
    responseTime: "ภายใน 1 ชม.",
    yearsExperience: 10,
    completedProjects: 350,
    tags: ["งานแต่ง", "Pre-Wedding", "โดรน"],
  },
  {
    id: "vendor-002",
    businessName: "Royal Catering Services",
    slug: "royal-catering-services",
    categoryId: "cat-002",
    categoryName: "อาหารและเครื่องดื่ม",
    description:
      "บริการจัดเลี้ยงครบวงจร อาหารไทย-สากล คุณภาพระดับโรงแรม ราคาสมเหตุสมผล ทีมงานมืออาชีพ",
    avatar: "/images/vendors/royal-catering.jpg",
    coverImage: "/images/vendors/royal-catering-cover.jpg",
    rating: 4.8,
    reviewCount: 189,
    startingPrice: 250,
    location: "กรุงเทพฯ, นนทบุรี",
    verified: true,
    featured: true,
    responseTime: "ภายใน 30 นาที",
    yearsExperience: 8,
    completedProjects: 520,
    tags: ["บุฟเฟ่ต์", "เซ็ตอาหาร", "อาหารไทย"],
  },
  {
    id: "vendor-003",
    businessName: "Elegant Decoration Studio",
    slug: "elegant-decoration-studio",
    categoryId: "cat-003",
    categoryName: "ตกแต่งงาน",
    description:
      "สตูดิโอตกแต่งงานสไตล์หรูหรา ทันสมัย มีแนวคิดสร้างสรรค์ จัดแต่งทุกประเภทงาน",
    avatar: "/images/vendors/elegant-decoration.jpg",
    coverImage: "/images/vendors/elegant-decoration-cover.jpg",
    rating: 4.9,
    reviewCount: 167,
    startingPrice: 30000,
    location: "กรุงเทพฯ",
    verified: true,
    featured: true,
    responseTime: "ภายใน 2 ชม.",
    yearsExperience: 12,
    completedProjects: 280,
    tags: ["งานแต่ง", "Corporate", "บอลลูน"],
  },
  {
    id: "vendor-004",
    businessName: "Harmony DJ & Sound",
    slug: "harmony-dj-sound",
    categoryId: "cat-005",
    categoryName: "ดนตรีและบันเทิง",
    description:
      "DJ มืออาชีพและระบบเสียงคุณภาพสูง เพลงครบทุกแนว สร้างบรรยากาศงานให้สนุกสุดมัน",
    avatar: "/images/vendors/harmony-dj.jpg",
    coverImage: "/images/vendors/harmony-dj-cover.jpg",
    rating: 4.7,
    reviewCount: 134,
    startingPrice: 8000,
    location: "กรุงเทพฯ, ปริมณฑล",
    verified: true,
    featured: true,
    responseTime: "ภายใน 3 ชม.",
    yearsExperience: 6,
    completedProjects: 420,
    tags: ["DJ", "เสียง-แสง", "งานแต่ง"],
  },
  {
    id: "vendor-005",
    businessName: "Grand Ballroom & Resort",
    slug: "grand-ballroom-resort",
    categoryId: "cat-010",
    categoryName: "สถานที่และโรงแรม",
    description:
      "ห้องจัดเลี้ยงหรูหรา ทำเลดี รองรับแขกได้ถึง 500 คน พร้อมสิ่งอำนวยความสะดวกครบครัน",
    avatar: "/images/vendors/grand-ballroom.jpg",
    coverImage: "/images/vendors/grand-ballroom-cover.jpg",
    rating: 4.8,
    reviewCount: 203,
    startingPrice: 80000,
    location: "กรุงเทพฯ",
    verified: true,
    featured: true,
    responseTime: "ภายใน 1 ชม.",
    yearsExperience: 15,
    completedProjects: 650,
    tags: ["ห้องจัดเลี้ยง", "รีสอร์ท", "รองรับ 500 คน"],
  },
  {
    id: "vendor-006",
    businessName: "Perfect Tent Solutions",
    slug: "perfect-tent-solutions",
    categoryId: "cat-001",
    categoryName: "เช่าเต๊นท์และโต๊ะ",
    description:
      "บริการเช่าเต๊นท์และอุปกรณ์งานครบวงจร คุณภาพดี ราคาถูก มีให้เลือกหลากหลาย",
    avatar: "/images/vendors/perfect-tent.jpg",
    coverImage: "/images/vendors/perfect-tent-cover.jpg",
    rating: 4.6,
    reviewCount: 98,
    startingPrice: 5000,
    location: "กรุงเทพฯ, ปริมณฑล",
    verified: true,
    featured: true,
    responseTime: "ภายใน 4 ชม.",
    yearsExperience: 7,
    completedProjects: 380,
    tags: ["เต๊นท์", "โต๊ะจีน", "เก้าอี้"],
  },
];

/**
 * Get all featured vendors
 */
export function getFeaturedVendors(): Vendor[] {
  return FEATURED_VENDORS;
}

/**
 * Get vendor by slug
 */
export function getVendorBySlug(slug: string): Vendor | undefined {
  return FEATURED_VENDORS.find((vendor) => vendor.slug === slug);
}

/**
 * Get vendor by ID
 */
export function getVendorById(id: string): Vendor | undefined {
  return FEATURED_VENDORS.find((vendor) => vendor.id === id);
}

/**
 * Get vendors by category
 */
export function getVendorsByCategory(categoryId: string): Vendor[] {
  return FEATURED_VENDORS.filter((vendor) => vendor.categoryId === categoryId);
}
