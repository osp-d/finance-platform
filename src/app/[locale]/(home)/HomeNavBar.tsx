import {
  NavigationMenu,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";

export default function HomeNavBar() {
  const t = useTranslations("homeNavBar");

  return (
    <NavigationMenu className="max-h-[72px] min-w-full list-none bg-slate-100 px-14 py-5 text-base text-slate-950">
      <div className="flex w-full max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-4 font-medium">
          <NavigationMenuItem>
            <Link
              href="/"
              className="p-2 text-2xl font-bold hover:text-slate-600"
            >
              Finance
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/#features" className="p-2 hover:text-slate-600">
              {t("features")}
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/pricing" className="p-2 hover:text-slate-600">
              {t("pricing")}
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/contacts" className="p-2 hover:text-slate-600">
              {t("contacts")}
            </Link>
          </NavigationMenuItem>
        </div>

        <div className="flex gap-4">
          <NavigationMenuItem>
            <Link
              href="/sign-in"
              className="p-2 font-semibold hover:text-slate-600"
            >
              {t("signIn")}
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link
              href="/sign-up"
              className="rounded-lg bg-slate-950 p-2 px-4 font-semibold text-white hover:bg-slate-600"
            >
              {t("signUp")}
            </Link>
          </NavigationMenuItem>
        </div>
      </div>
    </NavigationMenu>
  );
}
