import { CommonRequestType, IPaginatedResponseType } from "@/types";
import { IUserResponse } from "../auths";

export type IBlog = {
  id: string;
  title: string;
  content: string;
  slug: string;
  excerpt: string;
  authorId: string;
  status: string;
  publishedAt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  viewCount: number;
  isFeatured: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
  author: IUserResponse;
  imageUrl?: string;
  images?: string[];
};

export type GetBlogListParams = {
  authorId?: string;
  status?: string;
  isFeatured?: string;
  publishedAfter?: string;
  publishedBefore?: string;
  includeAuthor?: boolean;
} & CommonRequestType;

export type GetMyBlogListParams = GetBlogListParams;

export type GetBlogListResponse = IPaginatedResponseType<IBlog[]>;

export type GetBlogDetailParams = {
  id: string;
};

export type GetBlogDetailResponse = IBlog;

export type GetBlogBySlugParams = {
  slug: string;
};

export type CreateBlogRequest = {
  title: string;
  content: string;
  slug: string;
  excerpt: string;
  authorId?: string;
  status: string;
  imageUrl: string;
  images: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  isFeatured: boolean;
  sortOrder: number;
};

export type UpdateBlogRequest = CreateBlogRequest & {
  id: string;
};

export type DeleteBlogRequest = {
  id: string;
};

export type GetBlogBySlugResponse = IBlog;