import { InputFileDropzoneUploadField } from "@/components/form-field";
import { useFormContext } from "react-hook-form";
import { CreateBlogFormData } from "../../hooks";

type Props = {
  isPending: boolean;
};

const CreateBlogFormImagesUI = ({ isPending }: Props) => {
  const { control } = useFormContext<CreateBlogFormData>();
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Blog Images</h3>
      <InputFileDropzoneUploadField
        control={control}
        name="imageUrl"
        label="Upload the primary image for your blog"
        config={{
          maxSize: 5 * 1024 * 1024,
          maxFiles: 1,
        }}
        disabled={isPending}
        required
      />
      <InputFileDropzoneUploadField
        control={control}
        name="images"
        label="Upload Additional Blog Images"
        config={{
          maxSize: 5 * 1024 * 1024,
          maxFiles: 4,
        }}
        disabled={isPending}
      />
    </div>
  );
};

export default CreateBlogFormImagesUI;
