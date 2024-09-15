import { HeaderLogo } from "./HeaderLogo";
import { NavBar } from "@/components/NavBar";
import { UserButton, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { WelcomeMessage } from "@/components/WelcomeMessage";

export function Header() {
  return (
    <header className="bg-gradient-to-b from-zinc-800 to-zinc-600 px-4 py-8 lg:px-14 lg:pb-36">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-14 flex w-full items-center justify-between">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <NavBar />
          </div>

          <ClerkLoaded>
            <UserButton afterSwitchSessionUrl="/" />
          </ClerkLoaded>

          <ClerkLoading>
            <Loader2 className="size-8 animate-spin text-neutral-400" />
          </ClerkLoading>
        </div>

        <WelcomeMessage />
      </div>
    </header>
  );
}
