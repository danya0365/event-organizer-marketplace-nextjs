"use client";

import { useAuthStore } from "@/src/stores/authStore";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  type LoginViewModel,
  LoginPresenterFactory,
} from "./LoginPresenter";

const presenter = LoginPresenterFactory.createClient();

export interface LoginPresenterState {
  viewModel: LoginViewModel | null;
  formData: {
    email: string;
    password: string;
  };
  showPassword: boolean;
  loading: boolean;
  error: string | null;
}

export interface LoginPresenterActions {
  updateField: (field: "email" | "password", value: string) => void;
  togglePasswordVisibility: () => void;
  submit: () => Promise<void>;
  quickLogin: (email: string, password: string) => Promise<void>;
  clearError: () => void;
  reload: () => Promise<void>;
}

export function useLoginPresenter(
  initialViewModel?: LoginViewModel
): [LoginPresenterState, LoginPresenterActions] {
  const router = useRouter();
  const { login, isLoading } = useAuthStore();

  const [viewModel, setViewModel] = useState<LoginViewModel | null>(
    initialViewModel ?? null
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
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

    if (!formData.email || !formData.password) {
      setError("กรุณากรอกอีเมลและรหัสผ่าน");
      return;
    }

    try {
      await login(formData.email, formData.password);
      router.push("/");
      router.refresh();
    } catch (err) {
      const message = err instanceof Error ? err.message : "เกิดข้อผิดพลาด";
      setError(message);
    }
  }, [formData.email, formData.password, login, router]);

  const quickLogin = useCallback(
    async (email: string, password: string) => {
      setFormData({ email, password });
      setError(null);

      try {
        await login(email, password);
        router.push("/");
        router.refresh();
      } catch (err) {
        const message = err instanceof Error ? err.message : "เกิดข้อผิดพลาด";
        setError(message);
      }
    },
    [login, router]
  );

  useEffect(() => {
    if (!initialViewModel) {
      void loadViewModel();
    }
  }, [initialViewModel, loadViewModel]);

  const updateField = useCallback((field: "email" | "password", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const reload = useCallback(async () => {
    await loadViewModel();
  }, [loadViewModel]);

  const state: LoginPresenterState = useMemo(
    () => ({
      viewModel,
      formData,
      showPassword,
      loading: loadingViewModel || isLoading,
      error,
    }),
    [viewModel, formData, showPassword, loadingViewModel, isLoading, error]
  );

  const actions: LoginPresenterActions = useMemo(
    () => ({
      updateField,
      togglePasswordVisibility,
      submit,
      quickLogin,
      clearError,
      reload,
    }),
    [updateField, togglePasswordVisibility, submit, quickLogin, clearError, reload]
  );

  return [state, actions];
}
