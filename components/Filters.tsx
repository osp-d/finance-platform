import { AccountFilter } from "@/components/AccountFilter";
import { DateFilter } from "@/components/DateFilter";

export function Filters() {
  return (
    <div className="my-2 flex flex-col items-center gap-y-2 lg:flex-row lg:gap-x-2 lg:gap-y-0">
      <AccountFilter />
      <DateFilter />
    </div>
  );
}
