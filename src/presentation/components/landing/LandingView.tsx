"use client";

import { LandingViewModel } from "@/src/presentation/presenters/landing/LandingPresenter";
import { useLandingPresenter } from "@/src/presentation/presenters/landing/useLandingPresenter";
import { ArrowRight, CheckCircle, Search, Star } from "lucide-react";
import Link from "next/link";

interface LandingViewProps {
  initialViewModel?: LandingViewModel;
}

export function LandingView({ initialViewModel }: LandingViewProps) {
  const [state, actions] = useLandingPresenter(initialViewModel);
  const viewModel = state.viewModel;

  // Show loading only on initial load
  if (state.loading && !viewModel) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">กำลังโหลด...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (state.error && !viewModel) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <p className="text-red-600 dark:text-red-400 font-medium mb-2">
            เกิดข้อผิดพลาด
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{state.error}</p>
          <button
            onClick={actions.loadData}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            ลองใหม่อีกครั้ง
          </button>
        </div>
      </div>
    );
  }

  if (!viewModel) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {viewModel.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              {viewModel.hero.subtitle}
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={state.searchQuery}
                  onChange={(e) => actions.setSearchQuery(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && actions.handleSearch()
                  }
                  placeholder={viewModel.hero.searchPlaceholder}
                  className="w-full px-6 py-4 pl-14 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/50"
                />
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                <button
                  onClick={actions.handleSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
                >
                  ค้นหา
                </button>
              </div>
            </div>

            {/* Popular Searches */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="text-white/80 text-sm">ยอดนิยม:</span>
              {["ช่างภาพ", "Catering", "ตกแต่งงาน", "เต๊นท์", "DJ"].map(
                (tag) => (
                  <Link
                    key={tag}
                    href={`/search?q=${encodeURIComponent(tag)}`}
                    className="bg-white/20 hover:bg-white/30 px-4 py-1 rounded-full text-sm transition-colors"
                  >
                    {tag}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {viewModel.stats.totalVendors.toLocaleString()}+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                ผู้ให้บริการ
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {viewModel.stats.totalCategories}+
              </div>
              <div className="text-gray-600 dark:text-gray-400">หมวดหมู่</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">
                {viewModel.stats.completedEvents.toLocaleString()}+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                งานที่สำเร็จ
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                {viewModel.stats.happyCustomers.toLocaleString()}+
              </div>
              <div className="text-gray-600 dark:text-gray-400">ลูกค้า</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              หมวดหมู่บริการยอดนิยม
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              เลือกหมวดหมู่ที่คุณต้องการ
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {viewModel.featuredCategories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-2">
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {category.nameTh}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {category.vendorCount} ผู้ให้บริการ
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              ดูทุกหมวดหมู่
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Vendors */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ผู้ให้บริการแนะนำ
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              ผู้ให้บริการคุณภาพที่ได้รับความไว้วางใจ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {viewModel.featuredVendors.map((vendor) => (
              <Link
                key={vendor.id}
                href={`/vendors/${vendor.slug}`}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  {/* Cover Image */}
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative">
                    {vendor.verified && (
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        ยืนยันแล้ว
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {vendor.businessName}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {vendor.categoryName}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {vendor.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="font-semibold">{vendor.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          ({vendor.reviewCount} รีวิว)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          เริ่มต้นที่
                        </p>
                        <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                          ฿{vendor.startingPrice.toLocaleString()}
                        </p>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        📍 {vendor.location}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/browse"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              ดูผู้ให้บริการทั้งหมด
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              วิธีการใช้งาน
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              เริ่มต้นใช้งานง่ายๆ ใน 4 ขั้นตอน
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {viewModel.howItWorks.map((step) => (
              <div key={step.step} className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ลูกค้าพูดถึงเรา
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              ความประทับใจจากผู้ใช้งานจริง
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {viewModel.testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-1 mb-4 text-yellow-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.eventType}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            พร้อมเริ่มต้นจัดงานของคุณแล้วหรือยัง?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            เริ่มค้นหาผู้ให้บริการที่เหมาะสมวันนี้
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/browse"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              เริ่มค้นหาเลย
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/vendor/register"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              เป็นผู้ให้บริการ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
