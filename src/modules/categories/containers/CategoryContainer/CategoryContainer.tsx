"use client";

import React from "react";
import { useCategory } from "../../hooks";
import CategoryFilterContainer from "../CategoryFilterContainer";
import CategoryListContainer from "../CategoryListContainer";

const CategoryContainer = () => {
  const { queryParams, isLoading, categoryData, metaData, setQueryParams } =
    useCategory();
  return (
    <div className="p-4 sm:p-6 overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <CategoryFilterContainer
        queryParams={queryParams}
        isLoading={isLoading}
        setQueryParams={setQueryParams}
      />
      <CategoryListContainer
        metaData={metaData}
        categoryData={categoryData}
        queryParams={queryParams}
        isLoading={isLoading}
        setQueryParams={setQueryParams}
      />
    </div>
  );
};

export default CategoryContainer;
