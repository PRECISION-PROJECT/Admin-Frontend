import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import CreateCategoryFormContainer from "../create-category-form-container";

const CreateCategoryContainer = () => {
  return (
    <Card className="mx-auto w-full">
      <CardHeader>
        <CardTitle className="text-left text-2xl font-bold">
          Create New Category
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CreateCategoryFormContainer />
      </CardContent>
    </Card>
  );
};

export default CreateCategoryContainer;
