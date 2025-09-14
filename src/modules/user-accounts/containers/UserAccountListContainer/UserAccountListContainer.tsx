"use client";

import React, { useMemo } from "react";
import { columns } from "./UserAccountListContainer.config";
import {
  UserAccountListModalUI,
  UserAccountListTableUI,
} from "../../components";
import { GetWhoAmIResponse } from "@/api/auth/response.dto";
import { GetUserListParams } from "@/api/user/request.dto";
import { useUserAccountList } from "../../hooks";

type Props = {
  metaData: {
    totalPages: number;
  };
  userData: GetWhoAmIResponse[];
  queryParams: GetUserListParams;
  isLoading: boolean;
  setQueryParams: (queryParams: GetUserListParams) => void;
};

const UserAccountListContainer = (props: Props) => {
  const {
    metaData,
    isLoading,
    queryParams,
    userData,
    modalInfo,
    isPending,
    setQueryParams,
    openModal,
    onOpenModalChange,
    onOk,
  } = useUserAccountList(props);
  const _columns = useMemo(() => columns(openModal), [openModal]);
  return (
    <>
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
      <UserAccountListModalUI
        isPending={isPending}
        modalInfo={modalInfo}
        onClose={onOpenModalChange}
        onOk={onOk}
      />
    </>
  );
};

export default UserAccountListContainer;
