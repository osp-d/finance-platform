"use client";

import { WelcomeMessage } from "@/components/WelcomeMessage";
import { Filters } from "@/components/Filters";
import { usePathname } from "@/src/i18n/routing";

export function FilterProvider() {
  const path = usePathname();

  if (path === "/dashboard/transactions" || path === "/dashboard") {
    return (
      <>
        <WelcomeMessage />
        <Filters />
      </>
    );
  }
}
