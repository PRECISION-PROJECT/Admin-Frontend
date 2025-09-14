"use client";

import React, { useMemo } from "react";
import { columns } from "./ProductListContainer.config";
import { ProductListTableUI } from "../../components";
import { Product } from "@/api/products/response.dto";
import { GetProductListParams } from "@/api/products/request.dto";

type Props = {
  metaData: {
    totalPages: number;
  };
  productData: Product[];
  queryParams: GetProductListParams;
  isLoading: boolean;
  setQueryParams: (queryParams: GetProductListParams) => void;
};

const ProductListContainer = (props: Props) => {
  const {
    metaData,
    isLoading,
    queryParams,
    productData,
    setQueryParams,
  } = props;
  const _columns = useMemo(() => columns(), []);
  return (
    <ProductListTableUI
      data={productData}
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

export default ProductListContainer;
