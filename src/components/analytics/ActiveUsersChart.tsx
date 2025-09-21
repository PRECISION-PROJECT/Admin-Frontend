"use client";
import { useAnalyticsDashboardQuery, useAnalyticsRealTimeQuery } from "@/api/analytics";
import { MoreDotIcon } from "@/icons";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function ActiveUsersChart() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: realTimeData, isLoading: realTimeLoading } = useAnalyticsRealTimeQuery();
  const { data: dashboardData, isLoading: dashboardLoading } = useAnalyticsDashboardQuery();

  const isLoading = realTimeLoading || dashboardLoading;
  const options: ApexOptions = {
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#465FFF"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      height: 140,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: "gradient", // Ensures gradient fill is explicitly defined
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 320,
          },
        },
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2, // Changed from ["2"] to match type expectations
    },
    markers: {
      size: 0,
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false, // Hides x-axis labels
      },
    },
    yaxis: {
      labels: {
        show: false, // Hides y-axis labels
      },
      title: {
        text: undefined, // Removed font size styling; unnecessary with hidden labels
      },
    },
  };

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  // Generate chart data from dashboard analytics
  const chartData = dashboardData?.visitorAnalytics || [];
  const series = [
    {
      name: "Visitors",
      data: chartData.length > 0 ? chartData.map(item => item.count) :
        [180, 181, 182, 184, 183, 182, 181, 182, 183, 185, 186, 183], // fallback data
    },
  ];

  if (isLoading) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-start justify-between">
          <div className="h-6 bg-gray-200 rounded dark:bg-gray-700 w-32 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded dark:bg-gray-700 w-6 animate-pulse"></div>
        </div>
        <div className="mt-6 space-y-4">
          <div className="h-8 bg-gray-200 rounded dark:bg-gray-700 w-48 animate-pulse"></div>
          <div className="h-32 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
          <div className="flex justify-around">
            <div className="h-16 bg-gray-200 rounded dark:bg-gray-700 w-16 animate-pulse"></div>
            <div className="h-16 bg-gray-200 rounded dark:bg-gray-700 w-16 animate-pulse"></div>
            <div className="h-16 bg-gray-200 rounded dark:bg-gray-700 w-16 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  const activeUsers = realTimeData?.data || {
    liveVisitors: 0,
    avgDaily: 0,
    avgWeekly: "0",
    avgMonthly: "0"
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Active Users
        </h3>

        <div className="relative h-fit">
          <button onClick={toggleDropdown} className="dropdown-toggle">
            <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
          </button>
          <Dropdown
            isOpen={isOpen}
            onClose={closeDropdown}
            className="w-40 p-2"
          >
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              View More
            </DropdownItem>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              Delete
            </DropdownItem>
          </Dropdown>
        </div>
      </div>

      <div className="mt-6 flex items-end gap-1.5">
        <div className="flex items-center gap-2.5">
          <span className="relative inline-block w-5 h-5">
            <span className="absolute w-2 h-2 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-error-500">
              <span className="absolute inline-flex w-4 h-4 rounded-full opacity-75 bg-error-400 animate-ping -top-1 -left-1"></span>
            </span>
          </span>

          <span className="font-semibold text-gray-800 activeUsers text-title-sm dark:text-white/90">
            {activeUsers.liveVisitors}
          </span>
        </div>
        <span className="block mb-1 text-gray-500 text-theme-sm dark:text-gray-400">
          Live visitors
        </span>
      </div>

      <div className="my-5 min-h-[155px] rounded-xl bg-gray-50 dark:bg-gray-900">
        <div className="-ml-[22px] -mr-2.5 h-full">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={140}
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-6">
        <div>
          <p className="text-lg font-semibold text-center text-gray-800 dark:text-white/90">
            {activeUsers.avgDaily}
          </p>
          <p className="mt-0.5 text-center text-theme-xs text-gray-500 dark:text-gray-400">
            Avg, Daily
          </p>
        </div>

        <div className="w-px bg-gray-200 h-11 dark:bg-gray-800"></div>

        <div>
          <p className="text-lg font-semibold text-center text-gray-800 dark:text-white/90">
            {activeUsers.avgWeekly}
          </p>
          <p className="mt-0.5 text-center text-theme-xs text-gray-500 dark:text-gray-400">
            Avg, Weekly
          </p>
        </div>

        <div className="w-px bg-gray-200 h-11 dark:bg-gray-800"></div>

        <div>
          <p className="text-lg font-semibold text-center text-gray-800 dark:text-white/90">
            {activeUsers.avgMonthly}
          </p>
          <p className="mt-0.5 text-center text-theme-xs text-gray-500 dark:text-gray-400">
            Avg, Monthly
          </p>
        </div>
      </div>
    </div>
  );
}
