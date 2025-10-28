import type { Metadata } from "next";
import Link from "next/link";
import { ResetPasswordView } from "@/src/presentation/components/auth/reset-password/ResetPasswordView";
import { ResetPasswordPresenterFactory } from "@/src/presentation/presenters/auth/reset-password/ResetPasswordPresenter";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

interface ResetPasswordPageProps {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export async function generateMetadata(): Promise<Metadata> {
  const presenter = await ResetPasswordPresenterFactory.createServer();

  try {
    return await presenter.generateMetadata();
  } catch (error) {
    console.error("Error generating reset password metadata:", error);
    return {
      title: "ตั้งรหัสผ่านใหม่ | EventHub",
      description: "ตั้งรหัสผ่านใหม่เพื่อเข้าสู่ระบบ EventHub อีกครั้ง",
    };
  }
}

export default async function ResetPasswordPage({
  searchParams,
}: ResetPasswordPageProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const tokenParam = resolvedSearchParams.token;
  const token = Array.isArray(tokenParam) ? tokenParam[0] ?? "" : tokenParam ?? "";

  const presenter = await ResetPasswordPresenterFactory.createServer();

  try {
    const viewModel = await presenter.getViewModel(token);

    return <ResetPasswordView token={token} initialViewModel={viewModel} />;
  } catch (error) {
    console.error("Error rendering reset password page:", error);

    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold text-foreground mb-2">เกิดข้อผิดพลาด</h1>
          <p className="text-muted mb-4">ไม่สามารถโหลดหน้าตั้งรหัสผ่านใหม่ได้</p>
          <Link
            href="/auth/forgot-password"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            ขอรหัสผ่านใหม่
          </Link>
        </div>
      </div>
    );
  }
}
