"use client";

import HomeNavBar from "@/src/app/[locale]/(home)/HomeNavBar";
import HomeFooter from "@/src/app/[locale]/(home)/HomeFooter";
import { useRouter } from "@/src/i18n/routing";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";

type BasicFeatureKeys = "1" | "2" | "3" | "4" | "5";
type ProFeatureKeys = BasicFeatureKeys | "6";

type DynamicMessageKeys =
  | `tiers.basic.features.${BasicFeatureKeys}`
  | `tiers.pro.features.${ProFeatureKeys}`;

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: BasicFeatureKeys[] | ProFeatureKeys[];
  cta: string;
  paid: boolean;
}

export default function Pricing() {
  const t = useTranslations("pricing");

  const router = useRouter();

  const handleClick = (status: boolean) => {
    status ? router.push("/sign-in") : router.push("/sign-up");
  };

  const pricingTiers: PricingTier[] = [
    {
      name: t("tiers.basic.name"),
      price: t("tiers.basic.price"),
      description: t("tiers.basic.description"),
      features: ["1", "2", "3", "4", "5"],
      cta: t("tiers.basic.cta"),
      paid: false,
    },
    {
      name: t("tiers.pro.name"),
      price: t("tiers.pro.price"),
      description: t("tiers.pro.description"),
      features: ["1", "2", "3", "4", "5", "6"],
      cta: t("tiers.pro.cta"),
      paid: true,
    },
  ];

  return (
    <div className="flex h-screen flex-col justify-between">
      <HomeNavBar />

      <section className="flex w-full justify-center py-12">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {t("header.title")}
                </h1>
                <p className="mx-auto max-w-[600px] text-zinc-500 dark:text-zinc-400 md:text-xl">
                  {t("header.subtitle")}
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              {pricingTiers.map((tier: PricingTier) => (
                <Card key={tier.name} className="flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle>{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <ul className="grid gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {tier.features.map((feature) => {
                        const featureKey =
                          `tiers.${tier.paid ? "pro" : "basic"}.features.${feature}` as DynamicMessageKeys;
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
                    <Button
                      className="w-full font-bold"
                      onClick={() => {
                        handleClick(tier.paid);
                      }}
                    >
                      {tier.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <HomeFooter />
    </div>
  );
}
