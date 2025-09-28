import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const blogFormSchema = z.object({
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
  title: z.string().min(10, "Title must be at least 10 characters"),
  content: z.string().min(20, "Content must be at least 20 characters"),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters"),
  status: z.enum(["published", "draft", "archived"]),
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  metaTitle: z.string().min(10, "Meta title must be at least 10 characters"),
  metaDescription: z
    .string()
    .min(20, "Meta description must be at least 20 characters"),
  keywords: z.array(z.string()),
  sortOrder: z.number(),
  isFeatured: z.boolean(),
});

export type CreateBlogFormData = z.infer<typeof blogFormSchema>;

export const defaultValues: CreateBlogFormData = {
  imageUrl: undefined,
  images: undefined,
  title: "",
  content: "",
  excerpt: "",
  status: "draft",
  slug: "",
  metaTitle: "",
  metaDescription: "",
  keywords: [],
  sortOrder: 0,
  isFeatured: false,
};
