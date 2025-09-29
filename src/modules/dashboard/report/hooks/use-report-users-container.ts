"use client";

import { useGetReportUsers } from "@/apis/reports";

export const useReportUsersContainer = () => {
  const { data, isLoading } = useGetReportUsers({});

  return {
    data,
    isLoading,
  };
};
