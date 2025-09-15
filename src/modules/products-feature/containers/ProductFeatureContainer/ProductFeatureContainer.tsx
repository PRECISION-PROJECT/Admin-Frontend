"use client";

import React from "react";
import { useProductFeature } from "../../hooks";
import ProductFeatureFilterContainer from "../ProductFeatureFilterContainer";
import ProductFeatureListContainer from "../ProductFeatureListContainer";

const ProductFeatureContainer = () => {
  const { queryParams, isLoading, productFeatureData, metaData, setQueryParams } =
    useProductFeature();
  return (
    <div className="p-4 sm:p-6 overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <ProductFeatureFilterContainer
        queryParams={queryParams}
        isLoading={isLoading}
        setQueryParams={setQueryParams}
      />
      <ProductFeatureListContainer
        metaData={metaData}
        productFeatureData={productFeatureData}
        queryParams={queryParams}
        isLoading={isLoading}
        setQueryParams={setQueryParams}
      />
    </div>
  );
};

export default ProductFeatureContainer;
