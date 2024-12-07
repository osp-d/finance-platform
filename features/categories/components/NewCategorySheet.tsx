import { useNewCategory } from "@/features/categories/hooks/useNewCategory";
import { useCreateCategory } from "@/features/categories/api/useCreateCategory";
import { CategoryForm } from "@/features/categories/components/CategoryForm";
import { insertCategorySchema } from "@/db/schema";
import { z } from "zod";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetHeader,
} from "@/components/ui/sheet";
import { useTranslations } from "next-intl";

const FormSchema = insertCategorySchema.pick({ name: true });

type FormValues = z.input<typeof FormSchema>;

export function NewCategorySheet() {
  const t = useTranslations("features.categories.components.new");

  const { isOpen, onClose } = useNewCategory();

  const mutation = useCreateCategory();

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
        <CategoryForm
          onSubmit={onSubmit}
          disabled={mutation.isPending}
          defaultValues={{ name: "" }}
        />
      </SheetContent>
    </Sheet>
  );
}
