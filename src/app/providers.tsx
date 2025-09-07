"use client";

import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "@/context/ThemeContext";
import QueryClientProvider from "@/providers/QueryClientProvider";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import type { ReactNode } from "react";

export interface ProvidersProps {
  children: ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider>
      <ThemeProvider>
        <SidebarProvider>{children}</SidebarProvider>
        <ProgressBar
          height="4px"
          color="#a12d23"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default Providers;
