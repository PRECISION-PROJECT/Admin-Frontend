"use client";

import { useForgotPasswordMutation } from "@/apis/auths";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { handleToastError } from "@/utils/common";
import { toast } from "sonner";
import { ROUTES } from "@/utils/routes";
import { forgotPasswordSchema, type ForgotPasswordFormData } from "./validation";

export const useForgotPassword = () => {
  const useForgotPasswordMutate = useForgotPasswordMutation();
  const router = useRouter();

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      await useForgotPasswordMutate.mutateAsync(data);
      toast.success("Forgot password successfully");
      setTimeout(() => {
        router.push(ROUTES.SIGN_IN);
      }, 300);
    } catch (error) {
      handleToastError(error);
    }
  };

  return {
    isLoading: useForgotPasswordMutate.isPending,
    form,
    onSubmit,
  };
};
