import {
  SelectField,
  TextAreaField,
  TextField
} from "@/components/form-field";
import { SwitchFieldV2 } from "@/components/form-field/switch-fieldV2";
import { IOption } from "@/types";
import { DEFAULT_STATUS_OPTIONS } from "@/utils/const";
import { useFormContext } from "react-hook-form";
import { CreateProductFormData } from "../../hooks";

type Props = {
  isPending: boolean;
  parentCategoryOptions: IOption<string>[];
};

const CreateProductFormBasicUI = ({
  isPending,
  parentCategoryOptions,
}: Props) => {
  const { control } = useFormContext<CreateProductFormData>();
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Basic Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextField
          control={control}
          name="name"
          label="Product Name"
          placeholder="Enter a product name"
          required
          disabled={isPending}
        />

        <TextField
          control={control}
          name="sku"
          label="SKU"
          placeholder="Enter a SKU"
          required
          disabled={isPending}
        />
      </div>
      <div>
        <TextAreaField
          control={control}
          name="description"
          label="Description"
          placeholder="Enter a description"
          required
          config={{
            maxLength: 1000,
            showCharCount: true,
            rows: 4,
          }}
          disabled={isPending}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 -mt-2">
        <div>
          <SelectField
            control={control}
            name="categoryId"
            label="Category"
            placeholder="Select a category"
            required
            disabled={isPending}
            options={parentCategoryOptions}
            fullWidth
          />
        </div>
        <div>
          <SelectField
            control={control}
            name="status"
            label="Status"
            placeholder="Select a status"
            required
            disabled={isPending}
            options={DEFAULT_STATUS_OPTIONS}
            fullWidth
          />
        </div>
      </div>
      <div>
        <SwitchFieldV2
          control={control}
          name="isFeatured"
          label="Featured Product"
          required
          description="Mark this product as featured to highlight it on your store."
        />
      </div>
    </div>
  );
};

export default CreateProductFormBasicUI;
