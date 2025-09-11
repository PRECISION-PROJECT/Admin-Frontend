"use client";

import FormWrapper from "@/components/form/form-wrapper/FormWrapper";
import SigninFormUI from "../../components/SigninFormUI";
import { useSignIn } from "../../hooks/useSignIn";

const SigninFormContainer = () => {
  const { form, onSubmit, isLoading } = useSignIn();

  return (
    <FormWrapper form={form} onSubmit={onSubmit}>
      <SigninFormUI isLoading={isLoading} />
    </FormWrapper>
  );
};

export default SigninFormContainer;
