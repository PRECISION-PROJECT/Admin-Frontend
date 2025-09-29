import z from "zod";

export const updateOrderSchema = z.object({
  estimatedDeliveryDate: z.date().optional(),
  deliveryAddress: z
    .string()
    .min(10, "Delivery Address must be at least 10 characters"),
  notes: z.string().min(10, "Notes must be at least 10 characters"),
  status: z.string().min(1, "Status is required"),
  paymentStatus: z.string().min(1, "Payment Status is required"),
});

export type UpdateOrderFormData = z.infer<typeof updateOrderSchema>;

export const defaultValues = {
  estimatedDeliveryDate: new Date(),
  deliveryAddress: "",
  notes: "",
  status: "",
  paymentStatus: "",
};
