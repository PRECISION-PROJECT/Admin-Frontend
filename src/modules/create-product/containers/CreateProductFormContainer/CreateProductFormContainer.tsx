"use client";

import React from "react";
import FormWrapper from "@/components/form/form-wrapper/FormWrapper";
import { useCreateProductPage } from "../../hooks";
import { CreateProductFormUI, CreateProductActionUI } from "../../components";

const CreateProductFormContainer = () => {
  const {
    formMethods,
    categoryOptions,
    isLoading,
    categoriesLoading,
    onSubmit,
    onSaveDraft,
  } = useCreateProductPage();

  return (
    <FormWrapper
      form={formMethods}
      formId="create-product-form"
      onSubmit={onSubmit}
      className="space-y-6"
    >
      <CreateProductFormUI categoryOptions={categoryOptions} />
      <CreateProductActionUI
        isLoading={isLoading || categoriesLoading}
        onSaveDraft={onSaveDraft}
        onSubmit={formMethods.handleSubmit(onSubmit)}
      />
    </FormWrapper>
  );
};

export default CreateProductFormContainer;

