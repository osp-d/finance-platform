import { useNewAccount } from "@/features/accounts/hooks/useNewAccount";
import { useCreateAccount } from "@/features/accounts/api/useCreateAccount";
import { AccountForm } from "@/features/accounts/components/AccountForm";
import { insertAccountSchema } from "@/db/schema";
import { z } from "zod";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetHeader,
} from "@/components/ui/sheet";
import { useTranslations } from "next-intl";

const FormSchema = insertAccountSchema.pick({ name: true });

type FormValues = z.input<typeof FormSchema>;

export function NewAccountSheet() {
  const t = useTranslations("features.accounts.components.new");

  const { isOpen, onClose } = useNewAccount();

  const mutation = useCreateAccount();

  const onSubmit = (values: FormValues) => {
    mutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4 bg-white">
        <SheetHeader>
          <SheetTitle>{t("title")}</SheetTitle>
          <SheetDescription>{t("description")}</SheetDescription>
        </SheetHeader>
        <AccountForm
          onSubmit={onSubmit}
          disabled={mutation.isPending}
          defaultValues={{ name: "" }}
        />
      </SheetContent>
    </Sheet>
  );
}
