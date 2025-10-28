export interface ResetPasswordViewModel {
  token: string;
}

export interface ResetPasswordMetadata {
  title: string;
  description: string;
}

export class ResetPasswordPresenter {
  async getViewModel(token: string): Promise<ResetPasswordViewModel> {
    return {
      token,
    };
  }

  async generateMetadata(): Promise<ResetPasswordMetadata> {
    return {
      title: "ตั้งรหัสผ่านใหม่ | EventHub",
      description: "ตั้งรหัสผ่านใหม่เพื่อเข้าสู่ระบบ EventHub อีกครั้ง",
    };
  }
}

export class ResetPasswordPresenterFactory {
  static async createServer(): Promise<ResetPasswordPresenter> {
    return new ResetPasswordPresenter();
  }

  static createClient(): ResetPasswordPresenter {
    return new ResetPasswordPresenter();
  }
}
