"use client";
import { Card } from "@/components/ui/card";
import {
  ReportOrdersContentUI,
  ReportOrdersHeaderUI,
  ReportOrdersSkeletonUI,
} from "../../components/report-orders";
import { useReportOrdersContainer } from "../../hooks";

const ReportOrdersContainer = () => {
  const { data, isLoading } = useReportOrdersContainer();
  if (isLoading) return <ReportOrdersSkeletonUI />;
  return (
    <Card>
      <ReportOrdersHeaderUI />
      <ReportOrdersContentUI data={data} />
    </Card>
  );
};

export default ReportOrdersContainer;
