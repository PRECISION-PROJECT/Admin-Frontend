import { Button } from "@/components/ui/button";

type Props = {
  isPending: boolean;
};

const UpdateProductFormUI = ({ isPending }: Props) => {
  return (
    <Button type="submit" variant="default" disabled={isPending}>
      {isPending ? "Updating..." : "Update Product"}
    </Button>
  );
};

export default UpdateProductFormUI;
