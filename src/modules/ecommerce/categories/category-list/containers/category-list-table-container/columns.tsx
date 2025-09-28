"use client";

import { Category } from "@/apis/categories";
import { Icons } from "@/assets/icons";
import { DataTableColumnHeader } from "@/components/shared/data-table/data-table-column-header";
import { Badge } from "@/components/ui/badge";
import ImageLoader from "@/components/ui/image-loader";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Column, ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import Image from "next/image";
import { CellAction } from "./cell-action";

export const columns = (): ColumnDef<Category>[] => [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => {
      const id = row.original.id;
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="font-mono text-sm cursor-help">
              {id.slice(0, 8)}...
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-mono">{id}</p>
          </TooltipContent>
        </Tooltip>
      );
    },
    enableColumnFilter: true,
  },
  {
    id: "search",
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      const name = row.original.name;
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="font-medium cursor-help">{name}</div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{name}</p>
          </TooltipContent>
        </Tooltip>
      );
    },
    meta: {
      label: "Name",
      placeholder: "Search by name...",
      variant: "text",
    },
    enableSorting: false,
    enableColumnFilter: true,
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => {
      const description = row.original.description;
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="max-w-[300px] truncate cursor-help">
              {description}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="max-w-[400px]">{description}</p>
          </TooltipContent>
        </Tooltip>
      );
    },
  },
  {
    accessorKey: "imageUrl",
    header: ({ column }: { column: Column<Category, unknown> }) => (
      <DataTableColumnHeader column={column} title="Image" />
    ),
    cell: ({ row }) => {
      const origin = row.original;
      const imageUrl = origin.imageUrl;
      const firstName = origin.name;
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
    accessorKey: "slug",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Slug" />
    ),
    cell: ({ row }) => {
      const slug = row.original.slug;
      return (
        <div className="flex items-center space-x-2">
          <span className="font-mono text-sm">{slug}</span>
        </div>
      );
    },
    enableColumnFilter: true,
  },
  {
    accessorKey: "sortOrder",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sort Order" />
    ),
    cell: ({ row }) => {
      const sortOrder = row.original.sortOrder;
      return (
        <div className="flex items-center space-x-2">
          <span>{sortOrder}</span>
        </div>
      );
    },
    enableColumnFilter: true,
  },
  {
    accessorKey: "isActive",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const isActive = row.original.isActive;
      return (
        <Badge variant={isActive ? "default" : "secondary"}>
          {isActive ? "Active" : "Inactive"}
        </Badge>
      );
    },
    meta: {
      label: "Status",
      placeholder: "Filter by status...",
      variant: "select",
      options: [
        { label: "Active", value: "true" },
        { label: "Inactive", value: "false" },
      ],
    },
    enableColumnFilter: true,
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Updated At" />
    ),
    cell: ({ row }) => {
      const updatedAt = row.original.updatedAt;
      return (
        <div className="flex items-center space-x-2">
          <Icons.calendar className="h-4 w-4" />
          <span className="text-sm">
            {updatedAt ? format(updatedAt as string, "dd/MM/yyyy") : "-"}
          </span>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <CellAction data={row.original} />
    ),
  },
];
