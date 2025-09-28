"use client";

import { IOrder } from "@/apis/orders/types";
import React, { useState } from "react";

export type OrdersDialogType =
  | "add"
  | "edit"
  | "delete"
  | "active"
  | "inactive"
  | "view";

interface OrderListContextType {
  open: OrdersDialogType | null;
  setOpen: (str: OrdersDialogType | null) => void;
  currentRow: IOrder | null;
  setCurrentRow: React.Dispatch<React.SetStateAction<IOrder | null>>;
}

const OrderListContext = React.createContext<OrderListContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function OrderListProvider({ children }: Props) {
  const [open, setOpen] = useState<OrdersDialogType | null>(null);
  const [currentRow, setCurrentRow] = useState<IOrder | null>(null);

  return (
    <OrderListContext value={{ open, setOpen, currentRow, setCurrentRow }}>
      {children}
    </OrderListContext>
  );
}

export const useOrderList = () => {
  const orderListContext = React.useContext(OrderListContext);

  if (!orderListContext) {
    throw new Error("useOrderList has to be used within <OrderListContext>");
  }

  return orderListContext;
};
