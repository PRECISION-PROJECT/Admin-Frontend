import { TextAreaField, TextField } from "@/components/form-field";
import { MinimalTiptapField } from "@/components/form-field/minimal-tiptap-field";
import { useFormContext } from "react-hook-form";
import { CreateBlogFormData } from "../../hooks";

type Props = {
  isPending: boolean;
};

const CreateBlogFormBasicUI = ({ isPending }: Props) => {
  const { control } = useFormContext<CreateBlogFormData>();
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Basic Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextField
          control={control}
          name="title"
          label="Title"
          placeholder="Enter a blog title"
          required
          disabled={isPending}
        />

        <TextField
          control={control}
          name="slug"
          label="Slug"
          placeholder="Enter a blog slug"
          required
          disabled={isPending}
        />
      </div>
      <div>
        <TextAreaField
          control={control}
          name="excerpt"
          label="Excerpt"
          placeholder="Enter an excerpt"
          required
          config={{
            maxLength: 1000,
            showCharCount: true,
            rows: 4,
          }}
          disabled={isPending}
        />
      </div>
      <div>
        <MinimalTiptapField
          control={control}
          name="content"
          label="Content"
          placeholder="Enter a blog content"
          required
          disabled={isPending}
        />
      </div>
    </div>
  );
};

export default CreateBlogFormBasicUI;
