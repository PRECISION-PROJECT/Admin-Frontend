"use client";

import { useSignInMutate } from "@/api/auth";
import { ECookie } from "@/api/http-instance";
import { setCookieData } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signInSchema, type SignInFormData } from "./validation";
import { toast } from "sonner";
import { TErrorResponse } from "@/types";

export const useSignIn = () => {
  const useSigninMutation = useSignInMutate();
  const router = useRouter();

  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      keepLoggedIn: false,
    },
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      const res = await useSigninMutation.mutateAsync(data);
      const accessToken = res.token;
      const refreshToken = res.refreshToken;
      if (accessToken && refreshToken) {
        setCookieData(ECookie.ACCESS_TOKEN, accessToken, { path: "/" });
        setCookieData(ECookie.REFRESH_TOKEN, refreshToken, { path: "/" });
      }
      toast.success("Sign in successfully");
      setTimeout(() => {
        router.push("/");
      }, 300);
    } catch (error) {
      const msg = (error as unknown as TErrorResponse).errors?.password;
      toast.error("Failed to logout", {
        description: msg,
      });
    }
  };

  return {
    isLoading: useSigninMutation.isPending,
    form,
    onSubmit,
  };
};
