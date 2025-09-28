"use client";

import React from "react";
import { useCreateCategoryForm } from "../../hooks";
import { FormWrapper } from "@/components/ui/form";
import { CreateCategoryFormUI } from "../../components";

const CreateCategoryFormContainer = () => {
  const { formMethods, categoryOptions, isPending, onSubmit } =
    useCreateCategoryForm();
  return (
    <FormWrapper form={formMethods} onSubmit={onSubmit} className="space-y-8">
      <CreateCategoryFormUI
        isPending={isPending}
        parentCategoryOptions={categoryOptions}
      />
    </FormWrapper>
  );
};

export default CreateCategoryFormContainer;
