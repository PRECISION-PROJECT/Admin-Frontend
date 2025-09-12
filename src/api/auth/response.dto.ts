export type GetWhoAmIResponse = {
  id: string;
  email: string;
  provider: string;
  socialId: string;
  firstName: string;
  lastName: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

export type SigninResponse = {
  token: string;
  refreshToken: string;
};

export type ResetPasswordResponse = {
  message: string;
};

export type ForgotPasswordResponse = {
  message: string;
};
