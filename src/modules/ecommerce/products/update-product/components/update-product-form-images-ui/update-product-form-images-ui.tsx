import {
  InputFileDropzoneUploadField,
  TextField,
} from "@/components/form-field";
import { FormLabel } from "@/components/ui/form";
import ImageLoader from "@/components/ui/image-loader";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import { Show } from "@/components/utilities";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import { UpdateProductFormData } from "../../hooks";

type Props = {
  isPending: boolean;
};

const UpdateProductFormImagesUI = ({ isPending }: Props) => {
  const { control, getValues } = useFormContext<UpdateProductFormData>();
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Product Images</h3>

      <Show when={!!getValues("existingImage.url")}>
        <FormLabel className={cn("flex flex-col gap-1 items-start")}>
          <p className="flex gap-1 text-sm">Current Main Product Image</p>
        </FormLabel>
        <div className="border w-fit">
          <ImageZoom>
            <ImageLoader
              alt="Current Product Image"
              className="h-auto w-56"
              height={800}
              src={getValues("existingImage.url")!}
              width={1200}
            />
          </ImageZoom>
        </div>
      </Show>

      <Show when={!!getValues("existedImages")?.length}>
        <FormLabel className={cn("flex flex-col gap-1 items-start")}>
          Additional Product Images
        </FormLabel>
        <div className="grid grid-cols-3 gap-2">
          {getValues("existedImages")?.map((image) => (
            <div key={image.id} className="border">
              <ImageZoom>
                <ImageLoader
                  alt={image.url}
                  className="h-auto w-full"
                  height={800}
                  src={image.url!}
                  width={1200}
                />
              </ImageZoom>
            </div>
          ))}
        </div>
      </Show>

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

export default UpdateProductFormImagesUI;
