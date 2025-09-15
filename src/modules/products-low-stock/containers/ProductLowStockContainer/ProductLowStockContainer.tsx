"use client";

import React from "react";
import { useProductLowStock } from "../../hooks";
import ProductLowStockFilterContainer from "../ProductLowStockFilterContainer";
import ProductLowStockListContainer from "../ProductLowStockListContainer";

const ProductLowStockContainer = () => {
  const { queryParams, isLoading, productLowStockData, metaData, setQueryParams } =
    useProductLowStock();
  return (
    <div className="p-4 sm:p-6 overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <ProductLowStockFilterContainer
        queryParams={queryParams}
        isLoading={isLoading}
        setQueryParams={setQueryParams}
      />
      <ProductLowStockListContainer
        metaData={metaData}
        productLowStockData={productLowStockData}
        queryParams={queryParams}
        isLoading={isLoading}
        setQueryParams={setQueryParams}
      />
    </div>
  );
};

export default ProductLowStockContainer;
