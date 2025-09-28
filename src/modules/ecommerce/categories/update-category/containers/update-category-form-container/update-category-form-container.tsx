"use client";

import { FormWrapper } from "@/components/ui/form";
import { UpdateCategoryFormUI } from "../../components";
import { useUpdateCategoryForm } from "../../hooks";

type Props = {
  id: string;
};

const UpdateCategoryFormContainer = (props: Props) => {
  const { formMethods, categoryOptions, isPending, onSubmit } =
    useUpdateCategoryForm(props.id);
  return (
    <FormWrapper form={formMethods} onSubmit={onSubmit} className="space-y-8">
      <UpdateCategoryFormUI
        isPending={isPending}
        parentCategoryOptions={categoryOptions}
      />
    </FormWrapper>
  );
};

export default UpdateCategoryFormContainer;
