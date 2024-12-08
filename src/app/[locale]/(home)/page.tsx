import HomeNavBar from "@/src/app/[locale]/(home)/HomeNavBar";
import HomeFooter from "@/src/app/[locale]/(home)/HomeFooter";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("main");

  return (
    <div className="flex h-screen min-w-full flex-col justify-between">
      <HomeNavBar />

      <div className="mx-auto flex w-full max-w-screen-2xl flex-col">
        <div className="flex justify-between px-14 py-10">
          <div className="flex w-96 flex-col gap-7">
            <p className="text-7xl">{t("intro.heading")}</p>
            <p>{t("intro.description")}</p>
            <Button className="py-6 text-xl font-bold">
              {t("intro.buttonLabel")}
            </Button>
          </div>
          <div className="h-[450px] w-[600px] rounded-2xl bg-slate-200"></div>
        </div>

        <div
          id="features"
          className="flex items-center justify-between px-14 py-10"
        >
          <div className="h-[450px] w-[600px] rounded-2xl bg-slate-200"></div>
          <div className="flex w-96 flex-col gap-7">
            <p className="text-4xl">{t("features.feature1.heading")}</p>
            <p>{t("features.feature1.description")}</p>
          </div>
        </div>

        <div className="flex items-center justify-between px-14 py-10">
          <div className="flex w-96 flex-col gap-7">
            <p className="text-4xl">{t("features.feature2.heading")}</p>
            <p>{t("features.feature2.description")}</p>
          </div>
          <div className="h-[450px] w-[600px] rounded-2xl bg-slate-200"></div>
        </div>

        <div className="flex items-center justify-between px-14 py-10">
          <div className="h-[450px] w-[600px] rounded-2xl bg-slate-200"></div>
          <div className="flex w-96 flex-col gap-7">
            <p className="text-4xl">{t("features.feature3.heading")}</p>
            <p>{t("features.feature3.description")}</p>
          </div>
        </div>

        <div className="flex items-center justify-between px-14 py-10">
          <div className="flex w-96 flex-col gap-7">
            <p className="text-4xl">{t("features.feature4.heading")}</p>
            <p>{t("features.feature4.description")}</p>
          </div>
          <div className="h-[450px] w-[600px] rounded-2xl bg-slate-200"></div>
        </div>
      </div>

      <HomeFooter />
    </div>
  );
}
