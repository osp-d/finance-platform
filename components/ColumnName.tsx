import { useTranslations } from "next-intl";

type columnName = "Account" | "Amount" | "Category" | "Date" | "Name" | "Payee";

export function ColumnName({ name }: { name: string }) {
  const t = useTranslations("dashboard.dataTable.columns");

  return <>{t(name as columnName)}</>;
}
