import { format } from "date-fns";
import {
  Tooltip,
  XAxis,
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { CustomTooltip } from "@/components/CustomTooltip";
import { useLocale } from "next-intl";
import { ru } from "date-fns/locale";

type Props = {
  data: {
    date: string;
    income: number;
    expenses: number;
  }[];
};

export function BarVariant({ data }: Props) {
  const locale = useLocale();

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="date"
          tickFormatter={(value) =>
            locale === "en"
              ? format(value, "dd MMM")
              : format(value, "dd MMM", { locale: ru })
          }
          style={{ fontSize: "12px" }}
          tickMargin={16}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="income" fill="#3d82f6" className="drop-shadow-sm" />
        <Bar dataKey="expenses" fill="#f43f5e" className="drop-shadow-sm" />
      </BarChart>
    </ResponsiveContainer>
  );
}
