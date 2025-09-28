"use client";

import { FormWrapper } from "@/components/ui/form";
import {
  UpdateBlogFormActionUI,
  UpdateBlogFormBasicUI,
  UpdateBlogFormExistedImagesUI,
  UpdateBlogFormImagesUI,
  UpdateBlogFormKeywordUI,
  UpdateBlogFormSeoUI,
  UpdateBlogFormSettingUI,
} from "../../components";
import { useUpdateBlogForm } from "../../hooks";

type Props = {
  id: string;
};

const UpdateBlogFormContainer = ({ id }: Props) => {
  const { formMethods, isPending, onSubmit } = useUpdateBlogForm(id);
  return (
    <FormWrapper form={formMethods} onSubmit={onSubmit} className="space-y-8">
      <UpdateBlogFormBasicUI isPending={isPending} />
      <UpdateBlogFormExistedImagesUI isPending={isPending} />
      <UpdateBlogFormImagesUI isPending={isPending} />
      <UpdateBlogFormSettingUI isPending={isPending} />
      <UpdateBlogFormSeoUI isPending={isPending} />
      <UpdateBlogFormKeywordUI isPending={isPending} />
      <UpdateBlogFormActionUI isPending={isPending} />
    </FormWrapper>
  );
};

export default UpdateBlogFormContainer;
