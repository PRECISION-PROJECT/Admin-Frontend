"use client";

import { Card } from "@/components/ui/card";
import {
  ReportDashboardContentUI,
  ReportDashboardHeaderUI,
  ReportDashboardSkeletonUI,
} from "../../components/report-dashboard";
import { useReportDashboardContainer } from "../../hooks";

const ReportDashboardContainer = () => {
  const { data, isLoading } = useReportDashboardContainer();
  if (isLoading) return <ReportDashboardSkeletonUI />;
  return (
    <Card>
      <ReportDashboardHeaderUI />
      <ReportDashboardContentUI data={data} />
    </Card>
  );
};

export default ReportDashboardContainer;
