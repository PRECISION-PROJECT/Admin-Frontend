"use client";

import { useGetProductDetail } from "@/apis/products";

export const useProductDetail = (id: string) => {
    const {data, isLoading}= useGetProductDetail(id, {
        enabled: !!id
    })
    return {
        data,
        isLoading
    }
}