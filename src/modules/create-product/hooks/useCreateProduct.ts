"use client";

import { useCreateProduct as useCreateProductAPI } from "@/api/products";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { CreateProductParams } from "@/api/products/request.dto";
import { TErrorResponse } from "@/types";

export const useCreateProduct = () => {
  const router = useRouter();
  const createProductMutation = useCreateProductAPI();

  const handleCreateProduct = async (data: CreateProductParams) => {
    try {
      await createProductMutation.mutateAsync(data);
      toast.success("Product created successfully!");
      router.push("/products");
    } catch (error) {
      const msg = (error as unknown as TErrorResponse).errors?.message;
      toast.error("Failed to create product", {
        description: msg,
      });
    }
  };

  return {
    createProduct: handleCreateProduct,
    isLoading: createProductMutation.isPending,
    error: createProductMutation.error,
  };
};

