"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useNewAccount } from "@/features/accounts/hooks/useNewAccount";
import { DataTable } from "@/app/(dashboard)/accounts/DataTable";
import { columns, Payment } from "@/app/(dashboard)/accounts/columns";
import { Plus } from "lucide-react";

const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "123ex41g",
    amount: 110,
    status: "success",
    email: "x@example.com",
  },
];

export default function AccountsPage() {
  const newAccount = useNewAccount();

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
            disabled={false}
            columns={columns}
            data={data}
            filterKey={"email"}
            onDelete={() => {}}
          />
        </CardContent>
      </Card>
    </div>
  );
}
