"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { Plans } from "./Plans";

export default function PlansPage() {
  const t = useTranslations("pricing");

  return (
    <div className="mx-auto -mt-24 w-full max-w-screen-2xl pb-10">
      <Card className="border-none drop-shadow-sm">
        <CardContent>
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

                <Plans />
              </div>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
