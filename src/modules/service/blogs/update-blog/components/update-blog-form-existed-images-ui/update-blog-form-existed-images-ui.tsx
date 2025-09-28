import { InputFileDropzoneUploadField } from "@/components/form-field";
import { useFormContext } from "react-hook-form";
import { UpdateBlogFormData } from "../../hooks";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import ImageLoader from "@/components/ui/image-loader";

type Props = {
  isPending: boolean;
};

const UpdateBlogFormExistedImagesUI = ({ isPending }: Props) => {
  const { control, getValues } = useFormContext<UpdateBlogFormData>();
  const existedMainImage = getValues("existedMainImage");
  const existedAdditionalImages = getValues("existedAdditionalImages");
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Current Blog Images</h3>
      <div>
        <h3 className="font-medium text-sm text-muted-foreground mb-2">
          Primary Image
        </h3>
        {existedMainImage ? (
          <ImageZoom>
            <ImageLoader
              alt={existedMainImage}
              className="h-auto w-32"
              height={800}
              src={existedMainImage}
              unoptimized
              width={1200}
            />
          </ImageZoom>
        ) : (
          <div className="w-full h-20 bg-muted rounded-md border flex items-center justify-center">
            <p className="text-xs text-muted-foreground">No Main Image</p>
          </div>
        )}
      </div>

      <div>
        <h3 className="font-medium text-sm text-muted-foreground mb-2">
          Additional Images
        </h3>
        {existedAdditionalImages && existedAdditionalImages.length > 0 ? (
          <div className="grid grid-cols-2 gap-2">
            {existedAdditionalImages.map((image, index) => (
              <ImageZoom key={`${index}-${image}`}>
                <ImageLoader
                  alt={`${image} - Image ${index + 1}`}
                  className="h-auto w-32"
                  height={800}
                  src={image}
                  unoptimized
                  width={1200}
                />
              </ImageZoom>
            ))}
          </div>
        ) : (
          <div className="w-full h-20 bg-muted rounded-md border flex items-center justify-center">
            <p className="text-xs text-muted-foreground">
              No Additional Images
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateBlogFormExistedImagesUI;
