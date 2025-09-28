import { type HTMLAttributes, useId } from "react";
import type {
  Control,
  FieldPath,
  FieldPathValue,
  FieldValues,
} from "react-hook-form";

import { cn } from "@/lib/utils";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Switch } from "../ui/switch";
import { Show } from "../utilities";

interface SwitchProps<T extends FieldValues = FieldValues> {
  isChecked?: boolean;
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  label?: string;
  labelClassName?: HTMLAttributes<HTMLLabelElement>["className"];
  containerClassName?: HTMLAttributes<HTMLDivElement>["className"];
  requiredClassName?: HTMLAttributes<HTMLSpanElement>["className"];
  required?: boolean;
  className?: string;
  description?: string;
}

const SwitchFieldV2 = <T extends FieldValues>({
  className,
  labelClassName,
  requiredClassName,
  control,
  defaultValue,
  label,
  required,
  name,
  containerClassName,
  description,
  ...props
}: SwitchProps<T>) => {
  const id = useId();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div
              className={cn(
                "flex items-center justify-between rounded-lg border p-3",
                containerClassName
              )}
            >
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
                  <Show when={!!description}>
                    <FormDescription>{description}</FormDescription>
                  </Show>
                </FormLabel>
              </Show>
              <Switch
                id={id}
                checked={field.value}
                onCheckedChange={field.onChange}
                {...props}
              />
            </div>
          </FormControl>
          <FormMessage className="text-red-500 text-sm" />
        </FormItem>
      )}
    />
  );
};

export { SwitchFieldV2 };
