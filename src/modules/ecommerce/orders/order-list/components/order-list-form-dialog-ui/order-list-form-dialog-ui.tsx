"use client";

import {
  DatePickerField,
  SelectField,
  TextAreaField,
  TextField,
} from "@/components/form-field";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useFormContext } from "react-hook-form";
import { UpdateOrderFormData } from "../../hooks";

type Props = {
  isLoading: boolean;
  onClose: () => void;
  onDelete: () => void;
};

const PAYMENT_STATUS_OPTIONS = [
  { label: "Paid", value: "paid" },
  { label: "Pending", value: "pending" },
  { label: "Failed", value: "failed" },
];

const STATUS_OPTIONS = [
  { label: "Pending", value: "pending" },
  { label: "Processing", value: "processing" },
  { label: "Shipped", value: "shipped" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Draft", value: "draft" },
];

const OrderListFormDialogUI = ({ isLoading, onClose, onDelete }: Props) => {
  const { control } = useFormContext<UpdateOrderFormData>();

  return (
    <ScrollArea>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Update Order Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <SelectField
              control={control}
              name="paymentStatus"
              label="Payment Status"
              placeholder="Select a payment status"
              required
              disabled={isLoading}
              options={PAYMENT_STATUS_OPTIONS}
              fullWidth
            />
          </div>
          <div>
            <SelectField
              control={control}
              name="status"
              label="Status"
              placeholder="Select a status"
              required
              disabled={isLoading}
              options={STATUS_OPTIONS}
              fullWidth
            />
          </div>
          <div>
            <DatePickerField
              control={control}
              name="estimatedDeliveryDate"
              label="Estimated Delivery Date"
              config={{
                placeholder: "Select a date",
              }}
              required
            />
          </div>
        </div>

        <div>
          <TextField
            control={control}
            name="deliveryAddress"
            label="Delivery Address"
            placeholder="Enter delivery address"
            required
            disabled={isLoading}
          />
        </div>

        <div>
          <TextAreaField
            control={control}
            name="notes"
            label="Notes"
            placeholder="Enter notes"
            required
            config={{
              maxLength: 1000,
              showCharCount: true,
              rows: 4,
            }}
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="flex w-full items-center justify-end space-x-2 pt-6">
        <Button disabled={isLoading} variant="default" type="submit">
          Update
        </Button>
        <Button
          disabled={isLoading}
          variant="destructive"
          type="button"
          onClick={onDelete}
        >
          Delete
        </Button>
        <Button
          disabled={isLoading}
          variant="outline"
          onClick={onClose}
          type="button"
        >
          Cancel
        </Button>
      </div>
    </ScrollArea>
  );
};

export default OrderListFormDialogUI;
