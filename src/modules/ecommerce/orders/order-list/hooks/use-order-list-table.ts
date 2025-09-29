"use client";

import { useGetOrderList } from "@/apis/orders/queries";
import { IOrder } from "@/apis/orders/types";
import { PAGE_KEY, PER_PAGE_KEY, SORT_KEY } from "@/hooks/use-data-table";
import { useQueryStates } from "nuqs";
import { parseAsInteger, parseAsString } from "nuqs/server";
import { useCallback } from "react";
import { useOrderList } from "../contexts/order-list-context";

export const useOrderListTable = () => {
  const { setCurrentRow, setOpen } = useOrderList();
  const [query] = useQueryStates({
    [PAGE_KEY]: parseAsInteger.withDefault(1),
    [PER_PAGE_KEY]: parseAsInteger.withDefault(10),
    [SORT_KEY]: parseAsString.withDefault(""),
    userId: parseAsString.withDefault(""),
  });

  const { data, isLoading, refetch } = useGetOrderList(query, {
    placeholderData: (prev) => prev,
  });

  const onRefetch = useCallback(() => {
    refetch();
  }, [refetch]);

  const onRowClick = useCallback((row: IOrder) => {
    setCurrentRow(row);
    setOpen("edit");
  }, []);

  const orderList = data?.data ?? [];
  const pageCount = data?.totalPage ?? 0;

  return {
    orderList,
    pageCount,
    isLoading,
    onRefetch,
    onRowClick,
  };
};
