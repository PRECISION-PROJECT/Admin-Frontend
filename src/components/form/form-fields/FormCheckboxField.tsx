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
import Checkbox from "@/components/form/input/Checkbox";
import { cn } from "@/utils/cn";

interface FormCheckboxFieldProps<T extends FieldValues = FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  label?: string;
  required?: boolean;
  loading?: boolean;

  // Styling props
  labelClassName?: HTMLAttributes<HTMLLabelElement>["className"];
  containerClassName?: HTMLAttributes<HTMLDivElement>["className"];
  checkboxClassName?: string;
  errorClassName?: string;
  requiredClassName?: HTMLAttributes<HTMLSpanElement>["className"];
}

const FormCheckboxField = <T extends FieldValues>({
  control,
  name,
  label,
  defaultValue,
  required = false,
  loading = false,

  // Styling
  labelClassName,
  containerClassName = "",
  checkboxClassName,
  errorClassName,
  requiredClassName,

  ...checkboxProps
}: FormCheckboxFieldProps<T>) => {
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

            {/* Checkbox Container */}
            <div className="flex-1">
              {loading ? (
                <div className="h-4 w-4 rounded border border-gray-300 bg-gray-100 animate-pulse dark:bg-gray-800 dark:border-gray-700" />
              ) : (
                <Checkbox
                  {...field}
                  {...checkboxProps}
                  checked={field.value || false}
                  className={cn(checkboxClassName, checkboxProps.className)}
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

export default FormCheckboxField;
