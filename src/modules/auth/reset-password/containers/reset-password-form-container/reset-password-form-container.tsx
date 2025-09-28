"use client";

import { CardContent } from "@/components/ui/card";
import { FormWrapper } from "@/components/ui/form";
import { ResetPasswordFormUI } from "../../components";
import { useResetPassword } from "../../hooks";

type Props = {
  email: string;
  hash: string;
};

const ResetPasswordFormContainer = (props: Props) => {
  const { form, onSubmit, isLoading } = useResetPassword(props);

  return (
    <CardContent>
      <FormWrapper form={form} onSubmit={onSubmit}>
        <ResetPasswordFormUI isLoading={isLoading} />
      </FormWrapper>
    </CardContent>
  );
};

export default ResetPasswordFormContainer;
