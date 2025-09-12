import { GetUserListParams } from "@/api/user/request.dto";
import FormWrapper from "@/components/form/form-wrapper/FormWrapper";
import React from "react";
import { useUserAccountFilter } from "../../hooks";
import {
  UserAccountFilterActionUI,
  UserAccountFilterFormUI,
} from "../../components";

type Props = {
  queryParams: GetUserListParams;
  isLoading: boolean;
  setQueryParams: (queryParams: GetUserListParams) => void;
};

const UserAccountFilterContainer = ({ queryParams, setQueryParams }: Props) => {
  const { formMethods, onSubmit, onClear } = useUserAccountFilter({
    queryParams,
    setQueryParams,
  });
  return (
    <FormWrapper
      form={formMethods}
      formId="filter-user-list"
      onSubmit={onSubmit}
      className="grid grid-cols-4 space-x-4 space-y-4 mb-6"
    >
      <UserAccountFilterFormUI />
      <UserAccountFilterActionUI onClear={onClear} />
    </FormWrapper>
  );
};

export default UserAccountFilterContainer;
