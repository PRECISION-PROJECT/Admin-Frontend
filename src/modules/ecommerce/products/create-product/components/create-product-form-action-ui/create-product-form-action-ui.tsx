import { Button } from "@/components/ui/button";

type Props = {
  isPending: boolean;
};

const CreateProductFormUI = ({ isPending }: Props) => {
  return (
    <Button type="submit" variant="default" disabled={isPending}>
      {isPending ? "Creating..." : "Create Product"}
    </Button>
  );
};

export default CreateProductFormUI;
