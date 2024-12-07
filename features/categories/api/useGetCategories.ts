import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono";
import { useTranslations } from "next-intl";

export function useGetCategories() {
  const t = useTranslations("features.categories.api.get.plural");

  const query = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await client.api.categories.$get();

      if (!response.ok) {
        throw new Error(t("fail"));
      }

      const { data } = await response.json();
      return data;
    },
  });

  return query;
}
