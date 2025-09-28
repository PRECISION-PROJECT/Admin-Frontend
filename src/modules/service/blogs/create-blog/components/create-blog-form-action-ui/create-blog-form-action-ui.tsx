import { Button } from "@/components/ui/button";

type Props = {
  isPending: boolean;
};

const CreateBlogFormActionUI = ({ isPending }: Props) => {
  return (
    <Button type="submit" variant="default" disabled={isPending}>
      {isPending ? "Creating..." : "Create Blog"}
    </Button>
  );
};

export default CreateBlogFormActionUI;
