import React from "react";

type Props = {
  numberOfUser: number;
  numberOfActiveUser: number;
  numberOfInactiveUser: number;
  numberOfBlockUser: number;
};

const UserAccountMetricUI = ({
  numberOfActiveUser,
  numberOfInactiveUser,
  numberOfUser,
  numberOfBlockUser,
}: Props) => {
  return (
    <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-gray-800 dark:text-white/90">
            Overview
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 rounded-xl border border-gray-200 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0 dark:divide-gray-800 dark:border-gray-800">
        <div className="border-b p-5 sm:border-r lg:border-b-0">
          <p className="mb-1.5 text-sm text-gray-400 dark:text-gray-500">
            Total users
          </p>
          <h3 className="text-3xl text-gray-800 dark:text-white/90">
            {numberOfUser}
          </h3>
        </div>
        <div className="border-b p-5 lg:border-b-0">
          <p className="mb-1.5 text-sm text-gray-400 dark:text-gray-500">
            Active users
          </p>
          <h3 className="text-3xl text-gray-800 dark:text-white/90">
            {numberOfActiveUser}
          </h3>
        </div>
        <div className="border-b p-5 sm:border-r sm:border-b-0">
          <p className="mb-1.5 text-sm text-gray-400 dark:text-gray-500">
            Inactive users
          </p>
          <h3 className="text-3xl text-gray-800 dark:text-white/90">
            {numberOfInactiveUser}
          </h3>
        </div>
        <div className="p-5">
          <p className="mb-1.5 text-sm text-gray-400 dark:text-gray-500">
            Blocked users
          </p>
          <h3 className="text-3xl text-gray-800 dark:text-white/90">
            {numberOfBlockUser}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default UserAccountMetricUI;
