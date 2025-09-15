import { AugmentedColumnDef } from "@/components/tables/BaseTables";
import { Product } from "@/api/products/response.dto";
import Image from "next/image";
import Link from "next/link";

export const columns = (): AugmentedColumnDef<Product>[] => [
  {
    accessorKey: "id",
    header: "ID",
    cell: (props) => {
      const row = props.row.original;
      return <span className="font-mono text-sm">{row.id.slice(0, 8)}...</span>;
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
        <div className="max-w-[200px]">
          <p className="font-medium text-gray-900 dark:text-white truncate">
            {row.name}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
            {row.sku}
          </p>
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
            <Link
              href={`/categories/${row.category.id}`}
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              {row.category.name}
            </Link>
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
      return (
        <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30">
          {row.type}
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
        active: "bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:ring-green-400/30",
        inactive: "bg-gray-50 text-gray-600 ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/30",
        discontinued: "bg-red-50 text-red-700 ring-red-600/20 dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/30",
        out_of_stock: "bg-yellow-50 text-yellow-800 ring-yellow-600/20 dark:bg-yellow-400/10 dark:text-yellow-400 dark:ring-yellow-400/30",
      };
      return (
        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${statusColors[row.status as keyof typeof statusColors] || statusColors.inactive}`}>
          {row.status}
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
          <p className="font-medium text-gray-900 dark:text-white">
            ${row.price}
          </p>
          {row.salePrice && row.salePrice < row.price && (
            <p className="text-sm text-red-600 dark:text-red-400 line-through">
              ${row.salePrice}
            </p>
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
        <span className="font-medium text-gray-900 dark:text-white">
          {row.stockQuantity || 0}
        </span>
      );
    },
  },
  {
    accessorKey: "isFeatured",
    header: "Featured",
    cell: (props) => {
      const row = props.row.original;
      return row.isFeatured ? (
        <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 dark:bg-yellow-400/10 dark:text-yellow-400 dark:ring-yellow-400/30">
          Featured
        </span>
      ) : (
        <span className="text-gray-400">-</span>
      );
    },
  },
  {
    accessorKey: "viewCount",
    header: "Views",
    cell: (props) => {
      const row = props.row.original;
      return (
        <span className="font-medium text-gray-900 dark:text-white">
          {row.viewCount}
        </span>
      );
    },
  },
  {
    accessorKey: "material",
    header: "Material",
    cell: (props) => {
      const row = props.row.original;
      return (
        <span className="text-gray-900 dark:text-white">
          {row.material || "-"}
        </span>
      );
    },
  },
  {
    accessorKey: "color",
    header: "Color",
    cell: (props) => {
      const row = props.row.original;
      return (
        <span className="text-gray-900 dark:text-white">
          {row.color || "-"}
        </span>
      );
    },
  },
  {
    accessorKey: "keywords",
    header: "Keywords",
    cell: (props) => {
      const row = props.row.original;
      return (
        <div className="flex flex-wrap gap-1 max-w-[200px]">
          {row.keywords && row.keywords.length > 0 ? (
            row.keywords.map((keyword, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
              >
                {keyword}
              </span>
            ))
          ) : (
            <span className="text-gray-400">-</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: (props) => {
      const row = props.row.original;
      return (
        <span className="text-gray-900 dark:text-white">
          {new Date(row.createdAt).toLocaleDateString()}
        </span>
      );
    },
  },
];
