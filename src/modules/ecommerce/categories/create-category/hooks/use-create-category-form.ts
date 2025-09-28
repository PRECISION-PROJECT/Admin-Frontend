"use client";

import { useAddCategoryMutation, useGetCategoryTree } from "@/apis/categories";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  categoryFormSchema,
  CreateCategoryFormData,
  defaultValues,
} from "./validation";
import { useUploadFileMutation } from "@/apis/uploads";
import { useRouter } from "next/navigation";
import { handleToastError } from "@/utils/common";
import { ROUTES } from "@/utils/routes";
import { toast } from "sonner";

export const useCreateCategoryForm = () => {
  const router = useRouter();

  /** Queries and mutations */
  const { data, isLoading: isLoadingCategoryTree } = useGetCategoryTree();
  const addCategoryMutation = useAddCategoryMutation();
  const uploadFileMutation = useUploadFileMutation();

  /** Memorized values */
  const isPending =
    addCategoryMutation.isPending || uploadFileMutation.isPending;

  const formMethods = useForm<CreateCategoryFormData>({
    resolver: zodResolver(categoryFormSchema),
    defaultValues: defaultValues,
  });

  const categoryOptions = useMemo(() => {
    if (!data || data.length === 0) return [];
    return data?.map((category) => ({
      value: category.id,
      label: category.name,
      disabled: false,
    }));
  }, [data]);

  const uploadImage = async (image: File) => {
    try {
      const res = await uploadFileMutation.mutateAsync({ file: image });
      return res.file.path;
    } catch (error) {
      handleToastError(error);
      return null;
    }
  };

  const onSubmit = async (data: CreateCategoryFormData) => {
    if (isPending) return;

    const { image, ...rest } = data;
    try {
      const imageUrl = await uploadImage(data.image[0]);
      if (!imageUrl) return;

      const addCategoryData = {
        ...rest,
        imageUrl,
        isActive: rest.isActive === "true" ? true : false,
      };
      await addCategoryMutation.mutateAsync(addCategoryData);
      toast.success("Category created successfully");
      router.push(ROUTES.CATEGORY_LIST);
    } catch (error) {
      handleToastError(error);
    }
  };

  return {
    formMethods,
    categoryOptions,
    isPending,
    onSubmit,
  };
};
