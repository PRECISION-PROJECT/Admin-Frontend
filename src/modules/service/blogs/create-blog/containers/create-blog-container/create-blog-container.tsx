import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import CreateBlogFormContainer from "../create-blog-form-container";

const CreateBlogContainer = () => {
  return (
    <Card className="mx-auto w-full">
      <CardHeader>
        <CardTitle className="text-left text-2xl font-bold">
          Create New Blog
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CreateBlogFormContainer />
      </CardContent>
    </Card>
  );
};

export default CreateBlogContainer;
