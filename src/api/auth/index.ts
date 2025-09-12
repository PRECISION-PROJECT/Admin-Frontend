import { useMutation, useQuery } from "@tanstack/react-query";
import {
  forgotPassword,
  getWhoAmI,
  logout,
  resetPassword,
  signIn,
} from "./request";
import {
  ForgotPasswordRequestParams,
  ResetPasswordRequestParams,
  SigninRequestParams,
} from "./request.dto";
import { GetWhoAmIResponse } from "./response.dto";

export const useWhoAmIQuery = (
  queryParams?: Omit<
    Parameters<typeof useQuery<GetWhoAmIResponse>>[0],
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["whoami"],
    queryFn: ({ signal }) => getWhoAmI(signal),
    ...queryParams,
  });
};

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
