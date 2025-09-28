export interface ILoginResponse {
  token: string
  refreshToken: string
  tokenExpires: number
  user: IUserResponse
}

export interface ILoginRequest {
  email: string
  password: string
}

export interface IForgotPasswordRequest {
  email: string
}

export interface ILogoutRequest {
  refreshToken: string
}

export interface IResetPasswordRequest {
  email: string
  password: string
  hash: string
}

export interface IUserResponse {
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
  status?: string;
  imageUrl?: string;
  avatar?: IPhoto;
}

export interface IPhoto {
  id: string
  path: string
}

export interface IRole {
  id: number
  name: string
  __entity: string
}

export interface IStatus {
  id: number
  name: string
  __entity: string
}

export interface IRank {
  id: number
  name: string
  __entity: string
}

export interface IRefreshTokenResponse {
  accessToken: string
  refreshToken: string
  tokenExpires: number
}