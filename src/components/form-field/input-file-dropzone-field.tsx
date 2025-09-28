"use client";

import { Control, FieldPath, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputFileDropzone,
  InputFileDropzoneProps,
} from "../ui/input-file-dropzone";
import { Show } from "../utilities";
import { cn } from "@/lib/utils";

interface BaseFormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  control: Control<TFieldValues>;
  name: TName;
  label?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  subLabel?: string;
}

interface FileUploadConfig extends InputFileDropzoneProps {
  acceptedTypes?: string[];
}

interface InputFileDropzoneUploadFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends BaseFormFieldProps<TFieldValues, TName> {
  config?: FileUploadConfig;
}

function InputFileDropzoneUploadField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  subLabel,
  description,
  required,
  config,
  disabled,
  className,
}: InputFileDropzoneUploadFieldProps<TFieldValues, TName>) {
  const {
    maxSize,
    acceptedTypes,
    multiple,
    maxFiles,
    onUpload,
    progresses,
    ...restConfig
  } = config || {};

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl className="w-full">
            <div>
              <Show when={!!label}>
                <FormLabel className={cn("flex flex-col gap-1 items-start")}>
                  <p
                    className={cn(
                      "flex gap-1 text-sm leading-none font-medium mb-1.5"
                    )}
                  >
                    {label}
                    {required && (
                      <span className={cn("ml-1 text-red-500")}>*</span>
                    )}
                  </p>
                  {subLabel && (
                    <p className="text-xs">{subLabel}</p>
                  )}
                </FormLabel>
              </Show>
              <InputFileDropzone
                value={field.value}
                onValueChange={field.onChange}
                onUpload={onUpload}
                progresses={progresses}
                accept={acceptedTypes?.reduce(
                  (acc, type) => ({ ...acc, [type]: [] }),
                  {}
                )}
                maxSize={maxSize}
                maxFiles={maxFiles}
                multiple={multiple}
                disabled={disabled}
                {...restConfig}
              />
              <FormMessage className="mt-1.5 text-red-500 text-sm" />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
}

export { InputFileDropzoneUploadField, type FileUploadConfig };
