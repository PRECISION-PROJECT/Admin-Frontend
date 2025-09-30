import { IMedia } from "@/types";
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
  images: z
    .array(z.custom<IMedia>())
    .max(4, "Maximum 4 images allowed.")
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
    )
    .optional(),
  title: z.string().min(10, "Title must be at least 10 characters"),
  content: z.string().min(20, "Content must be at least 20 characters"),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters"),
  status: z.enum(["published", "draft", "archived"]),
  slug: z
    .string()
    .min(3, "Slug must be at least 3 characters")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must contain only lowercase letters, numbers, and hyphens (-)"
    ),
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
  imageUrl: [],
  images: [],
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
