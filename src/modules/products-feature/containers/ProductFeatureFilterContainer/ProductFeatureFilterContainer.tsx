import { GetProductListParams } from "@/api/products/request.dto";
import FormWrapper from "@/components/form/form-wrapper/FormWrapper";
import React from "react";
import { useProductFeatureFilter } from "../../hooks";
import {
  ProductFeatureFilterActionUI,
  ProductFeatureFilterFormUI,
} from "../../components";

type Props = {
  queryParams: GetProductListParams;
  isLoading: boolean;
  setQueryParams: (queryParams: GetProductListParams) => void;
};

const ProductFeatureFilterContainer = ({ queryParams, setQueryParams }: Props) => {
  const { formMethods, onSubmit, onClear } = useProductFeatureFilter({
    queryParams,
    setQueryParams,
  });

  return (
    <FormWrapper
      form={formMethods}
      formId="filter-product-feature-form"
      onSubmit={onSubmit}
      className="space-y-4 mb-6"
    >
      <ProductFeatureFilterFormUI />
      <div className="flex justify-end">
        <ProductFeatureFilterActionUI onClear={onClear} />
      </div>
    </FormWrapper>
  );
};

export default ProductFeatureFilterContainer;
