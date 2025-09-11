import { SortingState } from "@tanstack/react-table";

export type TableSortingType = {
  id: string;
  sort: "asc" | "desc";
};

export const getTableSorting: (st: SortingState) => TableSortingType[] = (st) =>
  st.map(({ id, desc }) => ({ id, sort: desc ? "desc" : "asc" }));

export const convertTableSortingToSortingState: (ts: TableSortingType[]) => SortingState = (ts) =>
  ts.map(({ id, sort }) => ({
    id,
    desc: sort === "desc",
  }));
