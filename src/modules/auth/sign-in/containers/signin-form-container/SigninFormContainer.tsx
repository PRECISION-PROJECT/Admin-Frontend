"use client";

import { FormWrapper } from "@/components/ui/form";
import { useSignIn } from "../../hooks";
import { SigninFormUI } from "../../components";
import { CardContent } from "@/components/ui/card";

const SigninFormContainer = () => {
  const { form, onSubmit, isLoading } = useSignIn();

  return (
    <CardContent>
      <FormWrapper form={form} onSubmit={onSubmit}>
        <SigninFormUI isLoading={isLoading} />
      </FormWrapper>
    </CardContent>
  );
};

export default SigninFormContainer;
