"use client";

import { useGetBlogList } from "@/apis/blogs";
import { PAGE_KEY, PER_PAGE_KEY, SORT_KEY } from "@/hooks/use-data-table";
import { useQueryStates } from "nuqs";
import { parseAsInteger, parseAsString } from "nuqs/server";

export const useBlogsListTable = () => {
  const [query] = useQueryStates({
    [PAGE_KEY]: parseAsInteger.withDefault(1),
    [PER_PAGE_KEY]: parseAsInteger.withDefault(10),
    [SORT_KEY]: parseAsString.withDefault(""),
    search: parseAsString.withDefault(""),
    authorId: parseAsString.withDefault(""),
    status: parseAsString.withDefault(""),
    isFeatured: parseAsString.withDefault("true"),
  });

  const { data, isLoading } = useGetBlogList(
    { ...query, includeAuthor: true },
    {
      placeholderData: (prev) => prev,
    }
  );

  const blogsList = data?.data ?? [];
  const pageCount = data?.totalPage ?? 0;

  return {
    blogsList,
    pageCount,
    isLoading,
  };
};
