"use client";

import { DataTable } from "@/components/shared/data-table/data-table";
import { DataTableSkeleton } from "@/components/shared/data-table/data-table-skeleton";
import { DataTableToolbar } from "@/components/shared/data-table/data-table-toolbar";
import { useDataTable } from "@/hooks/use-data-table";
import { useMemo } from "react";
import { useOrderListTable } from "../../hooks";
import OrderListDialogContainer from "../order-list-dialog-container";
import { columns } from "./columns";

const OrderListTableContainer = () => {
  const { pageCount, orderList, isLoading, onRefetch, onRowClick } =
    useOrderListTable();

  const _columns = useMemo(() => columns(onRowClick), []);

  const { table } = useDataTable({
    data: orderList,
    columns: _columns,
    pageCount: pageCount,
    shallow: false,
    debounceMs: 500,
  });

  if (isLoading) {
    return <DataTableSkeleton columnCount={7} rowCount={8} filterCount={2} />;
  }

  return (
    <>
      <DataTable table={table}>
        <DataTableToolbar table={table} />
      </DataTable>
      <OrderListDialogContainer onSuccess={onRefetch} />
    </>
  );
};

export default OrderListTableContainer;
