import { TextField } from "@/components/form-field";
import { useFormContext } from "react-hook-form";
import { CreateProductFormData } from "../../hooks";

type Props = {
  isPending: boolean;
};

const CreateProductFormPricingUI = ({ isPending }: Props) => {
  const { control } = useFormContext<CreateProductFormData>();
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Pricing & Inventory</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <TextField
          control={control}
          name="price"
          type="number"
          label="Price"
          min={0}
          step={0.01}
          required
          disabled={isPending}
        />

        <TextField
          control={control}
          name="salePrice"
          type="number"
          label="Sale Price"
          min={0}
          step={0.01}
          required
          disabled={isPending}
        />

        <TextField
          control={control}
          name="stockQuantity"
          type="number"
          label="Stock Quantity"
          min={0}
          step={1}
          required
          disabled={isPending}
        />

        <TextField
          control={control}
          name="unit"
          type="text"
          label="Unit"
          required
          disabled={isPending}
          step={1}
          placeholder="e.g., pcs, kg, m"
        />
      </div>
    </div>
  );
};

export default CreateProductFormPricingUI;
