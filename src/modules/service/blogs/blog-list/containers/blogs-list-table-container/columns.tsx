"use client";

import { IProduct } from "@/apis/products";
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
import { IOption } from "@/types";
import { ROUTES } from "@/utils/routes";
import { Column, ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import { CellAction } from "./cell-action";
import { IBlog } from "@/apis/blogs";
import { cn } from "@/lib/utils";

const STATUS_OPTIONS = [
  {
    value: "published",
    label: "Published",
  },
  {
    value: "draft",
    label: "Draft",
  },
  {
    value: "archived",
    label: "Archived",
  },
];

const FEATURE_OPTIONS = [
  {
    value: "true",
    label: "Featured",
  },
  {
    value: "false",
    label: "Not Featured",
  },
];

function getStatusColor(status: string) {
  switch (status) {
    case "published":
      return "bg-green-500 hover:bg-green-600";
    case "draft":
      return "bg-yellow-500 hover:bg-yellow-600";
    case "archived":
      return "bg-gray-500 hover:bg-gray-600";
    default:
      return "bg-gray-500 hover:bg-gray-600";
  }
}

export const columns = (): ColumnDef<IBlog>[] => [
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
    id: "authorId",
    accessorKey: "authorId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Author ID" />
    ),
    cell: ({ row }) => {
      const authorId = row.original.authorId;
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="cursor-help">{authorId}</div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{authorId}</p>
          </TooltipContent>
        </Tooltip>
      );
    },
    meta: {
      label: "Author Id",
      placeholder: "Search by author id...",
      variant: "text",
    },
    enableSorting: false,
    enableColumnFilter: true,
  },
  {
    id: "search",
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      const name = row.original.title;
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="cursor-help">{name}</div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{name}</p>
          </TooltipContent>
        </Tooltip>
      );
    },
    meta: {
      label: "Title",
      placeholder: "Search by blog title...",
      variant: "text",
    },
    enableSorting: false,
    enableColumnFilter: true,
  },
  {
    accessorKey: "excerpt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Excerpt" />
    ),
    cell: ({ row }) => {
      const excerpt = row.original.excerpt;
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="max-w-[300px] truncate cursor-help">{excerpt}</div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="max-w-[400px]">{excerpt}</p>
          </TooltipContent>
        </Tooltip>
      );
    },
  },
  {
    accessorKey: "keywords",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Keywords" />
    ),
    cell: ({ row }) => {
      const keywords = row.original.keywords;
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="max-w-[150px] truncate cursor-help">
              {keywords.length > 0 ? keywords.join(", ") : "-"}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="max-w-[400px]">
              {keywords.length > 0 ? keywords.join(", ") : "-"}
            </p>
          </TooltipContent>
        </Tooltip>
      );
    },
    enableColumnFilter: true,
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
    id: "status",
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.original.status;

      return (
        <Badge
          variant="secondary"
          className={cn("capitalize", getStatusColor(status))}
        >
          {status}
        </Badge>
      );
    },
    enableColumnFilter: true,
    meta: {
      label: "Status",
      variant: "select",
      options: STATUS_OPTIONS,
    },
  },
  {
    id: "isFeatured",
    accessorKey: "isFeatured",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Is Featured" />
    ),
    cell: ({ row }) => {
      const isActive = row.original.isFeatured;
      return (
        <Badge variant={isActive ? "default" : "secondary"}>
          {isActive ? "Featured" : "Not Featured"}
        </Badge>
      );
    },
    meta: {
      label: "Is Featured",
      placeholder: "Filter by featured...",
      variant: "select",
      options: FEATURE_OPTIONS,
    },
    enableColumnFilter: true,
  },
  {
    accessorKey: "publishedAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Published At" />
    ),
    cell: ({ row }) => {
      const publishedAt = row.original.publishedAt;
      return (
        <div className="flex items-center space-x-2">
          <Icons.calendar className="h-4 w-4" />
          <span className="text-sm">
            {publishedAt
              ? format(publishedAt as string, "dd/MM/yyyy HH:mm:ss")
              : "-"}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
    cell: ({ row }) => {
      const updatedAt = row.original.updatedAt;
      return (
        <div className="flex items-center space-x-2">
          <Icons.calendar className="h-4 w-4" />
          <span className="text-sm">
            {updatedAt
              ? format(updatedAt as string, "dd/MM/yyyy HH:mm:ss")
              : "-"}
          </span>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
