"use client";

import { useGetAllCategories } from "@/api/categories";
import { useMemo } from "react";

export const useCategories = () => {
  const { data: categories, isLoading, error } = useGetAllCategories();

  const categoryOptions = useMemo(() => {
    if (!categories) return [];
    
    return categories.map((category) => ({
      value: category.slug, // Use slug as value for type
      label: category.name,
    }));
  }, [categories]);

  const getCategoryIdByType = (type: string) => {
    if (!categories) return undefined;
    const category = categories.find(cat => cat.slug === type);
    return category?.id;
  };

  return {
    categories,
    categoryOptions,
    getCategoryIdByType,
    isLoading,
    error,
  };
};

