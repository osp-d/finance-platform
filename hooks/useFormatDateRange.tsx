import { format, subDays } from "date-fns";
import { useLocale } from "next-intl";
import { ru } from "date-fns/locale";

type Period = {
  from: string | Date | undefined;
  to: string | Date | undefined;
};

export function useFormatDateRange(period?: Period) {
  const locale = useLocale();
  const defaultTo = new Date();
  const defaultFrom = subDays(defaultTo, 30);

  if (!period?.from) {
    if (locale === "en") {
      return `${format(defaultFrom, "LLL dd")} - ${format(defaultTo, "LLL dd, y")}`;
    } else {
      return `${format(defaultFrom, "LLL dd", { locale: ru })} - ${format(defaultTo, "LLL dd, y", { locale: ru })}`;
    }
  } else if (period.to) {
    if (locale === "en") {
      return `${format(period.from, "LLL dd")} - ${format(period.to, "LLL dd, y")}`;
    } else {
      return `${format(period.from, "LLL dd", { locale: ru })} - ${format(period.to, "LLL dd, y", { locale: ru })}`;
    }
  } else {
    if (locale === "en") {
      return format(period.from, "LLL dd, y");
    } else {
      return format(period.from, "LLL dd, y", { locale: ru });
    }
  }
}
