import { GetCategoryListParams } from "@/api/categories/request.dto";
import FormWrapper from "@/components/form/form-wrapper/FormWrapper";
import React from "react";
import { useCategoryFilter } from "../../hooks";
import {
  CategoryFilterActionUI,
  CategoryFilterFormUI,
} from "../../components";

type Props = {
  queryParams: GetCategoryListParams;
  isLoading: boolean;
  setQueryParams: (queryParams: GetCategoryListParams) => void;
};

const CategoryFilterContainer = ({ queryParams, setQueryParams }: Props) => {
  const { formMethods, onSubmit, onClear } = useCategoryFilter({
    queryParams,
    setQueryParams,
  });
  return (
    <FormWrapper
      form={formMethods}
      formId="filter-category-list"
      onSubmit={onSubmit}
      className="grid grid-cols-4 space-x-4 space-y-4 mb-6"
    >
      <CategoryFilterFormUI />
      <CategoryFilterActionUI onClear={onClear} />
    </FormWrapper>
  );
};

export default CategoryFilterContainer;
