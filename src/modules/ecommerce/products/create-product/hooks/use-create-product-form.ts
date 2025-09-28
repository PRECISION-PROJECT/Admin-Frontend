"use client";

import { useGetCategoryTree } from "@/apis/categories";
import { CreateProductRequest, useCreateProductMutation } from "@/apis/products";
import { useUploadFileMutation } from "@/apis/uploads";
import { handleToastError } from "@/utils/common";
import { ROUTES } from "@/utils/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import _ from "lodash";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  CreateProductFormData,
  defaultValues,
  productFormSchema,
} from "./validation";

export const useCreateProductForm = () => {
  const router = useRouter();

  /** Queries and mutations */
  const { data } = useGetCategoryTree();
  const addProductMutation = useCreateProductMutation();
  const uploadFileMutation = useUploadFileMutation();

  /** Memorized values */
  const isPending =
    addProductMutation.isPending || uploadFileMutation.isPending;

  const formMethods = useForm<CreateProductFormData>({
    resolver: zodResolver(productFormSchema),
    defaultValues: defaultValues,
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

  const memorizedCategories = useMemo(() => {
    if (!data || data.length === 0) {
      return {
        categoryOptions: [],
        groupCategoryById: {},
      };
    }

    const categoryOptions = data?.map((category) => ({
      value: category.id,
      label: category.name,
      disabled: false,
    }));
    const groupCategoryById = _.mapValues(_.keyBy(data, "id"), "slug");
    return {
      categoryOptions,
      groupCategoryById,
    };
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

  const onSubmit = async (data: CreateProductFormData) => {
    if (isPending) return;

    const { imageUrl, images, ...rest } = data;

    try {
      const uploadMainImage = await uploadImage(imageUrl[0]);
      if (!uploadMainImage) return;
      const uploadImages = images
        ? await Promise.all(images?.map((image: File) => uploadImage(image)))
        : [];
      const payload = {
        ...rest,
        imageUrl: uploadMainImage,
        images: uploadImages,
        type: memorizedCategories.groupCategoryById[rest.categoryId],
      } as CreateProductRequest;
      await addProductMutation.mutateAsync(payload);
      toast.success("Product created successfully, redirecting to product list");
      setTimeout(() => {
        router.push(ROUTES.PRODUCT_LIST);
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
