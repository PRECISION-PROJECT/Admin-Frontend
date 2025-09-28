import {
  InputFileDropzoneUploadField,
  SelectField,
  TextAreaField,
  TextField,
} from "@/components/form-field";
import { Button } from "@/components/ui/button";
import { FormLabel } from "@/components/ui/form";
import ImageLoader from "@/components/ui/image-loader";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import { Show } from "@/components/utilities";
import { cn } from "@/lib/utils";
import { IOption } from "@/types";
import { DEFAULT_ACTIVE_OPTIONS } from "@/utils/const";
import { useFormContext } from "react-hook-form";
import { UpdateCategoryFormData } from "../../hooks";

type Props = {
  isPending: boolean;
  parentCategoryOptions: IOption<string>[];
};

const UpdateCategoryFormUI = ({ isPending, parentCategoryOptions }: Props) => {
  const { control, getValues } = useFormContext<UpdateCategoryFormData>();
  return (
    <>
      <Show when={!!getValues("imageUrl")}>
        <FormLabel className={cn("flex flex-col gap-1 items-start")}>
          <p className="flex gap-1 text-sm">Current Category Image</p>
        </FormLabel>
        <ImageZoom>
          <ImageLoader
            alt="Current Category Image"
            className="h-auto w-96"
            height={800}
            src={getValues("imageUrl")!}
            width={1200}
          />
        </ImageZoom>
      </Show>

      <InputFileDropzoneUploadField
        control={control}
        name="image"
        label="New Category Image"
        config={{
          maxSize: 5 * 1024 * 1024,
          maxFiles: 4,
        }}
        disabled={isPending}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <TextField
          control={control}
          name="name"
          label="Category Name"
          placeholder="Enter a category name"
          required
          disabled={isPending}
        />

        <TextField
          control={control}
          name="slug"
          label="Category Slug"
          placeholder="Enter a category slug"
          required
          disabled={isPending}
        />

        <TextField
          control={control}
          name="sortOrder"
          label="Category Sort Order"
          placeholder="Enter a category sort order"
          required
          type="number"
          min={0}
          step="0.01"
          disabled={isPending}
        />

        <SelectField
          control={control}
          name="parentId"
          label="Category Parents"
          placeholder="Select a parent category"
          required
          disabled={isPending}
          options={parentCategoryOptions}
          fullWidth
        />

        <SelectField
          control={control}
          name="isActive"
          label="Category Active"
          placeholder="Select an option"
          required
          disabled={isPending}
          options={DEFAULT_ACTIVE_OPTIONS}
          fullWidth
        />
      </div>

      <TextAreaField
        control={control}
        name="description"
        label="Description"
        placeholder="Enter a category description"
        required
        config={{
          maxLength: 500,
          showCharCount: true,
          rows: 4,
        }}
        disabled={isPending}
      />

      <Button type="submit" variant="default" disabled={isPending}>
        Update Category
      </Button>
    </>
  );
};

export default UpdateCategoryFormUI;
