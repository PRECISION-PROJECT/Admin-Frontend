"use client";

import { useCreateBlogMutation } from "@/apis/blogs";
import { useUploadFileMutation } from "@/apis/uploads";
import { handleToastError } from "@/utils/common";
import { ROUTES } from "@/utils/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  blogFormSchema,
  CreateBlogFormData,
  defaultValues,
} from "./validation";

export const useCreateBlogForm = () => {
  const router = useRouter();

  /** Queries and mutations */
  const addBlogMutation = useCreateBlogMutation();
  const uploadFileMutation = useUploadFileMutation();

  /** Memorized values */
  const isPending = addBlogMutation.isPending || uploadFileMutation.isPending;

  const formMethods = useForm<CreateBlogFormData>({
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

  const onSubmit = async (data: CreateBlogFormData) => {
    if (isPending) return;

    const { imageUrl, images, ...rest } = data;
    try {
      const uploadMainImage = await uploadImage(imageUrl[0]);
      const uploadImages: string[] = images
        ? await Promise.all(images?.map((image: File) => uploadImage(image)))
        : [];

      const addBlogData = {
        ...rest,
        imageUrl: uploadMainImage,
        images: uploadImages,
      };
      await addBlogMutation.mutateAsync(addBlogData);
      toast.success("Blog created successfully");
      router.push(ROUTES.BLOGS_LIST);
    } catch (error) {
      handleToastError(error);
    }
  };

  return {
    formMethods,
    isPending,
    onSubmit,
  };
};
