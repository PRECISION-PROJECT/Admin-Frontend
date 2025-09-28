"use client";

import QueryClientProvider from "@/components/providers/QueryClientProvider";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import type { ReactNode } from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export interface ProvidersProps {
  children: ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider>
      <NuqsAdapter>
        <ThemeProvider>
          <Toaster richColors />
          <ProgressBar
            height="4px"
            color="#a12d23"
            options={{ showSpinner: false }}
            shallowRouting
          />
          <>{children}</>
        </ThemeProvider>
      </NuqsAdapter>
    </QueryClientProvider>
  );
}

export default Providers;
