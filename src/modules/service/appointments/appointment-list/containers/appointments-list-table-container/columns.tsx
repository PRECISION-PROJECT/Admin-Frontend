"use client";
import { IAppointment } from "@/apis/appointments";
import { DataTableColumnHeader } from "@/components/shared/data-table/data-table-column-header";
import { Badge } from "@/components/ui/badge";
import { Column, ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Text } from "lucide-react";
import {
  AppointmentsDialogType,
  AppointmentStatus,
} from "../../contexts/appointments-list-context";
import { CellAction } from "./cell-action";

export const getStatusColor = (status: AppointmentStatus) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "pending":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    case "cancelled":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

const MAPPING_SERVICE_TYPES = {
  consultation: "Consultation",
  design_consultation: "Design Consultation",
  measurement: "Measurement",
  installation: "Installation",
  custom: "Customize",
};

export const columns = (
  onRowClick: (row: IAppointment, type: AppointmentsDialogType) => void
): ColumnDef<IAppointment>[] => [
  {
    id: "id",
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      const origin = row.original;
      const id = origin.id;
      if (!id) return <div>--</div>;
      return <div>{id as string}</div>;
    },
    meta: {
      label: "Appointment Id",
    },
  },
  {
    id: "userId",
    accessorKey: "userId",
    header: ({ column }: { column: Column<IAppointment, unknown> }) => (
      <DataTableColumnHeader column={column} title="User Id" />
    ),
    cell: ({ row }) => {
      const _row = row.original;
      const userId = _row?.userId ?? "-";
      return <div>{userId}</div>;
    },
    meta: {
      label: "User Id",
      placeholder: "Search user by user id...",
      variant: "text",
      icon: Text,
    },
    enableSorting: false,
    enableColumnFilter: true,
  },
  {
    accessorKey: "serviceType",
    header: ({ column }: { column: Column<IAppointment, unknown> }) => (
      <DataTableColumnHeader column={column} title="Service Type" />
    ),
    cell: ({ row }) => {
      const origin = row.original;
      const serviceType = origin.serviceType;
      return (
        <div>
          {MAPPING_SERVICE_TYPES[
            serviceType as keyof typeof MAPPING_SERVICE_TYPES
          ] ?? "-"}
        </div>
      );
    },
    enableColumnFilter: true,
    meta: {
      label: "Service Type",
    },
  },
  {
    accessorKey: "status",
    header: ({ column }: { column: Column<IAppointment, unknown> }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => (
      <div>
        <Badge
          className={getStatusColor(row.original.status as AppointmentStatus)}
        >
          {row.original.status.charAt(0).toUpperCase() +
            row.original.status.slice(1)}
        </Badge>
      </div>
    ),
    enableColumnFilter: true,
    meta: {
      label: "Status",
    },
  },
  {
    accessorKey: "notes",
    header: ({ column }: { column: Column<IAppointment, unknown> }) => (
      <DataTableColumnHeader column={column} title="Notes" />
    ),
    cell: ({ row }) => <div>{row.original.notes ?? "-"}</div>,
    enableColumnFilter: true,
    meta: {
      label: "Notes",
    },
  },
  {
    id: "dateTime",
    accessorKey: "dateTime",
    header: ({ column }: { column: Column<IAppointment, unknown> }) => (
      <DataTableColumnHeader column={column} title="Date Time" />
    ),
    cell: ({ row }) => {
      const origin = row.original;
      const dateTime = origin.dateTime;

      return (
        <div>
          {dateTime ? format(dateTime as string, "dd/MM/yyyy HH:mm:ss") : "-"}
        </div>
      );
    },
    enableColumnFilter: true,
    enableSorting: true,
    meta: {
      label: "Date Time",
    },
  },
  {
    id: "createdAt",
    accessorKey: "createdAt",
    header: ({ column }: { column: Column<IAppointment, unknown> }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
    cell: ({ row }) => {
      const origin = row.original;
      const createdAt = origin.createdAt;
      return (
        <div>
          {createdAt ? format(createdAt as string, "dd/MM/yyyy HH:mm:ss") : "-"}
        </div>
      );
    },
    enableColumnFilter: true,
    enableSorting: true,
    meta: {
      label: "Created At",
    },
  },
  {
    id: "updatedAt",
    accessorKey: "updatedAt",
    header: ({ column }: { column: Column<IAppointment, unknown> }) => (
      <DataTableColumnHeader column={column} title="Updated At" />
    ),
    cell: ({ row }) => {
      const origin = row.original;
      const updatedAt = origin.updatedAt;
      return (
        <div>
          {updatedAt ? format(updatedAt as string, "dd/MM/yyyy HH:mm:ss") : "-"}
        </div>
      );
    },
    enableColumnFilter: true,
    enableSorting: true,
    meta: {
      label: "Updated At",
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <CellAction data={row.original} onRowClick={onRowClick} />
    ),
  },
];
