"use client";

import { FormWrapper } from "@/components/ui/form";
import {
  UpdateProductFormActionUI,
  UpdateProductFormBasicUI,
  UpdateProductFormImagesUI,
  UpdateProductFormKeywordUI,
  UpdateProductFormPhysicalUI,
  UpdateProductFormPricingUI,
  UpdateProductFormSeoUI,
} from "../../components";
import { useUpdateProductForm } from "../../hooks";

type Props = {
  id: string;
};

const UpdateProductFormContainer = (props: Props) => {
  const { formMethods, categoryOptions, isPending, onSubmit } =
    useUpdateProductForm(props);

  return (
    <FormWrapper form={formMethods} onSubmit={onSubmit} className="space-y-8">
      <UpdateProductFormBasicUI
        isPending={isPending}
        parentCategoryOptions={categoryOptions}
      />
      <UpdateProductFormPricingUI isPending={isPending} />
      <UpdateProductFormPhysicalUI isPending={isPending} />
      <UpdateProductFormImagesUI isPending={isPending} />
      <UpdateProductFormSeoUI isPending={isPending} />
      <UpdateProductFormKeywordUI isPending={isPending} />
      <UpdateProductFormActionUI isPending={isPending} />
    </FormWrapper>
  );
};

export default UpdateProductFormContainer;
