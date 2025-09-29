import PageContainer from "@/components/containers/page-container";
import React from "react";
import { ProfileContainer } from "./containers";

const ProfileModule = () => {
  return (
    <PageContainer scrollable>
      <div className="flex flex-1 flex-col space-y-4 mb-4">
        <ProfileContainer />
      </div>
    </PageContainer>
  );
};

export default ProfileModule;
