import React from "react";
import { ScrollArea } from "../ui/scroll-area";

export default function PageContainer({
  children,
  scrollable = true,
}: {
  children: React.ReactNode;
  scrollable?: boolean;
}) {
  if (scrollable) {
    return (
      <ScrollArea className="h-[calc(100dvh-52px)]">
        <div className="flex flex-1 p-4 md:px-6">{children}</div>
      </ScrollArea>
    );
  }

  return <div className="flex flex-1 p-4 md:px-6">{children}</div>;
}
