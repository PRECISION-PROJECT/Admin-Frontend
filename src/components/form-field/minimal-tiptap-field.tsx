import type {
  Control,
  FieldPath,
  FieldPathValue,
  FieldValues,
} from "react-hook-form";

import { cn } from "@/lib/utils";

import type { HTMLAttributes } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input, type InputProps } from "../ui/input";
import { Show } from "../utilities";
import {
  MinimalTiptap,
  MinimalTiptapProps,
} from "../ui/shadcn-io/minimal-tiptap";

interface Props<T extends FieldValues = FieldValues>
  extends MinimalTiptapProps {
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  label?: string;
  labelClassName?: HTMLAttributes<HTMLLabelElement>["className"];
  required?: boolean;
  containerClassName?: HTMLAttributes<HTMLDivElement>["className"];
  inputContainerClassName?: HTMLAttributes<HTMLDivElement>["className"];
  requiredClassName?: HTMLAttributes<HTMLSpanElement>["className"];
  suffixClassName?: HTMLAttributes<HTMLSpanElement>["className"];
  subLabel?: string;
  isShowError?: boolean;
  initialContent?: string;
}

const MinimalTiptapField = <T extends FieldValues>({
  className,
  labelClassName,
  control,
  defaultValue,
  label,
  required,
  containerClassName,
  requiredClassName,
  subLabel,
  isShowError = true,
  initialContent,
  ...props
}: Props<T>) => {
  return (
    <FormField
      defaultValue={defaultValue}
      control={control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className={cn(containerClassName)}>
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
              <MinimalTiptap
                {...field}
                {...props}
                content={field.value}
                initialContent={initialContent}
                className={cn("min-h-96", className)}
              />
              <FormMessage className="mt-1.5 text-red-500 text-sm" />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export { MinimalTiptapField };
