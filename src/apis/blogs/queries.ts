import { useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { KEYS } from "./keys";
import {
  createBlog,
  deleteBlog,
  getBlogBySlug,
  getBlogDetail,
  getBlogList,
  updateBlog,
} from "./requests";
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

export const useGetBlogList = (
  params: GetBlogListParams,
  options?: Omit<UseQueryOptions<GetBlogListResponse, Error>, "queryKey">
) => {
  return useQuery<GetBlogListResponse, Error>({
    queryKey: [KEYS.BLOG_LIST, params],
    queryFn: ({ signal }) => getBlogList(params, signal),
    ...options,
  });
};

export const useGetBlogDetail = (
  params: GetBlogDetailParams,
  options?: Omit<UseQueryOptions<GetBlogDetailResponse, Error>, "queryKey">
) => {
  return useQuery<GetBlogDetailResponse, Error>({
    queryKey: [KEYS.BLOG_DETAIL, params],
    queryFn: ({ signal }) => getBlogDetail(params, signal),
    ...options,
  });
};

export const useGetBlogBySlug = (
  params: GetBlogBySlugParams,
  options?: Omit<UseQueryOptions<GetBlogBySlugResponse, Error>, "queryKey">
) => {
  return useQuery<GetBlogBySlugResponse, Error>({
    queryKey: [KEYS.BLOG_BY_SLUG, params],
    queryFn: ({ signal }) => getBlogBySlug(params, signal),
    ...options,
  });
};

export const useCreateBlogMutation = () => {
  return useMutation<IBlog, Error, CreateBlogRequest>({
    mutationFn: createBlog,
  });
};

export const useUpdateBlogMutation = () => {
  return useMutation<IBlog, Error, UpdateBlogRequest>({
    mutationFn: updateBlog,
  });
};

export const useDeleteBlogMutation = () => {
  return useMutation<IBlog, Error, DeleteBlogRequest>({
    mutationFn: deleteBlog,
  });
};
