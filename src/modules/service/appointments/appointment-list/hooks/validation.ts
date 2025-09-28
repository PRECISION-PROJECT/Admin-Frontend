import { z } from "zod";

export const addAppointmentSchema = z.object({
  userId: z.string().optional(),
  dateTime: z.date().optional(),
  serviceType: z.string().min(1, "Service type is required"),
  status: z.string().min(1, "Status is required"),
  notes: z.string().min(10, "Notes must be at least 10 characters"),
  customerName: z.string().min(2, "Customer name must be at least 2 characters"),
  customerPhone: z
    .string()
    .min(1, "Customer phone is required")
    .regex(
      /^(\+1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/,
      "Invalid US phone number format"
    ),
  customerEmail: z.email("Invalid email address"),
  serviceAddress: z.string().min(10, "Service address must be at least 10 characters"),
  estimatedDuration: z.number().min(15, "Estimated duration must be at least 15 minutes"),
});

export type AddAppointmentFormData = z.infer<typeof addAppointmentSchema>;

export const defaultValues = {
  userId: "",
  dateTime: new Date(),
  serviceType: "",
  status: "",
  notes: "",
  customerName: "",
  customerPhone: "",
  customerEmail: "",
  serviceAddress: "",
  estimatedDuration: 0,
};
