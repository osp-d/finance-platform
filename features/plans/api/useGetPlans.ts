import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono";
import { useTranslations } from "next-intl";
import { syncPlans } from "@/features/plans/actions/actions";
import { NewPlan } from "@/db/schema";

export function useGetPlans() {
  const t = useTranslations("features.plans.api.getPlans");

  const query = useQuery({
    queryKey: ["plans"],
    queryFn: async () => {
      const response = await client.api.plans.$get();

      if (!response.ok) {
        throw new Error(t("fail"));
      }

      let { data }: { data: NewPlan[] } = await response.json();

      if (!data.length) {
        data = await syncPlans();
      }

      if (!data.length) {
        return undefined;
      }

      return data;
    },
  });

  return query;
}
