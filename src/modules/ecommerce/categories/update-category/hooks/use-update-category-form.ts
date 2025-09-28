"use client";

import {
  useGetCategoryDetail,
  useGetCategoryTree,
  useUpdateCategoryMutation,
} from "@/apis/categories";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import {
  updateCategoryFormSchema,
  UpdateCategoryFormData,
  updateDefaultValues,
} from "./validation";
import { useUploadFileMutation } from "@/apis/uploads";
import { useRouter } from "next/navigation";
import { handleToastError } from "@/utils/common";
import { ROUTES } from "@/utils/routes";
import { toast } from "sonner";

export const useUpdateCategoryForm = (id: string) => {
  const router = useRouter();

  /** Queries and mutations */
  const { data } = useGetCategoryTree();
  const { data: categoryDetail, isLoading: isLoadingCategoryDetail } =
    useGetCategoryDetail(id, {
      enabled: !!id,
    });
  const updateCategoryMutation = useUpdateCategoryMutation();
  const uploadFileMutation = useUploadFileMutation();

  /** Memorized values */
  const isPending =
    updateCategoryMutation.isPending ||
    uploadFileMutation.isPending ||
    isLoadingCategoryDetail;

  const formMethods = useForm<UpdateCategoryFormData>({
    resolver: zodResolver(updateCategoryFormSchema),
    defaultValues: updateDefaultValues,
    mode: "onChange"
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

  const onSubmit = async (data: UpdateCategoryFormData) => {
    if (isPending) return;

    const { image, ...rest } = data;
    try {
      const imageUrl = !image ? rest.imageUrl : await uploadImage(image[0]);
      if (!imageUrl) return;

      const updateCategoryData = {
        ...rest,
        imageUrl,
        isActive: rest.isActive === "true" ? true : false,
        id,
      };
      await updateCategoryMutation.mutateAsync(updateCategoryData);
      toast.success("Category updated successfully");
      router.push(ROUTES.CATEGORY_LIST);
    } catch (error) {
      handleToastError(error);
    }
  };

  useEffect(() => {
    if (isLoadingCategoryDetail) return;

    if (!categoryDetail) {
      handleToastError(
        "This category is not found, redirecting to category list"
      );
      router.push(ROUTES.CATEGORY_LIST);
      return;
    }

    formMethods.reset({
      name: categoryDetail.name,
      description: categoryDetail.description,
      parentId: categoryDetail.parentId ?? "",
      slug: categoryDetail.slug,
      sortOrder: categoryDetail.sortOrder,
      isActive: categoryDetail.isActive ? "true" : "false",
      imageUrl: categoryDetail.imageUrl ?? "https://placehold.co/600x400",
    });
  }, [isLoadingCategoryDetail, JSON.stringify(categoryDetail)]);

  return {
    formMethods,
    categoryOptions,
    isPending,
    onSubmit,
  };
};
