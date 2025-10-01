"use client";

import {
  QueryClientProvider as Provider,
  QueryClient,
} from "@tanstack/react-query";
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect, useState, type ReactNode } from "react";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 1000,
      refetchOnMount: true,
      retry: false,
    },
  },
});

interface ProvidersProps {
  children: ReactNode;
}

const QueryClientProvider = ({ children }: ProvidersProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Provider client={queryClient}>
      <>{isMounted ? children : <></>}</>

      {/* <ReactQueryDevtools buttonPosition='bottom-left' initialIsOpen={false} /> */}
    </Provider>
  );
};

export default QueryClientProvider;
