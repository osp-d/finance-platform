"use client";

import { useState, useEffect } from "react";
import { useRouter } from "@/src/i18n/routing";
import { Loader2 } from "lucide-react";
import { Button } from "@lemonsqueezy/wedges";
import { getCheckoutURL } from "@/features/plans/actions/actions";
import { NewPlan } from "@/db/schema";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export function SubscribeBtn(props: {
  plan: NewPlan;
  currentPlan?: NewPlan | boolean;
  embed?: boolean;
}) {
  const t = useTranslations("dashboard.page.plans");
  const { plan, currentPlan, embed = true } = props;
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const isCurrent =
    typeof currentPlan !== "boolean"
      ? plan.id === currentPlan?.id
      : currentPlan;

  const label = isCurrent ? t("current") : t("new");

  useEffect(() => {
    if (typeof window.createLemonSqueezy === "function") {
      window.createLemonSqueezy();
    }
  }, []);

  return (
    <Button
      before={
        loading ? (
          <Loader2 className="animate-spin text-muted-foreground" />
        ) : undefined
      }
      disabled={loading || isCurrent}
      onClick={async () => {
        let checkoutUrl: string | undefined = "";

        try {
          setLoading(true);
          checkoutUrl = await getCheckoutURL(plan.variantId, embed);
        } catch (error) {
          setLoading(false);
          toast("Error creating a checkout.", {
            description:
              "Please check the server console for more information.",
          });
        } finally {
          embed && setLoading(false);
        }

        embed
          ? checkoutUrl && window.LemonSqueezy.Url.Open(checkoutUrl)
          : router.push(checkoutUrl ?? "/");
      }}
      className="w-full rounded-md font-bold"
    >
      {label}
    </Button>
  );
}
