import type { Metadata } from "next";
import Link from "next/link";
import { RegisterView } from "@/src/presentation/components/auth/register/RegisterView";
import { RegisterPresenterFactory } from "@/src/presentation/presenters/auth/register/RegisterPresenter";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export async function generateMetadata(): Promise<Metadata> {
  const presenter = await RegisterPresenterFactory.createServer();

  try {
    return await presenter.generateMetadata();
  } catch (error) {
    console.error("Error generating register metadata:", error);
    return {
      title: "สมัครสมาชิก | EventHub",
      description: "สร้างบัญชีใหม่เพื่อเริ่มต้นจัดการงานอีเวนท์และกิจกรรมของคุณบน EventHub",
    };
  }
}

export default async function RegisterPage() {
  const presenter = await RegisterPresenterFactory.createServer();

  try {
    const viewModel = await presenter.getViewModel();
    return <RegisterView initialViewModel={viewModel} />;
  } catch (error) {
    console.error("Error rendering register page:", error);

    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold text-foreground mb-2">เกิดข้อผิดพลาด</h1>
          <p className="text-muted mb-4">ไม่สามารถโหลดหน้าสมัครสมาชิกได้</p>
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
