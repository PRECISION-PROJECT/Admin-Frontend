"use client";

import { useGetReportProducts } from "@/apis/reports";

export const useReportProductsContainer = () => {
  const { data, isLoading } = useGetReportProducts({});

  return {
    data,
    isLoading,
  };
};
