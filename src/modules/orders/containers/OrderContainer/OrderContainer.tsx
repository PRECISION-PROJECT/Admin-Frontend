"use client";

import React from "react";
import { useOrder } from "../../hooks";
import OrderFilterContainer from "../OrderFilterContainer";
import OrderListContainer from "../OrderListContainer";

const OrderContainer = () => {
  const { queryParams, isLoading, orderData, metaData, setQueryParams } =
    useOrder();
  return (
    <div className="p-4 sm:p-6 overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <OrderFilterContainer
        queryParams={queryParams}
        isLoading={isLoading}
        setQueryParams={setQueryParams}
      />
      <OrderListContainer
        metaData={metaData}
        orderData={orderData}
        queryParams={queryParams}
        isLoading={isLoading}
        setQueryParams={setQueryParams}
      />
    </div>
  );
};

export default OrderContainer;
