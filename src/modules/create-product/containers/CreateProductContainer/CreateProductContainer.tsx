import React from "react";
import CreateProductFormContainer from "../CreateProductFormContainer";

const CreateProductContainer = () => {
  return (
    <div className="p-4 sm:p-6 overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Create New Product
        </h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Fill in the details below to create a new product
        </p>
      </div>
      <CreateProductFormContainer />
    </div>
  );
};

export default CreateProductContainer;

