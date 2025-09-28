import { request } from "../axios";
import httpInstance from "../http-instance";
import { KEYS } from "./keys";
import {
  IForgotPasswordRequest,
  ILoginRequest,
  ILoginResponse,
  ILogoutRequest,
  IResetPasswordRequest,
  IUserResponse,
} from "./types";

export const getMe = async (signal?: AbortSignal): Promise<IUserResponse> => {
  return httpInstance
    .get<IUserResponse>(KEYS.AUTH_ME, { signal })
    .then((res) => res);
};

export const loginRequest = async (
  body: ILoginRequest
): Promise<ILoginResponse> => {
  return httpInstance
    .post<ILoginResponse, ILoginRequest>(KEYS.AUTH_LOGIN, body)
    .then((res) => res);
};

export const logoutRequest = async (body: ILogoutRequest) => {
  return httpInstance
    .post<string, ILogoutRequest>(KEYS.AUTH_LOGOUT, body)
    .then((res) => res);
};

export const forgotPasswordRequest = async (
  body: IForgotPasswordRequest
): Promise<string> => {
  return httpInstance
    .post<string, IForgotPasswordRequest>(KEYS.AUTH_FORGOT_PASSWORD, body)
    .then((res) => res);
};

export const resetPasswordRequest = async (
  body: IResetPasswordRequest
): Promise<string> => {
  return httpInstance
    .post<string, IResetPasswordRequest>(KEYS.AUTH_RESET_PASSWORD, body)
    .then((res) => res);
};
