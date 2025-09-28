import { CommonRequestType, IPaginatedResponseType } from "@/types";
import { IUserResponse } from "../auths";

export type GetAppointmentListParams = {
  userId?: string;
  filter?: string;
} & CommonRequestType;

export type GetMyAppointmentListParams = GetAppointmentListParams;

export type CreateAppointmentRequest = {
  userId: string;
  dateTime: string;
  serviceType: string;
  status: string;
  notes: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  serviceAddress: string;
  estimatedDuration: number;
};

export type UpdateAppointmentRequest = CreateAppointmentRequest & {
    id: string;
};

export type DeleteAppointmentRequest = {
  id: string;
};

export type IAppointment = {
  createdAt: string;
  updatedAt: string;
  id: string;
  userId: string;
  dateTime: string;
  serviceType: string;
  status: string;
  notes: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  serviceAddress: string;
  estimatedDuration: number;
  user: IUserResponse;
};

export type GetAppointmentListResponse = IPaginatedResponseType<IAppointment[]>;
export type GetMyAppointmentListResponse = IPaginatedResponseType<
  IAppointment[]
>;
