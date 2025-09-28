import PageContainer from "@/components/containers/page-container";
import React from "react";
import { UpdateBlogContainer } from "./containers";

type Props = {
  id: string;
};

const UpdateBlogModule = ({ id }: Props) => {
  return (
    <PageContainer scrollable>
      <div className="flex-1 space-y-4">
        <UpdateBlogContainer id={id} />
      </div>
    </PageContainer>
  );
};

export default UpdateBlogModule;
