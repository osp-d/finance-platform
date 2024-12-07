import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono";
import { useTranslations } from "next-intl";

export function useGetAccount(id?: string) {
  const t = useTranslations("features.accounts.api.get.singular");

  const query = useQuery({
    enabled: !!id,
    queryKey: ["accounts", { id }],
    queryFn: async () => {
      const response = await client.api.accounts[":id"].$get({ param: { id } });

      if (!response.ok) {
        throw new Error(t("fail"));
      }

      const { data } = await response.json();
      return data;
    },
  });

  return query;
}
