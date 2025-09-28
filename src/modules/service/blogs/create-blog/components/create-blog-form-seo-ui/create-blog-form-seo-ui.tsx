import { TextField } from "@/components/form-field";
import { useFormContext } from "react-hook-form";
import { CreateBlogFormData } from "../../hooks";

type Props = {
  isPending: boolean;
};

const CreateBlogFormSeoUI = ({ isPending }: Props) => {
  const { control } = useFormContext<CreateBlogFormData>();
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">SEO & Metadata</h3>
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

export default CreateBlogFormSeoUI;
