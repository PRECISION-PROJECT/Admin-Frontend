import { GetProductListParams } from "@/api/products/request.dto";
import FormWrapper from "@/components/form/form-wrapper/FormWrapper";
import React from "react";
import { useProductFilter } from "../../hooks";
import {
  ProductFilterActionUI,
  ProductFilterFormUI,
} from "../../components";

type Props = {
  queryParams: GetProductListParams;
  isLoading: boolean;
  setQueryParams: (queryParams: GetProductListParams) => void;
};

const ProductFilterContainer = ({ queryParams, setQueryParams }: Props) => {
  const { formMethods, onSubmit, onClear } = useProductFilter({
    queryParams,
    setQueryParams,
  });
  return (
    <FormWrapper
      form={formMethods}
      formId="filter-product-list"
      onSubmit={onSubmit}
      className="space-y-4 mb-6"
    >
      <ProductFilterFormUI />
      <div className="flex justify-end">
        <ProductFilterActionUI onClear={onClear} />
      </div>
    </FormWrapper>
  );
};

export default ProductFilterContainer;
