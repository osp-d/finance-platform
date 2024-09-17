"use client";

import { useNewAccount } from "@/features/accounts/hooks/useNewAccount";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { onOpen } = useNewAccount();

  return (
    <div>
      <Button onClick={onOpen} className="bg-neutral-900 hover:bg-neutral-700">
        Add new account
      </Button>
    </div>
  );
}
