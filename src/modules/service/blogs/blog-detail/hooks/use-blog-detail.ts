"use client";

import { useGetBlogDetail } from "@/apis/blogs";

export const useBlogDetail = (id: string) => {
  const { data, isLoading } = useGetBlogDetail(
    { id },
    {
      enabled: !!id,
    }
  );
  return {
    data,
    isLoading,
  };
};
