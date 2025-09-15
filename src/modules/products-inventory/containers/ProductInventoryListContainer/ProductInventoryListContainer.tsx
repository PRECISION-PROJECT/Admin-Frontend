"use client";

import React, { useMemo } from "react";
import { columns } from "./ProductInventoryListContainer.config";
import { ProductInventoryListTableUI } from "../../components";
import { ProductInventory } from "@/api/products-inventory/response.dto";
import { GetProductInventoryListParams } from "@/api/products-inventory/request.dto";

type Props = {
  metaData: {
    totalPages: number;
  };
  productInventoryData: ProductInventory[];
  queryParams: GetProductInventoryListParams;
  isLoading: boolean;
  setQueryParams: (queryParams: GetProductInventoryListParams) => void;
};

const ProductInventoryListContainer = (props: Props) => {
  const {
    metaData,
    isLoading,
    queryParams,
    productInventoryData,
    setQueryParams,
  } = props;
  const _columns = useMemo(() => columns(), []);
  return (
    <ProductInventoryListTableUI
      data={productInventoryData}
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

export default ProductInventoryListContainer;
