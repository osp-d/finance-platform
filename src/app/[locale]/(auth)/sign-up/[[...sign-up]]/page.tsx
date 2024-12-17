"use client";

import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { ArrowLeftIcon, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "@/src/i18n/routing";

export default function SignUpPage() {
  const t = useTranslations("signIn");
  const router = useRouter();

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="flex h-full flex-col items-center justify-start px-4">
        <div className="mt-4 flex items-center gap-3 self-start text-[#9097a1] text-muted-foreground">
          <div
            className="rounded-md p-2 hover:bg-zinc-100"
            onClick={() => {
              router.push("/");
            }}
          >
            <ArrowLeftIcon />
          </div>
          {t("back")}
        </div>

        <div className="space-y-4 pt-14 text-center">
          <h1 className="text-3xl font-bold text-[#3a3849]">{t("title")}</h1>
          <p className="text-base text-[#9097a1] text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="my-8 flex items-center justify-center">
          <ClerkLoaded>
            <SignUp />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      <div className="hidden h-full items-center justify-center bg-zinc-800 lg:flex">
        <Image src={"/logo.svg"} alt="logo" height={180} width={180} />
      </div>
    </div>
  );
}
