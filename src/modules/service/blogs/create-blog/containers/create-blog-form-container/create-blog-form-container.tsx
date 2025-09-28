"use client";

import { FormWrapper } from "@/components/ui/form";
import {
  CreateBlogFormBasicUI,
  CreateBlogFormImagesUI,
  CreateBlogFormKeywordUI,
  CreateBlogFormSeoUI,
  CreateBlogFormSettingUI,
} from "../../components";
import CreateBlogFormActionUI from "../../components/create-blog-form-action-ui";
import { useCreateBlogForm } from "../../hooks";

const CreateBlogFormContainer = () => {
  const { formMethods, isPending, onSubmit } = useCreateBlogForm();
  return (
    <FormWrapper form={formMethods} onSubmit={onSubmit} className="space-y-8">
      <CreateBlogFormBasicUI isPending={isPending} />
      <CreateBlogFormImagesUI isPending={isPending} />
      <CreateBlogFormSettingUI isPending={isPending} />
      <CreateBlogFormSeoUI isPending={isPending} />
      <CreateBlogFormKeywordUI isPending={isPending} />
      <CreateBlogFormActionUI isPending={isPending} />
    </FormWrapper>
  );
};

export default CreateBlogFormContainer;
