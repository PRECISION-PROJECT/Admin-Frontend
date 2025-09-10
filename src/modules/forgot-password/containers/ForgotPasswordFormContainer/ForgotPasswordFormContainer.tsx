"use client";

import FormWrapper from "@/components/form/form-wrapper/FormWrapper";
import ForgotPasswordFormUI from "../../components/ForgotPasswordFormUI";
import { useForgotPassword } from "../../hooks/useForgotPassword";

const ForgotPasswordFormContainer = () => {
  const { form, onSubmit } = useForgotPassword();

  return (
    <FormWrapper form={form} onSubmit={onSubmit}>
      <ForgotPasswordFormUI />
    </FormWrapper>
  );
};

export default ForgotPasswordFormContainer;
