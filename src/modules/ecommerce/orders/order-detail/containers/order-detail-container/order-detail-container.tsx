"use client";
import { Separator } from "@/components/ui/separator";
import React from "react";
import {
  OrderDetailAppointmentUI,
  OrderDetailCustomerUI,
  OrderDetailHeaderUI,
  OrderDetailItemsUI,
  OrderDetailNotFoundUI,
  OrderDetailSkeletonUI,
  OrderDetailSummaryInfoUI,
} from "../../components";
import { useOrderDetail } from "../../hooks";

type Props = {
  id: string;
};

const OrderDetailContainer = (props: Props) => {
  const { data, isLoading } = useOrderDetail(props.id);

  if (isLoading) {
    return <OrderDetailSkeletonUI />;
  }

  if (!data) return <OrderDetailNotFoundUI />;

  return (
    <>
      <OrderDetailHeaderUI order={data} />
      <Separator />
      <OrderDetailSummaryInfoUI order={data} />
      <Separator />
      <OrderDetailItemsUI order={data} />
      <Separator />
      <OrderDetailCustomerUI order={data} />
      <Separator />
      <OrderDetailAppointmentUI order={data} />
    </>
  );
};

export default OrderDetailContainer;
