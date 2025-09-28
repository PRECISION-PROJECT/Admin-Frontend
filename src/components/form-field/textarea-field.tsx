import type { ReactNode } from "react";
import type {
  Control,
  FieldPath,
  FieldPathValue,
  FieldValues,
} from "react-hook-form";

import { cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import type { TextareaProps } from "../ui/textarea";
import { Textarea } from "../ui/textarea";
import { Show } from "../utilities";

interface TextareaConfig {
  maxLength?: number;
  showCharCount?: boolean;
  rows?: number;
  resize?: "none" | "vertical" | "horizontal" | "both";
}

interface Props<T extends FieldValues = FieldValues> extends TextareaProps {
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  label?: ReactNode;
  required?: boolean;
  requiredClassName?: string;
  labelClassName?: string;
  subLabel?: string;
  containerClassName?: string;
  config?: TextareaConfig;
}

const TextAreaField = <T extends FieldValues>({
  defaultValue,
  labelClassName,
  control,
  label,
  required,
  subLabel,
  requiredClassName,
  containerClassName,
  config = {},
  ...props
}: Props<T>) => {
  const {
    maxLength,
    showCharCount = true,
    rows = 4,
    resize = "vertical",
  } = config;

  return (
    <FormField
      control={control}
      name={props.name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className={cn("mb-0!", containerClassName)}>
              <Show when={!!label}>
                <FormLabel
                  className={cn(
                    "flex flex-col gap-1 items-start",
                    labelClassName
                  )}
                >
                  <p className="flex gap-1 text-sm">
                    {label}
                    {required && (
                      <span className={cn("text-red-500", requiredClassName)}>
                        *
                      </span>
                    )}
                  </p>
                  {subLabel && <p className="text-xs">{subLabel}</p>}
                </FormLabel>
              </Show>
              <div className="space-y-2">
                <Textarea
                  {...field}
                  {...props}
                  rows={rows}
                  style={{ resize }}
                  maxLength={maxLength}
                />
                {showCharCount && maxLength && (
                  <div className="text-muted-foreground text-right text-sm">
                    {field.value?.length || 0} / {maxLength}
                  </div>
                )}
              </div>
            </div>
          </FormControl>
          <FormMessage className="text-red-500 text-sm" />
        </FormItem>
      )}
    />
  );
};

export { TextAreaField };
