"use client";

import FormWrapper from "@/components/form/form-wrapper/FormWrapper";
import SigninFormUI from "../../components/SigninFormUI";
import { useSignIn } from "../../hooks/useSignIn";

const SigninFormContainer = () => {
  const { form, onSubmit } = useSignIn();

  return (
    <FormWrapper form={form} onSubmit={onSubmit}>
      <SigninFormUI />
    </FormWrapper>
  );
};

export default SigninFormContainer;
