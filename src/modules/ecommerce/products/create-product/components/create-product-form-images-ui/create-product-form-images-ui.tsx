import {
  InputFileDropzoneUploadField,
  TextField,
} from "@/components/form-field";
import { useFormContext } from "react-hook-form";
import { CreateProductFormData } from "../../hooks";

type Props = {
  isPending: boolean;
};

const CreateProductFormImagesUI = ({ isPending }: Props) => {
  const { control } = useFormContext<CreateProductFormData>();
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Product Images</h3>
      <InputFileDropzoneUploadField
        control={control}
        name="imageUrl"
        label="Upload the primary image for your product"
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
        label="Upload Additional Product Images"
        config={{
          maxSize: 5 * 1024 * 1024,
          maxFiles: 4,
        }}
        disabled={isPending}
      />
    </div>
  );
};

export default CreateProductFormImagesUI;
