"use client";

import { NewAccountSheet } from "@/features/accounts/components/NewAccountSheet";
import { useMountedState } from "react-use";
import { EditAccountSheet } from "@/features/accounts/components/EditAccount";

import { NewCategorySheet } from "@/features/categories/components/NewCategorySheet";
import { EditCategorySheet } from "@/features/categories/components/EditCategory";

import { NewTransactionSheet } from "@/features/transactions/components/NewTransactionSheet";
import { EditTransactionSheet } from "@/features/transactions/components/EditTransaction";

export function SheetProvider() {
  const isMounted = useMountedState();

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <NewAccountSheet />
      <EditAccountSheet />

      <NewCategorySheet />
      <EditCategorySheet />

      <NewTransactionSheet />
      <EditTransactionSheet />
    </>
  );
}
