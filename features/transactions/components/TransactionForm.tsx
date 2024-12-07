import { z } from "zod";
import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertTransactionsSchema } from "@/db/schema";
import { convertAmountToMilliunits } from "@/lib/utils";

import { Select } from "@/components/Select";
import { DatePicker } from "@/components/DatePicker";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormItem,
  FormControl,
  FormField,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { AmountInput } from "@/components/AmountInput";
import { useTranslations } from "next-intl";

const FormSchema = z.object({
  date: z.coerce.date(),
  accountId: z.string(),
  categoryId: z.string().nullable().optional(),
  payee: z.string(),
  amount: z.string(),
  notes: z.string().nullable().optional(),
});

const ApiSchema = insertTransactionsSchema.omit({ id: true });

type FormValues = z.input<typeof FormSchema>;
type ApiFormValues = z.input<typeof ApiSchema>;

type Props = {
  id?: string;
  defaultValues?: FormValues;
  onSubmit: (values: ApiFormValues) => void;
  onDelete?: () => void;
  disabled?: boolean;
  categoryOptions: { label: string; value: string }[];
  onCreateCategory: (name: string) => void;
  accountOptions: { label: string; value: string }[];
  onCreateAccount: (name: string) => void;
};

export const TransactionForm = ({
  id,
  defaultValues,
  onSubmit,
  onDelete,
  disabled,
  categoryOptions,
  onCreateCategory,
  accountOptions,
  onCreateAccount,
}: Props) => {
  const t = useTranslations("features.transactions.components.form");

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: defaultValues,
  });

  const handleSubmit = (values: FormValues) => {
    const amount = parseFloat(values.amount);
    const amountInMilliunits = convertAmountToMilliunits(amount);

    onSubmit({
      ...values,
      amount: amountInMilliunits,
    });
  };

  const handleDelete = () => {
    onDelete?.();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-2"
      >
        <FormField
          name="date"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <DatePicker
                  value={field.value}
                  onChange={field.onChange}
                  disabled={disabled}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="accountId"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">{t("account.title")}</FormLabel>
              <FormControl>
                <Select
                  placeholder={t("account.placeholder")}
                  value={field.value}
                  onChange={field.onChange}
                  onCreate={onCreateAccount}
                  options={accountOptions}
                  disabled={disabled}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="categoryId"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">{t("category.title")}</FormLabel>
              <FormControl>
                <Select
                  placeholder={t("category.placeholder")}
                  value={field.value}
                  onChange={field.onChange}
                  onCreate={onCreateCategory}
                  options={categoryOptions}
                  disabled={disabled}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="payee"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">{t("payee.title")}</FormLabel>
              <FormControl>
                <Input
                  disabled={disabled}
                  placeholder={t("payee.placeholder")}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="amount"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">{t("amount.title")}</FormLabel>
              <FormControl>
                <AmountInput
                  {...field}
                  disabled={disabled}
                  placeholder={t("amount.placeholder")}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="notes"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">{t("notes.title")}</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  value={field.value ?? ""}
                  disabled={disabled}
                  placeholder={t("notes.placeholder")}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button className="w-full" disabled={disabled}>
          {id ? t("save") : t("create")}
        </Button>

        {!!id && (
          <Button
            type="button"
            disabled={disabled}
            onClick={handleDelete}
            className="w-full gap-2"
            variant="outline"
          >
            <Trash className="size-4" />
            {t("del")}
          </Button>
        )}
      </form>
    </Form>
  );
};
