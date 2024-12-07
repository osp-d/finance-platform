import { useOpenCategory } from "@/features/categories/hooks/useOpenCategory";
import { useOpenTransaction } from "@/features/transactions/hooks/useOpenTransaction";
import { cn } from "@/lib/utils";
import { TriangleAlert } from "lucide-react";

type Props = {
  id: string;
  category: string | null;
  categoryId: string | null;
};

export function CategoryColumn({ id, category, categoryId }: Props) {
  const { onOpen: onOpenCategory } = useOpenCategory();
  const { onOpen: onOpenTransaction } = useOpenTransaction();

  const onClick = () => {
    if (categoryId) {
      onOpenCategory(categoryId);
    } else {
      onOpenTransaction(id);
    }
  };

  return (
    <div
      className={cn(
        "flex cursor-pointer items-center hover:underline",
        !category && "text-rose-500",
      )}
      onClick={onClick}
    >
      {!category && <TriangleAlert className="mr-2 size-4 shrink-0" />}
      {category || "Uncategorized"}
    </div>
  );
}
