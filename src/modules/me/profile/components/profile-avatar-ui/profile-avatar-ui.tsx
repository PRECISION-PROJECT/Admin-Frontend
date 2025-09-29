import { IUserResponse } from "@/apis/auths";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import React from "react";

type Props = {
  profile: IUserResponse;
};

const getInitials = (firstName: string, lastName: string) => {
  return `${firstName?.charAt(0)}${lastName ?? "".charAt(0)}`.toUpperCase();
};

const ProfileAvatarUI = ({ profile }: Props) => {
  return (
    <div className="flex items-center space-x-4">
      <Avatar className="h-20 w-20">
        <AvatarImage
          src={profile.imageUrl || "/images/image_unavailable.webp"}
          alt="Profile picture"
        />
        <AvatarFallback className="text-lg">
          {getInitials(profile.firstName ?? "-", profile.lastName ?? "-")}
        </AvatarFallback>
      </Avatar>
      <div>
        <h3 className="text-xl font-semibold">
          {profile?.firstName ?? "-"} {profile?.lastName ?? "-"}
        </h3>
        <p className="text-muted-foreground">{profile?.email ?? "-"}</p>
      </div>
    </div>
  );
};

export default ProfileAvatarUI;
