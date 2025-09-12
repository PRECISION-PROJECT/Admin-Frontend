"use client";

import { useState } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import { z } from "zod";

interface UseQueryParamsConfig<T extends z.ZodObject> {
  schema: T;
  defaultValues: z.infer<T>;
}

export function useQueryParams<T extends z.ZodObject>(
  config: UseQueryParamsConfig<T>
): {
  queryParams: z.infer<T>;
  setQueryParams: (newParams: Partial<z.infer<T>>) => void;
} {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Convert URLSearchParams to an object
  const searchParamsObject = Object.fromEntries(searchParams.entries());

  const [queryParams, setQueryParamsState] = useState<z.infer<T>>(() => {
    const initialParse = config.schema.safeParse({
      ...config.defaultValues,
      ...searchParamsObject,
    });
    return initialParse.success ? initialParse.data : config.defaultValues;
  });

  const setQueryParams = (newParams: Partial<z.infer<T>>) => {
    const mergedParams = { ...queryParams, ...newParams };

    const parsedQuery = config.schema.safeParse(mergedParams);

    if (parsedQuery.success) {
      setQueryParamsState(parsedQuery.data);

      const urlParamsObject = Object.fromEntries(
        Object.entries(parsedQuery.data).map(([key, value]) => [
          key,
          String(value),
        ])
      );

      const newUrlParams = new URLSearchParams(urlParamsObject);

      window.history.pushState(
        null,
        "",
        `${pathname}?${newUrlParams.toString()}`
      );
    } else {
      console.error("Validation failed:", parsedQuery.error);
    }
  };

  return {
    queryParams,
    setQueryParams,
  };
}
