"use client";

import { KEYS, useGetBlogDetail, useUpdateBlogMutation } from "@/apis/blogs";
import { useUploadFileMutation } from "@/apis/uploads";
import { queryClient } from "@/components/providers/QueryClientProvider";
import { EMedia } from "@/constants/common.enum";
import { IMedia } from "@/types";
import { handleToastError } from "@/utils/common";
import { ROUTES } from "@/utils/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  blogFormSchema,
  defaultValues,
  UpdateBlogFormData,
} from "./validation";

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
      return res.file.id;
    } catch (error) {
      throw error;
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
      ...existingImages.map((m) => m.id as string),
      ...uploadedUrls.filter(Boolean),
    ];

    return finalImages;
  };

  const onSubmit = async (data: UpdateBlogFormData) => {
    if (isPending || !id) return;

    const {
      imageUrl,
      images,
      existedMainImage,
      existedAdditionalImages,
      ...rest
    } = data;
    try {
      const uploadedImage = await generateImageUrl(imageUrl!);
      const uploadImages = await generateImageUrl(images!);

      const updateBlogData = {
        ...rest,
        primaryImageId: uploadedImage[0],
        imageIds: uploadImages,
        id,
      };
      await updateBlogMutation.mutateAsync(updateBlogData);
      queryClient.invalidateQueries({
        queryKey: [KEYS.BLOG_LIST],
        exact: false,
      });
      toast.success("Blog updated successfully");
      setTimeout(() => {
        router.push(ROUTES.BLOGS_LIST);
      }, 200);
    } catch (error) {
      handleToastError(error);
    }
  };

  useEffect(() => {
    if (isLoadingBlogDetail) return;
    if (!blogDetail) {
      return formMethods.reset(defaultValues);
    }

    let images = [],
      imageUrl = [];
    if (blogDetail.primaryImage) {
      imageUrl.push({
        id: blogDetail.primaryImage?.id,
        url: blogDetail.primaryImage?.path ?? "",
        type: EMedia.Image,
        file: null,
      });
    }
    if (blogDetail.images) {
      images.push(
        ...blogDetail.images.map((image) => ({
          id: image.id,
          url: image.path ?? "",
          type: EMedia.Image,
          file: null,
        }))
      );
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
      existedMainImage: blogDetail.primaryImage,
      existedAdditionalImages: blogDetail.images,
      title: blogDetail.title,
      imageUrl,
      images,
      initialContent: blogDetail.content,
    });
  }, [blogDetail, isLoadingBlogDetail]);

  return {
    formMethods,
    isPending,
    onSubmit,
  };
};
