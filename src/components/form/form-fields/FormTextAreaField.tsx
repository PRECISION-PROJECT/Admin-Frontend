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
import TextArea from "@/components/form/input/TextArea";
import { cn } from "@/utils/cn";

interface FormTextAreaFieldProps<T extends FieldValues = FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  label?: string;
  placeholder?: string;
  hint?: string;
  required?: boolean;
  loading?: boolean;
  rows?: number;

  // Styling props
  labelClassName?: HTMLAttributes<HTMLLabelElement>["className"];
  containerClassName?: HTMLAttributes<HTMLDivElement>["className"];
  inputClassName?: string;
  errorClassName?: string;
  requiredClassName?: HTMLAttributes<HTMLSpanElement>["className"];
  hintClassName?: string;
}

const FormTextAreaField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  hint,
  required = false,
  loading = false,
  rows = 3,

  // Styling
  labelClassName,
  containerClassName = "",
  inputClassName,
  errorClassName,
  requiredClassName,
  hintClassName,

  ...textAreaProps
}: FormTextAreaFieldProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
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

            {/* TextArea Container */}
            <div className="flex-1">
              {loading ? (
                <div className="h-20 w-full rounded border border-gray-300 bg-gray-100 animate-pulse dark:bg-gray-800 dark:border-gray-700" />
              ) : (
                <TextArea
                  {...field}
                  {...textAreaProps}
                  placeholder={placeholder}
                  rows={rows}
                  className={cn(
                    isError && "border-error-500 focus:border-error-500 focus:ring-error-500",
                    inputClassName
                  )}
                />
              )}

              {/* Hint */}
              <Show when={!!hint && !isError}>
                <p className={cn("mt-1.5 text-xs text-gray-500", hintClassName)}>
                  {hint}
                </p>
              </Show>

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

export default FormTextAreaField;

