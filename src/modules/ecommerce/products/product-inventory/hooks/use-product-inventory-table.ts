"use client";

import { useGetCategoryTree } from "@/apis/categories";
import { useGetProductListInventory } from "@/apis/products";
import { PAGE_KEY, PER_PAGE_KEY, SORT_KEY } from "@/hooks/use-data-table";
import { useQueryStates } from "nuqs";
import { parseAsInteger, parseAsString } from "nuqs/server";
import { useMemo } from "react";

export const useProductInventoryTable = () => {
  const [query] = useQueryStates({
    [PAGE_KEY]: parseAsInteger.withDefault(1),
    [PER_PAGE_KEY]: parseAsInteger.withDefault(10),
    [SORT_KEY]: parseAsString.withDefault(""),
    search: parseAsString.withDefault(""),
    types: parseAsString.withDefault(""),
    status: parseAsString.withDefault(""),
    isFeatured: parseAsString.withDefault("true"),
  });

  const { data: categoryOptions } = useGetCategoryTree();
  const typeOptions = useMemo(() => {
    if (!categoryOptions || categoryOptions.length === 0) return [];
    return categoryOptions?.map((category) => ({
      value: category.slug,
      label: category.name,
      disabled: false,
    }));
  }, [categoryOptions]);

  const { data, isLoading } = useGetProductListInventory(
    { ...query, includeCategory: true },
    {
      placeholderData: (prev) => prev,
    }
  );

  const productList = data?.data ?? [];
  const pageCount = data?.totalPage ?? 0;

  return {
    productList,
    pageCount,
    isLoading,
    typeOptions,
  };
};
