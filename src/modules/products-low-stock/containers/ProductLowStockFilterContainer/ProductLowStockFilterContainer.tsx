import { GetProductLowStockListParams } from "@/api/products-low-stock/request.dto";
import FormWrapper from "@/components/form/form-wrapper/FormWrapper";
import React from "react";
import { useProductLowStockFilter } from "../../hooks";
import {
  ProductLowStockFilterActionUI,
  ProductLowStockFilterFormUI,
} from "../../components";

type Props = {
  queryParams: GetProductLowStockListParams;
  isLoading: boolean;
  setQueryParams: (queryParams: GetProductLowStockListParams) => void;
};

const ProductLowStockFilterContainer = ({ queryParams, setQueryParams }: Props) => {
  const { formMethods, onSubmit, onClear } = useProductLowStockFilter({
    queryParams,
    setQueryParams,
  });
  return (
    <FormWrapper
      form={formMethods}
      formId="filter-product-low-stock-list"
      onSubmit={onSubmit}
      className="flex justify-between items-end mb-6"
    >
      <ProductLowStockFilterFormUI />
      <ProductLowStockFilterActionUI onClear={onClear} />
    </FormWrapper>
  );
};

export default ProductLowStockFilterContainer;
