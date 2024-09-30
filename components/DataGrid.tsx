"use client";

import { useGetSummary } from "@/features/summary/api/useGetSummary";
import { formatDateRange } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { DataCard } from "@/components/DataCard";

import { FaPiggyBank } from "react-icons/fa";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

export function DataGrid() {
  const { data } = useGetSummary();

  const params = useSearchParams();
  const to = params.get("to") || undefined;
  const from = params.get("from") || undefined;

  const dateRangeLabel = formatDateRange({ to, from });

  return (
    <div className="mb-6 grid grid-cols-1 gap-8 pb-2 lg:grid-cols-3">
      <DataCard
        title="Remaining"
        value={data?.remainingAmount}
        percentageChange={data?.remainingChange}
        icon={FaPiggyBank}
        variant="default"
        dateRange={dateRangeLabel}
      />
      <DataCard
        title="Income"
        value={data?.incomeAmount}
        percentageChange={data?.incomeChange}
        icon={FaArrowTrendUp}
        variant="default"
        dateRange={dateRangeLabel}
      />
      <DataCard
        title="Expenses"
        value={data?.expensesAmount}
        percentageChange={data?.expensesChange}
        icon={FaArrowTrendDown}
        variant="default"
        dateRange={dateRangeLabel}
      />
    </div>
  );
}
