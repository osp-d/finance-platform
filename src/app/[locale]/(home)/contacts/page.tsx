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

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters",
    })
    .max(30, {
      message: "Username should not exceed 30 characters",
    }),
  company: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters",
    })
    .max(30, {
      message: "Username should not exceed 30 characters",
    })
    .optional(),
  contacts: z.union([
    z.string().refine(isEmail, {
      message: "Contacts must contain email or mobile number",
    }),
    z.string().refine(isMobilePhone, {
      message: "Contacts must contain email or mobile number",
    }),
  ]),
  message: z.string().max(200, {
    message: "Message should not exceed 200 characters",
  }),
});

export default function Contacts() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    alert(values);
  };

  return (
    <div className="flex h-screen flex-col justify-between">
      <HomeNavBar />

      <div className="flex justify-center gap-10 py-8">
        <div className="flex max-w-80 flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="font-bold">Contact</p>
            <h1 className="font-bold sm:text-5xl xl:text-6xl/none">
              Don&apos;t hesitate to contact us
            </h1>
            <p className="text-slate-500">
              Everyone is welcome: individual clients, companies, possible
              partners, and investors
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950">
                <MailIcon fill="white" className="h-5 w-5" />
              </div>
              <Link className="text-base font-medium" href="#">
                financeplatforminflux@gmail.com
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <FaTelegram className="h-8 w-8" />
              <Link className="text-base font-medium" href="#">
                t.me/fncplatform
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
                      <FormLabel className="font-bold">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
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
                      <FormLabel className="font-bold">Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Company Name" {...field} />
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
                    <FormLabel className="font-bold">Contacts</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Write your email or phone"
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
                    <FormLabel className="font-bold">Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your Message" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="font-semibold">
                Submit
              </Button>
            </form>
          </Form>
        </Card>
      </div>

      <HomeFooter />
    </div>
  );
}
