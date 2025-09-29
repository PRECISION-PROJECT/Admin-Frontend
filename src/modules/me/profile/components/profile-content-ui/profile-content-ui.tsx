import { IUserResponse } from "@/apis/auths";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import React from "react";

type Props = {
  profile: IUserResponse;
};

const getStatusBadge = (status?: string) => {
  if (!status) return null;

  const variant = status === "active" ? "default" : "secondary";
  return <Badge variant={variant}>{status}</Badge>;
};

const ProfileContentUI = ({ profile }: Props) => {
  return (
    <div className="space-y-6">
      {/* Personal Information */}
      <div>
        <h4 className="text-lg font-semibold mb-3">Personal Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-muted-foreground">First Name</Label>
            <p className="font-medium">{profile?.firstName ?? "-"}</p>
          </div>
          <div>
            <Label className="text-muted-foreground">Last Name</Label>
            <p className="font-medium">{profile?.lastName ?? "-"}</p>
          </div>
          <div>
            <Label className="text-muted-foreground">Email</Label>
            <p className="font-medium">{profile?.email ?? "-"}</p>
          </div>
          <div>
            <Label className="text-muted-foreground">Role</Label>
            <p className="font-medium capitalize">{profile?.role ?? "-"}</p>
          </div>
        </div>
      </div>

      {/* Account Information */}
      <div>
        <h4 className="text-lg font-semibold mb-3">Account Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-muted-foreground">User ID</Label>
            <p className="font-medium font-mono text-sm">
              {profile?.id ?? "-"}
            </p>
          </div>
          <div>
            <Label className="text-muted-foreground">Provider</Label>
            <p className="font-medium capitalize">{profile?.provider ?? "-"}</p>
          </div>
          <div>
            <Label className="text-muted-foreground">Status</Label>
            <div className="mt-1">{getStatusBadge(profile?.status ?? "-")}</div>
          </div>
          <div>
            <Label className="text-muted-foreground">Social ID</Label>
            <p className="font-medium">{profile?.socialId ?? "-"}</p>
          </div>
          <div>
            <Label className="text-muted-foreground">Created At</Label>
            <p className="font-medium">
              {profile?.createdAt
                ? format(profile?.createdAt, "dd/MM/yyyy HH:mm:ss")
                : "-"}
            </p>
          </div>
          <div>
            <Label className="text-muted-foreground">Updated At</Label>
            <p className="font-medium">
              {profile?.updatedAt
                ? format(profile?.updatedAt, "dd/MM/yyyy HH:mm:ss")
                : "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContentUI;
