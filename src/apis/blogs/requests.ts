import httpInstance from "../http-instance";
import { KEYS } from "./keys";
import {
  CreateBlogRequest,
  DeleteBlogRequest,
  GetBlogBySlugParams,
  GetBlogBySlugResponse,
  GetBlogDetailParams,
  GetBlogDetailResponse,
  GetBlogListParams,
  GetBlogListResponse,
  IBlog,
  UpdateBlogRequest,
} from "./types";

export const getBlogList = async (
  params: GetBlogListParams,
  signal?: AbortSignal
) => {
  return httpInstance
    .get<GetBlogListResponse>(KEYS.BLOG_LIST, { params, signal })
    .then((res) => res);
};

export const getBlogDetail = async (
  params: GetBlogDetailParams,
  signal?: AbortSignal
) => {
  const url = KEYS.BLOG_DETAIL.replace(":id", params.id);
  return httpInstance
    .get<GetBlogDetailResponse>(url, { params, signal })
    .then((res) => res);
};

export const getBlogBySlug = async (
  params: GetBlogBySlugParams,
  signal?: AbortSignal
) => {
  const url = KEYS.BLOG_BY_SLUG.replace(":slug", params.slug);
  return httpInstance
    .get<GetBlogBySlugResponse>(url, { params, signal })
    .then((res) => res);
};

export const createBlog = async (
  params: CreateBlogRequest,
  signal?: AbortSignal
) => {
  return httpInstance
    .post<IBlog>(KEYS.BLOG_LIST, params, { signal })
    .then((res) => res);
};

export const updateBlog = async (
  params: UpdateBlogRequest,
  signal?: AbortSignal
) => {
  const url = KEYS.BLOG_DETAIL.replace(":id", params.id);
  return httpInstance.patch<IBlog>(url, params, { signal }).then((res) => res);
};

export const deleteBlog = async (
  params: DeleteBlogRequest,
  signal?: AbortSignal
) => {
  const url = KEYS.BLOG_DETAIL.replace(":id", params.id);
  return httpInstance.delete<IBlog>(url, { signal }).then((res) => res);
};
