import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="flex h-full flex-col items-center justify-start px-4">
        <div className="space-y-4 pt-16 text-center">
          <h1 className="text-3xl font-bold text-[#3a3849]">Welcome back</h1>
          <p className="text-base text-[#9097a1] text-muted-foreground">
            Log in or create account to access the dashboard
          </p>
        </div>
        <div className="mt-8 flex items-center justify-center">
          <ClerkLoaded>
            <SignUp />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      <div className="hidden h-full items-center justify-center bg-zinc-600 lg:flex">
        <Image src={"/logo.svg"} alt="logo" height={180} width={180} />
      </div>
    </div>
  );
}
