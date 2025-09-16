"use client";

import { useCreateProductForm } from "./useCreateProductForm";
import { useCreateProduct } from "./useCreateProduct";
import { useCategories } from "./useCategories";
import { CreateProductFormData } from "./useCreateProductForm";

export const useCreateProductPage = () => {
  const { formMethods } = useCreateProductForm();
  const { createProduct, isLoading } = useCreateProduct();
  const { categoryOptions, getCategoryIdByType, isLoading: categoriesLoading } = useCategories();

  const onSubmit = async (data: CreateProductFormData) => {
    // Convert keywords string to array
    const keywordsArray = data.keywords 
      ? data.keywords.split(',').map(keyword => keyword.trim()).filter(keyword => keyword.length > 0)
      : [];

    // Get categoryId from type (slug)
    const categoryId = getCategoryIdByType(data.type);

    const productData = {
      ...data,
      categoryId, // Add categoryId from type mapping
      keywords: keywordsArray.length > 0 ? keywordsArray : undefined,
      // Remove empty strings and undefined values
      description: data.description || undefined,
      salePrice: data.salePrice || undefined,
      stockQuantity: data.stockQuantity || undefined,
      unit: data.unit || undefined,
      weight: data.weight || undefined,
      length: data.length || undefined,
      width: data.width || undefined,
      height: data.height || undefined,
      material: data.material || undefined,
      finish: data.finish || undefined,
      color: data.color || undefined,
      metaTitle: data.metaTitle || undefined,
      metaDescription: data.metaDescription || undefined,
      sortOrder: 0, // Default sort order
      isFeatured: data.isFeatured || false,
    };

    await createProduct(productData);
  };

  const onSaveDraft = async () => {
    const data = formMethods.getValues();
    const draftData = {
      ...data,
      status: "inactive", // Save as draft with inactive status
    };
    await onSubmit(draftData);
  };

  return {
    formMethods,
    categoryOptions,
    isLoading,
    categoriesLoading,
    onSubmit,
    onSaveDraft,
  };
};
