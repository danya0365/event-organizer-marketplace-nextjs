/**
 * Master data for event service categories
 */

export interface Category {
  id: string;
  name: string;
  nameTh: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  vendorCount: number;
  featured: boolean;
  displayOrder: number;
}

export const CATEGORIES: Category[] = [
  {
    id: "cat-001",
    name: "Tent & Table Rental",
    nameTh: "เช่าเต๊นท์และโต๊ะ",
    slug: "tent-rental",
    description: "เต๊นท์งานแต่งงาน โต๊ะจีน เก้าอี้ และอุปกรณ์จัดงาน",
    icon: "🏕️",
    color: "bg-blue-500",
    vendorCount: 152,
    featured: true,
    displayOrder: 1,
  },
  {
    id: "cat-002",
    name: "Catering & Beverages",
    nameTh: "อาหารและเครื่องดื่ม",
    slug: "catering",
    description: "Catering แบบบุฟเฟ่ต์ เซ็ต อาหารว่าง และเครื่องดื่ม",
    icon: "🍽️",
    color: "bg-orange-500",
    vendorCount: 287,
    featured: true,
    displayOrder: 2,
  },
  {
    id: "cat-003",
    name: "Event Decoration",
    nameTh: "ตกแต่งงาน",
    slug: "decoration",
    description: "ตกแต่งงานแต่ง วันเกิด สัมมนา พร้อมดอกไม้และบอลลูน",
    icon: "🎨",
    color: "bg-pink-500",
    vendorCount: 198,
    featured: true,
    displayOrder: 3,
  },
  {
    id: "cat-004",
    name: "Photography & Videography",
    nameTh: "ถ่ายภาพและวิดีโอ",
    slug: "photography",
    description: "ช่างภาพงานแต่ง อีเว้นท์ วิดีโอกราฟเฟอร์ และโดรน",
    icon: "📸",
    color: "bg-purple-500",
    vendorCount: 321,
    featured: true,
    displayOrder: 4,
  },
  {
    id: "cat-005",
    name: "Music & Entertainment",
    nameTh: "ดนตรีและบันเทิง",
    slug: "music",
    description: "DJ วงดนตรี นักร้อง และนักแสดง",
    icon: "🎵",
    color: "bg-indigo-500",
    vendorCount: 164,
    featured: true,
    displayOrder: 5,
  },
  {
    id: "cat-006",
    name: "MC & Host",
    nameTh: "MC และพิธีกร",
    slug: "mc",
    description: "MC งานแต่งงาน สัมมนา Corporate และ Celebrity MC",
    icon: "🎤",
    color: "bg-red-500",
    vendorCount: 89,
    featured: false,
    displayOrder: 6,
  },
  {
    id: "cat-007",
    name: "Makeup & Hair",
    nameTh: "แต่งหน้าและทำผม",
    slug: "makeup",
    description: "แต่งหน้าเจ้าสาว ทำผม และแต่งหน้างานพิเศษ",
    icon: "💄",
    color: "bg-pink-600",
    vendorCount: 143,
    featured: false,
    displayOrder: 7,
  },
  {
    id: "cat-008",
    name: "Flowers & Favors",
    nameTh: "ดอกไม้และของชำร่วย",
    slug: "flowers",
    description: "ช่อดอกไม้เจ้าสาว ดอกไม้ตกแต่งและของชำร่วย",
    icon: "💐",
    color: "bg-green-500",
    vendorCount: 112,
    featured: false,
    displayOrder: 8,
  },
  {
    id: "cat-009",
    name: "Invitation Cards",
    nameTh: "การ์ดเชิญ",
    slug: "invitation",
    description: "การ์ดเชิญงานแต่ง E-Invitation และการ์ดดิจิทัล",
    icon: "💌",
    color: "bg-yellow-500",
    vendorCount: 67,
    featured: false,
    displayOrder: 9,
  },
  {
    id: "cat-010",
    name: "Venues & Hotels",
    nameTh: "สถานที่และโรงแรม",
    slug: "venues",
    description: "ห้องจัดเลี้ยง สวน โรงแรม และ Resort",
    icon: "🏛️",
    color: "bg-teal-500",
    vendorCount: 234,
    featured: true,
    displayOrder: 10,
  },
  {
    id: "cat-011",
    name: "Transportation",
    nameTh: "เช่ารถและรถบัส",
    slug: "transportation",
    description: "รถเจ้าสาว รถบัสรับ-ส่งแขก และรถหรู",
    icon: "🚗",
    color: "bg-gray-600",
    vendorCount: 78,
    featured: false,
    displayOrder: 11,
  },
  {
    id: "cat-012",
    name: "Attire & Costume",
    nameTh: "เสื้อผ้าและเครื่องแต่งกาย",
    slug: "attire",
    description: "ชุดเจ้าสาว เจ้าบ่าว ชุดไทย และเช่าชุด",
    icon: "👗",
    color: "bg-purple-600",
    vendorCount: 95,
    featured: false,
    displayOrder: 12,
  },
];

/**
 * Get all categories
 */
export function getAllCategories(): Category[] {
  return CATEGORIES;
}

/**
 * Get featured categories
 */
export function getFeaturedCategories(): Category[] {
  return CATEGORIES.filter((cat) => cat.featured).sort(
    (a, b) => a.displayOrder - b.displayOrder
  );
}

/**
 * Get category by slug
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.slug === slug);
}

/**
 * Get category by ID
 */
export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.id === id);
}
