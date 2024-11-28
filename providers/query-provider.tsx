"use client";

import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useAuth } from "@clerk/nextjs";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

type Props = {
  children: React.ReactNode;
};

export function QueryProvider({ children }: Props) {
  const { isSignedIn } = useAuth();
  const queryClient = getQueryClient();

  queryClient.setDefaultOptions({
    queries: {
      staleTime: 60 * 1000,
      enabled: isSignedIn,
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
