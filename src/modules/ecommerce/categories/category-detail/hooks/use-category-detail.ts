"use client";

import { useGetCategoryDetail } from "@/apis/categories";

export const useCategoryDetail = (id: string) => {
    const {data, isLoading}= useGetCategoryDetail(id, {
        enabled: !!id
    })
    console.log("🚀 ~ useCategoryDetail ~ data:", data)
    return {
        data,
        isLoading
    }
}