export interface RoleOption {
  id: "customer" | "vendor";
  label: string;
  description: string;
  icon: string;
}

export interface RegisterViewModel {
  brandName: string;
  title: string;
  subtitle: string;
  roleLabel: string;
  roleOptions: RoleOption[];
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  confirmPasswordLabel: string;
  confirmPasswordPlaceholder: string;
  termsTextPrefix: string;
  termsLinkLabel: string;
  termsLinkHref: string;
  privacyLinkLabel: string;
  privacyLinkHref: string;
  agreeLabel: string;
  submitLabel: string;
  submittingLabel: string;
  loginPrompt: string;
  loginLinkLabel: string;
  loginLinkHref: string;
}

export interface RegisterMetadata {
  title: string;
  description: string;
}

export class RegisterPresenter {
  async getViewModel(): Promise<RegisterViewModel> {
    return {
      brandName: "EventHub",
      title: "สมัครสมาชิก",
      subtitle: "สร้างบัญชีเพื่อเริ่มต้นใช้งาน",
      roleLabel: "ประเภทบัญชี",
      roleOptions: [
        {
          id: "customer",
          label: "ลูกค้า",
          description: "จองบริการ",
          icon: "👤",
        },
        {
          id: "vendor",
          label: "ผู้ให้บริการ",
          description: "ให้บริการ",
          icon: "🏪",
        },
      ],
      nameLabel: "ชื่อ-นามสกุล",
      namePlaceholder: "สมชาย ใจดี",
      emailLabel: "อีเมล",
      emailPlaceholder: "your@email.com",
      phoneLabel: "เบอร์โทรศัพท์",
      phonePlaceholder: "0812345678",
      passwordLabel: "รหัสผ่าน",
      passwordPlaceholder: "••••••••",
      confirmPasswordLabel: "ยืนยันรหัสผ่าน",
      confirmPasswordPlaceholder: "••••••••",
      termsTextPrefix: "ฉันยอมรับ",
      termsLinkLabel: "ข้อกำหนดและเงื่อนไข",
      termsLinkHref: "/terms",
      privacyLinkLabel: "นโยบายความเป็นส่วนตัว",
      privacyLinkHref: "/privacy",
      agreeLabel: "และ",
      submitLabel: "สมัครสมาชิก",
      submittingLabel: "กำลังสมัครสมาชิก...",
      loginPrompt: "มีบัญชีอยู่แล้ว?",
      loginLinkLabel: "เข้าสู่ระบบ",
      loginLinkHref: "/auth/login",
    };
  }

  async generateMetadata(): Promise<RegisterMetadata> {
    return {
      title: "สมัครสมาชิก | EventHub",
      description: "สร้างบัญชีใหม่เพื่อเริ่มต้นจัดการงานอีเวนท์และกิจกรรมของคุณบน EventHub",
    };
  }
}

export class RegisterPresenterFactory {
  static async createServer(): Promise<RegisterPresenter> {
    return new RegisterPresenter();
  }

  static createClient(): RegisterPresenter {
    return new RegisterPresenter();
  }
}
