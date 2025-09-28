"use client";

import { useGetOrderList } from "@/apis/orders/queries";
import { PAGE_KEY, PER_PAGE_KEY, SORT_KEY } from "@/hooks/use-data-table";
import { useQueryStates } from "nuqs";
import { parseAsInteger, parseAsString } from "nuqs/server";

export const useOrderListTable = () => {
  const [query] = useQueryStates({
    [PAGE_KEY]: parseAsInteger.withDefault(1),
    [PER_PAGE_KEY]: parseAsInteger.withDefault(10),
    [SORT_KEY]: parseAsString.withDefault(""),
    userId: parseAsString.withDefault(""),
  });

  const { data, isLoading } = useGetOrderList(query, {
    placeholderData: (prev) => prev,
  });

  const orderList = data?.data ?? [];
  const pageCount = data?.totalPage ?? 0;

  return {
    orderList,
    pageCount,
    isLoading,
  };
};
