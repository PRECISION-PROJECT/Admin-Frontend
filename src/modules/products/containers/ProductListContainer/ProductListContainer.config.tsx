import { Product } from "@/api/products/response.dto";
import { AugmentedColumnDef } from "@/components/tables/BaseTables";
import { formatDate } from "@/utils";
import React from "react";
import Image from "next/image";

export const columns = (): AugmentedColumnDef<Product>[] => [
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
      return (
        <div className="max-w-xs">
          <div className="font-medium truncate">{row.name}</div>
          <div className="text-sm text-gray-500 truncate">{row.sku}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: (props) => {
      const row = props.row.original;
      return (
        <div>
          {row.category ? (
            <div>
              <div className="font-medium">{row.category.name}</div>
            </div>
          ) : (
            <span className="text-gray-400">-</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: (props) => {
      const row = props.row.original;
      const typeColors = {
        moulding: "bg-blue-100 text-blue-800",
        architectural: "bg-green-100 text-green-800",
        mantel: "bg-purple-100 text-purple-800",
        wood_import: "bg-orange-100 text-orange-800",
        wood_export: "bg-cyan-100 text-cyan-800",
      };
      
      const typeColor = typeColors[row.type as keyof typeof typeColors] || "bg-gray-100 text-gray-800";
      
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeColor}`}>
          {row.type?.replace("_", " ").toUpperCase() || "-"}
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
        active: "bg-green-100 text-green-800",
        inactive: "bg-gray-100 text-gray-800",
        discontinued: "bg-red-100 text-red-800",
        out_of_stock: "bg-yellow-100 text-yellow-800",
      };
      
      const statusColor = statusColors[row.status as keyof typeof statusColors] || "bg-gray-100 text-gray-800";
      
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor}`}>
          {row.status?.replace("_", " ").toUpperCase() || "-"}
        </span>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: (props) => {
      const row = props.row.original;
      return (
        <div className="text-right">
          <div className="font-medium">${row.price || "0.00"}</div>
          {row.salePrice && (
            <div className="text-sm text-red-600 line-through">
              ${row.salePrice}
            </div>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "stockQuantity",
    header: "Stock",
    cell: (props) => {
      const row = props.row.original;
      return (
        <div className="text-center">
          {row.stockQuantity !== null ? (
            <span className={row.stockQuantity! > 0 ? "text-green-600" : "text-red-600"}>
              {row.stockQuantity}
            </span>
          ) : (
            <span className="text-gray-400">-</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "isFeatured",
    header: "Featured",
    cell: (props) => {
      const row = props.row.original;
      return (
        <div className="text-center">
          {row.isFeatured ? (
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
              ★ Featured
            </span>
          ) : (
            <span className="text-gray-400">-</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "viewCount",
    header: "Views",
    cell: (props) => {
      const row = props.row.original;
      return <div className="text-center">{row.viewCount || 0}</div>;
    },
  },
  {
    accessorKey: "material",
    header: "Material",
    cell: (props) => {
      const row = props.row.original;
      return <div className="max-w-xs truncate">{row.material || "-"}</div>;
    },
  },
  {
    accessorKey: "color",
    header: "Color",
    cell: (props) => {
      const row = props.row.original;
      return <div className="max-w-xs truncate">{row.color || "-"}</div>;
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
