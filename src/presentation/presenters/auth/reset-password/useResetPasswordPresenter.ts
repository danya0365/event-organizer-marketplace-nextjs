"use client";

import { useAuthStore } from "@/src/stores/authStore";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  type ResetPasswordViewModel,
  ResetPasswordPresenterFactory,
} from "./ResetPasswordPresenter";

const presenter = ResetPasswordPresenterFactory.createClient();

interface ResetPasswordForm {
  password: string;
  confirmPassword: string;
}

interface ResetPasswordPresenterState {
  viewModel: ResetPasswordViewModel | null;
  formData: ResetPasswordForm;
  showPassword: boolean;
  showConfirmPassword: boolean;
  loading: boolean;
  error: string | null;
  success: boolean;
}

interface ResetPasswordPresenterActions {
  updateField: (field: keyof ResetPasswordForm, value: string) => void;
  toggleShowPassword: () => void;
  toggleShowConfirmPassword: () => void;
  submit: () => Promise<void>;
  clearError: () => void;
}

export function useResetPasswordPresenter(
  token: string,
  initialViewModel?: ResetPasswordViewModel
): [ResetPasswordPresenterState, ResetPasswordPresenterActions] {
  const router = useRouter();
  const { resetPassword, isLoading } = useAuthStore();

  const [viewModel, setViewModel] = useState<ResetPasswordViewModel | null>(
    initialViewModel ?? null
  );
  const [formData, setFormData] = useState<ResetPasswordForm>({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const loadViewModel = useCallback(async () => {
    if (!token) {
      setViewModel(null);
      setError("ลิงก์หมดอายุหรือไม่ถูกต้อง");
      return;
    }

    try {
      const model = await presenter.getViewModel(token);
      setViewModel(model);
    } catch (err) {
      const message = err instanceof Error ? err.message : "เกิดข้อผิดพลาด";
      setError(message);
    }
  }, [token]);

  const submit = useCallback(async () => {
    if (!token) {
      setError("ลิงก์หมดอายุหรือไม่ถูกต้อง");
      return;
    }

    if (!formData.password || !formData.confirmPassword) {
      setError("กรุณากรอกรหัสผ่านให้ครบถ้วน");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("รหัสผ่านไม่ตรงกัน");
      return;
    }

    if (formData.password.length < 6) {
      setError("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร");
      return;
    }

    try {
      setError(null);
      await resetPassword(token, formData.password);
      setSuccess(true);
      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
    } catch (err) {
      const message = err instanceof Error ? err.message : "เกิดข้อผิดพลาด";
      setError(message);
    }
  }, [formData.confirmPassword, formData.password, resetPassword, router, token]);

  useEffect(() => {
    if (!initialViewModel) {
      void loadViewModel();
    }
  }, [initialViewModel, loadViewModel]);

  const state: ResetPasswordPresenterState = useMemo(
    () => ({
      viewModel,
      formData,
      showPassword,
      showConfirmPassword,
      loading: isLoading,
      error,
      success,
    }),
    [error, formData, isLoading, showConfirmPassword, showPassword, success, viewModel]
  );

  const actions: ResetPasswordPresenterActions = useMemo(
    () => ({
      updateField: (field, value) => {
        setFormData((prev) => ({
          ...prev,
          [field]: value,
        }));
      },
      toggleShowPassword: () => setShowPassword((prev) => !prev),
      toggleShowConfirmPassword: () =>
        setShowConfirmPassword((prev) => !prev),
      submit,
      clearError: () => setError(null),
    }),
    [submit]
  );

  return [state, actions];
}
