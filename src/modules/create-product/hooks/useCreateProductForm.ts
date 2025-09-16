"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const createProductSchema = z.object({
  name: z.string().min(1, "Product name is required").max(255, "Product name must be less than 255 characters"),
  description: z.string().optional(),
  price: z.coerce.number().min(0, "Price must be greater than or equal to 0"),
  salePrice: z.coerce.number().min(0, "Sale price must be greater than or equal to 0").optional(),
  sku: z.string().min(1, "SKU is required").max(100, "SKU must be less than 100 characters"),
  type: z.string().min(1, "Product type is required"),
  status: z.string().min(1, "Status is required"),
  stockQuantity: z.coerce.number().min(0, "Stock quantity must be greater than or equal to 0").optional(),
  unit: z.string().max(50, "Unit must be less than 50 characters").optional(),
  weight: z.coerce.number().min(0, "Weight must be greater than or equal to 0").optional(),
  length: z.coerce.number().min(0, "Length must be greater than or equal to 0").optional(),
  width: z.coerce.number().min(0, "Width must be greater than or equal to 0").optional(),
  height: z.coerce.number().min(0, "Height must be greater than or equal to 0").optional(),
  material: z.string().max(100, "Material must be less than 100 characters").optional(),
  finish: z.string().max(100, "Finish must be less than 100 characters").optional(),
  color: z.string().max(100, "Color must be less than 100 characters").optional(),
  slug: z.string().min(1, "Slug is required").max(255, "Slug must be less than 255 characters"),
  metaTitle: z.string().max(255, "Meta title must be less than 255 characters").optional(),
  metaDescription: z.string().max(500, "Meta description must be less than 500 characters").optional(),
  keywords: z.string().optional(),
  isFeatured: z.boolean().optional(),
});

export type CreateProductFormData = z.infer<typeof createProductSchema>;

export const useCreateProductForm = () => {
  const formMethods = useForm<CreateProductFormData>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      salePrice: undefined,
      sku: "",
      type: "moulding",
      status: "active",
      stockQuantity: 0,
      unit: "",
      weight: undefined,
      length: undefined,
      width: undefined,
      height: undefined,
      material: "",
      finish: "",
      color: "",
      slug: "",
      metaTitle: "",
      metaDescription: "",
      keywords: "",
      isFeatured: false,
    },
  });

  return {
    formMethods,
  };
};

