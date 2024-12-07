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

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  paid: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    price: "$0.00",
    description: "Essential features for individuals",
    features: [
      "1 account",
      "2 devices",
      "1 year of history",
      "Debt tracking",
      "Basic analytics",
    ],
    cta: "Get Started",
    paid: false,
  },
  {
    name: "Pro",
    price: "$4.99",
    description: "Advanced features for demanding users",
    features: [
      "5 accounts",
      "5 devices",
      "8 years of history",
      "Debt tracking",
      "Advanced analytics",
      "Email support",
    ],
    cta: "Upgrade to Pro",
    paid: true,
  },
];

export default function Pricing() {
  const router = useRouter();

  const handleClick = (status: boolean) => {
    status ? router.push("/sign-in") : router.push("/sign-up");
  };

  return (
    <div className="flex h-screen flex-col justify-between">
      <HomeNavBar />

      <section className="flex w-full justify-center py-12">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Choose Your Plan
                </h1>
                <p className="mx-auto max-w-[600px] text-zinc-500 dark:text-zinc-400 md:text-xl">
                  Select the perfect plan for your needs. Upgrade or downgrade
                  at any time.
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
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <Check className="mr-2 h-4 w-4" />
                          {feature}
                        </li>
                      ))}
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
