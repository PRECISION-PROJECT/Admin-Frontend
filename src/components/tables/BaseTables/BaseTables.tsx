"use client";
import React, { useEffect, useState } from "react";
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { NoDataIcon } from "@/icons";
import { cn } from "@/utils/cn";
import BaseTablePagination from "./BaseTablePagination";
import BaseTablePageSizeSelect from "./BaseTablePageSizeSelect";
import BaseTableSortButton from "./BaseTableSortButton";
import { DEFAULT_PAGE_SIZE } from "./BaseTable.const";

export type BaseTableProps<T> = {
  data: T[];
  columns: AugmentedColumnDef<T>[];
  onRowClick?: (
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    row: T
  ) => void;
  isLoading?: boolean;
  columnVisibility?: Record<string, boolean>;
  sorting?: SortingState;
  setSorting?: React.Dispatch<React.SetStateAction<SortingState>>;
  onSort?: () => void;
  paginationProps?: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  };
  pageSizeProps?: {
    size: number;
    onChange?: (pageSize: number) => void;
  };
  className?: string;
};

export type AugmentedColumnDef<T> = ColumnDef<T> & {
  sortable?: boolean;
  className?: string;
  headerClassName?: string;
  cellClassName?: string;
};

export type TableModelType<T> = T & { id?: string | number };

const BaseTables = <T extends { id?: string | number }>({
  data: propData,
  columns,
  onRowClick,
  isLoading,
  columnVisibility: propColumnVisibility,
  sorting,
  setSorting,
  paginationProps,
  pageSizeProps,
  onSort,
  className = "",
}: BaseTableProps<TableModelType<T>>) => {
  const [data, setData] = useState(() => propData);
  const [columnVisibility, setColumnVisibility] = useState(
    () => propColumnVisibility ?? {}
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getRowId: (row) => row.id?.toString() || "",
    state: {
      columnVisibility,
      sorting,
    },
    manualSorting: true,
    onSortingChange: (updater) => {
      setSorting?.(updater);
      onSort?.();
    },
    defaultColumn: {
      minSize: 0,
      size: 0,
    },
    onColumnVisibilityChange: setColumnVisibility,
    sortDescFirst: true,
  });

  useEffect(() => {
    if (isLoading) {
      const skeletonData = [...Array(10)].map((_, index) => ({
        id: `skeleton-${index}`,
      })) as TableModelType<T>[];
      setData(skeletonData);
      return;
    }
    setData(propData);
  }, [propData, isLoading]);

  useEffect(() => {
    setColumnVisibility((prev) => ({
      ...prev,
      ...propColumnVisibility,
    }));
  }, [propColumnVisibility]);

  const renderSkeletonCell = () => (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
    </div>
  );

  return (
    <div
      className={cn(
        "overflow-hidden bg-white dark:bg-white/[0.03]",
        className
      )}
    >
      {/* Table Container */}
      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div>
          <Table>
            <TableHeader className="border-t border-gray-100 dark:border-white/[0.05]">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const { sortable, headerClassName } = header.column
                      .columnDef as AugmentedColumnDef<T>;
                    return (
                      <TableCell
                        key={header.id}
                        isHeader
                        {...(header.colSpan > 1 && { colSpan: header.colSpan })}
                        className={cn(
                          "px-4 py-3 border border-gray-100 dark:border-white/[0.05]",
                          headerClassName
                        )}
                      >
                        {header.isPlaceholder ? null : (
                          <div className="flex items-center justify-between cursor-pointer">
                            <p className="font-medium text-gray-700 text-theme-xs dark:text-gray-400">
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                            </p>
                            {sortable && (
                              <BaseTableSortButton
                                sortDirection={header.column.getIsSorted()}
                                onClick={() => header.column.toggleSorting()}
                                disabled={isLoading}
                              />
                            )}
                          </div>
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {!!data.length &&
                table.getRowModel().rows.map((row) => {
                  return (
                    <TableRow
                      key={row.id}
                      onClick={(e) => onRowClick?.(e, row.original)}
                      className={cn(onRowClick && "cursor-pointer")}
                    >
                      {row.getVisibleCells().map((cell) => {
                        const columnDef = cell.column
                          .columnDef as AugmentedColumnDef<T>;
                        return (
                          <TableCell
                            key={cell.id}
                            className={cn(
                              "px-4 py-4 font-normal text-gray-800 border border-gray-100 dark:border-white/[0.05] text-theme-sm dark:text-gray-400 whitespace-nowrap",
                              columnDef.cellClassName
                            )}
                          >
                            {isLoading
                              ? renderSkeletonCell()
                              : flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              {!isLoading && !data.length && (
                <TableRow>
                  <TableCell
                    {...{ colSpan: columns.length }}
                    className="text-center py-12"
                  >
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <NoDataIcon className="text-gray-400 dark:text-gray-600" />
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination and Page Size Controls */}
      {(!!pageSizeProps || !!paginationProps) && !isLoading && (
        <div className="border border-t-0 rounded-b-xl border-gray-100 py-4 pl-[18px] pr-4 dark:border-white/[0.05]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            {pageSizeProps && (
              <div className="pt-3 xl:pt-0">
                <BaseTablePageSizeSelect
                  value={pageSizeProps.size || DEFAULT_PAGE_SIZE}
                  onChange={pageSizeProps.onChange || (() => {})}
                  disabled={isLoading}
                />
              </div>
            )}
            {!!paginationProps && paginationProps.totalPages > 1 && (
              <BaseTablePagination
                totalPages={paginationProps.totalPages}
                initialPage={paginationProps.currentPage}
                onPageChange={paginationProps.onPageChange}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BaseTables;
