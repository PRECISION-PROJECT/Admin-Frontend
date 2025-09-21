"use client"
import { useOrderAnalyticsQuery } from "@/api/reports";
import Image from "next/image";
import Button from "../ui/button/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

// Define the TypeScript interface for the table rows
interface OrderItem {
  id: number;
  name: string;
  category: string;
  country: string;
  cr: string;
  value: string;
}

export default function RecentOrderAnalytics() {
  const { data: orderData, isLoading, error } = useOrderAnalyticsQuery();

  // Fallback data for display
  const fallbackData: OrderItem[] = [
    {
      id: 1,
      name: "TailGrids",
      category: "UI Kits",
      country: "/images/country/country-01.svg",
      cr: "Dashboard",
      value: "12,499",
    },
    {
      id: 2,
      name: "GrayGrids",
      category: "Templates",
      country: "/images/country/country-02.svg",
      cr: "Dashboard",
      value: "5498",
    },
    {
      id: 3,
      name: "Uideck",
      category: "Templates",
      country: "/images/country/country-03.svg",
      cr: "Dashboard",
      value: "4621",
    },
    {
      id: 4,
      name: "FormBold",
      category: "SaaS",
      country: "/images/country/country-04.svg",
      cr: "Dashboard",
      value: "13843",
    },
    {
      id: 5,
      name: "NextAdmin",
      category: "Templates",
      country: "/images/country/country-05.svg",
      cr: "Dashboard",
      value: "7523",
    },
  ];

  // Use API data or fallback data
  const displayData = orderData && orderData.data.ordersByMonth.length > 0
    ? orderData.data.ordersByMonth.slice(0, 5).map((order, index) => ({
        id: index + 1,
        name: order.month,
        category: "Orders",
        country: "/images/country/country-01.svg", // Default country image
        cr: "Analytics",
        value: order.revenue.toLocaleString(),
      }))
    : fallbackData;

  if (isLoading) {
    return (
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="px-4 pt-4 sm:px-6">
          <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="h-6 bg-gray-200 rounded dark:bg-gray-700 w-32 animate-pulse"></div>
            <div className="flex gap-3">
              <div className="h-8 bg-gray-200 rounded dark:bg-gray-700 w-16 animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded dark:bg-gray-700 w-16 animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-32 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-16 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white  dark:border-white/[0.05] dark:bg-white/[0.03] ">
      <div className="px-4 pt-4 sm:px-6">
        <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
              {orderData ? "Order Analytics" : "Recent Orders"}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <Button size="sm" variant="outline">
              <svg
                className="stroke-current fill-white dark:fill-gray-800"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.29004 5.90393H17.7067"
                  stroke=""
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.7075 14.0961H2.29085"
                  stroke=""
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.0826 3.33331C13.5024 3.33331 14.6534 4.48431 14.6534 5.90414C14.6534 7.32398 13.5024 8.47498 12.0826 8.47498C10.6627 8.47498 9.51172 7.32398 9.51172 5.90415C9.51172 4.48432 10.6627 3.33331 12.0826 3.33331Z"
                  fill=""
                  stroke=""
                  strokeWidth="1.5"
                />
                <path
                  d="M7.91745 11.525C6.49762 11.525 5.34662 12.676 5.34662 14.0959C5.34661 15.5157 6.49762 16.6667 7.91745 16.6667C9.33728 16.6667 10.4883 15.5157 10.4883 14.0959C10.4883 12.676 9.33728 11.525 7.91745 11.525Z"
                  fill=""
                  stroke=""
                  strokeWidth="1.5"
                />
              </svg>
              Filter
            </Button>
            <Button size="sm" variant="outline">
              See all
            </Button>
          </div>
        </div>
      </div>
      <div className="max-w-full ">
        <div className="overflow-x-auto">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-gray-100 border-y dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-4 py-3 font-medium text-gray-500 sm:px-6 text-start text-theme-xs dark:text-gray-400"
                >
                  {orderData ? "Month" : "Products"}
                </TableCell>
                <TableCell
                  isHeader
                  className="px-4 py-3 font-medium text-gray-500 sm:px-6 text-start text-theme-xs dark:text-gray-400"
                >
                  Category
                </TableCell>
                <TableCell
                  isHeader
                  className="px-4 py-3 font-medium text-gray-500 sm:px-6 text-start text-theme-xs dark:text-gray-400"
                >
                  Country
                </TableCell>
                <TableCell
                  isHeader
                  className="px-4 py-3 font-medium text-gray-500 sm:px-6 text-start text-theme-xs dark:text-gray-400"
                >
                  CR
                </TableCell>
                <TableCell
                  isHeader
                  className="px-4 py-3 font-medium text-gray-500 sm:px-6 text-start text-theme-xs dark:text-gray-400"
                >
                  {orderData ? "Revenue" : "Value"}
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {displayData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="px-4 py-3 font-medium text-gray-800 sm:px-6 text-start text-theme-sm dark:text-white/90">
                    {item.name}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 sm:px-6 text-start text-theme-sm dark:text-gray-400">
                    {item.category}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 sm:px-6 text-start text-theme-sm dark:text-gray-400">
                    <div className="w-5 h-5 overflow-hidden rounded-full">
                      <Image
                        src={item.country}
                        className="w-5 h-5 rounded-full"
                        alt="country"
                        width={20}
                        height={20}
                      />
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 sm:px-6 text-start text-theme-sm dark:text-gray-400">
                    {item.cr}
                  </TableCell>
                  <TableCell className="px-4 text-theme-sm sm:px-6 text-start text-success-600">
                    ${item.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
