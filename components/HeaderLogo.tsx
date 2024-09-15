import Image from "next/image";
import Link from "next/link";

export function HeaderLogo() {
  return (
    <div>
      <Link href={"/"}>
        <div className="hidden items-center gap-2 lg:flex">
          <Image src="/logo.svg" alt="logo" width={32} height={32} />
          <p className="font- text-xl font-semibold text-white">Finance</p>
        </div>
      </Link>
    </div>
  );
}
