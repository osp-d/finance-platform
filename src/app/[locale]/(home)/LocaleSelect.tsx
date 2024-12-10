"use client";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { routing, useRouter, usePathname } from "@/src/i18n/routing";
import { useLocale } from "next-intl";
import { useTransition } from "react";

export function LocaleSelect({ short }: { short: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (value: string) => {
    startTransition(() => {
      router.replace(pathname, {
        locale: value,
      });
    });
  };

  return (
    <Select onValueChange={handleLocaleChange} disabled={isPending}>
      {short ? (
        <SelectTrigger className="w-min gap-1 font-medium">
          {locale}
        </SelectTrigger>
      ) : (
        <SelectTrigger className="w-min gap-1 font-medium">
          {locale === "en" ? "English" : "Русский"}
        </SelectTrigger>
      )}

      <SelectContent>
        {routing.locales.map((item) => {
          return (
            <SelectItem key={item} value={item}>
              {item === "en" ? "English" : "Русский"}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
