import { createParser } from "nuqs";
import { z } from "zod";

import { dataTableConfig } from "@/config/data-table";

import type {
  ExtendedColumnFilter,
  ExtendedColumnSort,
} from "@/types/data-table";

const sortingItemSchema = z.object({
  id: z.string(),
  desc: z.boolean(),
});

export const getSortingStateParser = <TData>(
  columnIds?: string[] | Set<string>
) => {
  const validKeys = columnIds
    ? columnIds instanceof Set
      ? columnIds
      : new Set(columnIds)
    : null;

  return createParser({
    parse: (value) => {
      if (!value) return [];

      try {
        // Parse format: "email:asc" → [{id: "email", desc: false}]
        const sortPairs = value.split(",").filter(Boolean);
        const result: ExtendedColumnSort<TData>[] = [];

        for (const pair of sortPairs) {
          const [field, direction] = pair.split(":");
          if (!field || !direction) continue;

          if (validKeys && !validKeys.has(field)) continue;
          if (direction !== "asc" && direction !== "desc") continue;

          result.push({
            id: field as Extract<keyof TData, string>,
            desc: direction === "desc",
          });
        }

        return result;
      } catch {
        return [];
      }
    },
    serialize: (value) => {
      if (!value || !Array.isArray(value) || value.length === 0) return "";

      return value
        .map((item) => `${item.id}:${item.desc ? "desc" : "asc"}`)
        .join(",");
    },
    eq: (a, b) =>
      a.length === b.length &&
      a.every(
        (item, index) =>
          item.id === b[index]?.id && item.desc === b[index]?.desc
      ),
  });
};

const filterItemSchema = z.object({
  id: z.string(),
  value: z.union([z.string(), z.array(z.string())]),
  variant: z.enum(dataTableConfig.filterVariants),
  operator: z.enum(dataTableConfig.operators),
  filterId: z.string(),
});

export type FilterItemSchema = z.infer<typeof filterItemSchema>;

export const getFiltersStateParser = <TData>(
  columnIds?: string[] | Set<string>
) => {
  const validKeys = columnIds
    ? columnIds instanceof Set
      ? columnIds
      : new Set(columnIds)
    : null;

  return createParser({
    parse: (value) => {
      try {
        const parsed = JSON.parse(value);
        const result = z.array(filterItemSchema).safeParse(parsed);

        if (!result.success) return null;

        if (validKeys && result.data.some((item) => !validKeys.has(item.id))) {
          return null;
        }

        return result.data as unknown as ExtendedColumnFilter<TData>[];
      } catch {
        return null;
      }
    },
    serialize: (value) => JSON.stringify(value),
    eq: (a, b) =>
      a.length === b.length &&
      a.every(
        (filter, index) =>
          filter.id === b[index]?.id &&
          filter.value === b[index]?.value &&
          filter.variant === b[index]?.variant &&
          filter.operator === b[index]?.operator
      ),
  });
};
