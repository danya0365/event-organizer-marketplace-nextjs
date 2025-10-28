"use client";

import { useAuthStore, type UserRole } from "@/src/stores/authStore";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  type RegisterViewModel,
  RegisterPresenterFactory,
} from "./RegisterPresenter";

const presenter = RegisterPresenterFactory.createClient();

type FormData = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
  agreeToTerms: boolean;
};

export interface RegisterPresenterState {
  viewModel: RegisterViewModel | null;
  formData: FormData;
  showPassword: boolean;
  showConfirmPassword: boolean;
  loading: boolean;
  error: string | null;
}

export interface RegisterPresenterActions {
  updateField: (field: keyof FormData, value: string | boolean) => void;
  setRole: (role: UserRole) => void;
  togglePasswordVisibility: () => void;
  toggleConfirmPasswordVisibility: () => void;
  submit: () => Promise<void>;
  clearError: () => void;
  reload: () => Promise<void>;
}

export function useRegisterPresenter(
  initialViewModel?: RegisterViewModel
): [RegisterPresenterState, RegisterPresenterActions] {
  const router = useRouter();
  const { register, isLoading } = useAuthStore();

  const [viewModel, setViewModel] = useState<RegisterViewModel | null>(
    initialViewModel ?? null
  );
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "customer",
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loadingViewModel, setLoadingViewModel] = useState(!initialViewModel);
  const [error, setError] = useState<string | null>(null);

  const loadViewModel = useCallback(async () => {
    setLoadingViewModel(true);
    setError(null);

    try {
      const model = await presenter.getViewModel();
      setViewModel(model);
    } catch (err) {
      const message = err instanceof Error ? err.message : "เกิดข้อผิดพลาด";
      setError(message);
    } finally {
      setLoadingViewModel(false);
    }
  }, []);

  const submit = useCallback(async () => {
    setError(null);

    if (!formData.name || !formData.email || !formData.password) {
      setError("กรุณากรอกข้อมูลให้ครบถ้วน");
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

    if (!formData.agreeToTerms) {
      setError("กรุณายอมรับข้อกำหนดและเงื่อนไข");
      return;
    }

    try {
      await register({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        role: formData.role,
      });

      router.push("/");
      router.refresh();
    } catch (err) {
      const message = err instanceof Error ? err.message : "เกิดข้อผิดพลาด";
      setError(message);
    }
  }, [formData, register, router]);

  useEffect(() => {
    if (!initialViewModel) {
      void loadViewModel();
    }
  }, [initialViewModel, loadViewModel]);

  const updateField = useCallback((field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setError(null);
  }, []);

  const setRole = useCallback((role: UserRole) => {
    setFormData((prev) => ({
      ...prev,
      role,
    }));
    setError(null);
  }, []);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const toggleConfirmPasswordVisibility = useCallback(() => {
    setShowConfirmPassword((prev) => !prev);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const reload = useCallback(async () => {
    await loadViewModel();
  }, [loadViewModel]);

  const state: RegisterPresenterState = useMemo(
    () => ({
      viewModel,
      formData,
      showPassword,
      showConfirmPassword,
      loading: loadingViewModel || isLoading,
      error,
    }),
    [viewModel, formData, showPassword, showConfirmPassword, loadingViewModel, isLoading, error]
  );

  const actions: RegisterPresenterActions = useMemo(
    () => ({
      updateField,
      setRole,
      togglePasswordVisibility,
      toggleConfirmPasswordVisibility,
      submit,
      clearError,
      reload,
    }),
    [updateField, setRole, togglePasswordVisibility, toggleConfirmPasswordVisibility, submit, clearError, reload]
  );

  return [state, actions];
}
