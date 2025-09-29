"use client";

import { useGetReportDashboard } from "@/apis/reports";

export const useReportDashboardContainer = () => {
  const { data, isLoading } = useGetReportDashboard({});

  return {
    data: data,
    isLoading,
  };
};
