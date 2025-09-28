import { CommonRequestType, IPaginatedResponseType } from "@/types";
import { IUserResponse } from "../auths";
import { IAppointment } from "../appointments";

export interface IOrderLineItem {
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  sku?: string;
  specifications?: Record<string, unknown>;
}

export interface IOrder {
  id: string;
  userId: string;
  appointmentId?: string | null;
  products: IOrderLineItem[];
  total: number;
  subtotal?: number | null;
  taxAmount?: number | null;
  shippingFee?: number | null;
  status: string;
  orderNumber?: string | null;
  deliveryAddress?: string | null;
  deliveryInstructions?: string | null;
  estimatedDeliveryDate?: string | null;
  paymentMethod?: string | null;
  paymentStatus?: string | null;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
  user?: IUserResponse | null;
  appointment?: IAppointment | null;
}

export type GetOrderListResponse = IPaginatedResponseType<IOrder[]>;

export type GetOrderListParams = {
  userId?: string;
  filter?: string;
} & CommonRequestType;

export type AddOrderRequest = {
  userId?: string;
  appointmentId: string;
  products: IOrderLineItem[];
  total: number;
  subtotal: number;
  status: string;
  deliveryAddress: string;
  notes: string;
};

export type UpdateOrderRequest = AddOrderRequest & {
  id: string;
};

export type DeleteOrderRequest = {
  id: string;
};
