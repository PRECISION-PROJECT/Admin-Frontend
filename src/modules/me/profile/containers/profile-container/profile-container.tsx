"use client";

import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import {
  ProfileAvatarUI,
  ProfileContentUI,
  ProfileHeaderUI,
  ProfileNotFoundUI,
  ProfileSkeletonUI,
} from "../../components";
import { useProfile } from "../../hooks";

const ProfileContainer = () => {
  const { profile, isLoading } = useProfile();

  if (isLoading) {
    return <ProfileSkeletonUI />;
  }

  if (!profile) return <ProfileNotFoundUI />;

  return (
    <Card className="w-full">
      <ProfileHeaderUI profile={profile} />
      <CardContent>
        <div className="space-y-6">
          <ProfileAvatarUI profile={profile} />
          <ProfileContentUI profile={profile} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileContainer;
