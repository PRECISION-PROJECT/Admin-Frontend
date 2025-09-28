import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const updateCategoryFormSchema = z.object({
  image: z
    .any()
    .optional()
    .refine((files) => !files || files?.length <= 1, "Only 1 image is allowed.")
    .refine(
      (files) => !files || files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => !files || ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
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
  imageUrl: z.string().nullable(),
});

export type UpdateCategoryFormData = z.infer<typeof updateCategoryFormSchema>;

export const updateDefaultValues = {
  name: "",
  description: "",
  parentId: "",
  slug: "",
  sortOrder: undefined,
  isActive: "true" as const,
  imageUrl: null,
};
