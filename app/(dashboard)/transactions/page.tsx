"use client";

import { useNewTransaction } from "@/features/transactions/hooks/useNewTransaction";
import { useGetTransactions } from "@/features/transactions/api/useGetTransactions";
import { useBulkDeleteTransactions } from "@/features/transactions/api/useBulkDeleteTransactions";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DataTable } from "@/app/(dashboard)/transactions/DataTable";
import { columns } from "@/app/(dashboard)/transactions/columns";
import { Loader2, Plus } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function TransactionsPage() {
  const newTransaction = useNewTransaction();
  const transactionsQuery = useGetTransactions();
  const transaction = transactionsQuery.data || [];
  const deleteTransactions = useBulkDeleteTransactions();

  const isDisabled =
    transactionsQuery.isLoading || deleteTransactions.isPending;

  if (transactionsQuery.isLoading) {
    return (
      <div className="mx-auto -mt-24 w-full max-w-screen-2xl pb-10">
        <Card className="border-none drop-shadow-sm">
          <CardHeader>
            <Skeleton className="h-8 w-48" />
          </CardHeader>
          <CardContent className="flex h-[500px] w-full items-center justify-center">
            <Loader2 className="size-6 animate-spin text-slate-300" />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto -mt-24 w-full max-w-screen-2xl pb-10">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="line-clamp-1 text-xl">
            Transaction History
          </CardTitle>
          <Button size="sm" onClick={newTransaction.onOpen}>
            <Plus className="mr-2 size-4" />
            Add new
          </Button>
        </CardHeader>

        <CardContent>
          <DataTable
            disabled={isDisabled}
            columns={columns}
            data={transaction}
            filterKey="payee"
            onDelete={(row) => {
              const ids = row.map((r) => r.original.id);
              deleteTransactions.mutate({ ids });
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
