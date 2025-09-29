import { IUserResponse } from "@/apis/auths";
import { CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

type Props = {
  profile: IUserResponse;
};

const ProfileHeaderUI = ({ profile }: Props) => {
  return (
    <CardHeader className="flex flex-row items-center justify-between">
      <CardTitle className="text-2xl font-bold">Profile</CardTitle>
    </CardHeader>
  );
};

export default ProfileHeaderUI;
