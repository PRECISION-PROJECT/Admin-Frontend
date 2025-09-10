import httpInstance from "../http-instance";
import {
  ForgotPasswordRequestParams,
  ResetPasswordRequestParams,
  SigninRequestParams,
} from "./request.dto";
import {
  ForgotPasswordResponse,
  ResetPasswordResponse,
  SigninResponse,
} from "./response.dto";

export const signIn = (body: SigninRequestParams) => {
  return httpInstance
    .post<SigninResponse, SigninRequestParams>("/auth/email/login", body)
    .then((res) => res);
};

export const logout = () => {
  return httpInstance.post("/auth/logout", {}).then((res) => res);
};

export const resetPassword = (body: ResetPasswordRequestParams) => {
  return httpInstance
    .post<ResetPasswordResponse, ResetPasswordRequestParams>(
      "/auth/reset/password",
      body
    )
    .then((res) => res);
};

export const forgotPassword = (body: ForgotPasswordRequestParams) => {
  return httpInstance
    .post<ForgotPasswordResponse, ForgotPasswordRequestParams>(
      "/auth/forgot/password",
      body
    )
    .then((res) => res);
};
