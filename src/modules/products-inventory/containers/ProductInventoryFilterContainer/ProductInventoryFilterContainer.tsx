import { GetProductInventoryListParams } from "@/api/products-inventory/request.dto";
import FormWrapper from "@/components/form/form-wrapper/FormWrapper";
import React from "react";
import { useProductInventoryFilter } from "../../hooks";
import {
  ProductInventoryFilterActionUI,
  ProductInventoryFilterFormUI,
} from "../../components";

type Props = {
  queryParams: GetProductInventoryListParams;
  isLoading: boolean;
  setQueryParams: (queryParams: GetProductInventoryListParams) => void;
};

const ProductInventoryFilterContainer = ({ queryParams, setQueryParams }: Props) => {
  const { formMethods, onSubmit, onClear } = useProductInventoryFilter({
    queryParams,
    setQueryParams,
  });
  return (
    <FormWrapper
      form={formMethods}
      formId="filter-product-inventory-list"
      onSubmit={onSubmit}
      className="space-y-4 mb-6"
    >
      <ProductInventoryFilterFormUI />
      <div className="flex justify-end">
        <ProductInventoryFilterActionUI onClear={onClear} />
      </div>
    </FormWrapper>
  );
};

export default ProductInventoryFilterContainer;
