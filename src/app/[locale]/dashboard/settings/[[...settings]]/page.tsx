"use client";

import { UserProfile } from "@clerk/nextjs";
import { AppWindow } from "lucide-react";
import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";
import { LocaleSelect } from "@/src/app/[locale]/(home)/LocaleSelect";

function Preferences() {
  const t = useTranslations("dashboard.settings.preferences");

  return (
    <div className="flex flex-col justify-between">
      <p className="mb-4 text-[17px] font-bold">{t("title")}</p>
      <Separator />
      <div className="flex items-center gap-6 py-4">
        <p className="w-[175px] text-[13px] font-medium">{t("selectLang")}</p>
        <LocaleSelect short={false} />
      </div>
    </div>
  );
}

const PreferencesIcon = () => {
  return (
    <div className="flex h-full w-full items-center">
      <AppWindow width="16px" />
    </div>
  );
};

export default function Settings() {
  const t = useTranslations("dashboard.settings.preferences");

  return (
    <div className="mx-auto -mt-24 flex w-full max-w-screen-2xl justify-center pb-10">
      <UserProfile>
        <UserProfile.Page
          label={t("title")}
          labelIcon={<PreferencesIcon />}
          url="preferences"
        >
          <Preferences />
        </UserProfile.Page>
      </UserProfile>
    </div>
  );
}
