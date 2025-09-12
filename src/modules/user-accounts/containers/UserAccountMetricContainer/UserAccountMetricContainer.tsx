import React from "react";
import { useUserAccountMetric } from "../../hooks";
import { UserAccountMetricUI } from "../../components";

const UserAccountMetricContainer = () => {
  const {
    numberOfUser,
    numberOfActiveUser,
    numberOfInactiveUser,
    numberOfBlockUser,
  } = useUserAccountMetric();
  return (
    <UserAccountMetricUI
      numberOfUser={numberOfUser}
      numberOfActiveUser={numberOfActiveUser}
      numberOfInactiveUser={numberOfInactiveUser}
      numberOfBlockUser={numberOfBlockUser}
    />
  );
};

export default UserAccountMetricContainer;
