"use client";

import { useGetReportOrders } from "@/apis/reports";

export const useReportOrdersContainer = () => {
  const { data, isLoading } = useGetReportOrders({});

  return {
    data,
    isLoading,
  };
};
