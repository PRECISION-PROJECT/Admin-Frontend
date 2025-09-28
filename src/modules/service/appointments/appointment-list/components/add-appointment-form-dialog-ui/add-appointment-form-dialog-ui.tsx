"use client";

import {
  DatePickerField,
  SelectField,
  TextAreaField,
  TextField,
} from "@/components/form-field";
import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";
import { AddAppointmentFormData } from "../../hooks";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
  isEdit?: boolean;
  isLoading: boolean;
  onClose: () => void;
};

const SERVICE_TYPE_OPTIONS = [
  { label: "Consultation", value: "consultation" },
  { label: "Design Consultation", value: "design_consultation" },
  { label: "Measurement", value: "measurement" },
  { label: "Installation", value: "installation" },
  { label: "Customize", value: "custom" },
];

const STATUS_OPTIONS = [
  { label: "Pending", value: "pending" },
  { label: "Completed", value: "completed" },
  { label: "Cancelled", value: "cancelled" },
];

const AddAppointmentFormDialogUI = ({
  isEdit = false,
  isLoading,
  onClose,
}: Props) => {
  const { control } = useFormContext<AddAppointmentFormData>();

  return (
    <ScrollArea>
      <div className="space-y-2">
      <div className="space-y-2">
        <h3 className="text-base font-semibold">Customer Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField
            control={control}
            name="customerName"
            label="Customer Name"
            placeholder="Enter your customer name"
            required
            disabled={isLoading}
          />
          <TextField
            control={control}
            name="customerPhone"
            label="Customer Phone"
            placeholder="Enter your customer phone"
            required
            disabled={isLoading}
          />
          <TextField
            control={control}
            name="customerEmail"
            label="Customer Email"
            placeholder="Enter your customer email"
            required
            disabled={isLoading}
          />
          <TextField
            control={control}
            name="serviceAddress"
            label="Service Address"
            placeholder="Enter your service address"
            required
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Appointment Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <SelectField
              control={control}
              name="serviceType"
              label="Service Type"
              placeholder="Select a service type"
              required
              disabled={isLoading}
              options={SERVICE_TYPE_OPTIONS}
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
              name="dateTime"
              label="Date & Time"
              description="Your date & time (optional)"
              config={{
                placeholder: "Select your date & time",
              }}
            />
          </div>
          <div>
            <TextField
              control={control}
              name="estimatedDuration"
              type="number"
              label="Duration (minutes)"
              min={0}
              required
              disabled={isLoading}
              step={1}
            />
          </div>
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
        <Button
          disabled={isLoading}
          variant="outline"
          onClick={onClose}
          type="button"
        >
          Cancel
        </Button>
        <Button disabled={isLoading} variant="default" type="submit">
          {isEdit ? "Update Appointment" : "Add Appointment"}
        </Button>
      </div>
      </div>
    </ScrollArea>
  );
};

export default AddAppointmentFormDialogUI;
