"use client";

import { useGetProductListInventory } from "@/apis/products";
import { PAGE_KEY, PER_PAGE_KEY, SORT_KEY } from "@/hooks/use-data-table";
import { useQueryStates } from "nuqs";
import { parseAsInteger, parseAsString } from "nuqs/server";

export const useProductLowStockTable = () => {
  const [query] = useQueryStates({
    [PAGE_KEY]: parseAsInteger.withDefault(1),
    [PER_PAGE_KEY]: parseAsInteger.withDefault(10),
    [SORT_KEY]: parseAsString.withDefault(""),
    search: parseAsString.withDefault(""),
    isFeatured: parseAsString.withDefault("true"),
  });

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
  };
};
