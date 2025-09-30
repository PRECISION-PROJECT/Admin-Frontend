import { ProfileModule } from "@/modules/me";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Profile",
  description: "Manage your profile information and settings",
};

const ProfilePage = () => {
  return <ProfileModule />;
};

export default ProfilePage;
