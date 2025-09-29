"use client";

import { Card } from "@/components/ui/card";
import React from "react";
import {
  ReportUsersContentUI,
  ReportUsersHeaderUI,
  ReportUsersSkeletonUI,
} from "../../components/report-users";
import { useReportUsersContainer } from "../../hooks";

const ReportUsersContainer = () => {
  const { data, isLoading } = useReportUsersContainer();
  if (isLoading) return <ReportUsersSkeletonUI />;
  return (
    <Card>
      <ReportUsersHeaderUI />
      <ReportUsersContentUI data={data} />
    </Card>
  );
};

export default ReportUsersContainer;
