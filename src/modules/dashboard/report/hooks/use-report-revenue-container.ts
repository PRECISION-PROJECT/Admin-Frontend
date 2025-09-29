"use client";

import { useGetReportRevenue } from "@/apis/reports";

export const useReportRevenueContainer = () => {
  const { data, isLoading } = useGetReportRevenue({});

  return {
    data,
    isLoading,
  };
};
