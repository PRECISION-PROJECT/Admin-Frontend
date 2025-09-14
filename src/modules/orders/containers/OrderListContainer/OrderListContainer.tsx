"use client";

import React, { useMemo } from "react";
import { columns } from "./OrderListContainer.config";
import { OrderListTableUI } from "../../components";
import { Order } from "@/api/orders/response.dto";
import { GetOrderListParams } from "@/api/orders/request.dto";

type Props = {
  metaData: {
    totalPages: number;
  };
  orderData: Order[];
  queryParams: GetOrderListParams;
  isLoading: boolean;
  setQueryParams: (queryParams: GetOrderListParams) => void;
};

const OrderListContainer = (props: Props) => {
  const {
    metaData,
    isLoading,
    queryParams,
    orderData,
    setQueryParams,
  } = props;
  const _columns = useMemo(() => columns(), []);
  return (
    <OrderListTableUI
      data={orderData}
      columns={_columns}
      isLoading={isLoading}
      metaData={metaData}
      filterParams={{ page: queryParams.page!, size: queryParams.size! }}
      onPageChange={(page) => {
        setQueryParams({ ...queryParams, page });
      }}
      onPageSizeChange={(size) => {
        setQueryParams({ ...queryParams, size });
      }}
    />
  );
};

export default OrderListContainer;
