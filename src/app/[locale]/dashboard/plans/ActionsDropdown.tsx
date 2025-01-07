"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Loader2, MoreVerticalIcon } from "lucide-react";
import { useState } from "react";
// import { LemonSqueezyModalLink } from "./modal-link";
import { NewSubscription } from "@/db/schema";
import {
  cancelSub,
  pauseUserSubscription,
  unpauseUserSubscription,
  type getSubscriptionURLs,
} from "@/features/plans/actions/actions";

export function SubscriptionActionsDropdown({
  subscription,
  urls,
}: {
  subscription: NewSubscription;
  urls: Awaited<ReturnType<typeof getSubscriptionURLs>>;
}) {
  const [loading, setLoading] = useState(false);

  if (
    subscription.status === "expired" ||
    subscription.status === "cancelled" ||
    subscription.status === "unpaid"
  ) {
    return null;
  }

  return (
    <>
      {loading && (
        <div className="bg-surface-50/50 absolute inset-0 z-10 flex items-center justify-center rounded-md">
          <Loader2 className="animate-spin text-muted-foreground" />
        </div>
      )}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" className="data-[state=open]:bg-surface-50 size-8">
            <MoreVerticalIcon className="size-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent side="bottom" className="z-10" align="end">
          <DropdownMenuGroup>
            {!subscription.isPaused && (
              <DropdownMenuItem
                onClick={async () => {
                  setLoading(true);
                  await pauseUserSubscription(subscription.lemonSqueezyId).then(
                    () => {
                      setLoading(false);
                    },
                  );
                }}
              >
                Pause payments
              </DropdownMenuItem>
            )}

            {subscription.isPaused && (
              <DropdownMenuItem
                onClick={async () => {
                  setLoading(true);
                  await unpauseUserSubscription(
                    subscription.lemonSqueezyId,
                  ).then(() => {
                    setLoading(false);
                  });
                }}
              >
                Unpause payments
              </DropdownMenuItem>
            )}

            <DropdownMenuItem asChild>
              <a href={urls?.customer_portal}>Customer portal ↗</a>
            </DropdownMenuItem>

            {/* <LemonSqueezyModalLink href={urls?.update_payment_method}>
              Update payment method
            </LemonSqueezyModalLink> */}
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={async () => {
                if (
                  // eslint-disable-next-line no-alert -- allow
                  confirm(
                    `Please confirm if you want to cancel your subscription.`,
                  )
                ) {
                  setLoading(true);
                  await cancelSub(subscription.lemonSqueezyId).then(() => {
                    setLoading(false);
                  });
                }
              }}
            >
              Cancel subscription
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
