import type { Metadata } from "next";
import Link from "next/link";
import { ForgotPasswordView } from "@/src/presentation/components/auth/forgot-password/ForgotPasswordView";
import { ForgotPasswordPresenterFactory } from "@/src/presentation/presenters/auth/forgot-password/ForgotPasswordPresenter";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export async function generateMetadata(): Promise<Metadata> {
  const presenter = await ForgotPasswordPresenterFactory.createServer();

  try {
    return await presenter.generateMetadata();
  } catch (error) {
    console.error("Error generating forgot password metadata:", error);
    return {
      title: "ลืมรหัสผ่าน | EventHub",
      description: "ขอลิงก์รีเซ็ตรหัสผ่านเพื่อกลับเข้าสู่ระบบ EventHub",
    };
  }
}

export default async function ForgotPasswordPage() {
  const presenter = await ForgotPasswordPresenterFactory.createServer();

  try {
    const viewModel = await presenter.getViewModel();
    return <ForgotPasswordView initialViewModel={viewModel} />;
  } catch (error) {
    console.error("Error rendering forgot password page:", error);

    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold text-foreground mb-2">เกิดข้อผิดพลาด</h1>
          <p className="text-muted mb-4">ไม่สามารถโหลดหน้าลืมรหัสผ่านได้</p>
          <Link
            href="/auth/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            กลับไปหน้าเข้าสู่ระบบ
          </Link>
        </div>
      </div>
    );
  }
}
