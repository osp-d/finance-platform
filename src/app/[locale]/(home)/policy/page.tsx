import HomeNavBar from "@/src/app/[locale]/(home)/HomeNavBar";
import HomeFooter from "@/src/app/[locale]/(home)/HomeFooter";
import { useTranslations } from "next-intl";

export default function PrivacyPolicy() {
  const t = useTranslations("privacyPolicy");
  const t2 = useTranslations("privacyPolicy.sections.section2.subsections");

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
          <p className="mt-4">{t("sections.section2.note")}</p>
          <div className="mt-4">
            <h3 className="text-lg font-bold">{t2("subsection1.title")}</h3>
            <ul className="list-disc pl-5">
              <li>{t2("subsection1.content.accountInformation")}</li>
              <li>{t2("subsection1.content.transactionData")}</li>
              <li>{t2("subsection1.content.csvData")}</li>
              <li>{t2("subsection1.content.contactInformation")}</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold">{t2("subsection2.title")}</h3>
            <ul className="list-disc pl-5">
              <li>{t2("subsection2.content.usageData")}</li>
              <li>{t2("subsection2.content.deviceInformation")}</li>
              <li>
                {t2("subsection2.content.cookiesAndTrackingTechnologies")}
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold">{t2("subsection3.title")}</h3>
            <ul className="list-disc pl-5">
              <li>{t2("subsection3.content.bankingIntegration")}</li>
              <li>{t2("subsection3.content.analyticsTools")}</li>
            </ul>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">
            {t("sections.section3.title")}
          </h2>
          <ul className="mt-4 list-disc pl-5">
            <li>{t("sections.section3.content.use1")}</li>
            <li>{t("sections.section3.content.use2")}</li>
            <li>{t("sections.section3.content.use3")}</li>
            <li>{t("sections.section3.content.use4")}</li>
            <li> {t("sections.section3.content.use5")}</li>
            <li> {t("sections.section3.content.use6")}</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">
            {t("sections.section4.title")}
          </h2>
          <p className="mt-4">{t("sections.section4.note")}</p>
          <ul className="mt-2 list-disc pl-5">
            <li>
              <strong>{t("sections.section4.content.bold1")}</strong>
              {t("sections.section4.content.sharing1")}
            </li>
            <li>
              <strong>{t("sections.section4.content.bold2")}</strong>
              {t("sections.section4.content.sharing2")}
            </li>
            <li>
              <strong>{t("sections.section4.content.bold3")}</strong>
              {t("sections.section4.content.sharing3")}
            </li>
            <li>
              <strong>{t("sections.section4.content.bold4")}</strong>
              {t("sections.section4.content.sharing4")}
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">
            {t("sections.section5.title")}
          </h2>
          <p className="mt-4">{t("sections.section5.content")}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">
            {t("sections.section6.title")}
          </h2>
          <p className="mt-4">{t("sections.section6.note")}</p>
          <p className="mb-2 mt-4 font-bold">
            {t("sections.section6.subsections.subsection1.title")}
          </p>
          <p>{t("sections.section6.subsections.subsection1.content")}</p>
          <p className="mb-2 mt-4 font-bold">
            {t("sections.section6.subsections.subsection2.title")}
          </p>
          <p>{t("sections.section6.subsections.subsection2.content")}</p>
          <p className="mb-2 mt-4 font-bold">
            {t("sections.section6.subsections.subsection3.title")}
          </p>
          <p>{t("sections.section6.subsections.subsection3.content")}</p>
          <p className="mb-2 mt-4 font-bold">
            {t("sections.section6.subsections.subsection4.title")}
          </p>
          <p>{t("sections.section6.subsections.subsection4.content")}</p>
          <p className="mb-2 mt-4 font-bold">
            {t("sections.section6.subsections.subsection5.title")}
          </p>
          <p>{t("sections.section6.subsections.subsection5.content")}</p>
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
          <p className="mt-4">
            {t("sections.section8.note")}
            <ul className="mt-2 list-disc pl-5">
              <li>{t("sections.section8.content.use1")}</li>
              <li>{t("sections.section8.content.use2")}</li>
              <li>{t("sections.section8.content.use3")}</li>
            </ul>
            <p className="mt-4">{t("sections.section8.content.note")}</p>
          </p>
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
