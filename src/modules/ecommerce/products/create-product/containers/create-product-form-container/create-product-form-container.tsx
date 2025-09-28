"use client";

import { FormWrapper } from "@/components/ui/form";
import {
  CreateProductFormActionUI,
  CreateProductFormBasicUI,
  CreateProductFormImagesUI,
  CreateProductFormKeywordUI,
  CreateProductFormPhysicalUI,
  CreateProductFormPricingUI,
  CreateProductFormSeoUI,
} from "../../components";
import { useCreateProductForm } from "../../hooks";

const CreateProductFormContainer = () => {
  const { formMethods, categoryOptions, isPending, onSubmit } =
    useCreateProductForm();
  return (
    <FormWrapper form={formMethods} onSubmit={onSubmit} className="space-y-8">
      <CreateProductFormBasicUI
        isPending={isPending}
        parentCategoryOptions={categoryOptions}
      />
      <CreateProductFormPricingUI isPending={isPending} />
      <CreateProductFormPhysicalUI isPending={isPending} />
      <CreateProductFormImagesUI isPending={isPending} />
      <CreateProductFormSeoUI isPending={isPending} />
      <CreateProductFormKeywordUI isPending={isPending} />
      <CreateProductFormActionUI isPending={isPending} />
    </FormWrapper>
  );
};

export default CreateProductFormContainer;
