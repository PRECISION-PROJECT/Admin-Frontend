"use client";

import { useGetBlogDetail, useUpdateBlogMutation } from "@/apis/blogs";
import { useUploadFileMutation } from "@/apis/uploads";
import { handleToastError } from "@/utils/common";
import { ROUTES } from "@/utils/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  blogFormSchema,
  UpdateBlogFormData,
  defaultValues,
} from "./validation";
import { useEffect } from "react";

export const useUpdateBlogForm = (id: string) => {
  const router = useRouter();

  /** Queries and mutations */
  const { data: blogDetail, isLoading: isLoadingBlogDetail } = useGetBlogDetail(
    { id },
    {
      enabled: !!id,
    }
  );

  const updateBlogMutation = useUpdateBlogMutation();
  const uploadFileMutation = useUploadFileMutation();

  /** Memorized values */
  const isPending =
    isLoadingBlogDetail ||
    updateBlogMutation.isPending ||
    uploadFileMutation.isPending;

  const formMethods = useForm<UpdateBlogFormData>({
    resolver: zodResolver(blogFormSchema),
    defaultValues: defaultValues,
    mode: "onChange",
  });

  const uploadImage = async (image: File) => {
    try {
      const res = await uploadFileMutation.mutateAsync({ file: image });
      return res.file.path;
    } catch (error) {
      throw error;
    }
  };

  const onSubmit = async (data: UpdateBlogFormData) => {
    if (isPending) return;

    const {
      imageUrl,
      images,
      existedMainImage,
      existedAdditionalImages,
      ...rest
    } = data;
    try {
      const uploadMainImage = imageUrl
        ? await uploadImage(imageUrl[0])
        : blogDetail?.imageUrl ?? "";
      const uploadImages: string[] = images
        ? await Promise.all(images?.map((image: File) => uploadImage(image)))
        : blogDetail?.images ?? [];

      const updateBlogData = {
        ...rest,
        imageUrl: uploadMainImage,
        images: uploadImages,
        id,
      };
      await updateBlogMutation.mutateAsync(updateBlogData);
      toast.success("Blog updated successfully");
      router.push(ROUTES.BLOGS_LIST);
    } catch (error) {
      handleToastError(error);
    }
  };

  useEffect(() => {
    if (isLoadingBlogDetail) return;
    if (!blogDetail) {
      return formMethods.reset(defaultValues);
    }

    formMethods.reset({
      content: blogDetail.content,
      excerpt: blogDetail.excerpt,
      status: blogDetail.status as "published" | "draft" | "archived",
      slug: blogDetail.slug,
      metaTitle: blogDetail.metaTitle,
      metaDescription: blogDetail.metaDescription,
      keywords: blogDetail.keywords,
      sortOrder: blogDetail.sortOrder,
      isFeatured: blogDetail.isFeatured,
      existedMainImage: blogDetail.imageUrl,
      existedAdditionalImages: blogDetail.images,
      title: blogDetail.title,
      imageUrl: undefined,
      images: undefined,
      initialContent: blogDetail.content
    });
  }, [blogDetail, isLoadingBlogDetail]);

  return {
    formMethods,
    isPending,
    onSubmit,
  };
};
