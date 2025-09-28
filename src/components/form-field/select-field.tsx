"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { IOption } from "@/types";
import { BaseFormFieldProps } from "@/types/base-form";
import { FieldPath, FieldValues } from "react-hook-form";
import { Show } from "../utilities";

interface SelectFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends BaseFormFieldProps<TFieldValues, TName> {
  options: IOption<string>[];
  placeholder?: string;
  searchable?: boolean;
  noDataText?: string;
  fullWidth?: boolean;
}

function SelectField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  required,
  options,
  placeholder = "Select an option",
  disabled,
  className,
  noDataText = "No data",
  subLabel,
  fullWidth,
}: SelectFieldProps<TFieldValues, TName>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              disabled={disabled}
              value={field.value}
            >
              <FormControl>
                <div>
                  <Show when={!!label}>
                    <FormLabel
                      className={cn("flex flex-col gap-1 items-start")}
                    >
                      <p className="flex gap-1 text-sm">
                        {label}
                        {required && (
                          <span className={cn("ml-1 text-red-500")}>*</span>
                        )}
                      </p>
                      {subLabel && <p className="text-xs">{subLabel}</p>}
                    </FormLabel>
                  </Show>
                  <SelectTrigger
                    className={cn(className, {
                      "w-full": fullWidth,
                      "text-white": !!field.value,
                    })}
                  >
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                </div>
              </FormControl>
              <SelectContent className="w-full">
                <Show when={!options?.length}>
                  {typeof noDataText === "string" ? (
                    <p className="py-2 text-center text-sm dark:text-gray-200">
                      {noDataText}
                    </p>
                  ) : (
                    noDataText
                  )}
                </Show>
                {!!options?.length &&
                  options.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      disabled={option.disabled}
                    >
                      <p className="text-left text-black font-normal dark:text-white">
                        {option.label}
                      </p>
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
            <FormMessage className="text-red-500 text-sm" />
          </FormItem>
        );
      }}
    />
  );
}

export { SelectField };
