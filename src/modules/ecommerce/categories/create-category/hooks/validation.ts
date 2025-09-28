import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const categoryFormSchema = z.object({
  image: z
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
  name: z.string().min(3, {
    message: "Category name must be at least 3 characters.",
  }),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters.",
  }),
  parentId: z.string(),
  slug: z.string().min(3, {
    message: "Slug must be at least 3 characters.",
  }),
  sortOrder: z.number(),
  isActive: z.enum(["true", "false"]),
});

export type CreateCategoryFormData = z.infer<typeof categoryFormSchema>;

export const defaultValues = {
  name: "",
  description: "",
  parentId: "",
  slug: "",
  sortOrder: undefined,
  isActive: "true" as const,
};
