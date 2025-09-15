import { PaginatedResponseType } from "@/types";

export interface OrderLineItem {
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  sku?: string;
  specifications?: Record<string, unknown>;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface Appointment {
  id: string;
  dateTime: string;
  serviceType: string;
  status: string;
}

export interface Order {
  id: string;
  userId: string;
  appointmentId?: string | null;
  products: OrderLineItem[];
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
  user?: User | null;
  appointment?: Appointment | null;
}

export type GetOrderListResponse = PaginatedResponseType<Order>;
