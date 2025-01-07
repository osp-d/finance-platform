// import { getUserSubscriptions } from "@/features/plans/actions/actions";
// import { Subscription } from "@lemonsqueezy/lemonsqueezy.js";
import { useGetPlans } from "@/features/plans/api/useGetPlans";
import { Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import { useTranslations } from "next-intl";
import { Plan } from "./Plan";

export function Plans() {
  const t = useTranslations("dashboard.page.plans");
  const plansQuery = useGetPlans();
  const allPlans = plansQuery.data;

  // const userSubscriptions = await getUserSubscriptions();

  // Do not show plans if the user already has a valid subscription.
  // if (userSubscriptions.length > 0) {
  //   const hasValidSubscription = userSubscriptions.some((subscription) => {
  //     const status =
  //       subscription.status as Subscription["data"]["attributes"]["status"];

  //     return (
  //       status !== "cancelled" && status !== "expired" && status !== "unpaid"
  //     );
  //   });

  //   if (hasValidSubscription && !isChangingPlans) {
  //     return null;
  //   }
  // }

  if (plansQuery.isLoading) {
    return (
      <div className="mx-auto -mt-24 w-full max-w-screen-2xl pb-10">
        <Card className="border-none drop-shadow-sm">
          <CardContent className="flex h-[500px] w-full items-center justify-center">
            <Loader2 className="size-6 animate-spin text-slate-300" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!allPlans?.length || allPlans === undefined) {
    return (
      <div className="mx-auto -mt-24 w-full max-w-screen-2xl pb-10">
        <Card className="border-none drop-shadow-sm">
          <CardContent className="flex h-[500px] w-full items-center justify-center py-12">
            <p className="text-xl font-semibold">{t("unavailable")}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
      {allPlans.map((plan, index) => (
        <Plan key={index} plan={plan} index={index} />
      ))}
    </div>
  );
}
