import { GetOrderListParams } from "@/api/orders/request.dto";
import FormWrapper from "@/components/form/form-wrapper/FormWrapper";
import React from "react";
import { useOrderFilter } from "../../hooks";
import {
  OrderFilterActionUI,
  OrderFilterFormUI,
} from "../../components";

type Props = {
  queryParams: GetOrderListParams;
  isLoading: boolean;
  setQueryParams: (queryParams: GetOrderListParams) => void;
};

const OrderFilterContainer = ({ queryParams, setQueryParams }: Props) => {
  const { formMethods, onSubmit, onClear } = useOrderFilter({
    queryParams,
    setQueryParams,
  });
  return (
    <FormWrapper
      form={formMethods}
      formId="filter-order-list"
      onSubmit={onSubmit}
      className="flex justify-between items-end mb-6"
    >
      <OrderFilterFormUI />
      <OrderFilterActionUI onClear={onClear} />
    </FormWrapper>
  );
};

export default OrderFilterContainer;
