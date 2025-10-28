export interface ForgotPasswordViewModel {
  emailPlaceholder: string;
  supportContact: string;
}

export interface ForgotPasswordMetadata {
  title: string;
  description: string;
}

export class ForgotPasswordPresenter {
  async getViewModel(): Promise<ForgotPasswordViewModel> {
    return {
      emailPlaceholder: "your@email.com",
      supportContact: "support@eventhub.com",
    };
  }

  async generateMetadata(): Promise<ForgotPasswordMetadata> {
    return {
      title: "ลืมรหัสผ่าน | EventHub",
      description: "ขอลิงก์รีเซ็ตรหัสผ่านเพื่อกลับเข้าสู่ระบบ EventHub",
    };
  }
}

export class ForgotPasswordPresenterFactory {
  static async createServer(): Promise<ForgotPasswordPresenter> {
    return new ForgotPasswordPresenter();
  }

  static createClient(): ForgotPasswordPresenter {
    return new ForgotPasswordPresenter();
  }
}
