import { format } from "date-fns";
import { formatCurrency } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { useLocale, useTranslations } from "next-intl";
import { ru } from "date-fns/locale";

export function CustomTooltip({ active, payload }: any) {
  const t = useTranslations("components.customTooltip");
  const locale = useLocale();

  if (!active) return null;

  const date = payload[0].payload.date;
  const income = payload[0].value;
  const expenses = payload[1].value;

  return (
    <div className="overflow-hidden rounded-sm border bg-white shadow-sm">
      <div className="bg-muted p-2 px-3 text-sm text-muted-foreground">
        {locale === "en"
          ? format(date, "MMM dd, yyyy")
          : format(date, "dd MMM, yyyy", { locale: ru })}
      </div>
      <Separator />
      <div className="space-y-1 p-2 px-3">
        <div className="flex items-center justify-between gap-x-4">
          <div className="flex items-center gap-x-2">
            <div className="size-1.5 rounded-full bg-blue-500" />
            <p className="text-sm text-muted-foreground">{t("income")}</p>
          </div>
          <p className="text-right text-sm font-medium">
            {formatCurrency(income)}
          </p>
        </div>
      </div>

      <div className="space-y-1 p-2 px-3">
        <div className="flex items-center justify-between gap-x-4">
          <div className="flex items-center gap-x-2">
            <div className="size-1.5 rounded-full bg-rose-500" />
            <p className="text-sm text-muted-foreground">{t("expenses")}</p>
          </div>
          <p className="text-right text-sm font-medium">
            {formatCurrency(expenses * -1)}
          </p>
        </div>
      </div>
    </div>
  );
}
