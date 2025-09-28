import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const productFormSchema = z.object({
  imageUrl: z
    .any()
    .refine((files) => files?.length >= 1, "Image is required.")
    .refine((files) => files?.length <= 1, "Only 1 image is allowed.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
  images: z
    .any()
    .optional()
    .refine(
      (files) => !files || files?.length <= 4,
      "Maximum 4 images allowed."
    )
    .refine(
      (files) =>
        !files || files.every((file: any) => file?.size <= MAX_FILE_SIZE),
      `Each image must be 5MB or less.`
    )
    .refine(
      (files) =>
        !files ||
        files.every((file: any) => ACCEPTED_IMAGE_TYPES.includes(file?.type)),
      "Only .jpg, .jpeg, .png and .webp files are accepted."
    ),
  name: z.string().min(3, "Product name must be at least 3 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  price: z.number().min(1, "Price must be at least $1"),
  salePrice: z.number().min(1, "Sale price must be at least $1").optional(),
  sku: z.string().min(3, "SKU must be at least 3 characters"),
  type: z.string(),
  status: z.enum(["active", "inactive"]),
  categoryId: z.string().min(1, "Category is required"),
  stockQuantity: z.number().min(1, "Stock quantity must be at least 1"),
  unit: z.string().min(2, "Unit must be at least 2 characters"),
  weight: z.number().min(0.1, "Weight must be at least 0.1").optional(),
  length: z.number().min(0.1, "Length must be at least 0.1").optional(),
  width: z.number().min(0.1, "Width must be at least 0.1").optional(),
  height: z.number().min(0.1, "Height must be at least 0.1").optional(),
  material: z.string().min(2, "Material must be at least 2 characters"),
  finish: z.string().min(2, "Finish must be at least 2 characters"),
  color: z.string().min(2, "Color must be at least 2 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  metaTitle: z.string().min(10, "Meta title must be at least 10 characters"),
  metaDescription: z.string().min(20, "Meta description must be at least 20 characters"),
  keywords: z.array(z.string()),
  sortOrder: z.number(),
  isFeatured: z.boolean(),
});

export type CreateProductFormData = z.infer<typeof productFormSchema>;

export const defaultValues = {
  imageUrl: undefined,
  images: undefined,
  name: "",
  description: "",
  price: 0,
  salePrice: 0,
  sku: "",
  type: "" as const,
  status: "active" as const,
  categoryId: "",
  stockQuantity: 0,
  unit: "",
  weight: 0,
  length: 0,
  width: 0,
  height: 0,
  material: "",
  finish: "",
  color: "",
  slug: "",
  metaTitle: "",
  metaDescription: "",
  keywords: [],
  sortOrder: 0,
  isFeatured: false,
};
