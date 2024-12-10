"use client";

import HomeNavBar from "@/src/app/[locale]/(home)/HomeNavBar";
import HomeFooter from "@/src/app/[locale]/(home)/HomeFooter";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";

import {
  Form,
  FormItem,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MailIcon } from "lucide-react";
import { FaTelegram } from "react-icons/fa6";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";

export default function Contacts() {
  const t = useTranslations("contacts");

  const formSchema = z.object({
    name: z
      .string()
      .min(2, {
        message: t("form.errors.name.min"),
      })
      .max(30, {
        message: t("form.errors.name.max"),
      }),
    company: z
      .string()
      .min(2, {
        message: t("form.errors.company.min"),
      })
      .max(30, {
        message: t("form.errors.company.max"),
      })
      .optional(),
    contacts: z.union([
      z.string().refine(isEmail, {
        message: t("form.errors.contacts"),
      }),
      z.string().refine(isMobilePhone, {
        message: t("form.errors.contacts"),
      }),
    ]),
    message: z.string().max(200, {
      message: t("form.errors.message"),
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    alert(values);
  };

  return (
    <div className="flex h-screen flex-col justify-between">
      <HomeNavBar />

      <div className="flex justify-center gap-14 py-8">
        <div className="flex max-w-80 flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="font-bold">{t("header.name")}</p>
            <h1 className="font-bold sm:text-4xl xl:text-5xl/none">
              {t("header.title")}
            </h1>
            <p className="text-slate-500">{t("header.subtitle")}</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950">
                <MailIcon fill="white" className="h-5 w-5" />
              </div>
              <Link className="text-base font-medium" href="#">
                {t("contactInfo.email")}
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <FaTelegram className="h-8 w-8" />
              <Link className="text-base font-medium" href="#">
                {t("contactInfo.telegram")}
              </Link>
            </div>
          </div>
        </div>

        <Card>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4 p-8"
            >
              <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">
                        {t("form.labels.name")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("form.placeholders.name")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">
                        {t("form.labels.company")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("form.placeholders.company")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="contacts"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">
                      {t("form.labels.contacts")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("form.placeholders.contacts")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">
                      {t("form.labels.message")}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t("form.placeholders.message")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="font-semibold">
                {t("form.button")}
              </Button>
            </form>
          </Form>
        </Card>
      </div>

      <HomeFooter />
    </div>
  );
}
