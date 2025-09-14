"use client";

import React from "react";
import { useUserAccountMetric } from "../../hooks";
import { UserAccountMetricUI } from "../../components";

const UserAccountMetricContainer = () => {
  const { userData, isLoading } = useUserAccountMetric();
  return <UserAccountMetricUI isLoading={isLoading} data={userData} />;
};

export default UserAccountMetricContainer;
