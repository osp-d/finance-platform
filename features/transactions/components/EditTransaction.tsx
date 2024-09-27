import { useOpenTransaction } from "@/features/transactions/hooks/useOpenTransaction";
import { useGetTransaction } from "@/features/transactions/api/useGetTransaction";
import { TransactionForm } from "@/features/transactions/components/TransactionForm";
import { insertTransactionsSchema } from "@/db/schema";
import { useEditTransactions } from "@/features/transactions/api/useEditTransaction";
import { useDeleteTransaction } from "@/features/transactions/api/useDeleteTransaction";

import { useGetCategories } from "@/features/categories/api/useGetCategories";
import { useCreateCategory } from "@/features/categories/api/useCreateCategory";
import { useGetAccounts } from "@/features/accounts/api/useGetAccounts";
import { useCreateAccount } from "@/features/accounts/api/useCreateAccount";

import { z } from "zod";
import { useConfirm } from "@/hooks/useConfirm";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetHeader,
} from "@/components/ui/sheet";
import { Loader2 } from "lucide-react";

const FormSchema = insertTransactionsSchema.omit({ id: true });

type FormValues = z.input<typeof FormSchema>;

export function EditTransactionSheet() {
  const { isOpen, onClose, id } = useOpenTransaction();
  const transactionQuery = useGetTransaction(id);
  const defaultValues = transactionQuery.data
    ? {
        accountId: transactionQuery.data.accountId,
        categoryId: transactionQuery.data.categoryId,
        amount: transactionQuery.data.amount.toString(),
        date: transactionQuery.data.date
          ? new Date(transactionQuery.data.date)
          : new Date(),
        payee: transactionQuery.data.payee,
        notes: transactionQuery.data.notes,
      }
    : {
        accountId: "",
        categoryId: "",
        amount: "",
        date: new Date(),
        payee: "",
        notes: "",
      };

  const editMutation = useEditTransactions(id);
  const deleteMutation = useDeleteTransaction(id);

  const categoryQuery = useGetCategories();
  const categoryMutation = useCreateCategory();
  const onCreateCategory = (name: string) => {
    categoryMutation.mutate({ name });
  };
  const categoryOptions = (categoryQuery.data ?? []).map((category) => ({
    label: category.name,
    value: category.id,
  }));

  const accountQuery = useGetAccounts();
  const accountMutation = useCreateAccount();
  const onCreateAccount = (name: string) => {
    accountMutation.mutate({ name });
  };
  const accountOptions = (accountQuery.data ?? []).map((account) => ({
    label: account.name,
    value: account.id,
  }));

  const isPending =
    editMutation.isPending ||
    deleteMutation.isPending ||
    transactionQuery.isLoading ||
    categoryMutation.isPending ||
    accountMutation.isPending;

  const isLoading =
    transactionQuery.isLoading ||
    accountQuery.isLoading ||
    categoryQuery.isLoading;

  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure?",
    "You are about to delete this transaction",
  );

  const onSubmit = (values: FormValues) => {
    editMutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  const onDelete = async () => {
    const ok = await confirm();

    if (ok) {
      deleteMutation.mutate(undefined, {
        onSuccess: () => {
          onClose();
        },
      });
    }
  };

  return (
    <>
      <ConfirmDialog />
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="space-y-4 bg-white">
          <SheetHeader>
            <SheetTitle>Edit transaction</SheetTitle>
            <SheetDescription>Edit an existing transaction</SheetDescription>
          </SheetHeader>

          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="size-4 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <TransactionForm
              id={id}
              onDelete={onDelete}
              defaultValues={defaultValues}
              onSubmit={onSubmit}
              disabled={isPending}
              categoryOptions={categoryOptions}
              onCreateCategory={onCreateCategory}
              accountOptions={accountOptions}
              onCreateAccount={onCreateAccount}
            />
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
