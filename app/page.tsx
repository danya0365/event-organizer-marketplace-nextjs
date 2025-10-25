import { LandingView } from "@/src/presentation/components/landing/LandingView";
import { LandingPresenterFactory } from "@/src/presentation/presenters/landing/LandingPresenter";
import { MainLayout } from "@/src/presentation/components/layout/MainLayout";
import Link from "next/link";
import type { Metadata } from "next";

// Tell Next.js this is a dynamic page
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

/**
 * Generate metadata for the landing page
 */
export async function generateMetadata(): Promise<Metadata> {
  const presenter = await LandingPresenterFactory.createServer();

  try {
    return await presenter.generateMetadata();
  } catch (error) {
    console.error("Error generating metadata:", error);

    // Fallback metadata
    return {
      title: "EventHub - แพลตฟอร์มหาผู้ให้บริการจัดงานครบวงจร",
      description:
        "แพลตฟอร์ม Marketplace เชื่อมต่อลูกค้ากับผู้ให้บริการจัดงานทุกประเภท",
    };
  }
}

/**
 * Landing Page - Server Component for SEO optimization
 * Uses presenter pattern following Clean Architecture
 */
export default async function HomePage() {
  const presenter = await LandingPresenterFactory.createServer();

  try {
    // Get view model from presenter
    const viewModel = await presenter.getViewModel();

    return (
      <MainLayout>
        <LandingView initialViewModel={viewModel} />
      </MainLayout>
    );
  } catch (error) {
    console.error("Error fetching landing data:", error);

    // Fallback UI
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              เกิดข้อผิดพลาด
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              ไม่สามารถโหลดข้อมูลได้
            </p>
            <Link
              href="/"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block"
            >
              กลับหน้าแรก
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }
}
