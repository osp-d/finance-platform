import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono";
import { useTranslations } from "next-intl";
import { revalidatePath } from "next/cache";

export function useGetSubscriptions() {
  const t = useTranslations("features.plans.api.getSubscriptions");

  const query = useQuery({
    queryKey: ["subscriptions"],
    queryFn: async () => {
      const response = await client.api.plans["subscriptions"].$get();

      if (!response.ok) {
        throw new Error(t("fail"));
      }

      const { data } = await response.json();

      revalidatePath("/");

      return data;
    },
  });

  return query;
}
