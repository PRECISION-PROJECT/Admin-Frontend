"use client";

import { Card } from "@/components/ui/card";
import {
  ReportRevenueContentUI,
  ReportRevenueHeaderUI,
  ReportRevenueSkeletonUI,
} from "../../components/report-revenue";
import { useReportRevenueContainer } from "../../hooks";

const ReportRevenueContainer = () => {
  const { data, isLoading } = useReportRevenueContainer();
  if (isLoading) return <ReportRevenueSkeletonUI />;
  return (
    <Card>
      <ReportRevenueHeaderUI />
      <ReportRevenueContentUI data={data} />
    </Card>
  );
};

export default ReportRevenueContainer;
