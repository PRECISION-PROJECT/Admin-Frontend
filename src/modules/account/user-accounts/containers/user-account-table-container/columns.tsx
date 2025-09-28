"use client";
import { IUserResponse } from "@/apis/auths";
import { DataTableColumnHeader } from "@/components/shared/data-table/data-table-column-header";
import { Badge } from "@/components/ui/badge";
import ImageLoader from "@/components/ui/image-loader";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import { Column, ColumnDef } from "@tanstack/react-table";
import { format, formatDate } from "date-fns";
import { CheckCircle2, Text, XCircle } from "lucide-react";
import Image from "next/image";
import { UsersDialogType } from "../../contexts/user-account-context";
import { CellAction } from "./cell-action";

const STATUS_OPTIONS = [
  {
    value: "1",
    label: "Active",
  },
  {
    value: "2",
    label: "Inactive",
  },
];

export const columns = (
  onRowClick: (row: IUserResponse, type: UsersDialogType) => void
): ColumnDef<IUserResponse>[] => [
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
      label: "User Id",
    },
  },
  {
    accessorKey: "imageUrl",
    header: ({ column }: { column: Column<IUserResponse, unknown> }) => (
      <DataTableColumnHeader column={column} title="Image" />
    ),
    cell: ({ row }) => {
      const origin = row.original;
      const imageUrl = origin.imageUrl;
      const firstName = origin.firstName;
      if (!imageUrl) {
        return (
          <div className="relative aspect-square flex justify-center items-center">
            -
          </div>
        );
      }
      return (
        <ImageZoom>
          <ImageLoader
            alt={firstName}
            className="h-auto w-96"
            height={800}
            src={imageUrl}
            unoptimized
            width={1200}
          />
        </ImageZoom>
      );
    },
    enableSorting: false,
  },
  {
    id: "search",
    accessorKey: "firstName",
    header: ({ column }: { column: Column<IUserResponse, unknown> }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      const _row = row.original;
      const firstName = _row?.firstName ?? "-";
      const lastName = _row?.lastName ?? "-";
      return <div>{firstName + " " + lastName}</div>;
    },
    meta: {
      label: "Name",
      placeholder: "Search user by name...",
      variant: "text",
      icon: Text,
    },
    enableSorting: false,
    enableColumnFilter: true,
  },
  {
    id: "email",
    accessorKey: "email",
    header: ({ column }: { column: Column<IUserResponse, unknown> }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => {
      const origin = row.original;
      const email = origin.email;
      return <div>{email ?? "-"}</div>;
    },
    enableColumnFilter: true,
    meta: {
      label: "Email",
    },
  },
  {
    id: "role",
    accessorKey: "role",
    header: ({ column }: { column: Column<IUserResponse, unknown> }) => (
      <DataTableColumnHeader column={column} title="Role" />
    ),
    cell: ({ cell }) => <div>{cell.getValue<IUserResponse["role"]>()}</div>,
    enableColumnFilter: true,
    meta: {
      label: "Role",
    },
  },
  {
    id: "status",
    accessorKey: "status",
    header: ({ column }: { column: Column<IUserResponse, unknown> }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ cell }) => {
      const status = cell.getValue<IUserResponse["status"]>();
      const Icon = status === "active" ? CheckCircle2 : XCircle;

      return (
        <Badge variant="outline" className="capitalize">
          <Icon />
          {status}
        </Badge>
      );
    },
    enableColumnFilter: true,
    meta: {
      label: "Status",
      variant: "multiSelect",
      options: STATUS_OPTIONS,
    },
  },
  {
    id: "updatedAt",
    accessorKey: "updatedAt",
    header: ({ column }: { column: Column<IUserResponse, unknown> }) => (
      <DataTableColumnHeader column={column} title="Updated At" />
    ),
    cell: ({ row }) => {
      const origin = row.original;
      const updatedAt = origin.updatedAt;

      return (
        <div>{updatedAt ? format(updatedAt as string, "dd/MM/yyyy") : "-"}</div>
      );
    },
    enableColumnFilter: false,
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
