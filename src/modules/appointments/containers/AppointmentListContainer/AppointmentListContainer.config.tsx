import { Appointment } from "@/api/appointments/response.dto";
import { AugmentedColumnDef } from "@/components/tables/BaseTables";
import { formatDate } from "@/utils";
import React from "react";

export const columns = (): AugmentedColumnDef<Appointment>[] => [
  {
    accessorKey: "id",
    header: "ID",
    cell: (props) => {
      const row = props.row.original;
      return <>{row.id}</>;
    },
  },
  {
    accessorKey: "user",
    header: "Customer",
    cell: (props) => {
      const row = props.row.original;
      return (
        <div>
          {row.user ? (
            <div>
              <div className="font-medium">
                {row.user.firstName} {row.user.lastName}
              </div>
              <div className="text-sm text-gray-500">{row.user.email}</div>
            </div>
          ) : (
            <span className="text-gray-400">-</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "customerName",
    header: "Customer Name",
    cell: (props) => {
      const row = props.row.original;
      return <>{row.customerName || "-"}</>;
    },
  },
  {
    accessorKey: "customerPhone",
    header: "Phone",
    cell: (props) => {
      const row = props.row.original;
      return <>{row.customerPhone || "-"}</>;
    },
  },
  {
    accessorKey: "customerEmail",
    header: "Email",
    cell: (props) => {
      const row = props.row.original;
      return <>{row.customerEmail || "-"}</>;
    },
  },
  {
    accessorKey: "dateTime",
    header: "Date & Time",
    cell: (props) => {
      const row = props.row.original;
      return <>{formatDate(row.dateTime)}</>;
    },
  },
  {
    accessorKey: "serviceType",
    header: "Service Type",
    cell: (props) => {
      const row = props.row.original;
      const serviceColors = {
        consultation: "bg-blue-100 text-blue-800",
        design_consultation: "bg-purple-100 text-purple-800",
        measurement: "bg-green-100 text-green-800",
        installation: "bg-orange-100 text-orange-800",
        custom: "bg-gray-100 text-gray-800",
      };
      
      const serviceColor = serviceColors[row.serviceType as keyof typeof serviceColors] || "bg-gray-100 text-gray-800";
      
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${serviceColor}`}>
          {row.serviceType?.replace("_", " ").toUpperCase() || "-"}
        </span>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (props) => {
      const row = props.row.original;
      const statusColors = {
        pending: "bg-yellow-100 text-yellow-800",
        confirmed: "bg-blue-100 text-blue-800",
        completed: "bg-green-100 text-green-800",
        cancelled: "bg-red-100 text-red-800",
      };
      
      const statusColor = statusColors[row.status as keyof typeof statusColors] || "bg-gray-100 text-gray-800";
      
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor}`}>
          {row.status?.toUpperCase() || "-"}
        </span>
      );
    },
  },
  {
    accessorKey: "estimatedDuration",
    header: "Duration",
    cell: (props) => {
      const row = props.row.original;
      return <>{row.estimatedDuration ? `${row.estimatedDuration} min` : "-"}</>;
    },
  },
  {
    accessorKey: "serviceAddress",
    header: "Service Address",
    cell: (props) => {
      const row = props.row.original;
      return (
        <div className="max-w-xs truncate">
          {row.serviceAddress || "-"}
        </div>
      );
    },
  },
  {
    accessorKey: "notes",
    header: "Notes",
    cell: (props) => {
      const row = props.row.original;
      return (
        <div className="max-w-xs truncate">
          {row.notes || "-"}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: (props) => {
      const row = props.row.original;
      return <>{formatDate(row.createdAt)}</>;
    },
  },
];
