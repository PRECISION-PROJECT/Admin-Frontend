import { Button } from "@/components/ui/button";

type Props = {
  isPending: boolean;
};

const UpdateBlogFormActionUI = ({ isPending }: Props) => {
  return (
    <Button type="submit" variant="default" disabled={isPending}>
      {isPending ? "Updating..." : "Update Blog"}
    </Button>
  );
};

export default UpdateBlogFormActionUI;
