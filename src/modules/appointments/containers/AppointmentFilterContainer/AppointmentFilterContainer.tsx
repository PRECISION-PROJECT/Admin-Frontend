import { GetAppointmentListParams } from "@/api/appointments/request.dto";
import FormWrapper from "@/components/form/form-wrapper/FormWrapper";
import React from "react";
import { useAppointmentFilter } from "../../hooks";
import {
  AppointmentFilterActionUI,
  AppointmentFilterFormUI,
} from "../../components";

type Props = {
  queryParams: GetAppointmentListParams;
  isLoading: boolean;
  setQueryParams: (queryParams: GetAppointmentListParams) => void;
};

const AppointmentFilterContainer = ({ queryParams, setQueryParams }: Props) => {
  const { formMethods, onSubmit, onClear } = useAppointmentFilter({
    queryParams,
    setQueryParams,
  });
  return (
    <FormWrapper
      form={formMethods}
      formId="filter-appointment-list"
      onSubmit={onSubmit}
      className="flex justify-between items-end mb-6"
    >
      <AppointmentFilterFormUI />
      <AppointmentFilterActionUI onClear={onClear} />
    </FormWrapper>
  );
};

export default AppointmentFilterContainer;
