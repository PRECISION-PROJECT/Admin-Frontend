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
import { ROUTES } from "@/utils/routes";
import { Column, ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import { CellAction } from "./cell-action";

export const columns = (): ColumnDef<IProduct>[] => [
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
    accessorKey: "imageUrl",
    header: ({ column }: { column: Column<IProduct, unknown> }) => (
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
            <div className="cursor-help">{name}</div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{name}</p>
          </TooltipContent>
        </Tooltip>
      );
    },
    meta: {
      label: "Name",
      placeholder: "Search by product name...",
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
    id: "types",
    accessorKey: "type",
    header: ({ column }: { column: Column<IProduct, unknown> }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    cell: ({ row }) => {
      const type = row.original.type;
      const categoryId = row.original.categoryId;
      const url = ROUTES.CATEGORY_DETAIL.replace(":id", categoryId);
      return (
        <Link href={url} className="truncate hover:underline">
          {type}
        </Link>
      );
    },
    enableColumnFilter: true,
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
    accessorKey: "color",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Color" />
    ),
    cell: ({ row }) => {
      const color = row.original.color;
      return (
        <div className="flex items-center space-x-2">
          <span className="font-mono text-sm">{color}</span>
        </div>
      );
    },
    enableSorting: true,
  },
  {
    accessorKey: "salePrice",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sale Price" />
    ),
    cell: ({ row }) => {
      const salePrice = row.original.salePrice;
      return (
        <div className="flex items-center space-x-2">
          <span className="font-mono text-sm">{salePrice}</span>
        </div>
      );
    },
    enableSorting: true,
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
    cell: ({ row }) => {
      const price = row.original.price;
      return (
        <div className="flex items-center space-x-2">
          <span className="font-mono text-sm">{price}</span>
        </div>
      );
    },
    enableSorting: true,
  },

  {
    id: "status",
    accessorKey: "status",
    header: ({ column }: { column: Column<IProduct, unknown> }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.original.status;
      const Icon = status === "active" ? CheckCircle2 : XCircle;

      return (
        <Badge variant="outline" className="capitalize">
          <Icon />
          {status}
        </Badge>
      );
    },
    enableColumnFilter: true,
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
