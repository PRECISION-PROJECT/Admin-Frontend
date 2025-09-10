import { useMutation } from "@tanstack/react-query";
import { forgotPassword, logout, resetPassword, signIn } from "./request";
import {
  ForgotPasswordRequestParams,
  ResetPasswordRequestParams,
  SigninRequestParams,
} from "./request.dto";

export const useSignInMutate = () => {
  return useMutation({
    mutationKey: ["sign-in"],
    mutationFn: (body: SigninRequestParams) => signIn(body),
  });
};

export const useResetPasswordMutate = () => {
  return useMutation({
    mutationKey: ["reset-password"],
    mutationFn: (body: ResetPasswordRequestParams) => resetPassword(body),
  });
};

export const useForgotPasswordMutate = () => {
  return useMutation({
    mutationKey: ["forgot-password"],
    mutationFn: (body: ForgotPasswordRequestParams) => forgotPassword(body),
  });
};

export const useLogoutMutate = () => {
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: () => logout(),
  });
};
