import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono";
import { convertAmountFromMilliunits } from "@/lib/utils";
import { useTranslations } from "next-intl";

export function useGetTransaction(id?: string) {
  const t = useTranslations("features.transactions.api.get.singular");

  const query = useQuery({
    enabled: !!id,
    queryKey: ["transaction", { id }],
    queryFn: async () => {
      const response = await client.api.transactions[":id"].$get({
        param: { id },
      });

      if (!response.ok) {
        throw new Error(t("fail"));
      }

      const { data } = await response.json();
      return {
        ...data,
        amount: convertAmountFromMilliunits(data.amount),
      };
    },
  });

  return query;
}
