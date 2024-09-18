"use client";

import { useNewAccount } from "@/features/accounts/hooks/useNewAccount";
import { useGetAccounts } from "@/features/accounts/api/useGetAccounts";
import { useBulkDeleteAccounts } from "@/features/accounts/api/useBulkDelete";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DataTable } from "@/app/(dashboard)/accounts/DataTable";
import { columns } from "@/app/(dashboard)/accounts/columns";
import { Loader2, Plus } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function AccountsPage() {
  const newAccount = useNewAccount();
  const accountsQuery = useGetAccounts();
  const account = accountsQuery.data || [];
  const deleteAccounts = useBulkDeleteAccounts();

  const isDisabled = accountsQuery.isLoading || deleteAccounts.isPending;

  if (accountsQuery.isLoading) {
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
          <CardTitle className="line-clamp-1 text-xl">Accounts</CardTitle>
          <Button size="sm" onClick={newAccount.onOpen}>
            <Plus className="mr-2 size-4" />
            Add new
          </Button>
        </CardHeader>

        <CardContent>
          <DataTable
            disabled={isDisabled}
            columns={columns}
            data={account}
            filterKey={"name"}
            onDelete={(row) => {
              const ids = row.map((r) => r.original.id);
              deleteAccounts.mutate({ ids });
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
