import { useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";
import {
  forgotPasswordRequest,
  getMe,
  loginRequest,
  logoutRequest,
  resetPasswordRequest,
} from "./requests";
import { KEYS } from "./keys";
import {
  IUserResponse,
  ILoginResponse,
  ILoginRequest,
  IForgotPasswordRequest,
  ILogoutRequest,
  IResetPasswordRequest,
} from "./types";
import { IAxiosResponse } from "@/types/axios";

export const useGetMe = (
  options: Omit<UseQueryOptions<IUserResponse, Error>, "queryKey">
) => {
  return useQuery<IUserResponse, Error>({
    queryKey: [KEYS.AUTH_ME],
    queryFn: ({ signal }) => getMe(signal),
    ...options,
  });
};

export const useLoginMutation = () => {
  return useMutation<ILoginResponse, IAxiosResponse, ILoginRequest>({
    mutationKey: [KEYS.AUTH_LOGIN],
    mutationFn: (data) => loginRequest(data),
  });
};

export const useLogoutMutation = () => {
  return useMutation<string, IAxiosResponse, ILogoutRequest>({
    mutationKey: [KEYS.AUTH_LOGOUT],
    mutationFn: (data) => logoutRequest(data),
  });
};

export const useForgotPasswordMutation = () => {
  return useMutation<string, IAxiosResponse, IForgotPasswordRequest>({
    mutationKey: [KEYS.AUTH_FORGOT_PASSWORD],
    mutationFn: (data) => forgotPasswordRequest(data),
  });
};

export const useResetPasswordMutation = () => {
  return useMutation<string, IAxiosResponse, IResetPasswordRequest>({
    mutationKey: [KEYS.AUTH_RESET_PASSWORD],
    mutationFn: (data) => resetPasswordRequest(data),
  });
};
