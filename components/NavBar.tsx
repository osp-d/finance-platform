"use client";

import { NavButton } from "@/components/NavButton";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useMedia } from "react-use";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/src/i18n/routing";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isMobile = useMedia("(max-width: 1024px", false);
  const pathname = usePathname();
  const t = useTranslations("navBar");
  const routes = [1, 2, 3, 4, 5] as const;

  const onClick = (href: string) => {
    console.log(href);
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <div className="focus:bg-white-30 rounded-sm border-none bg-white/10 p-2 font-normal text-white outline-none transition hover:bg-white/20 focus-visible:ring-transparent focus-visible:ring-offset-0">
            <Menu className="size-4" />
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="bg-white p-2">
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map((route) => {
              return (
                <Button
                  key={t(`${route}.href`)}
                  variant={
                    t(`${route}.href`) === pathname ? "secondary" : "ghost"
                  }
                  onClick={() => onClick(t(`${route}.href`))}
                  className="w-full justify-start"
                >
                  {t(`${route}.label`)}
                </Button>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="hidden items-center gap-x-2 overflow-x-auto lg:flex">
      {routes.map((route) => {
        return (
          <NavButton
            key={t(`${route}.href`)}
            href={t(`${route}.href`)}
            label={t(`${route}.label`)}
            isActive={pathname === t(`${route}.href`)}
          />
        );
      })}
    </nav>
  );
}
