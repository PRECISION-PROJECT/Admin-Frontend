"use client";

import { useLoginMutation } from "@/apis/auths";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signInSchema, type SignInFormData } from "./validation";
import { handleToastError } from "@/utils/common";
import { setCookieData } from "@/utils/cookie";
import { ECookie } from "@/apis/http-instance";
import { toast } from "sonner";
import { ROUTES } from "@/utils/routes";

export const useSignIn = () => {
  const useLoginMutate = useLoginMutation();
  const router = useRouter();

  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      const res = await useLoginMutate.mutateAsync(data);
      const accessToken = res.token;
      const refreshToken = res.refreshToken;
      if (accessToken && refreshToken) {
        setCookieData(ECookie.ACCESS_TOKEN, accessToken, { path: "/" });
        setCookieData(ECookie.REFRESH_TOKEN, refreshToken, { path: "/" });
      }
      toast.success("Sign in successfully");
      setTimeout(() => {
        router.push(ROUTES.PRODUCT_LIST);
      }, 300);
    } catch (error) {
      handleToastError(error);
    }
  };

  return {
    isLoading: useLoginMutate.isPending,
    form,
    onSubmit,
  };
};
