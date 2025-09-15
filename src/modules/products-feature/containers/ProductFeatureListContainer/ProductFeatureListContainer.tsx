"use client";

import React, { useMemo } from "react";
import { columns } from "./ProductFeatureListContainer.config";
import { ProductFeatureListTableUI } from "../../components";
import { Product } from "@/api/products/response.dto";
import { GetProductListParams } from "@/api/products/request.dto";

type Props = {
  metaData: {
    totalPages: number;
  };
  productFeatureData: Product[];
  queryParams: GetProductListParams;
  isLoading: boolean;
  setQueryParams: (queryParams: GetProductListParams) => void;
};

const ProductFeatureListContainer = (props: Props) => {
  const {
    metaData,
    isLoading,
    queryParams,
    productFeatureData,
    setQueryParams,
  } = props;
  const _columns = useMemo(() => columns(), []);
  return (
    <ProductFeatureListTableUI
      data={productFeatureData}
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

export default ProductFeatureListContainer;
