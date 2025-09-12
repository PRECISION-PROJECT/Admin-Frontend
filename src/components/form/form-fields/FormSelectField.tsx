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
import Select from "@/components/form/Select";
import { cn } from "@/utils/cn";

interface Option {
  value: string;
  label: string;
}

interface FormSelectFieldProps<T extends FieldValues = FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  options: Option[];
  placeholder?: string;
  label?: string;
  required?: boolean;
  loading?: boolean;
  disabled?: boolean;

  // Styling props
  labelClassName?: HTMLAttributes<HTMLLabelElement>["className"];
  containerClassName?: HTMLAttributes<HTMLDivElement>["className"];
  selectClassName?: string;
  errorClassName?: string;
  requiredClassName?: HTMLAttributes<HTMLSpanElement>["className"];
  hint?: string;
}

const FormSelectField = <T extends FieldValues>({
  control,
  name,
  options,
  placeholder = "Select an option",
  label,
  defaultValue,
  required = false,
  loading = false,
  disabled = false,

  // Styling
  labelClassName,
  containerClassName = "",
  selectClassName,
  errorClassName,
  requiredClassName,
  hint,

  ...selectProps
}: FormSelectFieldProps<T>) => {
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

            {/* Select Container */}
            <div className="flex-1">
              {loading ? (
                <div className="h-11 w-full rounded-lg border border-gray-300 bg-gray-100 animate-pulse dark:bg-gray-800 dark:border-gray-700" />
              ) : (
                <Select
                  {...field}
                  {...selectProps}
                  options={options}
                  placeholder={placeholder}
                  value={field.value || ""}
                  onChange={field.onChange}
                  disabled={disabled}
                  error={isError}
                  hint={hint}
                  className={cn(selectClassName)}
                />
              )}

              {/* Error Message */}
              <Show when={isError}>
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

export default FormSelectField;