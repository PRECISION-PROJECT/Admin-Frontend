"use client";

import { useGetCategoryTree } from "@/apis/categories";
import {
  KEYS,
  UpdateProductRequest,
  useGetProductDetail,
  useUpdateProductMutation,
} from "@/apis/products";
import { useUploadFileMutation } from "@/apis/uploads";
import { queryClient } from "@/components/providers/QueryClientProvider";
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
  UpdateProductFormData,
  defaultValues,
  productFormSchema,
} from "./validation";

type Props = {
  id: string;
};

export const useUpdateProductForm = ({ id }: Props) => {
  const router = useRouter();

  /** Queries and mutations */
  const { data } = useGetCategoryTree();
  const { data: productDetail, isLoading } = useGetProductDetail(id, {
    enabled: !!id,
  });
  const updateProductMutation = useUpdateProductMutation();
  const uploadFileMutation = useUploadFileMutation();

  /** Memorized values */
  const isPending =
    isLoading ||
    updateProductMutation.isPending ||
    uploadFileMutation.isPending;

  const formMethods = useForm<UpdateProductFormData>({
    resolver: zodResolver(productFormSchema),
    defaultValues: defaultValues,
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

  const memorizedCategories = useMemo(() => {
    if (!data || data.length === 0) {
      return {
        categoryOptions: [],
        groupCategoryById: {} as Record<string, string>,
      };
    }

    const categoryOptions = data.map((category) => ({
      value: category.id,
      label: category.name,
      disabled: false,
    }));
    const groupCategoryById = data.reduce<Record<string, string>>(
      (accumulator, category) => {
        if (category?.id) {
          accumulator[category.id] = category.slug ?? "";
        }
        return accumulator;
      },
      {}
    );
    return {
      categoryOptions,
      groupCategoryById,
    };
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

  const onSubmit = async (data: UpdateProductFormData) => {
    if (isPending || !id) return;

    const { imageUrl, images, ...rest } = data;

    try {
      const uploadedImage = await generateImageUrl(imageUrl!);
      const uploadImages = await generateImageUrl(images!);

      const payload = {
        ...rest,
        id,
        primaryImageId: uploadedImage[0],
        imageIds: uploadImages,
        type: memorizedCategories.groupCategoryById[rest.categoryId],
      } as UpdateProductRequest;
      await updateProductMutation.mutateAsync(payload);
      queryClient.invalidateQueries({
        queryKey: [KEYS.PRODUCTS_LIST],
        exact: false,
      });
      toast.success("Product update successfully, redirecting to product list");
      setTimeout(() => {
        router.push(ROUTES.PRODUCT_LIST);
      }, 200);
    } catch (error) {
      handleToastError(error);
    }
  };

  useEffect(() => {
    if (isLoading) return;

    if (!productDetail) {
      handleToastError(
        "This product is not found, redirecting to product list"
      );
      router.push(ROUTES.PRODUCT_LIST);
      return;
    }

    let existingImage: IMedia[] = [],
      existedImages: IMedia[] = [];
    if (productDetail?.primaryImage) {
      existingImage.push({
        id: productDetail?.primaryImage?.id,
        url: productDetail?.primaryImage?.path ?? "",
        type: EMedia.Image,
        file: null,
      });
    }

    if (productDetail?.images) {
      existedImages.push(
        ...productDetail?.images.map((image) => ({
          id: image.id,
          url: image.path ?? "",
          type: EMedia.Image,
          file: null,
        }))
      );
    }

    formMethods.reset({
      name: productDetail?.name ?? "",
      description: productDetail?.description ?? "",
      price: Number(productDetail?.price ?? 0),
      sku: productDetail?.sku ?? "",
      type: productDetail?.type ?? "",
      categoryId: productDetail?.categoryId ?? "",
      stockQuantity: productDetail?.stockQuantity ?? 0,
      unit: productDetail?.unit ?? "",
      weight: Number(productDetail?.weight ?? 0),
      length: Number(productDetail?.length ?? 0),
      width: Number(productDetail?.width ?? 0),
      height: Number(productDetail?.height ?? 0),
      material: productDetail?.material ?? "",
      finish: productDetail?.finish ?? "",
      color: productDetail?.color ?? "",
      slug: productDetail?.slug ?? "",
      metaTitle: productDetail?.metaTitle ?? "",
      metaDescription: productDetail?.metaDescription ?? "",
      keywords: productDetail?.keywords ?? [],
      sortOrder: productDetail?.sortOrder ?? 0,
      isFeatured: productDetail?.isFeatured ?? "true",
      existingImage: existingImage[0],
      existedImages: existedImages,
      status: (productDetail?.status as "active" | "inactive") ?? "inactive",
      images: existedImages,
      imageUrl: existingImage,
    });
  }, [productDetail, isLoading]);

  return {
    formMethods,
    categoryOptions,
    isPending,
    onSubmit,
  };
};
