"use client";

import { useGetOrderDetail } from "@/apis/orders/queries";

export const useOrderDetail = (id: string) => {
  const { data, isLoading } = useGetOrderDetail(id, {
    enabled: !!id,
  });
  return {
    data,
    isLoading,
  };
};
