"use client";

import { NewAccountSheet } from "@/features/accounts/components/NewAccountSheet";
import { useMountedState } from "react-use";

export function SheetProvider() {
  const isMounted = useMountedState();

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <NewAccountSheet />
    </>
  );
}
