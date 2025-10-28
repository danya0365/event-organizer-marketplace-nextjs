import type { Metadata } from "next";
import Link from "next/link";
import { LoginView } from "@/src/presentation/components/auth/login/LoginView";
import { LoginPresenterFactory } from "@/src/presentation/presenters/auth/login/LoginPresenter";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export async function generateMetadata(): Promise<Metadata> {
  const presenter = await LoginPresenterFactory.createServer();

  try {
    return await presenter.generateMetadata();
  } catch (error) {
    console.error("Error generating login metadata:", error);
    return {
      title: "เข้าสู่ระบบ | EventHub",
      description: "เข้าสู่ระบบเพื่อจัดการงานอีเวนท์และกิจกรรมของคุณบน EventHub",
    };
  }
}

export default async function LoginPage() {
  const presenter = await LoginPresenterFactory.createServer();

  try {
    const viewModel = await presenter.getViewModel();
    return <LoginView initialViewModel={viewModel} />;
  } catch (error) {
    console.error("Error rendering login page:", error);

    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold text-foreground mb-2">เกิดข้อผิดพลาด</h1>
          <p className="text-muted mb-4">ไม่สามารถโหลดหน้าเข้าสู่ระบบได้</p>
          <Link
            href="/"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            กลับสู่หน้าหลัก
          </Link>
        </div>
      </div>
    );
  }
}
