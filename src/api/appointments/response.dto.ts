import { PaginatedResponseType } from "@/types";

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface Appointment {
  id: string;
  userId: string;
  dateTime: string;
  serviceType: string;
  status: string;
  notes?: string | null;
  customerName?: string | null;
  customerPhone?: string | null;
  customerEmail?: string | null;
  serviceAddress?: string | null;
  estimatedDuration?: number | null;
  createdAt: string;
  updatedAt: string;
  user?: User | null;
}

export type GetAppointmentListResponse = PaginatedResponseType<Appointment>;
