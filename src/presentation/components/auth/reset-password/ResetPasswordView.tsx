"use client";

import Link from "next/link";
import { Eye, EyeOff, Lock } from "lucide-react";
import { FormEvent } from "react";
import { useResetPasswordPresenter } from "@/src/presentation/presenters/auth/reset-password/useResetPasswordPresenter";
import type { ResetPasswordViewModel } from "@/src/presentation/presenters/auth/reset-password/ResetPasswordPresenter";

interface ResetPasswordViewProps {
  token: string;
  initialViewModel?: ResetPasswordViewModel;
}

export function ResetPasswordView({ token, initialViewModel }: ResetPasswordViewProps) {
  const [state, actions] = useResetPasswordPresenter(token, initialViewModel);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    actions.clearError();
    void actions.submit();
  };

  if (!state.viewModel && !state.loading && state.error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4 py-12">
        <div className="text-center bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">ลิงก์ไม่ถูกต้อง</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">ไม่สามารถตั้งรหัสผ่านใหม่ได้ กรุณาขออีเมลลิงก์ใหม่อีกครั้ง</p>
          <Link href="/auth/forgot-password" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors inline-block">
            ขอรหัสผ่านใหม่
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">ตั้งรหัสผ่านใหม่</h1>

          {state.error && (
            <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-sm text-red-600 dark:text-red-400">{state.error}</p>
            </div>
          )}

          {state.success && (
            <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="text-sm text-green-600 dark:text-green-400">เปลี่ยนรหัสผ่านสำเร็จ กำลังนำคุณไปหน้าเข้าสู่ระบบ...</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">รหัสผ่านใหม่</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={state.showPassword ? "text" : "password"}
                  value={state.formData.password}
                  onChange={(event) =>
                    actions.updateField("password", event.target.value)
                  }
                  required
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={actions.toggleShowPassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {state.showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">ยืนยันรหัสผ่านใหม่</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={state.showConfirmPassword ? "text" : "password"}
                  value={state.formData.confirmPassword}
                  onChange={(event) =>
                    actions.updateField("confirmPassword", event.target.value)
                  }
                  required
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={actions.toggleShowConfirmPassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {state.showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={state.loading}
              className="w-full py-3 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all disabled:opacity-50"
            >
              {state.loading ? "กำลังบันทึก..." : "บันทึกรหัสผ่านใหม่"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            <Link href="/auth/login" className="text-blue-600 dark:text-blue-400 hover:underline">
              ← กลับไปหน้าเข้าสู่ระบบ
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
