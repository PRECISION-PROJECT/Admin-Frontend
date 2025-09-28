"use client";

import { DataTable } from "@/components/shared/data-table/data-table";
import { DataTableSkeleton } from "@/components/shared/data-table/data-table-skeleton";
import { DataTableToolbar } from "@/components/shared/data-table/data-table-toolbar";
import { useDataTable } from "@/hooks/use-data-table";
import { useCategoryListTable } from "../../hooks";
import { useMemo } from "react";
import { columns } from "./columns";

const CategoryListTableContainer = () => {
  const { pageCount, categoryList, isLoading } = useCategoryListTable();

  const _columns = useMemo(() => columns(), []);

  const { table } = useDataTable({
    data: categoryList,
    columns: _columns,
    pageCount: pageCount,
    shallow: false,
    debounceMs: 500,
  });

  if (isLoading) {
    return <DataTableSkeleton columnCount={7} rowCount={8} filterCount={2} />;
  }

  return (
    <DataTable table={table}>
      <DataTableToolbar table={table} />
    </DataTable>
  );
};

export default CategoryListTableContainer;
