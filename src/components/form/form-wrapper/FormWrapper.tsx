import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

export interface FormWrapperProps<T extends FieldValues> {
  form: UseFormReturn<T, unknown>;
  onSubmit: SubmitHandler<T>;
  children?: React.ReactNode;
  formId?: string;
  className?: string;
}

const FormWrapper = <TFormValue extends FieldValues>({
  form,
  onSubmit,
  children,
  formId = "form-submit-wrapper",
  className,
}: FormWrapperProps<TFormValue>) => {
  return (
    <FormProvider {...form}>
      <form
        className={className}
        id={formId}
        onSubmit={form.handleSubmit(onSubmit as SubmitHandler<TFormValue>)}
        autoComplete="off"
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default FormWrapper;
