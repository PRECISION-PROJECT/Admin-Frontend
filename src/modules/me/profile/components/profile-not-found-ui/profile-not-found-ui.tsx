import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const ProfileNotFoundUI = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">Profile Not Found</h2>
          <p className="text-muted-foreground">
            The requested profile could not be found.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileNotFoundUI;
