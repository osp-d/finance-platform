"use client";

import { useUser } from "@clerk/nextjs";
import { useTranslations } from "next-intl";

export function WelcomeMessage() {
  const t = useTranslations("components.welcomeMessage");

  const { user, isLoaded } = useUser();

  return (
    <div className="pt-8 text-white">
      <h2 className="text-2xl font-medium lg:text-4xl">
        {t("title")}
        {isLoaded ? ", " : " "}
        {user?.firstName}
      </h2>
      <p className="text-sm text-neutral-200 lg:text-base">{t("subtitle")}</p>
    </div>
  );
}
