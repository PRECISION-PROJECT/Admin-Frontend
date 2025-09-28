"use client";

import { DataTable } from "@/components/shared/data-table/data-table";
import { DataTableSkeleton } from "@/components/shared/data-table/data-table-skeleton";
import { DataTableToolbar } from "@/components/shared/data-table/data-table-toolbar";
import { useDataTable } from "@/hooks/use-data-table";
import { useMemo } from "react";
import { useAppointmentsListTable } from "../../hooks";
import { columns } from "./columns";
import AppointmentsListDialogsContainer from "../appointments-list-dialogs-container";

const AppointmentsListTableContainer = () => {
  const { pageCount, appointmentsList, isLoading, onRowClick, onRefetch } =
    useAppointmentsListTable();

  const _columns = useMemo(() => columns(onRowClick), [onRowClick]);

  const { table } = useDataTable({
    data: appointmentsList,
    columns: _columns,
    pageCount: pageCount,
    shallow: false,
    debounceMs: 500,
  });

  if (isLoading) {
    return <DataTableSkeleton columnCount={5} rowCount={8} filterCount={2} />;
  }

  return (
    <>
      <DataTable table={table}>
        <DataTableToolbar table={table} />
      </DataTable>
      <AppointmentsListDialogsContainer onRefetch={onRefetch} />
    </>
  );
};

export default AppointmentsListTableContainer;
