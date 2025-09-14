"use client";

import { useGetUserMetric } from "@/api/user";

export const useUserAccountMetric = () => {
  const { data, isLoading } = useGetUserMetric();
  return {
    isLoading,
    userData: data?.data,
  };
};
