"use client";

import type { HTMLAttributes } from "react";
import type {
  Control,
  FieldPath,
  FieldPathValue,
  FieldValues,
} from "react-hook-form";
import { Controller } from "react-hook-form";

import Show from "@/components/common/Show";
import DatePickerInput from "@/components/form/date-picker-input";
import { cn } from "@/utils/cn";

interface FormDatePickerFieldProps<T extends FieldValues = FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  placeholder?: string;
  label?: string;
  required?: boolean;
  loading?: boolean;
  disabled?: boolean;
  showTimeSelect?: boolean;
  dateFormat?: string;
  minDate?: Date;
  minTime?: Date;

  // Styling props
  labelClassName?: HTMLAttributes<HTMLLabelElement>["className"];
  containerClassName?: HTMLAttributes<HTMLDivElement>["className"];
  datePickerClassName?: string;
  errorClassName?: string;
  requiredClassName?: HTMLAttributes<HTMLSpanElement>["className"];
  hint?: string;
  parentClassName?: string;
}

const FormDatePickerField = <T extends FieldValues>({
  control,
  name,
  placeholder = "Select date",
  label,
  defaultValue,
  required = false,
  loading = false,
  disabled = false,
  showTimeSelect = false,
  dateFormat = "dd/MM/yyyy",
  minDate,
  minTime,

  // Styling
  labelClassName,
  containerClassName = "",
  datePickerClassName,
  errorClassName,
  requiredClassName,
  hint,
  parentClassName,

  ...datePickerProps
}: FormDatePickerFieldProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => {
        const isError = !!error?.message;
        return (
          <div className={cn("flex flex-col gap-y-2", containerClassName)}>
            {/* Label */}
            <Show when={!!label}>
              <label className={labelClassName}>
                <span className="flex items-center gap-1">
                  {label}
                  {required && (
                    <span className={cn("text-error-500", requiredClassName)}>
                      *
                    </span>
                  )}
                </span>
              </label>
            </Show>

            {/* DatePicker Container */}
            <div className="flex-1">
              {loading ? (
                <div className="h-11 w-full rounded-lg border border-gray-300 bg-gray-100 animate-pulse dark:bg-gray-800 dark:border-gray-700" />
              ) : (
                <DatePickerInput
                  {...field}
                  {...datePickerProps}
                  selected={field.value}
                  onChange={field.onChange}
                  placeholder={placeholder}
                  disabled={disabled}
                  error={isError}
                  hint={hint || error?.message}
                  showTimeSelect={showTimeSelect}
                  dateFormat={dateFormat}
                  minDate={minDate}
                  minTime={minTime}
                  className={cn(datePickerClassName)}
                  parentClassName={parentClassName}
                />
              )}

              {/* Error Message - Only show if not using hint prop */}
              <Show when={isError && !hint}>
                <p
                  className={cn(
                    "mt-1.5 text-xs text-error-500",
                    errorClassName
                  )}
                >
                  {error?.message}
                </p>
              </Show>
            </div>
          </div>
        );
      }}
    />
  );
};

export default FormDatePickerField;