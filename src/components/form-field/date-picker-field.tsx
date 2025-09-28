"use client";

import { Control, FieldPath, FieldValues } from "react-hook-form";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Show } from "../utilities";
import { cn } from "@/lib/utils";
import { Calendar } from "../ui/calendar";

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

interface DatePickerConfig {
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  placeholder?: string;
}

interface DatePickerFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends BaseFormFieldProps<TFieldValues, TName> {
  config?: DatePickerConfig;
}

function DatePickerField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  required,
  config = {},
  disabled,
  subLabel,
  className,
}: DatePickerFieldProps<TFieldValues, TName>) {
  const {
    minDate,
    maxDate,
    disabledDates = [],
    placeholder = "Pick a date",
  } = config;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <Show when={!!label}>
            <FormLabel className={cn("flex flex-col gap-1 items-start")}>
              <p
                className={cn(
                  "flex gap-1 font-medium text-sm"
                )}
              >
                {label}
                {required && <span className={cn("ml-1 text-red-500")}>*</span>}
              </p>
              {subLabel && <p className="text-xs">{subLabel}</p>}
            </FormLabel>
          </Show>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  className={`w-full pl-3 text-left text-sx font-normal ${
                    !field.value && "text-muted-foreground"
                  }`}
                  disabled={disabled}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>{placeholder}</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) => {
                  if (minDate && date < minDate) return true;
                  if (maxDate && date > maxDate) return true;
                  return disabledDates.some(
                    (disabledDate) => date.getTime() === disabledDate.getTime()
                  );
                }}
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export { DatePickerField };
