"use client";

import React, { useMemo } from "react";
import { columns } from "./ProductLowStockListContainer.config";
import { ProductLowStockListTableUI } from "../../components";
import { ProductLowStock } from "@/api/products-low-stock/response.dto";
import { GetProductLowStockListParams } from "@/api/products-low-stock/request.dto";

type Props = {
  metaData: {
    totalPages: number;
  };
  productLowStockData: ProductLowStock[];
  queryParams: GetProductLowStockListParams;
  isLoading: boolean;
  setQueryParams: (queryParams: GetProductLowStockListParams) => void;
};

const ProductLowStockListContainer = (props: Props) => {
  const {
    metaData,
    isLoading,
    queryParams,
    productLowStockData,
    setQueryParams,
  } = props;
  const _columns = useMemo(() => columns(), []);
  return (
    <ProductLowStockListTableUI
      data={productLowStockData}
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

export default ProductLowStockListContainer;
