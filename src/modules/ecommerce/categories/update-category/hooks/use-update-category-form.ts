"use client";

import {
  useGetCategoryDetail,
  useGetCategoryTree,
  useUpdateCategoryMutation,
} from "@/apis/categories";
import { useUploadFileMutation } from "@/apis/uploads";
import { EMedia } from "@/constants/common.enum";
import { IMedia } from "@/types";
import { handleToastError } from "@/utils/common";
import { ROUTES } from "@/utils/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  UpdateCategoryFormData,
  updateCategoryFormSchema,
  updateDefaultValues,
} from "./validation";

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
    mode: "onChange",
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
      return "";
    }
  };

  const generateImageUrl = async (images: IMedia[]) => {
    const newImages = images?.filter((m) => m.file) ?? [];
    const existingImages = images?.filter((m) => !m.file) ?? [];

    let uploadedUrls: string[] = [];
    if (newImages.length) {
      uploadedUrls = await Promise.all(
        newImages.map((media) => uploadImage(media.file!))
      );
    }

    const finalImages = [
      ...existingImages.map((m) => m.id),
      ...uploadedUrls.filter(Boolean),
    ];

    return finalImages;
  };

  const onSubmit = async (data: UpdateCategoryFormData) => {
    if (isPending) return;

    const { image, ...rest } = data;
    try {
      const uploadedImage = await generateImageUrl(image);
      const imageId = uploadedImage[0];
      if (!imageId) return;

      const updateCategoryData = {
        ...rest,
        imageId,
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

    let existingImages: IMedia[] = [];
    if (categoryDetail?.image) {
      existingImages.push({
        id: categoryDetail?.image?.id,
        url: categoryDetail?.image?.path ?? "",
        type: EMedia.Image,
        file: null,
      });
    }

    formMethods.reset({
      name: categoryDetail.name,
      description: categoryDetail.description,
      parentId: categoryDetail.parentId ?? "",
      slug: categoryDetail.slug,
      sortOrder: categoryDetail.sortOrder,
      isActive: categoryDetail.isActive ? "true" : "false",
      imageUrl: existingImages[0]?.url ?? "https://placehold.co/600x400",
      image: existingImages,
    });
  }, [isLoadingCategoryDetail, JSON.stringify(categoryDetail)]);

  return {
    formMethods,
    categoryOptions,
    isPending,
    onSubmit,
  };
};
