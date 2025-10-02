"use client";

import {
  KEYS,
  useAddCategoryMutation,
  useGetCategoryTree,
} from "@/apis/categories";
import { useUploadFileMutation } from "@/apis/uploads";
import { queryClient } from "@/components/providers/QueryClientProvider";
import { handleToastError } from "@/utils/common";
import { ROUTES } from "@/utils/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
  categoryFormSchema,
  CreateCategoryFormData,
  defaultValues,
} from "./validation";

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
      return res.file.id;
    } catch (error) {
      handleToastError(error);
      return null;
    }
  };

  const onSubmit = async (data: CreateCategoryFormData) => {
    if (isPending) return;

    const { image, ...rest } = data;
    try {
      const imageId = await uploadImage(data.image[0].file!);
      if (!imageId) return;
      const addCategoryData = {
        ...rest,
        imageId,
        isActive: rest.isActive === "true" ? true : false,
      };
      await addCategoryMutation.mutateAsync(addCategoryData);
      queryClient.invalidateQueries({
        queryKey: [KEYS.CATEGORIES_LIST],
        exact: false,
      });
      toast.success("Category created successfully");
      setTimeout(() => {
        router.push(ROUTES.CATEGORY_LIST);
      }, 200);
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
