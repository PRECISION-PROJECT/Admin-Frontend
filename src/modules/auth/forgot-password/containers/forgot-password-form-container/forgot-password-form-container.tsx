"use client";

import { FormWrapper } from "@/components/ui/form";
import { ForgotPasswordFormUI } from "../../components";
import { useForgotPassword } from "../../hooks";
import { CardContent } from "@/components/ui/card";

const ForgotPasswordFormContainer = () => {
  const { form, onSubmit, isLoading } = useForgotPassword();

  return (
    <CardContent>
      <FormWrapper form={form} onSubmit={onSubmit}>
        <ForgotPasswordFormUI isLoading={isLoading} />
      </FormWrapper>
    </CardContent>
  );
};

export default ForgotPasswordFormContainer;
