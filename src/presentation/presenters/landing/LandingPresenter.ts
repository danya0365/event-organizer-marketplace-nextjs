import {
  getAllCategories,
  getFeaturedCategories,
  type Category,
} from "@/src/data/master/categories.data";
import {
  getFeaturedVendors,
  type Vendor,
} from "@/src/data/master/vendors.data";

/**
 * View Model for Landing Page
 */
export interface LandingViewModel {
  hero: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
  };
  stats: {
    totalVendors: number;
    totalCategories: number;
    completedEvents: number;
    happyCustomers: number;
  };
  featuredCategories: Category[];
  allCategories: Category[];
  featuredVendors: Vendor[];
  howItWorks: HowItWorksStep[];
  testimonials: Testimonial[];
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  eventType: string;
}

/**
 * Presenter for Landing Page
 * Follows Clean Architecture with proper separation of concerns
 */
export class LandingPresenter {
  async getViewModel(): Promise<LandingViewModel> {
    // Fetch data from master data
    const featuredCategories = getFeaturedCategories();
    const allCategories = getAllCategories();
    const featuredVendors = getFeaturedVendors();

    // Calculate stats
    const totalVendors = allCategories.reduce(
      (sum, cat) => sum + cat.vendorCount,
      0
    );
    const totalCategories = allCategories.length;

    return {
      hero: {
        title: "ค้นหาผู้ให้บริการจัดงานที่ใช่สำหรับคุณ",
        subtitle:
          "เชื่อมต่อกับผู้เชี่ยวชาญด้านงานอีเว้นท์ จองออนไลน์ จัดการโปรเจกต์ในที่เดียว",
        searchPlaceholder: "ค้นหาผู้ให้บริการ บริการ หรือสถานที่...",
      },
      stats: {
        totalVendors,
        totalCategories,
        completedEvents: 5420,
        happyCustomers: 3200,
      },
      featuredCategories,
      allCategories,
      featuredVendors,
      howItWorks: this.getHowItWorksSteps(),
      testimonials: this.getTestimonials(),
    };
  }

  async generateMetadata() {
    return {
      title: "EventHub - แพลตฟอร์มหาผู้ให้บริการจัดงานครบวงจร",
      description:
        "แพลตฟอร์ม Marketplace เชื่อมต่อลูกค้ากับผู้ให้บริการจัดงานทุกประเภท ทั้งงานแต่งงาน วันเกิด สัมมนา พร้อมระบบจองออนไลน์ จัดการโปรเจกต์ และติดตามงานแบบ Real-time",
      keywords: [
        "event marketplace",
        "แพลตฟอร์มจัดงาน",
        "ผู้ให้บริการจัดงาน",
        "งานแต่งงาน",
        "งานสัมมนา",
        "จองออนไลน์",
      ],
    };
  }

  private getHowItWorksSteps(): HowItWorksStep[] {
    return [
      {
        step: 1,
        title: "ค้นหาผู้ให้บริการ",
        description:
          "เลือกดูผู้ให้บริการจากหมวดหมู่ต่างๆ กรองตามงบประมาณและพื้นที่",
        icon: "🔍",
      },
      {
        step: 2,
        title: "เปรียบเทียบและเลือก",
        description: "ดูรีวิว พอร์ตโฟลิโอ และเปรียบเทียบราคาจากหลายผู้ให้บริการ",
        icon: "📊",
      },
      {
        step: 3,
        title: "จองและชำระเงิน",
        description: "จองออนไลน์และชำระเงินผ่านระบบปลอดภัย",
        icon: "💳",
      },
      {
        step: 4,
        title: "จัดการและติดตาม",
        description:
          "จัดการโปรเจกต์ สื่อสารกับผู้ให้บริการ และติดตามงานแบบ Real-time",
        icon: "✅",
      },
    ];
  }

  private getTestimonials(): Testimonial[] {
    return [
      {
        id: "test-001",
        name: "คุณสมหญิง ใจดี",
        role: "เจ้าของงานแต่งงาน",
        avatar: "/images/testimonials/user1.jpg",
        rating: 5,
        text: "EventHub ช่วยให้การจัดงานแต่งง่ายขึ้นมาก หาผู้ให้บริการได้ครบในที่เดียว ราคาก็เหมาะสม ประทับใจมากค่ะ",
        eventType: "งานแต่งงาน",
      },
      {
        id: "test-002",
        name: "คุณสมชาย รักงาน",
        role: "Event Organizer",
        avatar: "/images/testimonials/user2.jpg",
        rating: 5,
        text: "ใช้บริการจัดงาน Corporate Event หลายครั้งแล้ว ระบบจัดการดี ติดต่อผู้ให้บริการสะดวก แนะนำเลยครับ",
        eventType: "งาน Corporate",
      },
      {
        id: "test-003",
        name: "คุณมานี สุขใจ",
        role: "เจ้าของงานวันเกิด",
        avatar: "/images/testimonials/user3.jpg",
        rating: 5,
        text: "จัดงานวันเกิดลูกครั้งแรกผ่าน EventHub ได้ผู้ให้บริการที่ดีมาก ทั้งช่างภาพ เค้ก และตกแต่ง ประทับใจค่ะ",
        eventType: "งานวันเกิด",
      },
    ];
  }
}

/**
 * Factory for creating LandingPresenter instances
 */
export class LandingPresenterFactory {
  static async createServer(): Promise<LandingPresenter> {
    return new LandingPresenter();
  }

  static createClient(): LandingPresenter {
    return new LandingPresenter();
  }
}
