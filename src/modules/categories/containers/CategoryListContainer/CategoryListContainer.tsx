"use client";

import React, { useMemo } from "react";
import { columns } from "./CategoryListContainer.config";
import { CategoryListTableUI } from "../../components";
import { Category } from "@/api/categories/response.dto";
import { GetCategoryListParams } from "@/api/categories/request.dto";

type Props = {
  metaData: {
    totalPages: number;
  };
  categoryData: Category[];
  queryParams: GetCategoryListParams;
  isLoading: boolean;
  setQueryParams: (queryParams: GetCategoryListParams) => void;
};

const CategoryListContainer = (props: Props) => {
  const {
    metaData,
    isLoading,
    queryParams,
    categoryData,
    setQueryParams,
  } = props;
  const _columns = useMemo(() => columns(), []);
  return (
    <CategoryListTableUI
      data={categoryData}
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

export default CategoryListContainer;
