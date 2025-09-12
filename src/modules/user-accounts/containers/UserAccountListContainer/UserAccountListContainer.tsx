"use client";

import React, { useMemo } from "react";
import { columns } from "./UserAccountListContainer.config";
import { UserAccountListTableUI } from "../../components";
import { GetWhoAmIResponse } from "@/api/auth/response.dto";
import { GetUserListParams } from "@/api/user/request.dto";

type Props = {
  metaData: {
    totalPages: number;
  }
  userData: GetWhoAmIResponse[];
  queryParams: GetUserListParams;
  isLoading: boolean;
  setQueryParams: (queryParams: GetUserListParams) => void;
};

const UserAccountListContainer = ({
  metaData,
  isLoading,
  queryParams,
  userData,
  setQueryParams,
}: Props) => {
  const _columns = useMemo(() => columns(), []);
  return (
    <UserAccountListTableUI
      data={userData}
      columns={_columns}
      isLoading={isLoading}
      metaData={metaData}
      filterParams={{ page: queryParams.page!, size: queryParams.size! }}
      onPageChange={(page) => {
        setQueryParams({ ...queryParams, page });
      }}
      onPageSizeChange={(size) => {
        setQueryParams({ ...queryParams, size });
      }}
    />
  );
};

export default UserAccountListContainer;
