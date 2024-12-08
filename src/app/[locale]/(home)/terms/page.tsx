import HomeNavBar from "@/src/app/[locale]/(home)/HomeNavBar";
import HomeFooter from "@/src/app/[locale]/(home)/HomeFooter";
import { useTranslations } from "next-intl";

export default function TermsOfService() {
  const t = useTranslations("termsOfService");

  return (
    <div className="flex h-screen flex-col justify-between">
      <HomeNavBar />

      <header className="py-6 text-center">
        <h1 className="text-2xl font-bold">{t("header.title")}</h1>
      </header>

      <main className="mx-auto mb-6 max-w-4xl rounded-md bg-white px-10 pb-10 pt-2 shadow-md">
        <section>
          <p className="mt-4">
            {t("sections.section1.content1")}
            <strong>{t("sections.section1.content2")}</strong>
            {t("sections.section1.content3")}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">
            {t("sections.section2.title")}
          </h2>
          <p className="mt-4">{t("sections.section2.content")}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">
            {t("sections.section3.title")}
          </h2>
          <p className="mt-4">{t("sections.section3.content")}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">
            {t("sections.section4.title")}
          </h2>
          <ul className="mt-4 list-disc pl-5">
            <li>{t("sections.section4.content.responsibility1")}</li>
            <li>{t("sections.section4.content.responsibility2")}</li>
            <li>{t("sections.section4.content.responsibility3")}</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">
            {t("sections.section5.title")}
          </h2>
          <p className="mt-4">{t("sections.section5.note")}</p>
          <ul className="mt-4 list-disc pl-5">
            <li>{t("sections.section5.content.prohibition1")}</li>
            <li>{t("sections.section5.content.prohibition2")}</li>
            <li>{t("sections.section5.content.prohibition3")}</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">
            {t("sections.section6.title")}
          </h2>
          <p className="mt-4">{t("sections.section6.content")}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">
            {t("sections.section7.title")}
          </h2>
          <p className="mt-4">{t("sections.section7.content")}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">
            {t("sections.section8.title")}
          </h2>
          <p className="mt-4">{t("sections.section8.content")}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">
            {t("sections.section9.title")}
          </h2>
          <p className="mt-4">{t("sections.section9.content")}</p>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}
