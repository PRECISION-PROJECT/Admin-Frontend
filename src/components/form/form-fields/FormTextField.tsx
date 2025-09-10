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
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import { cn } from "@/utils/cn";

type InputProps = React.ComponentProps<typeof Input>;

interface FormTextFieldProps<T extends FieldValues = FieldValues>
  extends Omit<InputProps, "error"> {
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  label?: string;
  required?: boolean;
  loading?: boolean;

  // Styling props
  labelClassName?: HTMLAttributes<HTMLLabelElement>["className"];
  containerClassName?: HTMLAttributes<HTMLDivElement>["className"];
  inputClassName?: string;
  errorClassName?: string;
  requiredClassName?: HTMLAttributes<HTMLSpanElement>["className"];
}

const FormTextField = <T extends FieldValues>({
  control,
  name,
  label,
  defaultValue,
  required = false,
  loading = false,

  // Styling
  labelClassName,
  containerClassName = "",
  inputClassName,
  errorClassName,
  requiredClassName,

  // All other Input props
  ...inputProps
}: FormTextFieldProps<T>) => {
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
              <Label className={labelClassName}>
                <span className="flex items-center gap-1">
                  {label}
                  {required && (
                    <span className={cn("text-error-500", requiredClassName)}>
                      *
                    </span>
                  )}
                </span>
              </Label>
            </Show>

            {/* Input Container */}
            <div className="flex-1">
              {loading ? (
                <div className="h-11 w-full rounded-lg border border-gray-300 bg-gray-100 animate-pulse dark:bg-gray-800 dark:border-gray-700" />
              ) : (
                <Input
                  {...field}
                  {...inputProps}
                  error={isError}
                  className={cn(inputClassName, inputProps.className)}
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

export default FormTextField;
