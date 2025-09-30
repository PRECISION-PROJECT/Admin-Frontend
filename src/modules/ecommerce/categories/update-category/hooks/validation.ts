import { IMedia } from "@/types";
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
    .array(z.custom<IMedia>())
    .min(1, "Image is required.")
    .refine(
      (medias) => medias.every((m) => !m.file || m.file.size <= MAX_FILE_SIZE),
      "Each file must be 5MB or less"
    )
    .refine(
      (medias) =>
        medias.every(
          (m) => !m.file || ACCEPTED_IMAGE_TYPES.includes(m.file.type)
        ),
      "Invalid file type"
    ),
  name: z.string().min(3, {
    message: "Category name must be at least 3 characters.",
  }),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters.",
  }),
  parentId: z.string(),
  slug: z
    .string()
    .min(3, {
      message: "Slug must be at least 3 characters.",
    })
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must contain only lowercase letters, numbers, and hyphens (-)"
    ),
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
