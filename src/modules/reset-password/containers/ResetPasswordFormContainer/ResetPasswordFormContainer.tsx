"use client";

import FormWrapper from "@/components/form/form-wrapper/FormWrapper";
import ResetPasswordFormUI from "../../components/ResetPasswordFormUI";
import { useResetPassword } from "../../hooks/useResetPassword";

interface ResetPasswordFormContainerProps {
  email: string;
}

const ResetPasswordFormContainer = ({
  email,
}: ResetPasswordFormContainerProps) => {
  const { form, onSubmit } = useResetPassword({ email });

  return (
    <FormWrapper form={form} onSubmit={onSubmit}>
      <ResetPasswordFormUI />
    </FormWrapper>
  );
};

export default ResetPasswordFormContainer;
