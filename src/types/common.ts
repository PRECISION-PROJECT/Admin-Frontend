import { AxiosResponse } from "axios";
import type { FC, PropsWithChildren } from "react";

export type TOptional<T> = T | undefined;

export type TApiResponse<T> = {
  code: number;
  data: T;
  message: string;
} & AxiosResponse;

export type TErrorResponse = {
  errors?: Record<string, string>;
  message: string;
  statusCode: number;
};

export type FCC<P = object> = FC<PropsWithChildren<P>>;

export type CommonRequestType = {
  page?: number;
  size?: number;
  sort_by?: string;
  order_by?: "desc" | "asc";
  fields?: string;
  search?: string;
};

export type CommonResponseType = {
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
  updatedBy?: string;
};

export type PaginatedResponseType<T> = TApiResponse<{
  data: T[];
  meta: {
    count: number;
    currentPage: number;
    totalPages: number;
  };
}>;
