import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import UpdateCategoryFormContainer from "../update-category-form-container";
import UpdateCategoryActionContainer from "../update-category-action-container";

type Props = {
  id: string;
};

const UpdateCategoryContainer = ({ id }: Props) => {
  return (
    <Card className="mx-auto w-full">
      <UpdateCategoryActionContainer id={id} />
      <CardContent>
        <UpdateCategoryFormContainer id={id} />
      </CardContent>
    </Card>
  );
};

export default UpdateCategoryContainer;
