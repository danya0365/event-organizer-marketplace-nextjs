"use client";

import { useAuthStore } from "@/src/stores/authStore";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  type ForgotPasswordViewModel,
  ForgotPasswordPresenterFactory,
} from "./ForgotPasswordPresenter";

const presenter = ForgotPasswordPresenterFactory.createClient();

export interface ForgotPasswordPresenterState {
  viewModel: ForgotPasswordViewModel | null;
  email: string;
  loading: boolean;
  error: string | null;
  success: boolean;
}

export interface ForgotPasswordPresenterActions {
  updateEmail: (value: string) => void;
  submit: () => Promise<void>;
  clearError: () => void;
  reload: () => Promise<void>;
}

export function useForgotPasswordPresenter(
  initialViewModel?: ForgotPasswordViewModel
): [ForgotPasswordPresenterState, ForgotPasswordPresenterActions] {
  const { forgotPassword, isLoading } = useAuthStore();

  const [viewModel, setViewModel] = useState<ForgotPasswordViewModel | null>(
    initialViewModel ?? null
  );
  const [email, setEmail] = useState("");
  const [loadingViewModel, setLoadingViewModel] = useState(!initialViewModel);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

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
    if (!email) {
      setError("กรุณากรอกอีเมล");
      return;
    }

    try {
      setError(null);
      setSuccess(false);
      await forgotPassword(email);
      setSuccess(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : "เกิดข้อผิดพลาด";
      setError(message);
    }
  }, [email, forgotPassword]);

  useEffect(() => {
    if (!initialViewModel) {
      void loadViewModel();
    }
  }, [initialViewModel, loadViewModel]);

  const updateEmail = useCallback((value: string) => {
    setEmail(value);
    setSuccess(false);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const reload = useCallback(async () => {
    await loadViewModel();
  }, [loadViewModel]);

  const state: ForgotPasswordPresenterState = useMemo(
    () => ({
      viewModel,
      email,
      loading: loadingViewModel || isLoading,
      error,
      success,
    }),
    [viewModel, email, loadingViewModel, isLoading, error, success]
  );

  const actions: ForgotPasswordPresenterActions = useMemo(
    () => ({
      updateEmail,
      submit,
      clearError,
      reload,
    }),
    [updateEmail, submit, clearError, reload]
  );

  return [state, actions];
}
