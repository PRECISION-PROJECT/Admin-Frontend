import { TextField } from "@/components/form-field";
import { useFormContext } from "react-hook-form";
import { CreateProductFormData } from "../../hooks";

type Props = {
  isPending: boolean;
};

const CreateProductFormPhysicalUI = ({ isPending }: Props) => {
  const { control } = useFormContext<CreateProductFormData>();
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Physical Properties</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <TextField
          control={control}
          name="weight"
          type="number"
          label="Weight"
          min={0}
          step={0.01}
          required
          disabled={isPending}
        />

        <TextField
          control={control}
          name="length"
          type="number"
          label="Length"
          min={0}
          step={0.01}
          required
          disabled={isPending}
        />

        <TextField
          control={control}
          name="width"
          type="number"
          label="Width"
          min={0}
          required
          disabled={isPending}
          step={0.01}
        />

        <TextField
          control={control}
          name="height"
          type="number"
          label="Height"
          min={0}
          required
          disabled={isPending}
          step={0.01}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TextField
          control={control}
          name="material"
          label="Material"
          placeholder="e.g., Wood, Metal, Plastic"
          required
          disabled={isPending}
        />
        <TextField
          control={control}
          name="finish"
          label="Finish"
          placeholder="e.g., Matte, Glossy, Textured"
          required
          disabled={isPending}
        />
        <TextField
          control={control}
          name="color"
          label="Color"
          placeholder="e.g., White, Black, Natural"
          required
          disabled={isPending}
        />
      </div>
    </div>
  );
};

export default CreateProductFormPhysicalUI;
