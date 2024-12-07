import { useOpenCategory } from "@/features/categories/hooks/useOpenCategory";
import { useGetCategory } from "@/features/categories/api/useGetCategory";
import { CategoryForm } from "@/features/categories/components/CategoryForm";
import { insertCategorySchema } from "@/db/schema";
import { useEditCategory } from "@/features/categories/api/useEditCategory";
import { useDeleteCategory } from "@/features/categories/api/useDeleteCategory";
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

const FormSchema = insertCategorySchema.pick({ name: true });

type FormValues = z.input<typeof FormSchema>;

export function EditCategorySheet() {
  const t = useTranslations("features.categories.components.edit");

  const { isOpen, onClose, id } = useOpenCategory();
  const categoryQuery = useGetCategory(id);
  const defaultValues = categoryQuery.data
    ? {
        name: categoryQuery.data.name,
      }
    : {
        name: "",
      };

  const editMutation = useEditCategory(id);
  const deleteMutation = useDeleteCategory(id);

  const isPending = editMutation.isPending || deleteMutation.isPending;
  const isLoading = categoryQuery.isLoading;

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
            <CategoryForm
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
