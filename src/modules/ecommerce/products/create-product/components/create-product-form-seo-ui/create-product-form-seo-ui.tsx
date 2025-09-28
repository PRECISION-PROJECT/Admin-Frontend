import { TextField } from "@/components/form-field";
import { useFormContext } from "react-hook-form";
import { CreateProductFormData } from "../../hooks";

type Props = {
  isPending: boolean;
};

const CreateProductFormSeoUI = ({ isPending }: Props) => {
  const { control } = useFormContext<CreateProductFormData>();
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">SEO & Metadata</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextField
          control={control}
          name="slug"
          label="Slug"
          placeholder="Enter a slug"
          required
          disabled={isPending}
        />

        <TextField
          control={control}
          name="sortOrder"
          label="Sort Order"
          required
          type="number"
          min={0}
          disabled={isPending}
        />
      </div>

      <TextField
        control={control}
        name="metaTitle"
        label="Meta Title"
        placeholder="SEO title for search engines"
        required
        disabled={isPending}
      />

      <TextField
        control={control}
        name="metaDescription"
        label="Meta Description"
        placeholder="SEO description for search engines"
        required
        disabled={isPending}
      />
    </div>
  );
};

export default CreateProductFormSeoUI;
