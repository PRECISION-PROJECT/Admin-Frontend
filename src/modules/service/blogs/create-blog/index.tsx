import PageContainer from "@/components/containers/page-container";
import React from "react";
import { CreateBlogContainer } from "./containers";

const CreateBlogModule = () => {
  return (
    <PageContainer scrollable>
      <div className="flex-1 space-y-4">
        <CreateBlogContainer />
      </div>
    </PageContainer>
  );
};

export default CreateBlogModule;
