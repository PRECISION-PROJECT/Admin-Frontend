"use client";

import React from "react";
import { useUserAccount } from "../../hooks";
import UserAccountListContainer from "../UserAccountListContainer";
import UserAccountFilterContainer from "../UserAccountFilterContainer";

const UserAccountContainer = () => {
  const { queryParams, isLoading, userData, metaData, setQueryParams } =
    useUserAccount();
  return (
    <div className="p-4 sm:p-6 overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <UserAccountFilterContainer
        queryParams={queryParams}
        isLoading={isLoading}
        setQueryParams={setQueryParams}
      />
      <UserAccountListContainer
        metaData={metaData}
        userData={userData}
        queryParams={queryParams}
        isLoading={isLoading}
        setQueryParams={setQueryParams}
      />
    </div>
  );
};

export default UserAccountContainer;
