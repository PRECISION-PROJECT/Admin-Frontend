export type SigninRequestParams = {
  email: string;
  password: string;
  keepLoggedIn: boolean;
};

export type ResetPasswordRequestParams = {
  email: string;
  newPassword: string;
};

export type ForgotPasswordRequestParams = {
  email: string;
};
