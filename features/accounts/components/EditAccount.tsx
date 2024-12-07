import { useOpenAccount } from "@/features/accounts/hooks/useOpenAccount";
import { useGetAccount } from "@/features/accounts/api/useGetAccount";
import { AccountForm } from "@/features/accounts/components/AccountForm";
import { insertAccountSchema } from "@/db/schema";
import { useEditAccount } from "@/features/accounts/api/useEditAccount";
import { useDeleteAccount } from "@/features/accounts/api/useDeleteAccount";
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
import { useTranslations } from "next-intl";

const FormSchema = insertAccountSchema.pick({ name: true });

type FormValues = z.input<typeof FormSchema>;

export function EditAccountSheet() {
  const t = useTranslations("features.accounts.components.edit");

  const { isOpen, onClose, id } = useOpenAccount();
  const accountQuery = useGetAccount(id);
  const defaultValues = accountQuery.data
    ? {
        name: accountQuery.data.name,
      }
    : {
        name: "",
      };

  const editMutation = useEditAccount(id);
  const deleteMutation = useDeleteAccount(id);

  const isPending = editMutation.isPending || deleteMutation.isPending;
  const isLoading = accountQuery.isLoading;

  const [ConfirmDialog, confirm] = useConfirm(
    t("confirmTitle"),
    t("confirmSubtitle"),
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
            <SheetTitle>{t("title")}</SheetTitle>
            <SheetDescription>{t("description")}</SheetDescription>
          </SheetHeader>

          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="size-4 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <AccountForm
              id={id}
              onSubmit={onSubmit}
              onDelete={onDelete}
              disabled={isPending}
              defaultValues={defaultValues}
            />
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
