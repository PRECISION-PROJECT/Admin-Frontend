"use client";

import { useGetUserList } from "@/apis/users";
import { PAGE_KEY, PER_PAGE_KEY, SORT_KEY } from "@/hooks/use-data-table";
import { useQueryStates } from "nuqs";

import { parseAsInteger, parseAsString } from "nuqs/server";
import {
  UsersDialogType,
  useUserAccount,
} from "../contexts/user-account-context";
import { useCallback } from "react";
import { IUserResponse } from "@/apis/auths";

export const useUserAccountTable = () => {
  const { setCurrentRow, setOpen } = useUserAccount();

  const [query] = useQueryStates({
    [PAGE_KEY]: parseAsInteger.withDefault(1),
    [PER_PAGE_KEY]: parseAsInteger.withDefault(10),
    [SORT_KEY]: parseAsString.withDefault(""),
    search: parseAsString.withDefault(""),
    status: parseAsString.withDefault(""),
  });

  const { data, isLoading } = useGetUserList(query, {
    placeholderData: (prev) => prev,
  });

  const onRowClick = useCallback(
    (row: IUserResponse, type: UsersDialogType) => {
      setCurrentRow(row);
      setOpen(type);
    },
    []
  );

  const userList = data?.data ?? [];
  const pageCount = data?.totalPage ?? 0;

  return {
    userList,
    pageCount,
    isLoading,
    onRowClick,
  };
};
