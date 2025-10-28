export interface QuickLoginOption {
  label: string;
  email: string;
  password: string;
  icon: string;
}

export interface LoginViewModel {
  brandName: string;
  title: string;
  subtitle: string;
  emailLabel: string;
  emailPlaceholder: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  forgotPasswordLink: string;
  quickLoginTitle: string;
  quickLoginOptions: QuickLoginOption[];
  registerText: string;
  registerLinkLabel: string;
}

export interface LoginMetadata {
  title: string;
  description: string;
}

export class LoginPresenter {
  async getViewModel(): Promise<LoginViewModel> {
    return {
      brandName: "EventHub",
      title: "เข้าสู่ระบบ",
      subtitle: "เข้าสู่ระบบเพื่อจัดการงานอีเวนท์ของคุณ",
      emailLabel: "อีเมล",
      emailPlaceholder: "your@email.com",
      passwordLabel: "รหัสผ่าน",
      passwordPlaceholder: "••••••••",
      forgotPasswordLink: "/auth/forgot-password",
      quickLoginTitle: "เข้าสู่ระบบด่วน (สำหรับทดสอบ):",
      quickLoginOptions: [
        {
          label: "👤 เข้าสู่ระบบเป็นลูกค้า",
          email: "customer@eventhub.com",
          password: "password123",
          icon: "👤",
        },
        {
          label: "🏪 เข้าสู่ระบบเป็นผู้ให้บริการ",
          email: "vendor1@eventhub.com",
          password: "password123",
          icon: "🏪",
        },
        {
          label: "⚙️ เข้าสู่ระบบเป็นแอดมิน",
          email: "admin@eventhub.com",
          password: "admin123",
          icon: "⚙️",
        },
      ],
      registerText: "ยังไม่มีบัญชี?",
      registerLinkLabel: "สมัครสมาชิก",
    };
  }

  async generateMetadata(): Promise<LoginMetadata> {
    return {
      title: "เข้าสู่ระบบ | EventHub",
      description: "เข้าสู่ระบบเพื่อจัดการงานอีเวนท์และกิจกรรมของคุณบน EventHub",
    };
  }
}

export class LoginPresenterFactory {
  static async createServer(): Promise<LoginPresenter> {
    return new LoginPresenter();
  }

  static createClient(): LoginPresenter {
    return new LoginPresenter();
  }
}
