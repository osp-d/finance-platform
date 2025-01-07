import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { SubscribeBtn } from "@/src/app/[locale]/dashboard/plans/SubscribeBtn";
import { useTranslations } from "next-intl";
import { NewPlan, NewSubscription } from "@/db/schema";
import { useGetSubscriptions } from "@/features/plans/api/useGetSubscriptions";

type BasicFeatureKeys = "1" | "2" | "3" | "4" | "5";
type ProFeatureKeys = BasicFeatureKeys | "6";

type DynamicMessageKeys =
  | `tiers.basic.features.${BasicFeatureKeys}`
  | `tiers.pro.features.${ProFeatureKeys}`;

interface PricingTier {
  name: string;
  description: string;
  features: BasicFeatureKeys[] | ProFeatureKeys[];
  cta: string;
  paid: boolean;
}

export function Plan({ plan, index }: { plan: NewPlan; index: number }) {
  const t = useTranslations("pricing");
  const { productId, productName, price, id } = plan;
  const subscriptionData = useGetSubscriptions();
  const userSubscriptions = subscriptionData.data as NewSubscription[];

  let currentPlan: NewPlan | boolean = false;

  // console.log(userSubscriptions[0]?.subscriptionItemId);

  if (userSubscriptions === undefined && productName === "Basic") {
    currentPlan = true;
  } else if (userSubscriptions === undefined) {
    currentPlan = false;
  } else if (userSubscriptions[0].subscriptionItemId === id) {
    currentPlan = plan;
  }

  const pricingTiers: PricingTier[] = [
    {
      name: t("tiers.basic.name"),
      description: t("tiers.basic.description"),
      features: ["1", "2", "3", "4", "5"],
      cta: t("tiers.basic.cta"),
      paid: false,
    },
    {
      name: t("tiers.pro.name"),
      description: t("tiers.pro.description"),
      features: ["1", "2", "3", "4", "5", "6"],
      cta: t("tiers.pro.cta"),
      paid: true,
    },
  ];

  return (
    <Card key={productId} className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{productName}</CardTitle>
        <CardDescription>{pricingTiers[index].description}</CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4">
        <span className="text-4xl font-bold">
          {formatCurrency(+price / 100)}
        </span>
        <ul className="grid gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          {pricingTiers[index].features.map((feature) => {
            const featureKey =
              `tiers.${pricingTiers[index].paid ? "pro" : "basic"}.features.${feature}` as DynamicMessageKeys;
            return (
              <li key={featureKey} className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                {t(featureKey)}
              </li>
            );
          })}
        </ul>
      </CardContent>

      <CardFooter>
        <SubscribeBtn plan={plan} currentPlan={currentPlan} />
      </CardFooter>
    </Card>
  );
}
