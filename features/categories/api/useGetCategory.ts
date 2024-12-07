import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono";
import { useTranslations } from "next-intl";

export function useGetCategory(id?: string) {
  const t = useTranslations("features.categories.api.get.singular");

  const query = useQuery({
    enabled: !!id,
    queryKey: ["category", { id }],
    queryFn: async () => {
      const response = await client.api.categories[":id"].$get({
        param: { id },
      });

      if (!response.ok) {
        throw new Error(t("fail"));
      }

      const { data } = await response.json();
      return data;
    },
  });

  return query;
}
