"use client"
import { useAnalyticsVisitorsQuery } from "@/api/analytics";
import React from "react";
import Badge from "../ui/badge/Badge";

const AnalyticsMetrics: React.FC = () => {
  const { data: visitorMetrics, isLoading, error } = useAnalyticsVisitorsQuery();
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-4">
        {[1, 2, 3, 4].map((id) => (
          <div
            key={id}
            className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] animate-pulse"
          >
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 mb-3"></div>
            <div className="h-8 bg-gray-200 rounded dark:bg-gray-700 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-20"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error || !visitorMetrics) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-4">
        <div className="col-span-full text-center p-5 text-red-500">
          Failed to load analytics data
        </div>
      </div>
    );
  }

  const metricsData = [
    {
      id: 1,
      title: "Unique Visitors",
      value: visitorMetrics.data.uniqueVisitors,
      change: visitorMetrics.data.uniqueVisitorsChange,
      direction: visitorMetrics.data.uniqueVisitorsChange.startsWith('+') ? "up" :
                 visitorMetrics.data.uniqueVisitorsChange.startsWith('-') ? "down" : "neutral",
      comparisonText: "Vs last month",
    },
    {
      id: 2,
      title: "Total Pageviews",
      value: visitorMetrics.data.totalPageviews,
      change: visitorMetrics.data.pageviewsChange,
      direction: visitorMetrics.data.pageviewsChange.startsWith('+') ? "up" :
                 visitorMetrics.data.pageviewsChange.startsWith('-') ? "down" : "neutral",
      comparisonText: "Vs last month",
    },
    {
      id: 3,
      title: "Bounce Rate",
      value: visitorMetrics.data.bounceRate,
      change: visitorMetrics.data.bounceRateChange,
      direction: visitorMetrics.data.bounceRateChange.startsWith('-') ? "up" :
                 visitorMetrics.data.bounceRateChange.startsWith('+') ? "down" : "neutral",
      comparisonText: "Vs last month",
    },
    {
      id: 4,
      title: "Visit Duration",
      value: visitorMetrics.data.visitDuration,
      change: visitorMetrics.data.visitDurationChange,
      direction: visitorMetrics.data.visitDurationChange.startsWith('+') ? "up" :
                 visitorMetrics.data.visitDurationChange.startsWith('-') ? "down" : "neutral",
      comparisonText: "Vs last month",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-4">
      {/* <!-- Metric Item Start --> */}
      {metricsData.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]"
        >
          <p className="text-gray-500 text-theme-sm dark:text-gray-400">
            {item.title}
          </p>
          <div className="flex items-end justify-between mt-3">
            <div>
              <h4 className="text-2xl font-bold text-gray-800 dark:text-white/90">
                {item.value}
              </h4>
            </div>
            <div className="flex items-center gap-1">
              <Badge
                color={
                  item.direction === "up"
                    ? "success"
                    : item.direction === "down"
                    ? "error"
                    : "warning"
                }
              >
                <span className="text-xs"> {item.change}</span>
              </Badge>
              <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                {item.comparisonText}
              </span>
            </div>
          </div>
        </div>
      ))}

      {/* <!-- Metric Item End --> */}
    </div>
  );
};

export default AnalyticsMetrics;
