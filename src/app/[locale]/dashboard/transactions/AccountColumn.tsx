import { useOpenAccount } from "@/features/accounts/hooks/useOpenAccount";

type Props = {
  account: string;
  accountId: string;
};

export function AccountColumn({ account, accountId }: Props) {
  const { onOpen } = useOpenAccount();

  const onClick = () => {
    onOpen(accountId);
  };

  return (
    <div
      className="flex cursor-pointer items-center hover:underline"
      onClick={onClick}
    >
      {account}
    </div>
  );
}
