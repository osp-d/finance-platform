import { format } from "date-fns";
import {
  Tooltip,
  XAxis,
  LineChart,
  Line,
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

export function LineVariant({ data }: Props) {
  const locale = useLocale();

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
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
        <Line
          dot={false}
          dataKey="income"
          stroke="#3d82f6"
          strokeWidth={2}
          className="drop-shadow-sm"
        />
        <Line
          dot={false}
          dataKey="expenses"
          stroke="#f43f5e"
          strokeWidth={2}
          className="drop-shadow-sm"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
