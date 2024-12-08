import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa6";

export default function HomeFooter() {
  const t = useTranslations("homeFooter");

  return (
    <footer className="bottom-0 flex min-w-full list-none justify-center bg-slate-100 px-14 py-8 text-base text-slate-950">
      <div className="flex w-full max-w-screen-2xl items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-bold">{t("product.title")}</p>
          <Link href="/#start" className="hover:text-slate-600">
            {t("product.about")}
          </Link>
          <Link href="/#features" className="hover:text-slate-600">
            {t("product.features")}
          </Link>
          <Link href="/pricing" className="hover:text-slate-600">
            {t("product.pricing")}
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">{t("community.title")}</p>
          <Link href="/contacts" className="hover:text-slate-600">
            {t("community.contactUs")}
          </Link>
          <Link href="/policy" className="hover:text-slate-600">
            {t("community.privacyPolicy")}
          </Link>
          <Link href="/terms" className="hover:text-slate-600">
            {t("community.termsOfService")}
          </Link>
        </div>

        <div className="flex flex-col gap-4 px-14">
          <div className="flex flex-col gap-1">
            <p className="text-2xl font-bold">Finance</p>
            <p className="text-slate-400">{t("rights")}</p>
          </div>

          <div className="flex gap-2">
            <Link href="">
              <FaTelegram size="24px" className="hover:text-slate-600" />
            </Link>
            <Link href="">
              <FaWhatsapp size="24px" className="hover:text-slate-600" />
            </Link>
            <Link href="">
              <FaInstagram size="24px" className="hover:text-slate-600" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
