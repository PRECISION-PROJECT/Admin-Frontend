"use client";

import React from "react";
import { useProductInventory } from "../../hooks";
import ProductInventoryFilterContainer from "../ProductInventoryFilterContainer";
import ProductInventoryListContainer from "../ProductInventoryListContainer";

const ProductInventoryContainer = () => {
  const { queryParams, isLoading, productInventoryData, metaData, setQueryParams } =
    useProductInventory();
  return (
    <div className="p-4 sm:p-6 overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <ProductInventoryFilterContainer
        queryParams={queryParams}
        isLoading={isLoading}
        setQueryParams={setQueryParams}
      />
      <ProductInventoryListContainer
        metaData={metaData}
        productInventoryData={productInventoryData}
        queryParams={queryParams}
        isLoading={isLoading}
        setQueryParams={setQueryParams}
      />
    </div>
  );
};

export default ProductInventoryContainer;
