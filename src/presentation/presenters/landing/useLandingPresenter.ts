"use client";

import { useCallback, useEffect, useState } from "react";
import { LandingViewModel, LandingPresenterFactory } from "./LandingPresenter";

// Initialize presenter instance once (singleton pattern)
const presenter = LandingPresenterFactory.createClient();

export interface LandingPresenterState {
  viewModel: LandingViewModel | null;
  loading: boolean;
  error: string | null;
  searchQuery: string;
}

export interface LandingPresenterActions {
  loadData: () => Promise<void>;
  setSearchQuery: (query: string) => void;
  handleSearch: () => void;
  setError: (error: string | null) => void;
}

/**
 * Custom hook for Landing presenter
 * Provides state management and actions for Landing page
 */
export function useLandingPresenter(
  initialViewModel?: LandingViewModel
): [LandingPresenterState, LandingPresenterActions] {
  const [viewModel, setViewModel] = useState<LandingViewModel | null>(
    initialViewModel || null
  );
  const [loading, setLoading] = useState(!initialViewModel);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  /**
   * Load data from presenter
   */
  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const newViewModel = await presenter.getViewModel();
      setViewModel(newViewModel);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      console.error("Error loading landing data:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Handle search
   */
  const handleSearch = useCallback(() => {
    if (searchQuery.trim()) {
      // Navigate to search page with query
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  }, [searchQuery]);

  // Load data on mount if no initial view model
  useEffect(() => {
    if (!initialViewModel) {
      loadData();
    }
  }, [initialViewModel, loadData]);

  return [
    {
      viewModel,
      loading,
      error,
      searchQuery,
    },
    {
      loadData,
      setSearchQuery,
      handleSearch,
      setError,
    },
  ];
}
