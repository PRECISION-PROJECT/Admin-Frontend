import { Category } from "@/api/categories/response.dto";
import { AugmentedColumnDef } from "@/components/tables/BaseTables";
import { formatDate } from "@/utils";
import React from "react";
import Image from "next/image";

export const columns = (): AugmentedColumnDef<Category>[] => [
  {
    accessorKey: "id",
    header: "ID",
    cell: (props) => {
      const row = props.row.original;
      return <>{row.id}</>;
    },
  },
  {
    accessorKey: "imageUrl",
    header: "Image",
    cell: (props) => {
      const row = props.row.original;
      return row.imageUrl ? (
        <div className="h-12 w-12">
          <Image
            width={48}
            height={48}
            src={row.imageUrl}
            className="h-12 w-12 rounded-md object-cover"
            alt={row.name}
          />
        </div>
      ) : (
        <span className="text-gray-400">-</span>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: (props) => {
      const row = props.row.original;
      return <>{row.name}</>;
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: (props) => {
      const row = props.row.original;
      return <>{row.description || "-"}</>;
    },
  },
  {
    accessorKey: "slug",
    header: "Slug",
    cell: (props) => {
      const row = props.row.original;
      return <>{row.slug}</>;
    },
  },
  {
    accessorKey: "parentId",
    header: "Parent ID",
    cell: (props) => {
      const row = props.row.original;
      return <>{row.parentId || "-"}</>;
    },
  },
  {
    accessorKey: "sortOrder",
    header: "Sort Order",
    cell: (props) => {
      const row = props.row.original;
      return <>{row.sortOrder}</>;
    },
  },
  {
    accessorKey: "isActive",
    header: "Status",
    cell: (props) => {
      const row = props.row.original;
      return (
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
            row.isActive
              ? "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400"
              : "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400"
          }`}
        >
          {row.isActive ? "Active" : "Inactive"}
        </span>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: (props) => {
      const row = props.row.original;
      return <>{row.createdAt ? formatDate(row.createdAt) : "-"}</>;
    },
  },
];
