import { SelectField, TextField } from "@/components/form-field";
import { useFormContext } from "react-hook-form";
import { UpdateBlogFormData } from "../../hooks";
import { SwitchFieldV2 } from "@/components/form-field/switch-fieldV2";

type Props = {
  isPending: boolean;
};

const DEFAULT_STATUS_OPTIONS = [
  {
    value: "published",
    label: "Published",
  },
  {
    value: "draft",
    label: "Draft",
  },
  {
    value: "archived",
    label: "Archived",
  },
];

const UpdateBlogFormBasicUI = ({ isPending }: Props) => {
  const { control } = useFormContext<UpdateBlogFormData>();
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Publish Settings</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 -mt-2">
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
        <div>
          <TextField
            control={control}
            name="sortOrder"
            type="number"
            label="Sort Order"
            min={0}
            step={1}
            required
            disabled={isPending}
          />
        </div>
      </div>
      <div>
        <SwitchFieldV2
          control={control}
          name="isFeatured"
          label="Featured Blog"
          required
          description="Mark this blog as featured to highlight it on news."
        />
      </div>
    </div>
  );
};

export default UpdateBlogFormBasicUI;
