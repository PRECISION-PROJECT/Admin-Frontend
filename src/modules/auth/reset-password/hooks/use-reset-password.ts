"use client";

import { useResetPasswordMutation } from "@/apis/auths";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { handleToastError } from "@/utils/common";
import { toast } from "sonner";
import { ROUTES } from "@/utils/routes";
import { resetPasswordSchema, type ResetPasswordFormData } from "./validation";

type Props = {
  email: string
  hash: string
}

export const useResetPassword = ({email, hash}: Props) => {
  const useResetPasswordMutate = useResetPasswordMutation();
  const router = useRouter();

  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onBlur",
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: ResetPasswordFormData) => {
    try {
      await useResetPasswordMutate.mutateAsync({
        email,
        password: data.newPassword,
        hash,
      });
      toast.success("Forgot password successfully");
      setTimeout(() => {
        router.push(ROUTES.SIGN_IN);
      }, 300);
    } catch (error) {
      handleToastError(error);
    }
  };

  return {
    isLoading: useResetPasswordMutate.isPending,
    form,
    onSubmit,
  };
};
