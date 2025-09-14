"use client";

import React from "react";
import { useProduct } from "../../hooks";
import ProductFilterContainer from "../ProductFilterContainer";
import ProductListContainer from "../ProductListContainer";

const ProductContainer = () => {
  const { queryParams, isLoading, productData, metaData, setQueryParams } =
    useProduct();
  return (
    <div className="p-4 sm:p-6 overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <ProductFilterContainer
        queryParams={queryParams}
        isLoading={isLoading}
        setQueryParams={setQueryParams}
      />
      <ProductListContainer
        metaData={metaData}
        productData={productData}
        queryParams={queryParams}
        isLoading={isLoading}
        setQueryParams={setQueryParams}
      />
    </div>
  );
};

export default ProductContainer;
