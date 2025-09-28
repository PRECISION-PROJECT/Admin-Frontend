import { Card, CardContent } from "@/components/ui/card";
import UpdateBlogActionContainer from "../update-blog-action-container";
import UpdateBlogFormContainer from "../update-blog-form-container";

type Props = {
  id: string;
};

const UpdateBlogContainer = ({ id }: Props) => {
  return (
    <Card className="mx-auto w-full">
      <UpdateBlogActionContainer id={id} />
      <CardContent>
        <UpdateBlogFormContainer id={id} />
      </CardContent>
    </Card>
  );
};

export default UpdateBlogContainer;
